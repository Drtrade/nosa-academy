import founderImg from '../assets/images/IMG_7656.JPG'
import monVideo from '../assets/videos/MON.mp4'
import shortVideo from '../assets/videos/ShortVidoe.MP4'
import KennedyPhoto from '../assets/images/Kennedy.jpg'
import NosaPhoto from '../assets/images/NosaIgiebor.png'
import partnerTwo from '../assets/images/partners/Partner02.png'
import partnerOne from '../assets/images/partners/Partnere01.jpg'

// Add to existing constants.js file

export const HOME_CONTENT = {
  hero: {
    title: "Nosa Igiebor Sports Academy",
    subtitle: "Where Champions Are Made",
    description: "Transform your passion into excellence. Join the premier football academy where champions are made and dreams become reality.",
    videoUrl: monVideo, // Replace with actual video
    stats: [
      { icon: "Users", value: "500+", label: "Active Players" },
      { icon: "Award", value: "50+", label: "Championships Won" },
      { icon: "Calendar", value: "10+", label: "Years Experience" },
      { icon: "Globe", value: "15+", label: "Countries Represented" }
    ]
  },
  
  

  academyPrograms: {
    foundationProgram: {
      title: "Foundation Program",
      subtitle: "Scouting & Training Underprivileged Talent",
      description: "Our foundation-funded program identifies and nurtures exceptional talent from underprivileged backgrounds, providing world-class training, equipment, and opportunities regardless of financial circumstances.",
      features: [
        "Full scholarship opportunities",
        "Professional coaching at no cost",
        "Equipment and kit provided",
        "Nutritional support program",
        "Academic tutoring included",
        "Pathway to professional clubs"
      ],
      eligibility: "Based on talent assessment and financial need",
      icon: "Heart",
      color: "from-blue-500 to-blue-600"
    },
    professionalProgram: {
      title: "Professional Academy",
      subtitle: "Structured Elite Training & Development",
      description: "Our fee-based professional program offers structured elite training with personalized development plans, advanced coaching methodologies, and direct pathways to professional football careers.",
      features: [
        "Individual development plans",
        "Advanced tactical training",
        "Professional-grade facilities",
        "Sports science integration",
        "International tournament participation",
        "Direct club connections"
      ],
      eligibility: "Open enrollment with skills assessment",
      icon: "Trophy",
      color: "from-green-500 to-green-600"
    }
  },

  coachingPhilosophy: {
    discipline: {
      title: "Discipline & Character",
      description: "We believe that true champions are built through discipline, respect, and strong character. Our program instills values that extend far beyond football - developing leaders who positively impact their communities.",
      points: [
        "Character-first development approach",
        "Leadership training and mentorship",
        "Community service integration",
        "Mental resilience building",
        "Respect and sportsmanship emphasis"
      ],
      icon: "Shield"
    },
    coaching: {
      title: "Quality Coaching & Training",
      description: "Our coaching staff comprises former professional players and certified experts who bring world-class experience to every training session. We combine traditional football wisdom with modern sports science.",
      points: [
        "UEFA-licensed professional coaches",
        "Former international players on staff",
        "Individualized training programs",
        "Video analysis and performance tracking",
        "Sports psychology integration"
      ],
      icon: "Award"
    },
    exposure: {
      title: "Global Exposure",
      description: "We provide opportunities for our players to compete internationally, experience different football cultures, and showcase their talents to scouts from top clubs around the world.",
      points: [
        "International tournament participation",
        "Exchange programs with European academies",
        "Scout network across 5 continents",
        "Cultural immersion experiences",
        "Professional club trial opportunities"
      ],
      icon: "Globe"
    }
  },

  whatWeOffer: [
    {
      title: "World-Class Training",
      description: "Professional coaching with UEFA-licensed instructors and former international players",
      icon: "Users"
    },
    {
      title: "Character Development",
      description: "Building leaders and champions both on and off the pitch through values-based education",
      icon: "Heart"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art training grounds, fitness centers, and recovery facilities",
      icon: "Building"
    },
    {
      title: "Global Opportunities",
      description: "International tournaments, exchange programs, and professional club connections",
      icon: "Globe"
    },
    {
      title: "Academic Excellence",
      description: "Balanced approach combining football excellence with educational achievement",
      icon: "BookOpen"
    },
    {
      title: "Professional Pathway",
      description: "Direct connections to professional clubs and university scholarship programs",
      icon: "TrendingUp"
    }
  ],

  playerGains: [
    {
      title: "Technical Excellence",
      description: "Master fundamental skills, advanced techniques, and tactical understanding",
      benefits: ["Ball control mastery", "Passing accuracy", "Shooting precision", "Tactical awareness"]
    },
    {
      title: "Physical Development",
      description: "Build strength, speed, agility, and endurance through professional training programs",
      benefits: ["Strength conditioning", "Speed development", "Agility training", "Injury prevention"]
    },
    {
      title: "Mental Fortitude",
      description: "Develop confidence, decision-making skills, and psychological resilience",
      benefits: ["Pressure handling", "Leadership skills", "Team dynamics", "Goal setting"]
    },
    {
      title: "Life Skills",
      description: "Learn valuable life lessons through sport including discipline, teamwork, and perseverance",
      benefits: ["Time management", "Communication", "Respect", "Resilience"]
    }
  ]
};

export const TRAINING_SCHEDULE_DETAILED = [
  {
    day: 'Monday & Wednesday',
    time: '4:00 PM - 6:00 PM',
    ageGroup: 'Under 12',
    program: 'Foundation & Professional',
    location: 'Main Field A',
    capacity: '20 players',
    focus: 'Basic Skills & Fun Games',
    activities: ['Ball mastery', 'Basic passing', 'Small-sided games', 'Coordination drills']
  },
  {
    day: 'Tuesday & Thursday', 
    time: '4:00 PM - 6:30 PM',
    ageGroup: 'Under 16',
    program: 'Foundation & Professional',
    location: 'Main Field B',
    capacity: '25 players',
    focus: 'Technical Development',
    activities: ['Advanced techniques', 'Tactical understanding', 'Position-specific training', 'Match scenarios']
  },
  {
    day: 'Friday',
    time: '5:00 PM - 7:00 PM',
    ageGroup: 'Under 18',
    program: 'Professional Program',
    location: 'Main Field A',
    capacity: '30 players',
    focus: 'Advanced Tactics',
    activities: ['Complex tactics', 'Set piece training', 'Physical conditioning', 'Leadership development']
  },
  {
    day: 'Saturday',
    time: '9:00 AM - 12:00 PM',
    ageGroup: 'All Ages',
    program: 'Foundation & Professional',
    location: 'All Fields',
    capacity: '100 players',
    focus: 'Match Day & Tournaments',
    activities: ['Competitive matches', 'Tournament play', 'Scout evaluations', 'Team bonding']
  },
  {
    day: 'Sunday',
    time: '10:00 AM - 1:00 PM',
    ageGroup: 'Elite Squad',
    program: 'Professional Program',
    location: 'Elite Training Center',
    capacity: '15 players',
    focus: 'Elite Development',
    activities: ['Individual coaching', 'Video analysis', 'Mental training', 'Professional preparation']
  }
];


export const AcademyInfo = {
  name: "Nosa Sports Academy",
  tagline: "Excellence in Training",
  foundedYear: 2024,
};

export const contactInfo = {
  whatsApp: "+2349055599964",
  email: "contact@nosaIgieborsports.com ",
  address: {
    street: "Stella Maris School, Plot 76 Cadastral Zone C10",
    district: "Wumba District",
    city: "Abuja",
    state: "Federal Capital Territory (FCT)",
    zipCode: "900104",
    country: "Nigeria",
  },
  phone: "+2348039148064",
  socialLinks: {
    facebook: "https://www.facebook.com/NosaIgieborSportsAcademy",
    instagram: "https://www.instagram.com/NosaIgieborSportsAcademy",
    
    threads: "https://www.threads.com/NosaIgieborSportsAcademy",
    tiktok: "https://www.tiktok.com/NosaIgieborSportsAcademy",
    twitter: "https://www.x.com/NosaAcademy",
    youtube: "http://www.youtube.com/@NosaIgieborSportsAcademy",
  },linkedin: "https://www.linkedin.com/NosaIgieborSportsAcademy",
  officeHours: {
    weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
    saturday: "Saturday: 8:00 AM - 6:00 PM",
    sunday: "Sunday: Closed",
    holidays: "Public Holidays: Closed",
  },
};

export const Owner = {
  president: {
    name: " Emmanuel Nosa Igiebor",
    nickname: "MON",
    position: "President & Founder",
    introduction:
      "Emmanuel Nosa Igiebor (MON), fondly known as 'Nosa', is a former Super Eagles midfielder who proudly represented Nigeria on the global stage. Born with a natural gift for football, and rose from humble beginnings in Abuja to become one of Nigeria’s most dynamic midfielders, played professional football across Canada, Cyprus, Israel, Norway, Spain, and Turkey. He is a lover of God, happily married with two lovely children, and loves to participate in initiatives that will draw the next generation closer to God and give back to their community.",
    quickFacts: [
      "Ligat Ha’al Winner  ",
      "CAF Africa Cup of Nations (AFCON) Winner",
      "16 International Caps",
      "300+ Professional Matches"
    ],
    highlightVideo: shortVideo,

    playingCareer: {
      nationalTeam: "Nigeria National Team ",
      matchPlayed: 282,
      goalsScored: 39,
      assists: 8,
    },

    completeBiography: {
      earlyLife:
        "Born on November 9, 1990, in Abuja, Nosa Igiebor discovered his footballing passion in local community pitches long before reaching professional heights. Starting his youth career at Sharks FC, he rose swiftly to Warri Wolves, earning recognition that carried him across Europe—from Norway’s Eliteserien to La Liga, Israel’s top-flight, MLS, and beyond. Internationally, his journey peaked with a triumphant 2013 Africa Cup of Nations victory with Nigeria.",

      youthCareer:
        "Nosa Igiebor’s football journey began in Abuja, where his natural flair and vision quickly drew attention on local pitches. He joined Sharks FC’s youth system in 1999, spending six formative years developing his technical skills, discipline, and tactical understanding. By 2005, his maturity and creativity in midfield earned him promotion to Sharks’ senior team, marking the beginning of a promising professional path.",

      professionalBreakthrough:
        "Igiebor’s breakthrough came at Warri Wolves (2007–2009), where his commanding displays in midfield and ability to dictate games established him as one of Nigeria’s brightest young talents. His performances attracted European scouts, and in 2009 he secured a move to Lillestrøm SK in Norway. Over three seasons, Nosa matured into a complete midfielder, scoring 13 goals in 67 appearances and proving himself on the European stage.",

      realMadridChapter:
        "In 2011, Nosa joined Hapoel Tel Aviv in Israel, where he further elevated his game. His most memorable moment came in the 2012 Israel State Cup final, when he scored the decisive winning goal to secure the trophy for his club. This cemented his reputation as a player for the big occasions and drew interest from top European leagues.",

      premierLeagueSuccess:
        "Later in 2012, Igiebor took a major step in his career by signing with Spanish side Real Betis. Competing in La Liga, he showcased his composure, vision, and adaptability against some of the world’s best midfielders. His time in Spain was marked by key goals and strong performances that highlighted his ability to thrive at the highest levels of football.",

      internationalCareer:
        "For Nigeria’s Super Eagles, Nosa Igiebor made 15 appearances and scored 2 goals. His finest achievement came in 2013, when he was part of the squad that won the Africa Cup of Nations under Stephen Keshi. Representing Nigeria on the continental stage was a defining honor, as Nosa contributed to one of the nation’s proudest footballing moments in the modern era.",
    },

    visionForAcademy:
      "Nosa Igiebor’s vision for his Sports Academy goes far beyond traditional football training. He is committed to creating a holistic environment where young athletes not only develop world-class technical and tactical skills but also grow in discipline, character, and leadership. The academy emphasizes academic balance, emotional intelligence, and life skills that prepare players for success both on and off the field.",

    whyStartedAcademy:
      "After retiring from professional football, he felt a deep desire to give back to the continent that raised him. He saw how many gifted young players across Africa are left undiscovered, untrained, and unsupported. The Nosa Igiebor Sports Academy was born out of passion to create an elite institution where football talent is nurtured, mentored, and given a global platform. I was just a kid with a dream. All I needed was the right push. Now, I want to be that push for someone else to hit stardom. Nosa Igiebor",

    legacyAndVision: {
      currentLegacy:
        "As the first Super Eagles international to launch a full-fledged Sports Academy in Abuja, Nosa Igiebor is pioneering a movement that extends beyond football. His initiative represents more than just training future athletes — it is about creating pathways of hope and opportunity for young Nigerians who might otherwise never have access to structured development. By investing in grassroots talent, instilling values of discipline and character, and combining football with education, Nosa is shaping a model that celebrates Africa’s immense potential. His academy stands as a beacon of pride for Nigeria, proving that former players can give back in transformative ways. Through this bold step, Nosa is not only raising the next generation of footballers, but also laying the foundation for a legacy that will inspire communities across the continent for decades to come.",

      futureVision:
        "Looking ahead, Nosa Igiebor envisions his Sports Academy becoming a leading force in African and global youth development, with centers of excellence established across major football regions. His long-term vision includes creating scholarship opportunities for underprivileged talents, forging partnerships with schools and universities to ensure academic excellence alongside football, and leveraging international connections to provide global exposure for his players. Nosa aims to blend modern sports science with proven football traditions, building a model academy that produces not just professionals on the pitch but leaders and role models off it. His ultimate goal is to leave a legacy that transforms communities and uplifts the next generation through football.",

      // philosophicalApproach:
      //   "Nosa Igiebor’s coaching philosophy rests on three pillars: Discipline & Character, Quality Coaching & Training, and Global Exposure. He believes that talent without the right attitude is wasted, and that true growth comes from combining hard work with integrity. His approach focuses on developing technically gifted and tactically intelligent players who can adapt to any style of play, while also fostering resilience, leadership, and cultural awareness. By encouraging creativity within structured team play, Nosa ensures that young athletes not only excel as footballers but also grow into responsible individuals ready to make a positive impact on society.",
    },

    // personalLife:
    //   "Despite his fame and success, Rodriguez remains grounded in his values and commitment to family. He is married to Elena Martinez, a sports psychologist who plays an integral role in the academy's holistic approach to player development. They have two children, Sofia (12) and Diego (8), both of whom are enrolled in the academy's youth programs. Rodriguez is fluent in Spanish, English, and Catalan, and is actively learning Portuguese to better connect with South American players. His interests outside football include classical music, chess, and philanthropy through the Rodriguez Foundation, which supports education and sports programs in underprivileged communities.",

    image: NosaPhoto,
  },

  achievements: [
    "Ligat Ha’al Winner 1x  ",
    "Ligat Ha’al Runner-up  2x   ",
    "State Cup Winner 2x  ",
    "State Cup Runner up 1x  ",
    "Super Cup Runner-up 1x  ",
    "Toto Cup Winner 1x  ",
    "Ligat Al Runner-up 1x  ",
    "CAF Africa Cup of Nations (AFCON) Winner (2013)",
    "Member of the Order of the Niger (MON)",
    "Distinguished Player Award FCTA",
    "The Nigeria Children Ambassador",
    "Sports Ambassadors Award (NSC)",
    "Sports Patron Daisies Academy Abuja",
    "Yagazie Foundation YES Camp Initiative Ambassador",
  ],

  notionalTitles: [
    "Member of the Order of the Niger (MON)",
    "Distinguished Player Award FCTA",
    "The Nigeria Children Ambassador",
    "Sports Patron Daisies Academy Abuja",
    "Yagazie Foundation YES Camp Initiative Ambassador",
  ],

  socialLinks: {
    facebook: "http://facebook.com/nosaigiebormon",
    instagram: "http://instagram.com/nosaigiebor1",
    // linkedin: "https://linkedin.com/in/marcus-rodriguez",
    // threads: "https://threads.net/@elmaestro_official",
    // tiktok: "http://tiktok.com/nosaigiebormon",
    // twitter: "https://twitter.com/elmaestro_fb",
    youtube: "http://www.youtube.com/@nosaigieborMON",
  },
};

export const TEAM_DATA = {
  president: {
    name: " Emmanuel Nosa Igiebor",
    nickname: "MON",
    position: "President & Founder",
    brief:
      "Former Real Betis and Hapoel Tel Aviv with 10+ years of professional experience. Led Nigeria to Africa Cup of Nations finals victory.",
    image: founderImg,
    socialLinks: {
      facebook: "http://facebook.com/nosaigiebormon",
      instagram: "http://instagram.com/nosaigiebor1",
      // linkedin: "https://linkedin.com/in/marcus-rodriguez",
      // threads: "https://threads.net/@elmaestro_official",
      // tiktok: "https://tiktok.com/nosaigiebormon",
      // twitter: "https://twitter.com/elmaestro_fb",
      youtube: "http://www.youtube.com/@nosaigieborMON",
    },
  },

  coachingDirector: {
    name: "Ezirim Chinedu Kennedy",
    position: "Coaching Director",
    qualifications: [
      "NIS Nigeria",
      "CAF Licensee",
      "Coerver Coaching Netherlands",
      "Barcelona Universitas Spain",
      "MBS School of Coaching Spain",
      "Premier Skills Coaching U",
      "US Soccer Coaching USA",
      "Ray Power Coaching",
    ],
    experience:
      "Ezirim Chinedu Kennedy is the Sporting and Coaching Director of The Nosa Igiebor Sports Academy, where he leads the technical, developmental, and managerial framework of the academy. With several years of hands-on coaching and mentoring experience, he has worked extensively in grassroots, youth, and elite football, shaping players and coaches to reach their full potential.",
    image:KennedyPhoto,
    bio: "Ezirim holds recognized coaching certifications, including the National Institute for Sports, CAF Licenses, Coerver International, Barcelona Universitas, Premier Skills, Coaches Across Continents, Ray Power Coaching Education, alongside professional training in Health, Safety, and Environmental (HSE) studies, and advanced capacity-building programs that enhance his technical and leadership expertise. His qualifications reflect a blend of tactical knowledge, player psychology, and modern coaching methodologies aligned with global best practices",
  },

  // This is not available for now
  //  technicalAdvisor: {
  //     name: "David Thompson",
  //     position: "Technical Advisor",
  //     qualifications: [
  //       "Sports Science PhD",
  //       "Performance Analysis Expert",
  //       "FIFA Technical Study Group Member",
  //       "Former Premier League Analyst",
  //     ],
  //     experience:
  //       "15+ years in elite football performance analysis and player development",
  //     image:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  //     bio: "David revolutionizes training methods through data-driven insights and cutting-edge sports science applications.",
  //   },
};

export const PARTNERS = [
  {
    name: "Vast Painting",
    logo: partnerOne,
    // category: "Official Kit Partner",
  },
  {
    name: "Stella Maris",
    logo: partnerTwo,
    // category: "Equipment Partner",
  },

];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Champions League Glory at Camp Nou",
    date: "2024-03-15",
    category: "Career Highlights",
    club: "FC Barcelona",
    match: "Barcelona vs Manchester United - Champions League Final 2009",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt:
      "The defining moment that changed everything - leading Barcelona to Champions League victory with a masterclass performance in midfield.",
    content: {
      paragraph1:
        "The 2009 Champions League final at Wembley Stadium marked a pivotal moment in football history, where tactical brilliance met individual excellence. Marcus Rodriguez's commanding performance in midfield orchestrated one of the most dominant displays in Champions League final history. His ability to control the tempo, distribute passes with surgical precision, and provide defensive stability showcased why he was considered among Europe's elite midfielders. This match demonstrated the perfect synthesis of Pep Guardiola's revolutionary tiki-taka philosophy and Rodriguez's exceptional football intelligence.",
      paragraph2:
        "Rodriguez's statistical dominance in this final was unprecedented - completing 94% of his passes, winning 8 out of 10 tackles, and creating 4 key scoring opportunities that directly led to Barcelona's commanding victory. His positioning and movement created numerical superiorities across different phases of play, allowing Barcelona to maintain possession and control territorial advantage throughout the match. The tactical sophistication displayed by Rodriguez became a blueprint for modern central midfield play, influencing coaching methodologies worldwide and establishing new benchmarks for Champions League final performances.",
      paragraph3:
        "The legacy of this Champions League triumph extends far beyond the trophy itself, representing a transformational moment in contemporary football tactics and player development. Rodriguez's performance analysis from this match is now studied in coaching academies globally, with his decision-making patterns, pressing triggers, and creative passing combinations becoming essential components of advanced football education curricula. This victory solidified Barcelona's dynasty while establishing Rodriguez as one of the most influential midfielders of his generation, whose playing style continues to inspire young players at Elite Football Academy today.",
    },
  },
  {
    id: 2,
    title: "El Clasico Masterpiece at Santiago Bernabeu",
    date: "2024-03-10",
    category: "El Clasico",
    club: "Real Madrid",
    match: "Real Madrid vs Barcelona - La Liga 2015",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt:
      "A career-defining El Clasico performance that showcased tactical evolution and leadership during the most intense rivalry in football.",
    content: {
      paragraph1:
        "El Clasico represents the pinnacle of football intensity, where tactical preparation meets emotional warfare on the grandest stage in world football. Marcus Rodriguez's transition from Barcelona to Real Madrid created one of the most compelling narratives in football history, requiring exceptional mental fortitude and professional adaptability. His first El Clasico appearance in the famous white jersey demonstrated remarkable character, as he faced his former teammates and coaches while embracing new tactical responsibilities under different philosophical frameworks. This match exemplified how elite professionals navigate complex emotional landscapes while maintaining peak performance standards.",
      paragraph2:
        "The tactical complexity of this particular El Clasico showcased Rodriguez's evolutionary development as a complete midfielder, adapting his playing style to Real Madrid's more direct, counter-attacking approach while retaining his exceptional technical abilities. His performance metrics included 89% pass accuracy under intense pressing, 3 successful dribbles in tight spaces, and crucial defensive contributions that neutralized Barcelona's creative threats. Rodriguez's ability to read the game situations and make split-second decisions under extreme pressure highlighted his football intelligence and championship mentality, qualities now emphasized in Elite Football Academy's advanced training programs.",
      paragraph3:
        "This El Clasico victory became a defining moment in Rodriguez's Real Madrid career, establishing his leadership credentials and tactical versatility at the highest competitive level. The match analysis reveals sophisticated positional rotations, progressive passing patterns, and defensive work rate that exceeded expectations, contributing significantly to Real Madrid's tactical superiority. Rodriguez's performance in this historic fixture continues to serve as a masterclass in professional football excellence, demonstrating how world-class players adapt their skills to different tactical systems while maintaining consistent high-level performance. These principles form the foundation of our academy's player development philosophy.",
    },
  },
  {
    id: 3,
    title: "World Cup Semi-Final Heroics for Spain",
    date: "2024-03-05",
    category: "International Career",
    club: "Spain National Team",
    match: "Spain vs Germany - World Cup Semi-Final 2018",
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt:
      "Leading Spain to the World Cup final with a performance that combined technical excellence with leadership under ultimate pressure.",
    content: {
      paragraph1:
        "World Cup semi-finals represent the culmination of years of preparation, where national pride intersects with individual ambition on football's greatest stage. Marcus Rodriguez's captaincy of the Spanish national team during this crucial encounter against Germany demonstrated exceptional leadership qualities and tactical understanding under immense pressure. His pre-match preparation, communication with teammates, and on-field decision-making reflected the highest standards of international football professionalism. This match showcased how elite players rise to meet extraordinary challenges while inspiring teammates to exceed their perceived limitations.",
      paragraph2:
        "Rodriguez's technical performance in this World Cup semi-final established new benchmarks for midfield excellence in knockout stage football, recording 96% pass completion rate, 2 assists, and defensive actions that disrupted Germany's attacking rhythm at crucial moments. His ability to maintain composure during high-pressure situations, execute complex tactical instructions, and provide creative solutions when conventional approaches failed demonstrated why he was selected as Spain's captain. The statistical analysis of his movement patterns, passing networks, and pressing coordination revealed sophisticated understanding of international football's tactical demands and physical requirements.",
      paragraph3:
        "The broader impact of this World Cup semi-final performance extends beyond individual accolades, representing Spain's tactical evolution and Rodriguez's role in modernizing international football approaches. His leadership style, combining vocal encouragement with exemplary work rate, created positive team dynamics that enabled collective success at the highest competitive level. This match performance has become a case study in sports psychology programs worldwide, analyzing how elite athletes manage pressure, maintain focus, and deliver exceptional performances when stakes are highest. These leadership principles and pressure management techniques are integral components of Elite Football Academy's comprehensive player development curriculum.",
    },
  },
  {
    id: 4,
    title: "Premier League Debut Magic at Etihad",
    date: "2024-02-28",
    category: "Premier League",
    club: "Manchester City",
    match: "Manchester City vs Liverpool - Premier League 2019",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt:
      "Adapting to Premier League intensity while maintaining technical excellence in one of the most competitive leagues in world football.",
    content: {
      paragraph1:
        "The Premier League's physical intensity and tactical sophistication present unique challenges that distinguish it from other top European competitions, requiring exceptional adaptability and professional preparation from world-class players. Marcus Rodriguez's transition to Manchester City represented a significant career evolution, adapting his technical skills and tactical understanding to English football's demanding requirements. His debut against Liverpool, one of the Premier League's most intense fixtures, demonstrated remarkable professional maturity and competitive intelligence under Pep Guardiola's tactical system. This performance highlighted how elite players successfully navigate different football cultures while maintaining their core technical competencies.",
      paragraph2:
        "Rodriguez's debut statistics reflected seamless integration into Manchester City's sophisticated tactical framework, achieving 92% pass accuracy against Liverpool's high-intensity pressing system, completing 6 progressive passes that created scoring opportunities, and maintaining defensive discipline throughout the match duration. His positional awareness, quick decision-making under pressure, and ability to find space in congested areas showcased technical skills honed through years of elite competition. The tactical analysis revealed Rodriguez's understanding of Guardiola's positional play concepts, demonstrating professional adaptability and continuous learning mindset essential for sustained success at the highest competitive levels.",
      paragraph3:
        "This Premier League debut established Rodriguez as a key component in Manchester City's tactical evolution, contributing to their sustained domestic and European success through consistent high-level performances. His ability to maintain technical excellence while adapting to English football's physical demands became a template for international players transitioning to the Premier League. The performance analysis from this match continues to inform coaching strategies at Elite Football Academy, where young players learn about professional adaptability, tactical flexibility, and maintaining performance standards across different competitive environments. Rodriguez's Premier League experience provides valuable insights for developing players aspiring to compete at elite international levels.",
    },
  },
  {
    id: 5,
    title: "European Championship Final Leadership",
    date: "2024-02-20",
    category: "International Career",
    club: "Spain National Team",
    match: "Spain vs Italy - European Championship Final 2021",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt:
      "Captaining Spain in a major tournament final, demonstrating leadership, resilience, and the ability to perform on the biggest stage.",
    content: {
      paragraph1:
        "European Championship finals represent the pinnacle of international football competition, where tactical preparation, mental resilience, and leadership qualities converge to determine continental supremacy. Marcus Rodriguez's captaincy during Spain's European Championship final against Italy showcased exceptional leadership attributes developed through years of elite competition and championship experiences. His pre-match preparation, team communication, and on-field leadership demonstrated how world-class players assume responsibility for collective success while managing individual performance expectations. This final exemplified the highest standards of professional football leadership and competitive mentality.",
      paragraph2:
        "Rodriguez's tactical performance in this European Championship final highlighted his evolution as a complete midfielder capable of influencing matches through multiple dimensions of play, recording 91% pass completion under intense pressure, 4 key passes that created scoring opportunities, and defensive contributions that neutralized Italy's creative threats. His ability to read game situations, provide tactical solutions during difficult periods, and maintain consistent performance levels throughout extra time demonstrated championship experience and mental fortitude. The match analysis revealed sophisticated understanding of tournament football's unique demands and Rodriguez's capacity to deliver exceptional performances when stakes are highest.",
      paragraph3:
        "The legacy of this European Championship final performance extends beyond individual recognition, representing Spain's continued excellence in international competition and Rodriguez's contribution to their tactical identity. His leadership style during this final, combining technical excellence with inspirational communication, established new standards for international captaincy and team dynamics. This match performance has become essential viewing for leadership development programs worldwide, analyzing how elite athletes manage pressure, inspire teammates, and maintain focus during crucial competitive moments. The leadership principles demonstrated in this final are fundamental elements of Elite Football Academy's comprehensive approach to developing complete players and future leaders in football.",
    },
  },
];

export const SOCIAL_MEDIA_ICONS = {
  facebook: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg",
  instagram: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
  linkedin: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
  threads: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/threads.svg",
  tiktok: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg",
  twitter: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg",
  youtube: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg",
};
