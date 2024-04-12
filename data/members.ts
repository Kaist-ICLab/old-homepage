type MemberRole = "Director" | "Ph.D. Student" | "M.S. Student" | "Post Doctoral Researcher" | "Alumni";
interface Member {
    name: string;
    role: MemberRole;
    email: string;
    histories: { [key: string]: string };
    // img: string; TODO: Decide to use name as a Key
    homepage?: string;
    github?: string;
    google_scholar?: string;
    research_interests?: string[];
    current_affiliation?: string;
}

const members: { [key: string]: Member } = {
    UichinLee: {
        name: "Uichin Lee",
        role: "Director",
        email: "uclee@kaist.ac.kr",
        google_scholar: 'https://scholar.google.co.kr/citations?user=Sc2pBzYAAAAJ',
        histories: {
            "Director": "2010.03 ~ "
        }
    },
    JeonghyunKim: {
        name: 'Jeonghyun Kim',
        role: "M.S. Student",
        email: "kjhrlawjdgus@kaist.ac.kr",
        github: "https://github.com/Jeonghyun109",
        histories: {
            "M.S. Student": "2024.03 ~ ",
        },
        research_interests: [
            "Human-Computer Interaction",
            "Affective Computing",
            "IoT sensor data",
            "Personalized Digital Health"
        ],
    },
    ThuVo: {
        name: 'Thu Vo',
        role: "M.S. Student",
        email: "thuvo@kaist.ac.kr",
        histories: {
            "M.S. Student": "2024.03 ~ ",
        },
        research_interests: ['Human-Computer Interaction', "Mental Health Intervention"],
    },
    GyunaKim: {
        name: 'Gyuna Kim',
        role: "M.S. Student",
        email: "gyuna.kim@kaist.ac.kr",
        github: "https://github.com/gn0219",
        research_interests: ['Human-Computer Interaction', 'Mental Health'],
        histories: {
            "M.S. Student": "2024.03 ~ "
        }
    },
    HyunsooLee: {
        name: 'Hyunsoo Lee',
        email: 'hslee90@kaist.ac.kr',
        role: "Post Doctoral Researcher",
        google_scholar: 'https://scholar.google.com/citations?user=ctglUjoAAAAJ&hl=ko',
        github: 'https://github.com/hslee90',
        research_interests: [
            'Sensor Data Privacy',
            'Usable Privacy',
            'Human Factors in Privacy and Security',
        ],
        histories: {
            "M.S. Student": "2017.09 ~ 2019.08",
            "Ph.D. Student": "2019.09 ~ 2023.08",
            "Post Doctoral Researcher": "2023.09 ~ "
        }
    },
    HansooLee: {
        name: 'Hansoo Lee',
        role: "Ph.D. Student",
        email: 'hansoo@kaist.ac.kr',
        google_scholar: 'https://scholar.google.co.kr/citations?user=Ezt-IT0AAAAJ',
        github: 'https://github.com/hansoolee18',
        research_interests: ['Mobile Sensing', 'Digital Health', 'Routine Computing'],
        histories: {
            "Ph.D. Student": "2018.09 ~ "
        }
    },
    GyuwonJung: {
        name: 'Gyuwon Jung',
        role: 'Ph.D. Student',
        email: 'gwjung@kaist.ac.kr',
        histories: {
            "M.S. Student": "2016.03 ~ 2018.02",
            "Ph.D. Student": "2020.03 ~ "
        },
        homepage: 'https://gw-jung.github.io/',
        google_scholar: 'https://scholar.google.com/citations?user=byhoe3YAAAAJ',
        research_interests: ['Digital Health', 'Causal Inference', 'Human-Data Interaction'],
    },
    YoungjiKoh: {
        name: 'Youngji Koh',
        role: "Ph.D. Student",
        email: 'youngji@kaist.ac.kr',
        histories: {
            "Ph.D. Student": "2021.09 ~ "
        },
        homepage: 'https://youngji-koh.github.io/',
        research_interests: ['Mental Health Self-Tracking', 'Smarthome IoT Sensing'],
    },
    YugyeongJung: {
        name: 'Yugyeong Jung',
        role: "Ph.D. Student",
        email: 'yugyeong.jung@kaist.ac.kr',
        histories:{
            "M.S. Student": "2020.03 ~ 2022.02",
            "Ph.D. Student": "2022.03 ~ "
        },
        github: 'https://github.com/yugyeongjung',
        research_interests: ['Data visualization', 'Human-data interaction', 'Social robotics'],
    },
    DuriLee: {
        name: 'Duri Lee',
        role: "Ph.D. Student",
        email: 'duri.lee@kaist.ac.kr',
        histories: {
            "Ph.D. Student": "2022.03 ~ ",
        },
        research_interests: ['Human Digital Twin', 'e-Mental Health Modeling', 'IoT sensor data'],
    },
    PanyuZhang: {
        name: 'Panyu Zhang',
        role: "Ph.D. Student",
        email: 'panyu@kaist.ac.kr',
        histories: {
            "M.S. Student": "2020.09 ~ 2023.02",
            "Ph.D. Student": "2023.03 ~ ",
        },
        research_interests: ['Routine Computing', 'Affective Computing'],
    },
    SangjunPark: {
        name: 'Sangjun Park',
        role: "Ph.D. Student",
        email: 'sangjun@kaist.ac.kr',
        github: 'https://github.com/highjun10170',
        homepage: 'https://highjun10170.github.io/',
        google_scholar: "https://scholar.google.com/citations?user=esrgGaEAAAAJ&hl=ko",
        research_interests: ['Mobile Sensing Platform', 'Personal Informatics'],
        histories: {
            "M.S. Student": "2022.03 ~ 2024.02",
            "Ph.D. Student": "2024.03 ~ ",
        }
    },
    YunjoHan: {
        name: 'Yunjo Han',
        role: "Alumni",
        email: 'yjhan99@kaist.ac.kr',
        histories: {
            "M.S. Student": "2022.03 ~ 2024.02"
        },
        github: 'https://github.com/yjhan99',
        current_affiliation: "Samsung Research",
        research_interests: ['Affective Computing', 'Mobile Sensing'],
    },
    EunkiJoung: {
        name: 'Eunki Joung',
        role: "M.S. Student",
        email: 'eunki@kaist.ac.kr',
        histories: {
            "M.S. Student": "2023.03 ~ "
        },
        github: 'https://github.com/eunkiyomi',
        research_interests: ['Human-Computer Interaction', 'Computer-Mediated Communication'],
    },
    HeejeongLim: {
        name: 'Heejeong Lim',
        role: "M.S. Student",
        email: 'hj.lim@kaist.ac.kr',
        histories: {
            "M.S. Student": "2023.03 ~ "
        },
        github: 'https://github.com/Heej99',
        research_interests: ['Sensor Data Science', 'IoT sensor data'],
    },
    HyesooPark: {
        name: 'Hyesoo Park',
        role: "M.S. Student",
        email: 'hyehye@kaist.ac.kr',
        histories: {
            "M.S. Student": "2023.03 ~ "
        },
        homepage: 'https://hyesoopark.com',
        github: 'https://github.com/HyeSPark',
        google_scholar: 'https://scholar.google.com/citations?user=RI56iIAAAAAJ&hl=ko',
        research_interests: ['Human-Computer Interaction', 'Behavioral Change Support System', 'Assistive Technologies'],
    },
    ChanheeLee: {
        name: 'Chanhee Lee',
        role: "M.S. Student",
        email: 'chanhee015@kaist.ac.kr',
        histories: {
            "M.S. Student": "2023.09 ~ "
        },
        github: 'https://github.com/thunini',
        research_interests: ['Human-Computer Interaction', 'Sensor Data Science',
            'Mental Health Sensing', 'Human-AI Interaction'],
    },
    SueunJang: {
        name: 'Sueun Jang',
        role: "Ph.D. Student",
        email: "sueun.jang@kaist.ac.kr",
        histories: {
            "Ph.D. Student": "2023.09 ~ "
        },
        research_interests: ['Human-Computer Interaction', 'Linguistic Interaction', 'Feedback, Meta-cognition'],
    },
    HwindolPark: {
        name: 'Hwindol Park',
        role: "Ph.D. Student",
        email: "park.hwin@kaist.ac.kr",
        histories: {
            "Ph.D. Student": "2023.09 ~ "
        },
        research_interests: ['Human-Computer Interaction', 'Healthcare', 'Time-series analysis'],
    },
    JeongyunHeo: {
        name: 'Jeongyun Heo',
        role: "Alumni",
        email: "yuniheo@kookmin.ac.kr",
        current_affiliation: "Professor at Kookmin Univ.",
        histories: {
            "Ph.D. Student": "??? ~ 2023.08"
        },
    },
    JoonyoungPark: {
        name: 'Joonyoung Park',
        role: "Alumni",
        email: 'jypark@kse.kaist.ac.kr',
        current_affiliation: 'BIONEVER',
        histories: {
            "Post Doctoral Researcher": "2023.03 ~ 2023.08",
            "Ph.D. Student": "2017.09 ~ 2023.02",
            "M.S. Student": "2017.03 ~ 2019.02",
        },
        google_scholar: 'https://scholar.google.co.kr/citations?user=uzqaSMMAAAAJ&hl=ko',
        github: 'https://github.com/zelatore',
        research_interests: ['Behavioral Psychology', 'JIT-based DBCI', 'Reinforcement Learning'],
    },
    WoohyeokChoi: {
        name: 'Woohyeok Choi',
        role: "Alumni",
        email: 'woohyeok.choi@kaist.ac.kr',
        current_affiliation: 'Assistant Professor, Kangwon National University',
        histories: {
            "Post Doctoral Researcher": "2021.09 ~ 2023.08",
            "Ph.D. Student": "2015.03 ~ 2021.08",
            "M.S. Student": "2013.03 ~ 2015.02"
        },
        google_scholar: 'https://scholar.google.com/citations?user=PaIwvKYAAAAJ&hl=en',
        research_interests: [
            'Mobile/Ubiquitous Health',
            'Behavior change with mobile computing and machine learning',
        ],
    },
    InyeopKim: {
        name: 'Inyeop Kim',
        role: "Alumni",
        email: 'inyeop@kse.kaist.ac.kr',
        current_affiliation: 'Samsung SDS',
        histories: {
            "Post Doctoral Researcher": "2021.09 ~ 2023.01",
            "Ph.D. Student": "2016.03 ~ 2021.08"
        },
        google_scholar: 'https://scholar.google.com/citations?user=VQ8rjvkAAAAJ&hl=ko&oi=ao',
        research_interests: ['Context-aware system', 'Digital wellbeing'],
    },
    SoowonKang: {
        name: 'Soowon Kang',
        role: "Alumni",
        email: 'sw.kang@kaist.ac.kr',
        current_affiliation: 'Hyundai Motor Group',
        histories: {
            "Ph.D. Student": "2018.03 ~ 2023.08"
        },
        google_scholar: 'https://scholar.google.com/citations?user=B9HMz0EAAAAJ&hl=ko',
        github: 'https://github.com/soowon-kang',
        research_interests: [
            'Sensor Data Science',
            'Mobile Systems',
        ],
    },
    EunjiPark: {
        name: 'Eunji Park',
        role: "Alumni",
        email: 'eunji.park@kaist.ac.kr',
        current_affiliation: 'Assistant Professor, Chung-Ang University',
        histories: {
            "Ph.D. Student": "2019.03 ~ 2023.08"
        },
        google_scholar: 'https://scholar.google.com/citations?user=Kx8C1FQAAAAJ&hl=ko',
        homepage: 'https://cookingfoil.github.io/',
        github: 'https://github.com/cookingfoil',
        research_interests: [
            'User modeling; Quantitative measurement of human performance',
            'Multimodal interaction and sensor fusion',
        ],
    },
    YouwonShin: {
        name: 'Youwon Shin',
        role: "Alumni",
        current_affiliation: 'Samsung Electronics',
        histories: {
            "M.S. Student": "2021.03 ~ 2023.02"
        },
        email: 'youwon.shin@kaist.ac.kr',
        github: 'https://github.com/yuwon-shin',
        homepage: 'https://yuwon-shin.github.io/',
        google_scholar: 'https://scholar.google.com/citations?user=u0HFXqQAAAAJ&hl=ko',
        research_interests: ['IoT sensor data', 'Data visualization'],
    },
    JieunLim: {
        name: 'Jieun Lim',
        role: "Alumni",
        histories: {
            "M.S. Student": "2021.09 ~ 2023.08"
        },
        email: 'jieun.lim@kaist.ac.kr',
        google_scholar: 'https://scholar.google.com/citations?user=XyHQwXkAAAAJ&hl=en',
        research_interests: ['VUI', 'Smartspeaker Interaction'],
    },
    HeiYiuLaw: {
        name: 'Hei Yiu Law',
        role: "Alumni",
        email: 'emilyelhy@kaist.ac.kr',
        histories: {
            "M.S. Student": "2021.09 ~ 2023.08"
        },        
        github: 'https://github.com/emilyelhy',
        homepage: 'https://www.linkedin.com/in/hei-yiu-law/',
        research_interests: ['Embedded system', 'Smart device', 'Privacy'],
    },
    YongShinKim: {
        name: 'Yongshin Kim',
        role: "Alumni",
        current_affiliation: 'OKESTRO',
        histories: {
            "M.S. Student": "2020.09 ~ 2022.08"
        },
        email: 'ys.k@kaist.ac.kr',
        homepage: 'https://yong-shin.github.io/',
    },
    // JeungminOh: {
    //     name: 'Jeungmin Oh',
    //     role: "Alumni",
    //     email: "jminoh@kaist.ac.kr",
    //     current_affiliation: 'Hayan Mind',
    //     histories: {
    //         "Ph.D. Student": "2012.02 ~ LOA"
    //     }
    // },
    // EugeneLee: {
    //     name: 'Eugene Lee',
    //     role: "Alumni",
    //     email: 'eugene.lee@kaist.ac.kr',
    //     histories: {
    //         "M.S. Student": "2021.03 ~ LOA"
    //     }
    // },
    CheulyoungPark: {
        name: 'Cheulyoung Park',
        role: "Alumni",
        email: 'cheulyop@kaist.ac.kr',
        histories: {
            "M.S. Student": "2018.09 ~ 2021.02"
        }
    },
    MinhyoungKim: {
        name: 'Minhyoung Kim',
        role: "Alumni",
        email: 'mindrome95@kaist.ac.kr',
        histories: {
            "M.S. Student": "2019.03 ~ 2021.02"
        }        
    },
    JuhoSun: {
        name: 'Juho Sun',
        role: "Alumni",
        email: 'juho.sun@kaist.ac.kr',
        current_affiliation: 'Yanolja',
        histories: {
            "M.S. Student": "2019.03 ~ 2021.02"
        }
    },
    AukKim: {
        name: 'Auk Kim',
        role: "Alumni",
        email: 'kimauk@kaist.ac.kr',
        current_affiliation: 'Assistant Professor at Kangwon National Univ.',
        histories: {
            "Ph.D. Student": "2014.03 ~ 2020.02"
        }        
    },
    NaraeCha: {
        name: 'Narae Cha',
        role: "Alumni",
        email: 'nr.cha@kaist.ac.kr',
        current_affiliation: "LG CNS",
        histories: {
            "M.S. Student": "2018.03 ~ 2020.02"
        }
    },
    JongwonKim: {
        name: 'Jongwon Kim',
        role: "Alumni",
        email: 'jong1k@kaist.ac.kr',
        current_affiliation: 'TmaxSoft',
        histories: {
            "M.S. Student": "2017.03 ~ 2019.08"
        }
    },
    DuyeonKim: {
        name: 'Duyeon Kim',
        role: "Alumni",
        email: "duyeon@kaist.ac.kr",
        histories: {
            "M.S. Student": "2017.09 ~ 2019.08"
        }
    },
    SangkeunPark: {
        name: 'Sangkeun Park',
        role: "Alumni",
        email: 'sk.park@kaist.ac.kr',
        current_affiliation: 'Assistant Professor at Kyung Hee Univ.',
        histories: {
            "Ph.D. Student": "2014.03 ~ 2019.08",
            "M.S. Student": "2012.03 ~ 2014.02"
        },
        homepage: 'http://sangkeunpark.com/',
    },
    JaejeungKim: {
        name: 'Jaejeung Kim',
        role: "Alumni",
        current_affiliation: 'Assistant Professor at Chungnam National Univ.',
        email: 'jjk@kaist.ac.kr',
        histories: {
            "Ph.D. Student": "2014.03 ~ 2019.02"
        }
    },
    JeminLee: {
        name: 'Jemin Lee',
        role: "Alumni",
        histories: {
            "Post Doctoral Researcher": "2017.09 ~ 2018.08"
        },
        email: 'leejaymin@kaist.ac.kr',
        homepage: 'https://leejaymin.github.io/index.html',
    },
    RihunKim: {
        name: 'Rihun Kim',
        role: "Alumni",
        current_affiliation: "Kakao",
        email: 'rihun.kim@kaist.ac.kr',
        histories: {
            "M.S. Student": "2016.03 ~ 2018.02"
        }
    },
    HayoungJung: {
        name: 'Hayoung Jung',
        role: "Alumni",
        current_affiliation: 'CJ Olivenetworks',
        histories: {
            "M.S. Student": "2016.03 ~ 2018.02"
        },
        email: 'hayoung0202@kaist.ac.kr',
    },
    ChristineBalili: {
        name: 'Christine Balili',
        role: "Alumni",
        histories: {
            "M.S. Student": "2016.03 ~ 2018.02"
        },
        email: 'ccbalili@kaist.ac.kr',
    },
    SujinKwon: {
        name: 'Sujin Kwon',
        role: "Alumni",
        current_affiliation: 'ADD',
        histories: {
            "M.S. Student": "2015.09 ~ 2018.02"
        },
        email: 'sujingjing@kaist.ac.kr',
    },
    SungwookMoon: {
        name: 'Sungwook Moon',
        role: "Alumni",
        current_affiliation: "Becod",
        histories: {
            "M.S. Student": "2015.09 ~ 2017.08"
        },
        email: 'm.sw@kaist.ac.kr',
    },
    HayeonJeong: {
        name: 'Hayeon Jeong',
        role: "Alumni",
        current_affiliation: 'Amorepacific Research',
        email: 'hayeon412@kaist.ac.kr',
        histories: {
            "M.S. Student": "2015.03 ~ 2017.02"
        }
    },
    MinsamKo: {
        name: 'Minsam Ko',
        role: "Alumni",
        current_affiliation: 'Assistant Professor at Hanyang Univ. ERICA',
        histories: {
            "Ph.D. Student": "2011.03 ~ 2016.08"
        },
        email: 'msko@kaist.ac.kr',
    },
    JoohyunKim: {
        name: 'Joohyun Kim',
        role: "Alumni",
        current_affiliation: 'IQVIA',
        histories: {
            "M.S. Student": "2014.09 ~ 2016.08"
        },
        email: 'joohyun.kim@kaist.ac.kr'
    },
    SergeyLeksikov: {
        name: 'Sergey Leksikov',
        role: "Alumni",
        current_affiliation: 'Lablup Inc.',
        histories: {
            "M.S. Student": "2014.09 ~ 2016.08"
        },
        email: 'sergey@kaist.ac.kr',
    },
    AejinSong: {
        name: 'Aejin Song',
        role: "Alumni",
        histories: {
            "Ph.D. Student": "2014.03 ~ 2016.02"
        },
        email: 'aejin.song@kaist.ac.kr',
    },
    SungjunKang: {
        name: 'Sungjun Kang',
        role: "Alumni",
        current_affiliation: 'Skelter Labs',
        histories: {
            "M.S. Student": "2013.09 ~ 2015.08"
        },
        email: 'sjkang89@kaist.ac.kr',
    },
    DaeheeShin: {
        name: 'Daehee Shin',
        role: "Alumni",
        current_affiliation: 'KB Kookmin Card',
        histories: {
            "M.S. Student": "2013.09 ~ 2015.08"
        },
        email: 'daehee.shin@kaist.ac.kr',
    },
    SoobinYang: {
        name: 'Soobin Yang',
        role: "Alumni",
        histories: {
            "M.S. Student": "2013.09 ~ 2015.08"
        },
        email: 'subin.yang@kaist.ac.kr',
    },
    JoonwonLee: {
        name: 'Joonwon Lee',
        role: "Alumni",
        current_affiliation: 'Naver',
        histories: {
            "M.S. Student": "2012.09 ~ 2015.02"
        },
        email: 'cafielo@kaist.ac.kr',
    },
    YoungchangKo: {
        name: 'Youngchang Ko',
        email: 'youngchang@kaist.ac.kr',
        role: "Alumni",
        current_affiliation: 'ADD',
        histories: {
            "M.S. Student": "2011.03 ~ 2013.02"
        }
    },
    EunheeYi: {
        name: 'Eunhee Yi',
        role: "Alumni",
        current_affiliation: 'LG Electronics',
        email: 'eunhee.yi@kaist.ac.kr',
        histories: {
            "M.S. Student": "2010.09 ~ 2012.08"
        }
    },
}

export type { Member, MemberRole }
export default members;
