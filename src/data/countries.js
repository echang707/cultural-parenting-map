const countries = [
  // EAST ASIA
  {
    name: "China",
    values: ["Filial piety", "Respect for elders", "Academic excellence"],
    quote: "养不教，父之过 — To raise without teaching is the father's fault.",
    reflect: "How do you encourage respect and responsibility in your family?"
  },
  {
    name: "Japan",
    values: ["Gaman (endurance)", "Harmony", "Modesty"],
    quote: "出る杭は打たれる — The nail that sticks out gets hammered down.",
    reflect: "How do you balance individual expression with harmony?"
  },
  {
    name: "South Korea",
    values: ["Education pressure", "Parental sacrifice", "Social harmony"],
    quote: "공부는 돈이 아니고, 미래다 — Education isn’t money, it’s the future.",
    reflect: "How do you manage expectations and well-being?"
  },
  {
    name: "North Korea",
    values: ["Discipline", "Collectivism", "Reverence for leaders"],
    quote: "The mother is the first teacher of revolution.",
    reflect: "How does political influence shape parenting in your family?"
  },
  {
    name: "Mongolia",
    values: ["Self-reliance", "Respect for nature", "Nomadic roots"],
    quote: "Эцгийн сургааль эрдэм болсон — A father’s teaching becomes wisdom.",
    reflect: "How do you teach resilience through your environment?"
  },
  {
    name: "Taiwan",
    values: ["Respect for elders", "Modern-traditional balance", "Meritocracy"],
    quote: "百善孝為先 — Among a hundred virtues, filial piety comes first.",
    reflect: "What traditions stay important in modern parenting?"

  },

  // SOUTHEAST ASIA
  {
    name: "Vietnam",
    values: ["Respect for ancestors", "Academic drive", "Family unity"],
    quote: "Công cha như núi Thái Sơn...",
    reflect: "What sacrifices from elders shape who you are?"
  },
  {
    name: "Philippines",
    values: ["Close-knit families", "Religious guidance", "Utang na loob"],
    quote: "Ang hindi marunong lumingon sa pinanggalingan...",
    reflect: "Which teachings from elders do you want your child to remember?"
  },
  {
    name: "Indonesia",
    values: ["Collective identity", "Respect for elders", "Religious morality"],
    quote: "Adat bersendi syarak...",
    reflect: "How do you pass down both culture and religion?"
  },
  {
    name: "Thailand",
    values: ["Respect for monks", "Kindness", "Non-confrontation"],
    quote: "ทำดีได้ดี ทำชั่วได้ชั่ว...",
    reflect: "What role does kindness play in your parenting?"
  },
  {
    name: "Malaysia",
    values: ["Religious balance", "Community care", "Education"],
    quote: "Biar mati anak, jangan mati adat...",
    reflect: "What traditions shape your family’s identity?"
  },
  {
    name: "Singapore",
    values: ["Multicultural respect", "Discipline", "Meritocracy"],
    quote: "Majulah Singapura — Onward Singapore.",
    reflect: "How do you raise children in a multicultural society?"
  },
  {
    name: "Myanmar",
    values: ["Religious merit", "Obedience", "Community harmony"],
    quote: "Forever grateful for a mother’s milk.",
    reflect: "How do you teach gratitude and service?"
  },
  {
    name: "Cambodia",
    values: ["Respect for elders", "Buddhist influence", "Gentleness"],
    quote: "Gratitude is the sign of noble souls.",
    reflect: "What quiet values do you hope your child carries?"
  },
  {
    name: "Laos",
    values: ["Gentleness", "Community", "Religion"],
    quote: "ໃຈເຢັນສົມປັນຍາ — A calm heart brings wisdom.",
    reflect: "How do you pass on emotional calmness?"
  },
  {
    name: "Brunei",
    values: ["Religious piety", "Modesty", "Family duty"],
    quote: "Family happiness is the foundation of the nation.",
    reflect: "What moral values are most important to pass down?"
  },
  {
    name: "Timor-Leste",
    values: ["Resilience", "Tradition", "Unity"],
    quote: "The sacred house reflects our inner self.",
    reflect: "What spaces in your home feel sacred to your family?"
  },

  // SOUTH ASIA
  {
    name: "India",
    values: ["Family honor", "Obedience", "Moral duty"],
    quote: "माँ के चरणों में स्वर्ग है...",
    reflect: "What values did your family emphasize growing up?"
  },
  {
    name: "Pakistan",
    values: ["Obedience", "Religious values", "Reputation"],
    quote: "Seek knowledge from the cradle to the grave.",
    reflect: "How is your parenting shaped by faith?"
  },
  {
    name: "Bangladesh",
    values: ["Family duty", "Character", "Community"],
    quote: "A nation’s future depends on its children.",
    reflect: "How do you connect your family to broader values?"
  },
  {
    name: "Sri Lanka",
    values: ["Respect for teachers", "Religious influence", "Emotional control"],
    quote: "A teacher is like a god.",
    reflect: "What mentors shaped your parenting style?"
  },
  {
    name: "Nepal",
    values: ["Spiritual heritage", "Humility", "Gratitude"],
    quote: "धन्य छ त्यो आमा जसले यस्तो सन्तान जन्माइन्...",
    reflect: "How does spirituality influence your values?"
  },
  {
    name: "Bhutan",
    values: ["Mindfulness", "Tradition", "Simplicity"],
    quote: "Happiness is a place.",
    reflect: "How do you model peace and balance for your child?"
  },
  {
    name: "Maldives",
    values: ["Respect", "Religion", "Simplicity"],
    quote: "Children are pearls in the ocean of life.",
    reflect: "How do you nurture joy and care daily?"

  },

  // CENTRAL ASIA
  {
    name: "Kazakhstan",
    values: ["Hospitality", "Nomadic roots", "Elder respect"],
    quote: "What you see in the nest, you carry in flight.",
    reflect: "How do early lessons echo in adulthood?"
  },
  {
    name: "Uzbekistan",
    values: ["Family hierarchy", "Generosity", "Faith"],
    quote: "Care for your parents, heaven lies therein.",
    reflect: "What lessons from elders shape your parenting?"
  },
  {
    name: "Turkmenistan",
    values: ["Tradition", "Discipline", "Respect"],
    quote: "The nation begins at home.",
    reflect: "How do you connect tradition with growth?"
  },
  {
    name: "Tajikistan",
    values: ["Community care", "Loyalty", "Islamic teachings"],
    quote: "The father’s word is law.",
    reflect: "How do you guide without force?"
  },
  {
    name: "Kyrgyzstan",
    values: ["Oral history", "Hospitality", "Courage"],
    quote: "He who doesn't respect his elders has no future.",
    reflect: "What stories do you tell your children?"
  },

  // WEST ASIA / MIDDLE EAST
  {
    name: "Iran",
    values: ["Moral strength", "Poetic education", "Honor"],
    quote: "A good child is the crown of the father.",
    reflect: "How do you teach wisdom and restraint?"
  },
  {
    name: "Iraq",
    values: ["Tribal loyalty", "Respect", "Religious education"],
    quote: "Children are a trust from God.",
    reflect: "How do you protect innocence in a harsh world?"
  },
  {
    name: "Syria",
    values: ["Hospitality", "Resilience", "Family bonds"],
    quote: "A home without children is like a body without a soul.",
    reflect: "What keeps your family strong through adversity?"
  },
  {
    name: "Lebanon",
    values: ["Education", "Heritage", "Family name"],
    quote: "Raise your children with your roots and wings.",
    reflect: "What balance of freedom and tradition do you offer?"
  },
  {
    name: "Israel",
    values: ["Critical thinking", "Community", "Education"],
    quote: "Teach your child according to their way.",
    reflect: "How do you personalize parenting for each child?"
  },
  {
    name: "Jordan",
    values: ["Honor", "Islamic education", "Generosity"],
    quote: "Children are lanterns for tomorrow.",
    reflect: "What light do you hope your child shines?"
  },
  {
    name: "Saudi Arabia",
    values: ["Obedience", "Religious practice", "Honor"],
    quote: "My home is your home.",
    reflect: "What values are sacred in your household?"
  },
  {
    name: "United Arab Emirates",
    values: ["Respect", "Wealth responsibility", "Islamic values"],
    quote: "A family in harmony builds a nation in strength.",
    reflect: "How do you raise grounded children in a modern world?"
  },
  {
    name: "Qatar",
    values: ["Pride", "Faith", "Discipline"],
    quote: "The home is where virtue begins.",
    reflect: "What small daily habits build character?"
  },
  {
    name: "Kuwait",
    values: ["Education", "Family ties", "Islamic tradition"],
    quote: "Knowledge is a light upon the path.",
    reflect: "How do you encourage learning in everyday life?"
  },
  {
    name: "Oman",
    values: ["Modesty", "Duty", "Kindness"],
    quote: "Kindness is never wasted.",
    reflect: "How do you cultivate compassion?"
  },
  {
    name: "Bahrain",
    values: ["Tolerance", "Honor", "Faith"],
    quote: "A good child brings peace to the household.",
    reflect: "What kind of peace do you want in your family?"

  },

  // TRANSCONTINENTAL (Asian part of...)
  {
    name: "Turkey",
    values: ["Family unity", "Tradition", "Respect"],
    quote: "Children are the mirror of parents.",
    reflect: "What do your children learn by watching you?"
  },
  {
    name: "Georgia",
    values: ["Hospitality", "Patience", "Oral wisdom"],
    quote: "A child’s smile brings spring to the house.",
    reflect: "How do you create a joyful learning space?"
  },
  {
    name: "Armenia",
    values: ["Faith", "Language pride", "Family closeness"],
    quote: "A house without love is colder than stone.",
    reflect: "How do you build warmth in your home?"
  },
  {
    name: "Azerbaijan",
    values: ["Respect", "Poetry", "Courage"],
    quote: "Raise a child with love, not fear.",
    reflect: "How do you discipline with compassion?"
  }
];

export default countries;
