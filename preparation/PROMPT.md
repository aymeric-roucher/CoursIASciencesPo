here's a task for you: i've got contacts with some people at sciences po via email, including Lazarus and Vassy. Now we want to create a curriculum , i've sent them a proposal, which you see at cours_sciences_po/Proposition Sciences Po.md. now after talking with lazarus about that further, it would be only 6 sessions for the Paris campus : we'd probably keep sessions 1-6 from the proposition. Can you, using the base material from my book, situated at cours_sciences_po/ultra_intelligence.pdf, redact the full text for these sessions, keeping i nmind they should last around 2 hours! All the course should be in english. Write main points of the paragraph first (reuse the points from the syllabus proposition, add more from the materials), then each time develop as a quote after that. Put all that into a new Google doc like "Syllabus Draft for the AI Course - Aymeric Roucher" (maybe you can start by working in markdown)

So, steps to respect:
- make a timer function that using a standard debit of speech, counts the time taken by a script
- send agents to read the book and list points made in each chapter:
 - they shou dmake sure to list ALL the points made and sources used in each chapter, under one big cours_sciences_po/SUMMARY.md
- launch subagents with precise instructions, one per session, to redact the script:
    - make it detailed and add concrete examples sourced from the internet
    - make it technically accessible to French Bac levels student, so not too technical, but you could sprinkle in ome optional math when needed, or some details like how exponential progress works. Make it lively, provide examplees, etc ; basically they should base it a lot on the book materials, using the SUMMARY.md 
    - should ue the timer function to check length
- follow up: send verifier agents, one per session
    - proofreading (again based on the book, check internet if needed) and fixing factual errors/typos 
- follow up, send fixer agents to corret each session



- Remove any em-dash everywhere : "—" must go.
- "Good afternoon, everyone. Please come in, find a seat, no rush. If you are just waking up from a long philosophy lecture, " is useless to write in a script, but the "let me tell you today is going to be differetn" is interesting as an opener.
- "Before we dive in, take a breath. Look around. This is the last time we will be together" => this is shit, remove that part
- Reread our figures (maybe grep them from pdf), and add them where needed. Each figure should be added somewhere (mayb that warrants a dedicated figures agent)
- "Most of what you will read online is either hype — "AGI next Tuesday" — or denial — "it is just autocomplete." Neither is useful." Postures like this, that cry to create an artificial balance, are actively harmful to student understanding: ban them. Our view is AGI pilled, don't try to play down the AGI hype. For instance "> Fourth, be skeptical of both the doomers and the hype-artists." replace this by "We constently underestimate how fast th exponential take-off is going. Getting used to things getting faster is crazy hard ; but we'll have to if we want to play a part".
- "*— "But isn't this just a chatbot with extra steps?"*" WTF, don't roleplay a session. It would b more useful to script some answers to frequent questions at the end of each lesson.