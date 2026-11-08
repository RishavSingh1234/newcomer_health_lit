export interface HeartTopicSection {
  title: string;
  text: string;
  bullets?: string[];
}

export interface HeartTopic {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  eyebrow: string;
  introduction: string;
  takeaway: string;
  sections: HeartTopicSection[];
  localTip: string;
  ask: string[];
  links: { label: string; href: string; source: string }[];
}

export const heartTopics: HeartTopic[] = [
  {
    slug: 'high-blood-pressure', title: 'High blood pressure', shortTitle: 'Blood pressure', icon: '🩺', color: 'teal',
    eyebrow: 'Know your numbers', introduction: 'High blood pressure often has no warning signs. Learn how it is checked, what your results mean, and how to plan your next step in B.C.',
    takeaway: 'A single reading cannot always tell the whole story. Your care provider may ask for repeat readings at home or at another visit.',
    sections: [
      { title: 'What is blood pressure?', text: 'Blood pressure is the force of blood pushing against artery walls. A reading has two numbers: the top number is pressure when the heart beats; the bottom number is pressure between beats. If pressure stays high, it can strain blood vessels and raise the chance of heart disease, stroke, and kidney problems.' },
      { title: 'Why check it if I feel well?', text: 'High blood pressure usually causes no symptoms. A cuff check is the way to find out. If a reading is high, a clinician may repeat it or recommend home readings before making a diagnosis.' },
      { title: 'What can help?', text: 'Your plan depends on your readings, other health conditions, and preferences. It may include everyday changes, medicine, or both.', bullets: ['Choose more vegetables, fruit, beans, whole grains, and other foods with less sodium.', 'Build movement gradually and take breaks from long periods of sitting.', 'If you are prescribed medicine, take it as directed and talk with your care team before changing it.'] },
    ],
    localTip: 'In B.C., call 8-1-1 for health advice or help finding care. You can ask for an interpreter in your language. If you have a blood pressure monitor, bring it to an appointment so the team can check that it fits and works for you.',
    ask: ['What do my two numbers mean for me?', 'Should I check my blood pressure at home? How often?', 'What should I do if my readings are higher than usual?'],
    links: [{ label: 'High blood pressure', href: 'https://www.healthlinkbc.ca/healthwise/high-blood-pressure-0', source: 'HealthLink BC' }, { label: 'Call 8-1-1', href: 'https://www.healthlinkbc.ca/find-care/healthlink-bc-8-1-1-services', source: 'HealthLink BC' }],
  },
  {
    slug: 'cholesterol', title: 'Cholesterol and blood fats', shortTitle: 'Cholesterol', icon: '🫀', color: 'coral',
    eyebrow: 'A blood test gives clues', introduction: 'Cholesterol is one kind of fat in your blood. A simple blood test helps your care team understand your risk and choose a plan with you.',
    takeaway: 'High cholesterol usually does not cause symptoms. You can feel well and still benefit from a blood test.',
    sections: [
      { title: 'What do the results describe?', text: 'A lipid test can include LDL cholesterol, HDL cholesterol, non-HDL cholesterol, and triglycerides. LDL and other particles can contribute to plaque in artery walls. Your results are considered together with your age, medical history, blood pressure, diabetes, smoking, and family history.' },
      { title: 'What may lower risk?', text: 'Food and activity can support heart health, but personal risk matters too. Some people need medication such as a statin even when they eat well and are active.', bullets: ['Eat more fibre-rich foods such as oats, beans, lentils, vegetables, and fruit.', 'Choose unsaturated oils, nuts, and fish more often; limit processed meats and foods high in saturated fat.', 'Take prescribed cholesterol medicine as directed. Tell your prescriber about side effects instead of stopping on your own.'] },
      { title: 'Make the results useful', text: 'Ask for a copy or explanation of your results. There is no single cholesterol target that is right for everyone; your care provider will discuss a goal based on your overall risk.' },
    ],
    localTip: 'A pharmacist or clinician can explain how to take cholesterol medicine and check for interactions. In B.C., you can ask a pharmacist about medication questions or call 8-1-1.',
    ask: ['Which numbers matter most for my health?', 'What is my overall heart risk?', 'When should I repeat the test, and what should I do about side effects?'],
    links: [{ label: 'High cholesterol', href: 'https://www.healthlinkbc.ca/healthwise/high-cholesterol', source: 'HealthLink BC' }, { label: 'Heart-healthy eating', href: 'https://www.healthlinkbc.ca/healthwise/heart-healthy-eating', source: 'HealthLink BC' }],
  },
  {
    slug: 'diabetes', title: 'Diabetes and your heart', shortTitle: 'Diabetes', icon: '🩸', color: 'gold',
    eyebrow: 'Care for the whole picture', introduction: 'Diabetes can affect blood vessels over time. Managing blood sugar and checking blood pressure, cholesterol, kidneys, and heart health can help lower risk.',
    takeaway: 'Diabetes does not mean a heart problem is certain. Regular follow-up helps you and your care team spot risks and choose supports early.',
    sections: [
      { title: 'Why heart checks matter', text: 'Diabetes can increase the chance of heart disease and stroke. Blood pressure, cholesterol, smoking, family history, sleep, stress, and access to food or medicine all contribute to a person’s health picture.' },
      { title: 'Build a care plan together', text: 'Your plan is individual. Follow-up may include an A1C blood test, blood pressure checks, cholesterol tests, and kidney, eye, and foot checks. Ask how often you need each one and what results mean for you.', bullets: ['Take diabetes and heart medicines as prescribed. Ask what each medicine is for.', 'Choose realistic food and movement changes that fit your culture, budget, schedule, and abilities.', 'Ask for support with stress, sleep, smoking, or the cost of prescriptions.'] },
      { title: 'Heart attack signs may be subtle', text: 'People with diabetes can have less typical symptoms, such as shortness of breath, nausea, sweating, unusual tiredness, or discomfort in the chest, arm, jaw, or back. Call 9-1-1 if you think a heart attack may be happening.' },
    ],
    localTip: 'HealthLink BC 8-1-1 can connect you with a registered dietitian or pharmacist and offers interpretation in over 130 languages. Ask your clinic about diabetes education and whether a referral is available.',
    ask: ['What are my personal A1C, blood pressure, and cholesterol goals?', 'Which heart-protective medicines are right for me?', 'What checks should I schedule this year?'],
    links: [{ label: 'Heart disease and stroke with diabetes', href: 'https://www.diabetes.ca/living-with-diabetes/managing-complications/heart-disease-and-stroke', source: 'Diabetes Canada' }, { label: 'HealthLink BC 8-1-1', href: 'https://www.healthlinkbc.ca/find-care/healthlink-bc-8-1-1-services', source: 'HealthLink BC' }],
  },
  {
    slug: 'heart-attack-and-coronary-artery-disease', title: 'Heart attack and coronary artery disease', shortTitle: 'Heart attack & artery disease', icon: '❤️‍🩹', color: 'red',
    eyebrow: 'Recognize it. Call 9-1-1.', introduction: 'Coronary artery disease happens when the blood vessels supplying the heart become narrowed. A heart attack can happen when blood flow is suddenly blocked.',
    takeaway: 'Possible heart attack? Call 9-1-1 now. Do not drive yourself. Emergency responders can begin care on the way.',
    sections: [
      { title: 'Warning signs can vary', text: 'A heart attack may feel like pressure, squeezing, fullness, burning, or pain in the chest. It can also cause discomfort in the jaw, neck, back, shoulder, or arm; shortness of breath; sweating; nausea; or light-headedness. Some people have symptoms without chest pressure. Signs may be subtle or different for women, older adults, and people with diabetes.' },
      { title: 'What to do', text: 'Stop activity, sit or lie in a comfortable position, and call 9-1-1. Follow the dispatcher’s instructions and stay on the line. If the person becomes unresponsive and is not breathing normally, tell the dispatcher and follow their CPR instructions.' },
      { title: 'After a heart attack', text: 'Treatment and recovery vary. The team may recommend medicines, a procedure, cardiac rehabilitation, and follow-up visits. Ask for written instructions before leaving hospital and bring them to appointments.', bullets: ['Keep an up-to-date medication list.', 'Ask when it is safe to return to work, driving, sex, and exercise.', 'Tell your care team if low mood, fear, or sleep problems are making recovery harder.'] },
    ],
    localTip: 'In Canada, 9-1-1 is the emergency number. Tell the operator your location, what is happening, and when symptoms began. If language is a barrier, say which language you speak and keep the call connected.',
    ask: ['Which symptoms mean I should call 9-1-1?', 'What medicines should I take and what side effects need a call?', 'Can I join cardiac rehabilitation near me?'],
    links: [{ label: 'Heart attack emergency signs', href: 'https://www.heartandstroke.ca/heart-disease/emergency-signs/heart-attack-and-stroke', source: 'Heart & Stroke' }, { label: 'Living with heart disease', href: 'https://www.heartandstroke.ca/heart-disease/recovery-and-support', source: 'Heart & Stroke' }],
  },
  {
    slug: 'heart-medications', title: 'Heart medications', shortTitle: 'Medications', icon: '💊', color: 'blue',
    eyebrow: 'Use medicines safely', introduction: 'Heart medicines can lower risk, control blood pressure or cholesterol, prevent clots, or ease symptoms. Knowing what each one does can make treatment easier to manage.',
    takeaway: 'Do not stop or change a heart medicine on your own. If cost, side effects, or refills are a problem, contact your prescriber or pharmacist.',
    sections: [
      { title: 'Different medicines do different jobs', text: 'Your prescriptions may include medicines for blood pressure, cholesterol, heart rhythm, fluid buildup, chest pain, or blood clots. The same medicine can be used for more than one reason. Your pharmacist can explain the purpose and how to take each one.' },
      { title: 'Make a medication list', text: 'Write down each prescription, dose, when you take it, and why. Include non-prescription medicines, vitamins, traditional remedies, and supplements. Bring the list or the packages to appointments and pharmacy visits.' },
      { title: 'If something changes', text: 'Ask before using new pain or cold medicines, because some can affect blood pressure or interact with prescriptions. Get advice if you miss a dose, have a procedure coming up, become ill, or notice a possible side effect.', bullets: ['Use one pharmacy when possible so the pharmacist can review your medicines together.', 'Use a reminder, calendar, or blister pack if doses are hard to keep track of.', 'Ask the pharmacy to explain a label in plain language or arrange interpretation.'] },
    ],
    localTip: 'B.C. pharmacists can answer medication questions and may provide some prescription services. PharmaCare helps pay for some medicines; coverage depends on the plan and the medication. Ask your pharmacy about costs and Fair PharmaCare registration.',
    ask: ['What is this medicine for, and when should I take it?', 'Which side effects or interactions should I watch for?', 'What will this medicine cost, and are there coverage options?'],
    links: [{ label: 'Pharmacy services in B.C.', href: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/pharmacare-for-bc-residents/what-we-cover/pharmacy-fees-services', source: 'B.C. PharmaCare' }, { label: 'Fair PharmaCare', href: 'https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/pharmacare-for-bc-residents/who-we-cover/fair-pharmacare-plan', source: 'B.C. PharmaCare' }],
  },
  {
    slug: 'heart-healthy-eating', title: 'Heart-healthy eating', shortTitle: 'Food & heart health', icon: '🥗', color: 'green',
    eyebrow: 'Small changes count', introduction: 'There is no single perfect meal plan. A pattern with more vegetables, fruit, whole grains, and plant proteins can support heart health and fit many food traditions.',
    takeaway: 'Start with foods you already enjoy. A small change that works for your household is more useful than a strict plan you cannot keep.',
    sections: [
      { title: 'Build a balanced plate', text: 'Try filling about half your plate with vegetables and fruit, one quarter with whole grains, and one quarter with protein foods. Beans, lentils, tofu, nuts, fish, eggs, and poultry are examples. Use this as a flexible guide, not a rule.' },
      { title: 'Notice salt and packaged foods', text: 'A lot of sodium comes from prepared and packaged food. Compare labels when you can, choose lower-sodium versions, and flavour meals with herbs, spices, garlic, lemon, or ginger. Frozen and canned vegetables or beans can be convenient; look for options without added salt or rinse them when possible.' },
      { title: 'Keep your context in the plan', text: 'Culture, budget, time, allergies, and medical conditions all matter. If you have kidney disease, take warfarin, or have diabetes, ask before making major food changes.', bullets: ['Choose water more often as a drink.', 'Add fibre gradually and drink enough fluid.', 'A registered dietitian can help adapt meals to your health needs and food traditions.'] },
    ],
    localTip: 'Call 8-1-1 in B.C. to ask to speak with a registered dietitian. Free interpretation is available in over 130 languages. You can say, “I would like a dietitian and an interpreter in [language].”',
    ask: ['Which food changes would help my blood pressure or cholesterol?', 'Can you help me adapt these ideas to the foods I usually eat?', 'Can I speak with a dietitian about my condition?'],
    links: [{ label: 'Canada’s Food Guide', href: 'https://food-guide.canada.ca/en/', source: 'Health Canada' }, { label: 'Heart-healthy eating', href: 'https://www.healthlinkbc.ca/healthwise/heart-healthy-eating', source: 'HealthLink BC' }],
  },
  {
    slug: 'physical-activity', title: 'Physical activity', shortTitle: 'Movement', icon: '🚶🏽', color: 'purple',
    eyebrow: 'Move in ways that work for you', introduction: 'Walking, dancing, gardening, wheeling, and active travel all count. Any amount of movement is a useful place to begin.',
    takeaway: 'Start where you are and build gradually. If you have heart symptoms or a long-term condition, ask what activity is safe for you.',
    sections: [
      { title: 'A weekly direction to aim for', text: 'Canadian guidance for adults recommends building toward at least 150 minutes of moderate to vigorous activity each week, plus muscle-strengthening activities on two or more days. You can break movement into shorter sessions. Your best starting point may be less, and that is okay.' },
      { title: 'Use the talk test', text: 'During moderate activity, you can talk but may not be able to sing. During vigorous activity, you can say only a few words before taking a breath. Choose an effort that feels appropriate for your body and health.' },
      { title: 'Make movement fit your life', text: 'Try a short walk, take the stairs if comfortable, stretch while watching television, or invite a friend to move with you. Reduce long stretches of sitting when you can.', bullets: ['Choose safe, enjoyable activities and weather-appropriate clothing.', 'Warm up and cool down when increasing effort.', 'Stop and get medical advice for new chest discomfort, unusual shortness of breath, dizziness, or a racing or irregular heartbeat. Call 9-1-1 for emergency symptoms.'] },
    ],
    localTip: 'HealthLink BC has qualified exercise professionals who can answer general activity questions, including for people with chronic conditions. Call 8-1-1 and ask about Physical Activity Services; interpretation is available.',
    ask: ['What activities are safe with my health conditions or medicines?', 'Would cardiac rehabilitation or supervised exercise help me?', 'How can I build activity gradually?'],
    links: [{ label: 'Physical Activity Services', href: 'https://www.healthlinkbc.ca/find-care/find-health-services/program/physical-activity-services', source: 'HealthLink BC' }, { label: 'Movement guidelines for adults', href: 'https://csepguidelines.ca/guidelines/adults-18-64/', source: 'Canadian Society for Exercise Physiology' }],
  },
  {
    slug: 'smoking', title: 'Smoking and your heart', shortTitle: 'Smoking & quitting', icon: '🌿', color: 'mint',
    eyebrow: 'Support makes quitting easier', introduction: 'Smoking and second-hand smoke harm blood vessels and increase the chance of heart disease and stroke. Quitting can help at any age, and support is available.',
    takeaway: 'Quitting can take more than one try. A slip does not erase progress; it can help you learn what support to try next.',
    sections: [
      { title: 'Choose support that fits', text: 'Counselling, quit coaching, nicotine replacement products, and prescription medicines can help. Combining coaching with a quit aid may work better than trying to manage cravings alone. A pharmacist or prescriber can help you choose safely.' },
      { title: 'Make a simple quit plan', text: 'Pick a day to start, notice situations that trigger cravings, and choose another action for those moments. Tell someone supportive. If you smoke again, restart when you are ready and ask for more help.', bullets: ['Call QuitNow for free coaching and support.', 'Ask a pharmacist about nicotine patches, gum, or lozenges.', 'Ask whether the B.C. Smoking Cessation Program can help with the cost of quit aids. Eligibility rules apply.'] },
      { title: 'Protect the people around you', text: 'Keeping indoor spaces and vehicles smoke-free reduces other people’s exposure to second-hand smoke. Ask your care team for help with a plan that feels manageable.' },
    ],
    localTip: 'B.C. residents can call QuitNow at 1-877-455-2233 or visit QuitNow.ca. The B.C. Smoking Cessation Program may cover some nicotine replacement or prescription options for eligible residents; ask a pharmacist about current eligibility.',
    ask: ['Which quit aid is safe with my medicines and health conditions?', 'Can I get support in my preferred language?', 'Am I eligible for the B.C. Smoking Cessation Program?'],
    links: [{ label: 'B.C. Smoking Cessation Program', href: 'https://www.healthlinkbc.ca/find-care/find-health-services/program/bc-smoking-cessation-program', source: 'HealthLink BC' }, { label: 'QuitNow', href: 'https://quitnow.ca/', source: 'QuitNow' }],
  },
  {
    slug: 'sleep-and-stress', title: 'Sleep, stress, and your heart', shortTitle: 'Sleep & stress', icon: '🌙', color: 'indigo',
    eyebrow: 'Rest is part of health', introduction: 'Sleep and stress affect how we feel and the routines that support heart health. Small steps and professional support can make a difference.',
    takeaway: 'If sleep, anxiety, or stress is affecting daily life, you deserve support. You do not need to solve it alone.',
    sections: [
      { title: 'Support steadier sleep', text: 'Many adults do best with a regular sleep schedule and a restful wind-down. Try keeping a similar bedtime and wake time, making the room comfortable, and limiting caffeine later in the day. If sleep problems continue, speak with a healthcare provider.' },
      { title: 'Notice signs of sleep apnea', text: 'Loud snoring, pauses in breathing during sleep, morning headaches, or strong daytime sleepiness can be signs of sleep apnea. Ask a clinician whether an assessment could help.' },
      { title: 'Ease stress in small ways', text: 'A slow breathing exercise, time outdoors, movement, a trusted conversation, or help with a practical problem may reduce stress. After a heart diagnosis, anxiety or low mood is common and treatable.', bullets: ['Try breathing out slowly for longer than you breathe in, for a few cycles.', 'Ask about counselling, community supports, or culturally safe services.', 'If stress leads to smoking or drinking more, ask for help without judgment.'] },
    ],
    localTip: 'For non-emergency advice in B.C., call 8-1-1 and ask for a nurse or health service navigator. If you are in emotional crisis in Canada, call or text 9-8-8. Call 9-1-1 for immediate danger.',
    ask: ['Could a medicine or health condition be affecting my sleep?', 'Could I have sleep apnea?', 'What counselling or community support is available in my language?'],
    links: [{ label: 'Sleep and your health', href: 'https://www.healthlinkbc.ca/healthwise/sleep-and-your-health', source: 'HealthLink BC' }, { label: 'Sleep apnea', href: 'https://www.healthlinkbc.ca/healthwise/sleep-apnea', source: 'HealthLink BC' }, { label: 'Call or text 9-8-8', href: 'https://988.ca/', source: 'Canada 9-8-8' }],
  },
];
