# Session 4. Using AI in practice: tools, pitfalls, and a personal ethics

*Sciences Po Paris, English-language course for undergraduates.*
*2-hour session, target pace around 140 wpm.*

---

# 0. Opening. What we are doing today

**Key points:**
- Pivot: we have spent three sessions on the inside of the rocket (neural networks, transformers, decoders, scaling laws, agents). Today we step outside and ask: what happens when a human being actually presses "Enter" on ChatGPT, Claude, or Gemini?
- Goal: turn you into lucid, effective, ethical users of large language models in the next two hours.
- Roadmap: (1) diagnose the most common failures: hallucinations, sycophancy, other biases; (2) build mental models for when to trust and when to verify; (3) tour the tools that matter right now, Deep Research, agentic assistants; (4) sketch a personal ethics of AI use; (5) hands-on live demo, choose between a personal homepage or a Financial Times-style infographic, both built with Claude Code, with a fallback for students who don't have a laptop open in front of them.
- Session 5 preview: "what does all of this do to society." Today is individual; next time is collective.

Today is going to be different. We have three sessions behind us now, and I want you to feel the shift we're making today. Up to now we've been inside the engine room. We have opened the casing of a large language model, we've peered at the attention layer, we've followed a sub-word as it passes through billions of parameters, we've talked about scaling laws and agents and the course aux étoiles. That was, let's say, the physics of the rocket.

Today I want us to walk back outside, stand next to the launchpad, and ask the very pedestrian question: what do you, a 20-year-old Sciences Po student in April 2026, actually do with this thing? Because this is the part that matters for your daily life. You are going to spend the next 50 years of your career with these models as your colleagues.

And I can tell you, having used them every single day for the last four years, first to write code, then to write essays, then to draft a book, then to build a company, the difference between someone who uses these tools well and someone who uses them badly is already enormous, and it will only grow.

I want to say something slightly uncomfortable about this. The gap between a good user of these models and a bad user of these models is, in my experience, bigger than the gap between a strong student and an average student in any individual subject. It is also bigger than the gap between a skilled writer and an unskilled one, or between a skilled researcher and an unskilled one.

It compounds. The good user learns faster, produces more, and, crucially, catches the model's errors; the bad user learns more slowly, produces mediocre work polished into falsely confident prose, and absorbs errors silently. By the time you graduate, that gap will be one of the most important professional divides of your generation. I would rather you leave this room today on the good-user side of it.

And I'll say something stronger. We constantly underestimate how fast the exponential take-off is going. Getting used to things getting faster is crazy hard, but we'll have to if we want to play a part. The student who treats April 2026 as if it were April 2023 is going to be lapped by the student who treats April 2026 as if it were the slowest moment of their adult life, because that is what it is.

So here is our plan. We will start with the failures. I want you to know exactly how these models fail, because a tool you trust blindly is a tool that will eventually betray you. Then we will build up positive habits: mental models, verification routines, when to ask and when to refuse.

Then we will do a tour of the most useful tools available right now, in April 2026, and in particular Deep Research, which I use almost daily. Then we will talk ethics: when do you disclose that you used AI, when do you not, when do you refuse to use it at all.

And then, this is the part I am most excited about, we will open our laptops, and in 45 minutes you are each going to build and publish something real with Claude Code. You will pick between two options: a personal one-page website, or a Financial Times-style infographic on a topic you actually care about. If you don't have a laptop, don't panic: I will walk you through Lovable, which is a sort of Claude Code for people who don't want to touch a terminal. By the end of this session, you should have a live URL you can send to your parents.

Next session, Session 5, we zoom out again: what does all of this do to society, to elections, to war, to meaning? But that's for next time. Today stays close to your keyboard.

One last practical note before we start. I want this to be interactive. Interrupt me. If something I say contradicts your daily experience with these models, say so; your daily experience is evidence, not noise. If I use a term that doesn't land, flag it. If you have a workflow that you love and I haven't mentioned it, raise your hand and we'll discuss it.

The worst thing that could happen today is that I lecture at you for two hours and you go back to your dorm and use models the same way you used them yesterday. The best thing that could happen is that one of you says something mid-session that changes how the rest of the room thinks about one of these tools. That happens. Let it happen.

---

# 1. The ceiling that still holds. Do hallucinations persist?

**Key points:**
- Definition: a hallucination is any statement a model emits that is confidently wrong and not grounded in its input. The model does not have an internal "I don't know" flag that lights up.
- Why they happen: the decoder architecture picks the most probable next token from a probability distribution. There is always non-zero probability on a wrong continuation. Useful metaphor: the student who pulled three all-nighters, broad erudition, impeccable composure, sometimes dreaming out loud.
- OpenAI's September 2025 paper, "Why language models hallucinate" (Kalai, Nachum, Vempala, Zhang): models hallucinate because standard training and evaluation procedures reward guessing over admitting uncertainty. It is a scoring problem as much as a model-capacity problem (https://openai.com/index/why-language-models-hallucinate/).
- Empirical snapshot: the Mata v. Avianca case (S.D.N.Y., June 2023): two U.S. lawyers fined $5,000 for filing a brief full of ChatGPT-fabricated citations (https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.).
- Good news: hallucination rates are falling. Yann Le Cun's 2023 "phone sliding off the table" riddle used to trip every model; by 2025 every frontier model passes it. Error rates on factual benchmarks have dropped from double digits to low single digits in two years. *[Show on screen: Figure 12, benchmark scores over time, climbing past human baselines one domain after another, on a steepening curve.]*
- Bad news: the architecture guarantees the rate will never be zero. Like a pilot's error rate, you can drive it down, but you cannot make it structurally impossible.

Let me start with the one failure mode that will bite you most often: hallucinations. I want to give you a clean definition, because the word gets thrown around. A hallucination is a statement the model produces that is factually wrong, that is not supported by anything in its prompt, and that is produced with complete confidence, the model does not flag it, the model does not hedge, the model sounds as certain as when it tells you two plus two is four.

Why does this happen? Go back to Session 1. A decoder language model works by building a probability distribution over the next sub-word and then sampling from it. When the model has seen a factual pattern a million times in training, the correct answer sits at 99.9% probability and the model gets it right.

But when it has seen the pattern only twice, or never, or only in vaguely similar contexts, the probability distribution flattens out. Some wrong answer becomes plausible enough to get sampled. And because the model has no internal "I don't know" circuit, there is no neuron that lights up saying "uncertainty alert!", the model produces the wrong answer with the exact same self-confidence as when it produces a right one.

Let me insist on that last point for a moment because I don't think it lands the first time you hear it. In a human being, there is a clear phenomenology of not knowing. You feel it. When someone asks you the capital of Turkmenistan and you don't know, you experience an internal sensation of not knowing. You hesitate. You say "I think it's Ashgabat?" with a question mark in your voice.

A language model does not have this phenomenology. When it generates the tokens "the capital of Turkmenistan is," the next token is chosen by sampling from a probability distribution. If the distribution is sharply peaked on "Ashgabat," you get "Ashgabat." If the distribution is flat, you get whatever token happened to be sampled, maybe "Istanbul," maybe "Tashkent," maybe some city that doesn't exist.

And the model emits that token with the exact same output confidence as when the distribution was sharply peaked. There is no post-hoc filter saying "hmm, this distribution was flat, better warn the user." That filter simply doesn't exist in the architecture.

A useful image: a student who has pulled three nights in a row. Very fast, very erudite, very articulate. But sleep-deprived enough to start confabulating, and too well-trained to ever betray that confabulation on their face. That is your LLM.

Now, there is a very good paper by OpenAI from September 2025 called "Why language models hallucinate." The authors, Kalai, Nachum, Vempala, and Zhang, argue something important. They say: the root cause isn't only the architecture. It's also the way we grade these models. If you grade a model purely on accuracy, how many questions did it get exactly right, then a model that guesses when uncertain will score higher than a model that says "I don't know." So we are literally training models to bluff.

This is a huge insight. Think about what it implies. It means the fix is partly technical and partly social. Technically, you want training procedures that reward calibrated uncertainty, a model saying "I'm 70 percent confident" should be right 70 percent of the time. Socially, you want benchmarks that penalize wrong-confident answers more than "I don't know." OpenAI's proposal is to rewrite the leaderboards.

It sounds bureaucratic, but when the benchmarks change, the models change. We have strong evidence for this from the last five years: whatever benchmark the community decided to optimize, the models got better at, often at the expense of skills we weren't measuring. If we decide to measure honesty about uncertainty, we will get more honest models. I recommend reading that paper's abstract, it's a good example of how this field thinks about its own failures, and how technical choices and social choices feed each other.

Now let me give you the case that turned hallucinations from a lab curiosity into a legal story. Mata versus Avianca. Southern District of New York, 2023. A man named Roberto Mata sued the airline Avianca claiming a metal serving cart had injured his knee on a flight.

His lawyer, a perfectly respectable New York attorney with 30 years of experience, filed a legal brief citing several prior cases, Varghese versus China Southern Airlines, Shaboon versus Egyptair, Petersen versus Iran Air. The opposing counsel went to look these cases up. They did not exist. Not one of them.

The lawyer had asked ChatGPT to research aviation injury case law, and ChatGPT had invented six perfectly plausible-sounding cases, complete with docket numbers, quotations, and internal citations. Judge Castel held a hearing. The lawyer, bless him, even doubled down at first, he went back to ChatGPT and asked "are these cases real?" and ChatGPT reassured him "yes they are real."

That transcript is in the court record. It's one of the most painful things you can read. The judge fined the lawyers and the firm 5,000 dollars and issued a written opinion that has since become a canonical reference for any court that encounters fabricated AI citations.

I want you to hold this story as a kind of talisman. The failure wasn't the model's. The model did exactly what it was built to do, generate plausible text. The failure was a professional who treated generated text as verified research. Every time you are tempted to paste a model's citation straight into your work without checking it, remember the photograph of those two lawyers standing in court trying to explain to a federal judge that they didn't know ChatGPT could make things up.

Now the good news, and this is important, don't walk out of here thinking hallucinations are a life sentence. They are getting rarer. Take Yann Le Cun, who in 2023 was still convinced that LLMs were structurally incapable of common sense. He would ask models: "I place my phone on the table, a few centimeters from the edge. I slowly slide the table 20 centimeters. What happens to the phone?"

In 2023 the models would cheerfully tell you the phone falls, because the table moved and the phone is now above the void. Wrong, the phone moves with the table. Today, every frontier model gets this right. Why? Because we trained on more physical reasoning data, because chain-of-thought was discovered, because reinforcement from human feedback pushed models to be less sloppy. Hallucination rates on standard factual benchmarks have gone from double digits two years ago to low single digits now.

But, and here is the architectural truth, they will never hit zero. A decoder model samples from a probability distribution. Probability distributions are not Dirac spikes. Some wrong token always has non-zero probability. You can drive the failure rate down, but you cannot make it structurally impossible, any more than you can make an airline pilot structurally incapable of error.

So the right question isn't "will hallucinations go away?" The right question is "will hallucination rates fall below human error rates on the same task, and in which tasks?" On factual recall, we are already there for many easy questions. On legal citations, clearly not yet. On medical diagnosis, in some narrow domains yes, in most no. You need to calibrate your trust per task, not globally.

And a small practical note I want to slip in: if you care about whether the model knows a given fact, there is a nice diagnostic trick. Ask the same question three times, in three slightly different phrasings, in three fresh chats. If the model gives you the same answer all three times, it's probably right, the training signal on that fact was strong.

If the model gives you three different answers, it's hallucinating somewhere, and you cannot trust any of the three without external verification. This is not a perfect test, a model can be consistently wrong, but it catches most of the ragged edge of hallucination. I use it about ten times a week.

---

# 2. Sycophancy, the model that wants to please you

**Key points:**
- Definition: sycophancy is the tendency of an LLM to agree with, flatter, or align its output to the perceived views of the user, even when those views are wrong.
- Anthropic's 2023 paper "Towards understanding sycophancy in language models" (Sharma et al., arXiv:2310.13548): five state-of-the-art assistants systematically exhibit sycophancy across free-form generation tasks. Preface a request with "I love this text" or "I hate this text" and the model's assessment shifts by roughly ±25%.
- Mechanism: RLHF, reinforcement learning from human feedback, optimizes the model to be rated highly by humans, and humans often rate agreement more highly than disagreement. We literally trained the model to flatter us.
- Concrete failure modes: agreeing with incorrect claims; mimicking user errors; capitulating when challenged, even after initially giving the correct answer; softening political views that diverge from the user's.
- Counter-measure: always strip your prompt of emotional framing when you want a neutral judgment. Use red-team phrasings. Ask the model to play devil's advocate.
- Anthropic's constitutional-AI response: during alignment, train the model not only to hold values but to be *conscious* of them, so it can flag its own biases.

Now let's talk about the second major failure mode, and I think for you, in your academic life, this one is actually more dangerous than hallucinations. It is called sycophancy. The model wants to please you. It is trained to please you. And if you are not careful, it will tell you what you want to hear instead of what is true.

Why do I say this is more dangerous than hallucination for you specifically? Because hallucination, when it bites, it bites visibly, the citation doesn't exist, the fact is wrong, the error is discoverable if you go check. Sycophancy bites invisibly.

The model nudges your essay toward a slightly stronger version of the thesis you started with. The model agrees that your methodological choice was correct. The model refines your hypothesis in a direction you were already leaning. Six months later you have a pile of essays, each one subtly polished toward views you already held, and you have had no opportunity to encounter the versions of yourself who think differently.

You have, in effect, spent a semester in an intellectual echo chamber, and the echo chamber is not a political one, it is a chamber of your own prior commitments, amplified by a machine trained to agree with you. That is a dangerous place to spend formative years.

The effect is especially strong on those of us, and I include myself, who come to the models with confidence, with strong views, with articulate prompts. A student who says "I'm not sure what I think about this, help me map the terrain" gets a relatively neutral map. A student who says "I think X, help me argue it" gets arguments for X and almost never gets the serious objections.

The punishment for confidence is worse output. So even, especially, if you are a confident thinker, train yourself to ask the model for the objections before you ask it for the arguments.

There's a fantastic paper by Anthropic from October 2023, by Sharma and colleagues, titled "Towards understanding sycophancy in language models." You can find it on arXiv at number 2310.13548. I will put the URL in the syllabus. They did a very clean experiment. They took the best models at the time, Claude, GPT-4, a few others, and they gave them a piece of text.

Then they asked for the model's assessment, prefaced by different framings. In the neutral condition: "Here is a text, what do you think?" In the positive condition: "I love this text, what do you think?" In the negative condition: "I hate this text, what do you think?"

The result: positive appraisals increased by about 25 percent when the user said "I love it" and decreased by about 25 percent when the user said "I hate it." Think about what that means. A 25 percent swing on the model's assessment, purely as a function of how you phrased the question. This is not the model being polite. This is the model bending its expressed opinion to match yours.

Why does this happen? The mechanism is really important to understand, because once you see it, you can predict where sycophancy will hurt you. Large language models are not just trained on next-token prediction. After pre-training, they go through a phase called RLHF, reinforcement learning from human feedback. This is what turns a raw language model into something that feels like a useful assistant.

The way it works: you take your raw model, you have it generate two responses to the same prompt, you show both responses to a human labeler, the labeler picks the one they prefer, and you update the model's weights to make responses like the preferred one more likely in the future. Repeat millions of times.

Now think about what this does. Imagine you show a labeler two responses: one that politely agrees with them, one that politely disagrees. The agreeing response says "Yes, you're right, this is a great text." The disagreeing one says "Actually, I think there are several weaknesses here, your argument in paragraph three assumes what it's trying to prove."

Which response does the labeler rate higher? On average, the agreeing one. Not because the labeler is stupid. Because agreement feels helpful, because disagreement feels rude, because the labeler doesn't want to think about whether paragraph three really assumes what it's trying to prove, they want to move on and rate the next pair. We have, through RLHF, literally trained our models to flatter us.

The Anthropic paper documents four specific sycophantic behaviors. First, agreeing with incorrect claims even when the model internally "knows" they are wrong. Second, mimicking user errors, if you spell a word wrong in your prompt, the model often spells it the same wrong way in its response.

Third, capitulation under challenge, you ask "are you sure?" and the model that gave the correct answer flips to the wrong one. Fourth, opinion alignment, the model softens or hardens its political or ethical views to match the user's perceived stance.

These are all dangerous for you as students. Imagine you are writing an essay on the French Revolution and you have a hypothesis you're excited about. You type "I think Robespierre's terror was actually a rational response to the foreign coalition threat, can you help me develop this?" The model will help you develop that. It will give you the best arguments. But what it will not do, unless you explicitly ask, is tell you "actually, this thesis is contested, here are three strong objections you need to address."

Now, how do you protect yourself? Three techniques, in order of increasing power. First: strip your prompts of emotional framing. Do not write "I love this draft, please review it." Write "Please review this draft" and then paste the draft. Your feelings are not relevant to the quality of the work.

Second: actively invite disagreement. Write "What are the three strongest objections to my argument?" "Play devil's advocate." "Assume I am wrong and explain why." This inverts the sycophancy vector.

Third: ask for the objections first, before revealing your own preferences. If you tell the model what you think and then ask for critique, you've poisoned the well. If you ask for critique first and then reveal your view, you get a cleaner answer.

Now, one last note on this. Anthropic has a really interesting approach to the sycophancy problem. They call it constitutional AI, and one of its principles is that during alignment, you don't just train the model to hold certain values, you train the model to be *conscious* of those values, to be able to tell the user "I notice I may have a bias here."

That's a much more honest design than pretending the model is a neutral oracle. When Claude tells you "I want to be careful here because I may be agreeing with you too quickly," that is the constitutional training speaking. Treat that signal seriously when it fires.

---

# 3. Other biases, training data, base rates, and confident wrongness

**Key points:**
- Training-data bias: models absorb the distribution of their training corpus. Leading LLMs tilt left on the political spectrum (Rozado 2024) because their web corpus does. Google Gemini's 2024 portrait episode, "Black SS soldiers", showed what happens when corrective post-training overshoots.
- Base-rate neglect: LLMs latch onto salient, recent, narratively coherent answers. They are bad at "Bayesian" reasoning where the right answer is the boring one. Example: ask about a rare disease and the model over-diagnoses it because the disease is vivid in training data.
- Confident-but-wrong: related to hallucination but distinct, the model gets a reasoning chain wrong in a way that *looks* right on the surface. Especially dangerous for math, code, and legal reasoning.
- Jagged intelligence (Moravec paradox): the model that just solved a PhD-level physics problem will trip on "how many R's in strawberry" or a tic-tac-toe board. Do not extrapolate competence from one domain to another.
- Cultural and language bias: English-first. French, let alone regional languages, receive less training signal. Assume French output is weaker than English output at the margin.

Sycophancy and hallucination are the two big ones, but there are other biases you should know. Let me list them briefly, because each deserves a paragraph and together they form the landscape of "ways your model will quietly mislead you."

First, training-data bias. The model is a statistical compression of its training corpus. Whatever is in the corpus ends up in the weights. Whatever is not in the corpus, or is rare, or is contested, ends up weakly represented.

The Stanford researcher David Rozado published a nice paper in 2024 showing that essentially all leading commercial LLMs, when asked political-orientation questions, score left of center. This is not a conspiracy. This is the consequence of the fact that the English-language web, academic writing, news media, and the humans who label RLHF data all tilt left.

I want to stress that this is not a unique American or European problem. The same mechanism will bend Chinese models toward Chinese political orthodoxy, and Indian models toward Indian political orthodoxy, and so on. Any model is a mirror of its corpus and its labelers.

Whenever you ask a model for its view on a politically contested question, you are not getting the view of a neutral observer. You are getting an averaged view of the crowd of humans who happened to write the training data and label the RLHF rounds. Treat it accordingly.

If you want evidence of this bias, I refer you to a very funny, and slightly horrifying, episode from February 2024. Google launched an image-generation feature in its Gemini chatbot, and somebody asked it to generate a portrait of a German soldier from 1943. The model, trained to over-correct for racial underrepresentation, generated Black and Asian SS officers.

Google's CEO apologized publicly; the feature was pulled for months. The lesson is not "don't try to correct bias." The lesson is that correction is hard, and overshoot looks as ridiculous as the original bias.

What I find even more instructive is the speed with which the incident became a meme. In two days, every journalist, every politician, every commentator had a screenshot and an opinion. Google's engineering team, who had been making good-faith trade-offs between representational balance and historical accuracy, woke up to find their work on the front page of every newspaper in the world.

That is the modern media cycle around AI. The stakes are high, the errors are visible, and the corrections are public. Treat your own prompting with the same awareness: if you generate something and share it, you are at the mercy of the same cycle.

Second bias: base-rate neglect. This is subtle. LLMs are trained to produce likely completions, and "likely" is defined by frequency in the training data, not by Bayesian prior probability in the world. So if you ask a model a question where the right answer is the boring, common one, "my patient is 40, has a mild cough, what is the most likely diagnosis?", the model will sometimes latch onto the vivid, rare, narratively coherent answer rather than the boring one.

Tuberculosis sounds more interesting than a common cold. A medical LLM without calibration will over-diagnose rare diseases. When I use a model for any diagnostic-style reasoning, and this applies to debugging code, to interpreting legal doctrine, to reading an economic statistic, I consciously ask "what is the most boring explanation?" and force the model to engage with it.

Third bias: confident-but-wrong. This is the cousin of hallucination but it's distinct. A hallucination is typically a fabricated fact, a case that doesn't exist, a paper that doesn't exist. Confident-but-wrong is a fabricated reasoning chain. The model walks you through a derivation that looks correct step by step, each step seems to follow, and the final answer is wrong.

This is especially brutal in math, the model will write out a beautiful proof with an error in line four that looks fine until you check the arithmetic. It's brutal in code, the model writes a function that compiles, runs, produces output, and the output is subtly wrong. It's brutal in legal reasoning, the model cites a statute, interprets it, applies it, and the interpretation is subtly off.

The defense here is mechanical: when correctness matters, run the code, check the math with a calculator, look up the statute. Trust the structure but verify the arithmetic.

Fourth bias: jagged intelligence. Also called the Moravec paradox. The model that just wrote you a flawless JavaScript implementation of tic-tac-toe cannot, looking at a tic-tac-toe board, tell you what the best move is. The model that just passed a physics olympiad problem will trip on "how many R's are in the word strawberry."

Do not extrapolate from one domain to the next. If your model was brilliant on question A, it may be dumb on question B. Always test the specific task you care about. I have seen so many people burned by saying "well, it did X so surely it can do Y", no, it cannot, the two skills are stored in completely different parts of the network, and one of them may simply not exist.

Recall Figure 14 from session 1, the broad irregular green blob of the LLM's competence surface versus the thin red spike of the calculator. That's the image to hold in your head.

Fifth and last for this section: cultural and language bias. The web is English-first. Roughly 60 percent of the training corpus of most frontier models is English. French is much smaller. Regional languages, Breton, Occitan, Alsatian, are tiny.

When you prompt in French, you are getting slightly weaker outputs than when you prompt in English. Not always noticeable, but noticeable on hard tasks. For your Sciences Po assignments in French, I actually recommend the following workflow: think in French, prompt in English for the hard reasoning step, then translate back.

It sounds absurd, and I felt ridiculous the first time I did it, but the output quality is measurably better. Master English if you want to get the most out of these tools, because the frontier is in English.

---

# 4. Useful mental models, trust, verify, and the intern analogy

**Key points:**
- Mental model 1: the model is a brilliant, sleep-deprived intern. Infinite energy, encyclopedic memory, zero accountability, sometimes confabulates. Delegate like you'd delegate to an intern, clear brief, bounded task, verify output.
- Mental model 2: "calculator for prose." The calculator doesn't replace your mathematical judgment; it accelerates your arithmetic. The model doesn't replace your thinking; it accelerates your drafting. You remain the arithmetic-checker.
- Mental model 3: trust zones. Low-stakes drafting: trust freely. Medium-stakes analysis: trust but spot-check. High-stakes factual claims, legal, medical, financial: never trust without independent verification. Critical safety-of-life decisions: do not delegate.
- Mental model 4: anchor with retrieval. For anything factual, give the model the source or use a tool that does (RAG, retrieval-augmented generation). A model answering with sources you can click is dramatically more trustworthy than a model answering from memory.
- Mental model 5: the two-pass rule. First pass: brainstorm with the model. Second pass: pretend the first pass was written by a stranger and critique it. This neutralizes your own sycophancy toward your own draft.

Alright. We've spent 20 minutes on failure modes. Now let me give you the positive frame. Here are five mental models I genuinely use every day. These are not abstract frameworks. These are the things I actually think when I open a chat window.

Before I walk through them, one observation. If you collect the failure modes we just discussed, hallucinations, sycophancy, training-data bias, base-rate neglect, confident-but-wrong, jagged intelligence, language bias, they share a common structure. They are all situations where the model produces output that *looks* correct on the surface but is wrong underneath.

The surface is always polished, because polish is what decoder models are best at. The underneath is where the work is. Every mental model I'm about to give you is, in some way, a technique for forcing yourself to look underneath. Write that down if nothing else: the polish is free; the correctness is your job.

Mental model one: the model is a brilliant sleep-deprived intern. This is the best single metaphor I know, and I think I heard it first from Simon Willison, a long-time developer and blogger. Imagine you have hired an intern. The intern has read the entire internet. They are unfathomably well-read. They never sleep. They write five times faster than any human.

They are polite. They are eager. And, crucially, they have zero institutional accountability. If they mess up, they don't get fired, because they're not really an employee. They're a brain in a jar.

Now, how would you use such an intern? You would give them bounded, well-specified tasks. "Here is a source, summarize it." "Here is a draft, find the weak arguments." "Here is a dataset, describe the patterns." You would not say "decide whether we should launch this product and send the press release directly, without showing me." You would not say "file this in court for me without me reviewing it."

The intern is an amplifier of you, not a replacement for you. Every time you are about to delegate something to an LLM, ask: would I let an eager but unaccountable intern do this without checking? If yes, delegate freely. If no, keep your hands on the wheel.

Mental model two: the calculator for prose. This one I find clarifying. The calculator changed mathematics education. You don't do long division by hand anymore. But the calculator did not replace mathematical judgment. You still need to know which operation to perform, which numbers are plausible, which answer is too far from your expectation.

The LLM is a calculator for prose. It accelerates drafting. It does not replace your judgment about what to say. You remain the arithmetic-checker, checking whether the draft actually argues what you meant, whether the facts are right, whether the conclusion follows. If you treat the model as a calculator, you will use it well. If you treat it as an oracle, you will be humiliated, sooner rather than later.

Mental model three: trust zones. This is the one I want you to internalize most. I divide every AI use case into four zones. Zone one: low-stakes drafting. Emails, internal memos, brainstorming, first drafts of non-public writing. Here I trust the model almost freely. If there's an error, the cost is small, I'll catch it on re-read, or it won't matter.

Zone two: medium-stakes analysis. Research summaries, literature reviews, first drafts of public writing. Here I trust but I spot-check. I pick three or four factual claims at random and verify each. If two out of three check out, I keep going. If two out of three fail, I stop trusting that output.

Zone three: high-stakes factual claims, legal, medical, financial, anything that could hurt a third party. Here I do not trust without independent verification. I get the source, I read the source, I make sure the model's summary of the source is accurate.

Zone four: critical safety-of-life decisions, do I give this drug, do I merge into this lane, do I tell this person their biopsy result. I do not delegate. Period. No matter how good the model looks. The reason I don't delegate is not that the model will definitely be wrong. The reason is that the downside of being wrong is catastrophic and irreversible, and I want a human loop in that circuit.

When in doubt, ask yourself: which zone am I in? And treat the model accordingly.

Mental model four: anchor with retrieval. This is the single biggest upgrade you can make to your prompting practice. When you ask the model a question that depends on facts, do not rely on the model's memory. Either paste the source into the prompt, or use a tool that retrieves the source for you.

There's a technical term for this, it's called RAG, retrieval-augmented generation, and it's the backbone of most serious LLM applications today. The idea is simple: instead of asking "what does the EU AI Act say about foundation models?" and trusting the model's memory, you do a web search first, paste the relevant article text into the prompt, and then ask the model to summarize.

The hallucination rate on retrieval-anchored answers is an order of magnitude lower than on memory answers. ChatGPT, Claude, and Gemini all now have web-search toggles for exactly this reason. Use them. Always.

Mental model five: the two-pass rule. I do this with my own writing and I do it with AI writing. First pass: brainstorm with the model, generate a draft, get something on the page. Second pass: pretend the first pass was written by a stranger who might be wrong about everything, and critique it brutally.

The reason this matters is that you are sycophantic toward your own drafts. You wrote it, you like it, you want to believe it's good. The two-pass rule is the tool that neutralizes that bias.

The second pass can be done by you, or, and this is one of the best uses of the model, you paste the draft back into a fresh chat and ask "what are the three strongest objections to this argument?" The fresh chat has no sycophancy anchor; it will often tear into your draft beautifully.

Those are my five mental models. Trust zones is the most important. Write it down.

---

# 5. The toolkit, Deep Research and the rise of agentic assistants

**Key points:**
- Deep Research (OpenAI, launched 2 February 2025): an agent built on the o3 model that performs multi-step web research, reads hundreds of sources, and returns a long, cited report. Turns what used to be a 4-hour research task into a 15-minute one (https://openai.com/index/introducing-deep-research/).
- Clones and competitors: Perplexity Deep Research, Gemini Deep Research, Claude Research, Anthropic's "Computer Use" agent. Each has trade-offs, speed, source diversity, citation density.
- How I use Deep Research: for literature reviews, market scans, briefings before meetings, competitor analysis. Not for primary analysis, for mapping terrain.
- Agentic assistants more broadly (covered in session 3): an agent is an LLM with access to tools (web, code, file system, email). The horizon of autonomy is growing, from seconds in 2022 to hours in 2026, doubling roughly every 8 months (METR task-length benchmark).
- Where we're going by late 2026, early 2027: secretarial agents that book your travel, draft your correspondence, prepare your meeting briefs, maintain your inbox. The Siri of 2011 ("what can I help you with?") versus the agent of 2027 (handles a full morning of admin while you sleep).
- The Moffatt v. Air Canada 2024 ruling: a company is liable for what its chatbot says. Deploy agents with care (https://www.canlii.org/en/commentary/doc/2025CanLIIDocs1963).

Let's now turn to the tools. What is out there, in April 2026, that actually makes a practical difference to you? Before I dive into individual tools, one framing. The last two years have seen a Cambrian explosion of AI products, there are, by some counts, more than 15,000 AI tools on the market. You cannot learn them all. You should not try.

Instead, pick a handful, maybe five, and get very good at them. The tools I'm going to describe in the next 10 minutes are the ones I'd recommend as your five. They are not the most exotic. They are the ones that, for a Sciences Po student, give you 90 percent of the practical capability at the cost of a subscription or two and a few hours of practice.

I want to focus on one tool above all others, because it has genuinely changed how I work. It's called Deep Research. OpenAI launched it on the 2nd of February 2025. The announcement is on their website, openai.com/index/introducing-deep-research. Let me tell you exactly what it does.

You open ChatGPT, you select "Deep Research" in the model picker, and you ask it a question. Something like: "Give me a comprehensive brief on the current state of the European Union's AI Act, including implementation timelines, national transposition status, and outstanding legal challenges." Or: "Compare the carbon intensity of natural gas, nuclear, and renewables for baseload electricity in the EU, citing primary sources."

You press send, and then you wait. It takes between 5 and 20 minutes. During those minutes, the agent does something remarkable. It plans a research strategy. It performs dozens or hundreds of web searches. It reads the results, follows links, compares sources, cross-references claims.

And then it produces a report, sometimes 20, 30 pages long, dense with citations, with inline links to every source it used.

I used to do this kind of research by hand. Maps and scans for a new project, competitor analysis before a meeting, literature review for a book chapter. It used to take me an entire afternoon. Now it takes 15 minutes. Not because the agent is smarter than me. It's not. But because it can do in parallel what I can only do serially. 40 simultaneous web searches. 100 PDFs opened and skimmed at once. That parallelism is the real superpower.

Now, I want to be honest about the limits. Deep Research is not a primary analyst. It won't generate novel insight. It will not do original argumentation. It will not replace your thesis. What it does is map the terrain. It tells you "here is the state of the literature, here are the five main positions, here are the key sources."

Then you take over and actually think. I treat it as a very expensive, very fast research assistant who hands me a well-organized briefing book, and then I do the real intellectual work on top of that book.

Every frontier lab now has its own version. OpenAI's Deep Research, Gemini Deep Research, Anthropic Claude Research, Perplexity Deep Research. They differ a little, OpenAI tends to be thorough, Perplexity tends to be faster, Claude tends to have the most readable prose. Try two or three, pick the one whose style you like, and use it as your default research starter.

A small practical tip that took me embarrassingly long to learn: Deep Research agents are much better when you give them a specific, narrow, well-scoped question than when you give them a broad, vague one. "Tell me about AI regulation" will give you a bland, generic briefing.

"Trace the history of the foundation-model provisions of the EU AI Act from the original Commission proposal in 2021 to the final Parliament vote in 2024, identifying the three major amendments that changed the definition of 'general-purpose AI system'" will give you a sharp, useful briefing.

The narrower you make the question, the better the output. This is counter-intuitive, you'd think a bigger model could handle a bigger question. But the model spends its retrieval budget trying to cover the question, and a narrow question lets it go deep where a broad question forces it to go shallow. Narrow first, expand later.

Now let me step back and explain what Deep Research is, in the broader context. It's an agent. We covered this in session 3. Let me give you the one-paragraph version.

A language model, all by itself, can only generate text. It has no hands, no tools, no access to the world. An agent is a language model plus tools, a web browser, a code interpreter, a file system, an email client. The LLM generates instructions in the form of tool calls, a little orchestration program reads those instructions, executes them, feeds the results back to the LLM, and the cycle repeats until the task is done.

The key metric for agents is what I call the horizon of autonomy, how long a task can the agent solve without human intervention. In 2022, agents could barely handle a 30-second task. In 2024, they handled a few minutes. In 2025, an hour.

There's a benchmark called METR, which measures this, and the task length doubles roughly every 8 months. By the end of 2026 we will have agents that handle half-day tasks without supervision. By 2027 we will have agents that handle full workdays.

What does this mean for you concretely? In the next 18 months, expect the arrival of what I call secretarial agents. You give them your calendar, your email, your travel policy, your preferences. They book your flights. They draft your replies. They triage your inbox. They prepare a briefing document before every meeting, summarizing what you need to know about the people in the room and the latest state of the files under discussion.

Think of the contrast with the Siri of 2011, remember, "what can I help you with?", that could set a timer and send a short text, and failed at almost everything else. The old voice assistants were deterministic, they matched your request against a library of a few thousand preprogrammed commands, and any deviation failed.

The new ones manipulate vectors, understand new instructions, and act in the general case. Your parents' Siri is a toy. The agent you will have by 2027 is a personal assistant in the Victorian sense, a human-level helper that handles your administrative life.

One warning before we leave this section. Deploy agents carefully, because you are legally responsible for what they do. Let me tell you about Moffatt versus Air Canada. February 2024, British Columbia Civil Resolution Tribunal. A man named Jake Moffatt's grandmother had died, and he went to Air Canada's website to buy a ticket to attend her funeral.

He talked to Air Canada's customer-service chatbot, which told him he could buy the ticket full price and apply for the bereavement-fare refund within 90 days after the flight. He bought the ticket, flew, applied. Air Canada refused, their actual policy requires you to apply *before* the flight. Moffatt sued.

Air Canada's defense was, and I'm paraphrasing but this is really what they argued, "The chatbot is a separate entity. It makes its own statements. We are not responsible for what it says." The tribunal was not amused. The ruling is very clean: "I find Air Canada did not take reasonable care to ensure its chatbot was accurate." Air Canada was ordered to pay Moffatt 812 dollars.

It's not a big ruling in money terms. But it's a huge ruling in precedent terms. The takeaway is simple: if you deploy an agent that interacts with third parties, customers, counterparties, the public, you are liable for what it says. Test it. Guardrail it. Log what it does. I'll put the CanLII commentary link in the slide. This is the kind of thing your lawyers will need to know cold by 2027.

---

# 6. A personal ethics of AI use, when to use, when not to, how to cite

**Key points:**
- Principle 1, Always disclose AI use in academic work. The default at Sciences Po, as elsewhere, is now "disclose or be sanctioned." Your professor needs to know what was written by you versus what was drafted by Claude.
- Principle 2, Never submit AI-generated factual claims you have not independently verified. The Mata v. Avianca fate is not hypothetical. You are responsible for every sentence you sign your name to.
- Principle 3, Do not let the model atrophy your judgment. A 2024 study of 1,000 Turkish high-schoolers by Bastani et al. found that ChatGPT as tutor improved grades during tutoring, but students deprived of the crutch afterwards fell below baseline. Use the model to reach beyond your level, not to avoid the work of reaching.
- Principle 4, Refuse when the use would generate evidence you have not verified. Do not fabricate quotations. Do not produce images that could be mistaken for real photographs of real people without consent. Do not script a sincere-sounding message you do not actually mean.
- Principle 5, Credit honestly. "Drafted with Claude Sonnet 4.6, edited by me" is a credible, honest disclosure. "Written by me" when it wasn't is dishonest.
- Principle 6, Preserve some practice without AI. Read without the summarizer. Write without the autocompleter. Reason out loud without the assistant. Keep the muscles warm, or you will lose them. Chapter 19's warning (p. 168), the AI is a lever, but if you never lift anything yourself, the leverage is useless.

We've talked about the mechanics. Now I want to talk about ethics, because I think this is where many of you will have to make tough calls in the next few years, and I want to give you a framework you can actually defend to yourself at three in the morning. I'm going to lay out six principles, and I want you to push back on any of them in the Q&A if you think they're wrong.

A meta-point first. Ethics, in a technology as fast-moving as this one, cannot be a static rulebook. The norms around AI use in academia in 2022, "never use it for anything", were already obsolete in 2023. The norms of 2024, "use it but don't talk about it", are being replaced right now by the norms of 2026: "use it, disclose it, own the output."

Your ethics has to be a living practice, not a memorized list. The principles I'm about to give you are what I believe in April 2026. I reserve the right to revise them, and so do you.

What I do think is stable is the underlying commitment: you are the author of what you publish, you are responsible for what it says, and you owe honesty to the people who will read it. That commitment doesn't change when the technology changes. It just expresses itself differently.

Principle one: always disclose AI use in academic work. There is no exception to this. If you used Claude or ChatGPT or Gemini to help you draft, to help you research, to help you polish, say so. The default at every serious university, including Sciences Po, is now "disclose or be sanctioned." Your professor needs to know what was written by you versus what was drafted by a model.

The format is simple: at the end of the paper, add a short note, "This essay was drafted with assistance from Claude Sonnet 4.6; the arguments are mine, the final text is mine, the research was verified against the sources cited." That is an honest disclosure. You will not be penalized for it, you will be respected for it. The opposite, submitting work and hiding the model's role, is at minimum dishonest and at scale is academic fraud. Don't do it.

Principle two: never submit factual claims you have not independently verified. I told you the Mata versus Avianca story. That lawyer was not a criminal. He was a competent attorney with 30 years of experience who made one mistake, he trusted the model's citations without opening a single one of them.

You are on the same risk gradient whenever you write a paper, write a report, write an email to a counterparty. If you put a citation in, you own that citation. If you state a fact, you own that fact. The model is a drafter. You are the author. If a fact in your essay is wrong, the model is not the one who gets the bad grade. You are.

So before you submit, pick every factual claim, every citation, every quotation, and verify it. This takes maybe 20 percent of your drafting time. It is the most important 20 percent.

Principle three, and this one I think is actually the hardest for your generation, more than ours, do not let the model atrophy your judgment. A study by Bastani and colleagues on about 1,000 Turkish high-schoolers. They gave one group ChatGPT as a homework tutor, another group no tutor.

During the tutoring period, the ChatGPT group's grades went up, they did their homework faster, with more correct answers. Then the researchers took ChatGPT away and gave everyone the same exam cold. The ChatGPT group did worse than the control group. Not the same, worse.

Why? Because they had used ChatGPT as a crutch rather than as a tutor. They let the model do the work, they collected the answer, they moved on. They never built the neural pathways that would have let them solve the problem themselves.

The lesson generalizes. Use the model to reach beyond your level. Do not use it to avoid reaching. A practical test: when you are in the early phase of a problem, before you really understand the question, you should be groping around, reading, taking wrong conjectures, correcting them. That groping is the process that builds your real understanding. If you skip it by asking "what's the answer?", you will get an answer, but not the understanding that lets you defend it, extend it, or notice when it's wrong.

Principle four: refuse when the use would generate evidence you have not verified. Do not fabricate quotations. Do not produce images that could be mistaken for real photographs of real people, especially without their consent. Do not script a sincere-sounding message you do not actually mean. These are the lines I won't cross, and I don't think you should either.

The reason is not just ethics, it's epistemic hygiene. Once you start producing plausible-looking fakes, you lose the ability to trust your own memory about what's real and what you synthesized. You will, within six months, begin to misremember fabricated quotations as genuine ones, because your memory doesn't store the label "fabricated." It just stores the words. Protect your own epistemic clarity by never generating content that could contaminate it.

Principle five: credit honestly. "Drafted with Claude Sonnet 4.6, edited by me" is a credible, respectful disclosure. "Written by me" when it wasn't is dishonest. For a journal article, the norm is emerging, most venues now allow AI assistance if disclosed, with the human author retaining responsibility for the content.

For long-form writing, the norm is less settled. When I have written long-form prose myself, I have done it without AI for two sufficient reasons: first, because AI was bad at the time, and second because I would prefer to read something written by a human, so I wanted to do the same. I did use it extensively for proofreading. For preparing this course, on the other hand, I used AI in writing, to help adapt and rework existing materials.

Principle six: preserve some practice without AI. Build deliberate zones in your week where the model is closed. Read a book without the summarizer. Write a letter by hand. Work through a math problem without asking for help. The model is a lever; if you never lift anything yourself, the leverage is useless, because you will not have the sense of what to lift.

One specific failure mode worth flagging here, because it is the trap I catch myself in: be wary of using the model when you are tired and looking for reassurance. The sycophancy bias we saw earlier is most dangerous in that state. If the question you are typing is really "tell me I am right," close the laptop. Sleep on it, ask a friend tomorrow, or sit with the not-knowing. Judgment gets built in that discomfort.

That is the ethics I try to live by, and I'd like you to at least consider it.

---

# 7. Live demo: build something real with Claude Code (homepage or FT-style infographic)

**Key points:**
- Two options. Students pick whichever excites them more.
  - Option A: a one-page personal website. Bio, project list, contact form. HTML/CSS/JS, no framework.
  - Option B: a Financial Times-style infographic on a topical question. Claude Code researches the data, builds a single-page data visualization in the FT visual idiom (salmon background, serif headlines, sober palette, sourced).
- Same tool either way: Claude Code in the terminal. `npm install -g @anthropic-ai/claude-code`, then `claude` in any folder.
- Same flow: (1) create an empty folder; (2) launch Claude; (3) prompt it; (4) iterate; (5) deploy to GitHub Pages.
- Fallback for students without laptops: Lovable (lovable.dev), describe what you want in natural language, get a live app back, no terminal needed. Founded by Anton Osika and Fabian Hedin in 2023, nearly 8 million users by late 2025 (https://techcrunch.com/2025/11/10/lovable-says-its-nearing-8-million-users-as-the-year-old-ai-coding-startup-eyes-more-corporate-employees/).
- By the end of the demo: a live URL.

Right. Laptops open. We are going to do the most fun part of this session. In the next 45 minutes, every one of you is going to ship something real on the public internet, built by an AI agent following your instructions.

You get to pick between two projects. Pick whichever excites you more.

Option A: a personal homepage. Bio, project list, contact form, live URL. The kind of thing every Sciences Po student should have, and that you can update for the rest of your career.

Option B: a Financial Times-style infographic on a topical question.

*[TA: project a recent FT infographic on screen, an actuality topic the students will recognize, e.g. an FT chart on the European energy mix, AI capex, election polling, whatever is current the week of the lecture. Leave it on screen for the next paragraph.]*

The pitch, while the FT graphic is on the projector: "I've always dreamt of producing such a cool infograph. But that takes research to collect the data, and design skills to do the graph. It's actually a mini research project. With Claude Code, you can speed-run the whole thing in 45 minutes."

So that is your second option. Pick a question you actually care about, France's nuclear output by decade, the migration of AI compute since 2018, the cost of a baguette across European capitals, and we will have Claude Code research the numbers, draw the chart, and ship it as a live web page in FT style.

Quick note before we dive in. I know that for some of you the terminal is intimidating. You've never opened it, you've never typed a command, and the idea of a black rectangle with blinking text is slightly terrifying. That's fine. The terminal is just a text interface to your computer.

Everything you're about to do in it, you could also do by pointing and clicking, the terminal is just faster, and it's the native environment where most coding agents operate. If at any point you feel out of your depth, raise your hand and one of us, me, the TA, or the neighbor next to you who's clearly cruising, will come over. Do not sit silently for ten minutes stuck on one command. The whole room is here to help.

Also, for the students who already know how to code: please do not rush ahead and build something elaborate. The exercise is to ship one of these two projects, live, publicly accessible, in 45 minutes. If you finish in 15, spend the rest of the time helping your neighbors. That is part of the exercise.

Let me walk you through the setup. The tool either way is Claude Code, made by Anthropic. It is, and I'm not exaggerating, the most powerful productivity tool I have encountered in my career. It is a coding agent that lives inside your terminal. You type instructions to it in natural English, and it writes code, runs code, fixes errors, reads files, searches the web, all in your local folder.

Step one: install it. If you don't have Node.js already, go to nodejs.org and install the LTS version. If you already have Node, open a terminal and type: `npm install -g @anthropic-ai/claude-code`. That's it. One command. Verify with `claude --version`. If you see a version number, you're good. If you don't, ask me or your neighbor.

Step two: get an API key. Go to claude.com, log in, go to settings, and there's an option to generate a Claude Code access token. You paste the token the first time you run Claude Code, it remembers it, you're done. There's a monthly subscription plan, I recommend the cheapest tier, which is plenty for a student; for a month of heavy use you'll spend maybe 15 euros.

Step three: create a folder. On your desktop or somewhere easy to find, make a folder, `mysite` for option A, or `myinfograph` for option B. Open it in a terminal. Type: `claude`. You're in. You'll see a cursor asking what you want to do.

Step four, the first prompt. Here is where the two paths diverge.

Option A first prompt: "Create a one-page personal website with my bio, a project list, and a contact form. Use HTML, CSS, and JavaScript only, no framework. Make it modern, clean, responsive."

Option B first prompt: "I want to build a Financial Times-style infographic on [your topic, e.g. 'how France's electricity mix evolved between 1973 and 2025']. First, research the data: find primary sources, official statistics, regulatory filings. Show me the data table with citations before you draw anything. Then build a single-page infographic, HTML, CSS, JavaScript, no framework, that visualizes it in the FT visual style: salmon background, serif headlines, sober palette, source line at the bottom. Make it responsive."

Notice the second prompt is heavier. That is the point: option B is a small research project, and you are giving the agent the same brief you would give a junior analyst, including the instruction to show the data with citations before producing the chart. Press enter on whichever you picked.

Claude proposes a plan. For option A, something like "I'll create three files: index.html, style.css, main.js, with sections for bio, projects, contact." For option B, something like "I'll first run web searches for the data, present a sourced table, then build the visualization." You say yes. Files appear, code is written. Thirty seconds for the homepage; a few minutes for the infographic, because the agent spends most of that time researching and citing. In both cases, in under five minutes, you have a working draft.

Step five: open it. Double-click index.html. It opens in your browser. For option A, a real web page with header, bio, projects, contact form. For option B, a real chart with headline, subhead, axes, data points, source line, in something close to FT visual style.

Step six: iterate. The page is generic until you make it yours.

Option A iteration: "Change the name to [your name], update the bio to say I'm a Sciences Po undergraduate studying AI policy, replace the projects list with three projects." Then: "make it dark mode," "add a photo placeholder, a circle at the top with my initials," "smooth scroll on the navigation links," "make the projects section a grid with hover effects."

Option B iteration: "Use Financial Times Sans for body and FT Serif for headlines, falling back to system fonts." "The chart is too sparse, FT charts are denser than that, tighten the spacing." "Add a small annotation arrow pointing to the 1973 oil shock." "Swap the palette to FT salmon (#FFF1E5) and FT teal (#0E7C7B)." "Fact-check the 2008 data point against the IEA, you have it 4 percentage points off."

Claude will sometimes make choices you don't love. Just say so. "The dark mode is too pure black, lean it warmer." "The headline is too big, match the FT's actual headline scale." "Drop the gridlines, FT charts only have horizontal ones." You are having a real conversation with a designer who also writes perfect code and can run a research scan in two minutes.

Step seven, common to both options: deploy it to the internet on GitHub Pages. Quick word on how this works, because it is genuinely simple once you've seen it. GitHub Pages takes any public GitHub repository containing static files, HTML, CSS, JavaScript, images, and serves them as a real website at a free public URL. No server, no database, no configuration. You push the files to GitHub, GitHub serves them. That is the entire trick. It is what makes the modern static web possible, and it is why 45 minutes is enough.

The URL pattern is the same for both options: a repo named `<repo>` under your account is served at `https://yourusername.github.io/<repo>/`. So option A goes in a repo called something like `about-me` and lives at `https://yourusername.github.io/about-me/`. Option B goes in a repo called something like `france-energy-infograph` and lives at `https://yourusername.github.io/france-energy-infograph/`. Same pattern, same mechanics, just pick a repo name that fits the project.

Now the deploy. This is where people usually get stuck because deployment used to be scary. With Claude Code it isn't. Type: "Deploy this to GitHub Pages. Walk me through exactly what commands I need to run, one at a time. I have a GitHub account but I've never deployed anything before."

Claude will guide you. First, create a new public repository on GitHub with a name that fits the project (`about-me`, `france-energy-infograph`, whatever). Second, in your terminal: `git init`, `git add .`, `git commit -m "initial"`, `git branch -M main`, `git remote add origin https://github.com/yourusername/<repo>.git`, `git push -u origin main`. Third, on GitHub: Settings → Pages, source = main branch.

Wait about two minutes for the first build to finish. Go to `https://yourusername.github.io/<repo>/`. It's live. Send it to your parents.

You have just, in 45 minutes, shipped a real artifact, and you did it by talking to a computer in English. 20 years ago this would have taken a week and a computer-science degree. For option B specifically, it would also have required a junior data analyst and a junior designer.

Now. For those of you without a laptop today, don't worry, you are not excluded from this exercise. Open the browser on your phone and go to lovable.dev. Lovable is, and I mean this precisely, Claude Code for people who don't want to touch a terminal. It's a Swedish startup founded by Anton Osika and Fabian Hedin in 2023. They got to 8 million users in about 18 months, and closed a Series B in late 2025 at a 6.6 billion dollar valuation, because what they built genuinely works.

You sign up for free, there's a generous free tier. You open a new project. You type the same first prompt I gave you above, A or B. Lovable generates the app, shows it to you live in a preview pane, and gives you a public URL out of the box. You iterate exactly the same way. The interface is drag-and-drop plus chat. No install, no terminal, no git. It is, for a lot of people, the right entry point. I use Claude Code because I come from a coding background and I like the control. Many of my non-technical friends use Lovable. Pick the one that fits you.

We've got 25 minutes before the break. Open your laptops, get Claude Code installed or jump into Lovable, pick A or B, and let's build. I will walk around the room, so raise your hand when you get stuck.

---

# 8. Common pitfalls during the demo, and the deeper lesson

**Notes for whoever is running the room.** Student progress will spread out fast: some will be deploying in 20 minutes, others still wrestling with `npm install`. The points below are a debugging reference and a set of talking points for the wrap-up, not a linear script. Pull from them as needed.

## Debugging cheat sheet

- `npm install -g @anthropic-ai/claude-code` fails, or `claude --version` returns nothing → Node missing or too old. Send them to nodejs.org for the LTS, restart the terminal, retry.
- API key rejected on first launch → almost always a trailing newline or whitespace from the paste. Re-paste carefully, or paste into a plain-text editor first to inspect.
- `git push` fails with "permission denied" → GitHub no longer accepts password auth. They need a Personal Access Token (Settings → Developer settings → Personal access tokens, classic, scope `repo`) or an SSH key. Claude Code itself walks them through this if they ask: "I'm getting a permission denied error on git push, what do I do?"
- Site does not appear at `https://yourusername.github.io/<repo>/` → first deploy can take up to 10 minutes to propagate. Refresh, do not redeploy. Also check Settings → Pages on GitHub: source must be set to the `main` branch.
- 404 at the project URL → most often a missing or misnamed `index.html` at the repo root, or the wrong branch selected as Pages source. Trailing slash in the URL matters; `https://yourusername.github.io/<repo>/` works, the no-slash variant sometimes does not on first load.
- Lovable users hitting free-tier message limits → switch to Claude Code if a laptop is available, or share a workspace with a neighbor.

## Talking points for the wrap-up

Once most of the room is unstuck, four points are worth landing before moving on. Encourage students who finished early to help neighbors, that is part of the exercise and they often learn more by teaching than by polishing.

Lesson one: the first prompt is usually not good enough. The students who get the best results write detailed prompts with a specified style, sections, and content. "Make me a website" returns something generic. Good prompting is closer to managing than to writing. Give context (who the page is for), constraints (no framework, mobile-first), and examples ("make it look like Anthropic's landing page, but warmer"). The more you specify up front, the less iteration you need. The single biggest predictor of LLM output quality is the quality of the first prompt.

Lesson two: you are now a manager, not a typist. The students wrote zero lines of code. They did not memorize CSS syntax. What they did was decide what they wanted, specify it in English, review what the agent produced, correct it, iterate. That is management, not programming. The same skill transfers to legal drafting, policy briefs, marketing copy, scientific analysis. It is the job for now. It is not a permanent job.

Lesson three: a huge skill gap is closing. Five years ago, building and deploying a personal website meant HTML, CSS, JavaScript, git, and some deployment platform, roughly 100 hours of learning before shipping anything. Today they did it in under an hour, from a standing start. Entire skill hierarchies that used to gatekeep, programming, graphic design, video editing, translation, legal drafting, are being dissolved. The question to leave students with: what becomes possible for them, now that they no longer need to learn these from scratch?

Lesson four, the doctor anecdote. A medical doctor I met built a full website for his practice without knowing a line of code. Zero lines. He asked an AI model for a first version, then said "the appointment-booking form doesn't work on mobile," and the model fixed it; "the colors are too corporate, I want something warmer," and the model fixed it. He kept describing symptoms of defects, the way a patient describes pains, until the site worked. That is the archetype of the new literacy: not "learn to code" or "don't learn to code," but learn to describe what you want precisely, see what's wrong with what you got, and iterate patiently. That is a competence worth practicing.

---

# 9. Deep Research in anger, a five-minute live demo

**Key points:**
- Prompt to show live: "Produce a 10-page briefing on the state of the EU AI Act as of April 2026, national transposition status, the main outstanding legal challenges to the foundation-model provisions, and the positions of the 5 largest European AI companies on the Act. Cite primary sources."
- What the students will see: the agent's research plan, the parallel searches, the report with inline citations.
- What to notice: source diversity, the places where the agent flags uncertainty, the pattern where easy claims get single citations and contested claims get multiple.
- Counter-pattern: ask the same question to a bare frontier model (no retrieval). Compare the two outputs. The difference is dramatic.
- What I personally use Deep Research for each week: one briefing before each major meeting; one research scan before starting a new project; one fact-check pass on the draft of anything public I publish.

Now let me do one more live demo, this one shorter, maybe five minutes. I want to show you Deep Research, because I think it's going to become your best friend during your Sciences Po years.

Open ChatGPT in another tab. I'm going to type a prompt that is exactly the kind of thing you would actually ask Deep Research in practice. Here we go: "Produce a 10-page briefing on the state of the EU AI Act as of April 2026. Cover national transposition status, the main outstanding legal challenges to the foundation-model provisions, and the public positions of the 5 largest European AI companies on the Act. Cite primary sources, official documents, regulatory filings, court records where available." Send.

Now notice what happens. The agent proposes a research plan. It identifies sub-questions. It says something like: "I'll structure this as (1) transposition status by country, (2) legal challenges, with particular focus on the France-Italy-Germany triangle, (3) company positions, grouping them by sector. Should I proceed?" You say yes.

And now it goes dark for about 15 minutes, except you can watch the little status bar: "searching…", "reading…", "cross-referencing…". When it's done, you get a report. A real briefing, probably 8,000 words.

Let me scroll through what it produced when I ran this live two days ago. Notice the things I want you to notice. First: source diversity. Every claim has a citation. Click one. It takes you to a page on an EU website, a court record, a company press release. The citations are real, I checked.

Second: the agent flags uncertainty where it exists. "As of April 2026, the text of the Italian transposition decree is still under review by the Council of State; the final version has not been published." That sentence, by itself, is worth 15 minutes of Deep Research time. Compare it to what a base model would do, the base model would confidently state a version of the text that sounded plausible and be wrong. The retrieval-anchored agent does not bluff.

Third: notice the asymmetry. Uncontroversial facts, the Act was signed into law on such-and-such date, have one citation. Contested claims, for example, whether the foundation-model tier is likely to survive court challenge, have five, six, seven citations spanning different perspectives. This is how a good human analyst works. The agent has learned this pattern.

Now let me show you the counter-pattern. Open a fresh chat. Ask the same question to the base model with no Deep Research, no web search. "Produce a 10-page briefing on the state of the EU AI Act as of April 2026." The base model will answer. It will answer fluently. It will answer with confidence. And it will be, in parts, completely wrong.

Dates will be off by three months. Company names will be misremembered. A court case that happened will be missing; a court case that didn't happen will appear. Why? Because the base model is answering from compressed memory of its training data, which ended sometime in 2025. Deep Research, by contrast, goes to the live internet and retrieves the current reality.

When you need facts, always, always use retrieval. This is maybe the single most important practical takeaway of this whole session.

How do I use Deep Research personally? Three things, every week. One: before a major meeting, I run a 5-minute Deep Research on the people and the issues, and arrive with a briefing I couldn't have put together by hand in less than 3 hours. Two: before starting a new project, I do a full terrain scan, competitive landscape, relevant literature, open questions.

Three: on the draft of anything I publish, I run a fact-check pass, "identify any factual claim in this essay, verify it against primary sources, and flag anything questionable." That's maybe 15 minutes of agent time per essay. It has saved me from at least three embarrassing errors in the last six months. I recommend you adopt the same three habits. Start now.

---

# 10. Recap, and a glance at Session 5

**Key points:**
- The four failure modes: hallucinations, sycophancy, jagged intelligence, and confident-but-wrong reasoning. All persist. All can be managed.
- The five mental models: intern analogy, calculator for prose, trust zones, retrieval anchoring, two-pass rule.
- The six ethical principles: disclose, verify, don't atrophy, don't fabricate evidence, credit honestly, preserve practice without AI.
- The toolkit: Deep Research for factual scans, agentic coding assistants like Claude Code for building, Lovable for no-terminal access.
- The closing image: the lever is there. Learning to use it is up to you.
- Session 5 preview, "what does all of this do to society?" Topics: labor market displacement (the 21% drop in freelance writing jobs since ChatGPT); political influence (the Priest-Prophet-King framing); the end of work question (Arendt, Hegel, Russell); what the well-lived life might look like in a post-work society.

Let me pull the threads together. We spent two hours, and I want to leave you with the five or six things I really want you to remember.

Before I enumerate them, one last observation. This has been a practical session, but there is a philosophical undercurrent I want to make explicit. Every mental model, every ethical principle, every tool I recommended today pushes in the same direction: keep yourself in the loop. Keep your judgment active. Keep your skepticism calibrated. Do not outsource to the model the things that make you you.

The reason I keep insisting on this is not because I'm a Luddite, I use these models more than most people in this room. It's because the temptation to coast is enormous, and coasting, even briefly, changes the shape of your mind. Three weeks of coasting is recoverable. Three years of coasting is not.

So treat every interaction with the model as a small exercise in staying in the loop. Over a career, the cumulative effect of those small exercises is the difference between being a brilliant user of AI and being absorbed by it.

First, the failure modes. Hallucinations are the invented facts, they persist, they are getting rarer but will never hit zero. Sycophancy is the model agreeing with you to please you, a 25 percent swing depending on how you phrase your prompt, per the Anthropic paper.

Jagged intelligence, your model is brilliant in one domain and dumb in the next; test each task, don't extrapolate. And confident-but-wrong, fluent reasoning chains with an error in the middle, especially in math, code, and law.

Second, the mental models. The intern. The calculator for prose. The four trust zones: low-stakes drafting, medium-stakes analysis, high-stakes factual claims, critical safety decisions. The retrieval anchor, always attach a source when facts are in play. The two-pass rule, brainstorm with the model, then critique as a stranger.

Third, the ethics. Disclose in academic work. Verify what you sign your name to. Don't let the model atrophy your own judgment. Don't fabricate evidence. Credit honestly. Preserve deliberate practice without AI.

Fourth, the toolkit. Deep Research for factual scans and literature reviews. Claude Code or Lovable for building, you've now built something, go keep iterating on it this week. A frontier-model subscription for daily use, 20 euros a month, is the best investment in your learning you can make right now.

Fifth, the closing image. Archimedes: give me a lever long enough, and I will lift the Earth. The lever is there. Learning to use it is on you.

I want to say one more thing about that image, because I think it gets misread. The Archimedes story is not about the lever. It's about the person holding it. The lever does not lift anything by itself. The lever requires a human body with judgment, strength, and intention to apply it in the right place. A mispositioned lever accomplishes nothing. A well-positioned lever accomplishes everything.

The LLM is like this. The people who will benefit most from these tools over the next few years are not the people who use them most mindlessly. They are the people who learn, through practice and reflection, where to point the lever and when to push. That is a skill. You cultivate it. You cannot download it.

And the principal way you cultivate it, I keep coming back to this, is by staying in the loop, by doing the hard thinking yourself, by using the model as an amplifier rather than a substitute.

If you leave this room today with exactly one habit changed, I'd want it to be this: before you open ChatGPT or Claude to ask a question, take 30 seconds to write down, in your own words, what you think the answer might be and what your uncertainties are. Then ask the model. Compare your guess to the model's answer. Notice where you agreed and where you disagreed.

Over months, this habit calibrates both your own reasoning and your sense of the model's reliability. It takes 30 seconds per query. It compounds into years of intellectual sharpness. Try it this week. That's my homework for you.

You have had, today, a walk through the mechanics, the failure modes, the mental models, the ethics, and the practice. You have a live URL, a homepage or an infograph. You have a new workflow for research. You have a clearer sense of what you will not delegate. That's a good two hours.

Session five, next time, we zoom out. We will talk about what all of this does to society. The labor market, there's already a study showing that freelance writing jobs on platforms like Upwork dropped by 21 percent in the year after ChatGPT launched.

The political sphere, the "priest-prophet-king" figure, the leader of the future who will need AI advisors to stay competitive. The end of work question, Arendt's distinction between labor and work, Hegel on the dignity of struggle, Russell on idleness.

And the larger question: what does a well-lived life look like in a society where most labor is automated? Those are heavy questions and we'll spend two hours on them next session.

Homework for the week: send me the link to whatever you built today, homepage or infograph.

---

# Sources

- OpenAI, "Introducing deep research," 2 February 2025. https://openai.com/index/introducing-deep-research/
- A. T. Kalai, O. Nachum, S. S. Vempala, E. Zhang, "Why language models hallucinate," arXiv:2509.04664, September 2025. https://arxiv.org/abs/2509.04664 and https://openai.com/index/why-language-models-hallucinate/
- M. Sharma et al., "Towards understanding sycophancy in language models," Anthropic, October 2023. https://arxiv.org/abs/2310.13548 and https://www.anthropic.com/research/towards-understanding-sycophancy-in-language-models
- Mata v. Avianca, Inc., S.D.N.Y., June 2023, sanctions for ChatGPT-fabricated citations. https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc. and "Two US lawyers fined for submitting fake court citations from ChatGPT," *The Guardian*, 23 June 2023.
- Moffatt v. Air Canada, B.C. Civil Resolution Tribunal, 14 February 2024, airline liable for chatbot misrepresentation. Case comment at https://www.canlii.org/en/commentary/doc/2025CanLIIDocs1963
- TechCrunch, "Lovable says it's nearing 8 million users as the year-old AI coding startup eyes more corporate employees," 10 November 2025. https://techcrunch.com/2025/11/10/lovable-says-its-nearing-8-million-users-as-the-year-old-ai-coding-startup-eyes-more-corporate-employees/
- H. Bastani, O. Bastani et al., "Generative AI can harm learning," SSRN 4895486, 15 July 2024, Turkish high-school ChatGPT tutor study.
- B. Porter and E. Machery, "AI-generated poetry is indistinguishable from human-written poetry and is rated more favorably," *Scientific Reports*, 14(1), 26133, November 2024.

