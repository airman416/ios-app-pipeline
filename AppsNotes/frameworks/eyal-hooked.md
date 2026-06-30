# Hooked — Nir Eyal (Key Extracts for iOS App System)

Source: Full book read (Portfolio/Penguin, 2014, with Ryan Hoover). Apply across the pipeline — but especially Stage 1 (Ideation, habit zone test), Stage 4 (UI/UX, Fogg model), Stage 5 (Onboarding, first hook cycle), and most of all Stage 6 (Retention Loops, where Hooked IS the playbook).

## Core Thesis

Habits — "behaviors done with little or no conscious thought" — are the path to defensible, high-margin products that grow without paid acquisition. Companies that succeed in attaching their product to internal triggers (emotions, routines, places, situations) get unprompted user engagement. This is not just nice to have; it is the new basis of competitive advantage as ad-wary consumers ignore Madison-Avenue persuasion and switch costs collapse.

Eyal's structural claim: the convergence of *access, data, and speed* (always-connected devices, mass behavioral data, real-time iteration) is making the world a more habit-forming place. Paul Graham quote that anchors the book: "Unless the forms of technological progress that produced these things are subject to different laws than technological progress in general, the world will get more addictive in the next 40 years than it did in the last 40."

Key claims:

- A habit is a behavior the brain has codified as a shortcut. The basal ganglia stores it. Once stored, it fires automatically in response to a cue, freeing conscious attention for other things.
- "First to mind wins." A product becomes the default solution to a felt need. When you feel bored, you open Twitter. When you feel lonely, you open Facebook. When you have a question, you Google. The first-to-mind solution captures the behavior.
- Habit-forming companies enjoy four business benefits: (1) higher Customer Lifetime Value, (2) pricing flexibility (Buffett: "you can determine the strength of a business over time by the amount of agony they go through in raising prices"), (3) supercharged growth via viral loops driven by more-is-more daily usage, (4) competitive moats from stored value and switching costs.
- The Gourville 9x rule: new products must be 9x better than the incumbent to dislodge an existing habit, because "consumers irrationally overvalue the old while companies irrationally overvalue the new."
- LIFO behavior: most recently acquired behaviors are also the first to vanish. Old neural pathways stay etched and reactivate the moment focus slips. Two-thirds of alcoholics relapse within a year. Nearly everyone who diets gains it back within two years.
- Habit potential is a function of TWO axes: **frequency** (how often the behavior occurs) and **perceived utility** (how useful/rewarding it is vs alternatives). Plot these and you get the "Habit Zone." Below the curve, no habit. The curve never touches the perceived-utility axis — no matter how high utility goes, infrequent behaviors do not become habits. But low-utility behaviors can still become habits if they happen often enough.
- Habit formation timelines vary. A 2010 study found some habits formed in weeks, others took five months. The flossing study (Judah, Gardner, Aunger, 2013) confirmed that frequency and attitude change are the two main drivers.

### Vitamins vs Painkillers (great products are both)

Investors love painkillers (solve obvious pain, quantifiable demand: Tylenol). They dismiss vitamins ("we don't really know if multivitamins work; we take them anyway to feel virtuous").

Eyal's reframe: *habit-forming products start as vitamins and become painkillers.* No one woke up screaming for Facebook status updates. But once the habit is formed, not using the product creates "a slight pain or itch" the user is now compelled to scratch. The product creates its own demand by training the user.

> A habit is when not doing an action causes a bit of pain.

This is a crucial mental model for a subscription iOS app: you do not need to solve an existing painkiller-grade problem at launch. You need to *manufacture the itch* through repeated cycles.

### Habits vs Addictions (the moral distinction)

Eyal is careful: habits are not addictions. Addictions are "persistent, compulsive dependencies on a behavior or substance" that are by definition self-destructive. Habits can be healthy or unhealthy. Building products that intentionally addict users (the 1% pathological tail) is irresponsible. Building products that form healthy habits is legitimate. The Manipulation Matrix (later) is the ethical test.

---

## The Hook Model (overview)

Four phases, in this order, run repeatedly:

1. **Trigger** — external (cue from environment) or internal (cue from inside the user's head, usually an emotion).
2. **Action** — the simplest behavior done in anticipation of reward.
3. **Variable Reward** — solves the user's problem, but with unpredictability that creates craving.
4. **Investment** — the user puts in a bit of work (data, content, social capital, money, effort) that improves the product for next time AND loads the next trigger.

**It is a cycle, not a funnel.** Funnels end. Hooks loop. The point of one cycle is to set up the next. Through successive passes, external triggers are replaced by internal triggers, low-engagement users become high-engagement users, and low-preference users become high-preference users.

Eyal's five diagnostic questions to test a hook (Chapter 6):

1. What do users really want? What pain is your product relieving? (Internal trigger)
2. What brings users to your service? (External trigger)
3. What is the simplest action users take in anticipation of reward, and how can you simplify your product to make this action easier? (Action)
4. Are users fulfilled by the reward yet left wanting more? (Variable reward)
5. What "bit of work" do users invest in your product? Does it load the next trigger and store value to improve the product with use? (Investment)

---

## Phase 1: Triggers

A trigger is "the actuator of behavior — the spark plug in the engine." Without a trigger, nothing happens. Triggers come in two kinds.

### External triggers

Sensory cues in the environment that contain embedded information about what to do next. Eyal's example: a Coca-Cola vending machine with "Thirsty?" plus a friendly man holding a Coke — the image, the text, and the slot for cash all tell you what to do. The Mint.com email with a single big "Log in to Mint" button is another. *Too many choices freeze the user.* Reduce options ruthlessly.

Four types of external triggers:

- **Paid triggers** — ads, search marketing. Effective but expensive. Habit-forming companies use them sparingly, mostly for acquisition, then hand off to other trigger types. "Imagine if Facebook or Twitter needed to buy an ad to prompt users to revisit their sites — these companies would soon go broke."
- **Earned triggers** — press, viral videos, App Store featured placement. Free in dollar terms, but require ongoing PR investment, and spikes are short-lived.
- **Relationship triggers** — friend-to-friend (an Instagram photo shared to Facebook, a PayPal payment notification, word of mouth). Often the engine of viral hyper-growth. Warning: dark patterns (tricking users into spamming their contacts) generate short-term growth at the cost of long-term trust. Don't.
- **Owned triggers** — push notifications, app icons on the home screen, email newsletters, app badges. They consume *real estate* in the user's environment. They require explicit opt-in (install, sign up, subscribe). *Owned triggers are how you re-engage users until the habit forms.* Paid/earned/relationship acquire; owned retains.

The ultimate point of all external triggers is to propel the user through enough Hook cycles that internal triggers take over.

### Internal triggers

Internal triggers manifest automatically in the mind. They are associations stored in memory between a feeling, situation, place, or routine and the product.

> Connecting internal triggers with a product is the brass ring of consumer technology.

Negative emotions are the most powerful internal triggers — boredom, loneliness, frustration, confusion, indecisiveness, FOMO, anxiety. These are "tiny stressors" we feel constantly and usually unconsciously. We reach for our phones before we even know we are doing it. Positive emotions can be triggers too (the desire to share good news, to be entertained), but Eyal repeatedly emphasizes the negative ones because they fire most often and most automatically.

Examples:

- Bored → open Twitter or read dramatic news headlines
- Lonely → Facebook
- Stressed → Pinterest
- Uncertain → Google
- Validation-seeking → email
- Fear of losing a moment → Instagram (Yin's case)
- FOMO → social media in general

The 2011 Missouri University of Science and Technology study tracked 216 students' internet activity for a year and compared it with student health services records. Students with depression symptoms used the internet more — more email, video watching, gaming, chatting. The hypothesis: people experiencing negative emotions more frequently reach for technology to relieve them.

### How to find the deepest internal trigger: the 5 Whys

Borrowed from Taiichi Ohno's Toyota Production System ("the basis of Toyota's scientific approach"). Eyal's worked example for an imaginary user "Julie" considering email:

- Why #1: Why would Julie want to use email? → To send and receive messages.
- Why #2: Why? → To share and receive information quickly.
- Why #3: Why? → To know what's going on in the lives of her coworkers, friends, and family.
- Why #4: Why? → To know if someone needs her.
- Why #5: Why? → She fears being out of the loop.

Now we have something: *fear of being out of the loop.* Fear is a powerful internal trigger. The product can be designed to soothe that fear.

Eyal pairs this with Jack Dorsey's "user narratives" approach (write a play-style scene of your user using the product, complete with context, location, emotions), Erika Hall's research distinction between **declared preferences** (what users say they want — "cinema-quality home movies") and **revealed preferences** (what they actually do — "watch cat videos"), Evan Williams' line that "the internet is a giant machine designed to give people what they want" doing things they've always done in slightly easier ways.

Critical: users themselves cannot tell you their internal triggers in surveys. They don't think in those terms. You have to dig.

### Worked example: Instagram and Yin

Yin (Stanford student): habituated to Instagram. Eyal's reconstruction of how she got hooked:

- Started with a **relationship external trigger** — a friend recommended the app. Her own Instagram photos on Facebook/Twitter became relationship triggers for others.
- **Earned external triggers** — media coverage, blogger reviews, App Store featured placement.
- Once installed, **owned external triggers** — the app icon, push notifications about friends' postings.
- Through repeated cycles, **internal triggers** formed: fear of losing a special moment, boredom, FOMO. Now Yin uses Instagram automatically. "I just use it whenever I see something cool."

---

## Phase 2: Action

The action is the simplest behavior done in anticipation of reward. *The more effort required (physical or mental), the less likely the action.*

### The Fogg Behavior Model: B = MAT

BJ Fogg, Stanford Persuasive Tech Lab: a behavior occurs when **Motivation, Ability, and Trigger** are all present in sufficient degrees at the same moment.

Eyal's example: your phone rings and you don't answer. Why not?
- Ability low: buried in a bag.
- Motivation low: looks like a telemarketer.
- Trigger absent: ringer on silent.

If any one is too low, the behavior doesn't cross the Action Line.

### Motivation — Fogg's three Core Motivators

1. Seek pleasure / avoid pain.
2. Seek hope / avoid fear.
3. Seek social acceptance / avoid rejection.

Each is a pair of levers (push and pull). Examples Eyal uses:
- Obama 2008 "Hope" poster — seek hope.
- "Sex sells" advertising — seek pleasure (Carl's Jr., Victoria's Secret, GoDaddy).
- Budweiser ads with friends cheering for the national team — social acceptance.
- The motorcycle helmet PSA showing a brain-damaged crash victim with the line "I won't wear a helmet — it makes me look stupid" — avoid fear.

### Ability — the 6 Elements of Simplicity

Ability is the capacity to do a behavior. *Make the action easy.* Denis Hauptly's three-step innovation method (which Eyal endorses): (1) understand why people use a product, (2) lay out the steps to get the job done, (3) remove steps until you reach the simplest possible process.

Evan Williams: "Take a human desire, preferably one that has been around for a really long time… Identify that desire and use modern technology to take out steps."

Fogg's six elements, each a constraint that can block action:

1. **Time** — how long it takes.
2. **Money** — fiscal cost.
3. **Physical effort** — labor required.
4. **Brain cycles** — mental effort, focus, comprehension.
5. **Social deviance** — how outside the norm the behavior feels.
6. **Non-routine** — how much it disrupts existing routines.

Design principle: identify the user's *scarcest resource* at that moment and reduce friction there specifically. There is no single "easy" — different users in different contexts are short on different things.

### Motivation vs Ability — invest in ability first

Eyal is firm: "for companies building technology solutions, the greatest return on investment generally comes from increasing a product's ease of use." Users ignore instructional text. They multitask. They have no patience. Reducing required effort beats trying to motivate them.

Examples Eyal walks through of ability-maximizing design:
- **Facebook Login** — eliminates account-creation steps.
- **Twitter share button** — pre-fills the tweet.
- **Google home page** — pristine vs cluttered Yahoo/Lycos of 1998. Plus autocomplete, instant results, spelling correction.
- **iPhone camera launchable from lock screen** — no password required. Steals share from other smartphones because the moment doesn't wait.
- **Pinterest infinite scroll** — no pagination, no clicks, no waiting.
- **Twitter home page evolution 2009→2012→2013** — went from cluttered text and dozens of links, to "share and discover what's happening," to a clear sign-in/sign-up with an evocative image. Each iteration removed brain cycles.

### Heuristics & biases that influence action

Behavioral economics shows the rational model fails in predictable ways. Eyal highlights four cognitive biases product designers can use:

- **Scarcity effect** (Worchel, Lee, Adewole, 1975) — identical cookies in two jars (10 vs 2); the near-empty jar's cookies were rated more valuable. When the same cookies went from 10 → 2 or 2 → 10, scarcity-perception followed the change. Amazon's "Only 14 left in stock!" exploits this.
- **Framing effect** — Joshua Bell, world-class violinist, played free in a DC subway station and was almost entirely ignored. Context shapes perception of value. A 2007 fMRI wine study (Plassmann, O'Doherty, Shiv, Rangel): tasters told a wine was more expensive showed *more* pleasure-center activation while drinking the same wine.
- **Anchoring effect** — Eyal's personal example: a "buy one get one half off" Jockey 3-pack at $29.50 vs a Fruit-of-the-Loom 5-pack at $34 (cheaper per shirt) — the discount label anchored him on the first option.
- **Endowed progress effect** — Nunes & Dreze car-wash punch-card study: two groups, both needed 8 punches for a free wash. Group A got an 8-square card, blank. Group B got a 10-square card with 2 already punched. Group B completed at *82 percent higher rate.* People are more motivated as they perceive themselves nearing a goal. LinkedIn's "Improve Your Profile Strength" meter uses this — every new user starts with some apparent progress, no numerical scale, just a sense that completion is close.

Stephen Anderson's *Mental Notes* deck (50 cards of biases) is Eyal's recommended team tool.

---

## Phase 3: Variable Reward

The reward solves the user's problem and reinforces the loop. But what distinguishes the Hook from a vanilla feedback loop is **variability** — the reward is unpredictable, which is what creates craving.

### The dopamine research

- **Olds & Milner (1954)** — lab mice with electrodes implanted in the nucleus accumbens. Mice gave themselves shocks until they collapsed from exhaustion, ignoring food, water, and electrified pain grids. Humans in similar experiments would not stop pressing the button; researchers had to physically take the device away. For decades this was called "the brain's pleasure center."
- **Brian Knutson (Stanford, fMRI study)** — corrected the interpretation. The nucleus accumbens activates *in anticipation of reward*, not on receipt. **What draws us to act is not the sensation of the reward but the need to alleviate the craving for it.** This is the engine of the Hook.
- **BF Skinner pigeons (1950s)** — pigeon pressed a lever, got a food pellet every time. Then Skinner added variability: lever press now released food on a random schedule. The intermittent-reward pigeons pressed *dramatically more often* than the predictable-reward pigeons. This is the canonical demonstration that variability multiplies behavior.
- More recent work (Pessiglione et al., 2006) confirms variability spikes dopamine in the nucleus accumbens. The same mechanism is observed for monetary rewards and for heterosexual men viewing images of attractive women.

> Variable rewards multiply the dopamine effect, creating a focused state, which suppresses the areas of the brain associated with judgment and reason while activating the parts associated with wanting and desire.

When something becomes predictable, it loses its grip. Babies laugh at a dog they have just met; a few years later the same dog bores them. Once the cause-and-effect pattern is mapped, novelty fades. To hold attention, products must have ongoing novelty.

### Three types of variable rewards

Eyal's taxonomy. Habit-forming products use one or more.

#### 1. Rewards of the Tribe (social validation)

The need to feel accepted, attractive, important, included. Built on Albert Bandura's **social learning theory** — people observing someone rewarded for a behavior are more likely to adopt that behavior, *especially* when the model is similar to them or slightly more advanced (role model).

Examples Eyal walks through:

- **Facebook** — endless News Feed (variable content from friends), Likes and comments on your posts (variable social validation for the creator).
- **Stack Overflow** — 5,000 voluntary technical answers per day, written for free. Why? Upvotes are highly variable rewards from peers whose opinions the writer values. Badges and points represent tribe-conferred status. Like a game, but the points represent something real (community contribution).
- **League of Legends Honor Points** — when LoL was overrun by trolls, the game added a peer-conferred Honor Points system. Players gave points for sportsmanlike behavior. Variable, tribe-only-conferred, signaled which players to avoid. Reduced toxicity.

#### 2. Rewards of the Hunt (resources, information)

Our brains evolved to chase. Eyal opens with the San persistence-hunting story (Daniel Lieberman, Harvard): a San hunter chases a 500-pound kudu under the African sun for eight hours, not to catch it but to *exhaust it*. Quadrupeds can't pant and gallop simultaneously. The hunter's biomechanics and dogged determination win. *The same mental hardwiring drives modern resource-seeking.*

Examples:

- **Slot machines** — $1 billion per day plunked into US casino slot machines. Randomly timed jackpots, the most explicit hunt-reward.
- **Twitter timeline** — endless scroll through a feed of mostly-mundane, occasionally-relevant tweets. The user "hunts" for the interesting one.
- **Pinterest** — visual hunt. The Pinterest design crops images at the page fold so the user sees a *glimpse* of what's below. Curiosity pulls them to scroll, revealing more rewards-of-the-hunt.

#### 3. Rewards of the Self (mastery, completion, competence)

Driven by intrinsic motivation (Deci & Ryan's self-determination theory). The satisfaction of finishing a puzzle, leveling up, hitting inbox zero. People grimace through frustration to complete tabletop puzzles with no prize at the end.

Examples:

- **Video games** — leveling, unlocking abilities, World of Warcraft character progression. The pursuit of competency.
- **Email** — "Have you ever caught yourself checking your email for no particular reason?" Inbox-zero as a near-mystical goal. **Mailbox** (acquired by Dropbox for ~$100M) — sorts emails into folders, makes inbox-zero achievable through some sleight of hand (low-priority emails are hidden and resurface later), but delivers the sense of completion no other client did.
- **Codecademy** — turns the painful task of learning to code into a game of small wins. Variable rewards as you write functions that work or don't. Symbols of progression, instantaneous feedback.

### Mahalo vs Quora (variable rewards are not a free pass)

Mahalo.com (2007) tried to drive engagement by paying users for the best answers to questions, using a virtual currency ("Mahalo Dollars") redeemable for cash. Variable monetary rewards. At its peak: 14.1 million monthly users. *It died.* The payouts were too small to function like a slot machine and too inefficient to function like a wage. The trigger was wrong.

Quora (2010) launched with no money. Just upvotes — variable *social* rewards. Quora dominated.

> Only by understanding what truly matters to users can a company correctly match the right variable reward to their intended behavior.

Eyal's broader warning: **gamification is not a one-size-fits-all solution.** Points, badges, leaderboards only work if they tap a real itch. If users have no underlying need to return, no amount of gamification will save you. Variable rewards must fit the narrative of *why* the product is used and align with internal triggers.

### Maintain a sense of autonomy ("but you are free")

A French meta-analysis of 42 studies, 22,000+ participants: when a request is followed by the phrase **"but you are free to accept or refuse,"** compliance roughly doubles — for bus fare, charitable donations, survey participation.

The mechanism is *reactance* — the involuntary kickback against threats to autonomy. When users feel they're being told what to do, they rebel. When their choice is affirmed, they comply.

Quora's Views feature debacle (August 2012): Quora silently opted everyone in to a feature exposing their browsing history to other users. User revolt. Quora reversed course in weeks.

Eyal's app-design contrast:

- **MyFitnessPal** — the dominant calorie-tracking app. Eyal installed it to lose weight. It worked for a few days. Then a skipped meal broke the streak; the rest of the day was a "nutritional wash." Calorie tracking was not a behavior Eyal already did; it felt like something he *had to do*, not something he wanted to. He quit. "MyFitnessPal became MyFitnessPain."
- **Fitocracy** — same goal, different approach. Built around a community of fitness people sharing encouragement, advice, kudos. Eyal got virtual kudos on his very first run. He engaged a question from another user about knee pain. Fitocracy taps a behavior people *want* to do (gym chatter) and uses it as the on-ramp to the new habit.

> Companies that successfully change behaviors present users with an implicit choice between their old way of doing things and a new, more convenient way to fulfill existing needs.

### Finite vs Infinite Variability

- **Finite variability** — the experience becomes predictable after enough use. Eyal's case: Zynga's *FarmVille* (83.8M MAU in 2009, $36M revenue in 2010, $10B valuation by 2012) and its clones (CityVille, ChefVille, FrontierVille). All single-player, mechanical retreads. By November 2012, Zynga stock was down 80%. Once the players figured out the game, it died. **Breaking Bad** is the same case: enthralling on first watch, low rewatch value. The studio model exists because finite-variability products require constant new releases.
- **Infinite variability** — the experience stays unpredictable indefinitely. Usually because *other people* are the source of variability. **World of Warcraft** (10M+ active users 8 years after release) is multiplayer. User-generated content (YouTube, Pinterest, Twitter, Dribbble, Instagram) is infinitely variable because the content keeps changing as new users contribute.

Implication for retention design: where possible, build variability that comes from other users or from compounding personal data, not from a fixed content set the company has to keep refilling.

### Email uses all three reward types

A worked example of why email is so hooky: when you check your inbox you're chasing
- *Tribe* — who messaged me? am I being responded to? am I being agreeable enough?
- *Hunt* — what information is in there? job opportunities? threats?
- *Self* — can I get to inbox zero?

Multiple variable rewards stacked makes for an exceptionally sticky behavior.

---

## Phase 4: Investment

The fourth phase is where the user does a bit of work. This phase is what makes the Hook a *cycle* and not a single feedback loop. Without investment, the user gets their reward and leaves.

> Unlike in the action phase, investments are about the anticipation of longer-term rewards, not immediate gratification.

Critical timing rule: *the investment comes AFTER the reward, not before.* Asking for investment before delivering value violates Fogg's model — motivation is low. Asking after the reward leverages the reciprocity instinct (Stanford computer-helpfulness study: subjects given helpful machines did nearly 2x as much work back for them).

This is also why the investment phase, uniquely in the Hook, *intentionally adds friction.* Conventional UX says minimize all friction. Eyal: not in this phase. The whole point is that the user puts something in.

### Why investment changes the user (three psychological mechanisms)

1. **The IKEA effect** (Ariely, Norton, Mochon, 2011) — students built origami cranes and frogs, then bid on their own work, others' work, and expert-made origami. They valued their own at 5x what others' was valued at, and nearly as high as expert-made origami. *Labor leads to love.* IKEA's hidden innovation isn't flat-pack shipping efficiency; it's making customers invest, which makes them love the furniture.

2. **Escalation of commitment / consistency with past behavior** — the "Drive Carefully" yard-sign study. Suburban residents asked to put up a huge ugly yard sign: only 17% agreed. But a second group, asked two weeks earlier to put a small 3-inch "Be a Safe Driver" sign in their window first, then asked about the huge yard sign — 76% agreed. Small commitments compound into large ones.

3. **Avoiding cognitive dissonance** — Aesop's fox and the sour grapes. We learn to like beer and spicy food (both naturally rejected by the body) by repeated exposure plus seeing others enjoy them. Rationalization (Jesse Schell on Mafia Wars): *"anything you spend time on, you start to believe — 'This must be worthwhile. Why? Because I've spent time on it!' And therefore it must be worth me kicking in twenty dollars because look at the time I've spent on it. And now that I've kicked in twenty dollars, it must be valuable because only an idiot would kick in twenty dollars if it wasn't."*

### Storing value — what investment looks like in practice

Software, unlike physical goods, *adapts to the user with use.* Investment stores value in the product, making it better next time AND making it harder to leave.

Five categories Eyal documents:

- **Content** — iTunes music library. Facebook timeline of past life. The more you add, the harder to start over elsewhere.
- **Data** — LinkedIn profile (early product manager Josh Elman: "If we could get users to enter just a little information, they were much more likely to return"). Mint.com linked accounts, transaction categories, custom budgets.
- **Followers / following** — Twitter. App.net tried to build a better Twitter and failed. Why? Because following lists and followers are stored value users won't rebuild from scratch. Both sides of the equation create lock-in.
- **Reputation** — eBay seller ratings, Yelp restaurant scores, TaskRabbit ratings, Airbnb host scores. Reputation is *literally bankable*. Users won't burn it by switching.
- **Skill** — Photoshop expertise transfers poorly to competitors. Once a user has invested hours learning the product, switching means starting the learning curve over. Skill mastery is also a reward of the self, so investment and reward compound.

### Loading the next trigger

The other key function of investment: it *sets up the next external trigger automatically*, so the cycle continues.

Examples:

- **Any.do** — task manager. During onboarding the user connects their calendar and grants permission for a notification after each scheduled meeting ends. That notification is the next external trigger, fired at the exact moment the user feels the anxiety of "what did I just commit to doing?" The app pre-installs its own re-engagement.
- **Tinder** — every swipe is investment. Matches generate notifications back to both parties. The more swipes, the more loaded triggers.
- **Snapchat** — every photo sent contains an implicit prompt to respond. The self-destruct timer encourages quick reply. Each message loads the next trigger for both users.
- **Pinterest** — every pin, repin, like, or comment gives Pinterest permission to notify the user when others engage with that content.

### Investment must respect motivation and ability

Like action, investment must respect Fogg's model. Asking for too much investment too early will break the cycle. Stage investments progressively — small, easy commitments first, harder ones after the user has cycled through the Hook several times.

---

## The Habit Testing process

For products that already have users and data. Three steps, inspired by Lean Startup's "build, measure, learn."

### Step 1: Identify

Define what "habitual user" means for your product. How often *should* a typical user engage?

- Twitter / Instagram → multiple times per day.
- Rotten Tomatoes → once or twice per week.

Don't anchor on superusers; calibrate to realistic frequency. Use cohort analysis. Look at how many of your users actually meet that threshold.

### Step 2: Codify

Eyal's rule of thumb: *at least 5% of users should hit your habitual-use threshold.* Below that, either you misidentified your target user or the product isn't earning the habit.

For the users who DO meet the threshold, find the **Habit Path** — the series of similar actions shared by your most loyal users. Where did they come from? What did they do during signup? How many friends did they connect with? What features did they touch first?

Twitter's canonical example: in its early days, Twitter found that **once a user followed 30 people, they hit a tipping point** in retention odds. The Habit Path was: get to 30 follows.

### Step 3: Modify

Modify the product to push more new users down the Habit Path. Twitter restructured onboarding to encourage immediate following. Tracks changes by cohort.

Habit Testing is continuous — run it on every release.

---

## Where to look for habit-forming opportunities

For pre-product founders. Eyal's three hunting grounds:

### 1. Study yourself

> Studying your own needs can lead to remarkable discoveries and new ideas because the designer always has a direct line to at least one user: him- or herself.

Paul Graham: "Instead of asking 'what problem should I solve?' ask 'what problem do I wish someone else would solve for me?'"

Eyal's example: **Buffer**, founded by Joel Gascoigne. He noticed (1) his tweets with links/quotes generated good conversations, (2) he wanted to space them throughout the day, (3) existing scheduling tools required exact dates/times when all he wanted was "five times per day." He built Buffer to scratch that exact itch. 1.1M+ users.

### 2. Nascent behaviors

New behaviors that start in a tiny niche but cater to a universal need can scale enormously. Often dismissed at first.

Eyal's hall-of-shame quotes from dismissals:
- "The Americans have need of the telephone, but we do not. We have plenty of messenger boys." (Sir William Henry Preece, British post office)
- "Airplanes are interesting toys but of no military value." (Ferdinand Foch, 1911)
- "Data processing is a fad that won't last out the year." (Prentice Hall editor, 1957)
- "The truth is no online database will replace your daily newspaper… We'll soon buy books and newspapers straight over the Internet. Uh, sure." (Clifford Stoll, Newsweek, 1995)

Facebook started at one Harvard dorm. Now over a billion users. Eastman's Brownie camera (preloaded film, $1) was marketed as a child's toy.

### 3. Enabling technologies / interface changes

Mike Maples Jr.: tech waves come in three phases — *infrastructure, enabling tech, applications*. New infrastructure unlocks new behaviors. The mobile phone unlocked Instagram. The integration of cameras into phones (interface change) was the moment Instagram's filters became valuable. Pinterest's pin-board interface revealed the addictive nature of an online visual catalog without solving any hard tech challenge.

Paul Buchheit: "live in the future." Identify where interfaces are about to change. (Eyal's 2014 list — wearables, Google Glass, Oculus, Pebble — was uneven in retrospect, but the principle holds.)

---

## Habit Potential Test (the Habit Zone)

A diagnostic for whether an idea can even become habit-forming.

Plot the behavior on two axes:
- Y-axis: **Frequency** — how often does the behavior occur?
- X-axis: **Perceived utility** — how useful/rewarding is the behavior vs alternatives?

There's a downward-sloping curve. Above and to the right is the **Habit Zone**. Below is no-habit territory.

Important properties of the curve:
- It **never touches the perceived-utility axis**. No matter how high utility goes, low-frequency behaviors don't become habits. They remain conscious decisions. (Buying life insurance is high utility but never habitual.)
- It **does touch the frequency axis** in spirit — high frequency can compensate for low per-instance utility. Googling each query has marginal benefit over Bing, but you do it 50x a day and it's locked in.

Worked contrasts:
- **Google** — high frequency, marginal per-search utility advantage. Habit lock through frequency.
- **Amazon** — lower frequency, but extremely high perceived utility ("the everything store"). Habit lock through utility. Amazon makes itself the default purchase mechanism by surfacing competitor prices and ads on its own pages — confidence in being chosen leads to habit.

### Manufactured habits

Even seemingly low-utility behaviors can become habits if frequency is high enough. Listerine and the "halitosis" campaign is the classic case study Eyal alludes to: rebranding bad breath as a medical problem, then making mouthwash a daily ritual. Manufactured habits sustained by repetition.

For the iOS app pipeline: if your behavior is rare (e.g., taxes once a year), no amount of UX polish makes it habit-forming. You need *daily or near-daily* potential or *extraordinary* perceived utility on each occurrence.

---

## The Manipulation Matrix (ethics)

Eyal's ethical decision tool. Two questions:

1. **Would I use this product myself?**
2. **Will the product materially improve users' lives?**

A 2x2 matrix:

|                            | Materially improves life | Doesn't materially improve life |
|----------------------------|--------------------------|--------------------------------|
| **Maker uses it**          | Facilitator              | Entertainer                    |
| **Maker doesn't use it**   | Peddler                  | Dealer                         |

- **Facilitator** — uses the product, believes it helps users. Highest odds of success because the maker has direct empathy with the user. (Jake Harriman's Nuru International equipping Kenyan farmers — Harriman lived among them. Facebook and Twitter's founding teams claim this quadrant.)
- **Peddler** — believes it helps users but wouldn't use it themselves. Common in fitness/charity/branded apps. Lacks the empathy to build something users actually want. "Their holier-than-thou products often try to 'gamify' some task no one really wants to do."
- **Entertainer** — uses it, doesn't believe it improves lives. Art is valid for its own sake. But entertainment products fade fast (Angry Birds, Pac-Man, Mario Bros), so the business model has to be hits-driven, with a constant pipeline of new content.
- **Dealer** — doesn't use it, doesn't believe it improves lives. Exploitation. Ian Bogost's *Cow Clicker* (a satire of FarmVille — users just clicked cows for a "moo" — went viral until Bogost shut it down himself, calling it the "Cowpocalypse").

> Creating a product that the designer does not believe improves users' lives and that he himself would not use is called exploitation.

Eyal estimates the pathological-addiction tail at ~1% even for the most habit-forming products (slot machines). Companies have an obligation to identify those users and intervene. The other 99% can self-regulate.

---

## Case Study: The Bible App (YouVersion)

Bobby Gruenewald's YouVersion Bible App, 100M+ installs as of July 2013, new install every 1.3 seconds, 66,000 opens per second on average. Eyal walks through it as the canonical applied example.

What worked:

- **Mobile beats desktop for habit.** Original was a desktop web app. Did not engage. Moving to mobile (always-on, always-with-you) gave the trigger surface needed for the habit to take. 18% of users report reading the Bible App on the toilet.
- **400+ reading plans** — segmented by audience, theme, struggle. Chunks the text into "communion wafer–sized portions" — bite-sized actions that don't intimidate.
- **Push notifications as owned triggers.** Gruenewald was initially afraid to send notifications. Tested with a "Merry Christmas" message and was overwhelmed by positive response — users took screenshots and posted to social. "They felt God was reaching out to them." Now triggers fire daily for each reading plan.
- **Badges and red-dot app icons** as secondary triggers.
- **Relationship triggers** — community emails, fellow members sending encouragement.
- **Ease of use** — audio version (Charlton-Heston-style narration) for users who prefer listening over reading. Frontloaded the more interesting passages first; boring ones later — increased completion rates.
- **Variable rewards (mystery)** — what verse will appear today? One user "would stay up until just past midnight to know what verse she had received for her next day."
- **Variable rewards (Forer effect / subjective validation)** — readers feel the scripture speaks directly to their current situation.
- **Investment** — highlights, bookmarks, comments, share-verse button. Each is small stored value, accumulating into a personal record of worship that's hard to leave. IKEA effect.
- **Endowed progress** — "Day Complete!" screens, check marks, reading-plan calendar with chain-of-days visualization. Skipping breaks the streak.
- **Self-disclosure as reward** — sharing verses ("humblebrag") triggers neural reward circuits associated with self-disclosure (Harvard meta-analysis: people will forgo money to disclose about themselves).
- **Distribution loop in pews** — Sunday usage spikes downloads because people see neighbors using the app at church. Preachers can input sermons so congregations follow along. Once the pastor is hooked, the congregation follows.

This case is a clean demonstration that the Hook Model isn't only for social/entertainment apps. A scripture app applied the same psychology and became one of the most-installed apps in the world.

---

## Other case studies referenced in the book (compact)

- **Instagram** — relationship-trigger viral growth via Facebook/Twitter cross-posting; internal trigger of fear-of-losing-a-moment / FOMO; trivial action of one-tap photo capture; variable tribe rewards (Likes); investment in followers/feed curation.
- **Pinterest** — Cure for stress; visual hunt; cropped-image previews drive scroll; pin/repin/like as investment that personalizes the feed and notifies followers.
- **Twitter** — Internal trigger of boredom/info-craving; feed = reward of the hunt; following + tweeting as investment that loads triggers and stores reputation.
- **Mahalo vs Quora** — Wrong reward type kills engagement; social rewards outperform monetary ones for Q&A.
- **Snapchat** — Each message is investment AND loaded-trigger; ephemeral timer creates urgency.
- **Tinder** — Each swipe is an investment; matches are loaded triggers; reward of the hunt (browsing profiles); reward of the tribe (validation when matched).
- **Facebook** — News Feed variability; Like button = variable tribe reward for creators; timeline as stored content.
- **Stack Overflow** — Tribe rewards, badges and points that confer real community status (not empty gamification).
- **League of Legends Honor Points** — fixing a toxic community via peer-conferred variable social rewards.
- **Mailbox (acquired by Dropbox)** — Self-mastery reward (inbox zero) achieved by hiding low-priority email and resurfacing it later.
- **Codecademy** — Self-mastery reward applied to learning to code; instant feedback + variable success/failure.
- **MyFitnessPal vs Fitocracy** — Calorie tracking that violates autonomy vs gym-chatter on-ramp that respects existing behavior.
- **Any.do** — Onboarding that ends in calendar permission, so notifications fire at peak need.
- **Buffer** — Founder scratching his own itch (scheduled tweets "five times a day").
- **Evernote** — "Smile graph": usage dips then climbs over months; willingness to pay grows from 0.5% (month 1) to 26% (month 42).
- **Candy Crush Saga** — $1M/day in revenue from free-to-play model; delay paywall until habit is locked.
- **Amazon** — Allows comparison shopping with competitors on its own pages; the strategic confidence creates the habit.
- **iPhone camera** — Lock-screen launchability beats other phones.
- **Google home page** — Simplicity vs Yahoo!/Lycos clutter.

---

## How to Apply to iOS Apps (Synthesis)

This is the founder's playbook. For a recurring-revenue (subscription), TikTok/Instagram-grown iOS app, Hooked is *the* retention design system. Each phase maps to specific decisions in the pipeline.

### Stage 1 — Ideation (does the concept pass the habit test?)

1. **Run the Habit Zone test before you build.** What is the core behavior the app requires? Plot it on frequency × perceived utility. If the behavior happens less than ~once per week and the per-use utility isn't dramatic, kill the concept or rework it. A workout app used 3x/week is borderline; a journaling app used twice a year is dead.

2. **Pick vitamin AND painkiller, not vitamin OR painkiller.** Investors ask for painkillers because they're easier to underwrite. Build a vitamin that becomes a painkiller through repetition. The goal is to manufacture the itch, not to solve an existing crisis.

3. **Do the 5 Whys on the founder's offer.** Don't ship until you can complete: "Every time the user feels [internal trigger], they [first action of the habit]." If "fear of being out of the loop" or "boredom" or "loneliness" or "anxiety about [specific thing]" doesn't show up by why #5, you don't know your user yet. Sit with this — it determines push copy, paywall copy, TikTok hook, everything.

4. **Be a facilitator, not a dealer.** Apply the Manipulation Matrix. If you (the founder) wouldn't use the app daily for the same reason your target user would, the odds drop hard. Live among your users (Jake Harriman in Kenya). If you can't, ask whether you'd have been your own user 5 years ago. The further you are from your former self, the lower the odds.

5. **The 9x rule.** If you're trying to dislodge an existing habit (sleep apps competing with the iPhone's built-in alarm; meditation apps competing with Calm/Headspace), the new offering must be 9x better. Marginal improvements lose. Find the angle where you're 9x or don't enter.

### Stage 4 — UI/UX (designing the action around Fogg)

6. **Apply B = MAT to every screen.** For every action you want the user to take: is motivation present? is ability sufficient? is the trigger clear? If any one is missing, the action won't happen. Don't pile up motivational copy when the real problem is brain cycles.

7. **Identify the user's scarcest resource and remove it specifically.** A commute-time meditation app's scarcest resource is *time* and *brain cycles*. A baby-tracking app's scarcest resource is *physical effort* (one-hand usability) and *time*. Each app has a different bottleneck; address it.

8. **Invest in ability before motivation.** This is Eyal's strongest practical advice. Cut steps from sign-up. Pre-fill defaults. Use Sign-In-With-Apple. Make the first action one tap from app open. Increasing motivation through copy is expensive and slow; reducing steps is cheap and fast.

9. **Use heuristics surgically.** Scarcity ("only 3 hours left to start your streak"), framing (anchor the paywall against an unrelated higher number), anchoring (show the annual plan price first so monthly looks cheap), endowed progress (onboarding bar that starts at 20% with no scale; trial that pre-fills the first habit so users feel mid-streak). Stephen Anderson's Mental Notes deck is a real tool the founder should keep next to design reviews.

### Stage 5 — Onboarding (designing the first hook cycle)

10. **The first session must complete one full Hook cycle.** Trigger (app icon tap or push) → Action (one-tap meaningful action, not account creation) → Variable Reward (instant insight, surprise content, social validation) → Investment (preference selection, calendar permission, profile fact, friend invite). If any phase is missing, the user won't return.

11. **Make the first reward unpredictable.** A static "Welcome!" is not a variable reward. Show something the user couldn't have predicted but will find personally relevant — a generated insight from a quick quiz, a calculated streak goal, an AI-personalized plan, a community post that matches their interest.

12. **Load the next trigger inside onboarding.** End onboarding with a calendar permission, a push permission framed against the user's stated goal ("we'll remind you at 9pm because you said evenings are when you feel anxious"), or a daily challenge that creates an external trigger by tomorrow. Any.do is the canonical move.

13. **First investment must be tiny.** Pick 3 topics. Type your name. Choose your goal. Set a target time. Each is a small commitment that builds consistency-with-past-behavior and IKEA-effect ownership. *Do not* ask for credit card before the user has seen a reward.

### Stage 6 — Retention Loops (the heart of the app)

14. **Define the Habit Zone threshold up front.** Before launching, decide what "habitual user" means (e.g., 4 sessions per week for a meditation app, daily for a journaling app). Track this from day one. Aim for 5%+ of installs to clear the bar — that's your minimum viable habit-forming product.

15. **Find the Twitter-30-follows equivalent.** Through Habit Testing, identify the action(s) that separate the 5% who retain from everyone else. Maybe it's "logged 3 entries in week one." Maybe it's "completed a streak of 5 days." Once you know it, redesign onboarding and early engagement to push more users across that line.

16. **Push notifications as owned triggers — high signal, never spam.** Push is the most powerful re-engagement tool for an iOS app. But each unwarranted push is dark-patterning that erodes trust. Rules:
    - Tie every push to the user's stated internal trigger (the one you found via 5 Whys).
    - Send pushes at moments the user said matter (evening anxiety, morning grogginess, post-lunch slump).
    - When a user's behavior shows they're disengaging (no opens in 7 days), drop frequency, don't escalate.
    - Use "but you are free" framing in copy ("Skip today if you want — your streak holds.") to reduce reactance.

17. **Badge counts: use sparingly.** Red dots are powerful but cheap. Earned badge counts (a real new thing happened) work; manufactured ones (we want you back) damage trust.

18. **Variable rewards for subscription apps — the specific menu.**
    - *Tribe:* community posts, comments, kudos, reactions, leaderboards based on real peer effort, expert AMAs, "people like you" content.
    - *Hunt:* personalized content feed, surprise daily content drop, unlockable lessons, "today's insight" with unpredictable substance, randomized challenges.
    - *Self:* streaks, completion bars, mastery levels, before/after comparisons, AI-generated personal insights, badges that mean something.
    
    Layer multiple types. Email/Pinterest/Instagram all use 2-3 simultaneously.

19. **Avoid finite variability traps.** If the app's content is a fixed library (e.g., 100 meditations), users will exhaust it. Build infinite-variability mechanisms: user-generated content, peer interactions, AI-generated personalized content, real-time data (sleep score, weight, mood) that changes the experience daily.

20. **The 1% can become loyal — but track them.** Pathological users are a tiny minority and an ethics problem. Build a mechanism to detect anomalously high usage (e.g., a meditation app with users meditating 8 hours/day) and intervene. This is also good PR insurance.

### Stage 8 — Paywall (timing and copy)

21. **Don't paywall before the habit forms.** Candy Crush, Evernote, free-to-play games. Let the user cycle through the Hook enough times that the IKEA effect kicks in. They've already invested time, data, content, social capital — paying becomes consistent with their past behavior. Eyal: "in the free-to-play video game business, it is standard practice for game developers to delay asking users to pay money until they have played consistently and habitually."

22. **Investment before payment.** By the time the paywall fires, the user should have: customized preferences, set a goal, completed at least one streak, generated content, connected at least one friend or peer. Every one of those is a sunk-cost lever pulling them through the paywall.

23. **Paywall copy uses "but you are free."** Reactance is the silent paywall killer. Explicit autonomy reaffirmation ("Pause anytime. Cancel in one tap. You're in control.") doubles compliance in adjacent research; it's worth A/B testing.

24. **Frame the paywall as a tribe/hunt/self reward.** Don't list features — promise the variable reward type the user is already hooked on. Tribe-driven users: unlock community. Hunt-driven users: unlock content discovery. Self-driven users: unlock mastery/advanced levels.

### Stage 6/9 — Re-engagement & churn

25. **Stored value is your moat.** As subscription churn approaches, surface what they'd lose: their data, their streak, their content, their followers, their reputation, their skill. The more storage, the more sunk cost, the lower the churn. *Investment is the retention design principle.*

26. **For lapsed users, hit the original internal trigger.** A user who churned probably stopped feeling the itch the app solved — or stopped associating the app with relief. Re-engagement copy should re-evoke the original emotional context: "Remember that feeling at 2am when you couldn't sleep? It's been 14 days." Not feature reminders.

27. **Audit owned vs paid triggers in your funnel.** If you can't get users to return without a push notification, the habit isn't formed. Healthy state: most opens are unprompted by your own triggers.

### Universal

28. **The founder must use the app every day.** Facilitator quadrant. If you're not in it, no amount of process recovers.

29. **Habit Testing is continuous, not a launch checklist.** Cohort by install week, track retention curves, identify the Habit Path, modify onboarding, repeat. This is the loop the founder runs forever.

30. **Stay out of Dealer territory.** If you ever find yourself building features that exploit the 1% pathology, course-correct. Subscription apps live on word of mouth and App Store reviews; one viral post about a manipulative pattern can crater an app. The Manipulation Matrix is a survival tool, not just an ethics tool.
