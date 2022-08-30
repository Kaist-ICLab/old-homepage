const publicationsData = [
  {
    YEAR: 2022,
    TITLE:
      'Toward Data-Driven Digital Therapeutics Analytics: Literature Review and Research Directions',
    AUTHORS: [
      'Uichin Lee',
      'Gyuwon Jung',
      'Eunyeol Ma',
      'Jin San Kim',
      'Heepyung Kim',
      'Jumabek Alikhanov',
      'Youngtae Noh',
      'Heeyoung Kim',
    ],
    PUBLISHED: 'IEEE/CAA Journal of Automatica Sinica',
    LINK: 'https://arxiv.org/pdf/2205.01851.pdf',
  },
  {
    YEAR: 2022,
    TITLE:
      'You Are Not Alone: How Trending Stress Topics Brought #Awareness and #Resonance on Campus',
    AUTHORS: [
      'Ryuhaerang Choi',
      'Chanwoo Yun',
      'Hyunsung Cho',
      'Hwajung Hong',
      'Uichin Lee',
      'Sung-Ju Lee',
    ],
    PUBLISHED:
      "Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Volume 6, CSCW2, November'22",
  },
  {
    YEAR: 2022,
    TITLE: 'Social-Spiritual Face: Designing Social Reading Support for Spiritual Well-being',
    AUTHORS: [
      'Inyeop Kim',
      'Minsam Ko',
      'Joonyoung Park',
      'Sung Wook Moon',
      'Gyuwon Jung',
      'Youn-kyung Lim',
      'Uichin Lee',
    ],
    PUBLISHED:
      "Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Volume 6, CSCW2, November'22",
  },
  {
    YEAR: 2022,
    TITLE: 'Editorial: Adverse Health Consequences of Excessive Smartphone Usage',
    AUTHORS: ['Uichin Lee and Paul H. Lee'],
    PUBLISHED: 'Volume II, Frontiers Public Health, 09 August 2022 Sec. Digital Public Health',
  },
  {
    YEAR: 2022,
    TITLE: 'A Systematic Survey on Android API Usage for Data-Driven Analytics with Smartphones,',
    AUTHORS: ['Hansoo Lee', 'Joonyoung Park', 'Uichin Lee'],
    PUBLISHED: 'ACM Computing Surveys, Volume x, Issue x, 2022 (to appear)',
  },
  {
    YEAR: 2022,
    TITLE:
      'Understanding Perceived Benefits and Privacy Risks in Open Dataset Collection for Mobile Affective Computing',
    AUTHORS: ['Hyunsoo Lee', 'Soowon Kang', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2022 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 6, Issue 2, July 2022',
  },
  {
    YEAR: 2022,
    TITLE:
      'CSI:DeSpy- Enabling Effortless Spy Camera Detection via Passive Sensing of User Activities and Bitrate Variations',
    AUTHORS: ['Muhammad Salman', 'Mr. Nguyen Dao', 'Uichin Lee', 'Youngtae Noh'],
    PUBLISHED:
      'ACM Ubicomp 2022 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 6, Number 2, May 2022',
  },
  {
    YEAR: 2022,
    TITLE:
      'CareMouse: An Interactive Mouse System that Supports Wrist Stretching Exercises in the Workplace',
    AUTHORS: ['Gyuwon Jung', 'Youwon Shin', 'Jieun Lim', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2022 (Late Breaking Work), New Orleans, LA, USA, April 30–May 5 2022',
  },
  {
    YEAR: 2022,
    TITLE: 'Understanding Emotion Changes in Mobile Experience Sampling',
    AUTHORS: ['Soowon Kang', 'Cheul Young Park', 'Narae Cha', 'Auk Kim', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2022, New Orleans, LA, USA, April 30–May 5 2022',
  },
  {
    YEAR: 2022,
    TITLE:
      "It’s not wrong, but I'm quite disappointed: Toward an Inclusive Algorithmic Experience for Content Creators with Disabilities",
    AUTHORS: ['Dasom Choi', 'Uichin Lee', 'Hwajung Hong'],
    PUBLISHED: 'ACM CHI 2022, New Orleans, LA, USA, April 30–May 5 2022',
  },
  {
    YEAR: 2022,
    TITLE: 'Privacy-Aware Affective State Recognition from Visual Data',
    AUTHORS: [
      'M Sami Zitouni',
      'Peter Lee',
      'Uichin Lee',
      'Leontios Hadjileontiadis',
      'Ahsan Khandoker PUBLISHED: IEEE Access 07 April 2022',
    ],
  },
  {
    YEAR: 2022,
    TITLE:
      'Successfully implementing digital health to ensure future global health security during pandemics: a consensus statement',
    AUTHORS: [
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
    PUBLISHED: 'JAMA Network Open 2022;5(2):e220214',
  },
  {
    YEAR: 2021,
    TITLE:
      'Emotion Recognition in the Wild from Long-term Heart Rate Recording using Wearable Sensor and Deep Learning Ensemble Classification',
    AUTHORS: [
      'Sara A Nasrat',
      'Uichin Lee',
      'M Sami Zitouni',
      'Ahsan H Khandoker',
      'Soowon Kang',
      'Herbert F Jelinek',
    ],
    PUBLISHED:
      'BIBM 2021, 2021 IEEE International Conference on Bioinformatics and Biomedicine (BIBM), 2021/12/9',
  },
  {
    YEAR: 2021,
    TITLE:
      'Arousal-Valence Classification from Peripheral Physiological Signals Using Long Short-Term Memory Networks',
    AUTHORS: [
      'M Sami Zitouni',
      'Cheul Young Park',
      'Uichin Lee',
      'Leontios Hadjileontiadis',
      'Ahsan Khandoker',
    ],
    PUBLISHED:
      'EMBC 2021, 2021 43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC), 2021/11/1 [PDF]',
  },
  {
    YEAR: 2021,
    TITLE: 'Dynamic Consent for Sensor-Driven Research',
    AUTHORS: ['Hyunsoo Lee', 'Uichin Lee'],
    PUBLISHED:
      'ICMU 2021, The 13th International Conference on Mobile Computing and Ubiquitous Networking, November 17-19th, 2021, Tokyo, Japan',
  },
  {
    YEAR: 2021,
    TITLE:
      'Utilitarian or Relational? Exploring Indicators of User Orientation Towards Intelligent Agents',
    AUTHORS: ['Hankyung Kim', 'Hoyeon Nam', 'Uichin Lee', 'Youn-kyung Lim'],
    PUBLISHED:
      'HCI International 2021, International Conference on Human-Computer Interaction, 2021/7/24',
  },
  {
    YEAR: 2021,
    TITLE: 'Benefits of Mobile Contact Tracing on COVID-19: Tracing Capacity Perspectives',
    AUTHORS: ['Uichin Lee', 'Auk Kim'],
    PUBLISHED: 'Frontiers in Public Health (Digital Public Health Section), 2021 (to appear)',
  },
  {
    YEAR: 2021,
    TITLE: '“Good Enough!”: Flexible Goal Achievement with Margin-based Outcome Evaluation',
    AUTHORS: ['Gyuwon Jung', 'Jio Oh', 'Youjin Jung', 'Juho Sun', 'Ha-Kyung Kong', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2021, Yokohama, Japan May 8-13, 2021',
  },
  {
    YEAR: 2021,
    TITLE: 'Sticky Goals: Understanding Goal Commitments for Behavioral Changes in the Wild',
    AUTHORS: ['Hyunsoo Lee', 'Auk Kim', 'Hwajung Hong', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2021, Yokohama, Japan May 8-13, 2021',
  },
  {
    YEAR: 2021,
    TITLE:
      'GoldenTime: Exploring System-Driven Timeboxing and Micro-Financial Incentives for Self-Regulated Phone Use',
    AUTHORS: [
      'Joonyoung Park',
      'Hyunsoo Lee',
      'Sangkeun Park',
      'Kyong-Mee Chung',
      'Uichin Lee PUBLISHED: ACM CHI 2021',
      'Yokohama',
      'Japan May 8-13',
      '2021 [PDF] [Video]',
    ],
  },
  {
    YEAR: 2021,
    TITLE:
      'Beneficial Neglect: Instant Message Notification Handling Behaviors and Academic Performance',
    AUTHORS: ['Minhyung Kim', 'Inyeop Kim', 'Uichin Lee ACM'],
    PUBLISHED:
      'Ubicomp 2021 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 5, Issue 1, March 2021 [PDF]',
  },
  {
    YEAR: 2020,
    TITLE:
      'Understanding User Contexts and Coping Strategies for Context-aware Phone Distraction Management System Design,',
    AUTHORS: ['Inyeop Kim', 'Hwarang Goh', 'Nematjon Narziev', 'Youngtae Noh', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2021/ Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT) Vol. 4, No. 4, Article 00, Dec. 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'Validation of self-reported smartphone usage against objectively-measured smartphone usage in Hong Kong Chinese adolescents and young adults,',
    AUTHORS: ['Paul H Lee et al.'],
    PUBLISHED: 'Psychiatry Investigation (to appear) 2020',
  },
  {
    YEAR: 2020,
    TITLE: 'The Riyadh Declaration: the role of digital health in fighting pandemics,',
    AUTHORS: [
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
    PUBLISHED: 'Lancet (to appear) 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'Temporal association between objectively measured smartphone usage, sleep quality and physical activity among Chinese adolescents and young adults,',
    AUTHORS: ['Paul H. Lee', 'Andy C. Y. Tse', 'Cynthia S. T. Wu', 'Yim Wah Mak', 'Uichin Lee'],
    PUBLISHED: 'Journal of Sleep Research Oct. 2020',
  },
  {
    YEAR: 2020,
    TITLE: 'Digital Public Health and COVID-19,',
    AUTHORS: ['Christopher J L Murray', 'Nurah Maziad S Alamro', 'Hee Hwang', 'Uichin Lee'],
    PUBLISHED: 'Lancet Public Health Vol. 5, Issue 9, E469-E470, Sept. 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'K-EmoCon, a multimodal sensor dataset for continuous emotion recognition in naturalistic conversations',
    AUTHORS: [
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
    PUBLISHED: 'Scientific Data Vol. 7, No. 293, 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'Hello there! Is now a good time to talk?: Understanding Opportune Moments for Proactive Conversational Interaction with Smart Speakers',
    AUTHORS: [
      'Narae Cha',
      'Auk Kim',
      'Cheul Young Park',
      'Soowon Kang',
      'Mingyu Park',
      'Jae-Gil Lee',
      'Sangsu Lee',
      'Uichin Lee',
    ],
    PUBLISHED:
      'ACM Ubicomp 2021/ Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT) Vol. 4, No. 3, Article 74, Sept. 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'Too Much Information: Assessing Privacy Risks of Contact Trace Data Disclosure on People With COVID-19 in South Korea',
    AUTHORS: ['Gyuwon Jung', 'Hyunsoo Lee', 'Auk Kim', 'Uichin Lee'],
    PUBLISHED: 'Frontiers in Public Health 2020',
  },
  {
    YEAR: 2020,
    TITLE: 'Dashcam Witness: Video Sharing Motives and Privacy Concerns across Different Nations',
    AUTHORS: ['Joohyun Kim', 'Sangkeun Park', 'and Uichin Lee'],
    PUBLISHED: 'IEEE Access 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'TermBall: Tracking and Predicting Evolution Types of Research Topics by Using Knowledge Structures in Scholarly Big Data',
    AUTHORS: ['Christine Balili', 'Uichin Lee', 'Aviv Segev', 'Jaejeung Kim', 'Minsam Ko'],
    PUBLISHED: 'IEEE Access 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'Cognitive States Matter: Design Guidelines for Driving Situation Awareness in Smart Vehicles',
    AUTHORS: ['Daehee Park', 'Wan Chul Yoon', 'Uichin Lee'],
    PUBLISHED: 'Sensors 2020, 20(10), 2978',
  },
  {
    YEAR: 2020,
    TITLE: 'Tracking and Modeling Subjective Well-Being Using Smartphone-Based Digital Phenotype',
    AUTHORS: ['Soyoung Rhim', 'Uichin Lee', 'Kyungsik Han'],
    PUBLISHED:
      "ACM UMAP'20 / Conference on User Modeling, Adaptation and Personalization , July 14–17, 2020, Genoa, Italy",
  },
  {
    YEAR: 2020,
    TITLE: 'Privacy Concerns of Digital Phenotyping for Older Adults with Mental Health Issues',
    AUTHORS: ['Hyunsoo Lee', 'Uichin Lee'],
    PUBLISHED: 'CHI 2020 Networked Privacy Workshop, April 25–30, 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'BeActive: Encouraging Physical Activities with Just-in-time Health Intervention and Micro Financial Incentives',
    AUTHORS: [
      'Juho Sun',
      'Sangkeun Park',
      'Gyuwon Jung',
      'Yong Jeong',
      'Uichin Lee',
      'Kyong-Mee Chung',
      'Changseok Lee',
      'Heewon Kim',
      'Suhyon Ahn',
      'Ahsan Khandoker',
      'Leontios Hadjileontiadis',
    ],
    PUBLISHED:
      "AsianCHI '20: Proceedings of the 2020 Symposium on Emerging Research from Asia and on Asian Contexts and Cultures, April 2020 Pages 17–20",
  },
  {
    YEAR: 2020,
    TITLE:
      'ScriptFree: Designing Speech Preparation Systems with Adaptive Visual Reliance Control on Script',
    AUTHORS: ['Jeungmin Oh', 'Darren Edge', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2020 Late Breaking Work , April 25–30, 2020',
  },
  {
    YEAR: 2020,
    TITLE:
      'Interruptibility for In-vehicle Multitasking: Influence of Voice Task Demands and Adaptive Behaviors',
    AUTHORS: ['Auk Kim', 'Jung-Mi Park', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2020 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 4, Issue 1, March 2020',
  },
  {
    YEAR: 2019,
    TITLE:
      'Maximizing MapReduce Job Speed and Reliability in the Mobile Cloud by Optimizing Task Allocation',
    AUTHORS: ['Jin-woo Lee', 'Gwangseon Jang', 'Hohyun Jung', 'Jae-Gil Lee', 'Uichin Lee'],
    PUBLISHED:
      'Pervasive and Mobile Computing Pervasive and Mobile Computing Volume 60, November 2019, 101082',
  },
  {
    YEAR: 2019,
    TITLE: 'Predicting Opportune Moments for In-vehicle Proactive Speech Services',
    AUTHORS: ['Auk Kim', 'Woohyeok Choi', 'Jungmi Park', 'Kyeyoon Kim', 'Uichin Lee'],
    PUBLISHED: 'ACM Ubicomp 2019 (poster), Oct. 2019 [PDF][Poster]',
  },
  {
    YEAR: 2019,
    TITLE:
      'PASS: Reducing Redundant Notifications between a Smartphone and a Smartwatch for Energy Saving',
    AUTHORS: ['Jemin Lee', 'Uichin Lee', 'Hyungshin Kim'],
    PUBLISHED: 'IEEE Transactions on Mobile Computing (accepted for publication) 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'Understanding Smartphone Usage in College Classrooms: A Long-term Measurement Study',
    AUTHORS: [
      'Inyeop Kim',
      'Rihun Kim',
      'Heepyung Kim',
      'Duyeon Kim',
      'Kyungsik Han',
      'Paul H Lee',
      'Gloria Mark',
      'and Uichin Lee',
    ],
    PUBLISHED: 'Computers & Education (accepted for publication) 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'Multi-Stage Receptivity Model for Mobile Just-In-Time Health Intervention,',
    AUTHORS: ['Woohyeok Choi', 'Sangkeun Park', 'Duyeon Kim', 'Youn-kyung Lim', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2019 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)',
  },
  {
    YEAR: 2019,
    TITLE: 'LocknType: Lockout Task Intervention for Discouraging Smartphone App Use',
    AUTHORS: ['Jaejeung Kim', 'Joonyoung Park', 'Hyunsoo Lee', 'Minsam Ko', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2019 , Glasgow, Scotland UK, May 4–9, 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'Commitment devices in online behavior change support systems',
    AUTHORS: ['Hyunsoo Lee', 'Hwajung Hong', 'Uichin Lee'],
    PUBLISHED:
      "AsianHCI '19: Proceedings of Asian CHI Symposium 2019: Emerging HCI Research Collection, Glasgow, Scotland UK, May 4–9, 2019",
  },
  {
    YEAR: 2019,
    TITLE: 'Slow Robots for Unobtrusive Posture Correction',
    AUTHORS: [
      'Joon-Gi Shin',
      'Eiji Onchi',
      'Maria Jose Reyes',
      'Junbong Song',
      'Uichin Lee',
      'Seung-Hee Lee',
      'Daniel Saakes',
    ],
    PUBLISHED: 'ACM CHI 2019 , Glasgow, Scotland UK, May 4–9, 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'Interaction Restraint Framework for Digital Wellbeing',
    AUTHORS: ['Uichin Lee and Jaejeung Kim'],
    PUBLISHED:
      'ACM CHI Workshop: Designing for Digital Wellbeing , Glasgow, Scotland UK, May 4, 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'Wake-Up Task: Understanding Users in Task-based Mobile Alarm App',
    AUTHORS: [
      'Kyue Taek Oh',
      'Jaemyung Shin',
      'Jaejeung Kim',
      'In Suk Song',
      'Uichin Lee',
      'Eunil Park',
      'Jinyoung Han',
      'Minsam Ko',
    ],
    PUBLISHED: 'ACM CHI LBW, Glasgow, Scotland UK, May 4, 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'GoalKeeper: Exploring Interaction Lockout Mechanisms for Regulating Smartphone Use,',
    AUTHORS: ['Jaejeung Kim', 'Hayoung Jung', 'Minsam Ko', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2019 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 3, Issue 1, Mar. 2019',
  },
  {
    YEAR: 2019,
    TITLE: 'Fire in Your Hands: Understanding Thermal Behavior of Smartphones',
    AUTHORS: [
      'Soowon Kang',
      'Hyeonwoo Choi',
      'Sooyoung Park',
      'Chunjong Park',
      'Jemin Lee',
      'Uichin Lee',
      'and Sung-Ju Lee',
    ],
    PUBLISHED: 'ACM Mobicom 2019, Oct. 2019',
  },
  {
    YEAR: 2019,
    TITLE:
      'Interrupting Drivers for Interactions: Predicting Opportune Moments for In-vehicle Proactive Auditory-verbal Tasks',
    AUTHORS: ['Auk Kim', 'Woohyeok Choi', 'Jung-Mi Park', 'Kyeyoon Kim', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2019 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 2, Issue 4, Dec. 2018',
  },
  {
    YEAR: 2019,
    TITLE: '긍정 컴퓨팅을 위한 설득적 인터랙션 제한 시스템',
    AUTHORS: ['이의진', '김재정'],
    PUBLISHED: 'HCI Korea 2019, 2019.2.13-16',
  },
  {
    YEAR: 2018,
    TITLE: "Understanding Customers'Interests in the Wild",
    AUTHORS: ['Soowon Kang', 'Auk Kim', 'Jemin Lee', 'Ikhee Shin', 'Uichin Lee'],
    PUBLISHED: 'ACM Ubicomp 2018 (poster), Oct. 2018',
  },
  {
    YEAR: 2018,
    TITLE: 'HelloBot: Facilitating Social Inclusion with an Interactive Greeting Robot',
    AUTHORS: ['Narae Cha', 'Inyeop Kim', 'Mingyu Park', 'Auk Kim', 'Uichin Lee'],
    PUBLISHED: 'ACM Ubicomp 2018 (poster), Oct. 2018 [PDF]',
  },
  {
    YEAR: 2018,
    TITLE: 'Exploring Context-aware Proactive Blocking for Distraction Management',
    AUTHORS: ['Inyeop Kim', 'Narae Cha', 'Uichin Lee'],
    PUBLISHED: 'ACM Ubicomp 2018 (workshop), Oct. 2018',
  },
  {
    YEAR: 2018,
    TITLE: 'CampusWatch: Exploring Communitysourced Patrolling with Pervasive Mobile Technology',
    AUTHORS: ['Sangkeun Park', 'Sujin Kown', 'Uichin Lee'],
    PUBLISHED:
      'Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Vol. 2, No. CSCW, Article 30. 2018',
  },
  {
    YEAR: 2018,
    TITLE: 'Complex and Ambiguous: Understanding Sticker Misinterpretations in Instant Messaging',
    AUTHORS: ['Yoonjeong Cha', 'Jongwon Kim', 'Sangkeun Park', 'Mun Yong Yi', 'Uichin Lee'],
    PUBLISHED:
      'Proceedings of the ACM on Human-Computer Interaction (PACM-HCI) / CSCW, Vol. 2, No. CSCW, Article 30. 2018',
  },
  {
    YEAR: 2018,
    TITLE: 'Localness of Location-based Knowledge Sharing: A Study of Naver KiN “Here”',
    AUTHORS: ['Sangkeun Park', 'Mark S. Ackerman', 'Uichin Lee', ''],
    PUBLISHED: 'ACM Transactions on the Web (TWEB), Volume: 12, Issue: 3, July 2018',
  },
  {
    YEAR: 2018,
    TITLE:
      'Intelligent Positive Computing with Mobile, Wearable, and IoT Devices: Literature Review and Research Directions',
    AUTHORS: [
      'Uichin Lee',
      'Kyungsik Han',
      'Hyunsung Cho',
      'Kyong-Mee Chung',
      'Hwajung Hong',
      'Sung-Ju Lee',
      'Youngtae Noh',
      'Sooyoung Park',
      'John M. Carroll',
    ],
    PUBLISHED: 'Ad Hoc Networks Journal (Elsevier), 2018 (to appear)',
  },
  {
    YEAR: 2018,
    TITLE:
      'Optical-acoustic Hybrid Network Toward Real-time Video Streaming for Mobile Underwater Sensors',
    AUTHORS: ['Youngtae Noh', 'Sungwon Han', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: 'Ad Hoc Networks Journal (Elsevier), 2018 (to appear)',
  },
  {
    YEAR: 2018,
    TITLE:
      'Interaction Restraint: Enforcing Adaptive Cognitive Tasks to Restrain Problematic User Interaction',
    AUTHORS: ['Joonyoung Park', 'Jin Yong Sim', 'Jaejeung Kim', 'Mun Yong Yi', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI EA 2018 (Late-Breaking Work), Montréal, Canada, April 21-26',
  },
  {
    YEAR: 2018,
    TITLE: 'Actuating a Monitor for Posture Changes',
    AUTHORS: ['Joon Gi Shin', 'Woohyeok Choi', 'Uichin Lee', 'Daniel Saakes'],
    PUBLISHED: 'ACM CHI EA 2018 (Late-Breaking Work), Montréal, Canada, April 21-26',
  },
  {
    YEAR: 2018,
    TITLE: 'TNT: Exploring Pseudo Social Reminding for Effective Task Management',
    AUTHORS: ['Wonyoung Shin', 'Soowon Kang', 'Inyeop Kim', 'Mun Yong Yi', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI EA 2018 (Late-Breaking Work), Montréal, Canada, April 21-26',
  },
  {
    YEAR: 2017,
    TITLE: 'Flower-Pop: Facilitating Casual Group Conversations With Multiple Mobile Devices',
    AUTHORS: [
      'Moon-Hwan Lee',
      'Yea-Kyung Row',
      'Oosung Son',
      'Uichin Lee',
      'Jaejeung Kim',
      'Jungi Jeong',
      'Seungryoul Maeng',
      'Tek-Jin Nam',
    ],
    PUBLISHED:
      'ACM Ubicomp 2018 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 4, Dec. 2017',
  },
  {
    YEAR: 2017,
    TITLE: 'Tracking and Predicting the Evolution of Research Topics in Scientific Literature',
    AUTHORS: ['Christine Balili', 'Aviv Segev', 'Uichin Lee'],
    PUBLISHED: 'IEEE BigData 2017, Dec 11-14, 2017 Boston, MA, USA',
  },
  {
    YEAR: 2017,
    TITLE:
      'Technology Supported Behavior Restriction for Mitigating Self-Interruptions in Multi-device Environments',
    AUTHORS: ['Jaejeung Kim', 'Chiwoo Cho', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  },
  {
    YEAR: 2017,
    TITLE: "Let's FOCUS: Mitigating Mobile Phone Use in College Classrooms",
    AUTHORS: ['Inyeop Kim', 'Gyuwon Jung', 'Hayoung Jung', 'Minsam Ko', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  },
  {
    YEAR: 2017,
    TITLE:
      'Let’s FOCUS: Location-based Intervention Tool to Mitigate Phone Use in College Classrooms',
    AUTHORS: ['Inyeop Kim', 'Gyuwon Jung', 'Hayoung Jung', 'Minsam Ko', 'Uichin Lee'],
    PUBLISHED: 'ACM Ubicomp 2017 (poster), Sept. 2017',
  },
  {
    YEAR: 2017,
    TITLE:
      'TrailSense: A Crowdsensing System for Detecting Risky Mountain Trail Segments with Walking Pattern Analysis',
    AUTHORS: ['Keunseo Kim', 'Hengameh Zabihi', 'Heeyoung Kim', 'Uichin Lee'],
    PUBLISHED:
      'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  },
  {
    YEAR: 2017,
    TITLE: 'Smartwatch Wearing Behavior Analysis: A Longitudinal Study',
    AUTHORS: ['Hayeon Jeong', 'Heepyung Kim', 'Rihun Kim', 'Uichin Lee', 'Yong Jeong'],
    PUBLISHED:
      'ACM Ubicomp 2017 / Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), Volume 1, Issue 3, Sept. 2017',
  },
  {
    YEAR: 2017,
    TITLE: 'Understanding Mobile Document Capture and Correcting Orientation Errors',
    AUTHORS: [
      'Jeungmin Oh',
      'Joohyun Kim',
      'Myungjoon Kim',
      'Woohyeok Choi',
      'SangJeong Lee',
      'Uichin Lee',
    ],
    PUBLISHED:
      'International Journal of Human-Computer Studies, Volume 104, Pages 64–79, August 2017',
  },
  {
    YEAR: 2017,
    TITLE: 'Virtual Figure Model Crafting with VR HMD and Leap Motion',
    AUTHORS: ['Gangrae Park', 'Hyunmin Choi', 'Uichin Lee', 'Seongah Chin'],
    PUBLISHED: 'The Imaging Science Journal Sept. 2017',
  },
  {
    YEAR: 2017,
    TITLE: 'WatchOut: Facilitating Safe Driving Behaviors with Social Support',
    AUTHORS: ['Hyojin Chin', 'Hengameh Zabihi', 'Sangkeun Park', 'Mun Yong Yi', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI EA 2017 (Late-Breaking Work), Denver, CO, USA, May 6-11',
  },
  {
    YEAR: 2017,
    TITLE: 'Sensors Know Which Photos Are Memorable',
    AUTHORS: [
      'Soyoung Kim',
      'Kalenzi Asio Evelyn Patra',
      'Auk Kim',
      'Kun-Pyo Lee',
      'Aviv Segev',
      'Uichin Lee',
    ],
    PUBLISHED: 'ACM CHI EA 2017 (Late-Breaking Work), Denver, CO, USA, May 6-11',
  },
  {
    YEAR: 2017,
    TITLE:
      "It's More than Just Sharing Game Play Videos! Understanding User Motives in Mobile Game Social Media",
    AUTHORS: [
      'Hayun Kim',
      'Lebogang Wame Molefi',
      'Auk Kim',
      'Woontack Woo',
      'Aviv Segev',
      'Uichin Lee',
    ],
    PUBLISHED: 'ACM CHI EA 2017 (Late-Breaking Work), Denver, CO, USA, May 6-11',
  },
  {
    YEAR: 2017,
    TITLE: 'Facilitating Pervasive Community Policing on the Road with Mobile Roadwatch',
    AUTHORS: [
      'Sangkeun Park',
      'Emilia-Stefania Ilincai',
      'Jeungmin Oh',
      'Sujin Kwon',
      'Rabeb Mizouni',
      'Uichin Lee',
    ],
    PUBLISHED: 'ACM CHI 2017, Denver, CO, USA, May 6-11 [PDF] [PPT]',
  },
  {
    YEAR: 2017,
    TITLE: 'LetsPic: Supporting In-situ Collaborative Photography over a Large Physical Space,',
    AUTHORS: ['Auk Kim', 'Sungjoon Kang', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2017, Denver, CO, USA, May 6-11',
  },
  {
    YEAR: 2016,
    TITLE:
      'Infrastructure-free Collaborative Indoor Positioning Scheme for Time-critical Team Operations',
    AUTHORS: ['Youngtae Noh', 'Hirozumi Yamaguchi', 'Uichin Lee'],
    PUBLISHED:
      'IEEE Transactions on Systems, Man, and Cybernetics: Systems, Volume: 48, Issue: 3, March 2018',
  },
  {
    YEAR: 2016,
    TITLE: 'Internet of Vehicles: From Intelligent Grid to Autonomous Cars and Vehicular Fogs',
    AUTHORS: ['Eun-Kyu Lee', 'Mario Gerla', 'Giovanni Pau', 'Uichin Lee', 'Jae-Han Lim'],
    PUBLISHED: 'International Journal of Distributed Sensor Networks, Vol. 12(9), 2016',
  },
  {
    YEAR: 2016,
    TITLE: 'Cannibalism in Medical Topic Networks',
    AUTHORS: ['Suhyun Chae', 'Aviv Segev', 'Uichin Lee'],
    PUBLISHED: 'Knowledge-Based Systems, Volume 108, Sept. 15, 2016, Pages 168–178',
  },
  {
    YEAR: 2016,
    TITLE:
      'Exploring User Experiences of Active Workstations: A Case Study of Under Desk Elliptical Trainers',
    AUTHORS: ['Woohyeok Choi', 'Aejin Song', 'Darren Edge', 'Masaaki Fukumoto', 'Uichin Lee'],
    PUBLISHED: 'ACM Ubicomp 2016, Heidelberg, Germany, Sep. 12-16, 2016',
  },
  {
    YEAR: 2016,
    TITLE: 'Designing Interactive Multiswimmer Exergames: A Case Study',
    AUTHORS: [
      'Woohyeok Choi',
      'Jeungmin Oh',
      'Taiwoo Park',
      'Seongjun Kang',
      'Miri Moon',
      'Uichin Lee',
      'Inseok Hwang',
      'Darren Edge',
      'Junehwa Song',
    ],
    PUBLISHED: 'ACM Transaction on Sensor Networks (TOSN), Volume 12, Issue 3, July 2016',
  },
  {
    YEAR: 2016,
    TITLE: 'Motion-MiX DHT for Wireless Mobile Networks',
    AUTHORS: ['Seungjae Shin', 'Uichin Lee', 'Falko Dressler', 'Hyunsoo Yoon'],
    PUBLISHED: 'IEEE Transaction on Mobile Computing, Volume 15, Issue 12, Dec. 1 2016',
  },
  {
    YEAR: 2016,
    TITLE: 'LockDoll: Providing Ambient Feedback of Smartphone Usage within Social Interaction',
    AUTHORS: ['Seungwoo Choi', 'Hayeon Jeong', 'Minsam Ko', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  },
  {
    YEAR: 2016,
    TITLE: 'EcoMeal: A Smart Tray for Promoting Healthy Dietary Habits',
    AUTHORS: ['Jaejeung Kim', 'Joonyoung Park', 'Uichin Lee'],
    PUBLISHED:
      'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12 [PDF] [Poster]',
  },
  {
    YEAR: 2016,
    TITLE:
      'Social or Financial Goals? Comparative Analysis of User Behaviors in Couchsurfing and Airbnb',
    AUTHORS: [
      'Jiwon Jung',
      'Susik Yoon',
      'SeungHyun Kim',
      'Sangkeun Park',
      'Kun-Pyo Lee',
      'Uichin Lee',
    ],
    PUBLISHED: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  },
  {
    YEAR: 2016,
    TITLE: 'How to Report App Feedback? Analyzing Feedback Reporting Behavior',
    AUTHORS: ['Jeungmin Oh', 'SangJeong Lee', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  },
  {
    YEAR: 2016,
    TITLE: 'SlideQA: Supporting Effective Q&A in an Offline Academic Presentation',
    AUTHORS: ['Juyoun Kim', 'Yoochan Kim', 'Sangkeun Park', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2016 Extended Abstracts (Late Breaking Work), San Jose, CA, USA, May 7-12',
  },
  {
    YEAR: 2016,
    TITLE: 'SwimTrain: Exploring Exergame Design for Group Fitness Swimming',
    AUTHORS: ['Woohyeok Choi', 'Jeungmin Oh', 'Darren Edge', 'Joohyun Kim', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2016, San Jose, CA, USA, May 7-12',
  },
  {
    YEAR: 2016,
    TITLE: 'Motives and Concerns of Dashcam Video Sharing',
    AUTHORS: ['Sangkeun Park', 'Joohyun Kim', 'Rabeb Mizouni', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2016, San Jose, CA, USA, May 7-12',
  },
  {
    YEAR: 2016,
    TITLE:
      "Lock n'LoL: Group-based Limiting Assistance App to Mitigate Smartphone Distractions in Group Activities",
    AUTHORS: ['Minsam Ko', 'Seungwoo Choi', 'Koji Yatani', 'Uichin Lee'],
    PUBLISHED: 'ACM CHI 2016, San Jose, CA, USA, May 7-12 (Best Paper Award)',
  },
  {
    YEAR: 2016,
    TITLE: 'Analysis of Cell Sojourn Time in Heterogeneous Networks with Small Cells',
    AUTHORS: ['Seungjae Shin', 'Uichin Lee', 'Falko Dressler', 'Hyunsoo Yoon'],
    PUBLISHED: 'IEEE Communications Letters, Volume 20, Issue 4, pp 788-791, April 2016',
  },
  {
    YEAR: 2016,
    TITLE:
      'What Makes Sports Fans Interactive? Identifying Factors Affecting Chat Interactions in Online Sports Viewing',
    AUTHORS: ['Minsam Ko', 'Jaeryong Yeo', 'Juyeong Lee', 'Uichin Lee', 'Young Jae Jang'],
    PUBLISHED: 'PLOS ONE, February 5, 2016',
  },
  {
    YEAR: 2016,
    TITLE:
      'Understanding Mass Interactions in Online Sports Viewing: Chatting Motives and Usage Patterns',
    AUTHORS: ['Minsam Ko', 'Seungwoo Choi', 'Joonwon Lee', 'Uichin Lee', 'Aviv Segev'],
    PUBLISHED:
      'ACM Transactions on Computer-Human Interaction (TOCHI), Volume 23 Issue 1, January 2016',
  },
  {
    YEAR: 2015,
    TITLE: "FamiLync: Facilitating Participatory Parental Mediation of Adolescents'Smartphone Use",
    AUTHORS: ['Minsam Ko', 'Seungwoo Choi', 'Subin Yang', 'Joonwon Lee', 'Uichin Lee'],
    PUBLISHED:
      "In Proc. of The 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp'15), Osaka, Japan, Sep. 7-11, 2015",
  },
  {
    YEAR: 2015,
    TITLE: 'Designing Group Fitness Exergames: A Case Study',
    AUTHORS: ['Woohyeok Choi', 'Joohyun Kim', 'Jeungmin Oh', 'Darren Edge', 'Uichin Lee'],
    PUBLISHED:
      "In Proc. of The 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing Adjunct Publication (Poster) (UbiComp'15), Osaka, Japan, Sep. 7-11, 2015",
  },
  {
    YEAR: 2015,
    TITLE: 'I-Eng: An Interactive Toy for Second Language Learning',
    AUTHORS: ['Hayeon Jeong', 'Daniel Pieter Saakes', 'Uichin Lee'],
    PUBLISHED:
      "In Proc. of The 2015 ACM International Joint Conference on Pervasive and Ubiquitous Computing Adjunct Publication (Demo) (UbiComp'15), Osaka, Japan, Sep. 7-11, 2015",
  },
  {
    YEAR: 2015,
    TITLE: 'CrowdColor: Crowdsourcing Color Perceptions Using Mobile Devices',
    AUTHORS: [
      'Jaejeung Kim',
      'Sergey Leksikov',
      'Punyotai Thamjamrassri',
      'Uichin Lee',
      'Hyeon-Jeong Suk',
    ],
    PUBLISHED:
      "In Proc. of the 17th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI'15), Copenhagen, Denmark, Aug. 24-27, 2015",
  },
  {
    YEAR: 2015,
    TITLE: 'HydroCast: Pressure Routing for Underwater Sensor Networks',
    AUTHORS: [
      'Youngtae Noh',
      'Uichin Lee',
      'Saewoom Lee',
      'Paul Wang',
      'Luiz F. M. Vieira',
      'Jun-Hong Cui',
      'Mario Gerla',
      'Kiseon Kim',
    ],
    PUBLISHED: 'IEEE Transaction on Vehicular Technology, 2015 VOL. 65, NO. 1, January 2016',
  },
  {
    YEAR: 2015,
    TITLE: 'ScanShot: Detecting Document Capture Moments and Correcting Device Orientation',
    AUTHORS: ['Jeungmin Oh', 'Woohyeok Choi', 'Joohyun Kim', 'Uichin Lee'],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15), Seoul, Korea, April 18-23, 2015",
  },
  {
    YEAR: 2015,
    TITLE: "Lock n'LoL: Mitigating Smartphone Disturbance in Co-located Social Interactions",
    AUTHORS: [
      'Minsam Ko',
      'Chayanin Wong',
      'Sunmin Son',
      'Euigon Jung',
      'Uichin Lee',
      'Seungwoo Choi',
      'Sungho Jo',
      'Min H. Kim',
    ],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15 Work in Progress), Seoul, Korea, April 18-23, 2015",
  },
  {
    YEAR: 2015,
    TITLE:
      'Every Little Helps: Understanding Donor Behavior in a Crowdfunding Platform for Non-profits',
    AUTHORS: ['Aejin Song', 'Hong-in Lee', 'Minsam Ko', 'Uichin Lee'],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15 Work in Progress), Seoul, Korea, April 18-23, 2015",
  },
  {
    YEAR: 2015,
    TITLE: 'SocialKeyboard: Proofreading Everyday Writings in Mobile Phones',
    AUTHORS: ['Jin-woo Lee', 'Joohyun Kim', 'Uichin Lee', 'Jae-Gil Lee'],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'15 Work in Progress), Seoul, Korea, April 18-23, 2015",
  },
  {
    YEAR: 2015,
    TITLE:
      'NUGU: A Group-based Intervention App for Improving Self-Regulation of Limiting Smartphone Use',
    AUTHORS: [
      'Minsam Ko',
      'Subin Yang',
      'Joonwon Lee',
      'Christian Heizmann',
      'Jinyoung Jeong',
      'Uichin Lee',
      'Daehee Shin',
      'Koji Yatani',
      'Junehwa Song',
      'Kyong-Mee Chung',
    ],
    PUBLISHED:
      "The 18th ACM conference on Computer-Supported Cooperative Work and Social Computing (CSCW'15), Vancouver, BC, Canada, March 14-18, 2015",
  },
  {
    YEAR: 2015,
    TITLE: 'Exploring UX Issues in Quantified Self Technologies',
    AUTHORS: ['Jeungmin Oh', 'Uichin Lee'],
    PUBLISHED:
      'In Proc. of Eighth International Conference on Mobile Computing and Ubiquitous Networking (ICMU 2015), Jan 20-22, 2015, Hakodate City, Hokkaido, Japan',
  },
  {
    YEAR: 2015,
    TITLE: 'IoT 응용 설득 컴퓨팅 서비스 개요 및 연구 동향',
    AUTHORS: ['이의진'],
    PUBLISHED: 'JCCI 2015, 4/15-17, 2015',
  },
  {
    YEAR: 2015,
    TITLE: '청소년 자녀의 스마트폰 사용에 관한 부모중재 서비스 디자인 탐구',
    AUTHORS: ['양수빈', '고민삼', '이의진'],
    PUBLISHED: 'HCIK 2015, 12/10-12, 2014',
  },
  {
    YEAR: 2015,
    TITLE:
      '활동이론에 근거한 대학원생의 교내 융합연구관련 Q&A 행동 분석 및 시스템 디자인 가이드라인',
    AUTHORS: ['오태화', '박상근', '이의진', '윤완철'],
    PUBLISHED: 'HCIK 2015, 12/10-12, 2014',
  },
  {
    YEAR: 2015,
    TITLE: '수영 환경을 고려한 다중 사용자 운동게임 디자인',
    AUTHORS: ['최우혁', '이의진'],
    PUBLISHED: 'HCIK 2015, 12/10-12, 2014',
  },
  {
    YEAR: 2014,
    TITLE: 'Secure Personal Content Networking over Untrusted Devices',
    AUTHORS: ['Uichin Lee', 'Josh Joy', 'Youngtae Noh'],
    PUBLISHED: 'Wireless Personal Communications, Volume 80, Issue 4, pp 1449-1473, February 2015',
  },
  {
    YEAR: 2014,
    TITLE: 'Methods of locating data spots and networks and user equipment for using the same',
    AUTHORS: ['Xuan Bao', 'Uichin Lee', 'Ivica Rimac'],
    PUBLISHED: 'US Patent US8914041 B2, Dec 16, 2014',
  },
  {
    YEAR: 2014,
    TITLE: 'MobyDick: An Interactive Multi-swimmer Exergame',
    AUTHORS: [
      'Woohyeok Choi',
      'Jeungmin Oh',
      'Taiwoo Park',
      'Sungjun Kang',
      'Miri Moon',
      'Uichin Lee',
      'Inseok Hwang',
      'Junehwa Song',
    ],
    PUBLISHED:
      "In Proc. of the 12th ACM Conference on Embedded Networked Sensor Systems (SenSys'14), Memphis, TN, November 3-6, 2014",
  },
  {
    YEAR: 2014,
    TITLE: 'Understanding Localness of Knowledge Sharing: A Study of Naver KiN Here',
    AUTHORS: ['Sangkeun Park', 'Yongsung Kim', 'Uichin Lee', 'Mark Ackerman'],
    PUBLISHED:
      "In Proc. of the 16th International Conference on Human-Computer Interaction with Mobile Devices and Services (MobileHCI'14), Toronto, Canada, Sept. 23-26, 2014",
  },
  {
    YEAR: 2014,
    TITLE:
      'PlaceWalker: An Energy-efficient Place Logging Method that Considers Kinematics of Normal Human Walking',
    AUTHORS: ['Dae-Ki Cho', 'Uichin Lee', 'Youngtae Noh', 'Taiwoo Park', 'Junehwa Song'],
    PUBLISHED: 'Pervasive and Mobile Computing, Volume 19, May 2015, Pages 24–36 [PDF]',
  },
  {
    YEAR: 2014,
    TITLE: 'Human Factors of Speed-based Exergame Controllers',
    AUTHORS: [
      'Taiwoo Park',
      'Uichin Lee',
      'I. Scott MacKenzie',
      'Miri Moon',
      'Inseok Hwang',
      'Junehwa Song',
    ],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'14), Toronto, Canada, April 26-May 1, 2014",
  },
  {
    YEAR: 2014,
    TITLE:
      'Hooked on Smartphones: An Exploratory Study on Smartphone Overuse among College Students',
    AUTHORS: [
      'Uichin Lee',
      'Joonwon Lee',
      'Minsam Ko',
      'Changhun Lee',
      'Yuhwan Kim',
      'Subin Yang',
      'Koji Yatani',
      'Gahgene Gweon',
      'Kyong-Mee Chung Junehwa Song',
    ],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'14), Toronto, Canada, April 26-May 1, 2014",
  },
  {
    YEAR: 2014,
    TITLE:
      'Supporting Temporary Non-Use of Smartphones Refusing, Limiting, Departing: Why We Should Study Technology Non-use',
    AUTHORS: ['Uichin Lee', 'Subin Yang', 'Minsam Ko', 'Joonwon Lee'],
    PUBLISHED: 'In conjunction with CHI 2014, Toronto, Canada, April 26-May 1, 2014',
  },
  {
    YEAR: 2014,
    TITLE: 'Motives for Mass Interactions in Online Sports Viewing',
    AUTHORS: [
      'Minsam Ko',
      'Seung-woo Choi',
      'Joonwon Lee',
      'Subin Yang',
      'Uichin Lee',
      'Aviv Segev',
      'Junehwa Song',
    ],
    PUBLISHED:
      "In Proc. of the World-Wide Web Conference (WWW'14), Seoul, Korea, April 7-11, 2014 (Poster)",
  },
  {
    YEAR: 2014,
    TITLE: 'Internet of Vehicles: From Intelligent Grid to Autonomous Cars and Vehicular Clouds',
    AUTHORS: ['Mario Gerla', 'Eun-Kyu Lee', 'Giovanni Pau', 'Uichin Lee'],
    PUBLISHED: "IEEE World Forum on Internet of Things (WF-IoT'14), Seoul, Korea, 6-8 March 2014",
  },
  {
    YEAR: 2014,
    TITLE:
      'DOTS: A Propagation Delay-aware Opportunistic MAC Protocol for Mobile Underwater Networks',
    AUTHORS: [
      'Youngtae Noh',
      'Uichin Lee',
      'Seongwon Han',
      'Paul Wang',
      'Dustin Torres',
      'Jinwhan Kim',
      'Mario Gerla',
    ],
    PUBLISHED: 'IEEE Transaction on Mobile Computing, Vol. 13, No. 4, April 2014',
  },
  {
    YEAR: 2014,
    TITLE: '스마트폰 과도사용 중재 모바일 앱 분석: 중재 방법 관점',
    AUTHORS: ['고민삼', '이준원', '양수빈', '이의진'],
    PUBLISHED: 'HCI Korea, Feb. 2014',
  },
  {
    YEAR: 2014,
    TITLE: '다중 스마트 단말 협업 기반 모바일 어플리케이션 및 UX 디자인 고찰',
    AUTHORS: ['강성준', '신대희', '명미라', '이의진', '박준성'],
    PUBLISHED: 'HCI Korea, Feb. 2014',
  },
  {
    YEAR: 2013,
    TITLE:
      'Understanding Processing Overheads of Network Coding Based Content Distribution in VANETs',
    AUTHORS: ['Uichin Lee', 'Seung-Hoon Lee', 'Kang-Won Lee', 'Mario Gerla'],
    PUBLISHED:
      'IEEE Transactions on Parallel and Distributed Systems (TPDS), Nov. 2013 (vol. 24 no. 11)',
  },
  {
    YEAR: 2013,
    TITLE:
      'Booming Up the Long Tails: Discovering Potentially Contributive Users in Community-based Question Answering Services',
    AUTHORS: ['Juyup Sung', 'Jae-Gil Lee', 'Uichin Lee'],
    PUBLISHED: 'AAAI ICWSM-13 (Best Paper Award), Boston, USA, July 2013',
  },
  {
    YEAR: 2013,
    TITLE:
      'SocioPhone: Everyday Face-to-Face Interaction Monitoring Platform Using Multi-Phone Sensor Fusion',
    AUTHORS: [
      'Youngki Lee',
      'Chulhong Min',
      'Chanyou Hwang',
      'Jaeung Lee',
      'Inseok Hwang',
      'Younghyun Ju',
      'Chungkuk Yoo',
      'Miri Moon',
      'Uichin Lee',
      'Junehwa Song',
    ],
    PUBLISHED: "ACM MobiSys'13, Taipei, Taiwan, June 2013",
  },
  {
    YEAR: 2013,
    TITLE: 'Analyzing Crowd Workers in Mobile Pay-for-Answer Q&A',
    AUTHORS: ['Uichin Lee', 'Jihyoung Kim', 'Eunhee Yi', 'Juyup Sung', 'Mario Gerla'],
    PUBLISHED:
      "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI'13), Paris, April 27-May 2, 2013",
  },
  {
    YEAR: 2013,
    TITLE: 'Facilitating Developer-User Interactions with Mobile App Review Digests',
    AUTHORS: ['Jeungmin Oh', 'Daehoon Kim', 'Uichin Lee', 'Jae-Gil Lee', 'Junehwa Song'],
    PUBLISHED: "ACM CHI'13 Work-in-Progress, Paris, April 27-May 2, 2013",
  },
  {
    YEAR: 2013,
    TITLE:
      'DataSpotting: Exploiting Naturally Clustered Mobile Devices to Offload Cellular Traffic',
    AUTHORS: ['Xuan Bao', 'Yin Lin', 'Uichin Lee', 'Ivica Rimac', 'Romit Roy Choudhury'],
    PUBLISHED: 'IEEE INFOCOM 2013 (mini-conf), Turin, Italy, April 14-19, 2013',
  },
  {
    YEAR: 2013,
    TITLE: 'M-FAMA: A Multi-session MAC Protocol for Reliable Underwater Acoustic Streams,',
    AUTHORS: ['Seongwon Han', 'Youngtae Noh', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: 'IEEE INFOCOM 2013, Turin, Italy, April 14-19, 2013',
  },
  {
    YEAR: 2013,
    TITLE:
      'CLIPS: Infrastructure-free Collaborative Indoor Positioning Scheme for Time-critical Team Operations',
    AUTHORS: [
      'Youngtae Noh',
      'Hirozumi Yamaguchi',
      'Uichin Lee',
      'Prerna Vij',
      'Joshua Joy',
      'Mario Gerla',
    ],
    PUBLISHED: 'IEEE PerCom 2013, San Diego, CA, March 18-22, 2013',
  },
  {
    YEAR: 2013,
    TITLE: 'ExerSync: Facilitating Interpersonal Synchrony in Social Exergames',
    AUTHORS: [
      'Taiwoo Park',
      'Uichin Lee',
      'Bupjae Lee',
      'Haechan Lee',
      'Sanghun Son',
      'Seokyoung Song',
      'Junehwa Song',
    ],
    PUBLISHED:
      'The 16th ACM Conference on Computer Supported Cooperative Work and Social Computing (CSCW 2013), San Antonio, Texas, USA, Feb. 2013',
  },
  {
    YEAR: 2013,
    TITLE: 'Mobile Q&A: Beyond Text-only Q&A and Privacy Concerns',
    AUTHORS: ['Uichin Lee', 'Eunhee Yi', 'Minsam Ko'],
    PUBLISHED:
      'CSCW 2013 Workshop on Social Media Question Asking, San Antonio, Texas, USA, Feb. 2013',
  },
  {
    YEAR: 2013,
    TITLE: 'Dungeons & Swimmers: Designing an Interactive Exergame for Swimming,',
    AUTHORS: [
      'Haechan Lee',
      'Miri Moon',
      'Taiwoo Park',
      'Inseok Hwang',
      'Uichin Lee',
      'Junehwa Song',
    ],
    PUBLISHED: "ACM UbiComp'13 (Demo) Zurich, Switzerland, Sep. 2013",
  },
  {
    YEAR: 2012,
    TITLE: 'ExerLink: Enabling Pervasive Social Exergames with Heterogeneous Exercise Devices',
    AUTHORS: ['Park et al.'],
    PUBLISHED:
      'The 10th International Conference on Mobile Systems, Applications and Services (Mobisys), United Kingdom, June 2012',
  },
  {
    YEAR: 2012,
    TITLE: 'Understanding Mobile Q&A Usage: An Exploratory Study',
    AUTHORS: ['Uichin Lee', 'Hyanghong Kang', 'Eunhee Yi', 'Mun Y. Yi', 'Jussi Kantola'],
    PUBLISHED:
      'ACM SIGCHI Conference on Human Factors in Computing Systems (CHI), Austin Texas, May 2012',
  },
  {
    YEAR: 2012,
    TITLE: 'VAPR: Void Aware Pressure Routing for Underwater Sensor Networks',
    AUTHORS: ['Youngtae Noh', 'Uichin Lee', 'Paul Wang', 'Brian Sung Chul Choi', 'Mario Gerla'],
    PUBLISHED: 'IEEE Transaction on Mobile Computing, Volume 12, Issue 5, Pages 895-908, May 2013',
  },
  {
    YEAR: 2012,
    TITLE: 'Editorial - Special Issue: Wide-Scale Vehicular Sensor Networks and Mobile Sensing',
    AUTHORS: ['Paolo Bellavista', 'Mario Gerla', 'Hariharan Krishnan', 'Uichin Lee'],
    PUBLISHED: 'Pervasive and Mobile Computing, Volume 8, Issue 2, Pages 165-166, May 2012',
  },
  {
    YEAR: 2011,
    TITLE:
      'Emerging Ubiquitous Knowledge Services: From Mobile Sensing to Ubiquitous Crowdsourcing and Beyond',
    AUTHORS: ['Uichin Lee', 'Howon Lee', 'Bang Chul Jung', 'Junehwa Song'],
    PUBLISHED: 'In Knowledge Service Engineering Handbook, CRC Press 2011 (bookchapter)',
  },
  {
    YEAR: 2011,
    TITLE: 'GeoServ: A Distributed Urban Sensing Platform',
    AUTHORS: ['Jong Hoon Ahn', 'Uichin Lee', 'Hyun Jin Moon'],
    PUBLISHED:
      "IEEE/ACM International Symposium on Cluster, Cloud, and Grid Computing (CCGrid'11), New Port Beach, CA USA, May 2011 (Best Paper Award)",
  },
  {
    YEAR: 2011,
    TITLE: 'SewerSnort: A Drifting Sensor for In-situ Wastewater Collection System Gas Monitoring',
    AUTHORS: [
      'Jung Soo Lim',
      'Jihyoung Kim',
      'Jonathan Friedman',
      'Uichin Lee',
      'Luiz Vieira',
      'Diego Rosso',
      'Mario Gerla',
      'Mani B Srivastava',
    ],
    PUBLISHED:
      'Ad Hoc Networks Journal (Elsevier), Special Issue on Challenged Environments, Volume 11, Issue 4, Pages 1456–1471, June 2013',
  },
  {
    YEAR: 2011,
    TITLE: 'Toward Energy Efficient Content Dissemination',
    AUTHORS: ['Uichin Lee', 'Ivica Rimac', 'Daniel Kilper', 'Volker Hilt'],
    PUBLISHED: 'IEEE Network, Volume 25 Issue 2 pp. 14-19, March/April 2011 (Figure 6 was updated)',
  },
  {
    YEAR: 2011,
    TITLE: 'On the Design of Content-Centric MANETs',
    AUTHORS: ['Matteo Varvello', 'Ivica Rimac', 'Uichin Lee', 'Lloyd Greenwald', 'Volker Hilt'],
    PUBLISHED: "WONS'11, Bardonecchia, Italy, Jan. 2011",
  },
  {
    YEAR: 2010,
    TITLE:
      'DOTS: A Propagation Delay-aware Opportunistic MAC Protocol for Underwater Sensor Networks',
    AUTHORS: ['Youngtae Noh', 'Paul Wang', 'Uichin Lee', 'Dustin Torres', 'Mario Gerla'],
    PUBLISHED: "IEEE ICNP'10, Kyoto, Japan, Oct. 2010",
  },
  {
    YEAR: 2010,
    TITLE: 'VAPR: Void Aware Pressure Routing Protocol',
    AUTHORS: ['Youngtae Noh', 'Paul Wang', 'Uichin Lee', 'Mario Gerla.'],
    PUBLISHED: "ACM WuWNet'10, Massachusetts, USA, Sep. 2010 (poster)",
  },
  {
    YEAR: 2010,
    TITLE: 'Geo-Opportunistic Routing for Vehicular Networks',
    AUTHORS: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: 'IEEE Communications Magazine, Vol. 48, No. 5. pp. 164-170, May 2010',
  },
  {
    YEAR: 2010,
    TITLE: 'Trace-based Evaluation of Rate Adaptation Schemes in Vehicular Environments',
    AUTHORS: ['Kevin C. Lee', 'Juan M. Navarro', 'Tin Y. Chong', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: ", WiVeC'10, Taipei, Taiwan, May 2010",
  },
  {
    YEAR: 2010,
    TITLE: 'Greening the Internet with Content Centric Networking',
    AUTHORS: ['Uichin Lee', 'Ivica Rimac', 'Volker Hilt'],
    PUBLISHED:
      "ACM e-Energy'10, Passau, Germany, Apr. 2010 [PDF][PPT] IEEE Network Magazine Version (with updated plots)",
  },
  {
    YEAR: 2010,
    TITLE: 'AutoGait: A Mobile Platform that Accurately Estimates the Distance Walked',
    AUTHORS: ['Dae-Ki Cho', 'Min Mun', 'Uichin Lee', 'William J. Kaiser', 'Mario Gerla'],
    PUBLISHED: "IEEE PerCom'10, Mannheim, Germany, Mar. 29 - Apr. 2, 2010",
  },
  {
    YEAR: 2010,
    TITLE: 'Phero-Trail: a Bio-inspired Location Service for Mobile Underwater Sensors',
    AUTHORS: ['Luiz F. M. Vieira', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED:
      'IEEE Journal on Selected Areas in Communications, Vol. 28, No. 4, pp. 553-563 May 2010',
  },
  {
    YEAR: 2010,
    TITLE: 'Vehicular Communications: Emergency Video Streams and Network Coding',
    AUTHORS: ['Joon-Sang Park', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED:
      'Journal of Internet Services and Applications (JISA), Volume 1, Number 1, 57-68, March 2010.',
  },
  {
    YEAR: 2010,
    TITLE: 'Pressure Routing for Underwater Sensor Networks',
    AUTHORS: [
      'Uichin Lee',
      'Paul Wang',
      'Youngtae Noh',
      'Luiz F. M. Vieira',
      'Mario Gerla',
      'Jun-Hong Cui',
    ],
    PUBLISHED: "IEEE INFOCOM'10, San Diego, Mar. 2010",
  },
  {
    YEAR: 2010,
    TITLE: 'A Survey of Urban Vehicular Sensing Platforms',
    AUTHORS: ['Uichin Lee', 'Mario Gerla'],
    PUBLISHED: 'Elsevier Computer Networks, Volume 54, Issue 4, pp. 527-544, Mar. 2010',
  },
  {
    YEAR: 2010,
    TITLE: 'FleaNet: A Virtual Market Place on Vehicular Networks',
    AUTHORS: ['Uichin Lee', 'Jiyeon Lee', 'Joon-Sang Park', 'Mario Gerla'],
    PUBLISHED:
      'IEEE Transaction on Vehicular Technology, Volume 59, Number 1, pp. 344-355, Jan. 2010',
  },
  {
    YEAR: 2010,
    TITLE: 'P2P Content Distribution to Mobile Bluetooth Users',
    AUTHORS: ['Uichin Lee', 'Sewook Jung', 'Alexander Chang', 'Dae-Ki Cho', 'Mario Gerla'],
    PUBLISHED:
      'IEEE Transaction on Vehicular Technology, Volume 59, Number 1, pp. 356-367, Jan. 2010',
  },
  {
    YEAR: 2009,
    TITLE: 'Scaling Properties of Delay Tolerant Networks with Correlated Motion Patterns',
    AUTHORS: ['Uichin Lee', 'Soon Young Oh', 'Kang-Won Lee', 'Mario Gerla'],
    PUBLISHED:
      'ACM MobiCom Workshop on Challenged Networks (Chants 2009), Beijing, China - September 25, 2009',
  },
  {
    YEAR: 2009,
    TITLE: 'RelayCast: Scalable Multicast Routing in Delay Tolerant Coalition Networks',
    AUTHORS: ['Uichin Lee', 'Soon Young Oh', 'Kang-Won Lee', 'Mario Gerla'],
    PUBLISHED: 'Annual Conference of ITA 2009 (ACITA 09), Adelphi, MD, September. 2009',
  },
  {
    YEAR: 2009,
    TITLE: 'SewerSnort: A Drifting Sensor for In-situ Sewer Gas Monitoring',
    AUTHORS: [
      'Jihyoung Kim',
      'Jung Soo Lim',
      'Jonathan Friedman',
      'Uichin Lee',
      'Luiz Vieira',
      'Diego Rosso',
      'Mario Gerla',
      'Mani B Srivastava',
    ],
    PUBLISHED: "IEEE SECON'09, Rome, Italy, June, 2009",
  },
  {
    YEAR: 2009,
    TITLE: 'TO-GO: TOpology-assist Geo-Opportunistic Routing in Urban Vehicular Grids',
    AUTHORS: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: "WONS'09, Snowbird, Utah, Feb., 2009",
  },
  {
    YEAR: 2009,
    TITLE: 'Survey of Routing Protocols in Vehicular Ad Hoc Networks',
    AUTHORS: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla.'],
    PUBLISHED:
      'Advances in Vehicular Ad-Hoc Networks: Developments and Challenges, IGI Global (Book Chapter), Oct, 2009',
  },
  {
    YEAR: 2009,
    TITLE: 'Bio-inspired Multi-Agent Data Harvesting in a Proactive Urban Monitoring Environment',
    AUTHORS: [
      'Uichin Lee',
      'Eugenio Magistretti',
      'Mario Gerla',
      'Paolo Bellavista',
      'Pietro Lio',
      'Kang-Won Lee',
    ],
    PUBLISHED:
      'Ad Hoc Networks Journal (Elsevier), Special Issue on Bio-Inspired Computing and Communication in Wireless Ad Hoc and Sensor Networks, Volume 7, Issue 4, pp. 725-741, June 2009',
  },
  {
    YEAR: 2009,
    TITLE: 'Dissemination and Harvesting of Urban Data using Vehicular Sensor Platforms',
    AUTHORS: [
      'Uichin Lee',
      'Eugenio Magistretti',
      'Mario Gerla',
      'Paolo Bellavista',
      'Antonio Corradi',
    ],
    PUBLISHED:
      'IEEE Transaction on Vehicular Technology, Volume 58, Issue 2, pp. 882-901, Feb. 2009',
  },
  {
    YEAR: 2009,
    TITLE: 'Emerging Vehicular Applications',
    AUTHORS: ['Uichin Lee', 'Ryan Cheung', 'Mario Gerla'],
    PUBLISHED:
      'Vehicular Networks: From Theory to Practice, CRC Press, Taylor & Francis Group, 2009',
  },
  {
    YEAR: 2008,
    TITLE: 'RelayCast: Scalable Multicast Routing in Delay Tolerant Networks',
    AUTHORS: ['Uichin Lee', 'Soon Young Oh', 'Kang-Won Lee', 'Mario Gerla'],
    PUBLISHED: "ICNP'08, Orlando, Florida, Oct., 2008",
  },
  {
    YEAR: 2008,
    TITLE: 'Phero-Trail: a Bio-inspired Location Service for Mobile Underwater Sensors',
    AUTHORS: ['Luiz F. M. Vieira', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: "WUWNet'08, San Francisco, California, USA Sept. 15, 2008",
  },
  {
    YEAR: 2008,
    TITLE: 'Bio-inspired Multi-Agent Collaboration for Urban Monitoring Applications',
    AUTHORS: [
      'Uichin Lee',
      'Eugenio Magistretti',
      'Mario Gerla',
      'Paolo Bellavista',
      'Pietro Lio',
      'Kang-Won Lee',
    ],
    PUBLISHED: 'BIOWIRE 2007, LNCS 5151, pp. 204-216, 2008',
  },
  {
    YEAR: 2008,
    TITLE:
      'Content Distribution in VANETs using Network Coding: The Effect of Disk I/O and Processing O/H',
    AUTHORS: ['Seung-Hoon Lee', 'Uichin Lee', 'Kang-Won Lee', 'Mario Gerla'],
    PUBLISHED: "IEEE SECON'08, San Francisco, CA, June 2008",
  },
  {
    YEAR: 2008,
    TITLE: 'Efficient Peer-to-peer File Sharing using Network Coding in MANET',
    AUTHORS: [
      'Uichin Lee',
      'Joon-Sang Park',
      'Seung-Hoon Lee',
      'Won W. Ro',
      'Giovanni Pau',
      'Mario Gerla',
    ],
    PUBLISHED:
      'Journal of Communications and Networks (JCN), Special Issue on Network Coding, Volume 10, Issue 4, pp. 422-429, Dec. 2008',
  },
  {
    YEAR: 2008,
    TITLE:
      'Delay Analysis of Car-to-Car Reliable Data Delivery Strategies based on Data Muling with Network Coding',
    AUTHORS: [
      'Joon-Sang Park',
      'Uichin Lee',
      'Soon Y. Oh',
      'Mario Gerla',
      'Desmond S. Lun',
      'Won W. Ro',
      'Joonseok Park',
    ],
    PUBLISHED:
      'IEICE Transactions on Information and Systems, Volume E91-D, Issue 10, pp. 2524-2527, Oct. 2008',
  },
  {
    YEAR: 2008,
    TITLE: 'Tapping Vehicle Sensors for Homeland Security',
    AUTHORS: ['Mario Gerla', 'Uichin Lee'],
    PUBLISHED: 'Homeland Security Book, Artech House, 2008',
  },
  {
    YEAR: 2007,
    TITLE:
      'Enhanced Perimeter Routing for Geographic Forwarding Protocols in Urban Vehicular Scenarios',
    AUTHORS: ['Kevin C. Lee', 'Jerome Haerri', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: "In AutoNet'07, Washington, D.C., Nov. 2007.",
  },
  {
    YEAR: 2007,
    TITLE:
      'Standard Integration of Sensing and Opportunistic Diffusion for Urban Monitoring in Vehicular Sensor Networks: the MobEyes Architecture',
    AUTHORS: ['P. Bellavista', 'E. Magistretti', 'U. Lee', 'and M. Gerla.'],
    PUBLISHED: 'In IEEE ISIE, Vigo, Spain, Jun. 2007.',
  },
  {
    YEAR: 2007,
    TITLE: 'BlueTorrent: Cooperative Content Sharing for Bluetooth Users',
    AUTHORS: ['Sewook Jung', 'Uichin Lee', 'Alexander Chang', 'Dae-Ki Cho', 'Mario Gerla'],
    PUBLISHED:
      "In IEEE PerCom'07, White Plains, NY, March 19-23, 2007 (Mark Weiser Best Paper Award)",
  },
  {
    YEAR: 2007,
    TITLE:
      'A Mobile Delay-tolerant Approach to Long-term Energy-efficient Underwater Sensor Networking',
    AUTHORS: [
      'Eugenio Magistretti',
      'Jiejun Kong',
      'Uichin Lee',
      'Mario Gerla',
      'Paolo Bellavista',
      'Antonio Corradi',
    ],
    PUBLISHED:
      'IEEE Wireless Communications & Networking Conference (WCNC), Hong Kong, March 11-15, 2007.',
  },
  {
    YEAR: 2007,
    TITLE: 'BlueTorrent: Cooperative Content Sharing for Bluetooth Users',
    AUTHORS: ['Sewook Jung', 'Uichin Lee', 'Alexander Chang', 'Dae-Ki Cho', 'Mario Gerla', ''],
    PUBLISHED: 'Pervasive and Mobile Computing, Volume 3, Issue 6, pp. 609-634, Dec. 2007',
  },
  {
    YEAR: 2007,
    TITLE:
      'Time-critical Underwater Sensor Diffusion with No Proactive Exchanges and Negligible Reactive Floods',
    AUTHORS: ['Uichin Lee', 'Jiejun Kong', 'Eugenio Magistretti', 'Joon-Sang Park', 'Mario Gerla'],
    PUBLISHED:
      'Ad Hoc Networks Journal (Elsevier), Special Issue on Recent Advances in Wireless Sensor Networks, Volume 5, Issue 6, pp. 943-958, Aug. 2007',
  },
  {
    YEAR: 2006,
    TITLE: 'MobEyes: Smart Mobs for Urban Monitoring with a Vehicular Sensor Network',
    AUTHORS: [
      'Uichin Lee',
      'Eugenio Magistretti',
      'Biao Zhou',
      'Mario Gerla',
      'Paolo Bellavista',
      'Antonio Corradi',
    ],
    PUBLISHED: 'IEEE Wireless Communications, Volume 13, Issue 5, pp. 52-57, Sep. 2006.',
  },
  {
    YEAR: 2006,
    TITLE: 'CodeTorrent: Content Distribution using Network Coding in VANETs',
    AUTHORS: ['Uichin Lee', 'Joon-Sang Park', 'Joseph Yeh', 'Giovanni Pau', 'Mario Gerla'],
    PUBLISHED:
      "The First International Workshop on Decentralized Resource Sharing in Mobile Computing and Networking (MobiShare'06), Los Angeles, CA, September 2006",
  },
  {
    YEAR: 2006,
    TITLE: 'Vehicular Grid Communications: The Role of the Internet Infrastructure',
    AUTHORS: [
      'Mario Gerla',
      'Biao Zhou',
      'Yeng-Zhong Lee',
      'Fabio Soldo',
      'Uichin Lee',
      'Gustavo Marfia',
      '',
    ],
    PUBLISHED: 'Wireless Internet Conference (WICON 2006) , Boston, NY, August 2006.',
  },
  {
    YEAR: 2006,
    TITLE: 'FleaNet: A Virtual Market Place on Vehicular Networks',
    AUTHORS: ['Uichin Lee', 'Joon-Sang Park', 'Eyal Amir', 'Mario Gerla.'],
    PUBLISHED:
      'The Second International Workshop on Vehicle-to-Vehicle Communications 2006(V2VCOM 2006), pp. 1-8, San Jose, CA, July 2006.',
  },
  {
    YEAR: 2006,
    TITLE:
      'Time-critical Underwater Sensor Diffusion with No Proactive Exchanges and Negligible Reactive Floods',
    AUTHORS: [
      'Uichin Lee',
      'Jiejun Kong',
      'Joon-Sang Park',
      'Eugenio Magistretti',
      'Mario Gerla',
      '',
    ],
    PUBLISHED:
      "IEEE Symposium on Computers and Communications (ISCC'06), Sardinia, Italy, June, 2006",
  },
  {
    YEAR: 2006,
    TITLE: 'Efficient Data Harvesting in Mobile Sensor Platforms',
    AUTHORS: [
      'Uichin Lee',
      'Eugenio Magistretti',
      'Biao Zhou',
      'Mario Gerla',
      'Paolo Bellavista',
      'Antonio Corradi',
    ],
    PUBLISHED:
      'Second IEEE International Workshop on Sensor Networks and Systems for Pervasive Computing (PerSeNS 2006), Pisa, Italy, March, 2006',
  },
  {
    YEAR: 2006,
    TITLE: 'Understanding Pollution Dynamics in P2P File Sharing',
    AUTHORS: ['Uichin Lee', 'Min Choi', 'Junghoo Cho', 'Medy. Y. Sanadidi', 'Mario Gerla'],
    PUBLISHED:
      "The 5th International Workshop on Peer-to-Peer Systems (IPTPS'06), Santa Babara, USA, February, 2006.",
  },
  {
    YEAR: 2005,
    TITLE: 'Flow Based Dynamic Load Balancing for Passive Network Monitoring',
    AUTHORS: ['Uichin Lee', 'Joon-Sang Park', 'M. Y. Sanadidi', 'M. Gerla'],
    PUBLISHED:
      'In Proc. of Communications and Computer Networks (CCN 2005), Marina Del Rey, USA, October 2005.',
  },
  {
    YEAR: 2005,
    TITLE: 'Automatic Identification of User Goals in Web Search',
    PUBLISHED: 'In Proc. of the World-Wide Web Conference (WWW), Chiba, Japan, May 2005.',
    AUTHORS: ['Uichin Lee', 'Zhenyu Liu', 'Junghoo Cho'],
  },
  {
    YEAR: 2009,
    TITLE: 'CodeCast: Network Coding Based Multicast in MANETs',
    AUTHORS: ['Chien-Chia Chen', 'Chieh-Ning Lien', 'Uichin Lee', 'Soon Y. Oh', 'and Mario Gerla'],
    PUBLISHED: "HotMobile'09(Demo)",
  },
  {
    YEAR: 2008,
    TITLE: 'TO-GO: TOpology-assist Geo-Opportunistic Routing in Urban Vehicular Grids',
    AUTHORS: ['Kevin C. Lee', 'Uichin Lee', 'Mario Gerla', ''],
    PUBLISHED: "ICNP'08 (Poster)",
  },
  {
    YEAR: 2008,
    TITLE:
      'Proof-of-Relevance: Filtering False Data via Authentic Consensus in Vehicle Ad-hoc Networks',
    AUTHORS: ['Zhen Cao', 'Jiejun Kong', 'Uichin Lee', 'Mario Gerla', 'Zhong Chen'],
    PUBLISHED: "MOVE'08 in conjunction with INFOCOM'08",
  },
  {
    YEAR: 2007,
    TITLE:
      'Understanding the Capacity and Delay Scaling Laws of Delay Tolerant Networks: A Unified Approach',
    AUTHORS: ['Uichin Lee', 'Kang-Won Lee', 'Soon-Young Oh', 'Mario Gerla'],
    PUBLISHED: 'UCLA Technical Report: TR-070020 [PDF]',
  },
  {
    YEAR: 2007,
    TITLE: 'First Experience with CarTorrent in a Real Vehicular Ad Hoc Network Testbed',
    AUTHORS: ['Kevin C. Lee', 'Seung-Hoon Lee', 'Ryan Cheung', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: "MOVE'07 in conjunction with INFOCOM'07",
  },
  {
    YEAR: 2006,
    TITLE: 'Analysis of Aloha Protocols for Underwater Acoustic Sensor Networks',
    AUTHORS: ['Luiz Filipe M. Vieira', 'Jiejun Kong', 'Uichin Lee', 'Mario Gerla'],
    PUBLISHED: "WUWNet'06, Los Angeles, CA, Sept. 24, 2006",
  },
  {
    YEAR: 2005,
    TITLE: 'Emergency Related Video Streaming in VANETs using Network Coding',
    AUTHORS: ['Joon-Sang Park', 'Uichin Lee', 'Soon Young Oh', 'Mario Gerla', 'Desmond Lun'],
    PUBLISHED:
      'Third ACM International Workshop on Vehicular Ad Hoc Networks - VANET 2006 Poster Session CSD-TR070016',
  },
]

export default publicationsData
