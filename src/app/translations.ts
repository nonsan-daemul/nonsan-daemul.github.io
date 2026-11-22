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
    stats: [string, string, string, string, string];
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
    title: string;
    description: string;
    topics: [string, string, string];
    senderLabel: string;
    senderPlaceholder: string;
    subjectLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    replyToLabel: string;
    cta: string;
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
    nav: { about: "매장 소개", trips: "바다 출조", location: "오시는 길" },
    call: "전화 문의",
    hoursLabel: "운영시간",
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["낚시 준비는", "논산 대물낚시에서."],
      description:
        "안녕하세요! 논산 최대 규모의 민물·바다·루어 낚시 전문점, 대물낚시입니다. 배를 타고 바다낚시도 수시로 나갑니다.",
      locationCta: "매장 위치 보기",
      alt: "논산 대물낚시 매장 전경과 출조용 보트",
    },
    about: {
      eyebrow: "대물낚시 이야기",
      title: ["우리도 낚시를 좋아해요.", "그래서 잘 알아요."],
      description:
        "우리도 직접 바다에 가요. 그래서 어떤 날, 어떤 도구가 필요한지 잘 알아요. 처음 오신 분도 어렵지 않게 알려드릴게요.",
      stats: ["매장 오픈", "낚시 경험", "출조 보트", "출조 횟수", "맞춤 상담"],
      storeAlt: "넓은 주차 공간을 갖춘 논산 대물낚시 매장 외관",
      caption: "편하게 보고, 궁금하면 물어보세요.",
      parking: "매장 앞 넓은 주차 공간",
    },
    expertise: {
      eyebrow: "20년 넘는 낚시 경험",
      title: ["20년 넘게 낚시한", "주인장에게 물어보세요."],
      description:
        "2004년에 논산에 문을 열었습니다. 민물에서도, 배를 타고 나간 바다에서도 직접 낚시해 온 주인장이 그날 쓸 도구와 쓰는 법을 알려드려요.",
      items: [
        {
          title: "낚시 갈 때 무엇을 챙길까요?",
          description: "잡고 싶은 물고기와 낚시할 곳에 맞춰 낚싯대, 릴, 바늘과 미끼를 골라드려요.",
        },
        {
          title: "바다에서는 어떤 도구를 쓰나요?",
          description: "갈치, 우럭, 쭈꾸미, 갑오징어 등 바다낚시에 필요한 장비와 채비를 함께 골라드려요.",
        },
        {
          title: "배낚시 일정과 예약은 어떻게 알아보나요?",
          description: "날씨와 물때, 출조 일정, 10인승 출조 보트 예약까지 궁금한 내용을 편하게 물어보세요.",
        },
        {
          title: "낚시가 처음인데 무엇부터 할까요?",
          description: "어디서 어떤 물고기를 잡고 싶은지 말씀해 주세요. 낚싯대 고르는 법부터 줄에 바늘과 미끼를 다는 법까지 알려드려요.",
        },
      ],
    },
    services: {
      eyebrow: "용품과 수리",
      title: ["낚시용품부터", "낚싯대 수리까지"],
      description: "쓰던 낚싯대가 있어도, 이제 막 시작해도 편하게 들러주세요.",
      items: [
        {
          title: "낚시용품 고르기",
          description: "민물·바다낚시용 낚싯대와 줄, 바늘, 루어(가짜 미끼)를 한곳에서 살펴보세요.",
          tags: ["민물", "바다", "루어"],
        },
        {
          title: "낚싯대 수리",
          description: "고장 난 낚싯대를 가져오세요. 어느 부분이 망가졌는지 살펴보고 수리를 도와드려요.",
          tags: ["낚싯대 수리", "도구 확인", "전화 문의"],
        },
        {
          title: "처음 쓰는 낚시도구",
          description: "처음 낚시해도 괜찮아요. 필요한 도구와 쓰는 방법을 차근차근 알려드려요.",
          tags: ["처음이어도 좋아요", "도구 상담", "바다 갈 준비"],
        },
      ],
    },
    trips: {
      eyebrow: "함께 가는 바다낚시",
      title: ["10인승 출조 보트로", "떠나는 바다낚시"],
      description:
        "봄과 가을, 겨울에 배를 타고 낚시하러 갑니다. 처음 타는 분도 환영해요. 물고기가 잘 잡히는 곳에 도착하면 낚싯줄을 어디에 어떻게 내릴지 알려드려요.",
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
      title: "논산 대물낚시를 여러 곳에서 만나보세요.",
      labels: ["Instagram", "네이버 블로그", "네이버 스마트스토어", "네이버 밴드", "카카오톡"],
      handles: ["매장 사진", "출조 소식과 사진", "낚시용품 구매", "낚시 이야기", "채팅으로 문의"],
      openNewTab: "새 탭에서 열기",
    },
    email: {
      eyebrow: "이메일 문의",
      title: "궁금한 점이 있다면 문의주세요.",
      description: "필요한 물건이 있는지, 낚싯대를 고칠 수 있는지, 언제 바다에 가는지 물어보세요. 확인하고 답장해드릴게요.",
      topics: ["물건이 있나요?", "낚싯대를 고칠 수 있나요?", "언제 바다에 가나요?"],
      senderLabel: "내 이메일",
      senderPlaceholder: "답장받을 이메일을 적어주세요",
      subjectLabel: "제목",
      messageLabel: "내용",
      messagePlaceholder: "궁금한 내용을 적어주세요",
      replyToLabel: "답장받을 이메일",
      cta: "메일 보내기",
      subject: "[논산 대물낚시] 문의합니다",
    },
    location: {
      eyebrow: "매장에 오기",
      title: ["매장 위치와", "운영시간"],
      address: "충청남도 논산시 강변로308번길 48",
      mapTitle: "논산 대물낚시 위치 지도",
      storeName: "논산 대물낚시",
      description: "논산 시내와 가깝고 매장 바로 앞에 넓은 주차 공간이 있어요.",
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
        "Welcome to Daemul Fishing, Nonsan’s largest tackle shop for freshwater, sea and lure fishing. We also run regular sea fishing trips.",
      locationCta: "Find the store",
      alt: "Daemul Fishing storefront in Nonsan with its fishing trip boat",
    },
    about: {
      eyebrow: "OUR STORY",
      title: ["We love fishing too,", "so we know the water."],
      description:
        "We head out to sea ourselves, so we know which gear works best for each day. If it’s your first time, we’ll explain everything in a simple way.",
      stats: ["Shop opened", "Years of fishing experience", "Seats on our fishing boat", "Fishing trips", "Personal advice"],
      storeAlt: "Daemul Fishing storefront in Nonsan with spacious parking",
      caption: "Take your time, look around, and ask away.",
      parking: "Spacious parking in front",
    },
    expertise: {
      eyebrow: "20+ YEARS OF FISHING EXPERIENCE",
      title: ["Ask the owner,", "an angler for over 20 years"],
      description: "We opened in Nonsan in 2004. Our owner fishes both inland and at sea and can show you what to take on your trip and how to use it.",
      items: [
        { title: "What should I take fishing?", description: "Tell us where you’ll fish and what you’d like to catch. We’ll help you choose a rod, reel, hooks and bait." },
        { title: "What gear do I need at sea?", description: "We’ll help you choose tackle for hairtail, rockfish, webfoot octopus, cuttlefish and more." },
        { title: "How can I check trip dates or book a place?", description: "Call us about weather, tides, trip dates or a place on our 10-seat fishing boat." },
        { title: "I’m new to fishing. Where do I start?", description: "Tell us where you want to fish and what you hope to catch. We’ll show you how to pick a rod, tie on a hook and add bait." },
      ],
    },
    services: {
      eyebrow: "Gear & repairs",
      title: ["Fishing tackle", "and rod repairs"],
      description: "Bring in a rod you already use, or stop by for help getting started.",
      items: [
        {
          title: "Choose your tackle",
          description: "Find rods, line, hooks and lures (artificial bait) for freshwater and sea fishing.",
          tags: ["Freshwater", "Sea fishing", "Lure fishing"],
        },
        {
          title: "Rod repairs",
          description: "Bring in your damaged rod. We’ll check what’s broken and help with the repair.",
          tags: ["Rod repair", "Gear check", "Call ahead"],
        },
        {
          title: "Using your first fishing gear",
          description: "New to fishing? That’s okay. We’ll show you which tools you need and how to use them, step by step.",
          tags: ["Beginners welcome", "Rig advice", "Trip prep"],
        },
      ],
    },
    trips: {
      eyebrow: "SEA FISHING TRIPS",
      title: ["Sea fishing on", "our 10-seat boat"],
      description:
        "Join us on the water in spring, autumn and winter. First trip? Once we reach a fishing spot, we’ll show you where and how to drop your line.",
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
      handles: ["Shop photos", "Trip news and photos", "Shop fishing tackle", "Talk fishing", "Ask us in chat"],
      openNewTab: "Open in a new tab",
    },
    email: {
      eyebrow: "EMAIL ENQUIRIES",
      title: "Have a question? Get in touch.",
      description: "Ask about product availability, fishing rod repairs, or upcoming sea trips. We will check your message and get back to you.",
      topics: ["Product stock", "Rod repairs", "Fishing trips"],
      senderLabel: "Your email",
      senderPlaceholder: "Enter an email where we can reply",
      subjectLabel: "Subject",
      messageLabel: "Message",
      messagePlaceholder: "Tell us what you would like to ask",
      replyToLabel: "Reply email",
      cta: "Send email",
      subject: "[Nonsan Daemul Fishing] Enquiry",
    },
    location: {
      eyebrow: "VISIT THE STORE",
      title: ["Store location", "and opening hours"],
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
      description: "您好！这里是论山最大的大物渔具店，主营淡水钓、海钓和路亚用品。我们也经常带钓友乘船出海钓鱼。",
      locationCta: "查看店铺位置",
      alt: "论山大物渔具店外景与出海钓鱼船",
    },
    about: {
      eyebrow: "关于大物渔具",
      title: ["因为我们也爱钓鱼，", "所以更懂现场需要。"],
      description: "我们也会亲自出海，所以很清楚不同天气需要哪些装备。第一次来钓鱼也不用担心，我们会用简单易懂的方式告诉您。",
      stats: ["开店年份", "垂钓经验（年）", "钓船座位数", "出海垂钓次数", "专属咨询"],
      storeAlt: "设有宽敞停车场的论山大物渔具店外景",
      caption: "慢慢挑，有问题随时问我们。",
      parking: "店门前宽敞停车位",
    },
    expertise: {
      eyebrow: "20多年实钓经验",
      title: ["钓鱼怎么准备？", "问问有二十多年经验的店主"],
      description: "我们于2004年在论山开店。店主既在淡水钓鱼，也常乘船出海，可以教您当天该带什么、怎么用。",
      items: [
        { title: "去钓鱼要带些什么？", description: "告诉我们您要去哪里、想钓什么鱼，我们会帮您挑选鱼竿、渔轮、鱼钩和鱼饵。" },
        { title: "海钓要用什么装备？", description: "无论是钓带鱼、黑鲪、短蛸还是墨鱼，我们都可以帮您选配钓具。" },
        { title: "怎样查询船钓日期和预订座位？", description: "欢迎来电咨询天气、潮汐和出海日期，也可以预约10人座钓船。" },
        { title: "我是新手，从哪里开始？", description: "告诉我们想去哪里、钓什么鱼。我们会从挑选鱼竿教起，再教您绑钩、挂饵。" },
      ],
    },
    services: {
      eyebrow: "渔具与维修",
      title: ["选购渔具", "与鱼竿维修"],
      description: "您可以带上用惯的鱼竿来店，刚学钓鱼也欢迎来看看。",
      items: [
        { title: "挑选渔具", description: "店里备有淡水钓和海钓用的鱼竿、鱼线、鱼钩和拟饵（假饵）。", tags: ["淡水钓", "海钓", "路亚"] },
        { title: "鱼竿维修", description: "把损坏的鱼竿带来，我们会检查损坏的位置，帮您维修。", tags: ["钓竿维修", "装备检查", "电话咨询"] },
        { title: "第一次使用钓具", description: "第一次钓鱼也没关系。我们会一步一步告诉您需要哪些工具、该怎么使用。", tags: ["新手欢迎", "钓组咨询", "出钓准备"] },
      ],
    },
    trips: {
      eyebrow: "海钓出行",
      title: ["乘坐10人座钓船", "出海钓鱼"],
      description: "春、秋、冬三季我们都会出海钓鱼。第一次乘船也欢迎参加。到了钓点，我们会教您在哪里下钩、怎样放线。",
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
      handles: ["店铺照片", "出海消息与照片", "购买渔具", "交流钓鱼心得", "在线咨询"],
      openNewTab: "在新标签页中打开",
    },
    email: {
      eyebrow: "邮件咨询",
      title: "有任何问题，欢迎联系我们。",
      description: "无论是商品库存、钓竿维修还是出钓安排，都可以提前来信咨询。我们确认后会尽快回复。",
      topics: ["商品库存", "钓竿维修", "出钓咨询"],
      senderLabel: "您的邮箱",
      senderPlaceholder: "请输入用于接收回复的邮箱",
      subjectLabel: "主题",
      messageLabel: "内容",
      messagePlaceholder: "请输入想咨询的内容",
      replyToLabel: "回复邮箱",
      cta: "发送邮件",
      subject: "[论山大物渔具店] 邮件咨询",
    },
    location: {
      eyebrow: "到店访问",
      title: ["店铺位置", "与营业时间"],
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
      description: "こんにちは。論山市最大規模の釣具店、大物釣具です。淡水・海・ルアー釣りの道具がそろい、船での海釣りにも随時ご案内しています。",
      locationCta: "店舗の場所を見る",
      alt: "論山の大物釣具の店舗外観と釣行用ボート",
    },
    about: {
      eyebrow: "大物釣具について",
      title: ["私たちも釣りが好きだから、", "現場のことが分かります。"],
      description: "私たちも実際に海へ出るので、その日にどんな道具が必要かよく分かります。初めての方にも、難しくないよう分かりやすくご案内します。",
      stats: ["開店年", "釣りの経験年数", "釣り船の定員（人）", "釣行回数", "個別相談"],
      storeAlt: "広い駐車場を備えた論山大物釣具の外観",
      caption: "ゆっくり見て、気軽にご相談ください。",
      parking: "店舗前に広い駐車スペース",
    },
    expertise: {
      eyebrow: "20年以上の釣り経験",
      title: ["釣り歴20年以上の", "店主にご相談ください"],
      description: "2004年に論山で店を開きました。淡水釣りから海の船釣りまで楽しむ店主が、その日に必要な道具と使い方をお伝えします。",
      items: [
        { title: "釣りに何を持っていけばいいですか？", description: "釣りたい魚と場所に合わせて、竿、リール、針、餌を一緒に選びます。" },
        { title: "海釣りにはどんな道具を使いますか？", description: "タチウオ、クロソイ、イイダコ、コウイカなど、狙う魚に合った道具と仕掛けをご案内します。" },
        { title: "船釣りの日程や予約はどう確認できますか？", description: "天気や潮の動き、出船日、10人乗りの釣り船のご予約は、お電話でお問い合わせください。" },
        { title: "釣りが初めてです。何から始めればいいですか？", description: "釣りたい魚と場所を教えてください。竿の選び方から、糸に針を結んで餌を付けるところまでお教えします。" },
      ],
    },
    services: {
      eyebrow: "釣具と修理",
      title: ["釣具選びから", "釣り竿の修理まで"],
      description: "お使いの竿がある方も、これから釣りを始める方もお気軽にお立ち寄りください。",
      items: [
        { title: "釣具を選ぶ", description: "淡水・海釣り用の竿や糸、針、ルアー（疑似餌）を店頭でお選びいただけます。", tags: ["淡水釣り", "海釣り", "ルアー釣り"] },
        { title: "釣り竿の修理", description: "傷んだ竿をお持ちください。どこが壊れているか確認し、修理をお手伝いします。", tags: ["ロッド修理", "用品点検", "電話相談"] },
        { title: "初めて使う釣り道具", description: "釣りが初めてでも大丈夫です。必要な道具と使い方を順番にお伝えします。", tags: ["初心者歓迎", "仕掛け相談", "釣行準備"] },
      ],
    },
    trips: {
      eyebrow: "海釣りツアー",
      title: ["10人乗りの釣り船で", "海釣りへ"],
      description: "春・秋・冬は船で海釣りに出かけます。初めての方もご参加いただけます。釣り場に着いたら、どこでどう糸を下ろすかお教えします。",
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
      handles: ["お店の写真", "釣行のお知らせと写真", "釣具を購入", "釣りの話をする", "チャットで相談"],
      openNewTab: "新しいタブで開く",
    },
    email: {
      eyebrow: "メールでのお問い合わせ",
      title: "ご不明な点はお気軽にお問い合わせください。",
      description: "商品の在庫、釣り竿の修理、釣行予定など、事前に確認したいことをお送りください。確認後にご返信します。",
      topics: ["商品の在庫", "釣り竿の修理", "釣行のお問い合わせ"],
      senderLabel: "あなたのメールアドレス",
      senderPlaceholder: "返信を受け取るアドレスを入力",
      subjectLabel: "件名",
      messageLabel: "内容",
      messagePlaceholder: "お問い合わせ内容をご入力ください",
      replyToLabel: "返信先メールアドレス",
      cta: "メールを送る",
      subject: "[論山 大物釣具] メールでのお問い合わせ",
    },
    location: {
      eyebrow: "アクセス",
      title: ["店舗の場所と", "営業時間"],
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
      description: "Xin chào! Daemul là cửa hàng đồ câu lớn nhất Nonsan, chuyên về câu nước ngọt, câu biển và câu bằng mồi giả. Chúng tôi cũng thường xuyên tổ chức các chuyến câu biển bằng thuyền.",
      locationCta: "Xem vị trí cửa hàng",
      alt: "Mặt tiền cửa hàng Daemul Fishing ở Nonsan và thuyền đi câu",
    },
    about: {
      eyebrow: "CÂU CHUYỆN DAEMUL",
      title: ["Chúng tôi cũng mê câu cá,", "nên hiểu rõ thực tế."],
      description: "Chúng tôi cũng trực tiếp ra biển nên biết ngày nào cần dụng cụ gì. Người mới đến lần đầu cũng sẽ được hướng dẫn thật dễ hiểu.",
      stats: ["Năm mở cửa", "Số năm kinh nghiệm", "Số chỗ trên thuyền câu", "Số chuyến đi câu", "Tư vấn riêng"],
      storeAlt: "Cửa hàng Daemul Fishing ở Nonsan với bãi đỗ xe rộng",
      caption: "Cứ xem thoải mái và hỏi chúng tôi nhé.",
      parking: "Bãi đỗ xe rộng trước cửa hàng",
    },
    expertise: {
      eyebrow: "HƠN 20 NĂM KINH NGHIỆM CÂU CÁ",
      title: ["Hỏi chủ tiệm,", "người đã đi câu hơn 20 năm"],
      description: "Chúng tôi mở cửa hàng ở Nonsan năm 2004. Chủ tiệm có kinh nghiệm câu cả ở nước ngọt lẫn ngoài biển, sẽ chỉ bạn cần mang gì và dùng thế nào.",
      items: [
        { title: "Đi câu cần mang gì?", description: "Cho chúng tôi biết điểm câu và loài cá bạn muốn câu. Chúng tôi sẽ giúp chọn cần, máy câu, lưỡi và mồi phù hợp." },
        { title: "Câu biển cần dụng cụ gì?", description: "Chúng tôi sẽ giúp chọn đồ câu cá hố, cá đá, bạch tuộc chân ngắn, mực nang và các loài khác." },
        { title: "Làm sao xem lịch đi và đặt chỗ trên thuyền?", description: "Bạn có thể gọi để hỏi về thời tiết, thủy triều, lịch đi hoặc đặt chỗ trên thuyền câu 10 chỗ." },
        { title: "Lần đầu đi câu nên bắt đầu từ đâu?", description: "Hãy cho biết bạn muốn câu ở đâu và câu loài cá nào. Chúng tôi sẽ chỉ cách chọn cần, buộc lưỡi vào dây và gắn mồi." },
      ],
    },
    services: {
      eyebrow: "Đồ câu và sửa cần",
      title: ["Chọn đồ câu", "và sửa cần câu"],
      description: "Dù đã có cần câu hay mới bắt đầu, bạn đều có thể ghé cửa hàng.",
      items: [
        { title: "Chọn dụng cụ câu", description: "Xem cần, dây, lưỡi và mồi giả cho cả câu nước ngọt lẫn câu biển ngay tại cửa hàng.", tags: ["Câu nước ngọt", "Câu biển", "Câu lure"] },
        { title: "Sửa cần câu", description: "Mang cần hỏng đến cửa hàng. Chúng tôi sẽ kiểm tra chỗ hỏng và giúp bạn sửa cần.", tags: ["Sửa cần", "Kiểm tra đồ", "Gọi tư vấn"] },
        { title: "Lần đầu sử dụng đồ câu", description: "Lần đầu đi câu cũng không sao. Chúng tôi sẽ chỉ từng bước về dụng cụ cần thiết và cách dùng.", tags: ["Chào đón người mới", "Tư vấn bộ thẻo", "Chuẩn bị chuyến câu"] },
      ],
    },
    trips: {
      eyebrow: "CHUYẾN CÂU BIỂN",
      title: ["Đi câu biển", "trên thuyền 10 chỗ"],
      description: "Chúng tôi ra biển câu vào mùa xuân, thu và đông. Bạn lần đầu lên thuyền cũng có thể tham gia. Khi đến điểm câu, chúng tôi sẽ chỉ bạn chỗ thả dây và cách thả.",
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
      handles: ["Ảnh cửa hàng", "Tin và ảnh chuyến câu", "Mua đồ câu", "Trò chuyện về câu cá", "Hỏi qua tin nhắn"],
      openNewTab: "Mở trong tab mới",
    },
    email: {
      eyebrow: "LIÊN HỆ QUA EMAIL",
      title: "Bạn có thắc mắc? Hãy liên hệ với chúng tôi.",
      description: "Bạn có thể hỏi trước về hàng còn trong kho, sửa cần câu hoặc lịch đi câu biển. Chúng tôi sẽ kiểm tra và phản hồi.",
      topics: ["Hàng còn trong kho", "Sửa cần câu", "Chuyến câu biển"],
      senderLabel: "Email của bạn",
      senderPlaceholder: "Nhập email để nhận phản hồi",
      subjectLabel: "Tiêu đề",
      messageLabel: "Nội dung",
      messagePlaceholder: "Nhập nội dung bạn muốn hỏi",
      replyToLabel: "Email nhận phản hồi",
      cta: "Gửi email",
      subject: "[Daemul Fishing Nonsan] Yêu cầu tư vấn",
    },
    location: {
      eyebrow: "GHÉ CỬA HÀNG",
      title: ["Địa chỉ cửa hàng", "và giờ mở cửa"],
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
      stats: ["Do‘kon ochildi", "20 yildan ortiq tajriba", "Baliq ovi safari qayig‘i", "Baliq ovi safarlari soni", "Shaxsiy maslahat"],
      storeAlt: "Keng avtoturargohli Nonsan Daemul Fishing do‘koni",
      caption: "Bemalol ko‘ring va istagan savolingizni bering.",
      parking: "Do‘kon oldida keng avtoturargoh",
    },
    expertise: {
      eyebrow: "20 YILDAN ORTIQ TAJRIBA",
      title: ["20 yildan ortiq tajribaga ega", "do‘kon egasidan so‘rang."],
      description: "Do‘konimiz 2004-yilda Nonsanda ochilgan. Do‘kon egasi ham chuchuk suvda, ham dengizda qayiqdan baliq ovlaydi. Tashrifingizda kerakli anjomlarni tanlash va ishlatishni ko‘rsatadi.",
      items: [
        { title: "Baliq oviga nima olib boray?", description: "Baliq turi, mavsum va joyga mos tayoqcha, g‘altak, montaj va kerakli buyumlarni tanlaymiz." },
        { title: "Dengizda qanday anjomlar ishlatiladi?", description: "Dengiz baliqlari, ahtapot va karakatitsa uchun kerakli jihozlarni tavsiya qilamiz." },
        { title: "Safar jadvalini qanday bilsam va joyni qanday band qilsam bo‘ladi?", description: "Ob-havo, suv, jadval va 10 kishilik safar qayig‘ini band qilish haqida so‘rang." },
        { title: "Birinchi marta baliq ovlayman. Nimadan boshlay?", description: "Yangi boshlovchi ham, tajribali baliqchi ham istagan savolini berishi mumkin." },
      ],
    },
    services: {
      eyebrow: "Anjomlar va ta’mir",
      title: ["Baliq ovlash anjomlari va", "qarmoq ta’miri"],
      description: "Nima sotib olishni bilmasangiz ham mayli. Qayerda va qanday baliq tutmoqchi ekaningizni ayting.",
      items: [
        { title: "Baliq ovlash anjomlari ko‘p", description: "Qarmoq tayoqchasi, ip va kichik asboblarni bir joyda ko‘rishingiz mumkin.", tags: ["Chuchuk suv", "Dengiz ovi", "Lure"] },
        { title: "Qarmoq tayoqchasini ham ta’mirlaymiz", description: "Singan qarmoq tayoqchasini tekshirib, ta’mirlaymiz.", tags: ["Tayoqcha ta’miri", "Jihoz tekshiruvi", "Telefon maslahati"] },
        { title: "Sodda qilib tushuntiramiz", description: "Birinchi marta baliq ovlasangiz ham mayli. Kerakli jihozlar va ulardan foydalanishni bosqichma-bosqich ko‘rsatamiz.", tags: ["Yangi boshlovchilar", "Montaj maslahati", "Safarga tayyorgarlik"] },
      ],
    },
    trips: {
      eyebrow: "DENGIZDA BALIQ OVLASH",
      title: ["10 o‘rinli qayiqda", "dengizga baliq oviga"],
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
      title: "Savolingiz bo‘lsa, biz bilan bog‘laning.",
      description: "Mahsulot mavjudligi, qarmoq tayoqchasini ta’mirlash yoki dengiz safari haqida oldindan so‘rashingiz mumkin. Xabaringizni ko‘rib, javob beramiz.",
      topics: ["Mahsulot mavjudligi", "Tayoqcha ta’miri", "Dengiz safari"],
      senderLabel: "Email manzilingiz",
      senderPlaceholder: "Javob olish uchun emailingizni kiriting",
      subjectLabel: "Mavzu",
      messageLabel: "Xabar",
      messagePlaceholder: "Savolingizni yozing",
      replyToLabel: "Javob emaili",
      cta: "Email yuborish",
      subject: "[Nonsan Daemul Fishing] Murojaat",
    },
    location: {
      eyebrow: "DO‘KONGA KELING",
      title: ["Do‘kon manzili va", "ish vaqti"],
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
      stats: ["Магазин открыт", "Более 20 лет опыта", "Лодка для рыболовных выездов", "Выезды на рыбалку", "Персональная консультация"],
      storeAlt: "Магазин Daemul Fishing в Нонсане с большой парковкой",
      caption: "Смотрите не спеша и смело задавайте вопросы.",
      parking: "Большая парковка перед магазином",
    },
    expertise: {
      eyebrow: "БОЛЕЕ 20 ЛЕТ ОПЫТА",
      title: ["Спросите владельца магазина.", "Он рыбачит уже больше 20 лет."],
      description: "Мы открылись в Нонсане в 2004 году. Владелец рыбачит и в пресной воде, и в море с лодки. Он поможет выбрать снасти для вашей рыбалки и покажет, как ими пользоваться.",
      items: [
        { title: "Что взять на рыбалку?", description: "Подберём удилище, катушку, оснастку и принадлежности под рыбу, сезон и место." },
        { title: "Какие снасти нужны в море?", description: "Поможем выбрать снасти для рыбы-сабли, морского окуня, осьминога и каракатицы." },
        { title: "Как узнать расписание и забронировать место?", description: "Расскажем о погоде, приливах, расписании и бронировании 10-местной лодки для выездов." },
        { title: "Я впервые на рыбалке. С чего начать?", description: "От новичков до опытных рыболовов — всем подробно и доброжелательно ответим." },
      ],
    },
    services: {
      eyebrow: "Снасти и ремонт",
      title: ["Рыболовные снасти", "и ремонт удилищ"],
      description: "Не знаете, что купить? Ничего страшного. Просто скажите, где и какую рыбу хотите ловить.",
      items: [
        { title: "Большой выбор рыболовных товаров", description: "Удилища, леска и небольшие принадлежности собраны в одном месте.", tags: ["Пресная вода", "Морская рыбалка", "Спиннинг"] },
        { title: "Ремонтируем и удилища", description: "Проверяем и ремонтируем сломанные удилища.", tags: ["Ремонт удилищ", "Проверка снастей", "Звонок заранее"] },
        { title: "Объясняем просто", description: "Если вы рыбачите впервые, всё в порядке. Пошагово расскажем, какие снасти нужны и как ими пользоваться.", tags: ["Новичкам рады", "Подбор оснастки", "Подготовка к выезду"] },
      ],
    },
    trips: {
      eyebrow: "МОРСКАЯ РЫБАЛКА",
      title: ["Морская рыбалка", "на десятиместной лодке"],
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
      title: "Есть вопросы? Свяжитесь с нами.",
      description: "Можно заранее уточнить наличие товара, ремонт удилища или расписание морских выездов. Мы прочитаем сообщение и ответим.",
      topics: ["Наличие товара", "Ремонт удилищ", "Морские выезды"],
      senderLabel: "Ваш email",
      senderPlaceholder: "Введите email для ответа",
      subjectLabel: "Тема",
      messageLabel: "Сообщение",
      messagePlaceholder: "Напишите свой вопрос",
      replyToLabel: "Email для ответа",
      cta: "Отправить письмо",
      subject: "[Nonsan Daemul Fishing] Вопрос",
    },
    location: {
      eyebrow: "КАК НАС НАЙТИ",
      title: ["Адрес магазина", "и часы работы"],
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
      stats: ["ហាងបើកដំណើរការ", "បទពិសោធន៍ជាង 20 ឆ្នាំ", "ទូកសម្រាប់ដំណើរនេសាទ", "ចំនួនដំណើរនេសាទ", "ការប្រឹក្សាផ្ទាល់ខ្លួន"],
      storeAlt: "ហាង Daemul Fishing នៅ Nonsan ដែលមានចំណតធំទូលាយ",
      caption: "សូមមើលដោយស្រួល ហើយសួរយើងបានគ្រប់ពេល។",
      parking: "ចំណតធំទូលាយនៅមុខហាង",
    },
    expertise: {
      eyebrow: "បទពិសោធន៍នេសាទជាង 20 ឆ្នាំ",
      title: ["សួរម្ចាស់ហាងដែលមានបទពិសោធន៍", "នេសាទជាង 20 ឆ្នាំ។"],
      description: "យើងបានបើកហាងនៅ Nonsan ក្នុងឆ្នាំ 2004។ ម្ចាស់ហាងធ្លាប់នេសាទទាំងក្នុងទឹកសាប និងលើទូកនៅសមុទ្រ។ គាត់អាចជួយជ្រើសឧបករណ៍សម្រាប់ថ្ងៃនេសាទ និងបង្ហាញរបៀបប្រើ។",
      items: [
        { title: "តើត្រូវយកអ្វីខ្លះពេលទៅនេសាទ?", description: "យើងជួយជ្រើសដង រ៉ឺល ខ្សែ និងសម្ភារៈតាមប្រភេទត្រី រដូវ និងទីតាំង។" },
        { title: "តើត្រូវប្រើឧបករណ៍អ្វីខ្លះនៅសមុទ្រ?", description: "ជួយជ្រើសសម្ភារៈសម្រាប់ត្រីដាវ ត្រីថ្ម មឹកយក្ស និងមឹកក្រឡា។" },
        { title: "តើអាចមើលកាលវិភាគ និងកក់កន្លែងលើទូកដោយរបៀបណា?", description: "សួរអំពីអាកាសធាតុ ជំនោរ កាលវិភាគ និងការកក់ទូកដំណើរនេសាទ 10 កៅអី។" },
        { title: "ខ្ញុំទើបនេសាទលើកដំបូង។ តើគួរចាប់ផ្តើមពីអ្វី?", description: "ទាំងអ្នកថ្មី និងអ្នកមានបទពិសោធន៍ អាចសួរយើងបានគ្រប់សំណួរ។" },
      ],
    },
    services: {
      eyebrow: "សម្ភារៈ និងការជួសជុល",
      title: ["សម្ភារៈនេសាទ និង", "ការជួសជុលដងសន្ទូច"],
      description: "មិនដឹងថាត្រូវទិញអ្វីក៏មិនអីទេ។ គ្រាន់តែប្រាប់យើងថាចង់នេសាទនៅឯណា និងចង់ចាប់ត្រីអ្វី។",
      items: [
        { title: "មានសម្ភារៈនេសាទច្រើន", description: "ដងសន្ទូច ខ្សែនេសាទ និងឧបករណ៍តូចៗមាននៅកន្លែងតែមួយ។", tags: ["ទឹកសាប", "សមុទ្រ", "Lure"] },
        { title: "យើងក៏ជួសជុលដងសន្ទូច", description: "យើងពិនិត្យ និងជួសជុលដងសន្ទូចដែលខូច។", tags: ["ជួសជុលដង", "ពិនិត្យសម្ភារៈ", "សួរតាមទូរស័ព្ទ"] },
        { title: "ពន្យល់ឲ្យងាយយល់", description: "ទើបនេសាទជាលើកដំបូងក៏មិនអីទេ។ យើងនឹងប្រាប់ម្តងមួយជំហានអំពីឧបករណ៍ដែលត្រូវការ និងរបៀបប្រើ។", tags: ["ស្វាគមន៍អ្នកថ្មី", "ណែនាំខ្សែ", "រៀបចំដំណើរ"] },
      ],
    },
    trips: {
      eyebrow: "ដំណើរនេសាទសមុទ្រ",
      title: ["ទៅនេសាទនៅសមុទ្រ", "លើទូក 10 កៅអី"],
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
      title: "បើមានសំណួរ សូមទាក់ទងមកយើង។",
      description: "អ្នកអាចសួរអំពីស្តុកសម្ភារៈ ការជួសជុលដងសន្ទូច ឬកាលវិភាគដំណើរនេសាទសមុទ្រ។ យើងនឹងពិនិត្យ ហើយឆ្លើយតប។",
      topics: ["ស្តុកសម្ភារៈ", "ជួសជុលដង", "ដំណើរសមុទ្រ"],
      senderLabel: "អ៊ីមែលរបស់អ្នក",
      senderPlaceholder: "បញ្ចូលអ៊ីមែលសម្រាប់ទទួលចម្លើយ",
      subjectLabel: "ចំណងជើង",
      messageLabel: "ខ្លឹមសារ",
      messagePlaceholder: "សរសេរសំណួររបស់អ្នក",
      replyToLabel: "អ៊ីមែលសម្រាប់ឆ្លើយតប",
      cta: "ផ្ញើអ៊ីមែល",
      subject: "[Nonsan Daemul Fishing] សំណួរ",
    },
    location: {
      eyebrow: "មកកាន់ហាង",
      title: ["ទីតាំងហាង និង", "ម៉ោងបើកហាង"],
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
      stats: ["ဆိုင်ဖွင့်ခြင်း", "နှစ် 20 ကျော်အတွေ့အကြုံ", "ငါးမျှားခရီးသွားလှေ", "ငါးမျှားခရီးအရေအတွက်", "ကိုယ်ပိုင်အကြံပေးမှု"],
      storeAlt: "ကားရပ်ရန်နေရာကျယ်သော Nonsan Daemul Fishing ဆိုင်",
      caption: "အေးအေးဆေးဆေးကြည့်ပြီး လွတ်လွတ်လပ်လပ်မေးပါ။",
      parking: "ဆိုင်ရှေ့ကားရပ်ရန်နေရာကျယ်",
    },
    expertise: {
      eyebrow: "နှစ် 20 ကျော် ငါးမျှားအတွေ့အကြုံ",
      title: ["နှစ် 20 ကျော် ငါးမျှားလာတဲ့", "ဆိုင်ရှင်ကို မေးကြည့်ပါ။"],
      description: "ဆိုင်ကို 2004 ခုနှစ်မှာ Nonsan မြို့မှာ ဖွင့်ခဲ့ပါတယ်။ ဆိုင်ရှင်က ရေချိုမှာရော ပင်လယ်ထဲမှာ လှေနဲ့ပါ ငါးမျှားလေ့ရှိပါတယ်။ သင့်ခရီးအတွက် လိုတဲ့ပစ္စည်းတွေကို ရွေးပေးပြီး သုံးနည်းလည်း ပြပေးပါတယ်။",
      items: [
        { title: "ငါးမျှားသွားရင် ဘာတွေ ယူသွားရမလဲ။", description: "ငါးအမျိုးအစား၊ ရာသီနဲ့ နေရာအလိုက် တံ၊ reel၊ ကြိုးဆင်ပစ္စည်းနဲ့ လိုအပ်တာတွေကို ရွေးပေးပါတယ်။" },
        { title: "ပင်လယ်မှာ ဘယ်လိုပစ္စည်းတွေ သုံးရမလဲ။", description: "ပင်လယ်ငါး၊ ရေဘဝဲနဲ့ ကင်းမွန်အတွက် လိုအပ်တဲ့ပစ္စည်းတွေကို အတူရွေးပေးပါတယ်။" },
        { title: "ခရီးစဉ်ကို ဘယ်လိုစုံစမ်းပြီး နေရာကြိုယူရမလဲ။", description: "ရာသီဥတု၊ ရေတက်ရေကျ၊ အစီအစဉ်နဲ့ လူ 10 စီး ငါးမျှားခရီးလှေ ကြိုတင်မှာယူမှုကို မေးနိုင်ပါတယ်။" },
        { title: "ပထမဆုံး ငါးမျှားမှာပါ။ ဘယ်က စရမလဲ။", description: "စတင်သူကနေ အတွေ့အကြုံရှိသူအထိ မေးသမျှကို နားလည်လွယ်အောင် ဖြေပေးပါတယ်။" },
      ],
    },
    services: {
      eyebrow: "ငါးမျှားပစ္စည်းနှင့် ပြုပြင်ရေး",
      title: ["ငါးမျှားပစ္စည်းများနှင့်", "ငါးမျှားတံ ပြုပြင်ရေး"],
      description: "ဘာဝယ်ရမလဲ မသိလည်း ရပါတယ်။ ဘယ်နေရာမှာ ဘယ်ငါးဖမ်းချင်တယ်ဆိုတာပဲ ပြောပြပါ။",
      items: [
        { title: "ငါးမျှားပစ္စည်းအများကြီးရှိပါတယ်", description: "ငါးမျှားတံ၊ ငါးမျှားကြိုးနဲ့ ပစ္စည်းအသေးတွေကို တစ်နေရာတည်းမှာ ကြည့်နိုင်ပါတယ်။", tags: ["ရေချိုငါးမျှား", "ပင်လယ်ငါးမျှား", "Lure"] },
        { title: "ငါးမျှားတံကိုလည်း ပြုပြင်ပေးပါတယ်", description: "ပျက်နေတဲ့ ငါးမျှားတံကို စစ်ဆေးပြီး ပြုပြင်ပေးပါတယ်။", tags: ["တံပြုပြင်", "ပစ္စည်းစစ်ဆေး", "ဖုန်းဖြင့်မေးရန်"] },
        { title: "နားလည်လွယ်အောင် ရှင်းပြပေးပါတယ်", description: "ပထမဆုံးငါးမျှားတာလည်း ရပါတယ်။ လိုအပ်တဲ့ပစ္စည်းနဲ့ အသုံးပြုပုံကို တစ်ဆင့်ချင်း ပြောပြပေးပါတယ်။", tags: ["စတင်သူကြိုဆို", "ကြိုးဆင်အကြံပေး", "ခရီးပြင်ဆင်မှု"] },
      ],
    },
    trips: {
      eyebrow: "ပင်လယ်ငါးမျှားခရီး",
      title: ["10 ယောက်စီးလှေနဲ့", "ပင်လယ်ငါးမျှားခရီး"],
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
      title: "မေးစရာရှိရင် ဆက်သွယ်လိုက်ပါ။",
      description: "ပစ္စည်းလက်ကျန်၊ ငါးမျှားတံပြုပြင်ခြင်း သို့မဟုတ် ပင်လယ်ခရီးအစီအစဉ်ကို ကြိုတင်မေးမြန်းနိုင်ပါတယ်။ စာကိုစစ်ဆေးပြီး ပြန်လည်ဖြေကြားပေးပါမယ်။",
      topics: ["ပစ္စည်းလက်ကျန်", "တံပြုပြင်ခြင်း", "ပင်လယ်ခရီး"],
      senderLabel: "သင့်အီးမေးလ်",
      senderPlaceholder: "အကြောင်းပြန်ရန် အီးမေးလ်ထည့်ပါ",
      subjectLabel: "ခေါင်းစဉ်",
      messageLabel: "အကြောင်းအရာ",
      messagePlaceholder: "မေးလိုသည့်အကြောင်းအရာကို ရေးပါ",
      replyToLabel: "အကြောင်းပြန်မည့်အီးမေးလ်",
      cta: "အီးမေးလ်ပို့ရန်",
      subject: "[Nonsan Daemul Fishing] မေးမြန်းချက်",
    },
    location: {
      eyebrow: "ဆိုင်သို့လာရန်",
      title: ["ဆိုင်လိပ်စာနှင့်", "ဆိုင်ဖွင့်ချိန်"],
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
