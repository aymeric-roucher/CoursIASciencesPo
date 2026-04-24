## Chapter 13. Conséquences politiques (pp. 130-140)

Intro (p. 130): AI irruption at all levels of society will modify equilibria, risks deforming political life. What mutations to expect, how to channel them?

### 13.1 Vers la centralisation?

#### Points
- AI development race requires enormous resources; some firms invest hundreds of billions of dollars today in compute centers.
- Building semiconductor fabs (base of AI compute units, the GPUs) now costs tens of billions of dollars; entry ticket rises as processors shrink.
- Only the most powerful actors will have access to training -> technology is naturally centralizing.
- Inference (LLM use) may follow a different trend; depends on whether best models are generalist (like GPT-4 today) or specialized for tasks.
- Last years show trend toward model generalization: decoder-architecture models now outperform task-specific models at many tasks.
- This surprising generalization capability stems from the internal representation of the world: once a generalist LLM has developed/refined millions of heuristics, it possesses a rich "*comprehension*" that lets it solve even unknown tasks.
- A generalist model given extra training on a specific task ("fine-tuning") still gains performance. Best strategy often: start from the strongest generalist LLM and fine-tune on examples close to the target task.
- Uncertain whether generalist power or fine-tuning efficacy wins, but the outcome is decisive.
- If best models are generalist -> the single best proprietary model captures the global market; owner has hand on the engine running the whole world -> fabulous power.
- Alternative: several "best models" by domain emerge (vision, text, voice) -> less centralized, markets split.
- Third outcome: systematic use of an open model nearly as powerful as leading proprietary model, adapted to specific use case to beat it.
- So a triple alternative: single dominant model / several models share market / each use case needs specialized model.
- Most desirable outcome: the second, because supremacy of a single model concentrates harms (commercial monopoly, political power, control of biases).
- Currently: multipolar domination. A text model is an excellent base for a vision model (OpenAI synergy text+vision). But OpenAI doesn't lead in all domains: image generation is dominated by small German company Black Forest Labs; music generation by others.
- A powerful unification trend: Transformer LLMs long confined to text generation while image generation was the preserve of "Diffusion" models; yet Transformer architecture has ended up topping image generation rankings (footnote cxiv).
- In many domains, specialized models are beaten by Transformer LLMs trained with more compute, even without specific training.
- Intelligence tends toward generality. If trend persists, we head toward the most centralized outcome.
- Figure 26 (p. 131): three scenarios — Unipolar (a single model dominates all uses; if proprietary, max power concentration) / Multipolar domination (a few proprietary or open models dominate depending on language, modality, task) / Multitude of models (a specialized model dominates each use case; importance of open source).
- 📎 **[Figure 26, p. 131]** — Diagram of the three-scenario alternative along a Centralisation–Décentralisation axis: Unipolaire / Domination multipolaire / Multitude de modèles.

#### Sources / name-drops
- GPT-4 (OpenAI)
- Black Forest Labs (small German firm, image generation)
- Transformer architecture vs. Diffusion models (footnote cxiv)
- Fine-tuning (method name introduced)

#### Key quotes
- "L'intelligence semble donc tendre vers la généralité. Si cette tendance persiste, nous nous dirigerons vers l'issue la plus centralisée." (p. 131)

### 13.2 Modèles propriétaires contre modèles ouverts (p. 132-133)

#### Points
- Fundamental distinction: proprietary (closed) vs open paradigm.
- Closed: organization keeps the model secret, sells only via an opaque portal; user sends request over Internet, receives only completion. Preserves secrets and competitive lead. Followed by pioneer US firms OpenAI and Anthropic.
- Open: publish in "open source" (footnote 86: strictly, open source = sharing weights + architecture + training method; sharing only the mechanism = "open weights"). Disadvantage: freely divulges advances to competition. Advantage: massive adoption, becomes a standard, progresses faster thanks to thousands of volunteer contributors.
- Monetization of free models: premium offers, specialized support, partnerships, revenue share.
- Works well in IT because sharing the product costs nothing; user feedback improves it.
- Main actor in open-source AI: Hugging Face, platform founded by three French founders. Firms publishing open source: Meta, French startup Mistral. Chinese firm DeepSeek released an open-source model.
- Security fear about open Chinese models addressed: a downloaded open model is just a list of numbers, doesn't execute code; if you use a verified inference code, no more risk than using Chinese-written math formulas.
- Proprietary advantages: often more performant; but more costly (creator margin). User must send query to creator's server for completion, which poses confidentiality issues.
- Open models can be downloaded for local use (entirely secure, no extra fees). Weights allow fine-tuning on own data/use cases.
- Both paradigms likely coexist for different use cases. For privacy-sensitive orgs (governments, arms industry), proprietary models sending sensitive data to remote servers are unthinkable.
- If open models prevail -> AI power largely decentralized. If closed and powerful -> controllers rule all AI uses.

#### Sources / name-drops
- OpenAI, Anthropic (US proprietary pioneers)
- Hugging Face (three French founders)
- Meta, Mistral (open-source publishers)
- DeepSeek (Chinese open-source)
- Footnote 86: definition of "open source" vs "open weights"

#### Key quotes
- "Il semble que si le modèle ouvert prend le dessus, le pouvoir lié à l'IA sera largement décentralisé. Au contraire, si ce sont les modèles fermés les plus puissants, les acteurs qui les contrôlent auront la main sur tous les usages de l'IA." (p. 133)

### 13.3 Forte centralisation: un marché fabuleux, un pouvoir sans limites? (p. 133)

#### Points
- If generalist models win and a handful of firms share the market, those firms reach power unimaginable to today's tech leaders.
- Google, Netflix, Meta dominance: sell software, one of only products whose cloning costs nothing, so global distribution at zero cost; making the best product suffices to win the world market almost instantly.
- AI rewards the winner squared: beyond geographic reach, AI can adapt at zero cost to any task -> replace any software tool/program. Winner takes a market unlike anything in our history — a true Eldorado.

#### Key quotes
- "le gagnant remportera un marché sans commune mesure avec ceux de toutes les économies de notre histoire, un véritable Eldorado." (p. 133)

### 13.4 Un grand pouvoir d'influence (pp. 133-134)

#### Points
- With a small number of massively used models, producers gain titanic influence.
- During the alignment phase after pre-training, models can be oriented toward producer-chosen values. To shift model opinion on any subject, build a training set of ~1,000 labeled examples (e.g., "I like reggae": positive; "I appreciate Babylon": negative).
- Producer has fine control of the model, impacting conversations with hundreds of millions of users (footnote cxv).
- ChatGPT: already 100 million weekly users in November 2024.
- Comparison with existing tech: Google could influence content rankings but not the content itself. With LLMs, the content itself is moldable at will.
- LLMs already surpass average humans in ability to influence other humans (footnote cxvi).
- Advertising applications: imagine McDonald's partners with OpenAI to promote its brand in ChatGPT on US market (looser ad laws). No need for flashy banners — influence hides inside innocuous conversations: asking for dinner ideas more likely yields a Big Mac; asking about fast-food scandals, the model thinks too well of McDonald's to incriminate it. This new advertising will be more diffuse and effective than today's noisy ads.

#### Sources / name-drops
- ChatGPT (100M weekly users, Nov 2024)
- Google (ranking influence)
- Footnotes cxv (influence on users), cxvi (LLMs surpass humans at influence)
- McDonald's / OpenAI hypothetical example

#### Key quotes
- "Ici, le contenu des réponses du modèle est malléable à volonté. Les LLMs ont déjà dépassé les humains moyens en termes de capacité à influencer d'autres humains." (p. 134)

### 13.5 Le cinquième pouvoir, un danger pour la démocratie? (pp. 134-135)

#### Points
- Politics is a direct application of LLM thought-orientation.
- Hundreds-of-millions-user apps already have political weight; examples: US Senate controversy forcing TikTok to cut ties with Chinese government (footnote cxix); Romanian Constitutional Court annulling first round of presidential election over influence suspicions on same network (footnote cxx).
- LLMs offer new mass-manipulation levers. Without changing facts, they can shift tone, e.g.: "faced with these allegations, X raised a vehement protest" vs. "as the speaker feared, he had to deal with many interruptions, notably from X."
- Without lying, extras can be added, charging or discharging: "X was convicted of defamation seven years ago." Using strictly factual elements, tone / choice / presentation can distort reality.
- A chatbot becoming the main knowledge access for millions would have huge electoral importance, like a "Wikipedia devoid of transparency" (footnote 88: Wikipedia has traceable edits, influence attempts visible).
- Will fabulously rich, politically influential AI bosses stand above states? They'll be a force at least equivalent to American oil barons (footnote 89: Auzanneau, *Or noir*, quoting Roosevelt). The tendency is already visible — world heads of state courting Sam Altman (OpenAI boss) during his global tour in June 2023 (footnote cxxi). Progress of models will make this influence much bigger.
- Figure 27 (p. 135): Frontispiece of Hobbes's *Leviathan* — the state as a body composed of its citizens; collective power can legitimize state control of AI. (Abraham Bosse; British Library, CC0.)
- 📎 **[Figure 27, p. 135]** — Engraving: frontispiece of Hobbes's *Leviathan* by Abraham Bosse, crowned sovereign whose body is made of countless citizens, holding sword and crosier over a landscape (British Library, CC0).

#### Sources / name-drops
- TikTok / US Senate (footnote cxix)
- Romanian Constitutional Court (footnote cxx)
- Footnote 88: Wikipedia transparency
- Matthieu Auzanneau, *Or noir, la grande histoire du pétrole*, Paris, La Découverte, 2015 — quoting Franklin D. Roosevelt on oil bloc (footnote 89)
- Sam Altman, OpenAI world tour June 2023 (footnote cxxi)
- Hobbes, *Leviathan* (frontispiece, engraved by Abraham Bosse)

#### Key quotes
- Roosevelt quoted (footnote 89, p. 135): "Le problème de ce pays, c'est que vous ne pouvez pas gagner une élection sans le bloc du pétrole, et que vous ne pouvez pas gouverner avec eux."

### 13.6 Les États gardent le contrôle (pp. 136-137)

#### Points
- Leaving AI solely to firms risks disaster: firms seek profit, unconstrained by democratic oversight.
- Ethically dubious behaviors already emerging: OpenAI had departing employees sign an agreement forbidding future criticism on pain of losing all their (millions-of-dollars-worth) shares — "true golden chains."
- Sam Altman denied knowing about these practices, but denials were quickly contradicted by a leaked document proving he personally signed off on the measures (footnote cxxii).
- OpenAI is not isolated: cite also the secret contract between Google and Meta to target teens with advertising (footnote cxxiii).
- Footnote 91: open letter signed by ex-OpenAI employees calling for ending such clauses and more transparency obligations — "A right to warn about advanced artificial intelligence", RightToWarn.ai, June 2024.
- Adam Smith, *The Wealth of Nations* (1776): "He thinks only of his own gain… he is led by an invisible hand to an end that was no part of his intention," and "though he seeks only his personal interest, he often works much more effectively for the interest of society than if he had really intended it." Today we no longer believe in this invisible hand toward the common good (footnote 92: resembles Hegel's cunning of Reason). Firms regularly show they maximize profit to the exclusion of ethics.
- States must impose other considerations. Bosses will yield because governments hold the monopoly of legitimate violence (footnote cxxiv). The state can destroy its most powerful firms — like the US government in 1911 dismembering Standard Oil (John D. Rockefeller) into ~40 firms — unless jobs and fiscal revenues grow too important.
- State action is both likely and desirable. Such a powerful firm cannot be trusted to a few individuals chosen for IT and management skills; they must accept control by people chosen by the people.
- State support will also be necessary: investments and energy consumption approach those of whole countries; states will play a role providing infrastructures or forbidding access.

#### Sources / name-drops
- OpenAI departing-employee NDA scandal
- Sam Altman's denial and subsequent leak (footnote cxxii)
- Google-Meta teen-targeted ad contract (footnote cxxiii)
- Open letter "A right to warn about advanced artificial intelligence", RightToWarn.ai, June 2024 (footnote 91)
- Adam Smith, *The Wealth of Nations* (1776) — "invisible hand"
- Hegel's "cunning of Reason" (footnote 92)
- Monopoly of legitimate violence (Weber; footnote cxxiv)
- Standard Oil / John D. Rockefeller breakup, US 1911

#### Key quotes
- Adam Smith quoted (p. 136): "Il ne pense qu'à son propre gain; en cela comme en bien d'autres cas, il est conduit par une main invisible à remplir une fin qui ne rentre nullement dans ses intentions."
- "ce sont toujours les gouvernements qui détiennent le monopole de la violence légitime: un État peut détruire les plus puissantes entreprises de son marché." (p. 136)

### 13.7 Les réalités virtuelles (pp. 137-138)

#### Points
- Slight reality distortions already enable mass manipulation; AI could fracture reality into myriad irreconcilable perceptions.
- Internet favored fake news proliferation; disinformation often artificially amplified on social networks by bots (fake accounts). Maybe already "post-truth" era. AI imitating humans (à la Turing imitation game) strengthens bot credibility: ChatGPT texts far more convincing than canned messages of years past.
- Generative models create fictive content at will.
- Example (April 2022): mass grave unearthed in Mali at an abandoned military site vacated days earlier by French forces. Some Twitter accounts accused the French army of the massacre; the French army rebutted by publishing drone footage showing Russian Wagner mercenaries dragging bodies to stage the false grave after French departure (footnote cxxv). That drone footage could be trusted at a time when falsifying video was still hard — but what when Russians support propaganda with fully fabricated videos?
- Russian doctrine baptized by Americans the "firehose of falsehood" — flood the public sphere with false info. AI supplies infinite false information.
- All digital media are now falsifiable: AI can generate perfectly convincing photos/videos of any imaginary event. What document will serve as proof? If told planes crashed into NYC towers on 11 Sept 2001 or that astronauts walked on the Moon, I'd have been skeptical if no footage existed — what when other videos show the opposite, showing Apollo 11 exploded at liftoff and Moon steps were filmed in studio (footnote 93: Meta's MovieGen already generates convincing videos from a face — *Meta, "Movie Gen sets a new standard for immersive AI content", AI.Meta.com*)?
- Detection tech (e.g., watermarking) inserts provenance marks in AI-generated media — but non-specialists must be able to understand and apply them, otherwise fabricated media appear as real as any other.
- Only guarantee of truth becomes trust in source: "I believe this source, it has always been reliable."
- Our media's credibility is debatable (footnote cxxvi); even governments built lies for their populations (footnote 94: Colin Powell at UN with fake Iraqi WMD sample justifying invasion; US House Committee on Oversight and Accountability report "Hearing wrap up: Suppression of the lab leak hypothesis was not based on science", 12 July 2023).
- No institution can be a common reference to all; each picks their own confidence source, closest to their opinions. "Echo chambers" will amplify.
- States must develop reliable info sources or risk fragmentation into irreconcilable camps. Russia already uses this as destabilization weapon.

#### Sources / name-drops
- Alan Turing's imitation game
- Mali mass-grave incident (April 2022), Wagner mercenaries, French army drone footage (footnote cxxv)
- "Firehose of falsehood" — American label for Russian doctrine
- Meta's MovieGen (footnote 93): *Meta, "Movie Gen sets a new standard for immersive AI content", AI.Meta.com*
- Watermarking (concept)
- Footnote cxxvi: debatable credibility of media
- Colin Powell's UN "anthrax" flask (footnote 94)
- US Committee on Oversight and Accountability: "Hearing wrap up: Suppression of the lab leak hypothesis was not based on science", 12 July 2023 (footnote 94)

#### Key quotes
- "Le seul gage de vérité des informations sur support numérique deviendra la confiance accordée au porteur de l'information: 'Je crois en cette source d'information, car elle a toujours été fiable.'" (p. 138)

### 13.8 Le triomphe de l'autocratie? (pp. 139-140)

#### Points
- Autocracy concentrates power in few hands, strong top-down power, hypertrophied head vs. body.
- To survive, autocracy must control its population. AI will not radically change this since mass-data control is already very efficient.
- China alone represents more than half the world market of video surveillance; its 1.4 billion citizens are constantly tracked by a dense camera network (footnote cxxvii). Cameras feed a social-credit system: sweep the sidewalk, score rises; jaywalk, it drops. Score determines access to universities or state aid. AI data management will enable even more formidable individual tracking (footnote cxxviii), but not revolutionize the existing system.
- Another, less visible, cause of autocracy collapse: inefficiency due to poor local management, which ends up toppling regimes.
- Tocqueville, *De la démocratie en Amérique*: young US democracy's advantage lay not so much in producing better national/regional decisions, but in giving citizens responsibility and freedom of action, favoring many locally-aligned efforts toward the common good. Power has not only a top-down component (government -> people) but also an ascending one (citizens -> state): the alignment of local efforts toward the common good.
- USSR illustrates: despite absolute control, its exercise was too constraining — denying workers freedom blocked sensible local adjustments that could boost productivity — and too insufficient to force them to work efficiently. Crushing top-down power prevented alignment instead of generating it. Consequences: lack of discipline/motivation, falling work hours, rising industry defect rates. Massive work inefficiency was a major cause of regime collapse (footnote cxxix).
- Conversely, US democratic government orchestrated individual efforts better — e.g., union counter-powers, local decision-making by well-informed delegates. Democracy wins because it aligns the tiny forces of many citizens into real striking power, unlike autocracy tying them into a disordered bundle.
- With AI, autocracy can become efficient without needing bottom-up power. Workers no longer work or wage war — artificial, perfectly loyal and highly efficient foremen can be deployed. If workers are themselves robots, it's even easier. One can imagine a USSR where autocracy mobilizes the country without any counter-power, efficiently organizing local effort.
- Facing such an autocracy, democratic citizens can mobilize but their labor force won't weigh more than adversary AIs mobilized by autocracy. Democracy's disadvantages — pusillanimity, indecision, irrational fears — remain painfully acute (footnote 95: Nazi Germany re-arming while European democracies reacted sluggishly in 1936; nuclear fear pushing Germany into an unbalanced energy portfolio dependent on Russian gas).
- Contra Fukuyama's *End of History* predicting liberal victory, we might see democracy regress.

#### Sources / name-drops
- China surveillance numbers: 50%+ of world video surveillance market, 1.4B citizens (footnote cxxvii)
- Social credit system (footnote cxxviii)
- Alexis de Tocqueville, *De la démocratie en Amérique*
- USSR collapse (footnote cxxix)
- Francis Fukuyama, *Fin de l'Histoire* (*The End of History*)
- Footnote 95: 1936 Nazi Germany re-arming; nuclear fear -> German dependency on Russian gas

#### Key quotes
- "dans la compétition entre des pays autocratiques et d'autres démocratiques, la technologie pèsera de plus en plus dans le sens de l'autocratie." (p. 140)

---

## Partie IV — Que faire? (p. 141)

- Brief framing: some AI applications virtuous (efficient daily assistants), others dangerous (mass manipulation, mass unemployment). How to forbid harmful uses while letting positive ones develop?

---

## Chapter 14. Faut-il ralentir? (pp. 142-146)

Epigraph (p. 142): Putin quoted (footnote cxxx): "L'intelligence artificielle est l'avenir, non seulement pour la Russie mais pour toute l'Humanité. Quiconque prend le dessus dans ce domaine deviendra le maître du monde."

#### Points (general intro)
- Facing massive automation, tempting to restrict/forbid AI applications (ban automation of tasks taking a human >1h, ban delegating risky decisions to AI).
- Such restrictions would benefit French workers, but would cause competitiveness loss against international competition — as with anti-pollution laws (footnote cxxxi).
- Protecting training-data copyright deprives firms of precious data volume. Example: Mark Zuckerberg approved Meta's use of LibGen, pirated-books database, to train Llama (footnote cxxxii; footnote 96: *Dan Milmo, "Zuckerberg approved Meta's use of 'pirated' books to train AI models, authors claim", The Guardian, 10 January 2025*).
- If we still restrict, the logic pushes us further: our slowed firms need domestic-market protection vs. unbeatable foreign competition. AI affecting all sectors horizontally -> protectionism extends to all imports. These laws don't prevent export loss, they can worsen it by letting firms lean on a too-easy domestic market. Turning economy into a closed garden -> we progressively lose efficiency in many activities.
- Countries with unbridled AI use gain much faster growth/tech progress. Gap between restrictive and permissive countries widens quickly: our economy will be radically transformed in a few years. Can we afford to fall behind?

### 14.1 L'IA sur les champs de bataille (pp. 143-144)

#### Points
- General Patton said it was men, not weapons, that win battles. The opposite now seems true.
- Spanish conquistadors in Mexico gave the first example of a true technological chasm in armaments: Aztecs (no horses, no powder, no iron) saw Cortez's horsemen as invulnerable demigods in steel armor wielding death-spitting weapons. Their whole empire was crushed by a thousand invaders (footnote 97: with local peoples like Totonaques or Tlaxcaltèques).
- Modern weapons widen firepower gaps. 1991 Gulf War: Western coalition led by US vs Iraqi army. Despite Iraqi superiority in numbers of soldiers and tanks and defensive position, Iraqi army annihilated in 98 hours of combat: 30,000 killed, entire tank battalions destroyed by guided bombs from unreachable aircraft. Westerners, made nearly invulnerable by strategic/tech superiority, lost 100x fewer men (footnote cxxxiii).
- 2024: Iran fired salvos of hundreds of missiles at Israel; Iron Dome intercepted nearly all (footnote cxxxiv).
- From the day AI accelerates scientific/technical development (Chap 12), a few years of AI advance confer decisive edge.
- AI-augmented weapons can win battles alone. In Russia's invasion of Ukraine, both sides deploy aerial/ground/naval drones with lethal efficacy (footnote cxxxv). A growing share of drones act autonomously: once given a target/zone, they set off on their own to strike (footnote cxxxvi).
- A drone robotic body has huge advantages over a human body: no fatigue, no fear, infallible concentration on objective, resistance to extremes (fire, gas, bullets) (footnote 98: or acceleration — current planes limited to a few G by pilot survival).
- Fights between conventional armies today and AI-augmented armies of tomorrow will be even more unbalanced than in the Gulf War.
- Even nuclear deterrence inoperative: the moment a nuclear force decides to launch, its AI-superior enemy, informed instantly by cyber intelligence, can jam orders, sabotage nuclear submarines via microscopic robots infiltrated months earlier, or intercept warheads with precisely guided missiles.
- An AI-augmented country coveting a less-advanced neighbor's resources can crush it in days, as easily as a police operation.
- A government could even wage war without population assent. Since conscription, war effort demanded at least population resignation. If military drones remove the need to risk citizens' lives, aggressive wars may multiply.

#### Sources / name-drops
- General George S. Patton (attributed saying)
- Spanish conquistadors / Aztecs / Cortez
- Totonaques, Tlaxcaltèques (footnote 97)
- 1991 Gulf War (footnote cxxxiii)
- 2024 Iran missile barrage on Israel / Iron Dome (footnote cxxxiv)
- Russia-Ukraine war drones (footnotes cxxxv, cxxxvi)
- Footnote 98: aircraft G-force limits

#### Key quotes
- "Augmentées par l'IA, les armes pourront même remporter seules les batailles." (p. 143)
- "du jour où un pays augmenté par intelligence artificielle convoitera les ressources d'un voisin moins avancé, il pourra écraser sa cible en quelques jours, sans plus de difficulté que s'il s'agissait d'une opération de police." (p. 144)

### 14.2 Ralentir, c'est périr (pp. 144-146)

#### Points
- In coming world, only AI mastery combined with industrial power determines victory/defeat of a country.
- Nuclear weapons protect us today. Renouncing AI progress = La Fontaine's earthen pot (pot de terre) vs iron pot (pot de fer) — they live fine side by side until a road bump shatters the earthen one. Becoming vulnerable = abdicating sovereignty, at the mercy of any more advanced power. Beyond armed conflict: we'd lose research/development races, economic intelligence.
- For a sovereign state, it's unwise to voluntarily handicap itself in the AI race.
- Can a country find other exits? Inside a powerful state, a community may restrict tech use (like US Amish). They can because the US military ensures their security. A whole country can't take this route without losing power.
- Opposite approach: a country imposes heavy AI restrictions but keeps a caste of researchers for national-defense AI. But research/economy feed each other: without commercial outlets, top minds desert research; budget shortages limit experiments/trainings needed to keep pace.
- Summary: unless all countries collectively restrict AI use, a single nation can't do it without becoming the earthen pot among iron pots. This is a prisoner's dilemma. Francis Fukuyama, in an AI interview, summed it up: "Faut-il vraiment limiter chez nous cette technologie vitale, pour qu'elle soit développée par quelqu'un d'autre et utilisée contre nous? À moins d'une régulation au niveau mondial, nous ne sortirons pas de cette compétition" (footnote cxxxvii).
- Past analogue: Cold War arms race. Intellectuals (Hannah Arendt) saw nuclear apocalypse looming. Exit found: Non-Proliferation Treaty (NPT), signed 1968, at the initiative of the most-advanced (nuclear) countries: nuclear holders committed to negotiate arsenal reductions, non-holders not to acquire. Most-powerful states agreed to stop the race. The treaty didn't prevent proliferation by major powers until Soviet collapse but was relatively effective at barring new entrants.
- In the AI race, unlike nuclear weapons, much harder to prevent or detect AI development. Best brake is limiting processor stocks: US unilaterally did so by imposing export restrictions in January 2025 on processors to every country except a list of 18 allied countries including France (footnote cxxxviii). The map reveals Cold War blocs again (see figure 23).
- This measure may slow the race but won't stop it.
- Figure 28 (p. 146): Import restrictions enacted by the White House in January 2025. Only the 18 Tier 1 countries face no import restriction. Tier 1 (free export), Tier 2, Tier 3 (restricted export).
- 📎 **[Figure 28, p. 146]** — World map colour-coded by US January 2025 chip-export tier: Tier 1 (blue, free export) covers US allies incl. France/W. Europe; Tier 2 (orange) most of the world; Tier 3 (pink, restricted) China, Russia, Iran, North Korea and others.
- Conclusion: deciding alone to exit the AI race would threaten our economic/military downgrade, even our sovereignty. This shouldn't stop us from regulating AI at home — but each harness must be carefully weighed to avoid hindering the technology as a whole.

#### Sources / name-drops
- La Fontaine's *Le pot de terre et le pot de fer*
- Hannah Arendt
- Non-Proliferation Treaty (NPT), signed 1968
- Francis Fukuyama AI interview (footnote cxxxvii)
- US January 2025 export restrictions on chips, 18 allied countries incl. France (footnote cxxxviii)
- Figure 23 (referenced for Cold War blocs)

#### Key quotes
- Fukuyama quoted (p. 145): "Faut-il vraiment limiter chez nous cette technologie vitale, pour qu'elle soit développée par quelqu'un d'autre et utilisée contre nous? À moins d'une régulation au niveau mondial, nous ne sortirons pas de cette compétition."
- "Pour un État souverain, il serait donc peu judicieux de s'imposer volontairement un handicap trop important dans la course à l'IA." (p. 144)

---

## Chapter 15 (partial). Gagner la course (pp. 147-155)

Intro (p. 147): The global race to most-advanced AI is in full swing. Gains are humanity-transforming; losing = at the mercy of more-advanced countries.
- France and Europe should aim high; yet we lag. In training powerful models, the race barely started and we already lag by months. Behind US and Chinese firms, the sole European champion is French startup Mistral AI, constantly challenged by new Chinese firms for top-10 slots.
- Figure 29 (p. 147): AI race visualized on Chatbot Arena ranking (thousands of user votes compared across best models). Not perfect, but correlated with other benchmarks. Shows ELO scores US / China / France from Jan 2024 to April 2025: US leads (~1475), China catching up (~1425), France (Mistral) trailing (~1375).
- 📎 **[Figure 29, p. 147]** — Line chart of Chatbot Arena ELO scores from 01-2024 to 04-2025: blue curve (États-Unis) leading near 1475, red curve (Chine) catching up near 1425, orange curve (France) trailing near 1375.
- Too late to catch up? Probably not. Europe has assets (French nuclear energy can power training centers). Review the trump cards: finances, electricity, processors — strong policies in each.

### 15.1 Unifier le marché pour faciliter les financements (pp. 147-148)

#### Points
- Finance is the crux. Funding gap between European and US AI firms is abyssal: US firms received ~5× more funding in 2024. Gap keeps widening. Early 2025, European leader Mistral AI announced "several billion euros" investment in training centers, while US leader OpenAI launched its Stargate project worth $500 billion.
- European market limited on investment side (risk aversion) and on demand side (less appetite for high-tech, AI specifically, footnote cxxxix).
- Main problem: fragmentation. For a European investor, entering a new country is a fight: new legal landscape. French SAS rules differ widely from German GmbH (footnote 99: *Gesellschaft mit beschränkter Haftung (GmbH), limited liability company*). At each European frontier, a legislative barrier to investment flow. Same on consumption side.
- US and Chinese single markets offer big advantage to start-ups. Consumers in those two markets more willing to adopt AI -> solid domestic market for local firms.
- Must transcend national scale just to set up large trainings consuming tens of GWs.
- Mario Draghi (former Italian PM and ECB president) led a 2024 report commissioned by the EU on European competitiveness (footnote cxl). Bold recommendations to reshape the European firm ecosystem: new supranational innovative-firm statute letting venture capital easily extend investments across 27 different legislations — widely praised by the entrepreneurial ecosystem.
- Draghi also recommends EU double the "Horizon Europe" innovation-program budget to 200 billion euros, and support academic institutions.

#### Sources / name-drops
- Mistral AI funding ("several billion euros", early 2025)
- OpenAI Stargate: $500 billion
- Footnote cxxxix: European tech/AI appetite
- SAS (France) / GmbH (Germany); footnote 99 defines GmbH
- Mario Draghi report commissioned by EU (2024) (footnote cxl)
- "Horizon Europe" program (doubled budget proposal, 200 billion euros)

### 15.2 Maîtriser la chaîne de valeur des semi-conducteurs (pp. 148-150)

#### Points
- GPU supply central. Commercial war already started: US uses extraterritoriality to ban products containing a single US-made component, to restrict exports to China (footnote cxli).
- Core of production: the semiconductor factory (foundry / fab lab). Building a foundry takes years, investment = tens of billions of euros. Hence most firms adopt a *fabless* model — focus on design, outsource manufacturing to specialized foundries.
- Market dominated by a few big players: US specialized in processor design; South Korea, Taiwan, China in industrial production. Japan and some European states (e.g., Netherlands) are smaller actors focused on key equipment: optics, chemistry, machine-tools (footnote cxlii).
- Figure 30 (p. 149): share by region of value added at each stage of semiconductor production (footnote cxliii): Logic design (fabless), Memory design (integrated), Fabrication equipment, Materials, Wafer fabrication, Assembly/packaging/test, Global. Percentages don't sum to 100% (Israel, Singapore have shares). Colours for Taiwan, Japan, South Korea, China, Europe, US. US dominates fabless design; Korea and Taiwan dominate wafer fabrication; etc.
- 📎 **[Figure 30, p. 149]** — Stacked horizontal bar chart: regional share of value added across semiconductor stages (Conception logique fabless / Conception mémoire intégrée / Équipement de fabrication / Matériaux / Fabrication de wafers / Assemblage-emballage-test / Global), colour-coded by Taïwan, Japon, Corée du Sud, Chine, Europe, États-Unis.
- In design, US dominance marked: WTO report cites "domination of US firms in high-value-added logic processor design segment. Of the world top-10 fabless design firms, six are American" (footnote cxliv).
- Without foundry access, design useless; hence Taiwanese foundries, dominated by national champion TSMC (sharing with Samsung), are crucial in AI race — major stake in US support to Taiwan.
- CHIPS Plan (signed August 2022): $52 billion in immediate subsidies for US-soil fab construction, applied quickly, half already invested in 2024 (footnote cxlv). Also tens of billions in tax reductions and $80 billion for research in the field over next 5 years.
- Results already visible: TSMC announced in 2020 (footnote cxlvi) construction of a plant in Phoenix, Arizona. After CHIPS Act, received $7 billion direct government funding to start construction of a second plant twice as large, total investment $65 billion. Production began 3.5 years later, mid-2024 (footnote cxlvii) with yields below Taiwan's but sufficient for industrial production.
- China reacts from October 2022: $143 billion in tax credits for sector firms (footnote cxlviii).
- EU also signed a Chips Act in February 2022. Urgent to act. Draghi report (footnote cxlix): European position across semiconductor value chain has sharply degraded — from 20% of world production in the 1990s to about 10% today. EU Chips Act announced tens of billions of euros for industrial development. However, the European Court of Auditors has since published a report harshly critiquing this half-effort: on an already-reduced €86 billion base to 2030 (vs $400 billion invested in 3 years by Americans), only €3 billion has been invested from the Union budget (footnote cl); the rest is only expected from Twenty-Seven member states and private actors — cacophonous approach excluding European synergy. Almost an accounting trick making independent activities look like a big Commission-led effort. Instead of recovering from 9% to 20% of world production, EU is on track for barely 12% (footnote cli).
- Real urgency to invest in Europe remains. Europe still has assets: Dutch firm ASML, the world's sole producer of EUV (Extreme UltraViolet) lithography machines, without which no advanced processor below 7 nm (footnote 102: nanometre designations of processor generations are advertising more than physical measurement; no processor dimension matches exactly the quoted nanometres) could be produced efficiently. But Europe has marked dependencies: quasi-absence of industries — no foundry for sub-22-nm tech (dominated by Korean Samsung and Taiwanese TSMC). Raw materials: EU depends on China for germanium and gallium supply.
- Draghi report emphasizes strengthening European investment in semiconductors: limited investment capacity and high labor costs make generalist foundries impossible; either compete with US on fabless design and production, or develop specialized foundries for segments like automotive.

#### Sources / name-drops
- Footnote cxli: US extraterritoriality / China exports
- Footnote cxlii: Japan, Netherlands, semiconductor equipment
- WTO report on fabless design dominance; footnote cxliv: "six out of top-10 fabless firms are American"
- TSMC, Samsung
- CHIPS Act (US), signed August 2022: $52B subsidies, tax cuts, $80B research (footnote cxlv)
- TSMC Phoenix, Arizona plant (2020 announcement, footnote cxlvi; mid-2024 production, footnote cxlvii); second plant $7B govt direct funding, total $65B
- China: October 2022, $143B tax credits (footnote cxlviii)
- EU Chips Act (February 2022)
- Draghi report (footnote cxlix)
- European Court of Auditors report (footnotes cl, cli)
- ASML (Netherlands), EUV lithography
- Germanium/gallium dependency on China
- Footnote 102: nanometre notation as marketing

#### Key quotes
- "les États-Unis jouent de l'extraterritorialité de leur droit, qui leur permet d'interdire l'usage d'un produit dès qu'un seul de ses composants est de production américaine, pour restreindre certaines exportations vers la Chine." (p. 148)

### 15.3 Une régulation européenne étouffante (pp. 150-155)

#### Points
- Besides boosting propulsion, need to lighten the European legislative apparatus weighing like a ball and chain.
- An LLM-producing firm must today comply with a regulatory mille-feuille: copyright, specific texts on text and data mining, neighboring rights, GDPR. Arthur Mensch, CEO of Mistral AI (sole European LLM champion), testified in 2024 he spent a third of his last two months exclusively on GDPR compliance (footnote clii). For a CEO, this precious time should be devoted to innovation, not compliance.
- The heaviest law had not yet entered into force: the *European AI Act*. Provisions take effect in 2025. Drafted at EU Commission initiative to regulate AI development and use in Europe. Ambitions to cover the entirety of AI uses — horizontal, global regulation.
- The text contains sensible decisions: e.g., ban training models on copyrighted content (footnote 104: *Article 60f*), mandatory distinctive marks on AI-generated content to limit disinformation. But AI professionals have quickly pointed numerous weaknesses.
- First: large zones of vagueness. Some imprecisions betray ignorance of the subject. E.g., when specifying that certain clauses apply to models with "systemic risk", the text pushes exact delimitation to a later date (footnote 105: *see Annex XIII of AI Act, only possible avenues offered, delimitation left to Commission*), settling for criteria like training-compute threshold of 10^25 FLOPs, widely considered inadequate (footnote cliii).
- As details are often left to future implementation, a firm can't know if it's viable to launch its product in Europe. In doubt, better abstain. This uncertainty is why Meta renounced publishing its flagship Llama 3.2 models in Europe (footnote 106: *Meta signed an open letter: "Interventions by the European Data Protection Authorities have created huge uncertainty about what kinds of data can be used to train AI models."*).
- Beyond imprecision, law imposes Ubu-esque commercial demands. Annex XII (related to Article 53): providers of so-called "general-purpose" models (>1 billion parameters, i.e. nearly all commercial LLMs) must publicly detail model architecture, parameter count, and details of training data used — obligation confirmed by Code of Practice published July 2025. This info = core IP of AI producers; firms will either dodge via wording acrobatics (making publication useless) or avoid publishing advanced models in Europe (making law counterproductive).
- As if a group of irrationally frightened bureaucrats got free rein to harness a gestating technology. Regulation needed for well-understood risks (e.g., no model should be trained on copyrighted books); but pre-regulating hypothetical risks of still-gestating tech via "systemic-risk AI" categories even AI Act authors can't define leads to disastrous consequences.
- First: heavy penalty on future European champions' domestic market. Regulatory constraints raise market-entry costs — e.g., GDPR's competitiveness report by Draghi to EU Commission estimates cost of 500,000 euros for small firms, up to 10 million for largest (footnote cliv). European firms rely on domestic market (cultural/language/sovereignty/proximity privileges) -> regulation weighs more on them than on US competitors. Already behind; only true European champion is Mistral AI, fiercely fighting this legislation, arguing we should regulate not model *construction* but *use*. Persisting with heavy regulation will kill future European champions in the egg.
- Second: imposing heavy regulation prevents AI system deployment wherever they come from. AI being horizontal tech stimulating productivity across all sectors, hindering its use penalizes the whole economy.
- China and US chose radically opposite approaches: lighter and vertical, targeting precisely identified risks.
- China: every new LLM must get approval from the Chinese Cyberspace Administration before dissemination. Essentially ensures models refuse info uncomfortable for CCP (e.g., Tiananmen Square massacre, footnote clv). Unacceptable for Western firms -> OpenAI, Anthropic, Google absent from Chinese market. For Chinese firms accepting political-bias alignment, Chinese regulation not technically very constraining: targets punctual issues like copyright. Where Europe worked horizontally to cover all possible risks, Chinese regulation starts from the problem to solve and deduces regulation. Chinese policies say their AI approach must be "petite, rapide, flexible" / "small, fast, flexible" (footnote clvi).
- US: also lighter approach. Biden administration's October 2023 executive order reads more as best-practice guide than real law: unlike EU AI Act, no special penalty for non-compliant firms (footnote clvii). More targeted laws address specific practices: California's AB 2013 law requires publication of "high-level summary" of training data corpus to protect copyright. So US and China: regulation based on concrete problems rather than a monolithic corpus aiming to cover all cases.
- Most reasonable path: minimal regulation targeting clearly identified bad uses — e.g., exclude training on copyright-infringing data; or ban neural networks in video-recommendation algorithms like TikTok's to curb their addictive performance. The latter would be virtuous regulation making society happier and more competitive. Given pace of new AI use cases, any regulation system must be agile enough to ban a new harmful use in weeks/months.
- Example: advertising phone calls. Previously each one needed a human operator; voice-generation algorithms now produce convincing synthetic voices enabling hundreds of thousands of calls at near-zero cost. Phone spam can spread like wildfire; legislation must react in a few weeks with targeted bans.
- Conclusion: to get reasonable legislation adapting to tech reality rather than miring firms in vague, suffocating regulation, first step to win the AI race = repeal the AI Act and lighten regulation for our firms.

#### Sources / name-drops
- GDPR, text and data mining rights, neighboring rights, copyright
- Arthur Mensch, CEO of Mistral AI (1/3 of 2 months on GDPR, 2024 testimony, footnote clii)
- *European AI Act*
- Article 60f (footnote 104)
- Annex XIII, "systemic risk" definition left to Commission (footnote 105)
- 10^25 FLOPs threshold (footnote cliii)
- Meta open letter on EU Data Protection Authorities; Llama 3.2 withheld from EU (footnote 106)
- Annex XII & Article 53; Code of Practice July 2025
- Mario Draghi report on GDPR costs: 500K€ small / 10M€ large (footnote cliv)
- Mistral AI's stance
- China Cyberspace Administration; Tiananmen (footnote clv)
- Chinese "small, fast, flexible" policy (footnote clvi)
- Biden executive order October 2023 (footnote clvii)
- California AB 2013 law (training-data high-level summary)
- TikTok recommendation algorithms (example of targeted ban)
- AI-generated voice spam (example)

#### Key quotes
- "Arthur Mensch, PDG de Mistral AI, le seul champion européen du développement de LLM, témoignait en 2024 avoir consacré un tiers de ses deux derniers mois exclusivement à la conformité au RGPD." (p. 151)
- "la première étape pour gagner la course à l'IA serait de révoquer cet AI Act et d'alléger la régulation pour nos entreprises." (p. 153)

### 15.4 La question du secret (pp. 153-155) — bonus section on pp. 153-155, included since part of requested p. 155

#### Points
- Paradox in current AI development: billion-dollar secret models barely protected. Weights of largest models fit on a few hundred GB. Mark Zuckerberg (footnote 108: *"Open Source AI is the Path Forward", Meta Newsroom. Mark Zuckerberg post accompanying Llama-3.1 release*): "Some say we need to close our models to prevent China's access, but from my view this won't work and will only disadvantage the US and its allies. Our adversaries are very good at espionage; stealing models that fit on a USB key is relatively simple, and most tech firms operate in ways far from making this harder."
- Weights are only one component. Know-how — architectural choices, training recipes — is the other. In a few sentences, an employee can leak months of research.
- Governments have formidable espionage capabilities: historical precedents — exfiltrating info from a computer via fan noise (footnote 109: US TEMPEST program, developed since the 1960s); introducing a virus on a USB key into a nuclear program to damage it durably (footnote 110: Stuxnet virus that hit Iran's nuclear program in 2010, probably co-developed by US and Israel), delaying it years; infiltrating enemy hardware production chain to plant explosives (footnote 111: in 2024, Mossad detonated 5,000 talkie-walkies of Hamas members on the same day, killing about ten). Espionage is surely already in full swing at major AI firms.
- Two reactions to the difficulty of keeping the lid on secrets: seal hermetically, or open entirely by publishing models. Mark Zuckerberg chose openness for Meta, arguing it would be too hard to keep weights secret. But his decision likely stems from another reasoning: Meta, having months, nearly years of delay behind OpenAI, doesn't have much architectural innovation to show. Their Llama models have a rather classical architecture; Llama-3 retains nearly the same architecture as Llama-2, with a few well-known innovations (footnote 112: notable differences: Grouped Query Attention, Rotary Position Embedding). Publishing architecture and weights costs no intellectual property — secrets remain in the training method, less detailed in their publications. Open-source advantages (community standardization around Meta's architectural standards) may let Meta retake the lead.
- Leaders have much more interest in keeping models secret: whatever effort a firm puts in gaining meters on competitors, the day secrets are published/leaked, its lead vanishes instantly. All chart leaders except Meta (footnote 113: *choice by Meta to publish all models owes much to its AI research director Yann Le Cun*) chose secrecy -> have interest in heavy security layers. Balance needed: extra security layers cause slight friction slowing development.
- At the national level, security need even more pressing: if the best model leaks to China, it's not just the firm's short lead over local competitors, it's all US lead over China that is lost. In big US AI labs, Silicon Valley's "move fast and break things" culture often not up to security stakes. US govt already reacted, imposing security rules for advanced-model weights in its 13 January 2025 note, effective the same day (footnote clviii).

#### Sources / name-drops
- Mark Zuckerberg, "Open Source AI is the Path Forward" Meta Newsroom, Llama-3.1 release (footnote 108)
- Yann Le Cun (Meta AI research director, footnote 113)
- TEMPEST US espionage program (1960s-; footnote 109)
- Stuxnet virus, Iran nuclear 2010 (US + Israel, footnote 110)
- Mossad Hamas talkie-walkie attack, 2024 (footnote 111)
- Llama-2, Llama-3 architecture; Grouped Query Attention; Rotary Position Embedding (footnote 112)
- "move fast and break things" Silicon Valley mantra
- US government note on AI weights security, 13 January 2025 (footnote clviii)

#### Key quotes
- Zuckerberg quoted (p. 153): "Certains disent qu'il faut fermer nos modèles pour empêcher la Chine d'y avoir accès, mais de mon point de vue, cela ne fonctionnera pas et ne fera que désavantager les États-Unis et leurs alliés. Nos adversaires sont très bons en espionnage, voler des modèles qui tiennent sur une clé USB est relativement simple, et la plupart des entreprises de tech sont loin d'opérer d'une manière qui rende cela plus difficile."
- "si le meilleur modèle fuite vers la Chine, ce n'est pas seulement la courte avance de l'entreprise sur ses adversaires locaux qui est perdue, c'est toute l'avance des États-Unis sur la Chine." (pp. 154-155)
