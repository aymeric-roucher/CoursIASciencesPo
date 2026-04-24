# Summary of pages 59–92 (Chapters 4, 5, 6, 7)

## Chapter 4. Intelligence, heuristique et compréhension (pp. 59–62)

### 4.0 Chapter opening (p. 59)

#### Points
- Previous chapters described how LLMs work (generating text sub-word by sub-word), but did not explain the phenomena that make them appear to possess common sense and more than statistical capabilities.
- Core question: what gives these models the appearance of reasoning and intelligence?

### 4.1 Prédire du texte, est-ce raisonner ? (pp. 59–60)

#### Points
- Observation made very early: training a model to predict the next word in massive text leads it to develop capabilities in other domains.
- As early as 2017, OpenAI researchers tried to build a model capable of "sentiment analysis" — evaluating whether a short text expresses a positive or negative opinion.
- Sentiment analysis had previously consumed decades of scientific community effort: hand-annotating thousands of user reviews from commercial sites with a 1–5 score.
- OpenAI's 2017 approach was different: instead of training the model to predict a numerical score, they trained a Transformer-type model to predict the text itself.
- The model received a user-review text truncated after N letters, and had to predict the next letter. Example: continuing "Qualité excellente. Ce produit est _".
- This corresponds to the Decoder variant of the Transformer architecture, but at the time the model only generated one completion letter instead of a full sub-word as today.
- Once trained to correctly predict the first letter of the continuation, researchers discovered the model had become excellent at sentiment analysis, despite never being trained for it.
- Mechanism: to correctly predict the first letter of the next word, the model must have an "idea" of the whole word; precise prediction requires a certain level of comprehension of the sentiment expressed in the review's beginning (otherwise, the completion of "Qualité excellente : ce produit est…" could be "très mauvais" instead of "excellent").
- Pushing precision to the extreme supposes complex reasoning and advanced understanding. Example: give the model the entire text of a detective novel up to the moment where the hero is about to unmask the murderer, stopping at "Et devant tous les habitants de l'île, l'inspecteur pointa alors du doigt le véritable coupable : …". To predict the name better than a random guess, the model needs an approximate *understanding* of all elements of the investigation that preceded, and their consequences.

#### Sources / name-drops
- OpenAI (2017) sentiment-analysis work — referenced via footnote xxi.
- Footnote xxii (on the detective-novel illustration).

### 4.2 Compréhension du monde, ou simple empilement d'heuristiques ? (pp. 60–61)

#### Points
- Some argue this is not real world-understanding but a "mathematical simulacrum"; the point is still hotly debated in the scientific community (footnote xxiii).
- The text side-steps the world-comprehension question and focuses on how LLMs can have a *reasoning* capacity.
- It's not just memorization. Even if models had memorized their entire training base (billions of words from millions of websites), this could explain completing "2 × 4 =" (a rote example exists in memory). But for "2 × 4,173 =", or reformulations like "Peux-tu me donner le résultat de la multiplication de deux par quatre virgule un sept trois ?", or with added decimals, the model has probably never seen the exact query — so it must extrapolate from seen examples to similar-but-unseen questions.
- The secret of this extrapolation is the notion of *heuristic*.
- Callback to the chapter 1 example (figure 3) of the neural network classifying images of elephants vs. foxes: the micro-reasoning "if the animal has a tusk, it's probably an elephant" is a heuristic — implemented simply as a positive connection in the network between the neuron "has a tusk" and the neuron "is an elephant".
- A single heuristic is just an outline of simplistic reasoning; imprecise and often false (an animal with tusks could be a boar, not an elephant).
- But multiple heuristics combined approach certainty: an animal with tusks + huge size + grey color ≈ strongly guides toward elephant. Add big ears and a trunk: certainty.
- Humans often use heuristics to reason rapidly by assimilating a problem to known examples. Example: "objects dropped in free fall on Earth fall toward the ground." Proverbs or fable morals ("Patience et longueur de temps font plus que force ni que rage") are other examples — useful approximations.
- Neural networks lend themselves well to heuristics: a positive connection between neurons A and B represents "A generally implies B"; a negative connection represents "A generally implies that B is false".
- Once trained, neural networks are just an immense stack of millions of heuristics, representing such varied laws as: "When clouds cover the sky, it may rain," "When you multiply a number by 10, shift the decimal one digit to the right," or "If Alice insults Benoit, Benoit gets angry."
- This is how a model predicts correctly the next decimals of a multiplication: for "2 × 4,173", it uses heuristics seen during training such as "2 × 4 = 8" (rigorously true), "2 × 17 = 34", and "multiplying a number by 0.1 shifts the decimal one place to the left." The sub-words pass through billions of connections encoding innumerable heuristics and produce "8,346".
- Seen from outside, the correct result seems almost magical — but it is just an accumulation of approximate micro-reasonings, each possibly partially false yet useful as long as their combination leads close enough to the right answer.

#### Sources / name-drops
- Footnote xxiii (debate over world-comprehension in the scientific community).
- Footnote xxiv (on LLMs not having seen exact arithmetic queries).

### 4.3 L'intelligence comme représentation compressée du monde (pp. 61–62)

#### Points
- Without going as far as claiming models "truly understand" the world, we can explain their ability to generalize reasoning by noting that the weights of these neural networks store, via their heuristics, an internal *representation of the world, strongly compressed*.
- More precisely, during training, the network forms a compressed internal representation of its training texts, all of which refer to our world (footnote xxv).
- This representation is certainly different from ours — if indeed humans share a common one — but is no less useful.
- The physical laws we use may themselves be nothing but such compressed representations of the world.
- Example: Newton formulated gravitation as "two bodies attract each other with a force proportional to the product of their masses divided by the square of the distance between them." This is an approximation that works correctly on Earth, and has the advantage of compressing all gravity observations into an extremely simple formula.
- Saint-Exupéry, in *Terre des hommes*, described this operation of creating a law that simplifies observations of reality.
- Note that Newton's law is false in certain cases: according to Einstein's relativity, it no longer applies at speeds close to light, or in presence of very strong gravity (near black holes).
- Newton's model is thus not an absolute law, just a sufficient approximation tied to our observations, later refined by relativity theory — which itself will need to be refined in turn.

#### Sources / name-drops
- Newton (law of universal gravitation).
- Saint-Exupéry, *Terre des hommes* (quoted).
- Einstein (relativity).
- Footnote xxv (compressed world-representation).
- Footnote xxvi (Saint-Exupéry quote reference).

#### Key quotes
- "La vérité, c'est le langage qui dégage l'universel. Newton n'a point 'découvert' une loi longtemps dissimulée à la façon d'une solution de rébus, Newton a effectué une opération créatrice. Il a fondé un langage d'homme qui pût exprimer à la fois la chute de la pomme dans un pré ou l'ascension du soleil. La vérité, ce n'est point ce qui se démontre, c'est ce qui simplifie." — Saint-Exupéry (p. 61)

---

## Chapter 5. Les plafonds de verre : fiabilité, conscience, créativité (pp. 63–68)

### 5.0 Chapter opening (p. 63)

#### Points
- Previous chapters showed dazzling AI progress in a few years. Will this continue to surpass human intelligence?
- In their current state, AIs show limitations — e.g. hallucinations.
- Many arguments arise to reassure the public: "AI will never do X" or "will never replace Y".
- To embody these arguments, the author introduces a character called Benoit, who has tried advanced models, found errors, and concludes that human intelligence remains superior.

### 5.1 « Si une machine ne parvient pas à X, elle ne sera jamais intelligente » (pp. 63–65)

#### Points
- Benoit's claim: AI models succeed surprisingly on some tasks but are blocked on others; they lack notions of good and evil, cannot have friendly relationships like humans, and always risk hallucinating.
- Author's rebuttal: historically, many limitations should have disqualified AI from being considered intelligent — none were real barriers.
- On good and evil: models don't have true consciousness but have the skills to usefully imitate it — they can classify scenes as moral or not, with accuracy close to a human's.
- Counter-example to the "no friendship" argument: Character.ai — a platform where users chat with LLM-based chatbots, each with a personality determined by its initial *prompt*. Most represent manga characters, schoolfriends, or "virtual boyfriends/girlfriends."
- Character.ai claimed to serve 20,000 queries per second, not far from the 100,000 queries per second on Google (footnote xxvii).
- On hallucinations: the problem persists but will probably be reduced to lower than human error rate.
- Yann Le Cun himself said in 2023 (footnote xxviii) that LLMs were structurally incapable of common sense, citing a simple physics problem where all LLMs failed: "I place my phone on the table a few centimeters from the edge. If I slowly slide the table 20 centimeters, what happens to the phone?" At the time, models answered absurdly ("the phone is above the void, so it falls"). Today, all advanced models solve this "insoluble" problem correctly — best LLMs seem to show a correct dose of common sense.
- Objections against AI capability have been numerous, but LLM development has already invalidated most of them. The author bets on "yes, one day" over "no, never" for the question "Will AI one day do X?"
- Benoit's next argument: Turing proved that for any computer program, regardless of computational power, there exists at least one yes/no question that the computer cannot correctly answer in bounded time — either wrong answer, or no answer.
- Footnote 46: this result was built by Turing from Kurt Gödel's incompleteness theorem.
- Author's counter: will this limit have concrete impact? Such a limit may also apply to our brain. Even if a question is inaccessible to machines, it's a drop in the ocean among infinite possible questions.
- Analogy: each eye has a blind spot at the optic nerve's insertion in the retina — we don't notice the defect until told (footnote 47: Mariotte's blind spot, named after priest Edme Mariotte who discovered it).
- AI doesn't need to surpass us on all capacities to be very useful. Reminder of intelligence definition: "the capacity of an actor to choose actions in its environment in view of a goal."
- This capacity is measured on several dimensions. We tend to overvalue those where we shine (footnote 48: the "mirror test" species take to recognize self-awareness — marking an animal's head visibly and placing it before a mirror; functions mainly for species with vision as primary sense, not for species with olfaction).
- Some animals surpass us in other intelligence dimensions: pigeons for orientation, cats for proprioception, elephants for certain memory aspects (footnote 49: Hoerner, F., Lawrenz, A., Oerke, et al., "Long-term olfactory memory in african elephants", *Animals: an open access journal from MDPI*, 13(4), 679, 2023).
- Footnote 49 also tells the story of Clever Hans (Kluger Hans) — a horse whose owner had taught it to count. Given mental-arithmetic questions, it would tap the right number of hoof-strikes. Turned out the horse was reading tension signals from its questioners indicating when to stop.
- Surpassing human intelligence in a single dimension can already have considerable impact. Take calculation — the result of a fixed algorithm that machines mastered since the 1950s. Combined with telecommunications, this is the base of IT companies now dominating global stock markets.
- AI could transform society without ever matching human capacity in any domain, since many tasks could be accomplished with just half our competence. The difference: the machine works at full speed, day and night, with operating cost several orders of magnitude lower than ours.

#### Sources / name-drops
- Character.ai (footnote xxvii: 20,000 queries/second, ~100,000 on Google).
- Yann Le Cun (2023 citation via footnote xxviii — LLM common-sense problem).
- Alan Turing (incompleteness-based limit).
- Kurt Gödel (incompleteness theorem, footnote 46).
- Edme Mariotte (blind spot, footnote 47).
- Hoerner, Lawrenz, Oerke et al., "Long-term olfactory memory in african elephants," *Animals: an open access journal from MDPI*, 13(4), 679, 2023 (footnote 49).
- Clever Hans / Kluger Hans (the counting horse).

#### Key quotes
- "La capacité d'un acteur à choisir des actions en fonction de son environnement en vue d'atteindre un but." (Benoit confirms, p. 64)

### 5.2 L'argument du cheval de labour (pp. 65–66)

#### Points
- Section title in full: "Cette intelligence est artificielle et n'a pas de conscience : elle ne pourra donc jamais égaler notre intelligence."
- Benoit: on emotions, the machine gives an illusion of intelligence, but it remains a mechanical artifice. No mechanism can feel joy, grief, flattery, regret, anger, discouragement. Without that, impossible to recreate the same works as us — AI can write a sonnet or compose music, but something will always be missing, and audiences will feel it.
- Author: for humans, deep experience of difficulties allows one to overcome them with more merit — progress earned through effort vs. cheating via a trick.
- But: entire civilization was built on tools that achieve better results with less effort. Wheeled vehicles for heavy loads may be artifice (the wheel ignores both the pain and the wonderful rest at journey's end), but that does not diminish result quality.
- Dissecting machines' internal mechanism lets us find and correct defects. But if we discover a qualitatively different functioning from ours, it doesn't mean the results are necessarily inferior. Despite their mechanical functioning, LLMs already surpass the average human on some emotional-intelligence tasks — writing poetry (footnote 50), detecting irony in text (footnote xxix).
- Footnote 50: Human judges given poems by humans or AIs preferred AI-written poetry and attributed it to humans more often than the actual human ones. B. Porter and E. Machery, "AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably," *Sci Rep*, vol. 14, no. 1, p. 26133, Nov. 2024.
- Benoit's argument assumes one must always use the same means to reach an objective. Analogy: a 20th-century plough horse seeing the first tractor saying "No worry, this machine will never pull the plough in my place, since it has no muscles."
- Figure 15 (p. 66): two paintings side by side — one by a great artist (footnote xxx), the other by "an AI without a soul." Reader challenged to tell them apart.
- 📎 **[Figure 15, p. 66]** — Two impressionist-style landscape paintings side by side; one by a great human artist, the other AI-generated. Reader is challenged to tell them apart.

#### Sources / name-drops
- B. Porter and E. Machery, "AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably," *Sci Rep*, 14(1), 26133, Nov. 2024 (footnote 50).
- Footnote xxix (LLMs detecting irony).
- Footnote xxx (identity of the painter in Figure 15).

### 5.3 Créativité : « Jamais ces algorithmes ne pourront créer quelque chose de réellement nouveau » (pp. 66–68)

#### Points
- Benoit: AI models are algorithms like any other — they only execute what they're programmed to do. Will they ever be capable of creation?
- Author: this objection was formulated by Countess Ada Lovelace, the first person in history to write a computer program. She wrote, in her note on Charles Babbage's Analytical Engine (the very first computer): "The Analytical Engine has no pretensions to create anything. It can only do what we know how to order it to execute."
- Today, machines are more advanced. LLMs can use reasoning close to what they saw in training. They handle interpolation (midway between seen examples) efficiently, and can even combine several training examples (footnote 51: combining heuristics from different training examples — see start of chapter 3).
- Benoit: but once creation requires departing from existing, they can do nothing more?
- Author: still debated — models may not be so limited. A study asked known researchers to rate the novelty of ideas, without knowing whether the ideas were generated by AI or by other researchers: AI-generated ideas were judged significantly more novel than those generated by human researchers (footnote xxxi).
- Even if models could only make a small side-step from the existing, how much would that limit daily applications? If we counted what fraction of daily activities requires creativity, we probably wouldn't reach even 1%.
- Same for art: AI-generated images have already won enough votes from judges to win art competitions (footnote xxxii).
- Much of Western music is built on short, simple chord series.
- Benoit: yes, many rock/pop hits are built on the "four magic chords" D – A – B minor – G, up to transposition (footnote 52: see the Axis of Awesome concerts listing about 50 examples).
- Author: in these musics, creativity can lie in lyrics or melody, but the whole rests on a pre-existing structure — meaning the creative act is only a small side-step. Isn't a small side-step enough for the majority of historical innovations?
- Example: invention of printing. In the 15th century, Europe had long used wood stamps covered with ink to print motifs; even trials of movable wooden characters (xylography). The Rhineland was going through a great viticultural period, with a vineyard area four times larger than today. The first wine presses, mentioned in Antiquity by Pliny the Elder, had been improved throughout the Middle Ages, and thousands of these machines dotted the region. For his first printing machines, Gutenberg drew on his blacksmith training to create metal movable type, and took existing wine presses to press the palette of characters on paper (footnote xxxiii).
- Creation often lies either in a single additional step beyond the existing (an artist writing a new melody on existing chords and rhythm), or in applying an idea to a different domain (Gutenberg re-purposing the wine press for book printing).
- Inventions like Einstein's relativity theory (footnote 53: one could also cite "thematizations" — moments where a particular case is erected as an object of study; Lagrange thematizing group theory, Cardan's first use of complex numbers; even these start from problems to solve — Einstein relies on Riemannian geometry) or a Beethoven symphony are perhaps too big a leap for current models.
- But if such achievements are required to speak of creative capacity, the bar is very high — too high for the author (footnote 54: it's not even said that such inventions will always remain out of reach for AIs — see chapter 12).

#### Sources / name-drops
- Ada Lovelace (quoted about Babbage's Analytical Engine).
- Charles Babbage (Analytical Engine).
- Footnote xxxi (study on rating novelty of AI vs human ideas).
- Footnote xxxii (AI-generated images winning art competitions).
- Axis of Awesome (4-chord song — footnote 52).
- Gutenberg (printing press).
- Pliny the Elder (early wine presses).
- Footnote xxxiii (printing invention).
- Einstein (relativity).
- Beethoven (symphony).
- Lagrange (group theory thematization — footnote 53).
- Cardan (complex numbers — footnote 53).
- Riemannian geometry (footnote 53).

#### Key quotes
- "La machine analytique n'a pas la prétention de créer quoi que ce soit. Elle peut seulement faire tout ce que nous savons lui ordonner d'exécuter." — Ada Lovelace (p. 67)
- "Pas d'inquiétude, jamais cette machine ne pourra pousser la charrue à ma place, puisqu'elle n'a aucun muscle." — plough-horse analogy (p. 66)

---

## Chapter 6. Les agents IA comme employés (pp. 69–78)

### 6.0 Chapter opening (p. 69)

#### Points
- Big contrast between the "dazzling progress" of past chapters and the still-limited real applications of AI — why?
- To act, one needs hands — means of action. Models to date can complete texts with lots of intelligence, but cannot do anything else: they cannot order groceries, launch Internet research, or help you at work.
- However, LLMs have long been capable, when confronted with a problem, of writing the step-by-step procedure to solve it. Why not directly apply their instructions?
- This gave rise to the idea of inserting models into a larger computer program — a vehicle that reads the model's instructions and has them executed by its tools.
- Such a system combines the polyvalent intelligence of an LLM with the power of IT tools: this "digital robot" is called an AI Agent.

### 6.1 Fonctionnement d'un agent IA (pp. 69–71)

#### Points
- To solve everyday tasks, humans use a myriad of computer tools. Example: to find which animal species has seen the strongest population growth in France over the last decade, if Google can't give it directly, one can reconstruct the result by stringing tools: Google to find relevant pages, web browser to visit and harvest data, Excel to assemble the data.
- Each tool has punctual utility; it's human polyvalent intelligence that weaves the planning fabric in which tool usage fits. In an agent, this fabric is woven by an LLM.
- Reminder: an LLM can only generate word-by-word the continuation of a given input text (its *prompt*). It has no action means, no outside access. Like an intelligent robot enclosed in a room isolated from the world, only communicating through messages slid under the door — incoming: a *prompt*; outgoing: generated text.
- Traditional computer tools are inert — mere control screens (e.g., one for Google search with a keyboard and a button; another for an Excel sheet with its keyboard). To bridge LLM and tools, a traditional program is built — a "stupid robot" with no initiative that only applies fixed rules:
  1. When the larger screen displays a task from outside (user's task), the executor program activates. It notes the user's task, e.g. "What was the culmination point of the Tour de France 2025?", plus descriptions of available tools on a large sheet following a predetermined scheme. Then it slides this note under the door to the LLM — this sequence of instructions is the *prompt* given as input to the LLM. Example prompt: "You are an assistant with access to a code executor. You must solve the task… You can use these tools: search (Google search tool, to which you pass the query), calculator (a tool to execute simple calculations). As long as the result isn't reached, your task is to generate a sequence of actions using your tools that move the task forward. When you're done, write 'End of task. Final result:' and add the final result."
  2. Once it receives the prompt, the LLM writes detailed instructions and slides them back under the door. The executor program takes them and uses command tables to execute them exactly as written, e.g.: "Use Google search tool with query 'Culmination point tour de France 2025'."
  3. After executing commands, the executor notes the results and any execution errors, passes this report to the LLM, and awaits next instructions.
  4. If the LLM *judges* the task isn't yet done, it writes new instructions. Otherwise, if the LLM *decides* to send back the answer, it writes that in its instructions. The executor robot is programmed to write, in the communication channel with the outside user, the part of the instruction following "Final result:" — then it stops.
- Figure 16 (p. 71): "Schéma du fonctionnement d'un système agentique" — depicts user, executor program, and AI model cycle. The example asks "Quel était le point culminant du Tour de France 2025?" and the answer is "Le point culminant du Tour 2025 était le col de la Loze (2304m)".
- 📎 **[Figure 16, p. 71]** — Diagram of an agentic system: three vertical lanes (User / Executor program / AI Model) showing the message cycle with prompt creation, tool calls (recherche_web), and final answer on the Tour de France 2025 example.
- From the user's view, they just send a task and receive the correct answer after a few seconds. But in those short moments, the LLM and its application may have conducted dozens of Internet searches and calculations to obtain enriched information.
- The system formed by this collaboration between the two robots is called an "agentic system". It unites traditional tools and LLMs, leveraging their respective strengths:
  - Unlike an LLM, the agentic system can use computer tools to interact with the environment (and much more: send an email, launch an online purchase, modify a spreadsheet).
  - Unlike a simple tool like Google (no initiative), the agentic system can solve a task that surpasses a single tool's capabilities by linking several tools efficiently.
- Performance depends heavily on the driving LLM. A limited model can't write a single coherent instruction; only the most advanced models plan well enough for multi-step problems. The most recent state-of-the-art models are starting to give a prime place to agentic behaviors in their training, because there's no more doubt that AI agents will be the primary mode of using LLMs.

### 6.2 L'horizon d'autonomie comme mesure de l'utilité des agents IA (pp. 72–74)

#### Points
- The research community long awaited AIs to reach human-level intelligence — "AGI" (Artificial General Intelligence). But this notion is poorly defined, variable across sources; hard to measure something as polymorphic as intelligence.
- Footnote 57: Jurgen Schmidhuber predicts this date at 2040, citing surpassing of human intelligence as the last revolution before the Omega Point inspired by Pierre Teilhard de Chardin. Cf. J. Schmidhuber, "Newmillennium AI and the convergence of history." In W. Duch and J. Mandziuk, dir., *Challenges to Computational Intelligence*, Springer, 2006.
- The author proposes a simpler, more utility-linked measure: the *horizon of autonomy* of an agent built on the model — the duration of tasks the agent can solve autonomously with satisfactory performance.
- Illustration via four tasks and human duration: answer a simple question (30 seconds), answer a complex email (one hour), read and synthesize a 20-page document (a few hours), produce a 20-page synthesis (several days to weeks). For each task, note average duration, sort tasks by duration, then test the agent to see which horizon it still solves.
- Suppose an AI agent has a one-hour autonomy horizon: with computer and tools, it solves on average as well as an average employee all tasks that would take that employee less than an hour.
- Detailed scenario — Monsieur Dupont tasked with finding the best chairs for his office. Task: gather prices and delivery times on the Internet, assemble in Excel, choose the best option. Normally one hour for European sourcing, one hour for Asian suppliers. This time he has an AI assistant.
- Mr. Dupont starts a timer. He prepares instructions (~10 minutes: methodology, context), launches the assistant. The autonomous assistant inspects dozens of pages in parallel, retrieves missing info from the mailbox, fills a big spreadsheet — done in a few minutes.
- Mr. Dupont checks results via the execution report; visits a few cited web pages to verify numbers. Total: ~20 minutes. Remaining time, he lists Asian suppliers similarly. After 40 minutes, he goes for coffee, having accomplished double his normal work.
- The key: AI solves tasks much faster thanks to inference speed. This advantage will keep growing with inference acceleration. Agentic assistants solving < 1-hour tasks will at least double productivity on a large part of IT tasks.
- If autonomy horizon grows, productivity grows exponentially: AI agents with day or week autonomy can coordinate other agents, setting whole hierarchies of assistants in motion.
- Current restriction: tasks on a computer (AI lacks dexterity for physical actions). Even so, AI agents concern a considerable part of the economy — in an economy like ours, one can estimate at least a quarter of work is fully digital (footnote 58).
- Footnote 58: estimate based on telework days; in the US in 2025, bureau of labor estimates 25% of worked days are remote, with a 60% peak during COVID (S. R. Buckman, J. M. Barrero, N. Bloom, and S. J. Davis, "Measuring work from home," *National Bureau of Economic Research*, Feb. 2025, 33508).
- One-hour autonomy agents will therefore revolutionize a large proportion of the economy — and such systems are already within sight.

#### Sources / name-drops
- Jurgen Schmidhuber, "Newmillennium AI and the convergence of history" (2006, Springer) — predicts human-level AI in 2040 (footnote 57).
- Pierre Teilhard de Chardin (Omega Point — footnote 57).
- Buckman, Barrero, Bloom, Davis — NBER paper on work from home (footnote 58).

### 6.3 L'horizon d'autonomie en croissance rapide (pp. 74–75)

#### Points
- To measure agent autonomy, one uses specialized test benchmarks. One of the best-known: GAIA (for General AI Assistants — footnote xxxiv). It contains hundreds of tasks whose resolution requires several steps using different tools. Example: "According to Wikipedia, in 2021, how many Asian countries have sea access and a monarchy?"
- Each GAIA task took human annotators about ten minutes; the hardest level-3 tasks averaged 18 minutes. So GAIA evaluates tasks at an autonomy level close to one hour — matching the earlier example.
- Figure 17 (p. 74): agents made most progress on GAIA in 2025, and should reach human performance by 2026. Shows score curve from 2024 through 2026 approaching the 92% human baseline.
- 📎 **[Figure 17, p. 74]** — Score plot of AI agents on the GAIA benchmark from 2024 to 2026: sigmoid curve through blue data points rising toward the dashed "Performance humaine: 92%" line, reaching it in 2026.
- Footnote 59: the progress curve is modeled by a "sigmoid," following an empirical curve given by Meta AI teams in technical reports published with the Llama 3 series.
- Simple extrapolation of past progress to future suggests AI agents will catch up with humans (~90%) on GAIA during 2026.
- Starting 2026, we will be able to develop agentic assistants with horizon of ~one hour; following the chair-purchasing employee example, their use will double productivity for digital-domain tasks.
- Technical possibility doesn't mean immediate implementation — expect a few months' latency to integrate into software environments and diffuse innovation. But companies will rush to adopt to avoid falling behind.
- First step only: autonomy will improve from hour to day to week, making it progressively possible to delegate more tasks and multiply productivity gains.

#### Sources / name-drops
- GAIA benchmark (General AI Assistants) — footnote xxxiv.
- Meta AI / Llama 3 technical reports (footnote 59).

### 6.4 Une automatisation largement rentable (pp. 75–76)

#### Points
- How much would such assistants cost?
- On GAIA tests, operating costs for agentic systems using the latest models were about €1 per question, with very rapid cadence — a few minutes per question.
- A human annotator solved about 6 questions/hour, costing an employer €2 per question at minimum wage.
- Thus an autonomous assistant is already cheaper than minimum-wage human work.
- Future AI progress comes with scaling up, i.e. increased inference compute power, which should raise costs. But a counter-trend: inference costs for constant power have fallen dramatically — already divided by more than 100 in two years (footnote 60), and the drop is expected to continue, largely offsetting model-size increases.
- Footnote 60: text-davinci-003, published by OpenAI in November 2022, cost $20/1M sub-words; GPT-4o-mini (much higher-performing) costs $0.15/1M sub-words in November 2024.
- So once AI can execute a task satisfactorily, it is far cheaper than employing a human salaried worker.
- Logical that a machine is more profitable: an employee's salary feeds their whole body, life outside work, sleep, leisure, family. An AI's cost just feeds electronic circuits built solely to work day and night (footnote xxxvi).

### 6.5 L'irruption de l'IA dans le marché du travail (pp. 76–77)

#### Points
- AI agent doubling digital productivity could arrive in 2026. Such an autonomous agent has immense value.
- Taking US remote work days as reference, doubling productivity yields an astronomical gain of $5,000 billion for that one country (footnote 61).
- Footnote 61: 260 billion hours total worked in the US in 2022 (source: US Bureau of Economic Analysis, Federal Reserve Bank of St Louis (Fred), reference B4701C0A222NBEA; 1 day out of 3 teleworked). Average hourly cost to a company for a wage hour is $45.38 (Source: US Bureau of Labor Statistics, Southwest Information Office, "Employer costs for employee compensation for the regions," 13 June 2025).
- Who will win this fabulous market? The best models tend to be generalist: this favors a single assistant capturing the world market, not specialized ones per domain. The company developing the best assistant can capture the world market — controlling a large section of the world economy, perhaps more. This financial stake motivates massive investments — a new race to the stars.
- The "artificial employees" described are just one example of possible AI applications. The author uses them as a flood-marker, estimating the date of "economic inundation" at "before 2027" — with caveats: models could stop improving, compute power could stagnate, or scaling laws could eventually fail (next chapter addresses this).
- Dozens of other AI uses are still unsuspected. Before Excel, hard to guess spreadsheets would become fully digital. Expect AI applications to multiply in the coming months.

#### Sources / name-drops
- US Bureau of Economic Analysis / Federal Reserve Bank of St Louis (Fred), ref. B4701C0A222NBEA (footnote 61).
- US Bureau of Labor Statistics, Southwest Information Office, "Employer costs for employee compensation for the regions," 13 June 2025 (footnote 61).

### 6.6 Prendre pied dans le monde physique : les progrès de la robotique (pp. 77–78)

#### Points
- AI uses won't stay digital — they're materializing in the real. Robotics has often lagged promises.
- First autonomous cars announced by Elon Musk since 2016 (footnote xxxvii) but were delayed because autonomous driving requires navigating a complex, unpredictable environment, with potentially catastrophic consequences on error.
- Progress eventually arrived suddenly: autonomous driving is now reality, partly thanks to better sensors. Waymo (Google subsidiary) launched driverless taxi service; passengers experience a surreal ride of a self-driving car.
- Not a one-off: Waymo commercially succeeded in San Francisco and Los Angeles; thanks to reduced prices (no human driver), rapidly captured 20% of the market, surpassing Lyft, now threatening leader Uber. Driverless taxis are being validated in other American cities and Japan.
- In robotics, arrival of Transformer models and progress in reinforcement learning have enabled rapid advances in software control.
- For humanoid robots, balance and walking long remained unsolvable outside test environments. These are now solved: in China, robots already walk Shenzhen streets (robots are part of popular culture there).
- Manual manipulation tasks (fold laundry, cook, tinker, work in a factory) are the next frontier. Practical applicability not yet acquired at time of writing, but impressive demonstrations convince of robots' future viability (footnote 62: recommendation to watch videos from Chinese Unitree).
- Main obstacle to scaling: data collection. Camera and position data needed to train a robotic AI are much harder to collect than text data for language models.
- Mechanically, needed components are assembled: precise-movement motors, batteries for several hours of autonomy, advanced Lidar sensors. Price: Unitree's G1 humanoid (with all components enabling it to become a domestic assistant) already sells in the US for $30,000 — the price of an entry-level car (footnote 63: average new car price in US exceeds $40,000).
- Once the control problem is solved, domestic robots will multiply (footnote 64: robots won't necessarily be humanoid — no need for a head as voluminous as ours; the real advantages of human form are interacting with objects designed for us and appearing more familiar to the humans they interact with).

#### Sources / name-drops
- Elon Musk (2016 autonomous car announcement, footnote xxxvii).
- Waymo (Google subsidiary) — driverless taxi service in San Francisco, Los Angeles, and other cities.
- Lyft, Uber (ride-share competitors).
- Unitree (Chinese humanoid robot maker), G1 model at $30,000 (footnote 63).
- Reinforcement learning and Transformer models in robotics.

---

## Chapter 7. La course aux étoiles (pp. 79–92)

### 7.0 Chapter opening (p. 79)

#### Points
- Our prediction of AI assistant arrival rests on the supposition that AI progress will continue its sustained pace through 2027. Why?
- We have a powerful tool that lets us assert models' power will continue: "scaling laws".

### 7.1 Les lois d'échelle (pp. 79–81)

#### Points
- In January 2020, the still-young OpenAI made a surprising announcement: LLMs improve in proportion to their size. They called this empirical property "scaling laws" (footnote xxxviii).
- More precisely: model performance grows *linearly* when compute power invested in training grows *exponentially*. Like Moore's law — exponential growth — it's handier to note model sizes in orders of magnitude (each order = ×10).
- Scaling laws formulated: "Model performance is proportional to the order of magnitude of training compute." This gives a magic formula for arbitrarily powerful AI: multiply compute by 10, performance goes up one notch. Multiply by another 10, up again. The more compute invested in training a huge model on massive data, the better the model — predictably, before even starting.
- These laws have driven all AI progress since discovered; confirmed repeatedly after scaling by many factors of 10 (footnote xxxix), with only minor adjustments. The central idea of the book: the scaling-law hypothesis is the hinge between AI's past and humanity's future.
- Figure 14 (image generation, from a Google model — footnote xl): shows image improvement as training compute grows — from deformed to photorealistic following user prompts.
- Figure 18 (p. 81) caption: "Amélioration du modèle à mesure qu'augmente la capacité de calcul investie dans l'entraînement. L'architecture du réseau de neurones demeure identique, seules augmentent sa taille et la puissance d'entraînement."
- Figure shown on p. 80 with prompts "Une photo portrait d'un kangourou vêtu d'un pull orange à capuche et de lunettes de soleil bleues, debout sur l'herbe devant l'Opéra de Sydney, et tenant une affiche qui dit Welcome Friends !" and "Une photo d'un astronaute à cheval dans la forêt, en face d'une rivière couverte de nénuphars" — at powers ×1, ×100, ×3,000.
- 📎 **[Figure 18, pp. 80–81]** — Six image-generation samples arranged in two rows (kangaroo in orange hoodie at Sydney Opera House; astronaut on horseback in lily-pad forest), each at compute levels ×1, ×100, ×3,000, showing progression from deformed outputs to photorealistic images as training compute grows.
- Scaling laws also apply to inference: OpenAI's o1 model showed scaling laws of the same type on inference (exponential compute for linear performance). More precisely: the more one makes a Decoder model generate a long response, training it to follow a long thinking process, the better it can self-correct by generating phrases like "Et pourtant, en y regardant de plus près…" that put it back on track — improving results.

#### Sources / name-drops
- OpenAI, scaling laws, January 2020 (footnote xxxviii).
- Footnote xxxix (scaling laws confirmed after many factor-10 scalings).
- Google image-generation model (footnote xl — figure 14).
- OpenAI o1 (inference scaling laws).

### 7.2 Vers une ultra-intelligence artificielle (pp. 81–83)

#### Points
- If machine intelligence keeps progressing via scaling laws, it won't take long to surpass ours.
- On any intelligence measure: once the performance needle begins to tremble, it quickly jumps to 100%. Cf. figure 8 — performances often seem to stagnate, then jump suddenly.
- This counter-intuitive curve (stagnation then jump) has been called a "mirage" by researchers (footnote xli). The underlying intelligence may improve at constant speed, but our intelligence tests compare AIs to a reference (usually human), creating a magnifying-glass effect around that reference — ignoring distant progress and amplifying progress near the reference.
- Analogy: training a humanoid robot to long-jump. From scratch, need to assemble body, tune limbs, give it reactive stand control — before walking or running is even addressed. After all this work, robot still can't jump — best jump remains at 0 meters. But the essential progress is already done! Then, teaching a longer stride gets a first jump. Improving gestures and motors lengthens it.
- If the robot jumps 8m, it's already at the level of national competitions. Improve by 10%: it passes 9m, beating Mike Powell's 1995 world record of 8m95. For humans, going from 8m to 9m makes all the difference, because we all start from fairly standardized hardware — our body — and changes are "superhuman" effort. Our championships don't really measure long-jump performance: they measure between 5m and 8m95, with a pronounced peak between 8m and 9m where Olympic medals are decided.
- For a machine with modifiable architecture, this 1-meter progress is trivial compared to all previous progress — the hardest step was learning to run, not improving motors by 10%.
- For intelligence, same story: the essential path was done on the day backpropagation's power was discovered, or the virtues of attention layers. Now, simply by raising training motors' power, AI already reaches the shoulder of human intelligence in many domains; not much more needed to match and surpass us.
- Figure 19 (p. 82): Model trajectory has been improving for years; now that we feel the improvement, little remains to surpass human intelligence. Y-axis labeled with levels: Raven, Chimpanzee, Child, Bachelor (baccalaureate), Nobel Prize.
- 📎 **[Figure 19, p. 82]** — Intelligence-vs-time curve: blue exponential-like curve crossing horizontal reference bands labelled Corbeau, Chimpanzé, Enfant, Bachelier, Prix Nobel; the current point is between Enfant and Bachelier, with a dashed continuation rising above human levels.
- Conclusion: don't say "these AIs are inferior to the best of us, so they'll stay so." Rather: starting from complete inability to form a correct sentence, AIs have in a few years covered most of the path to human intelligence. They won't stop there. Coming progress will be superhuman.

#### Sources / name-drops
- Footnote xli (the "mirage" of stagnate-then-jump curves).
- Mike Powell (1995 long-jump world record, 8m95).

#### Key quotes
- "Les progrès à venir seront surhumains." (p. 83)

### 7.3 L'hypothèse des lois d'échelle et le départ de fusée (pp. 83–84)

#### Points
- Since scaling laws have held so far, we can assume they continue — models will keep getting smarter as compute invested grows. The "scaling law hypothesis" fuels all current AI investments, totaling hundreds of billions of dollars worldwide.
- Figure 20 (p. 83): Compute invested in training largest models. Since ~10 years, increasing about 0.6 orders of magnitude per year — multiplied by ~4 each year (10^0.6). Not just Moore's law, which alone would give only 0.15 order of magnitude per year (footnote 66).
- Footnote 66: Moore's law = factor √2 progress per year = 0.15 OoM base 10. Recently fueled by CPU→GPU transition, and specialized GPU architectures supporting reduced encoding precisions (32 → 4 digits, FP32 → FP4) for faster calculations.
- Figure 20 data source: Epoch AI. Labels visible: GPT-3, GPT-4, Gemini 1.0, Grok 4 — trending along "0.6 OoM/year" line.
- 📎 **[Figure 20, p. 83]** — Scatter plot of training-compute (FLOP, log scale 10^20 to 10^27) versus year (2019–2025), with a dashed "Tendance: 0.6 ODG/an" trend line and labelled points GPT-3, GPT-4, Gemini 1.0, Grok 4.
- The key factor driving raw compute-power increase is the explosion in training investment. Example: Project Stargate, launched by OpenAI in January 2025 in partnership with SoftBank and Oracle — budget of $500 billion over the next four years (~0.5% US GDP each year) — to build a distributed training center consuming 5 GW of electricity.
- Investment increase is seconded by frequent algorithmic improvements: we use available compute increasingly efficiently (footnote 67: e.g. Flash Attention, RoPE, Grouped-Query Attention, Mixture of Experts. Sam Altman noted on Twitter that GPT-4o-mini was better-performing than GPT-3.5 at release, at >100× lower cost — a 2 OoM improvement in 1.5 years; comparison on inference, but much is common to both stages).
- Quantitatively, an efficiency factor of ~0.45 OoM per year on top of raw compute growth (footnote xliii).
- Total effective compute power (raw growth + efficiency) grows by more than 1 order of magnitude per year — at least ×10 annually. Recent months: accelerated further with the global AI race.
- Recall the fable of the tyrant, the sage, and the chessboard: such exponential growth leads very quickly very high.

#### Sources / name-drops
- Epoch AI (Figure 20 data source).
- Project Stargate, OpenAI/SoftBank/Oracle, $500 billion, Jan. 2025.
- Flash Attention, RoPE, Grouped-Query Attention, Mixture of Experts (footnote 67 — algorithmic improvements).
- Sam Altman (Twitter comment on GPT-4o-mini vs GPT-3.5).
- Footnote xliii (0.45 OoM/year efficiency factor).

### 7.4 Les carburants de la fusée (pp. 84–89)

#### Points
- The rocket-like compute takeoff needs fuels: sufficient data volume, processors, and energy — all at high price. Model trainings are already among the most expensive enterprises of our time.
- Sam Altman (OpenAI CEO) declared that GPT-4 training cost more than $100 million (footnote xliv).
- Derisory compared to what's needed to scale further. Figure 21 reviews needed components.
- Figure 21 (p. 85) — Training-cost trajectory table (projected dates):
  - GPT-3: 3×10^23 FLOP, ~$10M, 1 MW (= 1000 homes), 2020.
  - GPT-4: 4×10^25 FLOP, ~$100M, 10 MW (= large offshore wind turbine), 2022.
  - o1: ~10^27 FLOP, ~$1 billion, 100 MW (= hydroelectric plant), 2024.
  - (Next): ~10^28 FLOP, ~$10 billion, 1 GW (= nuclear reactor), (2026).
  - (Next): ~10^29 FLOP, ~$100 billion, 10 GW (= world's most powerful nuclear plants combined), (2027–2028).
- 📎 **[Figure 21, p. 85]** — Table "Trajectoire des coûts d'entraînement" with columns Modèle / Puissance d'entraînement (FLOP) / Coût (USD) / Puissance électrique / Date d'entraînement, listing GPT-3, GPT-4, o1, and two projected future tiers up to ~10^29 FLOP / $100B / 10 GW by 2027–2028.

#### 7.4.a Financement (p. 86)

- Immense financial needs are but a pittance against potential gains (trillions of dollars).
- Stargate budget allows continued performance improvement at current pace at least until 2028; then companies will continue scaling race.
- Mastering most advanced systems is a national-sovereignty stake; states will invest too.
- Comparison: France's nuclear equipment plan after the 1973 oil shock cost 13 billion francs = 6% of GDP at the time; today, same GDP proportion = €170 billion (footnote 68: base GDP 2023 of €2,800 billion).
- If we wanted, several European countries could unite forces to start tomorrow the construction of a world-class European model.

#### 7.4.b Puissance électrique (pp. 86–87)

- To train biggest models, titanesque compute needed. A single GPU (graphics processing unit) is insufficient — training is spread over tens of thousands of GPUs, requiring regular synchronization of model weights.
- To optimize transfer speeds, companies build immense GPU farms in contiguous buildings, running continuously for months — a "mega-cluster" demanding enormous energy (for GPU nominal power plus cooling and other infrastructure).
- Training 2026-class models: several gigawatts total, approaching a French nuclear plant's output. Power must be very stable, continuous for months — hydroelectric or nuclear installations fit best. Companies are already contracting plants.
- Example: Three Mile Island plant (famous for 1979 accident) will be recommissioned to power Microsoft clusters (footnote xlv).
- If current growth continues, training will demand 10 GW — even Gravelines (France's most powerful nuclear plant at 5.5 GW) will be surpassed, as will most countries' energy sources.
- Companies already prepare: to exceed "single location, single time" rule, they seek to distribute training across several distant clusters (footnote xlvi). To avoid synchronization delays between distant centers, model weights must transfer in seconds: for 100-trillion-parameter models, transfer rate of ~petabytes per second — seemingly possible between European countries.
- Training could be distributed across 3-4 distant clusters, reducing energy needs per source — but requires major infrastructure work. Energy seems likely to become a major constraint on advanced AI development.

#### 7.4.c Puissance de calcul (pp. 87–88)

- Will it be possible to mobilize needed compute? Moore's law gives long-term affirmative answer if it holds — but that alone gives 0.15 OoM/year, extremely slow compared to current 0.6 OoM/year from investment explosion.
- Will rapid industrial GPU production growth sustain? Reference: compute to train a GPT-4o-equivalent model (Llama-3-405B) = 39M cumulative hours on an NVIDIA H100 GPU (footnote 69). For 3 more OoM (×1,000) at the same GPU scale: 4.5 million H100 GPUs running continuously for 1 year.
- Global GPU production capacity: NVIDIA controls 90% of the market (footnote xlvii). In 2024, NVIDIA produced 1.5–2 million H100s — triple 2023 (footnote xlviii). If production keeps tripling yearly, they'll make the needed compute by end of 2025.
- Production rhythm thus sufficient for growth targets, even with slight slowdowns.
- More disruptive perturbation possible? Foundry installation costs (called "fab labs") have also regularly doubled — now tens of billions of dollars. That's why many chip companies have no own factories, designing chips for specialized foundries like Taiwan's TSMC. At state-level investment scale, international conflicts could halt production.
- Taiwan's TSMC shares 50% of global market with South Korea's Samsung. Taiwanese semiconductor production is strategically important — explains continuous US commitment to Taiwan's sovereignty vs Chinese claims.
- Hard to know if raw compute will limit model scaling. Without major geopolitical tensions, GPU supply should suffice. But China's claims on Taiwan could change things.

#### 7.4.d Données d'entraînement (pp. 88–89)

- Compute governed by scaling law is proportional to (number of parameters) × (number of training sub-words). Experience shows one must maintain proportionality between these two factors (training compute-optimal Large Language Models). To multiply compute by 100: multiply both parameters and training data by 10.
- Could training data be the limiting factor? It took 15.6 trillion (thousands of billions) sub-words to train Llama-3.1-405B — more than 10,000 billion words (words ≈ 3/4 of sub-words).
- Current method: collect text from thousands of Internet pages via crawlers — programs that jump link-to-link and record content. Largest archive, collected by nonprofit organization Common Crawl, contains >100 trillion sub-words. Much content duplicated or useless; after cleaning, 30 trillion sub-words — the RedPajama-v2 dataset.
- Llama-3.1 (Meta) already uses most available sub-words on the Internet. Some margin by archiving certain omitted sites, hence big AI companies collect archives themselves with own crawlers. But this data windfall risks drying up: sites increasingly block crawlers to protect IP; and remaining quantity won't allow multiplying total data volume by ten. Internet-page archives have been likened to fossil energies for AI: abundant, cheap, but limited.
- Will data lack be a training-size brake? Researchers have serious leads to overcome the obstacle:
  - Usable text isn't just Internet. If ChatGPT's 400M weekly users each have a 1,000-word weekly conversation, that's 26 trillion sub-words/year — pushing the limit further.
  - Since models become multimodal (text, image, sound), why not use other data than text? Yann Le Cun suggests video: a child sees in its first four years of life more information than in the vastest LLM text corpora, and this volume corresponds to the video uploaded to YouTube every 30 minutes (footnote 70).
  - Footnote 70: Largest LLMs trained in 2024 on 20 trillion tokens = 6×10^13 bytes of info. 16,000 hours of vision correspond to a comparable volume transiting our optic nerves.
  - Still more margin to optimize learning without increasing data volume. Current training: simply pass the model once through the training corpus, predicting the next sub-word each step and penalizing error-leading connections. If students learned that way, it'd be the worst method — skimming books once and hoping to retain something. Effective students re-read, make links, test themselves regularly, etc.
  - Such methods can make LLM training much more efficient. Example: repetition helps. Train a model multiple times on same data — first repetitions progress at same rate as first pass. Gains diminish, stagnating beyond ~40 passes (footnote xlix), but already allows going up one order of magnitude.
  - Use synthetic data — data generated by LLMs themselves. Seems counter-intuitive (how can training on machine-written text surpass the machine's intelligence?), but works surprisingly well up to a limit (footnote l).
  - Have LLM generate computer problems then train itself to solve them via a code-execution tool.
- Many leads to overcome data shortage — this "fuel" doesn't seem likely to run out soon.

#### Sources / name-drops
- Sam Altman (GPT-4 training cost >$100M — footnote xliv).
- Three Mile Island (1979 accident), to be recommissioned for Microsoft clusters (footnote xlv).
- Gravelines nuclear plant (5.5 GW, France's most powerful).
- Llama-3-405B / Llama-3.1-405B / Meta (reference model equivalent to GPT-4o).
- NVIDIA (90% GPU market, H100).
- TSMC (Taiwan), Samsung (South Korea) — foundries, 50% global market each.
- Common Crawl (nonprofit; 100T sub-words; 30T cleaned = RedPajama-v2).
- Yann Le Cun (suggests video-training argument).
- Footnote xlvi (multi-cluster distributed training).
- Footnote xlvii, xlviii (NVIDIA market share and 2024 production).
- Footnote xlix (40-pass stagnation).
- Footnote l (synthetic data works).

### 7.5 Ad astra (pp. 90–92)

#### Points
- Previous sections indicate that, absent major perturbation, fuel will suffice to continue exponential compute growth for coming years.
- Most probable disruption: geopolitical conflict slowing raw compute growth. But even so, effective compute can continue growing via permanent optimization of LLM training/inference methods. Current models are terribly inefficient in many ways.
- Figure 22 (p. 90): "Ressources nécessaires pour l'entraînement d'un LLM de 10^28 FLOP (« Objectif »)". Three bar charts comparing GPT-4 (2022), current state, and Objective along electricity (GW), funding (billions USD), and compute (FLOP) axes. "Production 2024" corresponds to total FLOP that a year's continuous operation of all H100 GPUs produced by NVIDIA (95% world GPU share) would yield.
- 📎 **[Figure 22, p. 90]** — Three side-by-side bar charts (log scale) on electricity (GW), funding (billions USD), and compute (FLOP), each comparing GPT-4 (2022) with a current reference (Centrale nucléaire / Stargate 2025 / Production 2024) and the "Objectif" 10^28-FLOP training.
- Decoder models generating text sub-word by sub-word limits vision vs. a model that could generate ideas directly. Current sub-word tokenization is considered obsolete — still largely based on arbitrary choices made years ago.
- Current decoding chooses at each step the highest-probability sub-words (with some randomness for diversity) — naive (footnote li). LLMs lack efficient memory, cannot call on outside knowledge or resources, can't execute rigorous calculation, cannot plan tasks.
- Analogy: imagine questioning a human under same conditions — they must immediately respond the first idea that pops up, no time to reflect, calculate, consult, correct. Far from best responses!
- Current LLM functioning leaves much margin for large qualitative improvements, potentially equivalent to several orders of magnitude on scaling laws (footnote 71).
- Footnote 71: Example — in 2023 it was discovered that LLM performance could be radically improved (5–10 points on most benchmarks) by making them reason step-by-step, e.g. adding the suffix "Réfléchissons étape par étape : " (*chain-of-thought*) to the prompt, forcing the completion to begin there. So the model *thinks* better about different aspects of the question before formulating a response. This discovery of the importance of spending reasoning effort led to a new paradigm, *test-time scaling*, with new model progress.
- Summary: model power will likely continue exponential growth. If scaling laws still hold at larger training sizes, they mechanically promise AI will keep improving until it surpasses human intelligence in many dimensions.
- But scaling "laws" are only empirical, like Moore's law. Perhaps one day, increased compute won't produce performance increase. What probability do scaling laws hold for 5 more OoM from today: 30%? 50%? 70%? No one knows exactly — it's a bet. If the scaling-law hypothesis proves false, much of the book's continuation will be invalidated.
- Several elements support belief that scaling laws will continue to push AI above human intelligence in most tasks:
  1. These laws held across dozens of orders of magnitude — unlikely they disappear just below human intelligence.
  2. Even if training scaling laws weaken, inference scaling laws remain (revealed September 2024 by OpenAI) — model performance improves as compute invested in response generation increases.
  3. More substantial improvements in model functioning are possible — promising qualitative leaps independent of scaling laws.
- Whatever the probability that AI surpasses human intelligence (50% or 95%), it's a Pascalian bet. Maybe AI will stop a few steps above current form, already useful but not radically transformative; then our reflection is in vain. But if it continues progressing, it will transform humanity vertiginously.
- For the rest of the book, we'll place ourselves in what seems our world for years now: the world where scaling laws hold.
- Once AI reaches the level of helping us as effectively as a human collaborator, progress won't stop. Some AI systems have already reached superhuman capacities, such as locating where any photo was taken (footnote lii), or detecting subtleties in medical imagery inaccessible to doctors (footnote 72).
- Footnote 72: Models trained on retinal scans can predict patient's sex at 90% accuracy, without anyone knowing which differences they base the prediction on. E. Korot et al., "Predicting sex from retinal fundus photographs using automated deep learning," *Sci Rep*, vol. 11, no. 1, p. 10286, May 2021.
- In more and more domains, we'll reach super-artificial-intelligences within a few years.
- The delay before our lives are transformed depends not so much on technical feasibility as on adoption time (footnote 73: mobile phone took about 20 years to conquer the planet). Then our society will be profoundly upended.

#### Sources / name-drops
- OpenAI (inference scaling laws revealed September 2024).
- Footnote lii (AI locating photos in the world).
- E. Korot et al., "Predicting sex from retinal fundus photographs using automated deep learning," *Sci Rep*, 11(1), 10286, May 2021 (footnote 72).
- *Chain-of-thought* prompting — discovered 2023 (footnote 71).
- *Test-time scaling* paradigm (footnote 71).

#### Key quotes
- "Les progrès à venir seront surhumains." (p. 83, referenced again in spirit at p. 92)
- "Alors, notre société sera profondément bouleversée." (p. 92)
