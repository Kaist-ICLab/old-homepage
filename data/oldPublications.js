const old = [
  {
    year: 2022,
    title: 'Social-Spiritual Face: Designing Social Reading Support for Spiritual Well-being',
    authors: [
      'Inyeop Kim',
      'Minsam Ko',
      'Joonyoung Park',
      'Sung Wook Moon',
      'Gyuwon Jung',
      'Youn-kyung Lim',
      'Uichin Lee',
    ],
    venue: 'CSCW',
    full_venue:
      "Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Volume 6, CSCW2, November'22",
  },
  {
    year: 2022,
    title: 'Editorial: Adverse Health Consequences of Excessive Smartphone Usage',
    authors: ['Uichin Lee and Paul H. Lee'],
    venue: 'Frontiers in Public Health',
    full_venue: 'Volume II, Frontiers Public Health, 09 August 2022 Sec. Digital Public Health',
  },
  {
    year: 2022,
    title: 'A Systematic Survey on Android API Usage for Data-Driven Analytics with Smartphones,',
    authors: ['Hansoo Lee', 'Joonyoung Park', 'Uichin Lee'],
    venue: 'CSUR',
    full_venue: 'ACM Computing Surveys, Volume x, Issue x, 2022 (to appear)',
  },
  {
    year: 2022,
    title:
      'Understanding Perceived Benefits and Privacy Risks in Open Dataset Collection for Mobile Affective Computing',
    authors: ['Hyunsoo Lee', 'Soowon Kang', 'Uichin Lee'],
    venue: 'IMWUT',
    full_venue:
      'ACM Ubicomp 2022 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 6, Issue 2, July 2022',
  },
  {
    year: 2022,
    title:
      'CSI:DeSpy- Enabling Effortless Spy Camera Detection via Passive Sensing of User Activities and Bitrate Variations',
    authors: ['Muhammad Salman', 'Mr. Nguyen Dao', 'Uichin Lee', 'Youngtae Noh'],
    venue: 'IMWUT',
    full_venue:
      'ACM Ubicomp 2022 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 6, Number 2, May 2022',
  },
  {
    year: 2022,
    title:
      'CareMouse: An Interactive Mouse System that Supports Wrist Stretching Exercises in the Workplace',
    authors: ['Gyuwon Jung', 'Youwon Shin', 'Jieun Lim', 'Uichin Lee'],
    venue: 'CHI LBW',
    full_venue: 'ACM CHI 2022 (Late Breaking Work), New Orleans, LA, USA, April 30–May 5 2022',
  },
  {
    year: 2022,
    title: 'Understanding Emotion Changes in Mobile Experience Sampling',
    authors: ['Soowon Kang', 'Cheul Young Park', 'Narae Cha', 'Auk Kim', 'Uichin Lee'],
    venue: 'CHI',
    full_venue: 'ACM CHI 2022, New Orleans, LA, USA, April 30–May 5 2022',
  },
  {
    year: 2022,
    title:
      "It’s not wrong, but I'm quite disappointed: Toward an Inclusive Algorithmic Experience for Content Creators with Disabilities",
    authors: ['Dasom Choi', 'Uichin Lee', 'Hwajung Hong'],
    venue: 'CHI',
    full_venue: 'ACM CHI 2022, New Orleans, LA, USA, April 30–May 5 2022',
  },
  {
    year: 2022,
    title: 'Privacy-Aware Affective State Recognition from Visual Data',
    authors: [
      'M Sami Zitouni',
      'Peter Lee',
      'Uichin Lee',
      'Leontios Hadjileontiadis',
      'Ahsan Khandoker',
    ],
    venue: 'IEEE',
    full_venue: 'IEEE Access 07 April 2022',
  },
  {
    year: 2022,
    title:
      'Successfully implementing digital health to ensure future global health security during pandemics: a consensus statement',
    authors: [
      'Bandar Al Knawy',
      'Mollie Marian McKillop',
      'Joud Abduljawad',
      'Sasu Tarkoma',
      'Mahmood Adil',
      'Louise Schaper',
      'Adam Chee',
      'David W Bates',
      'Michael Klag',
      'Uichin Lee',
      'Zisis Kozlakidis',
      'George Crooks',
      'Kyu Rhee',
    ],
    venue: 'JAMA',
    full_venue: 'JAMA Network Open 2022;5(2):e220214',
  },
  {
    year: 2021,
    title:
      'Emotion Recognition in the Wild from Long-term Heart Rate Recording using Wearable Sensor and Deep Learning Ensemble Classification',
    authors: [
      'Sara A Nasrat',
      'Uichin Lee',
      'M Sami Zitouni',
      'Ahsan H Khandoker',
      'Soowon Kang',
      'Herbert F Jelinek',
    ],
    venue: 'BIBM',
    full_venue:
      'BIBM 2021, 2021 IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2021/12/9',
  },
  {
    year: 2021,
    title:
      'Arousal-Valence Classification from Peripheral Physiological Signals Using Long Short-Term Memory Networks',
    authors: [
      'M Sami Zitouni',
      'Cheul Young Park',
      'Uichin Lee',
      'Leontios Hadjileontiadis',
      'Ahsan Khandoker',
    ],
    venue: 'EMBC',
    full_venue:
      'EMBC 2021, 2021 43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC), 2021/11/1 [PDF]',
  },
  {
    year: 2021,
    title: 'Dynamic Consent for Sensor-Driven Research',
    authors: ['Hyunsoo Lee', 'Uichin Lee'],
    venue: 'ICMU',
    full_venue:
      'ICMU 2021, The 13th International Conference on Mobile Computing and Ubiquitous Networking, November 17-19th, 2021, Tokyo, Japan',
  },
  {
    year: 2021,
    title:
      'Utilitarian or Relational? Exploring Indicators of User Orientation Towards Intelligent Agents',
    authors: ['Hankyung Kim', 'Hoyeon Nam', 'Uichin Lee', 'Youn-kyung Lim'],
    venue: 'HCII',
    full_venue:
      'HCI International 2021, International Conference on Human-Computer Interaction, 2021/7/24',
  },
  {
    year: 2021,
    title: 'Benefits of Mobile Contact Tracing on COVID-19: Tracing Capacity Perspectives',
    authors: ['Uichin Lee', 'Auk Kim'],
    venue: 'Frontiers in Public Health',
    full_venue: 'Frontiers in Public Health (Digital Public Health Section), 2021 (to appear)',
  },
  {
    year: 2021,
    title: '“Good Enough!”: Flexible Goal Achievement with Margin-based Outcome Evaluation',
    authors: ['Gyuwon Jung', 'Jio Oh', 'Youjin Jung', 'Juho Sun', 'Ha-Kyung Kong', 'Uichin Lee'],
    venue: 'CHI',
    full_venue: 'ACM CHI 2021, Yokohama, Japan May 8-13, 2021',
  },
  {
    year: 2021,
    title: 'Sticky Goals: Understanding Goal Commitments for Behavioral Changes in the Wild',
    authors: ['Hyunsoo Lee', 'Auk Kim', 'Hwajung Hong', 'Uichin Lee'],
    venue: 'CHI',
    full_venue: 'ACM CHI 2021, Yokohama, Japan May 8-13, 2021',
  },
  {
    year: 2021,
    title:
      'GoldenTime: Exploring System-Driven Timeboxing and Micro-Financial Incentives for Self-Regulated Phone Use',
    authors: ['Joonyoung Park', 'Hyunsoo Lee', 'Sangkeun Park', 'Kyong-Mee Chung', 'Uichin Lee'],
    venue: 'CHI',
    full_venue: 'ACM CHI 2021 Yokohama, Japan May 8-13, 2021',
  },
  {
    year: 2021,
    title:
      'Beneficial Neglect: Instant Message Notification Handling Behaviors and Academic Performance',
    authors: ['Minhyung Kim', 'Inyeop Kim', 'Uichin Lee ACM'],
    venue: 'IMWUT',
    full_venue:
      'Ubicomp 2021 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 5, Issue 1, March 2021 [PDF]',
  },
  {
    year: 2020,
    title:
      'Understanding User Contexts and Coping Strategies for Context-aware Phone Distraction Management System Design,',
    authors: ['Inyeop Kim', 'Hwarang Goh', 'Nematjon Narziev', 'Youngtae Noh', 'Uichin Lee'],
    venue: 'IMWUT',
    full_venue:
      'ACM Ubicomp 2021/ Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT) Vol. 4, No. 4, Article 00, Dec. 2020',
  },
  {
    year: 2020,
    title:
      'Validation of self-reported smartphone usage against objectively-measured smartphone usage in Hong Kong Chinese adolescents and young adults,',
    authors: ['Paul H Lee'],
    venue: 'PI',
    full_venue: 'Psychiatry Investigation (to appear) 2020',
  },
  {
    year: 2020,
    title: 'The Riyadh Declaration: the role of digital health in fighting pandemics,',
    authors: [
      'Bandar Al Knawy',
      'Mahmood Adil',
      'George Crooks',
      'Kyu Rhee',
      'David Bates',
      'Hani Jokhdar',
      'Michael Klag',
      'Uichin Lee',
      'Ali H Mokdad',
      'Louise Schaper',
      'Raed Al Hazme',
      'Ali M Al Khathaami',
      'Joud Abduljawad',
    ],
    venue: 'Lancet',
    full_venue: 'Lancet (to appear) 2020',
  },
  {
    year: 2020,
    title:
      'Temporal association between objectively measured smartphone usage, sleep quality and physical activity among Chinese adolescents and young adults,',
    authors: ['Paul H. Lee', 'Andy C. Y. Tse', 'Cynthia S. T. Wu', 'Yim Wah Mak', 'Uichin Lee'],
    venue: 'JSR',
    full_venue: 'Journal of Sleep Research Oct. 2020',
  },
  {
    year: 2020,
    title: 'Digital Public Health and COVID-19,',
    authors: ['Christopher J L Murray', 'Nurah Maziad S Alamro', 'Hee Hwang', 'Uichin Lee'],
    venue: 'Lancet',
    full_venue: 'Lancet Public Health Vol. 5, Issue 9, E469-E470, Sept. 2020',
  },
  {
    year: 2020,
    title:
      'K-EmoCon, a multimodal sensor dataset for continuous emotion recognition in naturalistic conversations',
    authors: [
      'Cheul Young Park',
      'Narae Cha',
      'Soowon Kang',
      'Auk Kim',
      'Ahsan Habib Khandoker',
      'Leontios Hadjileontiadis',
      'Alice Oh',
      'Yong Jeong',
      'and Uichin Lee',
    ],
    venue: 'Scientific Data',
    full_venue: 'Scientific Data Vol. 7, No. 293, 2020',
  },
  {
    year: 2020,
    title:
      'Hello there! Is now a good time to talk?: Understanding Opportune Moments for Proactive Conversational Interaction with Smart Speakers',
    authors: [
      'Narae Cha',
      'Auk Kim',
      'Cheul Young Park',
      'Soowon Kang',
      'Mingyu Park',
      'Jae-Gil Lee',
      'Sangsu Lee',
      'Uichin Lee',
    ],
    venue: 'Ubicomp/IMWUT',
    full_venue:
      'ACM Ubicomp 2021/ Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT) Vol. 4, No. 3, Article 74, Sept. 2020',
  },
  {
    year: 2020,
    title:
      'Too Much Information: Assessing Privacy Risks of Contact Trace Data Disclosure on People With COVID-19 in South Korea',
    authors: ['Gyuwon Jung', 'Hyunsoo Lee', 'Auk Kim', 'Uichin Lee'],
    venue: 'Frontiers in Public Health',
    full_venue: 'Frontiers in Public Health 2020',
  },
  {
    year: 2020,
    title: 'Dashcam Witness: Video Sharing Motives and Privacy Concerns across Different Nations',
    authors: ['Joohyun Kim', 'Sangkeun Park', 'and Uichin Lee'],
    venue: 'IEEE',
    full_venue: 'IEEE Access 2020',
  },
  {
    year: 2020,
    title:
      'TermBall: Tracking and Predicting Evolution Types of Research Topics by Using Knowledge Structures in Scholarly Big Data',
    authors: ['Christine Balili', 'Uichin Lee', 'Aviv Segev', 'Jaejeung Kim', 'Minsam Ko'],
    venue: 'IEEE',
    full_venue: 'IEEE Access 2020',
  },
  // {
  //   year: 2020,
  //   title:
  //     'Cognitive States Matter: Design Guidelines for Driving Situation Awareness in Smart Vehicles',
  //   authors: ['Daehee Park', 'Wan Chul Yoon', 'Uichin Lee'],
  //   full_venue: 'Sensors 2020, 20(10), 2978',
  // },
  // {
  //   year: 2020,
  //   title: 'Tracking and Modeling Subjective Well-Being Using Smartphone-Based Digital Phenotype',
  //   authors: ['Soyoung Rhim', 'Uichin Lee', 'Kyungsik Han'],
  //   full_venue:
  //     "ACM UMAP'20 / Conference on User Modeling, Adaptation and Personalization , July 14–17, 2020, Genoa, Italy",
  // },
  // {
  //   year: 2020,
  //   title: 'Privacy Concerns of Digital Phenotyping for Older Adults with Mental Health Issues',
  //   authors: ['Hyunsoo Lee', 'Uichin Lee'],
  //   full_venue: 'CHI 2020 Networked Privacy Workshop, April 25–30, 2020',
  // },
  // {
  //   year: 2020,
  //   title:
  //     'BeActive: Encouraging Physical Activities with Just-in-time Health Intervention and Micro Financial Incentives',
  //   authors: [
  //     'Juho Sun',
  //     'Sangkeun Park',
  //     'Gyuwon Jung',
  //     'Yong Jeong',
  //     'Uichin Lee',
  //     'Kyong-Mee Chung',
  //     'Changseok Lee',
  //     'Heewon Kim',
  //     'Suhyon Ahn',
  //     'Ahsan Khandoker',
  //     'Leontios Hadjileontiadis',
  //   ],
  //   full_venue:
  //     "AsianCHI '20: Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures, April 2020 Pages 17–20",
  // },
  // {
  //   year: 2020,
  //   title:
  //     'ScriptFree: Designing Speech Preparation Systems with Adaptive Visual Reliance Control on Script',
  //   authors: ['Jeungmin Oh', 'Darren Edge', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2020 Late Breaking Work , April 25–30, 2020',
  // },
  // {
  //   year: 2020,
  //   title:
  //     'Interruptibility for In-vehicle Multitasking: Influence of Voice Task Demands and Adaptive Behaviors',
  //   authors: ['Auk Kim', 'Jung-Mi Park', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2020 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 4, Issue 1, March 2020',
  // },
  // {
  //   year: 2019,
  //   title:
  //     'Maximizing MapReduce Job Speed and Reliability in the Mobile Cloud by Optimizing Task Allocation',
  //   authors: ['Jin-woo Lee', 'Gwangseon Jang', 'Hohyun Jung', 'Jae-Gil Lee', 'Uichin Lee'],
  //   full_venue:
  //     'Pervasive and Mobile Computing Pervasive and Mobile Computing Volume 60, November 2019, 101082',
  // },
  // {
  //   year: 2019,
  //   title: 'Predicting Opportune Moments for In-vehicle Proactive Speech Services',
  //   authors: ['Auk Kim', 'Woohyeok Choi', 'Jungmi Park', 'Kyeyoon Kim', 'Uichin Lee'],
  //   full_venue: 'ACM Ubicomp 2019 (poster), Oct. 2019 [PDF][Poster]',
  // },
  // {
  //   year: 2019,
  //   title:
  //     'PASS: Reducing Redundant Notifications between a Smartphone and a Smartwatch for Energy Saving',
  //   authors: ['Jemin Lee', 'Uichin Lee', 'Hyungshin Kim'],
  //   full_venue: 'IEEE Transactions on Mobile Computing (accepted for publication) 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'Understanding Smartphone Usage in College Classrooms: A Long-term Measurement Study',
  //   authors: [
  //     'Inyeop Kim',
  //     'Rihun Kim',
  //     'Heepyung Kim',
  //     'Duyeon Kim',
  //     'Kyungsik Han',
  //     'Paul H Lee',
  //     'Gloria Mark',
  //     'and Uichin Lee',
  //   ],
  //   full_venue: 'Computers & Education (accepted for publication) 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'Multi-Stage Receptivity Model for Mobile Just-In-Time Health Intervention,',
  //   authors: ['Woohyeok Choi', 'Sangkeun Park', 'Duyeon Kim', 'Youn-kyung Lim', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2019 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)',
  // },
  // {
  //   year: 2019,
  //   title: 'LocknType: Lockout Task Intervention for Discouraging Smartphone App Use',
  //   authors: ['Jaejeung Kim', 'Joonyoung Park', 'Hyunsoo Lee', 'Minsam Ko', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2019 , Glasgow, Scotland UK, May 4–9, 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'Commitment devices in online behavior change support systems',
  //   authors: ['Hyunsoo Lee', 'Hwajung Hong', 'Uichin Lee'],
  //   full_venue:
  //     "AsianHCI '19: Proceedings of Asian CHI Symposium 2019: Emerging HCI Research Collection, Glasgow, Scotland UK, May 4–9, 2019",
  // },
  // {
  //   year: 2019,
  //   title: 'Slow Robots for Unobtrusive Posture Correction',
  //   authors: [
  //     'Joon-Gi Shin',
  //     'Eiji Onchi',
  //     'Maria Jose Reyes',
  //     'Junbong Song',
  //     'Uichin Lee',
  //     'Seung-Hee Lee',
  //     'Daniel Saakes',
  //   ],
  //   full_venue: 'ACM CHI 2019 , Glasgow, Scotland UK, May 4–9, 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'Interaction Restraint Framework for Digital Wellbeing',
  //   authors: ['Uichin Lee and Jaejeung Kim'],
  //   full_venue:
  //     'ACM CHI Workshop: Designing for Digital Wellbeing , Glasgow, Scotland UK, May 4, 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'Wake-Up Task: Understanding Users in Task-based Mobile Alarm App',
  //   authors: [
  //     'Kyue Taek Oh',
  //     'Jaemyung Shin',
  //     'Jaejeung Kim',
  //     'In Suk Song',
  //     'Uichin Lee',
  //     'Eunil Park',
  //     'Jinyoung Han',
  //     'Minsam Ko',
  //   ],
  //   full_venue: 'ACM CHI LBW, Glasgow, Scotland UK, May 4, 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'GoalKeeper: Exploring Interaction Lockout Mechanisms for Regulating Smartphone Use,',
  //   authors: ['Jaejeung Kim', 'Hayoung Jung', 'Minsam Ko', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2019 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 3, Issue 1, Mar. 2019',
  // },
  // {
  //   year: 2019,
  //   title: 'Fire in Your Hands: Understanding Thermal Behavior of Smartphones',
  //   authors: [
  //     'Soowon Kang',
  //     'Hyeonwoo Choi',
  //     'Sooyoung Park',
  //     'Chunjong Park',
  //     'Jemin Lee',
  //     'Uichin Lee',
  //     'and Sung-Ju Lee',
  //   ],
  //   full_venue: 'ACM Mobicom 2019, Oct. 2019',
  // },
  // {
  //   year: 2019,
  //   title:
  //     'Interrupting Drivers for Interactions: Predicting Opportune Moments for In-vehicle Proactive Auditory-verbal Tasks',
  //   authors: ['Auk Kim', 'Woohyeok Choi', 'Jung-Mi Park', 'Kyeyoon Kim', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2019 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 2, Issue 4, Dec. 2018',
  // },
  // {
  //   year: 2019,
  //   title: '긍정 컴퓨팅을 위한 설득적 인터랙션 제한 시스템',
  //   authors: ['이의진', '김재정'],
  //   full_venue: 'HCI Korea 2019, 2019.2.13-16',
  // },
  // {
  //   year: 2018,
  //   title: "Understanding Customers'Interests in the Wild",
  //   authors: ['Soowon Kang', 'Auk Kim', 'Jemin Lee', 'Ikhee Shin', 'Uichin Lee'],
  //   full_venue: 'ACM Ubicomp 2018 (poster), Oct. 2018',
  // },
  // {
  //   year: 2018,
  //   title: 'HelloBot: Facilitating Social Inclusion with an Interactive Greeting Robot',
  //   authors: ['Narae Cha', 'Inyeop Kim', 'Mingyu Park', 'Auk Kim', 'Uichin Lee'],
  //   full_venue: 'ACM Ubicomp 2018 (poster), Oct. 2018 [PDF]',
  // },
  // {
  //   year: 2018,
  //   title: 'Exploring Context-aware Proactive Blocking for Distraction Management',
  //   authors: ['Inyeop Kim', 'Narae Cha', 'Uichin Lee'],
  //   full_venue: 'ACM Ubicomp 2018 (workshop), Oct. 2018',
  // },
  // {
  //   year: 2018,
  //   title: 'CampusWatch: Exploring Communitysourced Patrolling with Pervasive Mobile Technology',
  //   authors: ['Sangkeun Park', 'Sujin Kown', 'Uichin Lee'],
  //   full_venue:
  //     'Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Vol. 2, No. CSCW, Article 30. 2018',
  // },
  // {
  //   year: 2018,
  //   title: 'Complex and Ambiguous: Understanding Sticker Misinterpretations in Instant Messaging',
  //   authors: ['Yoonjeong Cha', 'Jongwon Kim', 'Sangkeun Park', 'Mun Yong Yi', 'Uichin Lee'],
  //   full_venue:
  //     'Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Vol. 2, No. CSCW, Article 30. 2018',
  // },
  // {
  //   year: 2018,
  //   title: 'Localness of Location-based Knowledge Sharing: A Study of Naver KiN “Here”',
  //   authors: ['Sangkeun Park', 'Mark S. Ackerman', 'Uichin Lee', ''],
  //   full_venue: 'ACM Transactions on the Web (TWEB), Volume: 12, Issue: 3, July 2018',
  // },
  // {
  //   year: 2018,
  //   title:
  //     'Intelligent Positive Computing with Mobile, Wearable, and IoT Devices: Literature Review and Research Directions',
  //   authors: [
  //     'Uichin Lee',
  //     'Kyungsik Han',
  //     'Hyunsung Cho',
  //     'Kyong-Mee Chung',
  //     'Hwajung Hong',
  //     'Sung-Ju Lee',
  //     'Youngtae Noh',
  //     'Sooyoung Park',
  //     'John M. Carroll',
  //   ],
  //   full_venue: 'Ad Hoc Networks Journal (Elsevier), 2018 (to appear)',
  // },
  // {
  //   year: 2018,
  //   title:
  //     'Optical-acoustic Hybrid Network Toward Real-time Video Streaming for Mobile Underwater Sensors',
  //   authors: ['Youngtae Noh', 'Sungwon Han', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: 'Ad Hoc Networks Journal (Elsevier), 2018 (to appear)',
  // },
  // {
  //   year: 2018,
  //   title:
  //     'Interaction Restraint: Enforcing Adaptive Cognitive Tasks to Restrain Problematic User Interaction',
  //   authors: ['Joonyoung Park', 'Jin Yong Sim', 'Jaejeung Kim', 'Mun Yong Yi', 'Uichin Lee'],
  //   full_venue: 'ACM CHI EA 2018 (Late-Breaking Work), Montréal, Canada, April 21-26',
  // },
  // {
  //   year: 2018,
  //   title: 'Actuating a Monitor for Posture Changes',
  //   authors: ['Joon Gi Shin', 'Woohyeok Choi', 'Uichin Lee', 'Daniel Saakes'],
  //   full_venue: 'ACM CHI EA 2018 (Late-Breaking Work), Montréal, Canada, April 21-26',
  // },
  // {
  //   year: 2018,
  //   title: 'TNT: Exploring Pseudo Social Reminding for Effective Task Management',
  //   authors: ['Wonyoung Shin', 'Soowon Kang', 'Inyeop Kim', 'Mun Yong Yi', 'Uichin Lee'],
  //   full_venue: 'ACM CHI EA 2018 (Late-Breaking Work), Montréal, Canada, April 21-26',
  // },
  // {
  //   year: 2017,
  //   title: 'Flower-Pop: Facilitating Casual Group Conversations With Multiple Mobile Devices',
  //   authors: [
  //     'Moon-Hwan Lee',
  //     'Yea-Kyung Row',
  //     'Oosung Son',
  //     'Uichin Lee',
  //     'Jaejeung Kim',
  //     'Jungi Jeong',
  //     'Seungryoul Maeng',
  //     'Tek-Jin Nam',
  //   ],
  //   full_venue:
  //     'ACM Ubicomp 2018 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 4, Dec. 2017',
  // },
  // {
  //   year: 2017,
  //   title: 'Tracking and Predicting the Evolution of Research Topics in Scientific Literature',
  //   authors: ['Christine Balili', 'Aviv Segev', 'Uichin Lee'],
  //   full_venue: 'IEEE BigData 2017, Dec 11-14, 2017 Boston, MA, USA',
  // },
  // {
  //   year: 2017,
  //   title:
  //     'Technology Supported Behavior Restriction for Mitigating Self-Interruptions in Multi-device Environments',
  //   authors: ['Jaejeung Kim', 'Chiwoo Cho', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  // },
  // {
  //   year: 2017,
  //   title: "Let's FOCUS: Mitigating Mobile Phone Use in College Classrooms",
  //   authors: ['Inyeop Kim', 'Gyuwon Jung', 'Hayoung Jung', 'Minsam Ko', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  // },
  // {
  //   year: 2017,
  //   title:
  //     'Let’s FOCUS: Location-based Intervention Tool to Mitigate Phone Use in College Classrooms',
  //   authors: ['Inyeop Kim', 'Gyuwon Jung', 'Hayoung Jung', 'Minsam Ko', 'Uichin Lee'],
  //   full_venue: 'ACM Ubicomp 2017 (poster), Sept. 2017',
  // },
  // {
  //   year: 2017,
  //   title:
  //     'TrailSense: A Crowdsensing System for Detecting Risky Mountain Trail Segments with Walking Pattern Analysis',
  //   authors: ['Keunseo Kim', 'Hengameh Zabihi', 'Heeyoung Kim', 'Uichin Lee'],
  //   full_venue:
  //     'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  // },
  // {
  //   year: 2017,
  //   title: 'Smartwatch Wearing Behavior Analysis: A Longitudinal Study',
  //   authors: ['Hayeon Jeong', 'Heepyung Kim', 'Rihun Kim', 'Uichin Lee', 'Yong Jeong'],
  //   full_venue:
  //     'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  // },
  // {
  //   year: 2017,
  //   title: 'Understanding Mobile Document Capture and Correcting Orientation Errors',
  //   authors: [
  //     'Jeungmin Oh',
  //     'Joohyun Kim',
  //     'Myungjoon Kim',
  //     'Woohyeok Choi',
  //     'SangJeong Lee',
  //     'Uichin Lee',
  //   ],
  //   full_venue:
  //     'International Journal of Human-Computer Studies, Volume 104, Pages 64–79, August 2017',
  // },
  // {
  //   year: 2017,
  //   title: 'Virtual Figure Model Crafting with VR HMD and Leap Motion',
  //   authors: ['Gangrae Park', 'Hyunmin Choi', 'Uichin Lee', 'Seongah Chin'],
  //   full_venue: 'The Imaging Science Journal Sept. 2017',
  // },
  // {
  //   year: 2017,
  //   title: 'WatchOut: Facilitating Safe Driving Behaviors with Social Support',
  //   authors: ['Hyojin Chin', 'Hengameh Zabihi', 'Sangkeun Park', 'Mun Yong Yi', 'Uichin Lee'],
  //   full_venue: 'ACM CHI EA 2017 (Late-Breaking Work), Denver, CO, USA, May 6-11',
  // },
  // {
  //   year: 2017,
  //   title: 'Sensors Know Which Photos Are Memorable',
  //   authors: [
  //     'Soyoung Kim',
  //     'Kalenzi Asio Evelyn Patra',
  //     'Auk Kim',
  //     'Kun-Pyo Lee',
  //     'Aviv Segev',
  //     'Uichin Lee',
  //   ],
  //   full_venue: 'ACM CHI EA 2017 (Late-Breaking Work), Denver, CO, USA, May 6-11',
  // },
  // {
  //   year: 2017,
  //   title:
  //     "It's More than Just Sharing Game Play Videos! Understanding User Motives in Mobile Game Social Media",
  //   authors: [
  //     'Hayun Kim',
  //     'Lebogang Wame Molefi',
  //     'Auk Kim',
  //     'Woontack Woo',
  //     'Aviv Segev',
  //     'Uichin Lee',
  //   ],
  //   full_venue: 'ACM CHI EA 2017 (Late-Breaking Work), Denver, CO, USA, May 6-11',
  // },
  // {
  //   year: 2017,
  //   title: 'Facilitating Pervasive Community Policing on the Road with Mobile Roadwatch',
  //   authors: [
  //     'Sangkeun Park',
  //     'Emilia-Stefania Ilincai',
  //     'Jeungmin Oh',
  //     'Sujin Kwon',
  //     'Rabeb Mizouni',
  //     'Uichin Lee',
  //   ],
  //   full_venue: 'ACM CHI 2017, Denver, CO, USA, May 6-11 [PDF] [PPT]',
  // },
  // {
  //   year: 2017,
  //   title: 'LetsPic: Supporting In-situ Collaborative Photography over a Large Physical Space,',
  //   authors: ['Auk Kim', 'Sungjoon Kang', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2017, Denver, CO, USA, May 6-11',
  // },
  // {
  //   year: 2016,
  //   title:
  //     'Infrastructure-free Collaborative Indoor Positioning Scheme for Time-critical Team Operations',
  //   authors: ['Youngtae Noh', 'Hirozumi Yamaguchi', 'Uichin Lee'],
  //   full_venue:
  //     'IEEE Transactions on Systems, Man, and Cybernetics: Systems, Volume: 48, Issue: 3, March 2018',
  // },
  // {
  //   year: 2016,
  //   title: 'Internet of Vehicles: From Intelligent Grid to Autonomous Cars and Vehicular Fogs',
  //   authors: ['Eun-Kyu Lee', 'Mario Gerla', 'Giovanni Pau', 'Uichin Lee', 'Jae-Han Lim'],
  //   full_venue: 'International Journal of Distributed Sensor Networks, Vol. 12(9), 2016',
  // },
  // {
  //   year: 2016,
  //   title: 'Cannibalism in Medical Topic Networks',
  //   authors: ['Suhyun Chae', 'Aviv Segev', 'Uichin Lee'],
  //   full_venue: 'Knowledge-Based Systems, Volume 108, Sept. 15, 2016, Pages 168–178',
  // },
  // {
  //   year: 2016,
  //   title:
  //     'Exploring User Experiences of Active Workstations: A Case Study of Under Desk Elliptical Trainers',
  //   authors: ['Woohyeok Choi', 'Aejin Song', 'Darren Edge', 'Masaaki Fukumoto', 'Uichin Lee'],
  //   full_venue: 'ACM Ubicomp 2016, Heidelberg, Germany, Sep. 12-16, 2016',
  // },
  // {
  //   year: 2016,
  //   title: 'Designing Interactive Multiswimmer Exergames: A Case Study',
  //   authors: [
  //     'Woohyeok Choi',
  //     'Jeungmin Oh',
  //     'Taiwoo Park',
  //     'Seongjun Kang',
  //     'Miri Moon',
  //     'Uichin Lee',
  //     'Inseok Hwang',
  //     'Darren Edge',
  //     'Junehwa Song',
  //   ],
  //   full_venue: 'ACM Transaction on Sensor Networks (TOSN), Volume 12, Issue 3, July 2016',
  // },
  // {
  //   year: 2016,
  //   title: 'Motion-MiX DHT for Wireless Mobile Networks',
  //   authors: ['Seungjae Shin', 'Uichin Lee', 'Falko Dressler', 'Hyunsoo Yoon'],
  //   full_venue: 'IEEE Transaction on Mobile Computing, Volume 15, Issue 12, Dec. 1 2016',
  // },
  // {
  //   year: 2016,
  //   title: 'LockDoll: Providing Ambient Feedback of Smartphone Usage within Social Interaction',
  //   authors: ['Seungwoo Choi', 'Hayeon Jeong', 'Minsam Ko', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  // },
  // {
  //   year: 2016,
  //   title: 'EcoMeal: A Smart Tray for Promoting Healthy Dietary Habits',
  //   authors: ['Jaejeung Kim', 'Joonyoung Park', 'Uichin Lee'],
  //   full_venue:
  //     'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12 [PDF] [Poster]',
  // },
  // {
  //   year: 2016,
  //   title:
  //     'Social or Financial Goals? Comparative Analysis of User Behaviors in Couchsurfing and Airbnb',
  //   authors: [
  //     'Jiwon Jung',
  //     'Susik Yoon',
  //     'SeungHyun Kim',
  //     'Sangkeun Park',
  //     'Kun-Pyo Lee',
  //     'Uichin Lee',
  //   ],
  //   full_venue: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  // },
  // {
  //   year: 2016,
  //   title: 'How to Report App Feedback? Analyzing Feedback Reporting Behavior',
  //   authors: ['Jeungmin Oh', 'SangJeong Lee', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  // },
  // {
  //   year: 2016,
  //   title: 'SlideQA: Supporting Effective Q&A in an Offline Academic Presentation',
  //   authors: ['Juyoun Kim', 'Yoochan Kim', 'Sangkeun Park', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  // },
  // {
  //   year: 2016,
  //   title: 'SwimTrain: Exploring Exergame Design for Group Fitness Swimming',
  //   authors: ['Woohyeok Choi', 'Jeungmin Oh', 'Darren Edge', 'Joohyun Kim', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2016, San Jose, CA, USA, May 7-12',
  // },
  // {
  //   year: 2016,
  //   title: 'Motives and Concerns of Dashcam Video Sharing',
  //   authors: ['Sangkeun Park', 'Joohyun Kim', 'Rabeb Mizouni', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2016, San Jose, CA, USA, May 7-12',
  // },
  // {
  //   year: 2016,
  //   title:
  //     "Lock n'LoL: Group-based Limiting Assistance App to Mitigate Smartphone Distractions in Group Activities",
  //   authors: ['Minsam Ko', 'Seungwoo Choi', 'Koji Yatani', 'Uichin Lee'],
  //   full_venue: 'ACM CHI 2016, San Jose, CA, USA, May 7-12 (Best Paper Award)',
  // },
  // {
  //   year: 2016,
  //   title: 'Analysis of Cell Sojourn Time in Heterogeneous Networks with Small Cells',
  //   authors: ['Seungjae Shin', 'Uichin Lee', 'Falko Dressler', 'Hyunsoo Yoon'],
  //   full_venue: 'IEEE Communications Letters, Volume 20, Issue 4, pp 788-791, April 2016',
  // },
  // {
  //   year: 2016,
  //   title:
  //     'What Makes Sports Fans Interactive? Identifying Factors Affecting Chat Interactions in Online Sports Viewing',
  //   authors: ['Minsam Ko', 'Jaeryong Yeo', 'Juyeong Lee', 'Uichin Lee', 'Young Jae Jang'],
  //   full_venue: 'PLOS ONE, February 5, 2016',
  // },
  // {
  //   year: 2016,
  //   title:
  //     'Understanding Mass Interactions in Online Sports Viewing: Chatting Motives and Usage Patterns',
  //   authors: ['Minsam Ko', 'Seungwoo Choi', 'Joonwon Lee', 'Uichin Lee', 'Aviv Segev'],
  //   full_venue:
  //     'ACM Transactions on Computer-Human Interaction (TOCHI), Volume 23 Issue 1, January 2016',
  // },
  // {
  //   year: 2015,
  //   title: "FamiLync: Facilitating Participatory Parental Mediation of Adolescents'Smartphone Use",
  //   authors: ['Minsam Ko', 'Seungwoo Choi', 'Subin Yang', 'Joonwon Lee', 'Uichin Lee'],
  //   full_venue:
  //     "In Proc. of The 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp'15), Osaka, Japan, Sep. 7-11, 2015",
  // },
  // {
  //   year: 2015,
  //   title: 'Designing Group Fitness Exergames: A Case Study',
  //   authors: ['Woohyeok Choi', 'Joohyun Kim', 'Jeungmin Oh', 'Darren Edge', 'Uichin Lee'],
  //   full_venue:
  //     "In Proc. of The 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing Adjunct Publication (Poster) (UbiComp'15), Osaka, Japan, Sep. 7-11, 2015",
  // },
  // {
  //   year: 2015,
  //   title: 'I-Eng: An Interactive Toy for Second Language Learning',
  //   authors: ['Hayeon Jeong', 'Daniel Pieter Saakes', 'Uichin Lee'],
  //   full_venue:
  //     "In Proc. of The 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing Adjunct Publication (Demo) (UbiComp'15), Osaka, Japan, Sep. 7-11, 2015",
  // },
  // {
  //   year: 2015,
  //   title: 'CrowdColor: Crowdsourcing Color Perceptions Using Mobile Devices',
  //   authors: [
  //     'Jaejeung Kim',
  //     'Sergey Leksikov',
  //     'Punyotai Thamjamrassri',
  //     'Uichin Lee',
  //     'Hyeon-Jeong Suk',
  //   ],
  //   full_venue:
  //     "In Proc. of the 17th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI'15), Copenhagen, Denmark, Aug. 24-27, 2015",
  // },
  // {
  //   year: 2015,
  //   title: 'HydroCast: Pressure Routing for Underwater Sensor Networks',
  //   authors: [
  //     'Youngtae Noh',
  //     'Uichin Lee',
  //     'Saewoom Lee',
  //     'Paul Wang',
  //     'Luiz F. M. Vieira',
  //     'Jun-Hong Cui',
  //     'Mario Gerla',
  //     'Kiseon Kim',
  //   ],
  //   full_venue: 'IEEE Transaction on Vehicular Technology, 2015 VOL. 65, NO. 1, January 2016',
  // },
  // {
  //   year: 2015,
  //   title: 'ScanShot: Detecting Document Capture Moments and Correcting Device Orientation',
  //   authors: ['Jeungmin Oh', 'Woohyeok Choi', 'Joohyun Kim', 'Uichin Lee'],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15), Seoul, Korea, April 18-23, 2015",
  // },
  // {
  //   year: 2015,
  //   title: "Lock n'LoL: Mitigating Smartphone Disturbance in Co-located Social Interactions",
  //   authors: [
  //     'Minsam Ko',
  //     'Chayanin Wong',
  //     'Sunmin Son',
  //     'Euigon Jung',
  //     'Uichin Lee',
  //     'Seungwoo Choi',
  //     'Sungho Jo',
  //     'Min H. Kim',
  //   ],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15 Work in Progress), Seoul, Korea, April 18-23, 2015",
  // },
  // {
  //   year: 2015,
  //   title:
  //     'Every Little Helps: Understanding Donor Behavior in a Crowdfunding Platform for Non-profits',
  //   authors: ['Aejin Song', 'Hong-in Lee', 'Minsam Ko', 'Uichin Lee'],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15 Work in Progress), Seoul, Korea, April 18-23, 2015",
  // },
  // {
  //   year: 2015,
  //   title: 'SocialKeyboard: Proofreading Everyday Writings in Mobile Phones',
  //   authors: ['Jin-woo Lee', 'Joohyun Kim', 'Uichin Lee', 'Jae-Gil Lee'],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15 Work in Progress), Seoul, Korea, April 18-23, 2015",
  // },
  // {
  //   year: 2015,
  //   title:
  //     'NUGU: A Group-based Intervention App for Improving Self-Regulation of Limiting Smartphone Use',
  //   authors: [
  //     'Minsam Ko',
  //     'Subin Yang',
  //     'Joonwon Lee',
  //     'Christian Heizmann',
  //     'Jinyoung Jeong',
  //     'Uichin Lee',
  //     'Daehee Shin',
  //     'Koji Yatani',
  //     'Junehwa Song',
  //     'Kyong-Mee Chung',
  //   ],
  //   full_venue:
  //     "The 18th ACM conference on Computer-Supported Cooperative Work and Social Computing (CSCW'15), Vancouver, BC, Canada, March 14-18, 2015",
  // },
  // {
  //   year: 2015,
  //   title: 'Exploring UX Issues in Quantified Self Technologies',
  //   authors: ['Jeungmin Oh', 'Uichin Lee'],
  //   full_venue:
  //     'In Proc. of Eighth International Conference on Mobile Computing and Ubiquitous Networking (ICMU 2015), Jan 20-22, 2015, Hakodate City, Hokkaido, Japan',
  // },
  // {
  //   year: 2015,
  //   title: 'IoT 응용 설득 컴퓨팅 서비스 개요 및 연구 동향',
  //   authors: ['이의진'],
  //   full_venue: 'JCCI 2015, 4/15-17, 2015',
  // },
  // {
  //   year: 2015,
  //   title: '청소년 자녀의 스마트폰 사용에 관한 부모중재 서비스 디자인 탐구',
  //   authors: ['양수빈', '고민삼', '이의진'],
  //   full_venue: 'HCIK 2015, 12/10-12, 2014',
  // },
  // {
  //   year: 2015,
  //   title:
  //     '활동이론에 근거한 대학원생의 교내 융합연구관련 Q&A 행동 분석 및 시스템 디자인 가이드라인',
  //   authors: ['오태화', '박상근', '이의진', '윤완철'],
  //   full_venue: 'HCIK 2015, 12/10-12, 2014',
  // },
  // {
  //   year: 2015,
  //   title: '수영 환경을 고려한 다중 사용자 운동게임 디자인',
  //   authors: ['최우혁', '이의진'],
  //   full_venue: 'HCIK 2015, 12/10-12, 2014',
  // },
  // {
  //   year: 2014,
  //   title: 'Secure Personal Content Networking over Untrusted Devices',
  //   authors: ['Uichin Lee', 'Josh Joy', 'Youngtae Noh'],
  //   full_venue: 'Wireless Personal Communications, Volume 80, Issue 4, pp 1449-1473, February 2015',
  // },
  // {
  //   year: 2014,
  //   title: 'Methods of locating data spots and networks and user equipment for using the same',
  //   authors: ['Xuan Bao', 'Uichin Lee', 'Ivica Rimac'],
  //   full_venue: 'US Patent US8914041 B2, Dec 16, 2014',
  // },
  // {
  //   year: 2014,
  //   title: 'MobyDick: An Interactive Multi-swimmer Exergame',
  //   authors: [
  //     'Woohyeok Choi',
  //     'Jeungmin Oh',
  //     'Taiwoo Park',
  //     'Sungjun Kang',
  //     'Miri Moon',
  //     'Uichin Lee',
  //     'Inseok Hwang',
  //     'Junehwa Song',
  //   ],
  //   full_venue:
  //     "In Proc. of the 12th ACM Conference on Embedded Networked Sensor Systems (SenSys'14), Memphis, TN, November 3-6, 2014",
  // },
  // {
  //   year: 2014,
  //   title: 'Understanding Localness of Knowledge Sharing: A Study of Naver KiN Here',
  //   authors: ['Sangkeun Park', 'Yongsung Kim', 'Uichin Lee', 'Mark Ackerman'],
  //   full_venue:
  //     "In Proc. of the 16th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI'14), Toronto, Canada, Sept. 23-26, 2014",
  // },
  // {
  //   year: 2014,
  //   title:
  //     'PlaceWalker: An Energy-efficient Place Logging Method that Considers Kinematics of Normal Human Walking',
  //   authors: ['Dae-Ki Cho', 'Uichin Lee', 'Youngtae Noh', 'Taiwoo Park', 'Junehwa Song'],
  //   full_venue: 'Pervasive and Mobile Computing, Volume 19, May 2015, Pages 24–36 [PDF]',
  // },
  // {
  //   year: 2014,
  //   title: 'Human Factors of Speed-based Exergame Controllers',
  //   authors: [
  //     'Taiwoo Park',
  //     'Uichin Lee',
  //     'I. Scott MacKenzie',
  //     'Miri Moon',
  //     'Inseok Hwang',
  //     'Junehwa Song',
  //   ],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'14), Toronto, Canada, April 26-May 1, 2014",
  // },
  // {
  //   year: 2014,
  //   title:
  //     'Hooked on Smartphones: An Exploratory Study on Smartphone Overuse among College Students',
  //   authors: [
  //     'Uichin Lee',
  //     'Joonwon Lee',
  //     'Minsam Ko',
  //     'Changhun Lee',
  //     'Yuhwan Kim',
  //     'Subin Yang',
  //     'Koji Yatani',
  //     'Gahgene Gweon',
  //     'Kyong-Mee Chung Junehwa Song',
  //   ],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'14), Toronto, Canada, April 26-May 1, 2014",
  // },
  // {
  //   year: 2014,
  //   title:
  //     'Supporting Temporary Non-Use of Smartphones Refusing, Limiting, Departing: Why We Should Study Technology Non-use',
  //   authors: ['Uichin Lee', 'Subin Yang', 'Minsam Ko', 'Joonwon Lee'],
  //   full_venue: 'In conjunction with CHI 2014, Toronto, Canada, April 26-May 1, 2014',
  // },
  // {
  //   year: 2014,
  //   title: 'Motives for Mass Interactions in Online Sports Viewing',
  //   authors: [
  //     'Minsam Ko',
  //     'Seung-woo Choi',
  //     'Joonwon Lee',
  //     'Subin Yang',
  //     'Uichin Lee',
  //     'Aviv Segev',
  //     'Junehwa Song',
  //   ],
  //   full_venue:
  //     "In Proc. of the World-Wide Web Conference (WWW'14), Seoul, Korea, April 7-11, 2014 (Poster)",
  // },
  // {
  //   year: 2014,
  //   title: 'Internet of Vehicles: From Intelligent Grid to Autonomous Cars and Vehicular Clouds',
  //   authors: ['Mario Gerla', 'Eun-Kyu Lee', 'Giovanni Pau', 'Uichin Lee'],
  //   full_venue: "IEEE World Forum on Internet of Things (WF-IoT'14), Seoul, Korea, 6-8 March 2014",
  // },
  // {
  //   year: 2014,
  //   title:
  //     'DOTS: A Propagation Delay-aware Opportunistic MAC Protocol for Mobile Underwater Networks',
  //   authors: [
  //     'Youngtae Noh',
  //     'Uichin Lee',
  //     'Seongwon Han',
  //     'Paul Wang',
  //     'Dustin Torres',
  //     'Jinwhan Kim',
  //     'Mario Gerla',
  //   ],
  //   full_venue: 'IEEE Transaction on Mobile Computing, Vol. 13, No. 4, April 2014',
  // },
  // {
  //   year: 2014,
  //   title: '스마트폰 과도사용 중재 모바일 앱 분석: 중재 방법 관점',
  //   authors: ['고민삼', '이준원', '양수빈', '이의진'],
  //   full_venue: 'HCI Korea, Feb. 2014',
  // },
  // {
  //   year: 2014,
  //   title: '다중 스마트 단말 협업 기반 모바일 어플리케이션 및 UX 디자인 고찰',
  //   authors: ['강성준', '신대희', '명미라', '이의진', '박준성'],
  //   full_venue: 'HCI Korea, Feb. 2014',
  // },
  // {
  //   year: 2013,
  //   title:
  //     'Understanding Processing Overheads of Network Coding Based Content Distribution in VANETs',
  //   authors: ['Uichin Lee', 'Seung-Hoon Lee', 'Kang-Won Lee', 'Mario Gerla'],
  //   full_venue:
  //     'IEEE Transactions on Parallel and Distributed Systems (TPDS), Nov. 2013 (vol. 24 no. 11)',
  // },
  // {
  //   year: 2013,
  //   title:
  //     'Booming Up the Long Tails: Discovering Potentially Contributive Users in Community-based Question Answering Services',
  //   authors: ['Juyup Sung', 'Jae-Gil Lee', 'Uichin Lee'],
  //   full_venue: 'AAAI ICWSM-13 (Best Paper Award), Boston, USA, July 2013',
  // },
  // {
  //   year: 2013,
  //   title:
  //     'SocioPhone: Everyday Face-to-Face Interaction Monitoring Platform Using Multi-Phone Sensor Fusion',
  //   authors: [
  //     'Youngki Lee',
  //     'Chulhong Min',
  //     'Chanyou Hwang',
  //     'Jaeung Lee',
  //     'Inseok Hwang',
  //     'Younghyun Ju',
  //     'Chungkuk Yoo',
  //     'Miri Moon',
  //     'Uichin Lee',
  //     'Junehwa Song',
  //   ],
  //   full_venue: "ACM MobiSys'13, Taipei, Taiwan, June 2013",
  // },
  // {
  //   year: 2013,
  //   title: 'Analyzing Crowd Workers in Mobile Pay-for-Answer Q&A',
  //   authors: ['Uichin Lee', 'Jihyoung Kim', 'Eunhee Yi', 'Juyup Sung', 'Mario Gerla'],
  //   full_venue:
  //     "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'13), Paris, April 27-May 2, 2013",
  // },
  // {
  //   year: 2013,
  //   title: 'Facilitating Developer-User Interactions with Mobile App Review Digests',
  //   authors: ['Jeungmin Oh', 'Daehoon Kim', 'Uichin Lee', 'Jae-Gil Lee', 'Junehwa Song'],
  //   full_venue: "ACM CHI'13 Work-in-Progress, Paris, April 27-May 2, 2013",
  // },
  // {
  //   year: 2013,
  //   title:
  //     'DataSpotting: Exploiting Naturally Clustered Mobile Devices to Offload Cellular Traffic',
  //   authors: ['Xuan Bao', 'Yin Lin', 'Uichin Lee', 'Ivica Rimac', 'Romit Roy Choudhury'],
  //   full_venue: 'IEEE INFOCOM 2013 (mini-conf), Turin, Italy, April 14-19, 2013',
  // },
  // {
  //   year: 2013,
  //   title: 'M-FAMA: A Multi-session MAC Protocol for Reliable Underwater Acoustic Streams,',
  //   authors: ['Seongwon Han', 'Youngtae Noh', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: 'IEEE INFOCOM 2013, Turin, Italy, April 14-19, 2013',
  // },
  // {
  //   year: 2013,
  //   title:
  //     'CLIPS: Infrastructure-free Collaborative Indoor Positioning Scheme for Time-critical Team Operations',
  //   authors: [
  //     'Youngtae Noh',
  //     'Hirozumi Yamaguchi',
  //     'Uichin Lee',
  //     'Prerna Vij',
  //     'Joshua Joy',
  //     'Mario Gerla',
  //   ],
  //   full_venue: 'IEEE PerCom 2013, San Diego, CA, March 18-22, 2013',
  // },
  // {
  //   year: 2013,
  //   title: 'ExerSync: Facilitating Interpersonal Synchrony in Social Exergames',
  //   authors: [
  //     'Taiwoo Park',
  //     'Uichin Lee',
  //     'Bupjae Lee',
  //     'Haechan Lee',
  //     'Sanghun Son',
  //     'Seokyoung Song',
  //     'Junehwa Song',
  //   ],
  //   full_venue:
  //     'The 16th ACM Conference on Computer Supported Cooperative Work and Social Computing (CSCW 2013), San Antonio, Texas, USA, Feb. 2013',
  // },
  // {
  //   year: 2013,
  //   title: 'Mobile Q&A: Beyond Text-only Q&A and Privacy Concerns',
  //   authors: ['Uichin Lee', 'Eunhee Yi', 'Minsam Ko'],
  //   full_venue:
  //     'CSCW 2013 Workshop on Social Media Question Asking, San Antonio, Texas, USA, Feb. 2013',
  // },
  // {
  //   year: 2013,
  //   title: 'Dungeons & Swimmers: Designing an Interactive Exergame for Swimming,',
  //   authors: [
  //     'Haechan Lee',
  //     'Miri Moon',
  //     'Taiwoo Park',
  //     'Inseok Hwang',
  //     'Uichin Lee',
  //     'Junehwa Song',
  //   ],
  //   full_venue: "ACM UbiComp'13 (Demo) Zurich, Switzerland, Sep. 2013",
  // },
  // {
  //   year: 2012,
  //   title: 'Exerpdf: Enabling Pervasive Social Exergames with Heterogeneous Exercise Devices',
  //   authors: ['Park et al.'],
  //   full_venue:
  //     'The 10th International Conference on Mobile Systems, Applications and Services (Mobisys), United Kingdom, June 2012',
  // },
  // {
  //   year: 2012,
  //   title: 'Understanding Mobile Q&A Usage: An Exploratory Study',
  //   authors: ['Uichin Lee', 'Hyanghong Kang', 'Eunhee Yi', 'Mun Y. Yi', 'Jussi Kantola'],
  //   full_venue:
  //     'ACM SIGCHI Conference on Human Factors in Computing Systems (CHI), Austin Texas, May 2012',
  // },
  // {
  //   year: 2012,
  //   title: 'VAPR: Void Aware Pressure Routing for Underwater Sensor Networks',
  //   authors: ['Youngtae Noh', 'Uichin Lee', 'Paul Wang', 'Brian Sung Chul Choi', 'Mario Gerla'],
  //   full_venue: 'IEEE Transaction on Mobile Computing, Volume 12, Issue 5, Pages 895-908, May 2013',
  // },
  // {
  //   year: 2012,
  //   title: 'Editorial - Special Issue: Wide-Scale Vehicular Sensor Networks and Mobile Sensing',
  //   authors: ['Paolo Bellavista', 'Mario Gerla', 'Hariharan Krishnan', 'Uichin Lee'],
  //   full_venue: 'Pervasive and Mobile Computing, Volume 8, Issue 2, Pages 165-166, May 2012',
  // },
  // {
  //   year: 2011,
  //   title:
  //     'Emerging Ubiquitous Knowledge Services: From Mobile Sensing to Ubiquitous Crowdsourcing and Beyond',
  //   authors: ['Uichin Lee', 'Howon Lee', 'Bang Chul Jung', 'Junehwa Song'],
  //   full_venue: 'In Knowledge Service Engineering Handbook, CRC Press 2011 (bookchapter)',
  // },
  // {
  //   year: 2011,
  //   title: 'GeoServ: A Distributed Urban Sensing Platform',
  //   authors: ['Jong Hoon Ahn', 'Uichin Lee', 'Hyun Jin Moon'],
  //   full_venue:
  //     "IEEE/ACM International Symposium on Cluster, Cloud, and Grid Computing (CCGrid'11), New Port Beach, CA USA, May 2011 (Best Paper Award)",
  // },
  // {
  //   year: 2011,
  //   title: 'SewerSnort: A Drifting Sensor for In-situ Wastewater Collection System Gas Monitoring',
  //   authors: [
  //     'Jung Soo Lim',
  //     'Jihyoung Kim',
  //     'Jonathan Friedman',
  //     'Uichin Lee',
  //     'Luiz Vieira',
  //     'Diego Rosso',
  //     'Mario Gerla',
  //     'Mani B Srivastava',
  //   ],
  //   full_venue:
  //     'Ad Hoc Networks Journal (Elsevier), Special Issue on Challenged Environments, Volume 11, Issue 4, Pages 1456–1471, June 2013',
  // },
  // {
  //   year: 2011,
  //   title: 'Toward Energy Efficient Content Dissemination',
  //   authors: ['Uichin Lee', 'Ivica Rimac', 'Daniel Kilper', 'Volker Hilt'],
  //   full_venue: 'IEEE Network, Volume 25 Issue 2 pp. 14-19, March/April 2011 (Figure 6 was updated)',
  // },
  // {
  //   year: 2011,
  //   title: 'On the Design of Content-Centric MANETs',
  //   authors: ['Matteo Varvello', 'Ivica Rimac', 'Uichin Lee', 'Lloyd Greenwald', 'Volker Hilt'],
  //   full_venue: "WONS'11, Bardonecchia, Italy, Jan. 2011",
  // },
  // {
  //   year: 2010,
  //   title:
  //     'DOTS: A Propagation Delay-aware Opportunistic MAC Protocol for Underwater Sensor Networks',
  //   authors: ['Youngtae Noh', 'Paul Wang', 'Uichin Lee', 'Dustin Torres', 'Mario Gerla'],
  //   full_venue: "IEEE ICNP'10, Kyoto, Japan, Oct. 2010",
  // },
  // {
  //   year: 2010,
  //   title: 'VAPR: Void Aware Pressure Routing Protocol',
  //   authors: ['Youngtae Noh', 'Paul Wang', 'Uichin Lee', 'Mario Gerla.'],
  //   full_venue: "ACM WuWNet'10, Massachusetts, USA, Sep. 2010 (poster)",
  // },
  // {
  //   year: 2010,
  //   title: 'Geo-Opportunistic Routing for Vehicular Networks',
  //   authors: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: 'IEEE Communications Magazine, Vol. 48, No. 5. pp. 164-170, May 2010',
  // },
  // {
  //   year: 2010,
  //   title: 'Trace-based Evaluation of Rate Adaptation Schemes in Vehicular Environments',
  //   authors: ['Kevin C. Lee', 'Juan M. Navarro', 'Tin Y. Chong', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: ", WiVeC'10, Taipei, Taiwan, May 2010",
  // },
  // {
  //   year: 2010,
  //   title: 'Greening the Internet with Content Centric Networking',
  //   authors: ['Uichin Lee', 'Ivica Rimac', 'Volker Hilt'],
  //   full_venue:
  //     "ACM e-Energy'10, Passau, Germany, Apr. 2010 [PDF][PPT] IEEE Network Magazine Version (with updated plots)",
  // },
  // {
  //   year: 2010,
  //   title: 'AutoGait: A Mobile Platform that Accurately Estimates the Distance Walked',
  //   authors: ['Dae-Ki Cho', 'Min Mun', 'Uichin Lee', 'William J. Kaiser', 'Mario Gerla'],
  //   full_venue: "IEEE PerCom'10, Mannheim, Germany, Mar. 29 - Apr. 2, 2010",
  // },
  // {
  //   year: 2010,
  //   title: 'Phero-Trail: a Bio-inspired Location Service for Mobile Underwater Sensors',
  //   authors: ['Luiz F. M. Vieira', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue:
  //     'IEEE Journal on Selected Areas in Communications, Vol. 28, No. 4, pp. 553-563 May 2010',
  // },
  // {
  //   year: 2010,
  //   title: 'Vehicular Communications: Emergency Video Streams and Network Coding',
  //   authors: ['Joon-Sang Park', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue:
  //     'Journal of Internet Services and Applications (JISA), Volume 1, Number 1, 57-68, March 2010.',
  // },
  // {
  //   year: 2010,
  //   title: 'Pressure Routing for Underwater Sensor Networks',
  //   authors: [
  //     'Uichin Lee',
  //     'Paul Wang',
  //     'Youngtae Noh',
  //     'Luiz F. M. Vieira',
  //     'Mario Gerla',
  //     'Jun-Hong Cui',
  //   ],
  //   full_venue: "IEEE INFOCOM'10, San Diego, Mar. 2010",
  // },
  // {
  //   year: 2010,
  //   title: 'A Survey of Urban Vehicular Sensing Platforms',
  //   authors: ['Uichin Lee', 'Mario Gerla'],
  //   full_venue: 'Elsevier Computer Networks, Volume 54, Issue 4, pp. 527-544, Mar. 2010',
  // },
  // {
  //   year: 2010,
  //   title: 'FleaNet: A Virtual Market Place on Vehicular Networks',
  //   authors: ['Uichin Lee', 'Jiyeon Lee', 'Joon-Sang Park', 'Mario Gerla'],
  //   full_venue:
  //     'IEEE Transaction on Vehicular Technology, Volume 59, Number 1, pp. 344-355, Jan. 2010',
  // },
  // {
  //   year: 2010,
  //   title: 'P2P Content Distribution to Mobile Bluetooth Users',
  //   authors: ['Uichin Lee', 'Sewook Jung', 'Alexander Chang', 'Dae-Ki Cho', 'Mario Gerla'],
  //   full_venue:
  //     'IEEE Transaction on Vehicular Technology, Volume 59, Number 1, pp. 356-367, Jan. 2010',
  // },
  // {
  //   year: 2009,
  //   title: 'Scaling Properties of Delay Tolerant Networks with Correlated Motion Patterns',
  //   authors: ['Uichin Lee', 'Soon Young Oh', 'Kang-Won Lee', 'Mario Gerla'],
  //   full_venue:
  //     'ACM MobiCom Workshop on Challenged Networks (Chants 2009), Beijing, China - September 25, 2009',
  // },
  // {
  //   year: 2009,
  //   title: 'RelayCast: Scalable Multicast Routing in Delay Tolerant Coalition Networks',
  //   authors: ['Uichin Lee', 'Soon Young Oh', 'Kang-Won Lee', 'Mario Gerla'],
  //   full_venue: 'Annual Conference of ITA 2009 (ACITA 09), Adelphi, MD, September. 2009',
  // },
  // {
  //   year: 2009,
  //   title: 'SewerSnort: A Drifting Sensor for In-situ Sewer Gas Monitoring',
  //   authors: [
  //     'Jihyoung Kim',
  //     'Jung Soo Lim',
  //     'Jonathan Friedman',
  //     'Uichin Lee',
  //     'Luiz Vieira',
  //     'Diego Rosso',
  //     'Mario Gerla',
  //     'Mani B Srivastava',
  //   ],
  //   full_venue: "IEEE SECON'09, Rome, Italy, June, 2009",
  // },
  // {
  //   year: 2009,
  //   title: 'TO-GO: TOpology-assist Geo-Opportunistic Routing in Urban Vehicular Grids',
  //   authors: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: "WONS'09, Snowbird, Utah, Feb., 2009",
  // },
  // {
  //   year: 2009,
  //   title: 'Survey of Routing Protocols in Vehicular Ad Hoc Networks',
  //   authors: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla.'],
  //   full_venue:
  //     'Advances in Vehicular Ad-Hoc Networks: Developments and Challenges, IGI Global (Book Chapter), Oct, 2009',
  // },
  // {
  //   year: 2009,
  //   title: 'Bio-inspired Multi-Agent Data Harvesting in a Proactive Urban Monitoring Environment',
  //   authors: [
  //     'Uichin Lee',
  //     'Eugenio Magistretti',
  //     'Mario Gerla',
  //     'Paolo Bellavista',
  //     'Pietro Lio',
  //     'Kang-Won Lee',
  //   ],
  //   full_venue:
  //     'Ad Hoc Networks Journal (Elsevier), Special Issue on Bio-Inspired Computing and Communication in Wireless Ad Hoc and Sensor Networks, Volume 7, Issue 4, pp. 725-741, June 2009',
  // },
  // {
  //   year: 2009,
  //   title: 'Dissemination and Harvesting of Urban Data using Vehicular Sensor Platforms',
  //   authors: [
  //     'Uichin Lee',
  //     'Eugenio Magistretti',
  //     'Mario Gerla',
  //     'Paolo Bellavista',
  //     'Antonio Corradi',
  //   ],
  //   full_venue:
  //     'IEEE Transaction on Vehicular Technology, Volume 58, Issue 2, pp. 882-901, Feb. 2009',
  // },
  // {
  //   year: 2009,
  //   title: 'Emerging Vehicular Applications',
  //   authors: ['Uichin Lee', 'Ryan Cheung', 'Mario Gerla'],
  //   full_venue:
  //     'Vehicular Networks: From Theory to Practice, CRC Press, Taylor & Francis Group, 2009',
  // },
  // {
  //   year: 2008,
  //   title: 'RelayCast: Scalable Multicast Routing in Delay Tolerant Networks',
  //   authors: ['Uichin Lee', 'Soon Young Oh', 'Kang-Won Lee', 'Mario Gerla'],
  //   full_venue: "ICNP'08, Orlando, Florida, Oct., 2008",
  // },
  // {
  //   year: 2008,
  //   title: 'Phero-Trail: a Bio-inspired Location Service for Mobile Underwater Sensors',
  //   authors: ['Luiz F. M. Vieira', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: "WUWNet'08, San Francisco, California, USA Sept. 15, 2008",
  // },
  // {
  //   year: 2008,
  //   title: 'Bio-inspired Multi-Agent Collaboration for Urban Monitoring Applications',
  //   authors: [
  //     'Uichin Lee',
  //     'Eugenio Magistretti',
  //     'Mario Gerla',
  //     'Paolo Bellavista',
  //     'Pietro Lio',
  //     'Kang-Won Lee',
  //   ],
  //   full_venue: 'BIOWIRE 2007, LNCS 5151, pp. 204-216, 2008',
  // },
  // {
  //   year: 2008,
  //   title:
  //     'Content Distribution in VANETs using Network Coding: The Effect of Disk I/O and Processing O/H',
  //   authors: ['Seung-Hoon Lee', 'Uichin Lee', 'Kang-Won Lee', 'Mario Gerla'],
  //   full_venue: "IEEE SECON'08, San Francisco, CA, June 2008",
  // },
  // {
  //   year: 2008,
  //   title: 'Efficient Peer-to-peer File Sharing using Network Coding in MANET',
  //   authors: [
  //     'Uichin Lee',
  //     'Joon-Sang Park',
  //     'Seung-Hoon Lee',
  //     'Won W. Ro',
  //     'Giovanni Pau',
  //     'Mario Gerla',
  //   ],
  //   full_venue:
  //     'Journal of Communications and Networks (JCN), Special Issue on Network Coding, Volume 10, Issue 4, pp. 422-429, Dec. 2008',
  // },
  // {
  //   year: 2008,
  //   title:
  //     'Delay Analysis of Car-to-Car Reliable Data Delivery Strategies based on Data Muling with Network Coding',
  //   authors: [
  //     'Joon-Sang Park',
  //     'Uichin Lee',
  //     'Soon Y. Oh',
  //     'Mario Gerla',
  //     'Desmond S. Lun',
  //     'Won W. Ro',
  //     'Joonseok Park',
  //   ],
  //   full_venue:
  //     'IEICE Transactions on Information and Systems, Volume E91-D, Issue 10, pp. 2524-2527, Oct. 2008',
  // },
  // {
  //   year: 2008,
  //   title: 'Tapping Vehicle Sensors for Homeland Security',
  //   authors: ['Mario Gerla', 'Uichin Lee'],
  //   full_venue: 'Homeland Security Book, Artech House, 2008',
  // },
  // {
  //   year: 2007,
  //   title:
  //     'Enhanced Perimeter Routing for Geographic Forwarding Protocols in Urban Vehicular Scenarios',
  //   authors: ['Kevin C. Lee', 'Jerome Haerri', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: "In AutoNet'07, Washington, D.C., Nov. 2007.",
  // },
  // {
  //   year: 2007,
  //   title:
  //     'Standard Integration of Sensing and Opportunistic Diffusion for Urban Monitoring in Vehicular Sensor Networks: the MobEyes Architecture',
  //   authors: ['P. Bellavista', 'E. Magistretti', 'U. Lee', 'and M. Gerla.'],
  //   full_venue: 'In IEEE ISIE, Vigo, Spain, Jun. 2007.',
  // },
  // {
  //   year: 2007,
  //   title: 'BlueTorrent: Cooperative Content Sharing for Bluetooth Users',
  //   authors: ['Sewook Jung', 'Uichin Lee', 'Alexander Chang', 'Dae-Ki Cho', 'Mario Gerla'],
  //   full_venue:
  //     "In IEEE PerCom'07, White Plains, NY, March 19-23, 2007 (Mark Weiser Best Paper Award)",
  // },
  // {
  //   year: 2007,
  //   title:
  //     'A Mobile Delay-tolerant Approach to Long-term Energy-efficient Underwater Sensor Networking',
  //   authors: [
  //     'Eugenio Magistretti',
  //     'Jiejun Kong',
  //     'Uichin Lee',
  //     'Mario Gerla',
  //     'Paolo Bellavista',
  //     'Antonio Corradi',
  //   ],
  //   full_venue:
  //     'IEEE Wireless Communications & Networking Conference (WCNC), Hong Kong, March 11-15, 2007.',
  // },
  // {
  //   year: 2007,
  //   title: 'BlueTorrent: Cooperative Content Sharing for Bluetooth Users',
  //   authors: ['Sewook Jung', 'Uichin Lee', 'Alexander Chang', 'Dae-Ki Cho', 'Mario Gerla', ''],
  //   full_venue: 'Pervasive and Mobile Computing, Volume 3, Issue 6, pp. 609-634, Dec. 2007',
  // },
  // {
  //   year: 2007,
  //   title:
  //     'Time-critical Underwater Sensor Diffusion with No Proactive Exchanges and Negligible Reactive Floods',
  //   authors: ['Uichin Lee', 'Jiejun Kong', 'Eugenio Magistretti', 'Joon-Sang Park', 'Mario Gerla'],
  //   full_venue:
  //     'Ad Hoc Networks Journal (Elsevier), Special Issue on Recent Advances in Wireless Sensor Networks, Volume 5, Issue 6, pp. 943-958, Aug. 2007',
  // },
  // {
  //   year: 2006,
  //   title: 'MobEyes: Smart Mobs for Urban Monitoring with a Vehicular Sensor Network',
  //   authors: [
  //     'Uichin Lee',
  //     'Eugenio Magistretti',
  //     'Biao Zhou',
  //     'Mario Gerla',
  //     'Paolo Bellavista',
  //     'Antonio Corradi',
  //   ],
  //   full_venue: 'IEEE Wireless Communications, Volume 13, Issue 5, pp. 52-57, Sep. 2006.',
  // },
  // {
  //   year: 2006,
  //   title: 'CodeTorrent: Content Distribution using Network Coding in VANETs',
  //   authors: ['Uichin Lee', 'Joon-Sang Park', 'Joseph Yeh', 'Giovanni Pau', 'Mario Gerla'],
  //   full_venue:
  //     "The First International Workshop on Decentralized Resource Sharing in Mobile Computing and Networking (MobiShare'06), Los Angeles, CA, September 2006",
  // },
  // {
  //   year: 2006,
  //   title: 'Vehicular Grid Communications: The Role of the Internet Infrastructure',
  //   authors: [
  //     'Mario Gerla',
  //     'Biao Zhou',
  //     'Yeng-Zhong Lee',
  //     'Fabio Soldo',
  //     'Uichin Lee',
  //     'Gustavo Marfia',
  //     '',
  //   ],
  //   full_venue: 'Wireless Internet Conference (WICON 2006) , Boston, NY, August 2006.',
  // },
  // {
  //   year: 2006,
  //   title: 'FleaNet: A Virtual Market Place on Vehicular Networks',
  //   authors: ['Uichin Lee', 'Joon-Sang Park', 'Eyal Amir', 'Mario Gerla.'],
  //   full_venue:
  //     'The Second International Workshop on Vehicle-to-Vehicle Communications 2006(V2VCOM 2006), pp. 1-8, San Jose, CA, July 2006.',
  // },
  // {
  //   year: 2006,
  //   title:
  //     'Time-critical Underwater Sensor Diffusion with No Proactive Exchanges and Negligible Reactive Floods',
  //   authors: [
  //     'Uichin Lee',
  //     'Jiejun Kong',
  //     'Joon-Sang Park',
  //     'Eugenio Magistretti',
  //     'Mario Gerla',
  //     '',
  //   ],
  //   full_venue:
  //     "IEEE Symposium on Computers and Communications (ISCC'06), Sardinia, Italy, June, 2006",
  // },
  // {
  //   year: 2006,
  //   title: 'Efficient Data Harvesting in Mobile Sensor Platforms',
  //   authors: [
  //     'Uichin Lee',
  //     'Eugenio Magistretti',
  //     'Biao Zhou',
  //     'Mario Gerla',
  //     'Paolo Bellavista',
  //     'Antonio Corradi',
  //   ],
  //   full_venue:
  //     'Second IEEE International Workshop on Sensor Networks and Systems for Pervasive Computing (PerSeNS 2006), Pisa, Italy, March, 2006',
  // },
  // {
  //   year: 2006,
  //   title: 'Understanding Pollution Dynamics in P2P File Sharing',
  //   authors: ['Uichin Lee', 'Min Choi', 'Junghoo Cho', 'Medy. Y. Sanadidi', 'Mario Gerla'],
  //   full_venue:
  //     "The 5th International Workshop on Peer-to-Peer Systems (IPTPS'06), Santa Babara, USA, February, 2006.",
  // },
  // {
  //   year: 2005,
  //   title: 'Flow Based Dynamic Load Balancing for Passive Network Monitoring',
  //   authors: ['Uichin Lee', 'Joon-Sang Park', 'M. Y. Sanadidi', 'M. Gerla'],
  //   full_venue:
  //     'In Proc. of Communications and Computer Networks (CCN 2005), Marina Del Rey, USA, October 2005.',
  // },
  // {
  //   year: 2005,
  //   title: 'Automatic Identification of User Goals in Web Search',
  //   full_venue: 'In Proc. of the World-Wide Web Conference (WWW), Chiba, Japan, May 2005.',
  //   authors: ['Uichin Lee', 'Zhenyu Liu', 'Junghoo Cho'],
  // },
  // {
  //   year: 2009,
  //   title: 'CodeCast: Network Coding Based Multicast in MANETs',
  //   authors: ['Chien-Chia Chen', 'Chieh-Ning Lien', 'Uichin Lee', 'Soon Y. Oh', 'and Mario Gerla'],
  //   full_venue: "HotMobile'09(Demo)",
  // },
  // {
  //   year: 2008,
  //   title: 'TO-GO: TOpology-assist Geo-Opportunistic Routing in Urban Vehicular Grids',
  //   authors: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla', ''],
  //   full_venue: "ICNP'08 (Poster)",
  // },
  // {
  //   year: 2008,
  //   title:
  //     'Proof-of-Relevance: Filtering False Data via Authentic Consensus in Vehicle Ad-hoc Networks',
  //   authors: ['Zhen Cao', 'Jiejun Kong', 'Uichin Lee', 'Mario Gerla', 'Zhong Chen'],
  //   full_venue: "MOVE'08 in conjunction with INFOCOM'08",
  // },
  // {
  //   year: 2007,
  //   title:
  //     'Understanding the Capacity and Delay Scaling Laws of Delay Tolerant Networks: A Unified Approach',
  //   authors: ['Uichin Lee', 'Kang-Won Lee', 'Soon-Young Oh', 'Mario Gerla'],
  //   full_venue: 'UCLA Technical Report: TR-070020 [PDF]',
  // },
  // {
  //   year: 2007,
  //   title: 'First Experience with CarTorrent in a Real Vehicular Ad Hoc Network Testbed',
  //   authors: ['Kevin C. Lee', 'Seung-Hoon Lee', 'Ryan Cheung', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: "MOVE'07 in conjunction with INFOCOM'07",
  // },
  // {
  //   year: 2006,
  //   title: 'Analysis of Aloha Protocols for Underwater Acoustic Sensor Networks',
  //   authors: ['Luiz Filipe M. Vieira', 'Jiejun Kong', 'Uichin Lee', 'Mario Gerla'],
  //   full_venue: "WUWNet'06, Los Angeles, CA, Sept. 24, 2006",
  // },
  // {
  //   year: 2005,
  //   title: 'Emergency Related Video Streaming in VANETs using Network Coding',
  //   authors: ['Joon-Sang Park', 'Uichin Lee', 'Soon Young Oh', 'Mario Gerla', 'Desmond Lun'],
  //   full_venue:
  //     'Third ACM International Workshop on Vehicular Ad Hoc Networks - VANET 2006 Poster Session CSD-TR070016',
  // },
]
