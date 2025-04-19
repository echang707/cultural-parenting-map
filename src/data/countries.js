const countries = [
  // EAST ASIA
    {
    name: "China",
    values: ["Filial piety", "Respect for elders", "Academic excellence"],
    quote: "养不教，父之过 — To raise without teaching is the father's fault.",
    reflect: "How do you encourage respect and responsibility in your family?",
    description: "Chinese parenting is deeply influenced by Confucian ideals that emphasize obedience, filial piety, and academic achievement. Parents often play an authoritative yet nurturing role, with a strong emphasis on discipline, sacrifice, and family reputation. Education is viewed as the pathway to success, and children are encouraged to push themselves to excel academically from an early age."
  },
  {
    name: "Japan",
    values: ["Gaman (endurance)", "Harmony", "Modesty"],
    quote: "出る杭は打たれる — The nail that sticks out gets hammered down.",
    reflect: "How do you balance individual expression with harmony?",
    description: "Japanese parenting focuses on cultivating empathy, endurance, and social harmony. Children are taught from a young age to understand the needs of others and avoid causing disruption. Mothers are typically the primary caregivers and foster a strong emotional bond. There’s an emphasis on self-control and being part of the group, rather than standing out."
  },
  {
    name: "South Korea",
    values: ["Education pressure", "Parental sacrifice", "Social harmony"],
    quote: "공부는 돈이 아니고, 미래다 — Education isn’t money, it’s the future.",
    reflect: "How do you manage expectations and well-being?",
    description: "South Korean parenting is known for its intense focus on academic performance, with parents often making great sacrifices to ensure their child’s success. Education is closely tied to social mobility, and children may attend school, tutoring centers (hagwons), and additional lessons well into the evening. Despite this pressure, parents deeply value their children's well-being and future success."
  },
  {
    name: "North Korea",
    values: ["Discipline", "Collectivism", "Reverence for leaders"],
    quote: "The mother is the first teacher of revolution.",
    reflect: "How does political influence shape parenting in your family?",
    description: "Parenting in North Korea is shaped by the state's emphasis on collective ideology and loyalty to the ruling party. Children are raised with a deep sense of duty toward their country and leaders. Educational materials and upbringing focus on discipline, loyalty, and group conformity. Parents are expected to instill reverence for the nation as a core value."
  },
  {
    name: "Mongolia",
    values: ["Self-reliance", "Respect for nature", "Nomadic roots"],
    quote: "Эцгийн сургааль эрдэм болсон — A father’s teaching becomes wisdom.",
    reflect: "How do you teach resilience through your environment?",
    description: "Mongolian parenting is influenced by its nomadic heritage, where independence and resilience are valued traits. Children are often given responsibilities early in life, including caring for animals and helping with household tasks. Parents emphasize the importance of adapting to nature, self-sufficiency, and respecting elders. Family bonds are strong and multigenerational."
  },
  {
    name: "Taiwan",
    values: ["Respect for elders", "Modern-traditional balance", "Meritocracy"],
    quote: "百善孝為先 — Among a hundred virtues, filial piety comes first.",
    reflect: "What traditions stay important in modern parenting?",
    description: "Taiwanese parenting blends traditional Confucian values with modern democratic ideals. There is a strong respect for education and authority, but also increasing emphasis on nurturing creativity and individuality. Parents often navigate a balance between instilling discipline and encouraging open communication. Children are taught to honor their elders while striving for personal achievement."
  },

  // SOUTHEAST ASIA
 {
  name: "Vietnam",
  values: ["Respect for ancestors", "Academic drive", "Family unity"],
  quote: "Công cha như núi Thái Sơn...",
  reflect: "What sacrifices from elders shape who you are?",
  description:
    "Vietnamese parenting emphasizes deep respect for elders and a strong sense of family duty rooted in Confucian traditions. Children are often raised in multigenerational homes where learning by observation and obedience is central. Education is seen as the primary vehicle for success, and parents frequently invest heavily in academic tutoring. Discipline is gentle but firm, and many parents prioritize teaching humility, responsibility, and resilience."
},
{
  name: "Philippines",
  values: ["Close-knit families", "Religious guidance", "Utang na loob"],
  quote: "Ang hindi marunong lumingon sa pinanggalingan...",
  reflect: "Which teachings from elders do you want your child to remember?",
  description:
    "Filipino parenting revolves around warmth, closeness, and religious faith. 'Utang na loob' (a deep sense of debt and gratitude) underscores many parent-child interactions. Parents often raise children with strong Catholic values and emphasize respect, kindness, and gratitude toward family. Community and extended family play active roles, and discipline tends to be more relational than punitive, focusing on guilt and obligation to family."
},
{
  name: "Indonesia",
  values: ["Collective identity", "Respect for elders", "Religious morality"],
  quote: "Adat bersendi syarak...",
  reflect: "How do you pass down both culture and religion?",
  description:
    "Indonesian parenting blends traditional customs (adat) with Islamic principles, fostering a strong collective identity and religious morality. Obedience, humility, and community are emphasized. Parents often instill values through religious education, storytelling, and involvement in communal rituals. Children are expected to contribute to household and communal life from a young age, reinforcing a sense of shared responsibility."
},
{
  name: "Thailand",
  values: ["Respect for monks", "Kindness", "Non-confrontation"],
  quote: "ทำดีได้ดี ทำชั่วได้ชั่ว...",
  reflect: "What role does kindness play in your parenting?",
  description:
    "Thai parenting draws deeply from Buddhist teachings. Parents encourage children to be calm, respectful, and generous. There is a cultural emphasis on avoiding confrontation and maintaining 'kreng jai'—consideration of others' feelings. Parents model compassion and expect children to perform good deeds. Elders are respected as moral guides, and merit-making activities are often done as a family."
},
{
  name: "Malaysia",
  values: ["Religious balance", "Community care", "Education"],
  quote: "Biar mati anak, jangan mati adat...",
  reflect: "What traditions shape your family’s identity?",
  description:
    "Malaysian parenting is rooted in a blend of Islamic teachings and ethnic traditions (Malay, Chinese, Indian). Parents value religious instruction, discipline, and mutual respect. There’s a strong emphasis on academic achievement and communal responsibility. Children are taught early on to contribute to family welfare and are raised with awareness of their cultural identity and duties."
},
{
  name: "Singapore",
  values: ["Multicultural respect", "Discipline", "Meritocracy"],
  quote: "Majulah Singapura — Onward Singapore.",
  reflect: "How do you raise children in a multicultural society?",
  description:
    "Parenting in Singapore is shaped by its fast-paced, multicultural, and competitive environment. Parents are often highly involved in their children’s academic journey, with a strong belief in meritocracy. At the same time, respect for cultural diversity and civic responsibility is taught from an early age. Structured routines, bilingual education, and enrichment classes are common, balancing discipline with high achievement."
},
{
  name: "Myanmar",
  values: ["Religious merit", "Obedience", "Community harmony"],
  quote: "Forever grateful for a mother’s milk.",
  reflect: "How do you teach gratitude and service?",
  description:
    "In Myanmar, parenting practices are deeply tied to Theravāda Buddhism. Children are raised to respect monks, observe rituals, and practice generosity. Parents instill obedience and humility, often using moral stories and religious parables. Community involvement is strong, and families prioritize teaching their children the importance of harmony, compassion, and gratitude for their parents’ sacrifices."
},
{
  name: "Cambodia",
  values: ["Respect for elders", "Buddhist influence", "Gentleness"],
  quote: "Gratitude is the sign of noble souls.",
  reflect: "What quiet values do you hope your child carries?",
  description:
    "Cambodian parenting emphasizes patience, spiritual awareness, and deference to authority. Influenced heavily by Buddhism, parents aim to raise emotionally calm and morally upright children. Elders are treated with reverence, and harsh punishment is typically avoided in favor of guidance through storytelling, rituals, and quiet correction. Family honor and collective well-being are key guiding forces."
},
{
  name: "Laos",
  values: ["Gentleness", "Community", "Religion"],
  quote: "ໃຈເຢັນສົມປັນຍາ — A calm heart brings wisdom.",
  reflect: "How do you pass on emotional calmness?",
  description:
    "Laotian parenting reflects a tranquil, community-driven lifestyle. Families emphasize emotional control, quiet strength, and Buddhist virtues like compassion and mindfulness. Children are raised with high regard for family and community elders, and encouraged to participate in religious festivals and rituals. Storytelling and observational learning are key teaching tools in early childhood."
},
{
  name: "Brunei",
  values: ["Religious piety", "Modesty", "Family duty"],
  quote: "Family happiness is the foundation of the nation.",
  reflect: "What moral values are most important to pass down?",
  description:
    "Parenting in Brunei is shaped by strong Islamic values and national emphasis on traditional family roles. Parents encourage modesty, responsibility, and spiritual devotion. Children are raised with close supervision, and education is balanced with religious teachings. The home is considered a sacred space where character is formed, and respect for authority is a central value."
},
{
  name: "Timor-Leste",
  values: ["Resilience", "Tradition", "Unity"],
  quote: "The sacred house reflects our inner self.",
  reflect: "What spaces in your home feel sacred to your family?",
  description:
    "Parenting in Timor-Leste is rooted in ancestral respect, storytelling, and strong community ties. Despite modern challenges, families prioritize tradition and resilience. Children are taught to honor their elders, participate in rituals, and carry forward cultural knowledge. Parenting is often shared across extended families, with elders playing a crucial role in guidance and wisdom-sharing."
},

 {
  name: "India",
  values: ["Family honor", "Obedience", "Moral duty"],
  quote: "माँ के चरणों में स्वर्ग है — Heaven lies at a mother’s feet.",
  reflect: "What values did your family emphasize growing up?",
  description:
    "Indian parenting draws from a blend of Hindu philosophy, joint family structures, and societal expectations around success and reputation. Children are often raised with a sense of duty—toward family, elders, and community. Respect for authority, academic excellence, and moral behavior are emphasized, often reinforced through religious practices and rituals. Parents see themselves as lifelong guides, and obedience is considered a core virtue, particularly in the early years."
},
{
  name: "Pakistan",
  values: ["Obedience", "Religious values", "Reputation"],
  quote: "Seek knowledge from the cradle to the grave.",
  reflect: "How is your parenting shaped by faith?",
  description:
    "Pakistani parenting is deeply influenced by Islamic teachings and the value of familial respect. Parents often see themselves as caretakers not only of their child’s physical needs but also of their religious and moral development. Gender roles are traditionally defined, and a child’s behavior is often seen as a reflection of family honor. Education is a high priority, particularly for sons, though daughters are increasingly encouraged to excel academically as well."
},
{
  name: "Bangladesh",
  values: ["Family duty", "Character", "Community"],
  quote: "A nation’s future depends on its children.",
  reflect: "How do you connect your family to broader values?",
  description:
    "In Bangladesh, parenting centers around building strong moral character and community awareness. Parents teach children to contribute to family and society, often through stories of struggle, sacrifice, and independence. Religious teachings (mostly Islamic), along with folk traditions and festivals, guide daily life. Emotional closeness, hospitality, and humility are modeled from an early age, and elders hold a central role in decision-making."
},
{
  name: "Sri Lanka",
  values: ["Respect for teachers", "Religious influence", "Emotional control"],
  quote: "A teacher is like a god.",
  reflect: "What mentors shaped your parenting style?",
  description:
    "Sri Lankan parenting, particularly in Buddhist families, emphasizes emotional restraint, education, and respect for both religious and academic teachers. Children are taught to meditate, behave with humility, and avoid causing harm. Parents prioritize harmony over confrontation, using storytelling and religious parables to instill discipline. Extended family members are often deeply involved in caregiving and moral education."
},
{
  name: "Nepal",
  values: ["Spiritual heritage", "Humility", "Gratitude"],
  quote: "धन्य छ त्यो आमा जसले यस्तो सन्तान जन्माइन् — Blessed is the mother who gave birth to such a child.",
  reflect: "How does spirituality influence your values?",
  description:
    "Nepali parenting reflects a spiritual and nature-based worldview, deeply rooted in Hindu and Buddhist traditions. Parents teach children to be humble, grateful, and respectful of nature and ancestors. Rituals and festivals are used as learning moments, often blending religious symbolism with family bonding. Children are expected to listen to elders, help around the home, and practice mindfulness through prayer or storytelling."
},
{
  name: "Bhutan",
  values: ["Mindfulness", "Tradition", "Simplicity"],
  quote: "Happiness is a place.",
  reflect: "How do you model peace and balance for your child?",
  description:
    "In Bhutan, parenting is guided by the national philosophy of Gross National Happiness. Simplicity, emotional balance, and spiritual awareness are more important than academic success or material gain. Children are raised to value harmony, community service, and nature. Parents often teach through calm conversation, presence, and reflection, emphasizing inner peace over external achievement."
},
{
  name: "Maldives",
  values: ["Respect", "Religion", "Simplicity"],
  quote: "Children are pearls in the ocean of life.",
  reflect: "How do you nurture joy and care daily?",
  description:
    "Maldivian parenting reflects the simplicity of island life, guided by Islamic teachings and close family bonds. Children grow up in tight-knit communities where elders are treated with deep respect and where religion is woven into everyday routines. Parents emphasize good manners, cleanliness, and thankfulness, often using storytelling and oral traditions to communicate values. Play and communal activities help children develop socially and emotionally."
},

// CENTRAL ASIA
{
  name: "Kazakhstan",
  values: ["Hospitality", "Nomadic roots", "Elder respect"],
  quote: "What you see in the nest, you carry in flight.",
  reflect: "How do early lessons echo in adulthood?",
  description:
    "Kazakh parenting is rooted in the values of nomadic tradition, emphasizing independence, resilience, and deep respect for elders. Children are often raised within extended family systems, where grandparents play a key role in cultural transmission. Hospitality is a core virtue, and children are taught early on to treat guests with kindness and generosity. Modern Kazakh families balance traditional teachings with growing urban influences, but respect for ancestors and oral storytelling remain strong."
},
{
  name: "Uzbekistan",
  values: ["Family hierarchy", "Generosity", "Faith"],
  quote: "Care for your parents, heaven lies therein.",
  reflect: "What lessons from elders shape your parenting?",
  description:
    "Parenting in Uzbekistan centers on structure and respect within a clearly defined family hierarchy. Children are expected to obey parents and grandparents, who are seen as moral authorities. Islamic teachings guide daily behavior and discipline, and hospitality is not only a social expectation but a character trait passed down through generations. Boys and girls are often raised with distinct gender expectations, though modernization is gradually reshaping these roles in urban areas."
},
{
  name: "Turkmenistan",
  values: ["Tradition", "Discipline", "Respect"],
  quote: "The nation begins at home.",
  reflect: "How do you connect tradition with growth?",
  description:
    "Turkmen parenting emphasizes national pride, cultural continuity, and disciplined upbringing. Families often rely on traditional folk wisdom and rituals to raise children who respect elders and uphold community norms. Patriarchal values guide many aspects of parenting, with fathers as disciplinarians and mothers as moral and emotional nurturers. In rural areas, traditional clothing, celebrations, and oral storytelling are used to pass on identity and heritage."
},
{
  name: "Tajikistan",
  values: ["Community care", "Loyalty", "Islamic teachings"],
  quote: "The father’s word is law.",
  reflect: "How do you guide without force?",
  description:
    "Tajik parenting blends Islamic values with village-based collectivism. Children are taught to prioritize family loyalty, community well-being, and faith. Parents, especially fathers, are seen as authority figures, but love and generosity are expressed through acts of service and protection. It’s common for multiple generations to live under one roof, where storytelling and religious rituals help shape values. Discipline is often firm, but tied to a sense of moral guidance rather than fear."
},
{
  name: "Kyrgyzstan",
  values: ["Oral history", "Hospitality", "Courage"],
  quote: "He who doesn't respect his elders has no future.",
  reflect: "What stories do you tell your children?",
  description:
    "Kyrgyz parenting is steeped in oral history, epic tales, and respect for nomadic ancestry. Elders are viewed as carriers of wisdom, and children grow up hearing stories of heroism, endurance, and moral dilemmas. Parents use these stories to instill resilience and values like generosity, bravery, and humility. Hospitality is seen as a duty, and children are raised to welcome others with open arms. Though modern influences are growing, many families still draw heavily from traditional teachings and community values."
},
  {
  name: "Iran",
  values: ["Moral strength", "Poetic education", "Honor"],
  quote: "A good child is the crown of the father.",
  reflect: "How do you teach wisdom and restraint?",
  description:
    "Iranian parenting often blends discipline with deep cultural reverence for knowledge, poetry, and emotional intelligence. Children are raised with a strong sense of moral duty and honor, guided by religious and philosophical teachings. Parents emphasize respect for elders, modesty, and the value of learning—not just for success, but for spiritual and intellectual growth. Stories, poetry, and metaphors are frequently used as tools for parenting, creating a reflective and expressive environment at home."
},
{
  name: "Iraq",
  values: ["Tribal loyalty", "Respect", "Religious education"],
  quote: "Children are a trust from God.",
  reflect: "How do you protect innocence in a harsh world?",
  description:
    "Iraqi parenting is shaped by strong familial and tribal loyalty, where elders are respected and protected. Families tend to be large and tightly knit, with multiple generations often living together. Religious teachings play a major role in guiding behavior, and obedience to parental authority is seen as a reflection of family honor. Despite external challenges, parents seek to instill pride, faith, and resilience in their children through storytelling, shared rituals, and strict guidance."
},
{
  name: "Syria",
  values: ["Hospitality", "Resilience", "Family bonds"],
  quote: "A home without children is like a body without a soul.",
  reflect: "What keeps your family strong through adversity?",
  description:
    "Syrian parenting revolves around strong family ties and emotional closeness. Parents teach children to value home, tradition, and endurance. Amidst years of conflict and displacement, many Syrian families have doubled down on resilience—teaching children how to adapt while preserving identity. Hospitality and generosity are core values, often demonstrated at home and modeled through community support. Respect and loyalty to parents are emphasized from an early age."
},
{
  name: "Lebanon",
  values: ["Education", "Heritage", "Family name"],
  quote: "Raise your children with your roots and wings.",
  reflect: "What balance of freedom and tradition do you offer?",
  description:
    "Lebanese parenting merges European influences with deep-rooted traditions. Education is highly valued, often seen as the path to social mobility and independence. At the same time, preserving family name and heritage is critical. Parents encourage open dialogue and critical thinking, especially in urban areas, while also maintaining authority and clear boundaries. Food, religion, and multilingualism are common cultural anchors in daily life."
},
{
  name: "Israel",
  values: ["Critical thinking", "Community", "Education"],
  quote: "Teach your child according to their way.",
  reflect: "How do you personalize parenting for each child?",
  description:
    "Israeli parenting is characterized by high levels of involvement, warmth, and assertiveness. Children are encouraged to ask questions, speak up, and explore their individuality, often leading to a casual and emotionally open family dynamic. Education is prioritized, not just academically but morally and socially. Parenting also strongly emphasizes national identity, responsibility to community, and the celebration of Jewish traditions and holidays as teaching moments."
},
{
  name: "Jordan",
  values: ["Honor", "Islamic education", "Generosity"],
  quote: "Children are lanterns for tomorrow.",
  reflect: "What light do you hope your child shines?",
  description:
    "Jordanian parenting combines Islamic principles with a deep emphasis on family honor and generosity. Children are taught to respect their elders, fulfill religious duties, and contribute to their family and community. Hospitality and sharing are everyday lessons, often reinforced through religious teachings. While traditional roles still shape expectations, many parents are also increasingly balancing education and emotional well-being in their child-rearing approach."
},
{
  name: "Saudi Arabia",
  values: ["Obedience", "Religious practice", "Honor"],
  quote: "My home is your home.",
  reflect: "What values are sacred in your household?",
  description:
    "Parenting in Saudi Arabia is deeply influenced by Islamic law and values. Obedience to elders, especially fathers, is expected, and children are raised with strong religious instruction from a young age. Gender roles are traditionally defined, but within those roles, nurturing and protection are emphasized. The family is a source of both moral guidance and pride, and maintaining honor through proper behavior is a key parenting priority."
},
{
  name: "United Arab Emirates",
  values: ["Respect", "Wealth responsibility", "Islamic values"],
  quote: "A family in harmony builds a nation in strength.",
  reflect: "How do you raise grounded children in a modern world?",
  description:
    "Emirati parenting today is a mix of traditional Islamic teachings and modern global influences. Parents focus on raising children who understand the responsibilities that come with privilege. While discipline and religious observance are expected, there is also a strong push for education, entrepreneurship, and leadership. Families often emphasize humility, generosity, and the importance of heritage, especially in a rapidly modernizing society."
},
{
  name: "Qatar",
  values: ["Pride", "Faith", "Discipline"],
  quote: "The home is where virtue begins.",
  reflect: "What small daily habits build character?",
  description:
    "Qatari parents emphasize structure, religious commitment, and pride in one’s identity. Children are raised with clear expectations around manners, modesty, and discipline. Islamic values are interwoven into all aspects of daily life—from how meals are eaten to how elders are addressed. While education and modern success are important, the preservation of cultural identity is often prioritized through storytelling, traditional celebrations, and family gatherings."
},
{
  name: "Kuwait",
  values: ["Education", "Family ties", "Islamic tradition"],
  quote: "Knowledge is a light upon the path.",
  reflect: "How do you encourage learning in everyday life?",
  description:
    "Kuwaiti parenting involves a strong focus on academic achievement, family respect, and Islamic faith. Education is seen as both a duty and a source of honor, and children are often supported by extended families and private tutors. The family structure is hierarchical but nurturing, and parenting often involves close monitoring, particularly in teenage years. Parents encourage children to remain connected to their heritage while preparing them for success in a globalized world."
},
{
  name: "Oman",
  values: ["Modesty", "Duty", "Kindness"],
  quote: "Kindness is never wasted.",
  reflect: "How do you cultivate compassion?",
  description:
    "Omani parenting focuses on raising children who are modest, responsible, and respectful of tradition. Families often rely on quiet discipline and lead by example rather than force. Islam is a central influence, with prayer and family values guiding behavior. Children are taught to show kindness, particularly to elders and guests, and parents often emphasize emotional restraint and responsibility from a young age."
},
{
  name: "Bahrain",
  values: ["Tolerance", "Honor", "Faith"],
  quote: "A good child brings peace to the household.",
  reflect: "What kind of peace do you want in your family?",
  description:
    "Bahraini parents emphasize cultural tolerance, dignity, and strong moral values. Children are taught to uphold family honor while respecting others, regardless of background. Islamic teachings guide daily life, but there's also a cultural openness that encourages balanced identity formation. Parents often use storytelling, family outings, and shared religious experiences to shape their children’s emotional and moral worldviews."
},
  // TRANSCONTINENTAL (Asian part of...)
{
  name: "Turkey",
  values: ["Family unity", "Tradition", "Respect"],
  quote: "Children are the mirror of parents.",
  reflect: "What do your children learn by watching you?",
  description:
    "Turkish parenting emphasizes strong family bonds, respect for elders, and maintaining cultural traditions. Children are taught to be polite, loyal, and modest, with a sense of duty toward family. Parenting styles often combine warmth with firm boundaries, and there is a high value placed on hospitality and generosity. Extended families play a key role in child-rearing, and holidays, meals, and religious traditions are used as teaching moments."
},
{
  name: "Georgia",
  values: ["Hospitality", "Patience", "Oral wisdom"],
  quote: "A child’s smile brings spring to the house.",
  reflect: "How do you create a joyful learning space?",
  description:
    "Georgian parenting places high importance on storytelling, respect, and emotional strength. Parents often teach through tales of history and moral lessons passed down verbally. Children are raised to be warm and generous, with family gatherings and community meals playing a big role in development. Elders are revered, and parenting blends patience with clear expectations, especially around education and cultural pride."
},
{
  name: "Afghanistan",
  values: ["Obedience", "Religious guidance", "Resilience"],
  quote: "A child is a guest in your home, feed them, teach them, and let them go.",
  reflect: "How do you prepare your child for a world filled with hardship and hope?",
  description:
    "Afghan parenting is rooted in Islamic teachings, with a strong emphasis on obedience, endurance, and respect. Children are expected to contribute early to household responsibilities, especially in rural areas. Despite hardships, parents nurture resilience through stories, prayer, and moral discipline. The extended family, especially grandparents, play key roles in passing on values through daily interactions and traditional practices."
},
{
  name: "Cyprus",
  values: ["Family closeness", "Tradition", "Community respect"],
  quote: "A child grows with the hands of many.",
  reflect: "Who in your community plays a role in raising your child?",
  description:
    "Parenting in Cyprus—both in Greek and Turkish communities—emphasizes close family relationships, shared caregiving, and deep-rooted traditions. Children grow up in a network of support, including grandparents, aunts, and uncles. Parents stress politeness, respect for elders, and participation in religious and cultural celebrations. Education is valued, but emotional well-being and community responsibility are seen as just as important."
},
{
  name: "Palestine",
  values: ["Steadfastness", "Family sacrifice", "Cultural pride"],
  quote: "Our children carry the memory of our roots.",
  reflect: "How do you help your child feel pride in where they come from?",
  description:
    "Palestinian parenting is deeply connected to cultural identity, resilience, and survival. Children are taught the history of their land and family sacrifices, often through storytelling and oral traditions. Respect for parents and grandparents is fundamental, and collective identity is nurtured from an early age. Even in adversity, parents focus on raising children with dignity, emotional strength, and pride in their heritage."
},
{
  name: "Russia",
  values: ["Discipline", "Cultural pride", "Strong boundaries"],
  quote: "If you love your child, teach them discipline.",
  reflect: "How do you balance discipline with emotional warmth?",
  description:
    "In Russian parenting culture—especially in the Asian-majority regions—strictness and structure are often emphasized. Children are taught to respect authority and elders, while also being immersed in stories, songs, and folk culture that reinforce emotional resilience. There is a high value placed on education, responsibility, and national pride. Parenting styles balance warmth with expectation, raising children to be mentally strong and socially aware."
},
{
  name: "Yemen",
  values: ["Respect for elders", "Religious faith", "Resilience"],
  quote: "A child is a blessing, not a possession.",
  reflect: "How do you teach humility and gratitude in tough times?",
  description:
    "Yemeni parenting is steeped in Islamic values and a deep respect for tradition. Children are raised to be obedient, humble, and resilient—often through religious education and the modeling of adult behavior. Despite economic and political challenges, parents prioritize spiritual grounding, respect, and emotional closeness. Family ties are strong, and parenting includes both nurture and firm guidance, especially from fathers and older siblings."
},
{
  name: "Armenia",
  values: ["Faith", "Language pride", "Family closeness"],
  quote: "A house without love is colder than stone.",
  reflect: "How do you build warmth in your home?",
  description:
    "Armenian parenting centers around love, faith, and strong intergenerational support. Children grow up learning the importance of preserving the Armenian language, history, and culture. Parents are deeply involved, often firm but nurturing, with high expectations for academic and moral behavior. Traditions such as naming rituals, religious holidays, and food customs are key to parenting, fostering a deep emotional bond between generations."
},
{
  name: "Azerbaijan",
  values: ["Respect", "Poetry", "Courage"],
  quote: "Raise a child with love, not fear.",
  reflect: "How do you discipline with compassion?",
  description:
    "Azerbaijani parenting blends Islamic values, Turkic heritage, and Soviet-era influences. Parents often emphasize discipline, hospitality, and honor, but within a nurturing framework. Poetry and storytelling are used to transmit cultural lessons and moral values. Children are taught to be respectful, brave, and generous—learning from their elders through observation, conversation, and communal traditions that prioritize both strength and softness."
}
];

export default countries;
