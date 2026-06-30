#!/usr/bin/env python3
"""
research-apps.py KEYWORD1 KEYWORD2 ...
Runs Steps 2b–2d of the iOS ideation pipeline:
  iTunes search → SensorTower revenue → 1–2★ reviews
Claude handles Step 2e (cluster and gap analysis).
"""

import json
import sys
import urllib.parse
import urllib.request


def fetch(url, timeout=10):
    try:
        with urllib.request.urlopen(url, timeout=timeout) as r:
            return json.loads(r.read().decode("utf-8", errors="replace"))
    except Exception:
        return None


def parse_revenue(s):
    if not s or s in ("N/A", "< $5k"):
        return 0
    s = s.replace("$", "").replace(",", "").strip()
    if s.endswith("m"):
        return float(s[:-1]) * 1_000_000
    if s.endswith("k"):
        return float(s[:-1]) * 1_000
    try:
        return float(s)
    except Exception:
        return 0


if __name__ == "__main__":
    keywords = sys.argv[1:]
    if not keywords:
        print("Usage: research-apps.py keyword1 keyword2 ...", file=sys.stderr)
        sys.exit(1)

    # 2b — iTunes search
    print("=== STEP 2b: iTunes Search ===")
    seen: dict[str, int] = {}
    for kw in keywords:
        encoded = urllib.parse.quote_plus(kw)
        data = fetch(
            f"https://itunes.apple.com/search?term={encoded}&entity=software&limit=10&country=us"
        )
        if not data:
            continue
        for app in data.get("results", []):
            if app.get("userRatingCount", 0) < 500:
                continue
            tid = str(app["trackId"])
            if tid not in seen:
                seen[tid] = app["userRatingCount"]
                print(f"{app['userRatingCount']}\t{tid}\t{app.get('trackName', '?')}")

    top10 = sorted(seen.keys(), key=lambda x: seen[x], reverse=True)[:10]
    if not top10:
        print("No apps found with 500+ ratings.", file=sys.stderr)
        sys.exit(1)

    ids_str = ",".join(top10)

    # 2c — SensorTower
    print("\n=== STEP 2c: SensorTower Revenue ===")
    st_data = fetch(f"https://app.sensortower.com/api/ios/apps?app_ids={ids_str}")
    apps_raw = st_data.get("apps", []) if st_data else []

    app_name_map: dict[str, str] = {}
    rows = []
    for a in apps_raw:
        rev = (a.get("humanized_worldwide_last_month_revenue") or {}).get("string", "N/A")
        dl = (a.get("humanized_worldwide_last_month_downloads") or {}).get("string", "N/A")
        row = {
            "name": a.get("name", "?"),
            "revenue": rev,
            "downloads": dl,
            "rating": a.get("rating", 0),
            "rating_count": a.get("rating_count", 0),
            "app_id": str(a.get("app_id", "")),
        }
        rows.append(row)
        app_name_map[row["app_id"]] = row["name"]
        print(
            f"{row['name']}\t{rev}\t{dl}\t{row['rating']}\t{row['rating_count']}\t{row['app_id']}"
        )

    rows.sort(key=lambda r: parse_revenue(r["revenue"]), reverse=True)
    top5_ids = [r["app_id"] for r in rows[:5]]

    # 2d — Bad reviews
    print("\n=== STEP 2d: Bad Reviews (1–2★) ===")
    for app_id in top5_ids:
        name = app_name_map.get(app_id, app_id)
        print(f"\n--- {name} ({app_id}) ---")
        found = 0
        for page in range(1, 11):
            url = (
                f"https://itunes.apple.com/us/rss/customerreviews/id={app_id}"
                f"/page={page}/sortBy=mostRecent/json"
            )
            data = fetch(url)
            if not data:
                break
            entries = data.get("feed", {}).get("entry", [])
            if not entries:
                break
            for e in entries:
                try:
                    rating = int(e.get("im:rating", {}).get("label", 5))
                except Exception:
                    continue
                if rating <= 2:
                    body = e.get("content", {}).get("label", "")
                    if body:
                        print(f"[{rating}★] {body[:250]}")
                        found += 1
        if found == 0:
            print("(no 1–2★ reviews found)")
