export type Locale = "ko" | "en" | "zh" | "ja" | "vi" | "uz" | "ru" | "km" | "my";

export type Translation = {
  brand: string;
  homeLabel: string;
  navLabel: string;
  nav: { about: string; trips: string; location: string };
  call: string;
  hoursLabel: string;
  hero: {
    eyebrow: string;
    title: [string, string];
    description: string;
    locationCta: string;
    alt: string;
  };
  about: {
    eyebrow: string;
    title: [string, string];
    description: string;
    stats: [string, string, string, string];
    storeAlt: string;
    caption: string;
    parking: string;
  };
  expertise: {
    eyebrow: string;
    title: [string, string];
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  services: {
    eyebrow: string;
    title: [string, string];
    description: string;
    items: Array<{ title: string; description: string; tags: string[] }>;
  };
  trips: {
    eyebrow: string;
    title: [string, string];
    description: string;
    boatAlt: string;
    boatLabel: string;
    species: string[];
    seasonLabel: string;
    seasonValue: string;
    guideLabel: string;
    guideValue: string;
    bookingLabel: string;
    bookingValue: string;
    inquiry: string;
    news: string;
  };
  marquee: string;
  social: {
    eyebrow: string;
    title: string;
    labels: [string, string, string, string, string];
    handles: [string, string, string, string, string];
    openNewTab: string;
  };
  email: {
    eyebrow: string;
    title: [string, string];
    description: string;
    topics: [string, string, string];
    senderLabel: string;
    senderPlaceholder: string;
    subjectLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    replyToLabel: string;
    cta: string;
    note: string;
    subject: string;
  };
  location: {
    eyebrow: string;
    title: [string, string];
    address: string;
    mapTitle: string;
    storeName: string;
    description: string;
    mapCta: string;
    blogCta: string;
  };
  footer: { map: string; call: string };
  floatingCall: string;
  language: { button: string; menuLabel: string };
  mainServicesLabel: string;
};

export const localeOptions: Array<{
  code: Locale;
  label: string;
  shortLabel: string;
  flag: string;
}> = [
  { code: "ko", label: "한국어", shortLabel: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇺🇸" },
  { code: "zh", label: "中文", shortLabel: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", shortLabel: "日本語", flag: "🇯🇵" },
  { code: "vi", label: "Tiếng Việt", shortLabel: "VI", flag: "🇻🇳" },
  { code: "uz", label: "O‘zbekcha", shortLabel: "UZ", flag: "🇺🇿" },
  { code: "ru", label: "Русский", shortLabel: "RU", flag: "🇷🇺" },
  { code: "km", label: "ភាសាខ្មែរ", shortLabel: "ខ្មែរ", flag: "🇰🇭" },
  { code: "my", label: "မြန်မာ", shortLabel: "မြန်မာ", flag: "🇲🇲" },
];

export const translations: Record<Locale, Translation> = {
  ko: {
    brand: "논산 대물낚시",
    homeLabel: "대물낚시 홈",
    navLabel: "주요 메뉴",
    nav: { about: "매장 소개", trips: "바다낚시", location: "오시는 길" },
    call: "전화 문의",
    hoursLabel: "운영시간",
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["낚시 준비는", "논산 대물낚시에서."],
      description:
        "안녕하세요! 논산 최대 규모의 민물/바다/루어 낚시 전문점, 바다낚시 수시 출조 전문점. 대물낚시입니다.",
      locationCta: "매장 위치 보기",
      alt: "논산 대물낚시 매장 전경과 출조용 보트",
    },
    about: {
      eyebrow: "대물낚시 이야기",
      title: ["우리도 낚시를 좋아해요.", "그래서 잘 알아요."],
      description:
        "우리도 직접 바다에 가요. 그래서 어떤 날, 어떤 도구가 필요한지 잘 알아요. 처음 오신 분도 어렵지 않게 알려드릴게요.",
      stats: ["매장 오픈", "20년 넘는 낚시 경험", "인승 출조 보트", "맞춤 상담"],
      storeAlt: "넓은 주차 공간을 갖춘 논산 대물낚시 매장 외관",
      caption: "편하게 보고, 궁금하면 물어보세요.",
      parking: "매장 앞 넓은 주차 공간",
    },
    expertise: {
      eyebrow: "20년 넘는 낚시 경험",
      title: ["논산에서 낚시를 준비한다면,", "베테랑에게 물어보세요."],
      description:
        "논산 대물낚시는 20년 넘는 낚시 경험을 가진 베테랑이 직접 운영합니다. 민물낚시, 루어낚시, 바다낚시와 선상 출조까지 직접 해본 경험으로 필요한 준비를 쉽게 알려드려요.",
      items: [
        {
          title: "출조 채비 상담",
          description: "잡고 싶은 어종과 계절, 출조 장소에 맞춰 낚싯대·릴·채비와 준비물을 알려드려요.",
        },
        {
          title: "바다낚시 상담",
          description: "갈치, 우럭, 쭈꾸미, 갑오징어 등 바다낚시에 필요한 장비와 채비를 함께 골라드려요.",
        },
        {
          title: "출조 관련 상담",
          description: "날씨와 물때, 출조 일정, 10인승 출조 보트 예약까지 궁금한 내용을 편하게 물어보세요.",
        },
        {
          title: "낚시 종합 상담",
          description: "처음 시작하는 분부터 오래 즐긴 분까지, 낚시에 관한 모든 궁금증을 친절하게 상담해드려요.",
        },
      ],
    },
    services: {
      eyebrow: "매장과 서비스",
      title: ["낚시에 필요한 것,", "여기 다 있어요."],
      description: "무엇을 사야 할지 몰라도 괜찮아요. 어디에서 어떤 물고기를 잡고 싶은지만 말해주세요.",
      items: [
        {
          title: "낚시용품이 많아요",
          description: "낚싯대, 낚싯줄, 작은 도구까지 한곳에서 볼 수 있어요.",
          tags: ["민물", "바다", "루어"],
        },
        {
          title: "낚싯대도 고쳐요",
          description: "망가진 낚싯대를 살펴보고 고쳐드려요.",
          tags: ["낚싯대 수리", "도구 확인", "전화 문의"],
        },
        {
          title: "쉽게 알려드려요",
          description: "처음 낚시해도 괜찮아요. 필요한 도구와 쓰는 방법을 차근차근 알려드려요.",
          tags: ["처음이어도 좋아요", "도구 상담", "바다 갈 준비"],
        },
      ],
    },
    trips: {
      eyebrow: "함께 가는 바다낚시",
      title: ["날씨 좋은 날,", "함께 바다에 가요."],
      description:
        "봄, 가을, 겨울에 10인승 출조 보트를 타고 바다 출조를 가요. 처음 오시는 분도 괜찮아요. 출조 포인트로 이동하여, 어디서 어떻게 낚시를 하는지 쉽게 알려드려요.",
      boatAlt: "대물낚시 매장 앞 10인승 바다낚시 출조 보트",
      boatLabel: "인승 출조 보트 · 수시 출조",
      species: ["감성돔", "갈치", "쭈꾸미", "갑오징어", "문어", "우럭"],
      seasonLabel: "언제 가나요?",
      seasonValue: "봄 · 가을 · 겨울",
      guideLabel: "처음이어도 돼요?",
      guideValue: "네, 쉽게 알려드려요",
      bookingLabel: "어떻게 예약해요?",
      bookingValue: "전화로 물어보세요",
      inquiry: "출조 문의",
      news: "바다낚시 사진 보기",
    },
    marquee: "낚시용품 · 낚싯대 수리 · 바다 출조 · 채비 상담 · 논산 대물낚시",
    social: {
      eyebrow: "새 소식과 온라인 가게",
      title: "논산 대물낚시를 여러곳에서 만나보세요.",
      labels: ["Instagram", "네이버 블로그", "네이버 스마트스토어", "네이버 밴드", "카카오톡"],
      handles: ["사진을 봐요", "새 소식을 봐요", "낚시용품을 사요", "함께 이야기해요", "바로 물어봐요"],
      openNewTab: "새 탭에서 열기",
    },
    email: {
      eyebrow: "이메일 문의",
      title: ["메일로 물어봐도", "괜찮아요."],
      description: "필요한 물건이 있는지, 낚싯대를 고칠 수 있는지, 언제 바다에 가는지 물어보세요. 확인하고 답장해드릴게요.",
      topics: ["물건이 있나요?", "낚싯대를 고칠 수 있나요?", "언제 바다에 가나요?"],
      senderLabel: "내 이메일",
      senderPlaceholder: "답장받을 이메일을 적어주세요",
      subjectLabel: "제목",
      messageLabel: "내용",
      messagePlaceholder: "궁금한 내용을 적어주세요",
      replyToLabel: "답장받을 이메일",
      cta: "메일 보내기",
      note: "전송 버튼을 누르면 메일 앱이 열려요. 입력한 내용과 두 수신인이 자동으로 들어가요.",
      subject: "[논산 대물낚시] 문의합니다",
    },
    location: {
      eyebrow: "매장에 오기",
      title: ["매장에 오세요.", "주차도 편해요."],
      address: "충청남도 논산시 강변로308번길 48",
      mapTitle: "논산 대물낚시 위치 지도",
      storeName: "논산 대물낚시",
      description: "논산 시내에서 가까워요. 매장 앞에 차를 세울 곳도 넓어요.",
      mapCta: "매장으로 가는 길찾기",
      blogCta: "네이버 블로그 보기",
    },
    footer: { map: "네이버 지도", call: "전화 문의" },
    floatingCall: "전화 문의",
    language: { button: "언어 변경", menuLabel: "언어 선택" },
    mainServicesLabel: "대물낚시 주요 서비스",
  },

  en: {
    brand: "Nonsan Daemul Fishing",
    homeLabel: "Daemul Fishing home",
    navLabel: "Main navigation",
    nav: { about: "About us", trips: "Fishing trips", location: "Visit us" },
    call: "Call us",
    hoursLabel: "Opening hours",
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["Prepare for fishing", "at Nonsan Daemul Fishing."],
      description:
        "Hello! We’re Daemul Fishing, Nonsan’s largest specialist store for freshwater, sea, and lure fishing, with frequent sea-fishing trips.",
      locationCta: "Find the store",
      alt: "Daemul Fishing storefront in Nonsan with its fishing trip boat",
    },
    about: {
      eyebrow: "OUR STORY",
      title: ["We love fishing too,", "so we know the water."],
      description:
        "We head out to sea ourselves, so we know which gear works best for each day. If it’s your first time, we’ll explain everything in a simple way.",
      stats: ["Store opened", "Years of field experience", "Passenger fishing trip boat", "Personalized advice"],
      storeAlt: "Daemul Fishing storefront in Nonsan with spacious parking",
      caption: "Take your time, look around, and ask away.",
      parking: "Spacious parking in front",
    },
    expertise: {
      eyebrow: "20+ YEARS OF FISHING EXPERIENCE",
      title: ["Planning a fishing trip in Nonsan?", "Ask a seasoned angler."],
      description: "Daemul Fishing is run by a veteran angler with more than 20 years of experience. Drawing on firsthand experience in freshwater, lure, sea, and boat fishing, we explain exactly what you need in simple terms.",
      items: [
        { title: "Trip setup advice", description: "We match rods, reels, rigs, and supplies to your target fish, season, and fishing spot." },
        { title: "Sea fishing advice", description: "Get practical help choosing tackle for hairtail, rockfish, octopus, cuttlefish, and more." },
        { title: "Fishing trip advice", description: "Ask about weather, tides, schedules, and booking our 10-passenger fishing trip boat." },
        { title: "All-round fishing advice", description: "Beginners and experienced anglers are welcome to ask us anything about fishing." },
      ],
    },
    services: {
      eyebrow: "STORE & SERVICE",
      title: ["Everything you need for fishing,", "right here."],
      description: "It’s okay if you don’t know what to buy. Just tell us where you want to fish and what you want to catch.",
      items: [
        {
          title: "Plenty of fishing gear",
          description: "Find rods, fishing line, and small accessories all in one place.",
          tags: ["Freshwater", "Sea fishing", "Lure fishing"],
        },
        {
          title: "We repair fishing rods too",
          description: "We inspect and repair damaged fishing rods.",
          tags: ["Rod repair", "Gear check", "Call ahead"],
        },
        {
          title: "Simple, friendly guidance",
          description: "New to fishing? That’s okay. We’ll show you which tools you need and how to use them, step by step.",
          tags: ["Beginners welcome", "Rig advice", "Trip prep"],
        },
      ],
    },
    trips: {
      eyebrow: "SEA FISHING TRIPS",
      title: ["When the conditions are right,", "let’s head to sea."],
      description:
        "In spring, autumn, and winter, we head out to sea on a 10-passenger fishing trip boat. First-timers are welcome. Once we reach the fishing spot, we explain where and how to fish in simple terms.",
      boatAlt: "Ten-passenger sea-fishing trip boat in front of Daemul Fishing",
      boatLabel: "passenger fishing trip boat · seasonal trips",
      species: ["Black porgy", "Hairtail", "Webfoot octopus", "Cuttlefish", "Octopus", "Rockfish"],
      seasonLabel: "SEASON",
      seasonValue: "Spring · Autumn · Winter",
      guideLabel: "GUIDE",
      guideValue: "Step-by-step support",
      bookingLabel: "BOOKING",
      bookingValue: "Call before your trip",
      inquiry: "Trip enquiry",
      news: "View sea fishing photos",
    },
    marquee: "Fishing tackle · Rod repairs · Sea trips · Rig advice · Nonsan Daemul Fishing",
    social: {
      eyebrow: "FOLLOW & SHOP",
      title: "Find Nonsan Daemul Fishing in more places.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Photos and updates", "Trips and store news", "Shop fishing gear online", "Join our community", "Message us directly"],
      openNewTab: "Open in a new tab",
    },
    email: {
      eyebrow: "EMAIL ENQUIRIES",
      title: ["Have a question?", "Send us an email anytime."],
      description: "Ask about product availability, fishing rod repairs, or upcoming sea trips. We will check your message and get back to you.",
      topics: ["Product stock", "Rod repairs", "Fishing trips"],
      senderLabel: "Your email",
      senderPlaceholder: "Enter an email where we can reply",
      subjectLabel: "Subject",
      messageLabel: "Message",
      messagePlaceholder: "Tell us what you would like to ask",
      replyToLabel: "Reply email",
      cta: "Send email",
      note: "Your email app will open with your message and both recipients filled in.",
      subject: "[Nonsan Daemul Fishing] Enquiry",
    },
    location: {
      eyebrow: "VISIT THE STORE",
      title: ["Come visit the store.", "Parking is easy."],
      address: "48, Gangbyeon-ro 308beon-gil, Nonsan-si, Chungcheongnam-do, South Korea",
      mapTitle: "Map showing Daemul Fishing in Nonsan",
      storeName: "Nonsan Daemul Fishing",
      description: "Easy to reach from central Nonsan, with plenty of parking right in front of the store.",
      mapCta: "Directions to the store",
      blogCta: "Visit our Naver Blog",
    },
    footer: { map: "Naver Map", call: "Call us" },
    floatingCall: "Call us",
    language: { button: "Change language", menuLabel: "Choose a language" },
    mainServicesLabel: "Daemul Fishing services",
  },

  zh: {
    brand: "论山大物渔具店",
    homeLabel: "返回大物渔具店首页",
    navLabel: "主菜单",
    nav: { about: "店铺介绍", trips: "出海垂钓", location: "到店路线" },
    call: "电话咨询",
    hoursLabel: "营业时间",
    hero: {
      eyebrow: "2004年创立 · 论山",
      title: ["准备钓鱼，", "就到论山大物渔具店。"],
      description: "您好！这里是论山规模最大的淡水钓、海钓、路亚专业店——大物渔具，也经常组织海钓出行。",
      locationCta: "查看店铺位置",
      alt: "论山大物渔具店外景与出海钓鱼船",
    },
    about: {
      eyebrow: "关于大物渔具",
      title: ["因为我们也爱钓鱼，", "所以更懂现场需要。"],
      description: "我们也会亲自出海，所以很清楚不同天气需要哪些装备。第一次来钓鱼也不用担心，我们会用简单易懂的方式告诉您。",
      stats: ["店铺开业", "20多年实战经验", "人座出钓船", "专属咨询"],
      storeAlt: "设有宽敞停车场的论山大物渔具店外景",
      caption: "慢慢挑，有问题随时问我们。",
      parking: "店门前宽敞停车位",
    },
    expertise: {
      eyebrow: "20多年实钓经验",
      title: ["在论山准备钓鱼，", "请教经验丰富的钓鱼人。"],
      description: "大物渔具店由拥有20多年经验的钓鱼老手亲自经营。凭借淡水钓、路亚、海钓和船钓的实战经验，我们会简单说明需要准备什么。",
      items: [
        { title: "出钓装备咨询", description: "根据目标鱼、季节和钓点，推荐合适的钓竿、渔轮、钓组和用品。" },
        { title: "海钓咨询", description: "为带鱼、石斑鱼、章鱼、墨鱼等海钓准备合适的装备。" },
        { title: "出钓行程咨询", description: "可咨询天气、潮汐、行程和10人座出钓船预约。" },
        { title: "综合钓鱼咨询", description: "无论新手还是老钓友，都可以轻松询问各种钓鱼问题。" },
      ],
    },
    services: {
      eyebrow: "商品与服务",
      title: ["钓鱼需要的东西，", "这里都有。"],
      description: "不知道该买什么也没关系。只要告诉我们想在哪里钓、想钓什么鱼就可以。",
      items: [
        { title: "渔具种类很多", description: "钓竿、钓线和各种小工具都可以在这里一次看齐。", tags: ["淡水钓", "海钓", "路亚"] },
        { title: "也可以维修钓竿", description: "我们会检查并维修损坏的钓竿。", tags: ["钓竿维修", "装备检查", "电话咨询"] },
        { title: "简单易懂地说明", description: "第一次钓鱼也没关系。我们会一步一步告诉您需要哪些工具、该怎么使用。", tags: ["新手欢迎", "钓组咨询", "出钓准备"] },
      ],
    },
    trips: {
      eyebrow: "海钓出行",
      title: ["天气和潮水正好，", "就一起出海吧。"],
      description: "春、秋、冬三季，我们会乘坐10人座出钓船出海。第一次参加也不用担心。到达出钓钓点后，我们会简单说明在哪里、怎样钓鱼。",
      boatAlt: "停在大物渔具店前的10人座海钓出钓船",
      boatLabel: "人座出钓船 · 不定期出钓",
      species: ["黑鲷", "带鱼", "短蛸", "墨鱼", "章鱼", "石斑鱼"],
      seasonLabel: "出钓季节",
      seasonValue: "春 · 秋 · 冬",
      guideLabel: "指导",
      guideValue: "从基础开始说明",
      bookingLabel: "预约",
      bookingValue: "请提前电话咨询",
      inquiry: "出钓咨询",
      news: "查看海钓照片",
    },
    marquee: "渔具用品 · 钓竿维修 · 海钓出行 · 钓组咨询 · 论山大物渔具店",
    social: {
      eyebrow: "关注与在线购买",
      title: "在多个平台都能找到论山大物渔具店。",
      labels: ["Instagram", "Naver博客", "Naver智能商店", "Naver Band", "KakaoTalk"],
      handles: ["照片与动态", "出钓与店铺消息", "在线购买渔具", "加入钓友社区", "直接在线咨询"],
      openNewTab: "在新标签页中打开",
    },
    email: {
      eyebrow: "邮件咨询",
      title: ["有想了解的内容，", "也可以随时发邮件给我们。"],
      description: "无论是商品库存、钓竿维修还是出钓安排，都可以提前来信咨询。我们确认后会尽快回复。",
      topics: ["商品库存", "钓竿维修", "出钓咨询"],
      senderLabel: "您的邮箱",
      senderPlaceholder: "请输入用于接收回复的邮箱",
      subjectLabel: "主题",
      messageLabel: "内容",
      messagePlaceholder: "请输入想咨询的内容",
      replyToLabel: "回复邮箱",
      cta: "发送邮件",
      note: "点击后将打开邮件应用，并自动填入内容和两个收件地址。",
      subject: "[论山大物渔具店] 邮件咨询",
    },
    location: {
      eyebrow: "到店访问",
      title: ["欢迎来店看看。", "停车也很方便。"],
      address: "韩国忠清南道论山市江边路308番街48",
      mapTitle: "论山大物渔具店位置地图",
      storeName: "论山大物渔具店",
      description: "从论山市区前来很方便，店门前也有充足的停车空间。",
      mapCta: "前往店铺的路线",
      blogCta: "查看Naver博客",
    },
    footer: { map: "Naver地图", call: "电话咨询" },
    floatingCall: "电话咨询",
    language: { button: "切换语言", menuLabel: "选择语言" },
    mainServicesLabel: "大物渔具店主要服务",
  },

  ja: {
    brand: "論山 大物釣具",
    homeLabel: "大物釣具ホーム",
    navLabel: "メインメニュー",
    nav: { about: "店舗紹介", trips: "海釣りツアー", location: "アクセス" },
    call: "電話する",
    hoursLabel: "営業時間",
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["釣りの準備なら、", "論山 大物釣具へ。"],
      description: "こんにちは。論山最大規模の淡水・海・ルアー釣り専門店で、海釣りにも随時出船している大物釣具です。",
      locationCta: "店舗の場所を見る",
      alt: "論山の大物釣具の店舗外観と釣行用ボート",
    },
    about: {
      eyebrow: "大物釣具について",
      title: ["私たちも釣りが好きだから、", "現場のことが分かります。"],
      description: "私たちも実際に海へ出るので、その日にどんな道具が必要かよく分かります。初めての方にも、難しくないよう分かりやすくご案内します。",
      stats: ["店舗オープン", "20年以上の現場経験", "人乗り釣行ボート", "個別相談"],
      storeAlt: "広い駐車場を備えた論山大物釣具の外観",
      caption: "ゆっくり見て、気軽にご相談ください。",
      parking: "店舗前に広い駐車スペース",
    },
    expertise: {
      eyebrow: "20年以上の釣り経験",
      title: ["論山で釣りの準備をするなら、", "経験豊富な釣り人にご相談ください。"],
      description: "大物釣具は、20年以上の釣り経験を持つベテランが直接運営しています。淡水・ルアー・海・船釣りの実体験をもとに、必要な準備を分かりやすくお伝えします。",
      items: [
        { title: "釣行仕掛け相談", description: "対象魚、季節、ポイントに合わせてロッド、リール、仕掛け、持ち物をご案内します。" },
        { title: "海釣り相談", description: "タチウオ、メバル、イイダコ、コウイカなどに必要な道具を一緒に選びます。" },
        { title: "釣行相談", description: "天候、潮、日程、10人乗り釣行ボートの予約について気軽にお尋ねください。" },
        { title: "釣り全般の相談", description: "初心者からベテランまで、釣りに関する疑問に丁寧にお答えします。" },
      ],
    },
    services: {
      eyebrow: "商品とサービス",
      title: ["釣りに必要なものは、", "ここにそろっています。"],
      description: "何を買えばよいか分からなくても大丈夫です。どこで何を釣りたいかだけ教えてください。",
      items: [
        { title: "釣り用品が豊富です", description: "釣り竿、釣り糸、小さな道具まで一か所で見ることができます。", tags: ["淡水釣り", "海釣り", "ルアー釣り"] },
        { title: "釣り竿も修理します", description: "壊れた釣り竿を確認して修理します。", tags: ["ロッド修理", "用品点検", "電話相談"] },
        { title: "分かりやすくご案内します", description: "釣りが初めてでも大丈夫です。必要な道具と使い方を順番にお伝えします。", tags: ["初心者歓迎", "仕掛け相談", "釣行準備"] },
      ],
    },
    trips: {
      eyebrow: "海釣りツアー",
      title: ["海へ出るのにいい日は、", "一緒に出かけましょう。"],
      description: "春・秋・冬は、10人乗り釣行ボートで海へ釣行します。初めての方も大丈夫です。ポイントまで移動したら、どこでどのように釣るのかを分かりやすくご案内します。",
      boatAlt: "大物釣具の店舗前にある10人乗り海釣り用の釣行ボート",
      boatLabel: "人乗り釣行ボート · 季節ごとに出船",
      species: ["クロダイ", "タチウオ", "イイダコ", "コウイカ", "マダコ", "メバル"],
      seasonLabel: "シーズン",
      seasonValue: "春 · 秋 · 冬",
      guideLabel: "ガイド",
      guideValue: "基礎から丁寧に",
      bookingLabel: "予約",
      bookingValue: "事前にお電話ください",
      inquiry: "釣行のお問い合わせ",
      news: "海釣りの写真を見る",
    },
    marquee: "釣り用品 · ロッド修理 · 海釣りツアー · 仕掛け相談 · 論山 大物釣具",
    social: {
      eyebrow: "フォロー・オンライン購入",
      title: "論山 大物釣具をいろいろな場所で見つけてください。",
      labels: ["Instagram", "Naverブログ", "Naverスマートストア", "Naver Band", "KakaoTalk"],
      handles: ["写真とお知らせ", "釣行・店舗情報", "釣り用品をオンライン購入", "釣り仲間のコミュニティ", "気軽にメッセージ"],
      openNewTab: "新しいタブで開く",
    },
    email: {
      eyebrow: "メールでのお問い合わせ",
      title: ["気になることは、", "メールでもお気軽にどうぞ。"],
      description: "商品の在庫、釣り竿の修理、釣行予定など、事前に確認したいことをお送りください。確認後にご返信します。",
      topics: ["商品の在庫", "釣り竿の修理", "釣行のお問い合わせ"],
      senderLabel: "あなたのメールアドレス",
      senderPlaceholder: "返信を受け取るアドレスを入力",
      subjectLabel: "件名",
      messageLabel: "内容",
      messagePlaceholder: "お問い合わせ内容をご入力ください",
      replyToLabel: "返信先メールアドレス",
      cta: "メールを送る",
      note: "ボタンを押すとメールアプリが開き、内容と2つの宛先が自動で入力されます。",
      subject: "[論山 大物釣具] メールでのお問い合わせ",
    },
    location: {
      eyebrow: "アクセス",
      title: ["お店へお越しください。", "駐車も便利です。"],
      address: "韓国 忠清南道 論山市 江辺路308番キル48",
      mapTitle: "論山大物釣具の所在地マップ",
      storeName: "論山 大物釣具",
      description: "論山市内からアクセスしやすく、店舗前には広い駐車スペースがあります。",
      mapCta: "店舗までの経路を見る",
      blogCta: "Naverブログを見る",
    },
    footer: { map: "Naverマップ", call: "電話する" },
    floatingCall: "電話する",
    language: { button: "言語を変更", menuLabel: "言語を選択" },
    mainServicesLabel: "大物釣具の主なサービス",
  },

  vi: {
    brand: "Cửa hàng câu cá Daemul Nonsan",
    homeLabel: "Trang chủ Daemul Fishing",
    navLabel: "Menu chính",
    nav: { about: "Giới thiệu", trips: "Chuyến câu biển", location: "Đường đến cửa hàng" },
    call: "Gọi ngay",
    hoursLabel: "Giờ mở cửa",
    hero: {
      eyebrow: "TỪ NĂM 2004 · NONSAN",
      title: ["Chuẩn bị đi câu,", "hãy đến Daemul Nonsan."],
      description: "Xin chào! Daemul là cửa hàng chuyên đồ câu nước ngọt, câu biển và lure lớn nhất Nonsan, đồng thời thường xuyên tổ chức các chuyến câu biển.",
      locationCta: "Xem vị trí cửa hàng",
      alt: "Mặt tiền cửa hàng Daemul Fishing ở Nonsan và thuyền đi câu",
    },
    about: {
      eyebrow: "CÂU CHUYỆN DAEMUL",
      title: ["Chúng tôi cũng mê câu cá,", "nên hiểu rõ thực tế."],
      description: "Chúng tôi cũng trực tiếp ra biển nên biết ngày nào cần dụng cụ gì. Người mới đến lần đầu cũng sẽ được hướng dẫn thật dễ hiểu.",
      stats: ["Cửa hàng khai trương", "Hơn 20 năm kinh nghiệm", "Thuyền chở khách đi câu", "Tư vấn theo nhu cầu"],
      storeAlt: "Cửa hàng Daemul Fishing ở Nonsan với bãi đỗ xe rộng",
      caption: "Cứ xem thoải mái và hỏi chúng tôi nhé.",
      parking: "Bãi đỗ xe rộng trước cửa hàng",
    },
    expertise: {
      eyebrow: "HƠN 20 NĂM KINH NGHIỆM CÂU CÁ",
      title: ["Chuẩn bị đi câu ở Nonsan?", "Hãy hỏi người có kinh nghiệm."],
      description: "Daemul Fishing do một người câu cá kỳ cựu với hơn 20 năm kinh nghiệm trực tiếp điều hành. Từ kinh nghiệm thực tế về câu nước ngọt, lure, câu biển và câu thuyền, chúng tôi giải thích dễ hiểu những gì bạn cần chuẩn bị.",
      items: [
        { title: "Tư vấn chuẩn bị chuyến câu", description: "Chúng tôi gợi ý cần, máy, bộ thẻo và đồ dùng theo loại cá, mùa và điểm câu." },
        { title: "Tư vấn câu biển", description: "Cùng chọn đồ phù hợp để câu cá hố, cá mú đá, bạch tuộc và mực nang." },
        { title: "Tư vấn chuyến câu", description: "Hỏi về thời tiết, thủy triều, lịch đi và đặt thuyền đi câu 10 chỗ." },
        { title: "Tư vấn mọi vấn đề về câu cá", description: "Người mới hay người đã câu lâu năm đều có thể hỏi chúng tôi bất cứ điều gì." },
      ],
    },
    services: {
      eyebrow: "SẢN PHẨM & DỊCH VỤ",
      title: ["Những gì cần cho việc câu cá,", "ở đây đều có."],
      description: "Chưa biết mua gì cũng không sao. Chỉ cần cho chúng tôi biết bạn muốn câu ở đâu và muốn câu loại cá nào.",
      items: [
        { title: "Có rất nhiều đồ câu", description: "Bạn có thể xem cần câu, dây câu và các dụng cụ nhỏ tại cùng một nơi.", tags: ["Câu nước ngọt", "Câu biển", "Câu lure"] },
        { title: "Chúng tôi cũng sửa cần câu", description: "Chúng tôi kiểm tra và sửa những chiếc cần bị hỏng.", tags: ["Sửa cần", "Kiểm tra đồ", "Gọi tư vấn"] },
        { title: "Hướng dẫn dễ hiểu", description: "Lần đầu đi câu cũng không sao. Chúng tôi sẽ chỉ từng bước về dụng cụ cần thiết và cách dùng.", tags: ["Chào đón người mới", "Tư vấn bộ thẻo", "Chuẩn bị chuyến câu"] },
      ],
    },
    trips: {
      eyebrow: "CHUYẾN CÂU BIỂN",
      title: ["Khi biển đẹp,", "hãy cùng nhau lên đường."],
      description: "Vào mùa xuân, thu và đông, chúng tôi đi câu biển bằng thuyền đi câu 10 chỗ. Người mới đến lần đầu cũng không sao. Khi tới điểm câu, chúng tôi sẽ giải thích dễ hiểu nên câu ở đâu và câu như thế nào.",
      boatAlt: "Thuyền đi câu biển 10 chỗ trước cửa hàng Daemul Fishing",
      boatLabel: "chỗ · thuyền đi câu theo mùa",
      species: ["Cá tráp đen", "Cá hố", "Bạch tuộc chân ngắn", "Mực nang", "Bạch tuộc", "Cá mú đá"],
      seasonLabel: "MÙA CÂU",
      seasonValue: "Xuân · Thu · Đông",
      guideLabel: "HƯỚNG DẪN",
      guideValue: "Chỉ dẫn từng bước",
      bookingLabel: "ĐẶT CHỖ",
      bookingValue: "Gọi trước khi đi",
      inquiry: "Hỏi chuyến câu",
      news: "Xem ảnh câu biển",
    },
    marquee: "Đồ câu cá · Sửa cần · Chuyến câu biển · Tư vấn bộ thẻo · Daemul Fishing Nonsan",
    social: {
      eyebrow: "THEO DÕI & MUA SẮM",
      title: "Gặp Daemul Nonsan trên nhiều kênh khác nhau.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Ảnh và tin mới", "Tin chuyến câu và cửa hàng", "Mua đồ câu trực tuyến", "Cộng đồng người câu cá", "Nhắn tin trực tiếp"],
      openNewTab: "Mở trong tab mới",
    },
    email: {
      eyebrow: "LIÊN HỆ QUA EMAIL",
      title: ["Có điều muốn hỏi?", "Cứ gửi email cho chúng tôi."],
      description: "Bạn có thể hỏi trước về hàng còn trong kho, sửa cần câu hoặc lịch đi câu biển. Chúng tôi sẽ kiểm tra và phản hồi.",
      topics: ["Hàng còn trong kho", "Sửa cần câu", "Chuyến câu biển"],
      senderLabel: "Email của bạn",
      senderPlaceholder: "Nhập email để nhận phản hồi",
      subjectLabel: "Tiêu đề",
      messageLabel: "Nội dung",
      messagePlaceholder: "Nhập nội dung bạn muốn hỏi",
      replyToLabel: "Email nhận phản hồi",
      cta: "Gửi email",
      note: "Ứng dụng email sẽ mở với nội dung và hai địa chỉ người nhận được điền sẵn.",
      subject: "[Daemul Fishing Nonsan] Yêu cầu tư vấn",
    },
    location: {
      eyebrow: "GHÉ CỬA HÀNG",
      title: ["Hãy ghé cửa hàng.", "Đỗ xe cũng rất thuận tiện."],
      address: "48 Gangbyeon-ro 308beon-gil, Nonsan, Chungcheongnam-do, Hàn Quốc",
      mapTitle: "Bản đồ vị trí Daemul Fishing ở Nonsan",
      storeName: "Daemul Fishing Nonsan",
      description: "Dễ đi từ trung tâm Nonsan và có chỗ đỗ xe rộng ngay trước cửa hàng.",
      mapCta: "Chỉ đường đến cửa hàng",
      blogCta: "Xem Naver Blog",
    },
    footer: { map: "Naver Map", call: "Gọi ngay" },
    floatingCall: "Gọi ngay",
    language: { button: "Đổi ngôn ngữ", menuLabel: "Chọn ngôn ngữ" },
    mainServicesLabel: "Dịch vụ chính của Daemul Fishing",
  },

  uz: {
    brand: "Nonsan Daemul baliq ovlash do‘koni",
    homeLabel: "Daemul Fishing bosh sahifasi",
    navLabel: "Asosiy menyu",
    nav: { about: "Do‘kon haqida", trips: "Dengiz safari", location: "Manzil" },
    call: "Qo‘ng‘iroq qilish",
    hoursLabel: "Ish vaqti",
    hero: {
      eyebrow: "2004-YILDAN BERI · NONSAN",
      title: ["Baliq oviga tayyorgarlik uchun", "Nonsan Daemulga keling."],
      description: "Assalomu alaykum! Daemul — Nonsandagi eng yirik chuchuk suv, dengiz va lure baliq ovlash anjomlari do‘koni bo‘lib, dengiz safarlarini ham muntazam tashkil qiladi.",
      locationCta: "Do‘kon manzili",
      alt: "Nonsandagi Daemul Fishing do‘koni va baliq ovlash qayig‘i",
    },
    about: {
      eyebrow: "BIZ HAQIMIZDA",
      title: ["Biz ham baliq ovini sevamiz,", "shuning uchun amaliyotni bilamiz."],
      description: "Biz ham o‘zimiz dengizga chiqamiz, shuning uchun qaysi kunda qanday jihoz kerakligini yaxshi bilamiz. Birinchi marta kelganlarga ham hammasini sodda qilib tushuntiramiz.",
      stats: ["Do‘kon ochildi", "20 yildan ortiq tajriba", "Baliq ovi safari qayig‘i", "Shaxsiy maslahat"],
      storeAlt: "Keng avtoturargohli Nonsan Daemul Fishing do‘koni",
      caption: "Bemalol ko‘ring va istagan savolingizni bering.",
      parking: "Do‘kon oldida keng avtoturargoh",
    },
    expertise: {
      eyebrow: "20 YILDAN ORTIQ TAJRIBA",
      title: ["Nonsanda baliq oviga tayyorlanyapsizmi?", "Tajribali baliqchidan so‘rang."],
      description: "Daemul Fishing do‘konini 20 yildan ortiq tajribaga ega mohir baliqchi boshqaradi. Chuchuk suv, lure, dengiz va qayiqda baliq ovlash bo‘yicha amaliy tajribamiz asosida kerakli tayyorgarlikni sodda tushuntiramiz.",
      items: [
        { title: "Safar jihozlari bo‘yicha maslahat", description: "Baliq turi, mavsum va joyga mos tayoqcha, g‘altak, montaj va kerakli buyumlarni tanlaymiz." },
        { title: "Dengiz ovi bo‘yicha maslahat", description: "Dengiz baliqlari, ahtapot va karakatitsa uchun kerakli jihozlarni tavsiya qilamiz." },
        { title: "Safar bo‘yicha maslahat", description: "Ob-havo, suv, jadval va 10 kishilik safar qayig‘ini band qilish haqida so‘rang." },
        { title: "Barcha baliq ovlash savollari", description: "Yangi boshlovchi ham, tajribali baliqchi ham istagan savolini berishi mumkin." },
      ],
    },
    services: {
      eyebrow: "DO‘KON VA XIZMATLAR",
      title: ["Baliq oviga kerakli hamma narsa", "shu yerda bor."],
      description: "Nima sotib olishni bilmasangiz ham mayli. Qayerda va qanday baliq tutmoqchi ekaningizni ayting.",
      items: [
        { title: "Baliq ovlash anjomlari ko‘p", description: "Qarmoq tayoqchasi, ip va kichik asboblarni bir joyda ko‘rishingiz mumkin.", tags: ["Chuchuk suv", "Dengiz ovi", "Lure"] },
        { title: "Qarmoq tayoqchasini ham ta’mirlaymiz", description: "Singan qarmoq tayoqchasini tekshirib, ta’mirlaymiz.", tags: ["Tayoqcha ta’miri", "Jihoz tekshiruvi", "Telefon maslahati"] },
        { title: "Sodda qilib tushuntiramiz", description: "Birinchi marta baliq ovlasangiz ham mayli. Kerakli jihozlar va ulardan foydalanishni bosqichma-bosqich ko‘rsatamiz.", tags: ["Yangi boshlovchilar", "Montaj maslahati", "Safarga tayyorgarlik"] },
      ],
    },
    trips: {
      eyebrow: "DENGIZDA BALIQ OVLASH",
      title: ["Ob-havo va suv mos bo‘lsa,", "birga dengizga chiqamiz."],
      description: "Bahor, kuz va qishda 10 kishilik safar qayig‘ida dengizga chiqamiz. Birinchi marta kelganlar ham bemalol qatnashishi mumkin. Baliq ovlash joyiga yetgach, qayerda va qanday ovlashni sodda qilib tushuntiramiz.",
      boatAlt: "Daemul Fishing oldidagi 10 kishilik dengiz safari qayig‘i",
      boatLabel: "kishilik safar qayig‘i · mavsumiy safarlar",
      species: ["Qora dorada", "Qilichbaliq", "Kichik ahtapot", "Karakatitsa", "Ahtapot", "Tosh baliq"],
      seasonLabel: "MAVSUM",
      seasonValue: "Bahor · Kuz · Qish",
      guideLabel: "YO‘RIQNOMA",
      guideValue: "Bosqichma-bosqich yordam",
      bookingLabel: "BAND QILISH",
      bookingValue: "Oldindan qo‘ng‘iroq qiling",
      inquiry: "Safar haqida so‘rash",
      news: "Dengiz ovi suratlarini ko‘rish",
    },
    marquee: "Baliq ovlash anjomlari · Ta’mir · Dengiz safari · Montaj maslahati · Nonsan Daemul",
    social: {
      eyebrow: "KUZATING VA XARID QILING",
      title: "Nonsan Daemulni turli platformalarda toping.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Suratlar va yangiliklar", "Safar va do‘kon xabarlari", "Onlayn jihoz xaridi", "Baliqchilar hamjamiyati", "To‘g‘ridan-to‘g‘ri yozing"],
      openNewTab: "Yangi oynada ochish",
    },
    email: {
      eyebrow: "EMAIL ORQALI BOG‘LANISH",
      title: ["Savolingiz bormi?", "Bizga email yuboring."],
      description: "Mahsulot mavjudligi, qarmoq tayoqchasini ta’mirlash yoki dengiz safari haqida oldindan so‘rashingiz mumkin. Xabaringizni ko‘rib, javob beramiz.",
      topics: ["Mahsulot mavjudligi", "Tayoqcha ta’miri", "Dengiz safari"],
      senderLabel: "Email manzilingiz",
      senderPlaceholder: "Javob olish uchun emailingizni kiriting",
      subjectLabel: "Mavzu",
      messageLabel: "Xabar",
      messagePlaceholder: "Savolingizni yozing",
      replyToLabel: "Javob emaili",
      cta: "Email yuborish",
      note: "Email ilovasi ochilib, xabaringiz va ikkala qabul qiluvchi avtomatik kiritiladi.",
      subject: "[Nonsan Daemul Fishing] Murojaat",
    },
    location: {
      eyebrow: "DO‘KONGA KELING",
      title: ["Do‘konimizga keling.", "Mashina qo‘yish ham qulay."],
      address: "Janubiy Koreya, Chungcheongnam-do, Nonsan-si, Gangbyeon-ro 308beon-gil 48",
      mapTitle: "Nonsan Daemul Fishing joylashuv xaritasi",
      storeName: "Nonsan Daemul Fishing",
      description: "Nonsan markazidan kelish qulay, do‘kon oldida keng avtoturargoh bor.",
      mapCta: "Do‘konga yo‘l olish",
      blogCta: "Naver Blogni ko‘rish",
    },
    footer: { map: "Naver Map", call: "Qo‘ng‘iroq" },
    floatingCall: "Qo‘ng‘iroq",
    language: { button: "Tilni o‘zgartirish", menuLabel: "Tilni tanlang" },
    mainServicesLabel: "Daemul Fishing xizmatlari",
  },

  ru: {
    brand: "Рыболовный магазин Nonsan Daemul",
    homeLabel: "Главная страница Daemul Fishing",
    navLabel: "Главное меню",
    nav: { about: "О магазине", trips: "Морские выезды", location: "Как добраться" },
    call: "Позвонить",
    hoursLabel: "Часы работы",
    hero: {
      eyebrow: "С 2004 ГОДА · НОНСАН",
      title: ["Подготовка к рыбалке —", "в Nonsan Daemul."],
      description: "Здравствуйте! Daemul — крупнейший в Нонсане специализированный магазин для пресноводной, морской и спиннинговой рыбалки. Мы также регулярно организуем морские выезды.",
      locationCta: "Найти магазин",
      alt: "Магазин Daemul Fishing в Нонсане и лодка для рыбалки",
    },
    about: {
      eyebrow: "О НАС",
      title: ["Мы тоже любим рыбалку", "и знаем её на практике."],
      description: "Мы сами выходим в море, поэтому хорошо знаем, какие снасти нужны в разные дни. Тем, кто пришёл впервые, всё объясним просто и понятно.",
      stats: ["Магазин открыт", "Более 20 лет опыта", "Лодка для рыболовных выездов", "Персональная консультация"],
      storeAlt: "Магазин Daemul Fishing в Нонсане с большой парковкой",
      caption: "Смотрите не спеша и смело задавайте вопросы.",
      parking: "Большая парковка перед магазином",
    },
    expertise: {
      eyebrow: "БОЛЕЕ 20 ЛЕТ ОПЫТА",
      title: ["Готовитесь к рыбалке в Нонсане?", "Спросите опытного рыболова."],
      description: "Daemul Fishing лично управляет опытный рыболов с более чем 20-летним стажем. Опираясь на практику пресноводной, спиннинговой, морской и лодочной рыбалки, мы просто объясняем, что нужно подготовить.",
      items: [
        { title: "Подготовка снастей к выезду", description: "Подберём удилище, катушку, оснастку и принадлежности под рыбу, сезон и место." },
        { title: "Консультация по морской рыбалке", description: "Поможем выбрать снасти для рыбы-сабли, морского окуня, осьминога и каракатицы." },
        { title: "Консультация по выездам", description: "Расскажем о погоде, приливах, расписании и бронировании 10-местной лодки для выездов." },
        { title: "Любые вопросы о рыбалке", description: "От новичков до опытных рыболовов — всем подробно и доброжелательно ответим." },
      ],
    },
    services: {
      eyebrow: "ТОВАРЫ И УСЛУГИ",
      title: ["Всё, что нужно для рыбалки,", "есть здесь."],
      description: "Не знаете, что купить? Ничего страшного. Просто скажите, где и какую рыбу хотите ловить.",
      items: [
        { title: "Большой выбор рыболовных товаров", description: "Удилища, леска и небольшие принадлежности собраны в одном месте.", tags: ["Пресная вода", "Морская рыбалка", "Спиннинг"] },
        { title: "Ремонтируем и удилища", description: "Проверяем и ремонтируем сломанные удилища.", tags: ["Ремонт удилищ", "Проверка снастей", "Звонок заранее"] },
        { title: "Объясняем просто", description: "Если вы рыбачите впервые, всё в порядке. Пошагово расскажем, какие снасти нужны и как ими пользоваться.", tags: ["Новичкам рады", "Подбор оснастки", "Подготовка к выезду"] },
      ],
    },
    trips: {
      eyebrow: "МОРСКАЯ РЫБАЛКА",
      title: ["Когда море зовёт,", "отправимся вместе."],
      description: "Весной, осенью и зимой мы выходим в море на 10-местной лодке для рыболовных выездов. Новичкам тоже рады. Добравшись до точки, мы просто объясним, где и как ловить рыбу.",
      boatAlt: "Десятиместная лодка для морских выездов перед магазином Daemul Fishing",
      boatLabel: "мест · лодка для сезонных выездов",
      species: ["Чёрный морской лещ", "Рыба-сабля", "Малый осьминог", "Каракатица", "Осьминог", "Морской окунь"],
      seasonLabel: "СЕЗОН",
      seasonValue: "Весна · Осень · Зима",
      guideLabel: "ПОМОЩЬ",
      guideValue: "Пошаговое сопровождение",
      bookingLabel: "ЗАПИСЬ",
      bookingValue: "Позвоните заранее",
      inquiry: "Запись на выезд",
      news: "Посмотреть фото морской рыбалки",
    },
    marquee: "Рыболовные снасти · Ремонт удилищ · Морские выезды · Подбор оснастки · Nonsan Daemul",
    social: {
      eyebrow: "СОЦСЕТИ И ПОКУПКИ",
      title: "Найдите Nonsan Daemul на разных площадках.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Фото и новости", "Выезды и новости магазина", "Снасти онлайн", "Сообщество рыболовов", "Написать напрямую"],
      openNewTab: "Открыть в новой вкладке",
    },
    email: {
      eyebrow: "СВЯЗАТЬСЯ ПО EMAIL",
      title: ["Остались вопросы?", "Напишите нам по электронной почте."],
      description: "Можно заранее уточнить наличие товара, ремонт удилища или расписание морских выездов. Мы прочитаем сообщение и ответим.",
      topics: ["Наличие товара", "Ремонт удилищ", "Морские выезды"],
      senderLabel: "Ваш email",
      senderPlaceholder: "Введите email для ответа",
      subjectLabel: "Тема",
      messageLabel: "Сообщение",
      messagePlaceholder: "Напишите свой вопрос",
      replyToLabel: "Email для ответа",
      cta: "Отправить письмо",
      note: "Откроется почтовое приложение с вашим сообщением и двумя адресами получателей.",
      subject: "[Nonsan Daemul Fishing] Вопрос",
    },
    location: {
      eyebrow: "КАК НАС НАЙТИ",
      title: ["Приезжайте в магазин.", "Парковаться удобно."],
      address: "Южная Корея, Chungcheongnam-do, Nonsan-si, Gangbyeon-ro 308beon-gil 48",
      mapTitle: "Карта магазина Daemul Fishing в Нонсане",
      storeName: "Nonsan Daemul Fishing",
      description: "Удобный подъезд из центра Нонсана и большая парковка прямо перед магазином.",
      mapCta: "Маршрут до магазина",
      blogCta: "Открыть Naver Blog",
    },
    footer: { map: "Naver Map", call: "Позвонить" },
    floatingCall: "Позвонить",
    language: { button: "Сменить язык", menuLabel: "Выберите язык" },
    mainServicesLabel: "Основные услуги Daemul Fishing",
  },

  km: {
    brand: "ហាងសម្ភារៈនេសាទ Nonsan Daemul",
    homeLabel: "ទំព័រដើម Daemul Fishing",
    navLabel: "ម៉ឺនុយចម្បង",
    nav: { about: "អំពីហាង", trips: "ដំណើរនេសាទសមុទ្រ", location: "ទីតាំងហាង" },
    call: "ទូរស័ព្ទ",
    hoursLabel: "ម៉ោងបើក",
    hero: {
      eyebrow: "ចាប់តាំងពីឆ្នាំ 2004 · NONSAN",
      title: ["រៀបចំទៅនេសាទ", "សូមមក Nonsan Daemul។"],
      description: "សួស្តី! Daemul គឺជាហាងឯកទេសដ៏ធំបំផុតនៅ Nonsan សម្រាប់ការនេសាទទឹកសាប សមុទ្រ និង lure ហើយយើងក៏រៀបចំដំណើរនេសាទសមុទ្រញឹកញាប់ផងដែរ។",
      locationCta: "មើលទីតាំងហាង",
      alt: "ហាង Daemul Fishing នៅ Nonsan និងទូកនេសាទ",
    },
    about: {
      eyebrow: "អំពីយើង",
      title: ["យើងក៏ស្រឡាញ់ការនេសាទ", "ហើយយល់ពីបទពិសោធន៍ជាក់ស្តែង។"],
      description: "យើងក៏ទៅសមុទ្រនេសាទដោយផ្ទាល់ ដូច្នេះយើងដឹងថាថ្ងៃណា និងឧបករណ៍ណាត្រូវការ។ អ្នកមកដំបូងក៏មិនបាច់បារម្ភទេ យើងនឹងពន្យល់ឲ្យងាយយល់។",
      stats: ["ហាងបើកដំណើរការ", "បទពិសោធន៍ជាង 20 ឆ្នាំ", "ទូកសម្រាប់ដំណើរនេសាទ", "ការប្រឹក្សាផ្ទាល់ខ្លួន"],
      storeAlt: "ហាង Daemul Fishing នៅ Nonsan ដែលមានចំណតធំទូលាយ",
      caption: "សូមមើលដោយស្រួល ហើយសួរយើងបានគ្រប់ពេល។",
      parking: "ចំណតធំទូលាយនៅមុខហាង",
    },
    expertise: {
      eyebrow: "បទពិសោធន៍នេសាទជាង 20 ឆ្នាំ",
      title: ["កំពុងរៀបចំនេសាទនៅ Nonsan?", "សួរអ្នកនេសាទដែលមានបទពិសោធន៍។"],
      description: "Daemul Fishing ដំណើរការផ្ទាល់ដោយអ្នកនេសាទជើងចាស់ដែលមានបទពិសោធន៍ជាង 20 ឆ្នាំ។ តាមបទពិសោធន៍ពិតក្នុងទឹកសាប lure សមុទ្រ និងនេសាទតាមទូក យើងនឹងពន្យល់ងាយៗអំពីអ្វីដែលត្រូវត្រៀម។",
      items: [
        { title: "ប្រឹក្សាសម្ភារៈដំណើរ", description: "យើងជួយជ្រើសដង រ៉ឺល ខ្សែ និងសម្ភារៈតាមប្រភេទត្រី រដូវ និងទីតាំង។" },
        { title: "ប្រឹក្សានេសាទសមុទ្រ", description: "ជួយជ្រើសសម្ភារៈសម្រាប់ត្រីដាវ ត្រីថ្ម មឹកយក្ស និងមឹកក្រឡា។" },
        { title: "ប្រឹក្សាដំណើរនេសាទ", description: "សួរអំពីអាកាសធាតុ ជំនោរ កាលវិភាគ និងការកក់ទូកដំណើរនេសាទ 10 កៅអី។" },
        { title: "ប្រឹក្សានេសាទគ្រប់យ៉ាង", description: "ទាំងអ្នកថ្មី និងអ្នកមានបទពិសោធន៍ អាចសួរយើងបានគ្រប់សំណួរ។" },
      ],
    },
    services: {
      eyebrow: "សម្ភារៈ និងសេវាកម្ម",
      title: ["អ្វីៗដែលត្រូវការសម្រាប់នេសាទ", "មាននៅទីនេះ។"],
      description: "មិនដឹងថាត្រូវទិញអ្វីក៏មិនអីទេ។ គ្រាន់តែប្រាប់យើងថាចង់នេសាទនៅឯណា និងចង់ចាប់ត្រីអ្វី។",
      items: [
        { title: "មានសម្ភារៈនេសាទច្រើន", description: "ដងសន្ទូច ខ្សែនេសាទ និងឧបករណ៍តូចៗមាននៅកន្លែងតែមួយ។", tags: ["ទឹកសាប", "សមុទ្រ", "Lure"] },
        { title: "យើងក៏ជួសជុលដងសន្ទូច", description: "យើងពិនិត្យ និងជួសជុលដងសន្ទូចដែលខូច។", tags: ["ជួសជុលដង", "ពិនិត្យសម្ភារៈ", "សួរតាមទូរស័ព្ទ"] },
        { title: "ពន្យល់ឲ្យងាយយល់", description: "ទើបនេសាទជាលើកដំបូងក៏មិនអីទេ។ យើងនឹងប្រាប់ម្តងមួយជំហានអំពីឧបករណ៍ដែលត្រូវការ និងរបៀបប្រើ។", tags: ["ស្វាគមន៍អ្នកថ្មី", "ណែនាំខ្សែ", "រៀបចំដំណើរ"] },
      ],
    },
    trips: {
      eyebrow: "ដំណើរនេសាទសមុទ្រ",
      title: ["ពេលអាកាសធាតុល្អ", "យើងទៅសមុទ្រជាមួយគ្នា។"],
      description: "នៅរដូវផ្ការីក ស្លឹកឈើជ្រុះ និងរងា យើងជិះទូកដំណើរនេសាទ 10 កៅអីទៅសមុទ្រ។ អ្នកមកជាលើកដំបូងក៏មិនអីទេ។ ពេលទៅដល់កន្លែងនេសាទ យើងនឹងពន្យល់ឲ្យងាយយល់ថាត្រូវនេសាទនៅឯណា និងដោយរបៀបណា។",
      boatAlt: "ទូកដំណើរនេសាទសមុទ្រ 10 កៅអីនៅមុខហាង Daemul Fishing",
      boatLabel: "កៅអី · ទូកដំណើរនេសាទតាមរដូវ",
      species: ["ត្រីប៉ូហ្គីខ្មៅ", "ត្រីដាវ", "មឹកជើងខ្លី", "មឹកក្រឡា", "មឹកយក្ស", "ត្រីថ្ម"],
      seasonLabel: "រដូវ",
      seasonValue: "ផ្ការីក · ស្លឹកឈើជ្រុះ · រងា",
      guideLabel: "ការណែនាំ",
      guideValue: "ជួយម្តងមួយជំហាន",
      bookingLabel: "កក់",
      bookingValue: "សូមទូរស័ព្ទជាមុន",
      inquiry: "សួរអំពីដំណើរ",
      news: "មើលរូបថតនេសាទសមុទ្រ",
    },
    marquee: "សម្ភារៈនេសាទ · ជួសជុលដង · ដំណើរសមុទ្រ · ការណែនាំខ្សែ · Nonsan Daemul",
    social: {
      eyebrow: "តាមដាន និងទិញ",
      title: "ស្វែងរក Nonsan Daemul នៅលើបណ្តាញជាច្រើន។",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["រូបថត និងព័ត៌មាន", "ដំណើរ និងព័ត៌មានហាង", "ទិញសម្ភារៈអនឡាញ", "សហគមន៍អ្នកនេសាទ", "ផ្ញើសារផ្ទាល់"],
      openNewTab: "បើកក្នុងផ្ទាំងថ្មី",
    },
    email: {
      eyebrow: "សាកសួរតាមអ៊ីមែល",
      title: ["មានសំណួរមែនទេ?", "សូមផ្ញើអ៊ីមែលមកយើង។"],
      description: "អ្នកអាចសួរអំពីស្តុកសម្ភារៈ ការជួសជុលដងសន្ទូច ឬកាលវិភាគដំណើរនេសាទសមុទ្រ។ យើងនឹងពិនិត្យ ហើយឆ្លើយតប។",
      topics: ["ស្តុកសម្ភារៈ", "ជួសជុលដង", "ដំណើរសមុទ្រ"],
      senderLabel: "អ៊ីមែលរបស់អ្នក",
      senderPlaceholder: "បញ្ចូលអ៊ីមែលសម្រាប់ទទួលចម្លើយ",
      subjectLabel: "ចំណងជើង",
      messageLabel: "ខ្លឹមសារ",
      messagePlaceholder: "សរសេរសំណួររបស់អ្នក",
      replyToLabel: "អ៊ីមែលសម្រាប់ឆ្លើយតប",
      cta: "ផ្ញើអ៊ីមែល",
      note: "កម្មវិធីអ៊ីមែលនឹងបើកជាមួយសារ និងអាសយដ្ឋានអ្នកទទួលទាំងពីរ។",
      subject: "[Nonsan Daemul Fishing] សំណួរ",
    },
    location: {
      eyebrow: "មកកាន់ហាង",
      title: ["សូមមកកាន់ហាង។", "ការចតរថយន្តក៏ងាយស្រួល។"],
      address: "48 Gangbyeon-ro 308beon-gil, Nonsan, Chungcheongnam-do, កូរ៉េខាងត្បូង",
      mapTitle: "ផែនទីទីតាំង Daemul Fishing នៅ Nonsan",
      storeName: "Nonsan Daemul Fishing",
      description: "ងាយស្រួលមកពីកណ្តាល Nonsan ហើយមានចំណតធំទូលាយនៅមុខហាង។",
      mapCta: "មើលផ្លូវទៅហាង",
      blogCta: "មើល Naver Blog",
    },
    footer: { map: "Naver Map", call: "ទូរស័ព្ទ" },
    floatingCall: "ទូរស័ព្ទ",
    language: { button: "ប្តូរភាសា", menuLabel: "ជ្រើសរើសភាសា" },
    mainServicesLabel: "សេវាកម្ម Daemul Fishing",
  },

  my: {
    brand: "Nonsan Daemul ငါးမျှားပစ္စည်းဆိုင်",
    homeLabel: "Daemul Fishing ပင်မစာမျက်နှာ",
    navLabel: "ပင်မမီနူး",
    nav: { about: "ဆိုင်အကြောင်း", trips: "ပင်လယ်ငါးမျှားခရီး", location: "ဆိုင်လမ်းညွှန်" },
    call: "ဖုန်းခေါ်ရန်",
    hoursLabel: "ဖွင့်ချိန်",
    hero: {
      eyebrow: "2004 မှစတင် · NONSAN",
      title: ["ငါးမျှားဖို့ ပြင်ဆင်တာဆို", "Nonsan Daemul ကိုလာပါ။"],
      description: "မင်္ဂလာပါ။ Daemul သည် Nonsan ရှိ အကြီးဆုံး ရေချို၊ ပင်လယ်နှင့် lure ငါးမျှားပစ္စည်းအထူးဆိုင်ဖြစ်ပြီး ပင်လယ်ငါးမျှားခရီးများကိုလည်း မကြာခဏ စီစဉ်ပေးပါတယ်။",
      locationCta: "ဆိုင်တည်နေရာကြည့်ရန်",
      alt: "Nonsan Daemul Fishing ဆိုင်ရှေ့နှင့် ငါးမျှားလှေ",
    },
    about: {
      eyebrow: "ကျွန်ုပ်တို့အကြောင်း",
      title: ["ကျွန်ုပ်တို့လည်း ငါးမျှားရတာကြိုက်လို့", "လက်တွေ့ကို ကောင်းကောင်းသိပါတယ်။"],
      description: "ကျွန်ုပ်တို့လည်း ကိုယ်တိုင်ပင်လယ်ထွက်တာကြောင့် ဘယ်နေ့မှာ ဘယ်ပစ္စည်းလိုအပ်တယ်ဆိုတာ ကောင်းကောင်းသိပါတယ်။ ပထမဆုံးလာသူကိုလည်း နားလည်လွယ်အောင် ရှင်းပြပေးပါတယ်။",
      stats: ["ဆိုင်ဖွင့်ခြင်း", "နှစ် 20 ကျော်အတွေ့အကြုံ", "ငါးမျှားခရီးသွားလှေ", "ကိုယ်ပိုင်အကြံပေးမှု"],
      storeAlt: "ကားရပ်ရန်နေရာကျယ်သော Nonsan Daemul Fishing ဆိုင်",
      caption: "အေးအေးဆေးဆေးကြည့်ပြီး လွတ်လွတ်လပ်လပ်မေးပါ။",
      parking: "ဆိုင်ရှေ့ကားရပ်ရန်နေရာကျယ်",
    },
    expertise: {
      eyebrow: "နှစ် 20 ကျော် ငါးမျှားအတွေ့အကြုံ",
      title: ["Nonsan မှာ ငါးမျှားဖို့ ပြင်ဆင်နေပါသလား?", "အတွေ့အကြုံရှိသူကို မေးပါ။"],
      description: "Daemul Fishing ကို ငါးမျှားအတွေ့အကြုံ နှစ် 20 ကျော်ရှိသူက ကိုယ်တိုင်ဦးစီးပါတယ်။ ရေချို၊ lure၊ ပင်လယ်နှင့် လှေပေါ်ငါးမျှားခြင်း လက်တွေ့အတွေ့အကြုံအရ လိုအပ်တဲ့ပြင်ဆင်မှုကို နားလည်လွယ်အောင် ရှင်းပြပေးပါတယ်။",
      items: [
        { title: "ခရီးသုံးပစ္စည်းအကြံပေး", description: "ငါးအမျိုးအစား၊ ရာသီနဲ့ နေရာအလိုက် တံ၊ reel၊ ကြိုးဆင်ပစ္စည်းနဲ့ လိုအပ်တာတွေကို ရွေးပေးပါတယ်။" },
        { title: "ပင်လယ်ငါးမျှားအကြံပေး", description: "ပင်လယ်ငါး၊ ရေဘဝဲနဲ့ ကင်းမွန်အတွက် လိုအပ်တဲ့ပစ္စည်းတွေကို အတူရွေးပေးပါတယ်။" },
        { title: "ငါးမျှားခရီးအကြံပေး", description: "ရာသီဥတု၊ ရေတက်ရေကျ၊ အစီအစဉ်နဲ့ လူ 10 စီး ငါးမျှားခရီးလှေ ကြိုတင်မှာယူမှုကို မေးနိုင်ပါတယ်။" },
        { title: "ငါးမျှားအကြောင်းအားလုံး", description: "စတင်သူကနေ အတွေ့အကြုံရှိသူအထိ မေးသမျှကို နားလည်လွယ်အောင် ဖြေပေးပါတယ်။" },
      ],
    },
    services: {
      eyebrow: "ပစ္စည်းနှင့်ဝန်ဆောင်မှု",
      title: ["ငါးမျှားဖို့လိုအပ်တာအားလုံး", "ဒီမှာရှိပါတယ်။"],
      description: "ဘာဝယ်ရမလဲ မသိလည်း ရပါတယ်။ ဘယ်နေရာမှာ ဘယ်ငါးဖမ်းချင်တယ်ဆိုတာပဲ ပြောပြပါ။",
      items: [
        { title: "ငါးမျှားပစ္စည်းအများကြီးရှိပါတယ်", description: "ငါးမျှားတံ၊ ငါးမျှားကြိုးနဲ့ ပစ္စည်းအသေးတွေကို တစ်နေရာတည်းမှာ ကြည့်နိုင်ပါတယ်။", tags: ["ရေချိုငါးမျှား", "ပင်လယ်ငါးမျှား", "Lure"] },
        { title: "ငါးမျှားတံကိုလည်း ပြုပြင်ပေးပါတယ်", description: "ပျက်နေတဲ့ ငါးမျှားတံကို စစ်ဆေးပြီး ပြုပြင်ပေးပါတယ်။", tags: ["တံပြုပြင်", "ပစ္စည်းစစ်ဆေး", "ဖုန်းဖြင့်မေးရန်"] },
        { title: "နားလည်လွယ်အောင် ရှင်းပြပေးပါတယ်", description: "ပထမဆုံးငါးမျှားတာလည်း ရပါတယ်။ လိုအပ်တဲ့ပစ္စည်းနဲ့ အသုံးပြုပုံကို တစ်ဆင့်ချင်း ပြောပြပေးပါတယ်။", tags: ["စတင်သူကြိုဆို", "ကြိုးဆင်အကြံပေး", "ခရီးပြင်ဆင်မှု"] },
      ],
    },
    trips: {
      eyebrow: "ပင်လယ်ငါးမျှားခရီး",
      title: ["ပင်လယ်ထွက်လို့ကောင်းတဲ့နေ့ဆို", "အတူတူသွားကြမယ်။"],
      description: "နွေဦး၊ ဆောင်းဦးနဲ့ ဆောင်းရာသီမှာ လူ 10 စီး ငါးမျှားခရီးလှေနဲ့ ပင်လယ်ငါးမျှားခရီး ထွက်ပါတယ်။ ပထမဆုံးလာသူလည်း ရပါတယ်။ ငါးမျှားနေရာရောက်ရင် ဘယ်မှာ ဘယ်လိုငါးမျှားရမလဲဆိုတာ နားလည်လွယ်အောင် ရှင်းပြပေးပါတယ်။",
      boatAlt: "Daemul Fishing ဆိုင်ရှေ့ရှိ လူ 10 စီး ပင်လယ်ငါးမျှားခရီးလှေ",
      boatLabel: "စီး · ရာသီအလိုက် ငါးမျှားခရီးလှေ",
      species: ["Black porgy", "Hairtail", "Webfoot octopus", "Cuttlefish", "Octopus", "Rockfish"],
      seasonLabel: "ရာသီ",
      seasonValue: "နွေဦး · ဆောင်းဦး · ဆောင်း",
      guideLabel: "လမ်းညွှန်",
      guideValue: "တစ်ဆင့်ချင်းကူညီမှု",
      bookingLabel: "ကြိုတင်မှာယူ",
      bookingValue: "ဖုန်းကြိုခေါ်ပါ",
      inquiry: "ခရီးမေးမြန်းရန်",
      news: "ပင်လယ်ငါးမျှားဓာတ်ပုံများကြည့်ရန်",
    },
    marquee: "ငါးမျှားပစ္စည်း · တံပြုပြင် · ပင်လယ်ခရီး · ကြိုးဆင်အကြံပေး · Nonsan Daemul",
    social: {
      eyebrow: "သတင်းနှင့် အွန်လိုင်းဝယ်ယူမှု",
      title: "Nonsan Daemul ကို နေရာစုံမှာ တွေ့နိုင်ပါတယ်။",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["ဓာတ်ပုံနှင့်သတင်း", "ခရီးနှင့်ဆိုင်သတင်း", "အွန်လိုင်းပစ္စည်းဝယ်ရန်", "ငါးမျှားသူများအဖွဲ့", "တိုက်ရိုက်စာပို့ရန်"],
      openNewTab: "တက်ဘ်အသစ်တွင်ဖွင့်ရန်",
    },
    email: {
      eyebrow: "အီးမေးလ်ဖြင့်မေးမြန်းရန်",
      title: ["မေးစရာရှိပါသလား?", "အီးမေးလ်ပို့လို့လည်း ရပါတယ်။"],
      description: "ပစ္စည်းလက်ကျန်၊ ငါးမျှားတံပြုပြင်ခြင်း သို့မဟုတ် ပင်လယ်ခရီးအစီအစဉ်ကို ကြိုတင်မေးမြန်းနိုင်ပါတယ်။ စာကိုစစ်ဆေးပြီး ပြန်လည်ဖြေကြားပေးပါမယ်။",
      topics: ["ပစ္စည်းလက်ကျန်", "တံပြုပြင်ခြင်း", "ပင်လယ်ခရီး"],
      senderLabel: "သင့်အီးမေးလ်",
      senderPlaceholder: "အကြောင်းပြန်ရန် အီးမေးလ်ထည့်ပါ",
      subjectLabel: "ခေါင်းစဉ်",
      messageLabel: "အကြောင်းအရာ",
      messagePlaceholder: "မေးလိုသည့်အကြောင်းအရာကို ရေးပါ",
      replyToLabel: "အကြောင်းပြန်မည့်အီးမေးလ်",
      cta: "အီးမေးလ်ပို့ရန်",
      note: "အီးမေးလ်အက်ပ်ပွင့်လာပြီး စာနှင့် လက်ခံသူလိပ်စာနှစ်ခုလုံး အလိုအလျောက်ဖြည့်ပေးပါမယ်။",
      subject: "[Nonsan Daemul Fishing] မေးမြန်းချက်",
    },
    location: {
      eyebrow: "ဆိုင်သို့လာရန်",
      title: ["ဆိုင်ကိုလာခဲ့ပါ။", "ကားရပ်ရတာလည်း လွယ်ပါတယ်။"],
      address: "တောင်ကိုရီးယား၊ Chungcheongnam-do, Nonsan-si, Gangbyeon-ro 308beon-gil 48",
      mapTitle: "Nonsan Daemul Fishing တည်နေရာမြေပုံ",
      storeName: "Nonsan Daemul Fishing",
      description: "Nonsan မြို့လယ်ကနေလာရတာလွယ်ပြီး ဆိုင်ရှေ့မှာ ကားရပ်ရန်နေရာကျယ်ပါတယ်။",
      mapCta: "ဆိုင်သို့ လမ်းညွှန်",
      blogCta: "Naver Blog ကြည့်ရန်",
    },
    footer: { map: "Naver Map", call: "ဖုန်းခေါ်ရန်" },
    floatingCall: "ဖုန်းခေါ်ရန်",
    language: { button: "ဘာသာစကားပြောင်းရန်", menuLabel: "ဘာသာစကားရွေးပါ" },
    mainServicesLabel: "Daemul Fishing ဝန်ဆောင်မှုများ",
  },
};
