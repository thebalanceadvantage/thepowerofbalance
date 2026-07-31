/* ============================================================================
   THE POWER OF BALANCE — SITE CONTENT & CONFIGURATION
   ============================================================================
   This is the ONLY file you should need to edit to change text, links,
   colors, or research content on the site.

   HOW TO EDIT:
   - CONFIG      → your links, contact info, social handles, brand colors
   - BENEFITS    → the 16 accordion topics (overview, signs, research, FAQs…)
   - GENERAL_FAQS→ the site-wide FAQ section
   - RESEARCH_EXTRA → a few additional research-library-only entries

   Every study listed under "research" was pulled from a real, published,
   peer-reviewed source (PubMed / PMC / journal sites). Each entry includes
   the direct link so visitors — and you — can verify it. If you add your
   own studies later, please keep that same standard: real studies, real
   links, clearly labeled study type.
   ============================================================================ */

const CONFIG = {
  brand: {
    name: "The Power of Balance",
    tagline: "Test-based nutrition & support",
  },
  links: {
    // EDIT THESE — replace with your real links (affiliate/booking/contact)
    learnMore: "#why-balance",
    takeTest: "#why-test",
    ctaTakeTest: "#why-test",
    ctaContact: "mailto:hello@yourdomain.com",
    testStep1: "#", // affiliate link placeholder — insert your test-kit link
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    email: "mailto:hello@yourdomain.com",
  },
  copyrightName: "The Power of Balance",
};

// A shared, honest, non-diagnostic disclaimer shown on every topic.
const STANDARD_DISCLAIMER =
  "This information is educational. Omega-3 fatty acids support normal cellular and physiological function and are not intended to diagnose, treat, cure, or prevent any disease. Always speak with a qualified healthcare provider about your individual needs, especially if you are pregnant, nursing, taking medication, or managing a health condition.";

// A shared, reusable food-source list (used as a default; topics can override)
const CORE_FOOD_SOURCES = [
  "Fatty fish — salmon, mackerel, sardines, anchovies, herring",
  "Wild-caught tuna (in moderation, due to mercury content)",
  "Algae-based DHA/EPA (a plant-source option)",
  "Walnuts and walnut oil",
  "Ground flaxseed and flaxseed oil",
  "Chia seeds and hemp seeds",
  "Pasture-raised eggs enriched with omega-3s",
];

/* ============================================================================
   BENEFITS — the 16 core educational topics
   ============================================================================ */
const BENEFITS = [
  {
    id: "gut-health",
    title: "Gut Health",
    keywords: ["gut", "microbiome", "ibs", "ibd", "crohn", "digestion", "bloating"],
    icon: "leaf",
    overview: [
      "Your gut is home to trillions of bacteria that influence digestion, immune signaling, and even mood. The balance of fats you eat is one of many inputs your gut microbiome responds to, alongside fiber, fermented foods, and overall dietary pattern.",
      "Because omega-3s are precursors to specialized molecules involved in resolving inflammation, researchers have been curious whether shifting your fatty-acid balance could also shift the makeup of your gut bacteria — and the early human data is genuinely interesting, if still early.",
    ],
    whyMatters: [
      "Small human trials have shown that omega-3 supplementation can increase the relative abundance of certain short-chain-fatty-acid-producing bacteria, such as Bifidobacterium and Roseburia — species generally associated with a healthier gut environment. Larger reviews of omega-3 in inflammatory bowel conditions have shown more mixed results, which is exactly why individual testing (rather than assuming an outcome) is useful.",
    ],
    signs: [
      "Occasional bloating or digestive discomfort",
      "Irregularity in digestion",
      "A diet low in fiber or oily fish",
      "General interest in supporting gut-immune balance",
    ],
    research: [
      {
        title: "A randomised trial of the effect of omega-3 polyunsaturated fatty acid supplements on the human intestinal microbiota",
        journal: "Gut (BMJ)",
        year: 2018,
        participants: 22,
        type: "RCT",
        summary:
          "In this randomized, open-label crossover trial, healthy middle-aged adults took 4g of mixed EPA/DHA daily for 8 weeks. Researchers found a reversible increase in several short-chain-fatty-acid-producing bacteria, regardless of whether the omega-3 came in capsule or drink form.",
        takeaway: "Omega-3 supplementation was linked to favorable, reversible shifts in specific gut bacteria in healthy adults.",
        link: "https://pubmed.ncbi.nlm.nih.gov/28951525/",
      },
      {
        title: "Long-term effects of increasing omega-3, omega-6 and total polyunsaturated fats on inflammatory bowel disease and markers of inflammation",
        journal: "European Journal of Nutrition",
        year: 2020,
        participants: 41751,
        type: "Systematic Review & Meta-Analysis",
        summary:
          "This large Cochrane-affiliated review pooled 83 RCTs, 13 of which included people with IBD. Increasing long-chain omega-3 intake showed a modest, non-definitive trend toward reduced IBD relapse and lower markers of inflammation like ESR.",
        takeaway: "Evidence for omega-3 and IBD outcomes is directionally encouraging but not yet conclusive — a good example of why personalized testing matters more than blanket claims.",
        link: "https://link.springer.com/article/10.1007/s00394-020-02413-y",
      },
      {
        title: "Omega-3 fatty acids and inflammatory bowel diseases — a systematic review",
        journal: "Alimentary Pharmacology & Therapeutics (via PubMed)",
        year: 2012,
        participants: null,
        type: "Systematic Review",
        summary:
          "Reviewing 19 randomized controlled trials, this analysis found that available data did not consistently support omega-3 supplementation for maintaining remission in ulcerative colitis or Crohn's disease.",
        takeaway: "Not every condition responds to omega-3 the same way — underscoring the value of testing and individualized guidance rather than one-size-fits-all supplementation.",
        link: "https://pubmed.ncbi.nlm.nih.gov/22591898/",
      },
    ],
    didYouKnow:
      "Your gut microbiome can shift its composition within weeks of a dietary change — some of the bacterial changes in the omega-3 crossover trial above appeared and reversed within the study's 8-week windows.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Pair omega-3-rich foods with fiber-rich vegetables to support a diverse microbiome.",
      "Stay hydrated — water intake affects digestive regularity as much as diet composition.",
      "Consider a fermented food (yogurt, kefir, sauerkraut) alongside your usual meals.",
    ],
    faqs: [
      {
        q: "Can omega-3s replace probiotics?",
        a: "No — they work differently. Omega-3s influence inflammation and cell membranes, while probiotics introduce live bacteria directly. Many people use both as part of a broader gut-support approach.",
      },
      {
        q: "How long before I'd notice a difference?",
        a: "Research trials on gut microbiome shifts have measured changes within 8–12 weeks, though individual results vary widely — another reason testing your own levels is more useful than guessing.",
      },
      {
        q: "Is this the same as treating IBS or IBD?",
        a: "No. This is educational information about a general area of nutrition science, not a treatment protocol. Please work with your gastroenterologist for any diagnosed condition.",
      },
    ],
  },

  {
    id: "fatigue",
    title: "Fatigue",
    keywords: ["fatigue", "tired", "exhaustion", "chronic fatigue", "burnout"],
    icon: "battery",
    overview: [
      "Persistent tiredness has many possible contributors — sleep, stress, nutrient status, and underlying health conditions among them. Omega-3 status is just one thread in that larger picture, but it's a thread researchers have studied in populations where fatigue is a defining symptom.",
      "Much of the human research on omega-3 and fatigue comes from people managing chronic inflammatory conditions, where fatigue is closely tied to inflammatory markers — offering a window into the broader relationship between fatty-acid balance and how depleted or energized the body feels.",
    ],
    whyMatters: [
      "Because EPA and DHA are involved in modulating inflammatory signaling, and chronic low-grade inflammation is associated with fatigue, some researchers have investigated whether correcting omega-3 imbalance could support the body's energy-related signaling pathways — though results across different populations remain mixed.",
    ],
    signs: [
      "Persistent low energy despite adequate sleep",
      "Feeling depleted after ordinary daily activity",
      "Reduced motivation or mental stamina",
      "A diet consistently low in oily fish or omega-3 sources",
    ],
    research: [
      {
        title: "Omega-3 Fatty Acids Supplementation and Neuroprotection, Inflammation, Fatigue, and Physical Activity in Multiple Sclerosis",
        journal: "Food Science & Nutrition",
        year: 2025,
        participants: 68,
        type: "RCT",
        summary:
          "In this double-blind, placebo-controlled trial, MS patients took 2g of omega-3 daily for 12 weeks. The study measured brain-derived neurotrophic factor, inflammatory markers, physical activity, and chronic fatigue scores before and after supplementation.",
        takeaway: "Omega-3 supplementation was evaluated as a possible support for fatigue and inflammatory markers in a population where fatigue is a core symptom — reinforcing that context and baseline status matter.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12402609/",
      },
      {
        title: "Placebo-controlled randomized clinical trial of fish oil's impact on fatigue, quality of life, and disease activity in Systemic Lupus Erythematosus",
        journal: "PMC (peer-reviewed)",
        year: 2015,
        participants: 50,
        type: "RCT",
        summary:
          "Fifty patients with lupus were randomized to fish oil or an olive oil placebo. The study measured fatigue, quality of life, and disease activity, building on earlier metabolomic findings linking reduced omega-3 status to oxidative stress in lupus patients.",
        takeaway: "In a population with known omega-3 depletion and high fatigue burden, researchers examined whether restoring omega-3 status was associated with meaningful changes in fatigue.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4538741/",
      },
    ],
    didYouKnow:
      "Fatigue researchers often measure omega-3 status as one variable among many (inflammation, sleep, activity level) — which is exactly why a personal test paints a clearer picture than any single symptom.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Prioritize consistent sleep and wake times before adding any supplement.",
      "Pair omega-3 intake with regular movement — even short walks support energy regulation.",
      "Track your energy levels for two weeks to identify your own patterns before making changes.",
    ],
    faqs: [
      {
        q: "Will omega-3s cure my fatigue?",
        a: "No single nutrient 'cures' fatigue. Omega-3 balance is one piece of a much larger picture that includes sleep, stress, thyroid function, and more. Persistent fatigue is worth discussing with a doctor.",
      },
      {
        q: "Is fatigue always related to omega-3 imbalance?",
        a: "No — fatigue has many causes. This section is meant to explain one area of active research, not suggest omega-3 is the singular explanation for tiredness.",
      },
    ],
  },

  {
    id: "brain-health",
    title: "Brain Health",
    keywords: ["brain fog", "focus", "memory", "cognitive", "concentration", "forgetfulness"],
    icon: "brain",
    overview: [
      "DHA, one of the two primary omega-3s, is a major structural component of brain cell membranes — it makes up a meaningful share of the fatty acids in your gray matter. Because of this, brain health is one of the most heavily researched areas of omega-3 science.",
      "Clinical trials have specifically examined how omega-3 intake relates to attention, processing speed, memory, and cognitive aging, particularly in older adults — an area where the evidence base is large enough to support dose-response analysis.",
    ],
    whyMatters: [
      "A cell membrane rich in DHA is more fluid, which affects how neurons communicate at the synapse. Researchers have studied whether increasing omega-3 intake — and by extension, improving the omega-6-to-omega-3 ratio in brain tissue — is associated with measurable differences in specific cognitive domains.",
    ],
    signs: [
      "Brain fog or a feeling of mental cloudiness",
      "Difficulty sustaining focus",
      "Mental fatigue by midday",
      "Occasional forgetfulness or slower recall",
    ],
    research: [
      {
        title: "A systematic review and dose-response meta-analysis of omega-3 supplementation on cognitive function",
        journal: "Scientific Reports (Nature)",
        year: 2025,
        participants: null,
        type: "Meta-Analysis",
        summary:
          "Pooling 58 randomized controlled trials, this dose-response analysis found that each 2000mg/day increment of omega-3 was associated with measurable improvement in several cognitive domains, including attention, perceptual speed, and language ability.",
        takeaway: "Across dozens of trials, higher omega-3 intake tracked with better performance on specific cognitive measures — with a clear dose-response relationship for some domains.",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12368174/",
      },
      {
        title: "The Role of Omega-3 Fatty Acid Supplementation in Slowing Cognitive Decline Among Elderly Patients With Alzheimer's Disease",
        journal: "PMC (peer-reviewed systematic review)",
        year: 2024,
        participants: null,
        type: "Systematic Review",
        summary:
          "This review examined randomized controlled trials of DHA supplementation in older adults with mild cognitive impairment or Alzheimer's disease, focused on cognitive function and hippocampal volume outcomes.",
        takeaway: "Findings across trials were mixed, varying by dose, duration, and how early in cognitive decline supplementation began — a reminder that timing and baseline status matter.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11630619/",
      },
      {
        title: "The older people, omega-3, and cognitive health (EPOCH) trial",
        journal: "PMC — Trial design paper",
        year: 2011,
        participants: 391,
        type: "Randomized Controlled Trial (design)",
        summary:
          "This 18-month, double-blind, placebo-controlled trial gave older adults either fish oil (DHA/EPA) or an olive oil placebo to assess whether omega-3 status — including genetic factors like ApoE-ε4 carriage — affects cognitive aging.",
        takeaway: "Large, long-duration trials like EPOCH reflect how seriously researchers treat the dose, duration, and individual-variability questions in brain-health research.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3210089/",
      },
    ],
    didYouKnow:
      "DHA makes up roughly 8% of the total fat content of the human brain and is especially concentrated in the synapses — the junctions where brain cells communicate.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Pair omega-3 intake with consistent sleep — memory consolidation happens during deep sleep stages.",
      "Stay mentally engaged with novel tasks, which supports cognitive reserve alongside good nutrition.",
      "Limit heavy alcohol intake, which can compound feelings of brain fog.",
    ],
    faqs: [
      {
        q: "Do omega-3s make you smarter?",
        a: "No credible research suggests omega-3s increase intelligence. The research focuses on supporting specific cognitive functions like processing speed and memory, not raising IQ.",
      },
      {
        q: "How much omega-3 did the studies use?",
        a: "Doses varied significantly, from under 1g/day to over 2g/day of combined EPA/DHA. This is exactly why testing your personal omega-3 status is more useful than guessing a dose.",
      },
      {
        q: "Is this relevant if I'm young and healthy?",
        a: "Most of the strongest data comes from older adults or those with existing cognitive concerns. Younger, healthy individuals may see different (or no measurable) effects.",
      },
    ],
  },

  {
    id: "skin",
    title: "Skin",
    keywords: ["skin", "acne", "eczema", "dryness", "redness", "complexion", "breakouts"],
    icon: "droplet",
    overview: [
      "Skin is your body's largest organ, and its outermost barrier is built substantially from lipids — including fatty acids. Because the skin barrier relies on a healthy balance of fats to retain moisture and manage inflammation, researchers have studied omega-3's relationship to several common skin concerns.",
      "The research base for skin is smaller than for areas like cardiovascular or brain health, and results are more mixed — which makes this a good example of why 'test, don't guess' matters: your individual skin response depends on your baseline fatty-acid status, genetics, and skin type.",
    ],
    whyMatters: [
      "Omega-3s are precursors to anti-inflammatory signaling molecules, and inflammation plays a documented role in acne and other reactive skin conditions. Researchers have specifically studied whether increasing omega-3 (sometimes alongside gamma-linolenic acid) shifts inflammatory acne lesion counts.",
    ],
    signs: [
      "Persistent dryness or a compromised skin barrier",
      "Recurring redness or reactive skin",
      "Inflammatory breakouts",
      "A dull or uneven complexion",
    ],
    research: [
      {
        title: "Effect of Dietary Supplementation with Omega-3 Fatty Acid and Gamma-linolenic Acid on Acne Vulgaris",
        journal: "Acta Dermato-Venereologica",
        year: 2014,
        participants: 45,
        type: "RCT",
        summary:
          "In this randomized, double-blind, controlled trial, participants with mild-to-moderate acne received omega-3, gamma-linolenic acid (borage oil), or control for 10 weeks. Both active groups saw significant reductions in inflammatory and non-inflammatory acne lesions.",
        takeaway: "Omega-3 supplementation was associated with measurable improvement in acne lesion counts over a 10-week period in this trial.",
        link: "https://doi.org/10.2340/00015555-1802",
      },
      {
        title: "Deficit of Omega-3 Fatty Acids in Acne Patients — A Cross-Sectional Pilot Study",
        journal: "PMC (peer-reviewed)",
        year: 2024,
        participants: null,
        type: "Case-Control / Cross-Sectional",
        summary:
          "This observational pilot study compared omega-3 status between people with acne and clear-skinned controls in a German cohort, finding lower omega-3 levels associated with the acne group.",
        takeaway: "An association between lower omega-3 status and acne doesn't prove cause and effect — but it's a good reason to actually test your own levels rather than assume.",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11050840/",
      },
    ],
    didYouKnow:
      "The outermost layer of your skin (the stratum corneum) is often described as a 'brick and mortar' structure — and the fatty acids in your diet directly influence the composition of that mortar.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Support your skin barrier from the outside too — a simple, fragrance-free moisturizer works alongside nutrition.",
      "Limit high-glycemic foods, which some research links to inflammatory skin changes.",
      "Protect skin from UV exposure daily, regardless of your nutrition approach.",
    ],
    faqs: [
      {
        q: "Will fish oil clear my acne?",
        a: "Some trials show improvement in inflammatory acne lesions, but results vary by individual, dose, and acne type. It is not a guaranteed or standalone treatment.",
      },
      {
        q: "How long do skin studies usually run?",
        a: "Most trials in this area run 8–12 weeks, reflecting how long skin cell turnover and visible change generally take.",
      },
      {
        q: "Can omega-3s help eczema?",
        a: "Some research points to improved skin barrier function and reduced inflammatory markers in people with atopic conditions, though findings are mixed and shouldn't replace dermatologist-guided care.",
      },
    ],
  },

  {
    id: "joint-health",
    title: "Joint Health",
    keywords: ["joint", "arthritis", "stiffness", "rheumatoid", "osteoarthritis", "joint pain"],
    icon: "bone",
    overview: [
      "Joint health is one of the most extensively studied areas in omega-3 research, largely because inflammation plays such a well-documented role in joint discomfort. Multiple meta-analyses — the strongest form of clinical evidence — have examined omega-3's relationship to conditions like rheumatoid arthritis and osteoarthritis.",
      "The consistency of findings here is part of why joint health is often the first area people associate with omega-3 supplementation, though individual response still varies with baseline omega-3 status and the specific joint condition involved.",
    ],
    whyMatters: [
      "Omega-3s compete with omega-6 fatty acids for the same enzymatic pathways that produce pro-inflammatory compounds. A diet heavy in omega-6 and light in omega-3 is thought to tilt this balance toward more inflammatory signaling — one reason researchers have focused so much attention on joint-related outcomes.",
    ],
    signs: [
      "Morning stiffness that eases with movement",
      "Joint tenderness or swelling",
      "Reduced range of motion",
      "Discomfort that increases with activity or weather changes",
    ],
    research: [
      {
        title: "Effects of omega-3 supplementation on lipid metabolism, inflammation, and disease activity in rheumatoid arthritis",
        journal: "Clinical Rheumatology",
        year: 2024,
        participants: 1018,
        type: "Meta-Analysis",
        summary:
          "This meta-analysis pooled 18 RCTs of people with rheumatoid arthritis, examining fatty acid distribution, inflammatory markers, and disease activity following omega-3 supplementation.",
        takeaway: "Omega-3 supplementation was associated with favorable shifts in fatty acid distribution and some inflammatory markers across nearly 20 combined trials.",
        link: "https://link.springer.com/article/10.1007/s10067-024-07040-0",
      },
      {
        title: "Omega-3 polyunsaturated fatty acids and the treatment of rheumatoid arthritis",
        journal: "PubMed",
        year: 2012,
        participants: 370,
        type: "Meta-Analysis",
        summary:
          "This meta-analysis of 10 RCTs (183 RA patients on omega-3, 187 controls) found that omega-3 PUFAs clearly reduced NSAID consumption and showed a trend toward reduced tender joint count.",
        takeaway: "Across these trials, omega-3 supplementation was linked to reduced reliance on anti-inflammatory medication in RA patients.",
        link: "https://pubmed.ncbi.nlm.nih.gov/22835600/",
      },
      {
        title: "Effect of omega-3 polyunsaturated fatty acids supplementation for patients with osteoarthritis: a meta-analysis",
        journal: "PMC (peer-reviewed)",
        year: 2023,
        participants: 2070,
        type: "Meta-Analysis",
        summary:
          "Pooling 9 RCTs with over 2,000 osteoarthritis patients, this meta-analysis found omega-3 supplementation was associated with a statistically significant reduction in arthritis pain compared to placebo.",
        takeaway: "Across a large combined sample, omega-3 supplementation showed a measurable pain-reduction effect in osteoarthritis patients.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10210278/",
      },
    ],
    didYouKnow:
      "Some rheumatoid arthritis trials measure the AA:EPA ratio (arachidonic acid to EPA) in blood as a marker of inflammatory potential — a more specific version of the omega-6:omega-3 ratio testing described in this site.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Low-impact movement like swimming or cycling supports joint mobility without added strain.",
      "Maintaining a healthy body weight reduces mechanical load on weight-bearing joints.",
      "Gentle daily stretching can help maintain range of motion.",
    ],
    faqs: [
      {
        q: "Can omega-3s replace arthritis medication?",
        a: "No. The research shows omega-3 may reduce reliance on NSAIDs in some studies, but it should never replace a treatment plan prescribed by your rheumatologist without medical guidance.",
      },
      {
        q: "How much omega-3 was used in these trials?",
        a: "Effective doses in RA trials were typically at or above 2.7g/day of combined EPA/DHA — notably higher than many general-wellness doses, another reason personalized testing and guidance matter.",
      },
    ],
  },

  {
    id: "sleep",
    title: "Sleep",
    keywords: ["sleep", "insomnia", "rest", "sleep quality", "sleep efficiency"],
    icon: "moon",
    overview: [
      "Sleep quality is influenced by circadian rhythm, stress, light exposure, and — according to a growing body of research — nutritional status, including omega-3 balance. DHA is highly concentrated in the brain regions involved in regulating sleep-wake cycles.",
      "Clinical trials have specifically measured omega-3's relationship to sleep efficiency (the percentage of time in bed actually spent asleep) and sleep latency (how long it takes to fall asleep), using objective tools like actigraphy alongside self-reported measures.",
    ],
    whyMatters: [
      "Because DHA is a structural component of neurons involved in circadian regulation, researchers have investigated whether restoring omega-3 balance supports healthier sleep architecture — though findings vary by age group and baseline omega-3 status.",
    ],
    signs: [
      "Difficulty falling asleep",
      "Waking frequently through the night",
      "Feeling unrested despite a full night's sleep",
      "Low dietary intake of oily fish or omega-3 sources",
    ],
    research: [
      {
        title: "Differential Effects of DHA- and EPA-Rich Oils on Sleep in Healthy Young Adults",
        journal: "PMC — Randomized Controlled Trial",
        year: 2021,
        participants: 84,
        type: "RCT",
        summary:
          "In this 26-week, placebo-controlled, double-blind trial, healthy adults with low habitual fish intake took either DHA-rich or EPA-rich oil. The DHA group showed improved actigraphy-measured sleep efficiency and sleep latency compared to placebo.",
        takeaway: "DHA-rich supplementation was linked to objectively measured improvements in how efficiently participants slept and how quickly they fell asleep.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7830450/",
      },
      {
        title: "Effect of omega-3 fatty acids on sleep: a systematic review and meta-analysis of randomized controlled trials",
        journal: "Journal of Clinical Biochemistry and Nutrition",
        year: 2024,
        participants: null,
        type: "Systematic Review & Meta-Analysis",
        summary:
          "Pooling 8 RCTs, this meta-analysis found sleep efficiency was significantly higher in the omega-3 group than controls, while total sleep duration and latency did not differ significantly.",
        takeaway: "Omega-3 supplementation showed a specific link to sleep efficiency, but not every sleep metric responded the same way — a nuance guesswork alone would miss.",
        link: "https://doi.org/10.3164/jcbn.24-36",
      },
      {
        title: "Effect of Docosahexaenoic Acid and Eicosapentaenoic Acid Supplementation on Sleep Quality in Healthy Subjects",
        journal: "Nutrients (MDPI)",
        year: 2022,
        participants: null,
        type: "RCT",
        summary:
          "This randomized, double-blind, placebo-controlled trial examined DHA and EPA supplementation effects on sleep quality specifically in middle- and older-aged healthy adults, a population less studied than younger cohorts.",
        takeaway: "This trial extended sleep research on omega-3s into an older adult population, filling a gap in earlier studies.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9573173/",
      },
    ],
    didYouKnow:
      "A systematic review of postmenopausal women found no clear sleep benefit from omega-3 in that specific population — a good reminder that findings from one group don't always generalize to another.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Keep a consistent sleep and wake time, even on weekends.",
      "Limit screens and bright light for an hour before bed.",
      "Avoid caffeine within 8 hours of your intended bedtime.",
    ],
    faqs: [
      {
        q: "Should I take omega-3s right before bed?",
        a: "Research trials generally studied consistent daily intake rather than specific timing before sleep. There isn't strong evidence that bedtime dosing changes the effect.",
      },
      {
        q: "Does this work for everyone with insomnia?",
        a: "No — results vary by age and population. Chronic insomnia should be evaluated by a healthcare provider, since many underlying causes exist beyond nutrition.",
      },
    ],
  },

  {
    id: "hormone-health",
    title: "Hormone Health",
    keywords: ["hormones", "pms", "premenstrual", "hormonal balance", "mood swings"],
    icon: "sparkle",
    overview: [
      "Hormonal fluctuations — particularly across the menstrual cycle — are associated with physical and emotional symptoms for many people. Because omega-3s are involved in prostaglandin signaling (a family of hormone-like compounds), researchers have studied their relationship to premenstrual symptoms specifically.",
      "This is an area where the research shows consistent directional benefit in several trials, though study sizes remain moderate and more large-scale research has been called for.",
    ],
    whyMatters: [
      "Prostaglandins derived from omega-6 fatty acids tend to be more inflammatory, while those derived from omega-3s tend to be less so. Since prostaglandins are directly involved in menstrual cramping and mood-related symptoms, shifting the underlying fatty-acid ratio is a logical — and now tested — area of research.",
    ],
    signs: [
      "Premenstrual mood changes",
      "Cyclical physical discomfort",
      "Difficulty concentrating around your cycle",
      "Low dietary omega-3 intake",
    ],
    research: [
      {
        title: "Evaluation of the effect of Omega-3 fatty acids in the treatment of premenstrual syndrome",
        journal: "European Psychiatry (ScienceDirect)",
        year: 2012,
        participants: 184,
        type: "RCT",
        summary:
          "In this randomized, double-blind, controlled trial, women taking omega-3 for 45 days showed significantly lower severity scores for depression, anxiety, and lack of concentration compared to the placebo group.",
        takeaway: "Omega-3 supplementation was linked to meaningfully lower premenstrual symptom severity scores across several domains in this trial.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0924933812751714",
      },
      {
        title: "Effect of omega-3 fatty acids on premenstrual syndrome: a systematic review and meta-analysis",
        journal: "Journal of Obstetrics and Gynaecology Research",
        year: 2022,
        participants: null,
        type: "Systematic Review & Meta-Analysis",
        summary:
          "This review synthesized multiple randomized trials on omega-3 and PMS symptoms, concluding that while findings are promising, larger and more diverse trials are needed to make firm recommendations.",
        takeaway: "The overall direction of evidence favors omega-3 for PMS symptom support, but researchers themselves call for more robust confirmation.",
        link: "https://obgyn.onlinelibrary.wiley.com/doi/10.1111/jog.15217",
      },
      {
        title: "The effect of omega-3 fatty acid supplementation on premenstrual syndrome and health-related quality of life",
        journal: "Journal of Psychosomatic Obstetrics & Gynecology",
        year: 2017,
        participants: 95,
        type: "RCT",
        summary:
          "In this randomized clinical trial, women with premenstrual symptoms received 1g of fish oil daily. Most symptoms and their interference with daily activities were significantly reduced over the follow-up period.",
        takeaway: "Longer-term omega-3 use was associated with continued improvement in premenstrual symptoms and reported quality of life.",
        link: "https://www.tandfonline.com/doi/abs/10.1080/0167482X.2017.1348496",
      },
    ],
    didYouKnow:
      "PMS is estimated to affect roughly half of women of reproductive age worldwide — one reason researchers have looked for nutrition-based, non-pharmacological approaches to support it.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Track your cycle alongside your symptoms to identify your own patterns.",
      "Regular movement throughout the month can help modulate prostaglandin-related discomfort.",
      "Limit excess caffeine and added sugar in the days leading up to your period, which some people find helpful.",
    ],
    faqs: [
      {
        q: "Will omega-3s balance my hormones directly?",
        a: "Omega-3s don't act as hormones themselves — they influence prostaglandin signaling, which is connected to (but distinct from) your primary sex hormones like estrogen and progesterone.",
      },
      {
        q: "How long until I'd notice a difference?",
        a: "Trials generally measured effects over 1–3 menstrual cycles (roughly 6–12 weeks), suggesting this isn't a same-day or same-cycle change for most people.",
      },
    ],
  },

  {
    id: "weight-management",
    title: "Weight Management",
    keywords: ["weight", "weight loss", "body composition", "waist circumference", "metabolism"],
    icon: "scale",
    overview: [
      "Weight management is complex and multi-factorial — omega-3s are not a weight-loss shortcut, and the research is refreshingly honest about that. What the data does show is a more nuanced relationship with specific measures like waist circumference and triglycerides, even when total body weight doesn't shift much.",
      "This topic is a particularly good example of why 'test, don't guess' matters: the evidence doesn't support omega-3 as a weight-loss supplement, but it may play a supporting role in metabolic markers connected to weight.",
    ],
    whyMatters: [
      "Some researchers have proposed that omega-3s influence appetite signaling, fat cell metabolism, and inflammatory pathways connected to metabolic health — even though effects on the number on the scale have been inconsistent across trials.",
    ],
    signs: [
      "Difficulty managing waist circumference despite consistent habits",
      "Elevated triglycerides on a lab panel",
      "General interest in metabolic health support",
      "A diet low in omega-3 relative to omega-6",
    ],
    research: [
      {
        title: "Efficacy of omega-3 polyunsaturated fatty acids supplementation in managing overweight and obesity",
        journal: "ScienceDirect (Nutrition journal)",
        year: 2016,
        participants: 617,
        type: "Meta-Analysis",
        summary:
          "This meta-analysis of 11 RCTs found no significant difference in total weight loss between omega-3 and placebo groups, but did find a significant reduction in waist circumference and serum triglycerides with omega-3 supplementation.",
        takeaway: "Omega-3 was not shown to drive weight loss directly, but was linked to improvements in waist circumference and triglycerides — markers relevant to metabolic health.",
        link: "https://www.sciencedirect.com/science/article/pii/S1279770723000751",
      },
      {
        title: "The Effects of Omega 3 Supplementation on Obesity and Overweight: A Systematic Review and Meta-Regression Analysis",
        journal: "SpringerLink",
        year: 2024,
        participants: null,
        type: "Meta-Analysis",
        summary:
          "Reviewing 36 controlled trials, this analysis found omega-3 supplementation was associated with modest reductions in waist circumference and body fat percentage, though not consistently with overall body weight.",
        takeaway: "Across three dozen trials, the strongest and most consistent effects were on body composition measures, not the scale itself.",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-62491-9_14",
      },
    ],
    didYouKnow:
      "Several trials measured waist circumference — not just weight — because it's considered a more direct marker of visceral (metabolically active) fat than total body weight alone.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Combine any nutrition strategy with regular resistance and cardiovascular movement.",
      "Prioritize whole-food sources of omega-3 alongside adequate protein and fiber.",
      "Track measurements like waist circumference alongside weight for a fuller picture.",
    ],
    faqs: [
      {
        q: "Will omega-3 supplements help me lose weight?",
        a: "The research does not support omega-3 as a direct weight-loss aid. It may support related metabolic markers, but sustainable weight management still depends on overall diet and activity patterns.",
      },
      {
        q: "Why does waist circumference matter more than the scale in these studies?",
        a: "Waist circumference reflects visceral fat, which is more strongly linked to metabolic health risk than total body weight.",
      },
    ],
  },

  {
    id: "chronic-wellness",
    title: "Chronic Wellness Support",
    keywords: ["inflammation", "chronic wellness", "immune", "wellbeing", "crp"],
    icon: "shield",
    overview: [
      "'Chronic wellness support' is a broad way of describing the body's baseline, everyday inflammatory tone — a factor increasingly studied across nearly every area of health. Omega-3s are among the most researched nutritional levers for modulating this baseline inflammatory signaling.",
      "Because inflammation markers like CRP (C-reactive protein) and IL-6 are measured across dozens of different patient populations, this is one of the most data-rich (and occasionally contradictory) areas of omega-3 research.",
    ],
    whyMatters: [
      "Omega-3s are converted into specialized pro-resolving mediators that actively help the body's inflammatory response return to baseline after being triggered. This is different from omega-6-derived compounds, which tend to sustain inflammatory signaling.",
    ],
    signs: [
      "Elevated inflammatory markers on routine labs (like hs-CRP)",
      "General interest in long-term wellness support",
      "A diet consistently higher in omega-6 than omega-3",
      "Interest in supporting the body's natural inflammatory balance",
    ],
    research: [
      {
        title: "The Effects of Omega-3 Fatty Acids Supplementation on Inflammatory Factors: Dose-Response Meta-Analysis",
        journal: "PubMed",
        year: 2023,
        participants: 2068,
        type: "Meta-Analysis",
        summary:
          "Pooling 33 RCTs, this dose-response analysis found each 1g/day of omega-3 significantly reduced IL-6 and TNF-alpha, two key inflammatory markers, in a dose-dependent way.",
        takeaway: "Higher omega-3 intake showed a clear, graded relationship with reductions in specific inflammatory markers across a large combined sample.",
        link: "https://pubmed.ncbi.nlm.nih.gov/37897076/",
      },
      {
        title: "Regulation of inflammation by omega-3 and omega-6 fatty acids: a meta-analysis of randomized trials",
        journal: "Frontiers in Nutrition",
        year: 2026,
        participants: 504,
        type: "Meta-Analysis",
        summary:
          "This recent meta-analysis of 9 RCTs found omega-3/6 supplementation showed no significant overall effect on IL-6, CRP, or TNF-alpha, but did find a significant reduction in IL-1beta.",
        takeaway: "Not every inflammatory marker responds the same way to omega-3 — a nuance that highlights why individual testing beats blanket assumptions.",
        link: "https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1799601/full",
      },
      {
        title: "Omega-3 supplementation reduces C-reactive protein, prostaglandin E2 and the granulocyte/lymphocyte ratio in heavy smokers",
        journal: "Frontiers in Nutrition",
        year: 2022,
        participants: 49,
        type: "Randomized Crossover Trial",
        summary:
          "In this open-label crossover trial, participants with elevated cancer risk and CRP levels received high-dose EPA/DHA (3.6g/day) for 6 months, with researchers measuring CRP, prostaglandin E2, and immune cell ratios.",
        takeaway: "In a population selected specifically for elevated baseline inflammation, omega-3 supplementation was linked to measurable reductions in inflammatory markers.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9751896/",
      },
    ],
    didYouKnow:
      "Researchers sometimes deliberately study people with already-elevated inflammation (like heavy smokers) because it's easier to detect a meaningful change from a higher starting point — one reason your own baseline status matters so much.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Reduce ultra-processed foods high in omega-6 seed oils where practical.",
      "Prioritize sleep — poor sleep is independently linked to elevated inflammatory markers.",
      "Consider asking your doctor about an hs-CRP test alongside an omega-3 index test for a fuller picture.",
    ],
    faqs: [
      {
        q: "Does 'chronic wellness support' mean treating a disease?",
        a: "No. This section discusses general inflammatory balance as a wellness concept, not the treatment of any diagnosed disease. Please consult a physician for any medical condition.",
      },
      {
        q: "Why do some studies show no effect on CRP?",
        a: "Results depend heavily on baseline inflammation, dose, duration, and population studied — which is exactly why we recommend testing your own status rather than assuming a universal effect.",
      },
    ],
  },

  {
    id: "longevity",
    title: "Longevity",
    keywords: ["longevity", "aging", "healthy aging", "telomere", "cellular aging"],
    icon: "infinity",
    overview: [
      "Longevity research looks at markers of cellular aging — like telomere length and oxidative stress — alongside long-term health outcomes. Omega-3 status has been examined in some of the largest nutrition trials ever conducted, including multi-year studies involving tens of thousands of participants.",
      "This is an area where 'balance' is often literally the variable being measured: researchers frequently track the ratio of omega-6 to omega-3 (rather than omega-3 alone) as a marker connected to markers of cellular aging.",
    ],
    whyMatters: [
      "Telomeres — the protective caps at the ends of chromosomes — shorten with age and are influenced by oxidative stress and chronic inflammation. Because omega-3s are linked to lower oxidative stress and inflammatory signaling, researchers have directly studied their relationship to telomere length over time.",
    ],
    signs: [
      "General interest in long-term, proactive health support",
      "A diet historically low in omega-3-rich foods",
      "Interest in markers of cellular and metabolic aging",
      "Family history that has prompted more proactive health tracking",
    ],
    research: [
      {
        title: "Omega-3 Fatty Acids, Oxidative Stress, and Leukocyte Telomere Length: A Randomized Controlled Trial",
        journal: "Brain, Behavior, and Immunity",
        year: 2012,
        participants: 106,
        type: "RCT",
        summary:
          "In this four-month, double-blind trial, sedentary, overweight middle-aged and older adults received one of two omega-3 doses or a placebo. Researchers measured leukocyte telomere length, telomerase activity, and oxidative stress markers before and after.",
        takeaway: "This trial directly tested whether omega-3 supplementation could influence a specific, measurable marker of cellular aging.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S088915911200431X",
      },
      {
        title: "Vitamin D3 and marine omega-3 fatty acids supplementation and leukocyte telomere length: 4-year findings from the VITAL trial",
        journal: "American Journal of Clinical Nutrition",
        year: 2025,
        participants: 25871,
        type: "Randomized Controlled Trial",
        summary:
          "Leveraging the large-scale VITAL trial, researchers followed over 25,000 adults over 4 years in a 2x2 factorial design testing vitamin D3 and marine omega-3 supplementation, measuring telomere length at baseline, year 2, and year 4.",
        takeaway: "This is one of the largest and longest-running human trials to examine omega-3's relationship to a specific marker of cellular aging.",
        link: "https://ajcn.nutrition.org/article/S0002-9165(25)00255-2/abstract",
      },
    ],
    didYouKnow:
      "The VITAL trial, one of the sources above, enrolled nearly 26,000 participants — making it one of the largest nutrition-supplement trials ever conducted in the United States.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Pair nutrition strategies with regular strength training, which independently supports healthy aging.",
      "Prioritize consistent, quality sleep — a major but under-discussed longevity factor.",
      "Ask your provider about periodic lab panels to track markers relevant to long-term health.",
    ],
    faqs: [
      {
        q: "Do omega-3s make you live longer?",
        a: "No trial can ethically or practically prove that any single nutrient extends lifespan. Researchers instead study specific measurable markers (like telomere length or inflammation) that are associated with aging.",
      },
      {
        q: "Is telomere length testing something I can access?",
        a: "It exists, but is not standard clinical practice. This site focuses on the more established and widely accessible omega-3 index test as a starting point.",
      },
    ],
  },

  {
    id: "pregnancy",
    title: "Pregnancy",
    keywords: ["pregnancy", "pregnant", "prenatal", "preterm birth", "DHA pregnancy"],
    icon: "heart",
    overview: [
      "Pregnancy is one of the most rigorously studied areas of omega-3 nutrition, in part because DHA is essential for fetal brain and eye development, and is actively transferred from mother to baby throughout gestation. Several large, multi-site randomized trials have specifically examined maternal omega-3 status and pregnancy outcomes.",
      "This research has also produced one of the clearest 'test, don't guess' findings in the entire field: outcomes appear to depend heavily on a woman's omega-3 status before supplementing — meaning blanket, one-size-fits-all dosing may not serve everyone equally well.",
    ],
    whyMatters: [
      "DHA accumulates rapidly in the fetal brain during the third trimester. Because maternal DHA status directly determines how much is available to the baby, researchers have focused heavily on questions of dose, timing, and baseline maternal omega-3 levels.",
    ],
    signs: [
      "Low dietary intake of DHA-rich foods before or during pregnancy",
      "Interest in supporting healthy fetal neurological development",
      "A history of early preterm birth",
      "General interest in prenatal nutrition optimization",
    ],
    research: [
      {
        title: "A Randomized Trial of Prenatal n-3 Fatty Acid Supplementation and Preterm Delivery",
        journal: "New England Journal of Medicine",
        year: 2019,
        participants: 350,
        type: "RCT",
        summary:
          "In this phase III, double-blind trial, pregnant women received DHA or placebo from before 20 weeks gestation through birth. DHA supplementation was associated with longer gestation duration and greater birth weight, length, and head circumference.",
        takeaway: "This landmark NEJM trial found that maternal DHA status at the start of supplementation strongly influenced outcomes — supplementation helped most in women who started with lower omega-3 status.",
        link: "https://www.nejm.org/doi/full/10.1056/NEJMoa1816832",
      },
      {
        title: "Safety of Omega-3 Fatty Acid Supplementation During Pregnancy: A Meta-Analysis of RCTs",
        journal: "Prostaglandins, Leukotrienes and Essential Fatty Acids (via ResearchGate)",
        year: 2025,
        participants: null,
        type: "Meta-Analysis",
        summary:
          "This meta-analysis found that women with low baseline omega-3 status early in pregnancy had increased risk of early preterm birth and were most likely to benefit from omega-3 supplementation, while women with already-adequate omega-3 status saw less benefit — and in some analyses, slightly increased risk with additional supplementation.",
        takeaway: "This is one of the clearest examples in all of omega-3 research of why testing baseline status — rather than assuming 'more is better' — genuinely changes the recommendation.",
        link: "https://www.researchgate.net/publication/398507365_Safety_of_Omega-3_Fatty_Acid_Supplementation_During_Pregnancy_A_Meta-Analysis_of_Randomized_Controlled_Trials",
      },
      {
        title: "Higher dose docosahexaenoic acid supplementation during pregnancy and early preterm birth",
        journal: "eClinicalMedicine (The Lancet)",
        year: 2021,
        participants: null,
        type: "RCT (adaptive-design superiority trial)",
        summary:
          "This trial directly compared 1000mg vs. 200mg of DHA daily during pregnancy, finding the higher dose was likely more effective at reducing early preterm birth, particularly among women with low DHA status at enrollment.",
        takeaway: "Dose mattered — and mattered most for women who started with lower omega-3 status, again reinforcing the value of knowing your baseline before choosing a dose.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8257993/",
      },
      {
        title: "The efficacy and safety of omega-3 fatty acids on depressive symptoms in perinatal women",
        journal: "PMC — Meta-Analysis",
        year: 2020,
        participants: 638,
        type: "Meta-Analysis",
        summary:
          "This meta-analysis of 8 randomized, placebo-controlled trials found a significant effect of omega-3 supplementation on depressive symptoms in perinatal women, with well-tolerated safety outcomes.",
        takeaway: "Omega-3 supplementation showed a consistent, positive association with reduced depressive symptoms across the perinatal period in this pooled analysis.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7299975/",
      },
    ],
    didYouKnow:
      "The developing fetal brain accumulates the majority of its DHA during the third trimester — which is part of why maternal omega-3 status specifically in later pregnancy has been such a research focus.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Always discuss any supplement — including omega-3 — with your OB or midwife before starting, especially regarding dose and fish-derived vs. algae-derived sources.",
      "If eating fish, choose lower-mercury options like salmon, sardines, and trout.",
      "Testing baseline omega-3 status before supplementing is exactly the kind of personalized approach the research above supports.",
    ],
    faqs: [
      {
        q: "Is fish oil safe during pregnancy?",
        a: "Generally, yes, under medical guidance — but the research above shows that dose and baseline status matter. Always discuss supplementation with your prenatal care provider.",
      },
      {
        q: "Should every pregnant woman take the same dose?",
        a: "The research specifically suggests otherwise — women with lower baseline omega-3 status responded differently than those with already-adequate levels. This is precisely why testing is emphasized throughout this site.",
      },
      {
        q: "Can I get enough DHA from food alone?",
        a: "It's possible with regular intake of oily fish or algae-based DHA, but many prenatal guidelines still recommend supplementation given how much is required for fetal development — a conversation to have with your provider.",
      },
    ],
  },

  {
    id: "fertility",
    title: "Fertility",
    keywords: ["fertility", "ivf", "sperm", "conception", "trying to conceive", "reproductive health"],
    icon: "flower",
    overview: [
      "Fertility research spans both male and female reproductive health, and omega-3s have been studied in both contexts — from sperm parameters to embryo quality in IVF cycles. As with pregnancy, this research area shows how baseline nutritional status can meaningfully shape reproductive outcomes.",
      "Much of this research is still emerging relative to more established areas like cardiovascular health, but several specific, well-designed trials offer useful signal for anyone exploring fertility-focused nutrition.",
    ],
    whyMatters: [
      "Omega-3s are structural components of both sperm and egg cell membranes and are involved in the prostaglandin signaling relevant to ovulation and implantation — giving researchers a clear biological rationale to study fertility outcomes directly.",
    ],
    signs: [
      "Actively trying to conceive and optimizing nutrition",
      "Undergoing or considering assisted reproductive technology (ART/IVF)",
      "A partner's semen analysis showing suboptimal parameters",
      "General interest in preconception health",
    ],
    research: [
      {
        title: "A randomised controlled trial of a preconceptional dietary intervention in women undergoing IVF treatment (PREPARE trial)",
        journal: "PMC (peer-reviewed trial design)",
        year: 2014,
        participants: 110,
        type: "RCT",
        summary:
          "This randomized trial gave couples undergoing IVF either a Mediterranean-style diet with 2g daily marine omega-3 plus vitamin D, or a control diet, for 6 weeks preconception, measuring embryo developmental competency via validated morphokinetic markers.",
        takeaway: "This trial was specifically designed to test whether a real-world dietary change — not just an isolated nutrient — including omega-3 could measurably affect early embryo development.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4289275/",
      },
      {
        title: "The Effect of Omega-3 on the Number of Retrieved Ova, Fertilization Rate, and Embryo Grading in Subfertile Women Undergoing ICSI",
        journal: "Biomedical and Pharmacology Journal",
        year: 2018,
        participants: 120,
        type: "RCT",
        summary:
          "In this randomized, double-blind, placebo-controlled trial, subfertile women undergoing intracytoplasmic sperm injection received preconception omega-3 supplementation, with researchers measuring oocyte retrieval, fertilization rate, and embryo grading.",
        takeaway: "This trial specifically targeted reproductive-technology outcomes, offering a direct (if still early-stage) look at omega-3's role in assisted conception.",
        link: "https://biomedpharmajournal.org/vol11no4/the-effect-of-omega-3-on-the-number-of-retrieved-ova-fertilization-rate-and-embryo-grading-in-subfertile-women-undergoing-intracytoplasmic-sperm-injection/",
      },
      {
        title: "The Effect of Antioxidants on Sperm Quality Parameters for Idiopathic Male Infertility: A Network Meta-Analysis",
        journal: "PMC (peer-reviewed)",
        year: 2022,
        participants: null,
        type: "Network Meta-Analysis",
        summary:
          "This network meta-analysis compared several antioxidants and nutrients for male infertility, finding omega-3 fatty acid ranked first among compared interventions specifically for improving sperm concentration.",
        takeaway: "Among several nutrients studied for male fertility support, omega-3 showed the strongest ranked association with sperm concentration specifically.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8898892/",
      },
    ],
    didYouKnow:
      "Some fertility research measures effects not just on quantity (like sperm count) but on quality metrics like embryo morphokinetics — the precise timing and pattern of early cell division.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Preconception nutrition changes are generally recommended to begin at least 3 months before trying to conceive, since egg and sperm maturation take time.",
      "Both partners' nutrition matters — fertility research increasingly looks at male factors alongside female ones.",
      "Discuss any supplementation plan with your fertility specialist, especially if undergoing IVF or ICSI.",
    ],
    faqs: [
      {
        q: "Can omega-3s improve my chances of conceiving?",
        a: "Some trials show promising associations with specific fertility markers, but no supplement guarantees conception. Fertility is influenced by many factors best assessed with your reproductive endocrinologist.",
      },
      {
        q: "Is this relevant for men too?",
        a: "Yes — several of the studies above specifically examined male fertility markers like sperm concentration and quality.",
      },
    ],
  },

  {
    id: "energy",
    title: "Energy",
    keywords: ["energy", "vitality", "cellular energy", "mitochondria", "stamina"],
    icon: "sun",
    overview: [
      "Every cell in your body relies on healthy membranes to regulate the flow of nutrients and signals that support cellular energy production. Because omega-3s are structural components of these membranes, some researchers have explored their relationship to markers connected to energy metabolism and daily vitality.",
      "This is a broader, more foundational topic than clinical 'fatigue' research — it's about the cellular-level building blocks that support how your body functions day to day, rather than any single diagnosed condition.",
    ],
    whyMatters: [
      "Cell membrane composition affects how efficiently nutrients, oxygen, and signaling molecules move in and out of cells — processes that underlie basic energy metabolism. A diet skewed heavily toward omega-6 fats, common in modern eating patterns, shifts this membrane composition in ways researchers continue to study.",
    ],
    signs: [
      "General interest in supporting day-to-day vitality",
      "A diet consistently low in omega-3-rich whole foods",
      "Interest in cellular-level nutrition rather than symptom-chasing",
      "Curiosity about your personal omega-6-to-omega-3 ratio",
    ],
    research: [
      {
        title: "Omega-3 Fatty Acid Supplementation on Post-Exercise Inflammation, Muscle Damage, Oxidative Response, and Sports Performance",
        journal: "Nutrients (MDPI) — Systematic Review",
        year: 2024,
        participants: null,
        type: "Systematic Review",
        summary:
          "This review examined 13 controlled trials on omega-3's relationship to post-exercise oxidative stress markers, alongside inflammation and muscle damage — all processes connected to how efficiently the body recovers and generates usable energy.",
        takeaway: "Omega-3 supplementation showed some association with improved oxidative stress markers, a cellular process connected to energy metabolism.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11243702/",
      },
      {
        title: "Omega-3 Fatty Acids Supplementation and Neuroprotection, Inflammation, Fatigue, and Physical Activity in Multiple Sclerosis",
        journal: "Food Science & Nutrition",
        year: 2025,
        participants: 68,
        type: "RCT",
        summary:
          "This RCT measured physical activity levels alongside inflammatory markers and chronic fatigue in a population managing a condition where energy and vitality are commonly affected.",
        takeaway: "This trial connects cellular-level inflammatory markers directly to measured physical activity and reported vitality outcomes.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12402609/",
      },
    ],
    didYouKnow:
      "Every one of your roughly 37 trillion cells has a membrane built partly from the fats you eat — meaning your dietary fat balance is, quite literally, structural.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Regular movement is one of the most well-established levers for daily energy — pair it with good nutrition rather than relying on either alone.",
      "Stay consistently hydrated; even mild dehydration affects perceived energy levels.",
      "Prioritize a consistent sleep schedule as a foundation before layering on nutrition strategies.",
    ],
    faqs: [
      {
        q: "Will omega-3s give me an energy boost like caffeine?",
        a: "No — omega-3s don't act as stimulants. Any relationship to energy is about supporting underlying cellular function over time, not an immediate jolt.",
      },
      {
        q: "How is this different from the Fatigue section?",
        a: "This section focuses on general, foundational cellular energy support, while the Fatigue section discusses research in populations experiencing persistent, clinically significant tiredness.",
      },
    ],
  },

  {
    id: "menopause",
    title: "Menopause",
    keywords: ["menopause", "perimenopause", "hot flashes", "vasomotor", "night sweats"],
    icon: "leaf",
    overview: [
      "Menopause brings hormonal shifts that affect sleep, mood, and vasomotor symptoms like hot flashes and night sweats. Omega-3 has been studied as a potential non-hormonal support option — and this is an area where honesty about mixed results is especially important.",
      "Several well-designed, large randomized trials have specifically tested omega-3 against placebo for menopausal symptoms, and the results are more mixed than in some other topics on this site — which is exactly why we're including the full picture rather than a cherry-picked version.",
    ],
    whyMatters: [
      "The menopausal transition involves declining estrogen, which affects the brain regions involved in temperature regulation and mood. Because omega-3s influence broader inflammatory and neurological signaling, researchers have tested whether they could support this transition — with results that vary considerably by study design and population.",
    ],
    signs: [
      "Hot flashes or night sweats",
      "Disrupted sleep during the menopausal transition",
      "Mood changes associated with hormonal shifts",
      "Interest in non-hormonal symptom support options",
    ],
    research: [
      {
        title: "Efficacy of omega-3 for vasomotor symptoms treatment: a randomized controlled trial (MsFLASH)",
        journal: "Menopause (journal)",
        year: 2014,
        participants: 355,
        type: "RCT",
        summary:
          "In this well-powered, 12-week randomized trial from the MsFLASH network, 1.8g of omega-3 daily did not significantly reduce hot flash frequency, bother, sleep, or mood compared to placebo in healthy perimenopausal and postmenopausal women.",
        takeaway: "This large, rigorous trial found no significant benefit for omega-3 on vasomotor symptoms specifically — an important, honest data point.",
        link: "https://pubmed.ncbi.nlm.nih.gov/23982113/",
      },
      {
        title: "Effect of omega-3 supplements on vasomotor symptoms in menopausal women: A systematic review and meta-analysis",
        journal: "ScienceDirect",
        year: 2018,
        participants: 483,
        type: "Systematic Review & Meta-Analysis",
        summary:
          "Pooling 3 RCTs, this meta-analysis found no significant difference between omega-3 and placebo groups for frequency or severity of hot flushes, sleep quality, or quality of life.",
        takeaway: "Consistent with the trial above, this meta-analysis found no clear evidence that omega-3 reduces vasomotor symptoms in menopause.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S030121151830335X",
      },
      {
        title: "Effects of Omega-3 Polyunsaturated Fatty Acids Intake on Vasomotor Symptoms, Sleep Quality and Depression in Postmenopausal Women",
        journal: "Nutrients (MDPI) — Systematic Review",
        year: 2023,
        participants: null,
        type: "Systematic Review",
        summary:
          "This review of 9 studies found that 4 detected potential benefits for hot flashes and night sweats specifically, while overall pooled evidence for sleep and depression outcomes remained inconclusive.",
        takeaway: "Results were mixed across individual trials — some showed benefit, most did not reach statistical significance when pooled, reinforcing why individualized testing matters more than a blanket recommendation here.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10574492/",
      },
    ],
    didYouKnow:
      "Menopause is one of the few topics on this site where large, rigorous trials have found no clear overall benefit for a specific symptom (vasomotor symptoms) — a good example of scientific honesty over marketing.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Layer clothing and keep your sleep environment cool to help manage night sweats.",
      "Regular exercise and yoga have shown benefit for overall menopausal symptom management in some MsFLASH-network research.",
      "Talk to your doctor about all evidence-based options, including hormonal and non-hormonal approaches, for vasomotor symptoms.",
    ],
    faqs: [
      {
        q: "Do omega-3s help with hot flashes?",
        a: "The strongest available trials, including a large MsFLASH study, found no significant benefit for hot flash frequency or severity. We think it's important to share this honestly rather than overstate the evidence.",
      },
      {
        q: "So why include omega-3 in a menopause section at all?",
        a: "Because general cellular and inflammatory health remain relevant throughout menopause, even if the specific vasomotor-symptom research hasn't shown a clear benefit. Testing your levels can still inform your broader wellness picture.",
      },
    ],
  },

  {
    id: "sports-performance",
    title: "Sports Performance",
    keywords: ["athletes", "sports performance", "endurance", "strength", "athletic"],
    icon: "target",
    overview: [
      "Athletes have unique nutritional demands, and omega-3s have drawn research interest as a potential ergogenic (performance-supporting) nutrient — primarily through their effects on inflammation, muscle membrane function, and oxidative stress from intense training.",
      "This research sits alongside — and often overlaps with — recovery research, since performance and recovery are deeply connected for anyone training consistently.",
    ],
    whyMatters: [
      "Omega-3s are incorporated into muscle cell membranes and may influence neuromuscular function, which some researchers believe could affect force production and voluntary muscle activation, particularly after fatiguing exercise.",
    ],
    signs: [
      "Interest in supporting training adaptation as an athlete",
      "Noticeable performance dips during high training volume periods",
      "A diet lower in omega-3 relative to training demands",
      "General interest in evidence-based sports nutrition",
    ],
    research: [
      {
        title: "Omega-3 Fatty Acid Supplementation on Post-Exercise Inflammation, Muscle Damage, Oxidative Response, and Sports Performance",
        journal: "Nutrients (MDPI) — Systematic Review",
        year: 2024,
        participants: null,
        type: "Systematic Review",
        summary:
          "This review of 13 controlled trials in physically healthy adults examined creatine kinase, lactate dehydrogenase, CRP, and performance outcomes, finding some markers of muscle damage were significantly lower in supplemented groups, though performance data remained inconsistent.",
        takeaway: "Omega-3 showed clearer effects on muscle-damage biomarkers than on directly measured performance outcomes across these trials.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11243702/",
      },
      {
        title: "The Effect of Omega-3 on Mitigating Exercise-Induced Muscle Damage",
        journal: "PMC — Review",
        year: 2024,
        participants: null,
        type: "Narrative Review",
        summary:
          "This review highlighted a trial in which athletes given high-EPA fish oil returned to baseline jump performance within 24 hours, versus a 12% performance deficit that persisted in a comparison group, suggesting a role in neuromuscular recovery.",
        takeaway: "In this specific study, omega-3 (particularly high-EPA) was linked to faster return to baseline athletic performance after muscle-damaging exercise.",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12044634/",
      },
      {
        title: "Omega-3s, Inflammation, and Muscle Recovery: Meta-Analysis of 41 RCTs",
        journal: "GrassrootsHealth (research summary)",
        year: 2026,
        participants: 1800,
        type: "Meta-Analysis",
        summary:
          "This large meta-analysis pooled 41 RCTs (2011–2025) involving over 1,800 recreational and trained athletes, examining omega-3's relationship to multiple inflammatory and recovery markers following exercise.",
        takeaway: "Across one of the largest combined samples of athletes studied, researchers found a moderate, consistent reduction in exercise-induced soreness in some trials.",
        link: "https://www.grassrootshealth.net/blog/omega-3s-inflammation-and-muscle-recovery-what-the-latest-meta-analysis-reveals/",
      },
    ],
    didYouKnow:
      "Some sports-nutrition trials time omega-3 supplementation before, not just after, intense exercise — one trial gave fish oil and whey protein two hours before muscle-damaging exercise and saw better outcomes than post-exercise dosing.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Periodize your nutrition around training blocks — needs shift with training volume and intensity.",
      "Prioritize adequate protein alongside omega-3 for muscle repair and adaptation.",
      "Work with a sports dietitian for individualized guidance if you're training at a competitive level.",
    ],
    faqs: [
      {
        q: "Will omega-3 supplements make me a better athlete?",
        a: "The clearest evidence is for supporting recovery markers like muscle soreness and inflammation, not necessarily raw performance gains. Training, sleep, and overall nutrition remain the biggest performance levers.",
      },
      {
        q: "What dose did these studies use?",
        a: "Doses varied widely, generally in the 1–4g/day range of combined EPA/DHA, often for several weeks before outcomes were measured.",
      },
    ],
  },

  {
    id: "recovery",
    title: "Recovery",
    keywords: ["recovery", "muscle soreness", "doms", "exercise recovery", "inflammation recovery"],
    icon: "refresh",
    overview: [
      "Post-exercise recovery — how quickly muscle soreness, strength, and inflammation return to baseline after training — is one of the more specific and well-studied areas of omega-3 sports research, with multiple meta-analyses now available.",
      "This is distinct from general 'Sports Performance' in that it focuses specifically on what happens after intense or unfamiliar exercise, rather than performance output itself.",
    ],
    whyMatters: [
      "Eccentric (muscle-lengthening) exercise causes microscopic muscle damage and a predictable inflammatory response, known as delayed-onset muscle soreness (DOMS). Because omega-3s influence inflammatory resolution, researchers have specifically studied their effect on DOMS as a measurable outcome.",
    ],
    signs: [
      "Prolonged soreness after unfamiliar or intense workouts",
      "Slower-than-expected return to baseline strength between sessions",
      "Interest in supporting the body's natural recovery processes",
      "Training frequently enough that recovery quality affects performance",
    ],
    research: [
      {
        title: "Omega-3 Polyunsaturated Fatty Acid Supplementation for Reducing Muscle Soreness after Eccentric Exercise",
        journal: "PMC — Systematic Review & Meta-Analysis",
        year: 2020,
        participants: 301,
        type: "Meta-Analysis",
        summary:
          "This meta-analysis pooled 12 RCTs (145 subjects, 156 controls) and found omega-3 supplementation significantly decreased delayed-onset muscle soreness (DOMS) two days after eccentric exercise, without significant effects on strength or range of motion.",
        takeaway: "Across a dozen combined trials, omega-3 supplementation showed a specific, measurable reduction in muscle soreness after intense exercise.",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7195643/",
      },
      {
        title: "Effect of omega-3 fatty acids supplementation on inflammatory markers following exercise-induced muscle damage",
        journal: "Science & Sports (ScienceDirect)",
        year: 2024,
        participants: null,
        type: "Systematic Review & Meta-Analysis",
        summary:
          "This meta-analysis concluded that omega-3 supplementation appears effective in alleviating inflammation that occurs after exercise-induced muscle damage, while noting further research is needed to optimize dose and timing.",
        takeaway: "Omega-3 was linked to reduced post-exercise inflammatory markers in this pooled analysis, though optimal dosing protocols are still being refined.",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0985056224000918",
      },
      {
        title: "Omega-3 and Post-Exercise Recovery — evidence overview",
        journal: "OmegaQuant (research summary of peer-reviewed literature)",
        year: 2026,
        participants: null,
        type: "Narrative Review",
        summary:
          "This overview traces the research progression from early biomarker studies (finding omega-3 reduced inflammatory markers after exercise-induced damage) to more recent systematic reviews assessing whether those biomarker changes translate into measurable recovery and performance benefits.",
        takeaway: "The research trend over time has shifted from simply measuring inflammatory markers to more directly testing real-world recovery and performance outcomes.",
        link: "https://omegaquant.com/omega-3-and-post-exercise-recovery/",
      },
    ],
    didYouKnow:
      "DOMS — delayed onset muscle soreness — typically peaks 24 to 72 hours after unfamiliar exercise, which is why most recovery trials measure soreness specifically at the 48-hour mark.",
    foodSources: CORE_FOOD_SOURCES,
    lifestyleTips: [
      "Prioritize sleep on training days — tissue repair happens disproportionately during deep sleep stages.",
      "Active recovery (light movement) can feel better than complete rest for some people managing DOMS.",
      "Stay hydrated and maintain adequate protein intake to support the body's natural repair processes.",
    ],
    faqs: [
      {
        q: "How soon before a workout should I take omega-3 for recovery benefits?",
        a: "Most trials used consistent daily supplementation for weeks leading up to the measured exercise bout, rather than a single pre-workout dose — suggesting sustained intake matters more than timing around a single session.",
      },
      {
        q: "Does this replace proper recovery practices like sleep and hydration?",
        a: "No — omega-3 is a potential complement to, not a replacement for, foundational recovery practices like sleep, hydration, and proper training load management.",
      },
    ],
  },
];

/* ============================================================================
   GENERAL SITE-WIDE FAQS
   ============================================================================ */
const GENERAL_FAQS = [
  {
    q: "Why are omega-3s important?",
    a: "Omega-3 fatty acids are essential building blocks for healthy cell membranes throughout the body. Because your body can't produce them on its own, they need to come from food or supplementation — and modern diets have shifted dramatically away from the balance our bodies evolved with.",
  },
  {
    q: "Why test instead of guessing?",
    a: "Everyone's fatty-acid balance is different, shaped by genetics, diet history, and lifestyle. The research throughout this site repeatedly shows that baseline status changes outcomes — testing removes the guesswork of picking a product or dose blindly.",
  },
  {
    q: "Can I get enough from food?",
    a: "It's possible for some people, particularly with regular intake of oily fish. For others — especially those who eat little to no fish — supplementation is a more realistic path to balance. Testing helps clarify which category you fall into.",
  },
  {
    q: "How long does it take to improve balance?",
    a: "Research trials typically measure changes over 8 to 24 weeks, depending on the outcome studied. Retesting after a few months gives you real data on your own progress, rather than a guess.",
  },
  {
    q: "What does the report measure?",
    a: "A typical omega-3 test measures the levels of key fatty acids in your blood, often expressed as an 'omega-3 index' or an omega-6-to-omega-3 ratio, giving you a personalized baseline to work from.",
  },
  {
    q: "Is the test difficult?",
    a: "Most at-home omega-3 tests use a simple finger-prick blood spot sample that you can collect yourself and mail in — no clinic visit required.",
  },
  {
    q: "Can children take omega-3s?",
    a: "Many pediatric guidelines support age-appropriate omega-3 intake, but dosing and forms differ from adults. Always consult your pediatrician before starting any supplement for a child.",
  },
  {
    q: "Can pregnant women use omega-3s?",
    a: "Omega-3s, especially DHA, are widely recommended during pregnancy under medical guidance. As the Pregnancy section above explains, baseline status can meaningfully affect the right approach — always consult your prenatal care provider.",
  },
  {
    q: "Can athletes benefit?",
    a: "Research suggests omega-3 may support recovery markers like muscle soreness and inflammation in athletes, as detailed in the Sports Performance and Recovery sections above — though it's a complement to training and nutrition fundamentals, not a replacement.",
  },
];
