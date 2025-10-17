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
  foundedYear: 2025,
};

export const contactInfo = {
  whatsApp: "+2349133099934",
  email: "contact@nosaIgieborsports.com ",
  address: {
    street: "Stella Maris School, Plot 76 Cadastral Zone C10",
    district: "Wumba District",
    city: "Abuja",
    state: "Federal Capital Territory (FCT)",
    zipCode: "900104",
    country: "Nigeria",
  },
  phone: "+2349133099934",
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
    name: " Emmanuel Nosa Igiebor (MON)",
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
    name: " Emmanuel Nosa Igiebor (MON)",
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
    title: "Nosa Igiebor’s Historic Winning Goal for Hapoel Tel Aviv in the 2012 Israeli State Cup Final",
    date: "2012-05-23",
    category: "Club Career",
    club: "Hapoel Tel Aviv (Israel)",
    match: "Hapoel Tel Aviv vs Maccabi Haifa – Israeli State Cup Final 2012",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/cZlrHXg6I9s?si=3ETdYQDOAcyJIedH",
    excerpt:
      "Nigerian midfielder Nosa Igiebor cemented his legacy in Israeli football by scoring the decisive winning goal in the 2012 Israeli State Cup final, securing glory for Hapoel Tel Aviv against rivals Maccabi Haifa.",
    content: {
      paragraph1:
        "On 23 May 2012, Nigerian midfielder Nosa Igiebor became a hero for Hapoel Tel Aviv when he scored the decisive goal in the Israeli State Cup final against Maccabi Haifa. Wearing the prestigious No. 10 jersey, Igiebor showcased his attacking instincts and composure, delivering the match-winning strike that secured Hapoel’s third consecutive State Cup triumph. His performance on the night elevated his reputation as one of the most influential foreign players in Israeli football at the time.",
      paragraph2:
        "The final was a fiercely contested affair, with both sides fighting to etch their names into history. When the decisive moment came, it was Igiebor who rose above the pressure. Timing his run perfectly, he found space inside the box and converted with precision, sending the Hapoel fans into wild celebrations. His winning goal not only delivered silverware but also highlighted his ability to perform on the biggest stage, underlining why he was such a key figure in Hapoel’s midfield.",
      paragraph3:
        "For Nigerian football and fans of Hapoel Tel Aviv, Igiebor’s State Cup final performance stands as a reminder of his leadership, creativity, and ability to deliver in clutch moments. The 2012 final remains etched in the memories of supporters, with Igiebor’s goal becoming a symbol of glory and pride for both the club and African representation in Israeli football.",
    },
  },
   {
    id: 2,
    title: "Nosa Igiebor and Nigeria’s 2013 AFCON Triumph: A Midfield Force in the Super Eagles’ Victory",
    date: "2013-02-10",
    category: "National Career",
    club: "Nigeria National Team",
    match: "2013 Africa Cup of Nations Final — Nigeria vs Burkina Faso",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/Or33Qf4euJ4?si=PoUZaQ6ului1w-Dv",
    excerpt:
      "Nosa Igiebor, part of Nigeria’s midfield unit at AFCON 2013, played a key role in the Super Eagles’ journey to continental glory. His energy, tactical discipline, and presence in the squad contributed to Nigeria’s historic victory over Burkina Faso in the final.",
    content: {
      paragraph1:
        "When the Super Eagles of Nigeria lifted the Africa Cup of Nations trophy on February 10, 2013, it marked the nation’s third continental title and ended a 19-year wait for glory. Among the talented squad assembled by coach Stephen Keshi was Nosa Igiebor, then playing for Real Betis in Spain. As an attacking midfielder, Igiebor brought balance to the team with his ability to transition quickly from defense to attack, offering creativity and composure in possession. His inclusion in the squad reflected Keshi’s vision of blending young, hungry talents with experienced leaders.",
      paragraph2:
        "Throughout the tournament, Igiebor’s contributions in the middle of the park were vital to Nigeria’s progress. He played in key group stage matches, showing tactical intelligence and combining well with John Obi Mikel to stabilize Nigeria’s midfield. His ball distribution and pressing off the ball allowed wingers like Victor Moses and forwards like Emmanuel Emenike to shine, giving the Super Eagles the edge in attacking play. Though he didn’t feature in the final match itself, his earlier performances laid part of the foundation for the team’s success.",
      paragraph3:
        "Nigeria’s 1–0 victory over Burkina Faso in Johannesburg was sealed by Sunday Mba’s memorable strike, but it was the collective effort of the squad — including the contributions of players like Igiebor — that powered the triumph. For Igiebor, being part of the AFCON-winning team etched his name into Nigerian football history. The title not only elevated his international profile but also inspired a new generation of midfielders who continue to look up to the AFCON 2013 heroes.",
    },
  },
  {
    id: 3,
    title: "Nosa Igiebor: Winning Goal in Hapoel Tel Aviv’s 2012 Israel State Cup Final",
    date: "2012-11-15",
    category: "Club Career Highlights",
    club: "Hapoel Tel Aviv",
    match: "Hapoel Tel Aviv vs Maccabi Haifa - 2011-12 Israel State Cup Final",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/nG2ajEPRreY?si=brf9EsrjwqLn1lrv",
    excerpt:
      "Nosa Igiebor, wearing the No.10 shirt, produced a match-winning moment in the 2012 Israel State Cup Final — his decisive strike secured Hapoel Tel Aviv’s cup victory and cemented his reputation as a clutch attacking midfielder",
    content: {
      paragraph1:
        "Nosa Igiebor arrived at Hapoel Tel Aviv as a dynamic attacking midfielder blessed with vision, technique, and an eye for decisive moments. Wearing the iconic No.10, he quickly became the creative heartbeat of the team, linking play between midfield and the front line while unlocking defenses with clever passes and timely runs. Across the 2011–12 cup run his presence demanded attention from opponents, creating space and openings that Hapoel exploited throughout the knockout stages.",
      paragraph2:
        "The defining moment came in the Israel State Cup final. In a tightly contested affair, Igiebor rose to the occasion and produced the decisive contribution — a composed, clinical finish that proved to be the winning goal. That strike not only delivered the trophy for Hapoel but also showcased Igiebor’s temperament: an attacking midfielder with the technique to craft chances and the nerve to finish them when it mattered most. For fans and teammates alike, it was a moment that encapsulated his attacking intelligence and clutch quality..",
      paragraph3:
        "Beyond a single match, the 2011–12 cup-winning goal elevated Igiebor’s standing in Israeli football and reinforced his trajectory as an influential No.10. The goal became an enduring highlight on his résumé and a reminder that midfield creators can be match-deciders. For young playmakers studying his game, Igiebor’s cup final strike remains a textbook example of timing, composure, and footballing instinct—qualities Nosa would carry into later chapters of his career.",
    },
  },
  {
    id: 4,
    title: "Nosa Igiebor and Maccabi Tel Aviv’s 2014-15 Treble Season: Double + Toto Cup Glory",
    date: "2014-06-10",
    category: "Club Career Highlights",
    club: "Maccabi Tel Aviv (Israel)",
    // match: "Manchester City vs Liverpool - Premier League 2019",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    video: "https://www.youtube.com/embed/e5Dq6VcCKKA?si=4Y3cdI2hY-vcZedj",
    excerpt:
      "Nosa Igiebor played a vital role in Maccabi Tel Aviv’s dominance during the 2014-15 season.",
    content: {
      paragraph1:
        "The 2014-15 season remains one of the most illustrious in Maccabi Tel Aviv’s history, with the club clinching the Israeli Premier League, the Israel State Cup, and the Toto Cup Al, completing a rare domestic treble. Nosa Igiebor, who had joined earlier in the summer, was part of a squad built to deliver consistency, creativity, and depth. His arrival added flair in midfield, and though he wasn’t always the headline scorer, his presence helped balance the side, allowing attacking talents like Eran Zahavi to shine while he performed the essential work of transition and ball retention.",
      paragraph2:
        "In the Israel State Cup Final held on 20 May 2015, Maccabi Tel Aviv defeated Hapoel Be’er Sheva 6-2 in a dominant display. While most attention went to the attacking brilliance, Igiebor’s role in maintaining midfield shape and linking defense to attack during pressure phases proved crucial. The triumph in the State Cup was part of a larger achievement, as earlier in that season, Maccabi also lifted the Toto Cup (defeating Maccabi Haifa 2-1 in the final on 31 December 2014) and secured the league title.",
      paragraph3:
        "For Nosa Igiebor, this season added a major chapter to his résumé. Being part of a treble-winning campaign gave him exposure to high-pressure matches across different formats, testing both mental and physical endurance. It also allowed him to grow his reputation in international football circles as a midfielder who contributes not just through flashy plays, but through consistency and reliability — vital in championship runs. Fans of Maccabi and aspiring players observing from afar saw in him a model of dedication and football intelligence.",
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
