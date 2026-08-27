export type Locale = "ko" | "en" | "zh" | "ja" | "vi" | "uz" | "ru" | "km" | "my";

export type Translation = {
  brand: string;
  homeLabel: string;
  navLabel: string;
  nav: { about: string; trips: string; location: string };
  call: string;
  hero: {
    eyebrow: string;
    title: [string, string];
    description: string;
    locationCta: string;
    blogCta: string;
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
    description: string;
    labels: [string, string, string, string, string];
    handles: [string, string, string, string, string];
    openNewTab: string;
  };
  email: {
    eyebrow: string;
    title: [string, string];
    description: string;
    topics: [string, string, string];
    recipientLabel: string;
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
    call: "전화하기",
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["낚시 갈 준비,", "여기서 끝내세요."],
      description:
        "대물낚시에는 낚시에 필요한 물건이 많이 있어요. 민물낚시 물건도, 바다낚시 물건도 있어요. 잘 모르겠으면 편하게 물어보세요.",
      locationCta: "매장 위치 보기",
      blogCta: "바다낚시 사진 보기",
      alt: "논산 대물낚시 매장 전경과 출조용 보트",
    },
    about: {
      eyebrow: "대물낚시 이야기",
      title: ["우리도 낚시를 좋아해요.", "그래서 잘 알아요."],
      description:
        "우리도 직접 바다에 가요. 그래서 어떤 날, 어떤 도구가 필요한지 잘 알아요. 처음 오신 분도 어렵지 않게 알려드릴게요.",
      stats: ["가게를 연 해", "오랫동안 낚시했어요", "10명이 타는 보트", "한 사람씩 친절하게 상담"],
      storeAlt: "넓은 주차 공간을 갖춘 논산 대물낚시 매장 외관",
      caption: "편하게 보고, 궁금하면 물어보세요.",
      parking: "매장 앞 넓은 주차 공간",
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
          description: "망가진 낚싯대를 살펴보고 고쳐드려요. 릴은 고치지 않아요.",
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
        "봄, 가을, 겨울에 10명이 타는 보트로 바다에 가요. 처음 온 분도 괜찮아요. 어디서 어떻게 낚는지 쉽게 알려드려요.",
      boatAlt: "대물낚시 매장 앞 10인승 바다낚시 보트",
      boatLabel: "명이 타는 보트",
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
      title: "인터넷에서도 만나요.",
      description: "새 소식도 보고, 낚시용품도 살 수 있어요. 궁금한 건 카카오톡으로 물어보세요.",
      labels: ["Instagram", "네이버 블로그", "네이버 스마트스토어", "네이버 밴드", "카카오톡"],
      handles: ["사진을 봐요", "새 소식을 봐요", "낚시용품을 사요", "함께 이야기해요", "바로 물어봐요"],
      openNewTab: "새 탭에서 열기",
    },
    email: {
      eyebrow: "이메일 문의",
      title: ["메일로 물어봐도", "괜찮아요."],
      description: "필요한 물건이 있는지, 낚싯대를 고칠 수 있는지, 언제 바다에 가는지 물어보세요. 확인하고 답장해드릴게요.",
      topics: ["물건이 있나요?", "낚싯대를 고칠 수 있나요?", "언제 바다에 가나요?"],
      recipientLabel: "메일을 받는 곳",
      cta: "두 이메일로 보내기",
      note: "버튼을 누르면 메일 앱이 열려요. 두 이메일이 자동으로 들어가요.",
      subject: "[논산 대물낚시] 문의합니다",
    },
    location: {
      eyebrow: "매장에 오기",
      title: ["매장에 오세요.", "주차도 편해요."],
      address: "충청남도 논산시 강변로308번길 48",
      mapTitle: "논산 대물낚시 위치 지도",
      storeName: "논산 대물낚시",
      description: "논산 시내에서 가까워요. 매장 앞에 차를 세울 곳도 넓어요.",
      mapCta: "네이버 지도로 길찾기",
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
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["Great fishing starts", "with the right preparation."],
      description:
        "Welcome to Daemul Fishing, Nonsan’s largest fishing tackle store. Browse everything you need for freshwater and sea fishing, and feel free to ask us anything.",
      locationCta: "Find the store",
      blogCta: "Latest trip updates",
      alt: "Daemul Fishing storefront in Nonsan with its fishing trip boat",
    },
    about: {
      eyebrow: "OUR STORY",
      title: ["We love fishing too,", "so we know the water."],
      description:
        "We have been serving Nonsan anglers since 2004. We do more than sell tackle—we head out to sea ourselves, follow the changing seasons, and help every customer prepare with the gear that truly fits the day.",
      stats: ["The year we opened", "Years of field experience", "Passenger fishing boat", "Personal gear advice"],
      storeAlt: "Daemul Fishing storefront in Nonsan with spacious parking",
      caption: "Take your time, look around, and ask away.",
      parking: "Spacious parking in front",
    },
    services: {
      eyebrow: "STORE & SERVICE",
      title: ["Gear, advice, and repairs", "all in one place."],
      description: "Not sure what you need? Tell us how and where you fish, and we will walk you through the right setup.",
      items: [
        {
          title: "Tackle for every trip",
          description: "A wide selection of rods, rigs, and accessories for freshwater, sea, lure, and boat fishing.",
          tags: ["Freshwater", "Sea fishing", "Lure fishing"],
        },
        {
          title: "Fishing rod repairs",
          description: "We carefully inspect and repair fishing rods and related gear with decades of hands-on experience. Reel repairs are not available.",
          tags: ["Rod repair", "Gear check", "Call ahead"],
        },
        {
          title: "Advice from experience",
          description: "Our recommendations come from real trips, with gear and rigs matched to the season, location, and target fish.",
          tags: ["Beginners welcome", "Rig advice", "Trip prep"],
        },
      ],
    },
    trips: {
      eyebrow: "SEA FISHING TRIPS",
      title: ["When the conditions are right,", "let’s head to sea."],
      description:
        "In spring, autumn, and winter, we tow our 10-passenger boat to the sea when the tide and weather line up. First-timers are welcome—we guide you through the spot, setup, and day on the water.",
      boatAlt: "Ten-passenger sea fishing boat in front of Daemul Fishing",
      boatLabel: "passenger boat · seasonal trips",
      species: ["Black porgy", "Hairtail", "Webfoot octopus", "Cuttlefish", "Octopus", "Rockfish"],
      seasonLabel: "SEASON",
      seasonValue: "Spring · Autumn · Winter",
      guideLabel: "GUIDE",
      guideValue: "Step-by-step support",
      bookingLabel: "BOOKING",
      bookingValue: "Call before your trip",
      inquiry: "Trip enquiry",
      news: "Latest trip updates",
    },
    marquee: "Fishing tackle · Rod repairs · Sea trips · Rig advice · Nonsan Daemul Fishing",
    social: {
      eyebrow: "FOLLOW & SHOP",
      title: "Find us online too.",
      description: "Catch up on trip news, shop for fishing gear, or message us directly.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Photos and updates", "Trips and store news", "Shop fishing gear online", "Join our community", "Message us directly"],
      openNewTab: "Open in a new tab",
    },
    email: {
      eyebrow: "EMAIL ENQUIRIES",
      title: ["Have a question?", "Send us an email anytime."],
      description: "Ask about product availability, fishing rod repairs, or upcoming sea trips. We will check your message and get back to you.",
      topics: ["Product stock", "Rod repairs", "Fishing trips"],
      recipientLabel: "Email recipients",
      cta: "Email both addresses",
      note: "Your email app will open with both recipient addresses filled in.",
      subject: "[Nonsan Daemul Fishing] Enquiry",
    },
    location: {
      eyebrow: "VISIT THE STORE",
      title: ["Need fishing gear?", "Drop by anytime."],
      address: "48, Gangbyeon-ro 308beon-gil, Nonsan-si, Chungcheongnam-do, South Korea",
      mapTitle: "Map showing Daemul Fishing in Nonsan",
      storeName: "Nonsan Daemul Fishing",
      description: "Easy to reach from central Nonsan, with plenty of parking right in front of the store.",
      mapCta: "Directions on Naver Map",
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
    hero: {
      eyebrow: "2004年创立 · 论山",
      title: ["想钓得开心，", "先把装备准备好。"],
      description: "这里是论山规模最大的渔具店——大物渔具。淡水钓、海钓所需的装备都可以慢慢挑选，有任何问题都欢迎来问我们。",
      locationCta: "查看店铺位置",
      blogCta: "查看最新出钓动态",
      alt: "论山大物渔具店外景与出海钓鱼船",
    },
    about: {
      eyebrow: "关于大物渔具",
      title: ["因为我们也爱钓鱼，", "所以更懂现场需要。"],
      description: "从2004年起，我们一直陪伴论山的钓友。我们不只是销售渔具，也会亲自出海，观察季节、钓点和钓组的变化，帮您把真正需要的装备准备好。",
      stats: ["开店年份", "20多年实战经验", "10人座出钓船", "一对一装备建议"],
      storeAlt: "设有宽敞停车场的论山大物渔具店外景",
      caption: "慢慢挑，有问题随时问我们。",
      parking: "店门前宽敞停车位",
    },
    services: {
      eyebrow: "商品与服务",
      title: ["选装备、做维修，", "来这里一次解决。"],
      description: "不知道该选什么也没关系。告诉我们您的钓法和目标鱼，我们会一步一步帮您搭配。",
      items: [
        { title: "各类渔具齐全", description: "淡水钓、海钓、路亚和船钓所需的钓竿、钓组和配件都准备齐全。", tags: ["淡水钓", "海钓", "路亚"] },
        { title: "钓竿维修", description: "凭借多年经验，我们会仔细检查并维修钓竿和相关用品。暂不提供渔轮维修。", tags: ["钓竿维修", "装备检查", "电话咨询"] },
        { title: "来自实战的建议", description: "根据我们亲自出钓的经验，为您推荐适合季节、钓点和目标鱼的装备与钓组。", tags: ["新手欢迎", "钓组咨询", "出钓准备"] },
      ],
    },
    trips: {
      eyebrow: "海钓出行",
      title: ["天气和潮水正好，", "就一起出海吧。"],
      description: "春、秋、冬三季，只要潮水和天气合适，我们就会拖着10人座钓鱼船出海。第一次参加也不用担心，从钓点到钓组都会耐心为您说明。",
      boatAlt: "停在大物渔具店前的10人座海钓船",
      boatLabel: "人座钓鱼船 · 不定期出钓",
      species: ["黑鲷", "带鱼", "短蛸", "墨鱼", "章鱼", "石斑鱼"],
      seasonLabel: "出钓季节",
      seasonValue: "春 · 秋 · 冬",
      guideLabel: "指导",
      guideValue: "从基础开始说明",
      bookingLabel: "预约",
      bookingValue: "请提前电话咨询",
      inquiry: "出钓咨询",
      news: "最新出钓动态",
    },
    marquee: "渔具用品 · 钓竿维修 · 海钓出行 · 钓组咨询 · 论山大物渔具店",
    social: {
      eyebrow: "关注与在线购买",
      title: "线上也能轻松找到我们。",
      description: "查看出钓动态、在线购买渔具，也可以直接给我们留言。",
      labels: ["Instagram", "Naver博客", "Naver智能商店", "Naver Band", "KakaoTalk"],
      handles: ["照片与动态", "出钓与店铺消息", "在线购买渔具", "加入钓友社区", "直接在线咨询"],
      openNewTab: "在新标签页中打开",
    },
    email: {
      eyebrow: "邮件咨询",
      title: ["有想了解的内容，", "也可以随时发邮件给我们。"],
      description: "无论是商品库存、钓竿维修还是出钓安排，都可以提前来信咨询。我们确认后会尽快回复。",
      topics: ["商品库存", "钓竿维修", "出钓咨询"],
      recipientLabel: "咨询邮件收件地址",
      cta: "同时向两个地址发送邮件",
      note: "点击按钮后将打开默认邮件应用，并自动填入两个收件地址。",
      subject: "[论山大物渔具店] 邮件咨询",
    },
    location: {
      eyebrow: "到店访问",
      title: ["需要渔具时，", "随时欢迎来店看看。"],
      address: "韩国忠清南道论山市江边路308番街48",
      mapTitle: "论山大物渔具店位置地图",
      storeName: "论山大物渔具店",
      description: "从论山市区前来很方便，店门前也有充足的停车空间。",
      mapCta: "在Naver地图中导航",
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
    hero: {
      eyebrow: "SINCE 2004 · NONSAN",
      title: ["釣りを楽しむなら、", "準備からしっかり。"],
      description: "論山最大規模の釣具店、大物釣具です。淡水から海釣りまで、必要な道具をゆっくり選んでいただけます。分からないことは何でも気軽にお尋ねください。",
      locationCta: "店舗の場所を見る",
      blogCta: "最近の釣行を見る",
      alt: "論山の大物釣具の店舗外観と釣行用ボート",
    },
    about: {
      eyebrow: "大物釣具について",
      title: ["私たちも釣りが好きだから、", "現場のことが分かります。"],
      description: "2004年から論山の釣り人のみなさまと歩んできました。道具を販売するだけでなく、私たち自身も海へ出て、季節ごとのポイントや仕掛けを確かめながら本当に必要な準備をお手伝いします。",
      stats: ["創業年", "20年以上の現場経験", "10人乗り釣行ボート", "一人ひとりに合う道具相談"],
      storeAlt: "広い駐車場を備えた論山大物釣具の外観",
      caption: "ゆっくり見て、気軽にご相談ください。",
      parking: "店舗前に広い駐車スペース",
    },
    services: {
      eyebrow: "商品とサービス",
      title: ["道具選びも修理も、", "一か所でお任せください。"],
      description: "何を選べばよいか迷っても大丈夫。釣り方や狙う魚に合わせて、分かりやすくご案内します。",
      items: [
        { title: "豊富な釣り用品", description: "淡水・海・ルアー・船釣りまで、ロッド、仕掛け、小物を幅広くそろえています。", tags: ["淡水釣り", "海釣り", "ルアー釣り"] },
        { title: "釣り竿の修理", description: "長年の経験を生かし、釣り竿や用品を丁寧に点検・修理します。リール修理は行っていません。", tags: ["ロッド修理", "用品点検", "電話相談"] },
        { title: "実釣経験からの提案", description: "実際の釣行経験をもとに、季節・ポイント・対象魚に合う道具と仕掛けをご提案します。", tags: ["初心者歓迎", "仕掛け相談", "釣行準備"] },
      ],
    },
    trips: {
      eyebrow: "海釣りツアー",
      title: ["海へ出るのにいい日は、", "一緒に出かけましょう。"],
      description: "春・秋・冬、潮と天候が合う日に10人乗りボートを海まで運んで出船します。初めての方にも、ポイントから仕掛けまで丁寧にご案内します。",
      boatAlt: "大物釣具の店舗前にある10人乗り海釣りボート",
      boatLabel: "人乗りボート · 季節ごとに出船",
      species: ["クロダイ", "タチウオ", "イイダコ", "コウイカ", "マダコ", "メバル"],
      seasonLabel: "シーズン",
      seasonValue: "春 · 秋 · 冬",
      guideLabel: "ガイド",
      guideValue: "基礎から丁寧に",
      bookingLabel: "予約",
      bookingValue: "事前にお電話ください",
      inquiry: "釣行のお問い合わせ",
      news: "最近の釣行情報",
    },
    marquee: "釣り用品 · ロッド修理 · 海釣りツアー · 仕掛け相談 · 論山 大物釣具",
    social: {
      eyebrow: "フォロー・オンライン購入",
      title: "オンラインでもお会いしましょう。",
      description: "釣行情報のチェック、釣り用品の購入、直接のお問い合わせはこちらから。",
      labels: ["Instagram", "Naverブログ", "Naverスマートストア", "Naver Band", "KakaoTalk"],
      handles: ["写真とお知らせ", "釣行・店舗情報", "釣り用品をオンライン購入", "釣り仲間のコミュニティ", "気軽にメッセージ"],
      openNewTab: "新しいタブで開く",
    },
    email: {
      eyebrow: "メールでのお問い合わせ",
      title: ["気になることは、", "メールでもお気軽にどうぞ。"],
      description: "商品の在庫、釣り竿の修理、釣行予定など、事前に確認したいことをお送りください。確認後にご返信します。",
      topics: ["商品の在庫", "釣り竿の修理", "釣行のお問い合わせ"],
      recipientLabel: "お問い合わせ先メールアドレス",
      cta: "2つのアドレスへメールする",
      note: "ボタンを押すとメールアプリが開き、2つの宛先が自動で入力されます。",
      subject: "[論山 大物釣具] メールでのお問い合わせ",
    },
    location: {
      eyebrow: "アクセス",
      title: ["道具が必要なときは、", "気軽にお立ち寄りください。"],
      address: "韓国 忠清南道 論山市 江辺路308番キル48",
      mapTitle: "論山大物釣具の所在地マップ",
      storeName: "論山 大物釣具",
      description: "論山市内からアクセスしやすく、店舗前には広い駐車スペースがあります。",
      mapCta: "Naverマップで経路を見る",
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
    hero: {
      eyebrow: "TỪ NĂM 2004 · NONSAN",
      title: ["Một buổi câu vui", "bắt đầu từ chuẩn bị tốt."],
      description: "Daemul là cửa hàng đồ câu cá lớn nhất Nonsan. Từ câu nước ngọt đến câu biển, bạn có thể thoải mái chọn đồ cần thiết và hỏi chúng tôi bất cứ điều gì.",
      locationCta: "Xem vị trí cửa hàng",
      blogCta: "Tin chuyến câu mới",
      alt: "Mặt tiền cửa hàng Daemul Fishing ở Nonsan và thuyền đi câu",
    },
    about: {
      eyebrow: "CÂU CHUYỆN DAEMUL",
      title: ["Chúng tôi cũng mê câu cá,", "nên hiểu rõ thực tế."],
      description: "Từ năm 2004, chúng tôi đã đồng hành cùng người câu cá ở Nonsan. Không chỉ bán dụng cụ, chúng tôi còn trực tiếp ra biển, theo dõi mùa, điểm câu và bộ thẻo để giúp bạn chuẩn bị đúng thứ mình cần.",
      stats: ["Năm cửa hàng mở cửa", "Hơn 20 năm kinh nghiệm", "Thuyền câu 10 chỗ", "Tư vấn theo nhu cầu"],
      storeAlt: "Cửa hàng Daemul Fishing ở Nonsan với bãi đỗ xe rộng",
      caption: "Cứ xem thoải mái và hỏi chúng tôi nhé.",
      parking: "Bãi đỗ xe rộng trước cửa hàng",
    },
    services: {
      eyebrow: "SẢN PHẨM & DỊCH VỤ",
      title: ["Chuẩn bị đồ và sửa cần", "ngay tại một nơi."],
      description: "Chưa biết chọn gì cũng không sao. Hãy cho chúng tôi biết cách câu và loại cá bạn muốn, chúng tôi sẽ hướng dẫn từng bước.",
      items: [
        { title: "Đầy đủ đồ câu cá", description: "Cần câu, bộ thẻo và phụ kiện cho câu nước ngọt, câu biển, lure và câu thuyền đều có sẵn.", tags: ["Câu nước ngọt", "Câu biển", "Câu lure"] },
        { title: "Sửa cần câu", description: "Chúng tôi kiểm tra và sửa cần câu, dụng cụ bằng kinh nghiệm nhiều năm. Hiện chưa nhận sửa máy câu.", tags: ["Sửa cần", "Kiểm tra đồ", "Gọi tư vấn"] },
        { title: "Tư vấn từ kinh nghiệm thật", description: "Dựa trên những chuyến câu thực tế, chúng tôi gợi ý dụng cụ và bộ thẻo phù hợp với mùa, điểm câu và loại cá.", tags: ["Chào đón người mới", "Tư vấn bộ thẻo", "Chuẩn bị chuyến câu"] },
      ],
    },
    trips: {
      eyebrow: "CHUYẾN CÂU BIỂN",
      title: ["Khi biển đẹp,", "hãy cùng nhau lên đường."],
      description: "Vào mùa xuân, thu và đông, khi thủy triều và thời tiết thuận lợi, chúng tôi kéo thuyền 10 chỗ ra biển. Người mới cũng có thể yên tâm vì chúng tôi hướng dẫn từ điểm câu đến cách lắp bộ thẻo.",
      boatAlt: "Thuyền câu biển 10 chỗ trước cửa hàng Daemul Fishing",
      boatLabel: "chỗ · chuyến câu theo mùa",
      species: ["Cá tráp đen", "Cá hố", "Bạch tuộc chân ngắn", "Mực nang", "Bạch tuộc", "Cá mú đá"],
      seasonLabel: "MÙA CÂU",
      seasonValue: "Xuân · Thu · Đông",
      guideLabel: "HƯỚNG DẪN",
      guideValue: "Chỉ dẫn từng bước",
      bookingLabel: "ĐẶT CHỖ",
      bookingValue: "Gọi trước khi đi",
      inquiry: "Hỏi chuyến câu",
      news: "Tin chuyến câu mới",
    },
    marquee: "Đồ câu cá · Sửa cần · Chuyến câu biển · Tư vấn bộ thẻo · Daemul Fishing Nonsan",
    social: {
      eyebrow: "THEO DÕI & MUA SẮM",
      title: "Gặp chúng tôi cả trên mạng.",
      description: "Xem tin chuyến câu, mua dụng cụ hoặc nhắn trực tiếp cho chúng tôi.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Ảnh và tin mới", "Tin chuyến câu và cửa hàng", "Mua đồ câu trực tuyến", "Cộng đồng người câu cá", "Nhắn tin trực tiếp"],
      openNewTab: "Mở trong tab mới",
    },
    email: {
      eyebrow: "LIÊN HỆ QUA EMAIL",
      title: ["Có điều muốn hỏi?", "Cứ gửi email cho chúng tôi."],
      description: "Bạn có thể hỏi trước về hàng còn trong kho, sửa cần câu hoặc lịch đi câu biển. Chúng tôi sẽ kiểm tra và phản hồi.",
      topics: ["Hàng còn trong kho", "Sửa cần câu", "Chuyến câu biển"],
      recipientLabel: "Địa chỉ nhận email",
      cta: "Gửi email đến cả hai địa chỉ",
      note: "Ứng dụng email mặc định sẽ mở với cả hai địa chỉ người nhận được điền sẵn.",
      subject: "[Daemul Fishing Nonsan] Yêu cầu tư vấn",
    },
    location: {
      eyebrow: "GHÉ CỬA HÀNG",
      title: ["Khi cần đồ câu,", "hãy ghé qua nhé."],
      address: "48 Gangbyeon-ro 308beon-gil, Nonsan, Chungcheongnam-do, Hàn Quốc",
      mapTitle: "Bản đồ vị trí Daemul Fishing ở Nonsan",
      storeName: "Daemul Fishing Nonsan",
      description: "Dễ đi từ trung tâm Nonsan và có chỗ đỗ xe rộng ngay trước cửa hàng.",
      mapCta: "Chỉ đường bằng Naver Map",
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
    hero: {
      eyebrow: "2004-YILDAN BERI · NONSAN",
      title: ["Yaxshi baliq ovi", "to‘g‘ri tayyorgarlikdan boshlanadi."],
      description: "Daemul — Nonsandagi eng yirik baliq ovlash anjomlari do‘koni. Chuchuk suvdan dengizgacha kerakli jihozlarni bemalol tanlang va savollaringizni bizdan so‘rang.",
      locationCta: "Do‘kon manzili",
      blogCta: "So‘nggi safarlar",
      alt: "Nonsandagi Daemul Fishing do‘koni va baliq ovlash qayig‘i",
    },
    about: {
      eyebrow: "BIZ HAQIMIZDA",
      title: ["Biz ham baliq ovini sevamiz,", "shuning uchun amaliyotni bilamiz."],
      description: "2004-yildan beri Nonsan baliqchilari bilan birgamiz. Biz faqat jihoz sotmaymiz — o‘zimiz ham dengizga chiqamiz, mavsum va joylarni kuzatamiz hamda sizga aynan kerakli tayyorgarlikni tavsiya qilamiz.",
      stats: ["Do‘kon ochilgan yil", "20 yildan ortiq tajriba", "10 kishilik qayiq", "Shaxsiy maslahat"],
      storeAlt: "Keng avtoturargohli Nonsan Daemul Fishing do‘koni",
      caption: "Bemalol ko‘ring va istagan savolingizni bering.",
      parking: "Do‘kon oldida keng avtoturargoh",
    },
    services: {
      eyebrow: "DO‘KON VA XIZMATLAR",
      title: ["Jihoz, maslahat va ta’mir", "bir joyning o‘zida."],
      description: "Nimani tanlashni bilmasangiz, xavotir olmang. Qayerda va qanday baliq ovlashingizni ayting, biz bosqichma-bosqich yordam beramiz.",
      items: [
        { title: "Barcha kerakli anjomlar", description: "Chuchuk suv, dengiz, lure va qayiqda baliq ovlash uchun qarmoq, montaj va aksessuarlar mavjud.", tags: ["Chuchuk suv", "Dengiz ovi", "Lure"] },
        { title: "Qarmoq tayoqchasini ta’mirlash", description: "Ko‘p yillik tajriba bilan qarmoq tayoqchalari va jihozlarni tekshirib, ta’mirlaymiz. G‘altak ta’miri mavjud emas.", tags: ["Tayoqcha ta’miri", "Jihoz tekshiruvi", "Telefon maslahati"] },
        { title: "Haqiqiy tajribaga asoslangan maslahat", description: "Mavsum, joy va baliq turiga mos jihoz hamda montajni o‘z safarlarimiz tajribasidan kelib chiqib tavsiya qilamiz.", tags: ["Yangi boshlovchilar", "Montaj maslahati", "Safarga tayyorgarlik"] },
      ],
    },
    trips: {
      eyebrow: "DENGIZDA BALIQ OVLASH",
      title: ["Ob-havo va suv mos bo‘lsa,", "birga dengizga chiqamiz."],
      description: "Bahor, kuz va qishda ob-havo hamda suv sharoiti yaxshi bo‘lsa, 10 kishilik qayiqni dengizga olib chiqamiz. Yangi boshlovchilarga joy tanlashdan montajgacha tushunarli yordam beramiz.",
      boatAlt: "Daemul Fishing oldidagi 10 kishilik dengiz qayig‘i",
      boatLabel: "kishilik qayiq · mavsumiy safarlar",
      species: ["Qora dorada", "Qilichbaliq", "Kichik ahtapot", "Karakatitsa", "Ahtapot", "Tosh baliq"],
      seasonLabel: "MAVSUM",
      seasonValue: "Bahor · Kuz · Qish",
      guideLabel: "YO‘RIQNOMA",
      guideValue: "Bosqichma-bosqich yordam",
      bookingLabel: "BAND QILISH",
      bookingValue: "Oldindan qo‘ng‘iroq qiling",
      inquiry: "Safar haqida so‘rash",
      news: "So‘nggi safarlar",
    },
    marquee: "Baliq ovlash anjomlari · Ta’mir · Dengiz safari · Montaj maslahati · Nonsan Daemul",
    social: {
      eyebrow: "KUZATING VA XARID QILING",
      title: "Bizni onlayn ham toping.",
      description: "Safar yangiliklarini ko‘ring, jihoz xarid qiling yoki bizga yozing.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Suratlar va yangiliklar", "Safar va do‘kon xabarlari", "Onlayn jihoz xaridi", "Baliqchilar hamjamiyati", "To‘g‘ridan-to‘g‘ri yozing"],
      openNewTab: "Yangi oynada ochish",
    },
    email: {
      eyebrow: "EMAIL ORQALI BOG‘LANISH",
      title: ["Savolingiz bormi?", "Bizga email yuboring."],
      description: "Mahsulot mavjudligi, qarmoq tayoqchasini ta’mirlash yoki dengiz safari haqida oldindan so‘rashingiz mumkin. Xabaringizni ko‘rib, javob beramiz.",
      topics: ["Mahsulot mavjudligi", "Tayoqcha ta’miri", "Dengiz safari"],
      recipientLabel: "Email qabul qiluvchilar",
      cta: "Ikkala manzilga email yuborish",
      note: "Email ilovangiz ochiladi va ikkala qabul qiluvchi manzili avtomatik kiritiladi.",
      subject: "[Nonsan Daemul Fishing] Murojaat",
    },
    location: {
      eyebrow: "DO‘KONGA KELING",
      title: ["Jihoz kerak bo‘lsa,", "bemalol kirib o‘ting."],
      address: "Janubiy Koreya, Chungcheongnam-do, Nonsan-si, Gangbyeon-ro 308beon-gil 48",
      mapTitle: "Nonsan Daemul Fishing joylashuv xaritasi",
      storeName: "Nonsan Daemul Fishing",
      description: "Nonsan markazidan kelish qulay, do‘kon oldida keng avtoturargoh bor.",
      mapCta: "Naver Map orqali yo‘l",
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
    hero: {
      eyebrow: "С 2004 ГОДА · НОНСАН",
      title: ["Хорошая рыбалка", "начинается с подготовки."],
      description: "Daemul — крупнейший магазин рыболовных снастей в Нонсане. Здесь есть всё для пресноводной и морской рыбалки, а мы всегда готовы ответить на ваши вопросы.",
      locationCta: "Найти магазин",
      blogCta: "Новости выездов",
      alt: "Магазин Daemul Fishing в Нонсане и лодка для рыбалки",
    },
    about: {
      eyebrow: "О НАС",
      title: ["Мы тоже любим рыбалку", "и знаем её на практике."],
      description: "С 2004 года мы помогаем рыболовам Нонсана. Мы не только продаём снасти, но и сами выходим в море, следим за сезонами и местами ловли и помогаем подобрать именно то, что нужно.",
      stats: ["Год открытия", "Более 20 лет опыта", "Лодка на 10 человек", "Личная консультация"],
      storeAlt: "Магазин Daemul Fishing в Нонсане с большой парковкой",
      caption: "Смотрите не спеша и смело задавайте вопросы.",
      parking: "Большая парковка перед магазином",
    },
    services: {
      eyebrow: "ТОВАРЫ И УСЛУГИ",
      title: ["Снасти, консультации и ремонт", "в одном месте."],
      description: "Не знаете, что выбрать? Расскажите, где и как вы ловите, и мы спокойно подберём подходящий комплект.",
      items: [
        { title: "Снасти для любой рыбалки", description: "Удилища, оснастки и аксессуары для пресной воды, моря, спиннинга и ловли с лодки.", tags: ["Пресная вода", "Морская рыбалка", "Спиннинг"] },
        { title: "Ремонт удилищ", description: "Тщательно проверяем и ремонтируем удилища и другие снасти, опираясь на многолетний опыт. Катушки не ремонтируем.", tags: ["Ремонт удилищ", "Проверка снастей", "Звонок заранее"] },
        { title: "Совет из реального опыта", description: "Подбираем снасти и оснастку под сезон, место и вид рыбы на основе собственных выездов.", tags: ["Новичкам рады", "Подбор оснастки", "Подготовка к выезду"] },
      ],
    },
    trips: {
      eyebrow: "МОРСКАЯ РЫБАЛКА",
      title: ["Когда море зовёт,", "отправимся вместе."],
      description: "Весной, осенью и зимой, когда подходят погода и прилив, мы перевозим 10-местную лодку к морю. Новичкам подробно объясняем всё — от места ловли до оснастки.",
      boatAlt: "Десятиместная морская лодка перед магазином Daemul Fishing",
      boatLabel: "мест · сезонные выезды",
      species: ["Чёрный морской лещ", "Рыба-сабля", "Малый осьминог", "Каракатица", "Осьминог", "Морской окунь"],
      seasonLabel: "СЕЗОН",
      seasonValue: "Весна · Осень · Зима",
      guideLabel: "ПОМОЩЬ",
      guideValue: "Пошаговое сопровождение",
      bookingLabel: "ЗАПИСЬ",
      bookingValue: "Позвоните заранее",
      inquiry: "Запись на выезд",
      news: "Последние выезды",
    },
    marquee: "Рыболовные снасти · Ремонт удилищ · Морские выезды · Подбор оснастки · Nonsan Daemul",
    social: {
      eyebrow: "СОЦСЕТИ И ПОКУПКИ",
      title: "Мы всегда на связи онлайн.",
      description: "Следите за выездами, покупайте снасти или напишите нам напрямую.",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["Фото и новости", "Выезды и новости магазина", "Снасти онлайн", "Сообщество рыболовов", "Написать напрямую"],
      openNewTab: "Открыть в новой вкладке",
    },
    email: {
      eyebrow: "СВЯЗАТЬСЯ ПО EMAIL",
      title: ["Остались вопросы?", "Напишите нам по электронной почте."],
      description: "Можно заранее уточнить наличие товара, ремонт удилища или расписание морских выездов. Мы прочитаем сообщение и ответим.",
      topics: ["Наличие товара", "Ремонт удилищ", "Морские выезды"],
      recipientLabel: "Адреса получателей",
      cta: "Написать на оба адреса",
      note: "Откроется почтовое приложение, а оба адреса получателей будут заполнены автоматически.",
      subject: "[Nonsan Daemul Fishing] Вопрос",
    },
    location: {
      eyebrow: "КАК НАС НАЙТИ",
      title: ["Нужны снасти?", "Заезжайте без стеснения."],
      address: "Южная Корея, Chungcheongnam-do, Nonsan-si, Gangbyeon-ro 308beon-gil 48",
      mapTitle: "Карта магазина Daemul Fishing в Нонсане",
      storeName: "Nonsan Daemul Fishing",
      description: "Удобный подъезд из центра Нонсана и большая парковка прямо перед магазином.",
      mapCta: "Маршрут в Naver Map",
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
    hero: {
      eyebrow: "ចាប់តាំងពីឆ្នាំ 2004 · NONSAN",
      title: ["ការនេសាទដ៏ល្អ", "ចាប់ផ្តើមពីការរៀបចំល្អ។"],
      description: "Daemul ជាហាងសម្ភារៈនេសាទធំបំផុតនៅ Nonsan។ មានសម្ភារៈសម្រាប់ទឹកសាប និងសមុទ្រ ហើយអ្នកអាចសួរយើងបានដោយសេរី។",
      locationCta: "មើលទីតាំងហាង",
      blogCta: "ព័ត៌មានដំណើរថ្មីៗ",
      alt: "ហាង Daemul Fishing នៅ Nonsan និងទូកនេសាទ",
    },
    about: {
      eyebrow: "អំពីយើង",
      title: ["យើងក៏ស្រឡាញ់ការនេសាទ", "ហើយយល់ពីបទពិសោធន៍ជាក់ស្តែង។"],
      description: "តាំងពីឆ្នាំ 2004 យើងបាននៅជាមួយអ្នកនេសាទនៅ Nonsan។ យើងមិនត្រឹមតែលក់សម្ភារៈទេ ប៉ុន្តែថែមទាំងចេញទៅសមុទ្រផ្ទាល់ ដើម្បីជួយជ្រើសរើសសម្ភារៈសមនឹងរដូវ និងកន្លែងនេសាទ។",
      stats: ["ឆ្នាំបើកហាង", "បទពិសោធន៍ជាង 20 ឆ្នាំ", "ទូក 10 កៅអី", "ការណែនាំផ្ទាល់ខ្លួន"],
      storeAlt: "ហាង Daemul Fishing នៅ Nonsan ដែលមានចំណតធំទូលាយ",
      caption: "សូមមើលដោយស្រួល ហើយសួរយើងបានគ្រប់ពេល។",
      parking: "ចំណតធំទូលាយនៅមុខហាង",
    },
    services: {
      eyebrow: "សម្ភារៈ និងសេវាកម្ម",
      title: ["សម្ភារៈ ការណែនាំ និងជួសជុល", "មាននៅកន្លែងតែមួយ។"],
      description: "មិនដឹងថាត្រូវជ្រើសអ្វីទេ? ប្រាប់យើងពីរបៀបនេសាទរបស់អ្នក ហើយយើងនឹងណែនាំម្តងមួយជំហាន។",
      items: [
        { title: "សម្ភារៈនេសាទគ្រប់ប្រភេទ", description: "មានដងសន្ទូច ខ្សែ និងគ្រឿងបន្លាស់សម្រាប់ទឹកសាប សមុទ្រ lure និងនេសាទតាមទូក។", tags: ["ទឹកសាប", "សមុទ្រ", "Lure"] },
        { title: "ជួសជុលដងសន្ទូច", description: "យើងពិនិត្យ និងជួសជុលដងសន្ទូចដោយបទពិសោធន៍ជាច្រើនឆ្នាំ។ មិនមានសេវាជួសជុលរ៉ឺលទេ។", tags: ["ជួសជុលដង", "ពិនិត្យសម្ភារៈ", "សួរតាមទូរស័ព្ទ"] },
        { title: "ការណែនាំពីបទពិសោធន៍", description: "យើងណែនាំសម្ភារៈ និងខ្សែសមនឹងរដូវ ទីតាំង និងប្រភេទត្រី តាមបទពិសោធន៍ពិត។", tags: ["ស្វាគមន៍អ្នកថ្មី", "ណែនាំខ្សែ", "រៀបចំដំណើរ"] },
      ],
    },
    trips: {
      eyebrow: "ដំណើរនេសាទសមុទ្រ",
      title: ["ពេលអាកាសធាតុល្អ", "យើងទៅសមុទ្រជាមួយគ្នា។"],
      description: "នៅរដូវផ្ការីក ស្លឹកឈើជ្រុះ និងរងា ពេលជំនោរ និងអាកាសធាតុល្អ យើងនាំទូក 10 កៅអីទៅសមុទ្រ។ អ្នកចាប់ផ្តើមក៏ទទួលបានការណែនាំពីទីតាំងដល់ការរៀបចំខ្សែ។",
      boatAlt: "ទូកនេសាទសមុទ្រ 10 កៅអីនៅមុខហាង Daemul Fishing",
      boatLabel: "កៅអី · ដំណើរតាមរដូវ",
      species: ["ត្រីប៉ូហ្គីខ្មៅ", "ត្រីដាវ", "មឹកជើងខ្លី", "មឹកក្រឡា", "មឹកយក្ស", "ត្រីថ្ម"],
      seasonLabel: "រដូវ",
      seasonValue: "ផ្ការីក · ស្លឹកឈើជ្រុះ · រងា",
      guideLabel: "ការណែនាំ",
      guideValue: "ជួយម្តងមួយជំហាន",
      bookingLabel: "កក់",
      bookingValue: "សូមទូរស័ព្ទជាមុន",
      inquiry: "សួរអំពីដំណើរ",
      news: "ព័ត៌មានដំណើរថ្មីៗ",
    },
    marquee: "សម្ភារៈនេសាទ · ជួសជុលដង · ដំណើរសមុទ្រ · ការណែនាំខ្សែ · Nonsan Daemul",
    social: {
      eyebrow: "តាមដាន និងទិញ",
      title: "ជួបយើងតាមអនឡាញផងដែរ។",
      description: "មើលព័ត៌មានដំណើរ ទិញសម្ភារៈ ឬផ្ញើសារមកយើងដោយផ្ទាល់។",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["រូបថត និងព័ត៌មាន", "ដំណើរ និងព័ត៌មានហាង", "ទិញសម្ភារៈអនឡាញ", "សហគមន៍អ្នកនេសាទ", "ផ្ញើសារផ្ទាល់"],
      openNewTab: "បើកក្នុងផ្ទាំងថ្មី",
    },
    email: {
      eyebrow: "សាកសួរតាមអ៊ីមែល",
      title: ["មានសំណួរមែនទេ?", "សូមផ្ញើអ៊ីមែលមកយើង។"],
      description: "អ្នកអាចសួរអំពីស្តុកសម្ភារៈ ការជួសជុលដងសន្ទូច ឬកាលវិភាគដំណើរនេសាទសមុទ្រ។ យើងនឹងពិនិត្យ ហើយឆ្លើយតប។",
      topics: ["ស្តុកសម្ភារៈ", "ជួសជុលដង", "ដំណើរសមុទ្រ"],
      recipientLabel: "អាសយដ្ឋានទទួលអ៊ីមែល",
      cta: "ផ្ញើទៅអាសយដ្ឋានទាំងពីរ",
      note: "កម្មវិធីអ៊ីមែលនឹងបើក ហើយបំពេញអាសយដ្ឋានអ្នកទទួលទាំងពីរដោយស្វ័យប្រវត្តិ។",
      subject: "[Nonsan Daemul Fishing] សំណួរ",
    },
    location: {
      eyebrow: "មកកាន់ហាង",
      title: ["ត្រូវការសម្ភារៈ?", "សូមមកហាងដោយសេរី។"],
      address: "48 Gangbyeon-ro 308beon-gil, Nonsan, Chungcheongnam-do, កូរ៉េខាងត្បូង",
      mapTitle: "ផែនទីទីតាំង Daemul Fishing នៅ Nonsan",
      storeName: "Nonsan Daemul Fishing",
      description: "ងាយស្រួលមកពីកណ្តាល Nonsan ហើយមានចំណតធំទូលាយនៅមុខហាង។",
      mapCta: "មើលផ្លូវក្នុង Naver Map",
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
    hero: {
      eyebrow: "2004 မှစတင် · NONSAN",
      title: ["ပျော်စရာငါးမျှားခြင်းက", "ကောင်းမွန်တဲ့ပြင်ဆင်မှုကနေစတင်ပါတယ်။"],
      description: "Daemul သည် Nonsan ရှိ အကြီးဆုံးငါးမျှားပစ္စည်းဆိုင် ဖြစ်ပါတယ်။ ရေချိုနဲ့ ပင်လယ်ငါးမျှားအတွက် လိုအပ်သမျှကို အေးအေးဆေးဆေးရွေးချယ်ပြီး မသိတာရှိရင် မေးနိုင်ပါတယ်။",
      locationCta: "ဆိုင်တည်နေရာကြည့်ရန်",
      blogCta: "နောက်ဆုံးခရီးသတင်း",
      alt: "Nonsan Daemul Fishing ဆိုင်ရှေ့နှင့် ငါးမျှားလှေ",
    },
    about: {
      eyebrow: "ကျွန်ုပ်တို့အကြောင်း",
      title: ["ကျွန်ုပ်တို့လည်း ငါးမျှားရတာကြိုက်လို့", "လက်တွေ့ကို ကောင်းကောင်းသိပါတယ်။"],
      description: "2004 ခုနှစ်ကတည်းက Nonsan ငါးမျှားသူတွေနဲ့အတူ ရှိလာခဲ့ပါတယ်။ ပစ္စည်းရောင်းရုံမက ကိုယ်တိုင်ပင်လယ်ထွက်ပြီး ရာသီ၊ နေရာနဲ့ ကြိုးဆင်ပုံအလိုက် တကယ်လိုအပ်တာကို ပြင်ဆင်ပေးပါတယ်။",
      stats: ["ဆိုင်ဖွင့်သည့်နှစ်", "နှစ် 20 ကျော်အတွေ့အကြုံ", "လူ 10 စီးလှေ", "တစ်ဦးချင်းပစ္စည်းအကြံပေး"],
      storeAlt: "ကားရပ်ရန်နေရာကျယ်သော Nonsan Daemul Fishing ဆိုင်",
      caption: "အေးအေးဆေးဆေးကြည့်ပြီး လွတ်လွတ်လပ်လပ်မေးပါ။",
      parking: "ဆိုင်ရှေ့ကားရပ်ရန်နေရာကျယ်",
    },
    services: {
      eyebrow: "ပစ္စည်းနှင့်ဝန်ဆောင်မှု",
      title: ["ပစ္စည်း၊ အကြံပေးမှုနဲ့ ပြုပြင်မှု", "တစ်နေရာတည်းမှာရနိုင်ပါတယ်။"],
      description: "ဘာရွေးရမလဲ မသိလည်း စိတ်မပူပါနဲ့။ ဘယ်လိုငါးမျှားမလဲ ပြောပြရင် တစ်ဆင့်ချင်းကူညီပေးပါမယ်။",
      items: [
        { title: "ငါးမျှားပစ္စည်းစုံလင်", description: "ရေချို၊ ပင်လယ်၊ lure နဲ့ လှေပေါ်ငါးမျှားခြင်းအတွက် တံ၊ ကြိုးဆင်ပစ္စည်းနဲ့ အသုံးအဆောင်တွေ စုံလင်ပါတယ်။", tags: ["ရေချိုငါးမျှား", "ပင်လယ်ငါးမျှား", "Lure"] },
        { title: "ငါးမျှားတံပြုပြင်ခြင်း", description: "နှစ်များစွာအတွေ့အကြုံနဲ့ တံနဲ့ပစ္စည်းတွေကို သေချာစစ်ဆေးပြုပြင်ပေးပါတယ်။ Reel ပြုပြင်မှုမရှိပါ။", tags: ["တံပြုပြင်", "ပစ္စည်းစစ်ဆေး", "ဖုန်းဖြင့်မေးရန်"] },
        { title: "လက်တွေ့အတွေ့အကြုံမှ အကြံပေးမှု", description: "ကိုယ်တိုင်သွားခဲ့တဲ့ခရီးအတွေ့အကြုံအရ ရာသီ၊ နေရာနဲ့ ငါးအမျိုးအစားနဲ့ကိုက်ညီတဲ့ ပစ္စည်းကို အကြံပေးပါတယ်။", tags: ["စတင်သူကြိုဆို", "ကြိုးဆင်အကြံပေး", "ခရီးပြင်ဆင်မှု"] },
      ],
    },
    trips: {
      eyebrow: "ပင်လယ်ငါးမျှားခရီး",
      title: ["ပင်လယ်ထွက်လို့ကောင်းတဲ့နေ့ဆို", "အတူတူသွားကြမယ်။"],
      description: "နွေဦး၊ ဆောင်းဦးနဲ့ ဆောင်းရာသီမှာ ရေတက်ရေကျနဲ့ ရာသီဥတုကောင်းရင် လူ 10 စီးလှေကို ပင်လယ်သို့ယူသွားပါတယ်။ ပထမဆုံးလာသူတွေကိုလည်း နေရာကနေ ကြိုးဆင်ပုံအထိ သေချာရှင်းပြပေးပါတယ်။",
      boatAlt: "Daemul Fishing ဆိုင်ရှေ့ရှိ လူ 10 စီးပင်လယ်ငါးမျှားလှေ",
      boatLabel: "စီးလှေ · ရာသီအလိုက်ခရီး",
      species: ["Black porgy", "Hairtail", "Webfoot octopus", "Cuttlefish", "Octopus", "Rockfish"],
      seasonLabel: "ရာသီ",
      seasonValue: "နွေဦး · ဆောင်းဦး · ဆောင်း",
      guideLabel: "လမ်းညွှန်",
      guideValue: "တစ်ဆင့်ချင်းကူညီမှု",
      bookingLabel: "ကြိုတင်မှာယူ",
      bookingValue: "ဖုန်းကြိုခေါ်ပါ",
      inquiry: "ခရီးမေးမြန်းရန်",
      news: "နောက်ဆုံးခရီးသတင်း",
    },
    marquee: "ငါးမျှားပစ္စည်း · တံပြုပြင် · ပင်လယ်ခရီး · ကြိုးဆင်အကြံပေး · Nonsan Daemul",
    social: {
      eyebrow: "သတင်းနှင့် အွန်လိုင်းဝယ်ယူမှု",
      title: "အွန်လိုင်းမှာလည်း တွေ့နိုင်ပါတယ်။",
      description: "ခရီးသတင်းကြည့်ရန်၊ ပစ္စည်းဝယ်ရန် သို့မဟုတ် တိုက်ရိုက်စာပို့ရန် ဒီနေရာကနေဝင်ပါ။",
      labels: ["Instagram", "Naver Blog", "Naver Smart Store", "Naver Band", "KakaoTalk"],
      handles: ["ဓာတ်ပုံနှင့်သတင်း", "ခရီးနှင့်ဆိုင်သတင်း", "အွန်လိုင်းပစ္စည်းဝယ်ရန်", "ငါးမျှားသူများအဖွဲ့", "တိုက်ရိုက်စာပို့ရန်"],
      openNewTab: "တက်ဘ်အသစ်တွင်ဖွင့်ရန်",
    },
    email: {
      eyebrow: "အီးမေးလ်ဖြင့်မေးမြန်းရန်",
      title: ["မေးစရာရှိပါသလား?", "အီးမေးလ်ပို့လို့လည်း ရပါတယ်။"],
      description: "ပစ္စည်းလက်ကျန်၊ ငါးမျှားတံပြုပြင်ခြင်း သို့မဟုတ် ပင်လယ်ခရီးအစီအစဉ်ကို ကြိုတင်မေးမြန်းနိုင်ပါတယ်။ စာကိုစစ်ဆေးပြီး ပြန်လည်ဖြေကြားပေးပါမယ်။",
      topics: ["ပစ္စည်းလက်ကျန်", "တံပြုပြင်ခြင်း", "ပင်လယ်ခရီး"],
      recipientLabel: "အီးမေးလ်လက်ခံမည့်လိပ်စာများ",
      cta: "လိပ်စာနှစ်ခုလုံးသို့ ပို့ရန်",
      note: "မူလအီးမေးလ်အက်ပ်ပွင့်လာပြီး လက်ခံသူလိပ်စာနှစ်ခုလုံး အလိုအလျောက်ဖြည့်ပေးပါမယ်။",
      subject: "[Nonsan Daemul Fishing] မေးမြန်းချက်",
    },
    location: {
      eyebrow: "ဆိုင်သို့လာရန်",
      title: ["ပစ္စည်းလိုတဲ့အခါ", "အေးအေးဆေးဆေးဝင်လာပါ။"],
      address: "တောင်ကိုရီးယား၊ Chungcheongnam-do, Nonsan-si, Gangbyeon-ro 308beon-gil 48",
      mapTitle: "Nonsan Daemul Fishing တည်နေရာမြေပုံ",
      storeName: "Nonsan Daemul Fishing",
      description: "Nonsan မြို့လယ်ကနေလာရတာလွယ်ပြီး ဆိုင်ရှေ့မှာ ကားရပ်ရန်နေရာကျယ်ပါတယ်။",
      mapCta: "Naver Map ဖြင့်လမ်းကြည့်ရန်",
      blogCta: "Naver Blog ကြည့်ရန်",
    },
    footer: { map: "Naver Map", call: "ဖုန်းခေါ်ရန်" },
    floatingCall: "ဖုန်းခေါ်ရန်",
    language: { button: "ဘာသာစကားပြောင်းရန်", menuLabel: "ဘာသာစကားရွေးပါ" },
    mainServicesLabel: "Daemul Fishing ဝန်ဆောင်မှုများ",
  },
};
