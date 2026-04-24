# Summary — Part III "The Age of Robots" (pp. 93–115)

## Part III opener. L'âge des robots (p. 93)
#### Points
- Fed by titanic training runs, AI systems will autonomously solve an ever-wider range of tasks.
- Arrival of these systems triggers an unprecedented rupture: for the first time in history, man is no longer the sole master of the world's transformation.
- The author warns the chapter is not dispassionate: he fears many of the changes he announces, but thinks it is a duty to confront them head-on.
- Time horizon indicated: "about ten years."

#### Key quotes
- "For the first time in its history, man will no longer be the sole master of the world's transformation." (p. 93, paraphrased from French)

---

## Chapter 8. Alignement, morale, éthique (pp. 94–98)

### 8.1 Approches actuelles sur l'alignement (pp. 94–95)
#### Points
- When reviewing modern LLM construction, one crucial step was omitted: alignment.
- ChatGPT's main innovation was not its technical capacity to complete text correctly; the decisive factor in making it a useful product was researchers' effort to make the AI adopt behaviors oriented toward what humans deem good.
- Alignment problem surfaces as soon as one asks a question to an LLM trained to predict the next sub-word. Example: asked "What ingredients are in a vanilla ice cream?", a pure next-token predictor could keep appending more subsidiary questions ("Peanuts? My son is allergic to peanuts, should I consult? Am I asking too many questions?") — such behavior would have good predictive performance on training texts but would be useless.
- So completing text efficiently is not enough: an LLM must answer the user's questions.
- Beyond answering, it must avoid insulting its interlocutor and avoid behaviors that could trigger legal action against its creators, such as apology for terrorism.
- Alignment = inculcating to the model a notion of civility, a *knowledge* of what it must or must not do.
- Alignment is measured by putting the model through batteries of questions and counting satisfactory answers.
- For ChatGPT, researchers added a "post-training" step at the end of training dedicated to better aligning the model. This step turned the LLM into a true assistant and the chatbot into a truly useful product — that is what made its fame.
- Alignment has since been refined to reduce bad behavior further, in particular to reduce stereotypes in models' *reasoning*.
- Many "debiasing" techniques exist, e.g. selectively replacing or deleting assertions considered biased from training data (footnote liii).
- Either base data scraped from the Internet has intrinsic bias, or bias-correction techniques are poorly constructed and cause their own political bias — principal market LLMs all share a strong leftward tilt on the political spectrum (footnote liv).
- Google pushed this bias to extremes in some Gemini models: when asked to generate portraits, the model tended to over-represent US ethnic minorities to the point of historical contradictions — e.g. a Black-skinned SS soldier (footnote lv). Google acknowledged the problem and promised correction (footnote lvi), but such distortions will certainly keep appearing to various degrees in future models.
- Correcting all possible biases will probably be impossible, and they will inevitably influence user interactions. A simple warning hidden somewhere in the product will probably not be taken into account correctly.
- Anthropic, pioneer in alignment, proposes an interesting approach: during alignment, after training the model to *inculcate values* (e.g. "I prefer to tell the truth rather than what I think people want to hear"), they teach it to *be conscious* of these values, so it can warn users itself (footnote lvii). Given the difficulty of eliminating bias, Anthropic prefers to give its model *consciousness* of these biases so it is more transparent to the user.

#### Sources / name-drops
- ChatGPT (OpenAI)
- Google — Gemini models; over-represented minorities in portrait generation, "Black SS soldier"; footnotes lv, lvi (Google acknowledgment/promise to correct)
- Anthropic — alignment pioneer, value-inculcation + value-consciousness approach, footnote lvii
- Footnote liii: debiasing training-data techniques (source not fully rendered in excerpt)
- Footnote liv: political lean of LLMs toward the left

#### Key quotes
- "The main innovation of ChatGPT did not reside in its technical capacity to correctly complete a text: the determining factor for making it a useful product was the effort devoted by researchers to making the artificial intelligence adopt behaviors oriented toward what humans around them deem good." (p. 94)
- "Principal market LLMs all share a strong leftward tilt on the political spectrum." (p. 94, paraphrased)

### 8.2 Agents autonomes et alignement (pp. 95–98)
#### Points
- Current alignment approaches may suffice for current models, which don't yet make important decisions.
- But AIs will evolve toward more autonomy and become full actors in society. To the extent they hold power, they can do harm — as in sci-fi films *Terminator* or *I, Robot* where machines rebel against human creators.
- No need for consciousness to do harm. Consider an AI whose only objective is to maximize production of a resource: without safeguards it will push toward that objective at any cost, monopolizing resources that would have been useful elsewhere. It could even seek to destroy those who try to stop it (footnote 74: Clippy fable, model designed to optimize a paperclip factory goes off the rails and turns Earth into a giant paperclip factory — "It looks like you're trying to take over the world", gwern.net).
- For an AI that wants to achieve a goal needing common resources, any person also needing those resources becomes an obstacle to remove.
- Aggravating factor: these algorithms function as black boxes. Even though we built them, we don't know how they work — researchers only built architectures capable of learning to reason; the reasoning itself is constructed automatically during training. Neural networks are too huge to be analyzed finely, just as our own brain remains mysterious to us.
- Even if progress is expected in analyzing AI decision processes, it will be hard to build a reliable alert signal when an AI agent makes a bad decision. Safeguards are needed.
- Can we just force AI to respect the law of the country? No — law is conceived by and for humans; it does not give all the rules that would effectively constrain an AI with different reasoning/action schemas. Also, law does not give ethical rules: it doesn't deal with lying, benevolence, altruism. Many behaviors are legal but harmful (e.g. cutting the supermarket queue to save a few minutes).
- Alignment for a truly autonomous actor is much harder than for a mere conversational robot. It requires ethical clarifications because it is the question of good and evil that must be codified.
- First clarify the goal "wanting the good of humans": which group exactly? Individual, group, country, all humanity?
- If two groups are in conflict and one asks the agent to help fight the other, what to do? If both belligerents simultaneously ask the agent for a task that, without intervening directly, helps the war effort — share equally, arbitrarily favor one, or refuse both and disobey both?
  - Option "loyal agent" serving only its owner: you now have a servant without personal responsibility, with superior intelligence, who never sleeps, and who is ready to oppose anyone to satisfy the slightest desire of its master. Law compliance does not prevent harm.
  - Option "equitable agent" serving all humans equally: it will devote much more energy to helping those most in need than to solving its owner's problems. In this case, who would finance such a robot knowing its first action after activation will certainly be to fly off to save cyclone survivors and never return?
- How to define "good"? Do humans themselves know? Even reducing "good" to "agent must aim at maximizing human preferences" still raises problems — human preferences must be relativized.
- Many preferences lack clairvoyance. **Fable of King Midas**: in Greek mythology, satyr Silenus (adoptive father of Dionysus) got drunker than usual, wandered into Midas's lands; Midas offered hospitality. Dionysus, searching for him, arrived at Midas's court and offered to grant a wish to thank him. Midas exclaimed: "I want everything I touch to turn to gold." Wish granted, the wretched king can no longer eat or drink because food turns to gold before touching his lips. Dionysus freed Midas of the poisoned gift: after washing his hands in the river Pactolus, Midas could feed himself again. The Pactolus thereafter carried gold. In reality (where curses are harder to undo), the agent should refuse the king's wish from the start.
- Other self-destructive behaviors are harder to arbitrate: if our agent serves satyr Silenus, should it try to prevent him from drinking? What to do if Silenus is as miserable as stone when sober and finds his only joy in drunkenness?
- Preferences being changeable, we must temper their instability with a notion of temporal continuity. **Odyssey example**: Ulysses and the Sirens — Ulysses orders sailors to plug ears with beeswax; himself chooses to be exposed to the song but tied to the mast to not risk throwing himself in the sea. Near the Sirens, Ulysses struggles against his bonds, signals to be untied. Clearly the request should be refused because his present decision is too linked to the transient grip of the Sirens' song.
- The agent should integrate a notion of preference change over time. But that's only the start — more subtle preference changes must be judged, e.g. someone who declared they would never start smoking and ends up changing their mind: which person is right, yesterday's or today's?
- How to weigh performance among several different people, especially if they are opposed, each wanting the misfortune of others?
- **Utilitarian philosophy**, founded by Jeremy Bentham, proposes quantifying happiness of each individual via a "utility function" varying by life parameters, then summing them with equal weights (for justice) into a total utility function to maximize to reach collective happiness. This seems egalitarian, but what if one individual feels variations of life conditions much more intensely than all others? Then their personal preferences carry much more weight, leading to unequal treatment. This "utility monster" argument was formulated by **Robert Nozick** as critique of utilitarianism (footnote lviii).
- The agent should also adapt to trend evolution rather than follow fixed morals. One can locate the difference between morale and ethics in ethics' more dynamic side; but even moral principles of a society evolve progressively over decades. An agent should thus adapt rules gradually — not follow morals carved in stone, but contextual ethics adapted to changing situations/preferences.
- Implementing ethics for autonomous agents is a very delicate problem. Its resolution would first require creating an ethics model in service of human preferences. This demands correctly defining "human preferences." Long road ahead.
- **Stuart Russell**, in *Human Compatible*, proposes training an AI model that predicts human preferences in every situation. Training dataset would be real situations encountered by humans with as output the actually-taken action. The model must predict that output action per situation, using its own preference understanding. Like transfer learning from Chapter 2, good predictive performance on human actions will require good understanding of our preferences.

#### Sources / name-drops
- Films: *Terminator*, *I, Robot*
- Footnote 74: Clippy paperclip-maximizer fable, "It looks like you're trying to take over the world", gwern.net
- King Midas myth, Dionysus, Silenus, river Pactolus
- Homer, *Odyssey* — Ulysses and the Sirens
- Jeremy Bentham — utilitarian philosophy
- Robert Nozick — "utility monster" critique of utilitarianism, footnote lviii
- Stuart Russell — *Human Compatible* (preference-prediction model)

#### Key quotes
- "No need for a consciousness to do harm." (p. 95)
- "For an AI wanting to achieve at all costs a goal requiring common resources, anyone also needing these resources becomes an obstacle to push aside." (p. 95)
- "The law is conceived by and for humans; it does not give all the rules that would effectively constrain an AI with different reasoning and action schemas." (p. 96)
- "The master immediately satisfies his desires, he remains prisoner of them, which has something savage to it." (not in this chapter — reserved for Ch 10 Hegel)

---

## Chapter 9. Un assistant pour tous (pp. 99–103)
#### Opening (p. 99)
- One of the most promising prospects of AI's rise is the arrival of high-quality personal assistants.

### 9.1 Assistance vocale : rendre le numérique accessible (pp. 99–100)
#### Points
- 9 of 10 adults in Europe own a mobile phone (footnote lix). Usage is precious: instant communication worldwide, travel organization, banking.
- Yet phone use remains inconvenient: phone-in-car manipulation is forbidden; most tasks don't require so much concentration. Sending a message or launching a search should just be voice-dictated. Problem partly solved by far more efficient voice-recognition models: in a car, you could ask your phone what you'd ask a copilot.
- Past voice assistants like Apple's Siri were cantoned to elementary tasks. Reason: they are deterministic — to be turned into action, a user request must match one of a few thousand pre-programmed cases, far too few vs. billions of possible user demand variations. Linked to logical circuits structure (info is only true or false). Traditional applications are like narrow bureaucrats accepting only an already-documented procedure; your request must fit their pre-recorded version exactly.
- **Example of rigid procedure** on a phone to "change Pierre's number":
  1. Swipe up to reveal apps
  2. Click "Contacts" (itself a rigorous action: press a fixed spot for a limited duration)
  3. Scroll down to find Pierre
  4. Click on Pierre
  5. Click "Edit number"
  — and so on for ~10 steps. Any deviation requires corrective action to get back on track; e.g. if you click the wrong app, you must close and restart.
- 📎 **[Illustration p. 99]** — Boxed green callout listing the 5-step rigid procedure ("Swipe up → Click Contacts → Scroll to Pierre → Click → Click Edit number") to change Pierre's number on a phone.
- **Anecdote**: a neighbor on the landing asked the author, "Can you help me change my son's number?" He could chain the steps because of years of use that his generation has internalized unconsciously. But for her, who doesn't have these reflexes and doesn't see so well, there was always a step that failed — she had to redo it dozens of times, launching as many involuntary actions — her poor son was at risk of a panic attack seeing 14 missed calls.
- This is where modern AI models will accomplish a real revolution in personal assistants. These algorithms manipulate not true/false logical conditions but vectors that can take an infinity of values and yet yield a 99% logical result. From new or even unknown instructions, they reach good conclusions and translate them into a correct operation, bypassing the narrow bureaucrat.
- A modern AI assistant would have a library of phone-usable actions expressed as code instructions. If you again want to change Pierre's number and err in the procedure, the chatbot simply asks confirmation, can suggest other options if needed, and only executes your action once it has fully *understood*.
- This new, more flexible application type will greatly ease life. Particularly precious for elderly people completely marginalized by the digital revolution. Even for power users: liberation from manipulating a touch screen in the rain that half works, or being able to launch an action in a few words instead of a minute of full attention risking being caught by a social-network notification.

#### Sources / name-drops
- Footnote lix: mobile-phone ownership statistic (9/10 adults in Europe)
- Apple Siri

### 9.2 Améliorer la prise en charge médicale (pp. 100–101)
#### Points
- In France, hospital "urgences" (ER) badly deserve the name: average waiting time = 4 h 23 before care. In 2022, 23 people died waiting for care (footnote lxi). This dysfunction leaves room for AI improvements, e.g. pre-diagnostic questions to speed care.
- Could go further: use AI for medical diagnostics. Raises the question of what happens in case of error. But as AI models improve, AI diagnostics gain reliability (footnote lxii), probably descending below doctor error rate in future. Once that threshold is reached, AI medical assistants will be an attractive alternative to overloaded waiting rooms.
- **Personal anecdote**: in Paris, author had consultations rushed in minutes by over-hurried doctors, at end of which the total information received was: "Follow this prescription." A conversation with a reliable AI assistant would have yielded more useful information.
- Estimated doctors spend 10% of work time on administrative tasks — time that could be saved via agentic automation described in Chapter 10 (footnote lxiii).
- Long-term: these medical assistants will become a palliative for the lack of doctors in the countryside, e.g. cardiologists for whom average appointment delays exceed two months in more than half of French departments (footnote lxiv).
- Counter-argument: aren't we taking the easy way? Should we not foster human contact for elderly and guarantee access to doctors for those who need care? Both aren't exclusive. But solitude of elderly and difficulty accessing care are not recent problems; assuming they won't be solved easily; rather than wait for an ideal solution that may never see the day, let's keep working on human solutions — in parallel, pragmatic AI-based solutions are relevant where they can improve things.

#### Sources / name-drops
- Footnote lxi: 23 deaths in French ER waiting rooms (2022)
- Footnote lxii: AI diagnostic reliability gains
- Footnote lxiii: doctors' 10% administrative time
- Footnote lxiv: cardiologist appointment delays in French countryside

### 9.3 Le défi de l'éducation : conjuguer assistance pédagogique et discipline personnelle (pp. 101–103)
#### Points
- Do great artists/scientists of History owe their genius more to innate talent or to their training and work? Open question, but many great talents whose names crossed centuries benefited very young from quality personal tutor education. **Alexander had Aristotle as preceptor**; Mozart's virtuosity on harpsichord owed much to teaching received from his father from age 4 (footnote 75: for a broader study see Nobel laureates, majority had fathers in top decile for education/income — Paul Novosad, Sam Asher et al., "Access to opportunity in the sciences: Evidence from the Nobel laureates", *Development Economics*, 124, 031, J62, 2 October 2024).
- An AI assistant could provide fully adapted tutoring, exceeding inequality of cultural and economic capital among families. Regardless of parents' income or capacity to help, the child would receive an effective tutorship.
- Main obstacle: personal discipline. Learning requires going through tedious but essential parts (e.g. English verb conjugation — tedious but indispensable).
- With an assistant able to generate a flawless text, the student is tempted to delegate tedious tasks like conjugations without ever thinking. Some difficulties that only learning could formerly overcome can now be systematically bypassed.
- For proper learning, external aids (book, professor instructions, exercise) serve only for first steps, then fade so the student walks alone. Conversely, an assistant that can solve all exercises risks becoming a crutch the student never learns to do without.
- **Study of 1,000 Turkish high-school students**: using ChatGPT as tutor improved student performance on homework, but right after tutoring ended, the level of students deprived of their crutch fell back, often below their initial level (footnote lxv).
- From the teacher's side: hard to tell homework written by a studious student from one written by an AI assistant responding to "Write like a fifth-grader, with some awkwardness, but no error." Even if one student chose effort, a single classmate (poorly supervised by parents) who has their homework generated/corrected by an assistant falsifies learning across the class. Because teacher can't notice or prove cheating, the cheater gets a good grade; after three homeworks, whole class imitates. Tools to detect AI writing are unreliable. Home homework will effectively be disqualified. Imposes a major pedagogical adaptation.
- Even among supposedly more responsible adults, the slope of least effort is slippery. Delegating email-writing to AIs — are we sure to preserve clarity of thought and writing? (footnote lxvi)
- Among US teachers surveyed across primary–high-school, only 6% consider ChatGPT use does more good than harm (footnote lxvii).
- Yet one could imagine better ways of building AI tutors. ChatGPT is an obviously bad tutor because it executes anything asked, including giving answers directly. But possible to adjust an AI tutor's behavior via simple instructions preventing learning-bypass. The Turkish study also tested a reinforced tutor: students using it obtained better results that persisted after tutoring ended (footnote lxviii).
- Well-mastered, these programs are excellent learning supports. **World Bank pilot program in Nigeria**: in six weeks of evening AI classes, class levels rose notably, more than in 80% of usually-run education interventions (footnote lxix). Benefits most marked among most-behind students, confirming personalized tutoring is especially effective against dropout.
- Such a tutor could even do without screens: proven that paper is a better learning support than screens (footnote lxx) — one could imagine a voice-only AI tutor.
- In short, AI arrival in schools can penalize students by letting them cheat but is a formidable asset for those using it right. Revolution will emphasize student discipline and even more so parents' discipline: will they spend time and effort needed to help their child use this assistance only the right way, learning to choose the narrow gate — the path of effort that elevates?

#### Sources / name-drops
- Aristotle / Alexander the Great
- Mozart (father's teaching from age 4)
- Footnote 75: Paul Novosad, Sam Asher et al., "Access to opportunity in the sciences: Evidence from the Nobel laureates", *Development Economics*, 124, 031, J62, 2 October 2024
- Footnote lxv: Turkish study on 1,000 high-school students with ChatGPT tutor
- Footnote lxvi: difficulties of email-delegation to AIs
- Footnote lxvii: US teacher survey — 6% see ChatGPT as net positive
- Footnote lxviii: Turkish study, reinforced-tutor variant
- Footnote lxix: World Bank pilot program in Nigeria (6-week evening AI classes)
- Footnote lxx: paper > screens for learning
- ChatGPT

#### Key quotes
- "The AI assistant capable of solving every exercise risks becoming a crutch from which the student never learns to free themselves." (p. 102, paraphrased)

---

## Chapter 10. La fin du travail (pp. 104–115)

### 10.0 Opening (p. 104)
#### Points
- Machines arriving in the cognitive domain will revolutionize work. Early signs since ChatGPT's November 2022 release.
- A research team observed that since then, job offers linked to text generation (writing, web development) **dropped by 21% on freelance platforms**. Since image-generation models, **comparable decline in image-creation job offers** (footnote lxxi).
- Are we threatened by an unprecedented automation wave? Recalls the Industrial Revolution which had profound global work consequences. Long-term, Industrial Revolution brought benefit: jobs removed were recreated elsewhere, growth brought unprecedented comfort. Can we expect the same for AI?

### 10.1 Le travail face à l'automatisation (pp. 104–106)
#### Points
- Important distinction: don't automate a *job*, but *tasks*. Automation must first be considered at individual-task level.
- Number of automatable tasks varies enormously across professions. From an exhaustive census of each US profession's tasks, researchers measured each profession's automation exposure (footnote lxxii). Results: one profession in five could see 60% of tasks automated; one in two more than 20% automated; rare are fully-automatable professions.
- In technology's current state, most jobs already have a non-negligible share of automation-exposed tasks. Estimate built on snapshot of current AI capabilities — rudimentary vs. coming progress, e.g. AI systems fully autonomously performing tasks that would have taken human workers hours (cf. Chapter 6).
- Particularly valued skills in current society will be most affected; first, professions devoting much effort to low-level intellectual tasks. In many finance or business-law jobs, huge salaries only compensate for very heavy hours and great rigor. To devote dozens of re-reads to correct a document's slightest comma, an AI model is infinitely cheaper and faster than a human.
- Erudition will lose value. Although LLMs don't really have knowledge initially, they can be enhanced to retrieve it from reliable document bases for generation (technique: **retrieval-augmented generation / RAG**). Thus armed, a model gives excellent answers on pointed subjects. Current medical training curricula, with years accumulating monumental knowledge, will likely be reconstructed to value different competencies.
- Even programming will be largely automated by machines. The author's job — AI developer — consists of taking code + objective explanation as input and outputting working code. This well-defined frame lets AI systems greatly help developers (footnote 76: see software like Claude Code or Cursor).
- Other tasks remain harder for AI:
  - Most tasks requiring dexterous physical intervention are out of reach for now. But robotics is making dazzling progress; robots are about to accomplish simple but varied tasks.
  - AI models struggle to combine multiple constraints. Limits their application to real-world tasks requiring rigorous combined-constraint handling.
  - Hallucination risk excludes some applications: for all critical tasks, human control will remain indispensable, at least for verification.
- These barriers will be progressively lowered by model improvement. The day an algorithm can correctly accomplish the tasks asked, its use costs far less than a human employee — runs on a machine optimized for maximum efficiency, no sleep / food / social needs. Employers will face a simple alternative: human salaryman or robot a hundred times cheaper. Even if out of altruism an employer chose to keep humans, this cannot last: the first competitor who chooses automation will impose relentless competition by selling the same product 10 or 100 times cheaper. Consumers, not so fussy except for luxury products, choose best price/quality ratio; the firm refusing automation goes bankrupt for lack of clients. Expect a drop in labor demand in all sectors where the relational component isn't essential.
- **Jobs preserved because the human character itself is essential** (the real determinant: "is this humanity an essential part of the product/service sold?"):
  - Social jobs where clients want to deal with a human, e.g. medical care, retirement-home accompaniment.
  - Live-performance jobs where part of emotion comes from performers' humanity (theatre, music, sport). Film actors, on the other hand, not interacting directly with viewers, will probably be challenged by video-generation models.
  - Luxury art and craft: clientele seeks, beyond the form, human labor and the idea behind creation.
  - Jobs involving human responsibility (hard to attribute legal responsibility to robots): notably justice, certain key industry positions, again medicine.
  - Human decision may remain irreplaceable for critical tasks: political offices, military command, major infrastructure decisions. Democratic governments will probably stay little automated, since a major part of their work is precisely to represent citizens' will.
- Even these jobs will be largely affected — some of their tasks are automatable (e.g. hospital/court administrative tasks better and cheaper by machines).

#### Sources / name-drops
- Footnote lxxi: research on 21% drop in text-generation freelance offers, comparable drop in image-generation offers
- Footnote lxxii: study measuring US professions' automation exposure
- Footnote 76: Claude Code, Cursor

#### Key quotes
- "Employers will face a simple alternative: employ a salaried worker, or a robot a hundred times cheaper." (p. 105)
- "For the other tasks, the water will rise everywhere." (p. 110, forward reference)

### 10.2 La machine ne remplace pas l'employé, elle l'augmente ? (p. 106)
#### Points
- Given LLM current limits — hallucinations, imprecise logic, lack of planning — some tasks remain out of AI reach short term. Suggests jobs not entirely automatable would be preserved and AI would only "augment" them on part of tasks, making them more productive or even better-paid (footnote lxxiii).
- Many studies support that AI promises to appreciably increase worker productivity.
- **BCG (Boston Consulting Group) consultants study**: using AI allowed them to accomplish 12% more tasks, with quality scores 40% higher.
- Consequently, even if a job has many irreducibly human tasks, AI arrival still causes massive job cuts, because productivity increase in some causes others' layoffs.

#### Sources / name-drops
- Footnote lxxiii: studies on AI increasing worker productivity
- Boston Consulting Group (consultant study)

### 10.3 Pourtant la révolution industrielle n'a pas provoqué de chômage durable ? (pp. 107–111)
#### Agriculture analogy (pp. 107–108, Figure 23)
- Figure 23 shows agricultural workforce dropping drastically through 20th century in Japan, US, France, Spain, UK, largely due to mechanization.
- In French countryside early 20th century, arrival of agricultural machines worried some farmers. Others reassured themselves: "A mechanical mower will never replace a farmhand, since it can only do specific tasks and nothing else: it can only make us more effective and earn better livings."
- History decided: French agricultural employment fell from **8 million in 1920 to 2 million today** (see Figure 23), largely due to mechanization (footnote lxxiv).
- 📎 **[Figure 23, p. 107]** — Line chart of agricultural workforce (millions of employees) from 1900 to ~2020 for Japan, United States, France, Spain, United Kingdom, showing a steep decline across the 20th century largely due to mechanization.
- If a farmer buys a machine making employees N times more productive, two options: keep all staff to raise total production, or if he can't find outlets for overproduction, cut costs by laying off employees to keep 1 in N (footnote 77: another altruistic option — do nothing, let workers reduce work time by factor N for same salary — but altruistic boss has non-altruistic competitors who will bankrupt him).
- Historically both phenomena cumulated. **Between 1950 and 2010 in Europe, yield per hectare doubled. Meanwhile, total productivity per employee grew by factor 10** due to mechanization + fertilizers. Productivity grew faster than production — translating into a drop in employment demand (footnote lxxv).
- True limiting factor = market demand. If demand is insufficient to absorb productivity-created surplus, productivity gain happens without layoffs — but at competitors' expense, triggering cuts there (footnote lxxvi).
- **Key result**: at constant demand, doubling each employee's productivity amounts to removing half the jobs. Automation and productivity increase end up in the same result.

#### Industrial revolution didn't cause durable unemployment (p. 108)
- Counter-point: agricultural mechanization did remove jobs and caused temporary unemployment — notably a big rural exodus in France — but did not cause long-term structural unemployment. Mechanization revitalized economic activity, bringing new job families that offered an escape for those unemployed by mechanization. Example of **Joseph Schumpeter's "creative destruction"** concept.
- Phenomenon fully operated for decades. **60% of US job categories in 2018 did not exist in 1940** (footnote lxxvii), notably in medicine, IT, new energy sources.
- Despite laid-off workers' suffering and short-term difficulty finding work, long term, mechanization and automation clearly contributed to general living-standard improvement.
- Work time has progressively reduced for a century, yet no mass unemployment; dynamic isn't new — in Western countries, **total annual worked hours halved since 1870** (footnote lxxviii).
- Two major differences why AI-linked automation will be very different from Industrial Revolution: a quantitative difference (economy will have more limited growth margin) and a qualitative difference (new automation touches all tasks, unlike Industrial Revolution's strictly mechanical automation).

#### Quantitative difference: limited economic-growth potential (pp. 108–110, Figure 24)
- AI work will take growing share in the economy, whether autonomous-regime or via assistants boosting employee productivity. If that share grows faster than the total economic pie, its growth will inexorably shrink demand for human employment. Question: can world economy grow more than the AI-work share?
- World growth on a planet with finite physical resources — space, energy, materials — will eventually be slowed by these physical limits: trees don't grow to the sky.
- This dependency on physical processes is clear in **carbon emissions tightly coupled to world GDP**. Link explained by coupling between general goods consumption and resource/energy consumption producing carbon emissions. Limited energy supply is probably among essential causes of GDP stagnation observed for years in the whole euro zone.
- **Figure 24**: CO2 emissions strongly correlated with world GDP (footnote lxxix). Footnote 78: "decorrelation" observed nationally is actually an illusion caused by ever-increasing tertiarization of our economy exporting emissions to China; France's and other European countries' carbon footprint keeps effectively rising. Cf. Jean-Marc Jancovici, "Moins de degrés et plus d'argent ?", *L'Express*, 29 October 2020.
- 📎 **[Figure 24, p. 109]** — Scatter/line plot of world CO2 emissions (Gt) vs. world GDP (billions of dollars) with points labeled 1990, 2000, 2010, 2020, showing tight linear correlation between emissions and GDP.
- Because of this coupling, Industrial Revolution's unprecedented economic growth caused explosion of resource consumption and pollution. Reproducing growth scheme high enough to maintain full employment despite increasing automation will require raised energy consumption, thus proportional carbon emission increase — contrary to Paris Agreement 2016 climate commitments of most countries. Even abandoning commitments, limited planetary energy resources (e.g. drying oil reserves) will end up limiting growth. Figure 24's curve condemns us to limited growth.
- Paths to sufficient growth preserving full employment despite energy limits? Possible exit: bend Figure 24's curve, i.e. decouple GDP from energy consumption by making processes far more efficient. Trend already started (visible curve inflection recent years) but must be amplified radically. AI can stimulate economy by optimizing many very-costly processes — e.g. industry wastes significant share of energy in poorly-regulated processes (footnote lxxx). But optimization has limits; our processes will never consume less than a physical minimum. To make an omelet, even with zero waste, you still break eggs. Economic-pie growth will always be bounded by physical limits of our world. So if AI-assigned work grows, quantity of work assigned to human employees will shrink; we head toward global work-time reduction.

#### Qualitative difference: Toward a disqualification of human labor? (p. 110)
- Industrial-revolution mechanization only touched physical force. Machine-tools could only occupy simple mechanical tasks — they replaced beasts of burden, causing a sharp drop in Europe's horse population, but left cognitive tasks to workers.
- Today, AIs can access cognitive tasks, and robotics will open access to physical tasks demanding dexterity previously inaccessible to machines. For the first time, AI-enabled automation wave will compete with human labor on all fronts. Even new jobs born from economic transformations can also be occupied by AI systems.
- Automation will start on a limited task plate, but as models keep improving and become more reliable, more tasks will be entrusted. Faced with alternative between employing a human or digital/robotic automation 100× cheaper, employer will end up choosing automation — if not by choice, then under pressure from competitors who adopted AI. Exception: tasks with essential human character. For other tasks, "the water will rise everywhere."

### 10.4 La fin du travail ? (pp. 110–111)
#### Points
- A great artificial replacement is underway. First consequence may seem positive: great lightening. As work demand falls, we can work less. End of 70-hour weeks, exhausted business lawyers shutting down computers past midnight, teachers drowning in stacks of copies, artisans bent over work.
- Replacement will also mean great displacement to new jobs. Two reconversion paths often considered:
  - **First path**: many employees needed to build and maintain all these machines. But few will be chosen — automation's principle rests on reducing staff numbers. Example: automatic supermarket checkouts. Suppose each store installs enough auto-checkouts to replace 10 cashiers, in thousands of stores of the chain → suppressing tens of thousands of jobs. Meanwhile jobs created by automation are mutualized across all chain stores: a 100-person firm can build automatic checkouts for the national or worldwide chain, maintenance ensured by small teams shared among dozens of stores. The thousand jobs created on one side are negligible vs. tens of thousands suppressed. Another view: if automation didn't suppress jobs, no employer would use it — it would only add robot buy/maintain costs on top of salaries.
  - **Second path**: when an employee can no longer sell arms or brain, what's left? Still being a human. Workers would shift to other sectors where human labor is lacking: social, political/associative (where responsibility is at stake), performance, dance, music — where human performance continues to amaze viewers.
- But we don't all have talents of a Mother Teresa, Jaurès, Paganini; we'd quickly buckle under excess of good intentions — we don't need 7 billion such jobs. For the vast majority, the consequence of AI's work progression = loss of our jobs.
- To support all subsistence-deprived citizens, a **universal income** seems unavoidable, a fraction of a national GDP now created by machines. Instating such income won't be painless — it contradicts common-sense formed in the work era — but seems necessary in these new conditions.
- Radical change of societal model: end of necessity to work; retirement for all in a way; disappearance of agendas regulated by work in favor of leisure, a daily life we can use as we see fit.

### 10.5 Trouver du sens dans un monde sans travail (pp. 111–115)
#### Points
- Epigraph: Diderot — "Work, among other advantages, has that of shortening days and extending life." (p. 112)
- Short term, being freed from work necessity looks like liberation. **Aristotle** considered work dehumanizing, to the point of not considering slaves as humans; he even wanted to exclude workers from citizenship: "for the apprenticeship of virtue is incompatible with a life of artisan and laborer."
- AIs could take ancient slaves' role — realizing in physical/cognitive domain the original meaning of "robot," coined 1920 by Czech writer **Karel Čapek** from Czech *robota* = drudgery / forced labor. We might reclaim the Garden-of-Eden life, maybe more dressed but as liberated from necessity.
- **Keynes** wasn't worried about complete work automation; he suggested work was only "one of the habits and instincts of ordinary man, nourished in him for innumerable generations" rather than one of "life's true values." He predicted this instinct would progressively disappear.
- If we manage to keep some semblance of financial equality that meets everyone's needs, automation could be good news.
- **Hannah Arendt — *The Human Condition***: *labeur* (labor) = work whose product is immediately perishable (agriculture, house upkeep, cooking, money quickly consumed). Corresponds to cyclical, cellular life that must constantly renew. This aspect of work brings man closer to animal, limiting him to biological life stage; belongs to nature's domain more than humanity's. Conversely, in Arendt, work also bears a deeper meaning when it becomes **Œuvre** (work-as-opus). Its objective: transcend ephemeral biological life, leave a trace, build a world, a durable common and meaningful space. The man who produces an œuvre is *homo faber*, manifesting his freedom, humanity, asserting himself against nature. Can one live without œuvre?
- First risk: impoverishment of the human spirit. Work is first work on our own desires and formation of conscience; it teaches us discipline because it supposes effort and patience.
- **Hegel, *Phenomenology of Spirit***: opposes the attitude of the master (consumes goods produced by the slave) and the slave (produces goods). Master immediately satisfies desires, stays prisoner of them — something savage about it. Slave learns to surmount nature, go against immediate pulsions by restraining desires. For Hegel, "work is restrained desire, delayed disappearance" because it supposes effort and patience before enjoying fruits. This delay humanizes desire; it's an occasion to become free with regard to oneself.
- Work is also a way of perpetuating oneself by inscribing oneself in the world, recognizing oneself in it. If one only consumes without producing, one remains prisoner of the ephemeral. In work, transforming things to produce a new object, one can recognize oneself in the product. In *Phenomenology of Spirit*, the slave becomes free through his work because he externalizes his interiority, inscribing his will in nature, which comes to resemble him. The master who only consumes does not reach this.
- Paradoxically, the constraint of the slave's forced labor allows exercise of concrete, objective freedom. Pride of contemplating accomplished work, saying "I did it": something singular appeared in the seemingly random diversity of the universe, fruit of our will and action. Facing resisting matter — human situation or complex environment — "muscles" our spirit and will.
- Objection: nothing prevents this — we can still make objects, paint pictures, solve equations in our leisure time, even if machines also handle it in parallel more performantly.
- Indeed, but the very existence of these machines will harm not the deep, spiritual need to make an effort but the short-term, instinctive desire to make an effort.
- **Necessity to work is a powerful vital lever**. Hannah Arendt: "Necessity itself, which from the public-domain point of view has this negative aspect as deprivation of freedom, possesses a motive force... Necessity and life are so intimately linked that where necessity is abolished, life itself is threatened. Because the abolition of necessity, far from automatically resulting in the establishment of freedom, only blurs the distinction between freedom and necessity." We can still work, making it leisure. But missing will be the goad of necessity, the vital impulse, the sense of urgency that makes the heart beat, pushing to grapple with effort and confront difficulties that afterward fill us with pride for a useful act posed. Where there's no more duty, there's no more valorizing sense of accomplished duty.
- Synthesis: automation changes all our *travail* (work) into *loisir* (leisure). Yet leisure's savor often comes from rest after work (footnote 79: Pascal — "Thus life flows by: one seeks rest by combating some obstacles. And if one overcomes them, rest becomes unbearable because of the boredom it engenders.") Leisure benefits from qualities forged by work: taste for effort, temperance, will, creativity developed in reaction to constraint. Danger: AI condemns us to idle leisure, even produces leisures with artificial flavor, and soft, irresolute souls deprived of the backbone given by the relation to constraint (footnote 80: supported by psychosociological studies on unemployment which, beyond perceived social downgrading, show that forced-unemployment idleness can cause decline toward apathy. Cf. M. Jahoda, P. F. Lazarsfeld, and H. Zeisel, *Marienthal: The sociography of an unemployed community*, Routledge, 2002.)

#### Maslow pyramid (p. 114, Figure 25)
- Figure 25: Maslow's pyramid of needs (physiological, security, belonging, esteem, self-actualization), proposed 1943 (footnote lxxxi).
- 📎 **[Figure 25, p. 114]** — Maslow's pyramid of needs, five-tier triangle diagram (from base to apex: Besoins physiologiques, Besoins de sécurité, Besoins d'appartenance, Besoins d'estime, Besoins d'accomplissement).
- Base-level (physiological + security) can be filled by automation. Belonging-need: disappearance of professional environments can be palliated by other life hubs — local community, association, supporters' club, running club, reading club.
- Higher pyramid levels (esteem and self-fulfillment) may be harder to satisfy in a civilization of leisure. Testimony of those who find fulfillment in work often shows an impression of role usefulness taken as mission: their task has a proper added value, brings something to the world, often no one else at that time and place could do it the same way. Arrival of machines filling the effective part of our work better than we do will sap this sense of usefulness. Who would spend years sculpting monumental faces in Mount Rushmore in a world where robots could do better work? Risk of falling into feeling that daily activity brings nothing more to the world's functioning — my existence or not changes nothing to its configuration.

#### How to counter this deleterious feeling (pp. 114–115)
- Perhaps by recovering, in daily activities, a utility that is not commercial but human — a utility not sonorous and stumbling, chronometered and framed, but a human utility, impossible to quantify, of warmth, benevolence, human contact, developed in friendly and family ties. We'll also have more time for city life.
- **Bertrand Russell**, envisaging drastic work-time reduction, saw very positively the possibility of devoting oneself more to political life: "At least one percent [of the population] will probably devote the time previously devoted to the professional world to public affairs of some importance, and, since they don't depend on these affairs for financial support, their originality will be without restraint, and they will have no need to conform to standards created by old experts" (footnote lxxxii). Our political life could gain much: Greeks made an art of it, to the point that echoes of their assemblies still reach us two millennia later.
- Regarding preservation of spirit's qualities born from work in a workless world, probably look for a palliative in exigent educative self-discipline, raising the quest for quality in leisure to the rank of ethics.
- Greeks and Romans indulged in *skholê* (study): by their example many domains remain where perpetual improvement can become a pursued ideal more fruitful than many subsistence jobs today — sport, knowledge, improvement of intellectual and artistic skills. At chess, computer has beaten humans easily for a long time, yet neither amateurs nor professionals stop their practice.
- Lacking a need to work on our environment, we'd keep our quality of man by an ethics of work on oneself. Desire formation dear to Hegel, acquisition of personal discipline, preservation of will — at this price. Spirit and character are worked like muscles. Are we ready to launch into this new work?

#### Sources / name-drops
- Diderot (epigraph on work)
- Aristotle (work dehumanizing, slaves not human, workers excluded from citizenship)
- Karel Čapek — 1920, coined "robot" from Czech *robota* (drudgery)
- John Maynard Keynes (work as mere habit, not true life value)
- Hannah Arendt — *The Human Condition* / *Condition de l'homme moderne* — labor vs. œuvre; *homo faber*; necessity quote
- G.W.F. Hegel — *Phenomenology of Spirit* — master/slave dialectic; "work is restrained desire, delayed disappearance"
- Footnote 79: Blaise Pascal — quote on life, rest, and boredom
- Footnote 80: Marie Jahoda, Paul F. Lazarsfeld, Hans Zeisel, *Marienthal: The sociography of an unemployed community*, Routledge, 2002
- Abraham Maslow — pyramid of needs, 1943, footnote lxxxi
- Mount Rushmore (illustration)
- Bertrand Russell — footnote lxxxii quote on post-work political engagement
- Greeks / Romans — *skholê* (study)

#### Key quotes
- "Work, among other advantages, has that of shortening days and extending life." — Diderot (p. 112, epigraph)
- "Work is restrained desire, delayed disappearance." — Hegel (p. 112)
- "Where necessity is abolished, life itself is threatened." — Hannah Arendt (p. 113, paraphrased)
- "Thus life flows by: one seeks rest by combating some obstacles. And if one overcomes them, rest becomes unbearable because of the boredom it engenders." — Pascal (p. 113, footnote 79)
- "Spirit and character are worked like muscles." (p. 115)
- "At least one percent [of the population] will probably devote the time previously devoted to the professional world to public affairs of some importance" — Bertrand Russell (p. 115)
