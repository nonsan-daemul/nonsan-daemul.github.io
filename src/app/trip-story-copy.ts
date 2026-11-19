import type { Locale } from "./translations";

type TripStory = {
  title: string;
  intro: string;
  play: string;
  pause: string;
  previous: string;
  next: string;
  steps: readonly { title: string; body: string }[];
};

export const tripStoryCopy = {
  ko: {
    title: "대물낚시와 떠나는 하루",
    intro: "서해나 남해로 출조하는 날엔 논산 매장에서 모여 함께 출발해요.",
    play: "자동 재생", pause: "일시 정지", previous: "이전 장면", next: "다음 장면",
    steps: [
      { title: "매장에서 출발", body: "낚싯대와 짐을 싣고, 10인승 출조 보트가 실린 트레일러를 12인승 스타렉스에 연결해요." },
      { title: "항구에서 배에 올라요", body: "서해나 남해의 항구에 도착하면 보트를 물에 띄우고 함께 배에 올라요." },
      { title: "물고기를 낚아요", body: "찌가 물속으로 쏙 들어가요. 낚싯대를 세우고 릴을 감자 은빛 감성돔이 모습을 드러내요." },
      { title: "배 위에서 나누는 회", body: "고기가 잡히면 배 위에서 바로 회를 떠서 함께 맛보기도 해요." },
      { title: "노을을 보며 논산으로", body: "낚시를 마치면 보트를 트레일러에 싣고 스타렉스로 매장에 돌아와요." },
      { title: "잡은 고기를 챙겨 가요", body: "매장에서 잡은 고기를 아이스박스에 담아 드리거나, 바로 드실 수 있게 회를 떠 드려요." },
    ],
  },
  en: {
    title: "A day on the water with Daemul",
    intro: "On days we fish off the west or south coast, we meet at our Nonsan shop and set off together.",
    play: "Play slideshow", pause: "Pause slideshow", previous: "Previous scene", next: "Next scene",
    steps: [
      { title: "Pack up at the shop", body: "We load our rods and bags into the 12-seat Starex van and hitch up the trailer carrying our 10-seat fishing boat." },
      { title: "Launch at the harbour", body: "At a harbour on the west or south coast, we launch the boat and climb aboard." },
      { title: "Reel in a fish", body: "Our float slips underwater. We lift the rod and wind in the line until a silvery black porgy breaks the surface." },
      { title: "Share sashimi on board", body: "If we land a fish, we sometimes slice it on board and share the fresh sashimi." },
      { title: "Head back at sunset", body: "At the end of the trip, we load the boat onto its trailer and take the Starex back to Nonsan." },
      { title: "Take home the catch", body: "Back at the shop, we pack the catch in a cooler or slice it into sashimi for the anglers to take home." },
    ],
  },
  zh: {
    title: "跟大物渔具出海的一天",
    intro: "去西海岸或南海岸钓鱼那天，大家先在论山的店里集合，再一起出发。",
    play: "自动播放", pause: "暂停播放", previous: "上一幕", next: "下一幕",
    steps: [
      { title: "在店里装车", body: "把鱼竿和行李装进12座现代 Starex，再接上载着10座钓船的拖车。" },
      { title: "到港口上船", body: "到了西海岸或南海岸的港口，我们把钓船放下水，大家一起登船。" },
      { title: "钓鱼", body: "浮漂一下沉入水里。我们抬竿收线，一条泛着银光的黑鲷露出了水面。" },
      { title: "在船上尝尝生鱼片", body: "如果钓到了鱼，有时会在船上现切成生鱼片，大家一起尝鲜。" },
      { title: "迎着晚霞回论山", body: "收竿后把钓船拖回岸上，装上拖车，坐 Starex 回到店里。" },
      { title: "带走今天的收获", body: "回店后，我们帮钓友把鱼装进保冷箱，也可以现切成生鱼片，方便带回家。" },
    ],
  },
  ja: {
    title: "大物釣具と海へ出る一日",
    intro: "西海岸や南海岸へ釣りに出る日は、論山の店に集まって一緒に出発します。",
    play: "自動再生", pause: "一時停止", previous: "前の場面", next: "次の場面",
    steps: [
      { title: "店で出発の準備", body: "12人乗りのスタレックスに竿と荷物を積み、10人乗りの釣り船を載せたトレーラーをつなぎます。" },
      { title: "港で船に乗る", body: "西海岸か南海岸の港に着いたら、船を水に浮かべてみんなで乗り込みます。" },
      { title: "魚を釣る", body: "ウキがすっと沈みます。竿を立ててリールを巻くと、銀色に光るクロダイが水面に姿を見せました。" },
      { title: "船の上で刺身を囲む", body: "魚が釣れた日は、その場で刺身にしてみんなで味わうこともあります。" },
      { title: "夕暮れの帰り道", body: "竿をしまい、船をトレーラーに載せ、スタレックスで論山の店に戻ります。" },
      { title: "釣れた魚を持ち帰る", body: "店で魚をクーラーボックスに詰めたり、刺身に切り分けたりして、釣りに来た方にお渡しします。" },
    ],
  },
  vi: {
    title: "Một ngày đi câu cùng Daemul",
    intro: "Những hôm đi câu ở bờ biển phía tây hoặc phía nam, chúng tôi hẹn nhau tại cửa hàng ở Nonsan rồi cùng lên đường.",
    play: "Tự động phát", pause: "Tạm dừng", previous: "Cảnh trước", next: "Cảnh sau",
    steps: [
      { title: "Chuẩn bị tại cửa hàng", body: "Chúng tôi xếp cần câu và hành lý lên xe Starex 12 chỗ rồi móc rơ-moóc chở thuyền câu 10 chỗ vào xe." },
      { title: "Xuống thuyền ở cảng", body: "Đến một cảng ở bờ biển phía tây hoặc phía nam, chúng tôi hạ thuyền xuống nước rồi cùng lên thuyền." },
      { title: "Câu cá", body: "Phao bỗng chìm xuống. Chúng tôi nâng cần, quay máy thu dây và thấy một con cá tráp đen ánh bạc nổi lên mặt nước." },
      { title: "Ăn sashimi trên thuyền", body: "Nếu câu được cá, đôi khi chúng tôi thái cá ngay trên thuyền để mọi người cùng ăn sashimi." },
      { title: "Trở về lúc hoàng hôn", body: "Kết thúc buổi câu, chúng tôi đưa thuyền lên rơ-moóc rồi cùng về Nonsan bằng xe Starex." },
      { title: "Mang cá về nhà", body: "Về đến cửa hàng, chúng tôi cho cá câu được vào thùng giữ lạnh hoặc thái sashimi để bạn mang về." },
    ],
  },
  uz: {
    title: "Daemul bilan dengizda bir kun",
    intro: "G‘arbiy yoki janubiy sohilda baliq ovlaydigan kunlari Nonsandagi do‘konimizda yig‘ilib, birga yo‘lga chiqamiz.",
    play: "Avtomatik namoyish", pause: "Pauza", previous: "Oldingi lavha", next: "Keyingi lavha",
    steps: [
      { title: "Do‘konda yo‘lga tayyorlanamiz", body: "Qarmoqlar va yuklarni 12 o‘rinli Starex mashinasiga joylaymiz. Unga 10 o‘rinli qayiq ortilgan tirkamani ulaymiz." },
      { title: "Bandargohda qayiqqa chiqamiz", body: "G‘arbiy yoki janubiy sohildagi bandargohga yetib, qayiqni suvga tushiramiz va unga chiqamiz." },
      { title: "Baliq tutamiz", body: "Qalqovich suvga botdi. Qarmoqni ko‘tarib, g‘altakni aylantirdik. Suv yuzida kumushdek yaltiragan qora dorada ko‘rindi." },
      { title: "Qayiqda sashimi tatib ko‘ramiz", body: "Baliq tutilsa, ba’zan uni qayiqning o‘zida yupqa tilimlab, sashimini birga tatib ko‘ramiz." },
      { title: "Quyosh botganda qaytamiz", body: "Ov tugagach, qayiqni tirkamaga ortib, Starexda Nonsandagi do‘konga qaytamiz." },
      { title: "Baliqni uyga olib ketamiz", body: "Do‘konda tutilgan baliqni muzli qutiga joylab yoki sashimi uchun yupqa tilimlab, baliqchilarga beramiz." },
    ],
  },
  ru: {
    title: "День на рыбалке с Daemul",
    intro: "В дни рыбалки на западном или южном побережье мы собираемся у магазина в Нонсане и вместе едем к морю.",
    play: "Начать показ", pause: "Приостановить показ", previous: "Предыдущая сцена", next: "Следующая сцена",
    steps: [
      { title: "Собираемся у магазина", body: "Кладём удочки и вещи в 12-местный микроавтобус Starex. К нему крепим прицеп с 10-местной рыболовной лодкой." },
      { title: "Садимся в лодку", body: "Приезжаем в порт на западном или южном побережье, спускаем лодку на воду и поднимаемся на борт." },
      { title: "Ловим рыбу", body: "Поплавок уходит под воду. Мы поднимаем удилище, наматываем леску, и на поверхности показывается серебристый бок чёрного морского леща." },
      { title: "Пробуем сашими на борту", body: "Когда есть улов, иногда прямо в лодке нарезаем свежую рыбу для сашими и угощаем друг друга." },
      { title: "Возвращаемся на закате", body: "Убираем снасти, ставим лодку на прицеп и едем на Starex обратно в Нонсан." },
      { title: "Забираем улов домой", body: "В магазине помогаем уложить улов в ящик со льдом или нарезаем рыбу для сашими, чтобы её можно было забрать домой." },
    ],
  },
  km: {
    title: "មួយថ្ងៃទៅស្ទូចត្រីជាមួយ Daemul",
    intro: "ថ្ងៃដែលយើងទៅស្ទូចត្រីនៅឆ្នេរខាងលិច ឬខាងត្បូង យើងជួបគ្នានៅហាងក្នុងក្រុង Nonsan រួចចេញដំណើរជាមួយគ្នា។",
    play: "ចាក់ដោយស្វ័យប្រវត្តិ", pause: "ផ្អាក", previous: "ឈុតមុន", next: "ឈុតបន្ទាប់",
    steps: [
      { title: "រៀបចំចេញពីហាង", body: "យើងដាក់ដងសន្ទូច និងអីវ៉ាន់ក្នុងឡាន Starex ១២ កៅអី រួចភ្ជាប់រ៉ឺម៉កដែលដឹកទូកស្ទូចត្រី ១០ កៅអី។" },
      { title: "ឡើងទូកនៅកំពង់ផែ", body: "ពេលទៅដល់កំពង់ផែនៅឆ្នេរខាងលិច ឬខាងត្បូង យើងទម្លាក់ទូកចូលទឹក រួចនាំគ្នាឡើងទូក។" },
      { title: "ស្ទូចត្រី", body: "ពោងសន្ទូចលិចចូលទឹកភ្លាម។ យើងលើកដងសន្ទូចឡើង ហើយបង្វិលរ៉ឺលទាញខ្សែមកវិញ។ ត្រីប៉ូហ្គីខ្មៅរលោងដូចប្រាក់ផុសឡើងលើផ្ទៃទឹក។" },
      { title: "ចែកគ្នាញ៉ាំសាស៊ីមីលើទូក", body: "បើស្ទូចបានត្រី ពេលខ្លះយើងហាន់ត្រីស្រស់ជាបន្ទះស្តើងៗ ហើយញ៉ាំសាស៊ីមីជាមួយគ្នាលើទូក។" },
      { title: "ត្រឡប់ពេលថ្ងៃលិច", body: "ពេលស្ទូចចប់ យើងលើកទូកដាក់លើរ៉ឺម៉ក រួចជិះឡាន Starex ត្រឡប់មកហាងនៅ Nonsan វិញ។" },
      { title: "យកត្រីទៅផ្ទះ", body: "នៅហាង យើងជួយដាក់ត្រីដែលស្ទូចបានក្នុងធុងទឹកកក ឬហាន់ជាសាស៊ីមីឱ្យអ្នកស្ទូចយកទៅផ្ទះ។" },
    ],
  },
  my: {
    title: "Daemul နဲ့အတူ ငါးမျှားထွက်တဲ့ တစ်နေ့တာ",
    intro: "အနောက်ဘက် ဒါမှမဟုတ် တောင်ဘက်ကမ်းရိုးတန်းကို ငါးမျှားထွက်တဲ့နေ့တွေမှာ Nonsan က ဆိုင်မှာဆုံပြီး အတူတူ ထွက်ကြပါတယ်။",
    play: "အလိုအလျောက် ပြရန်", pause: "ခဏရပ်ရန်", previous: "အရင်မြင်ကွင်း", next: "နောက်မြင်ကွင်း",
    steps: [
      { title: "ဆိုင်မှာ ပစ္စည်းတင်ကြမယ်", body: "၁၂ ယောက်စီး Starex ကားပေါ်မှာ ငါးမျှားတံနဲ့ အထုပ်တွေ တင်ပြီး ၁၀ ယောက်စီး ငါးမျှားလှေ တင်ထားတဲ့ နောက်တွဲကို ချိတ်ပါတယ်။" },
      { title: "ဆိပ်ကမ်းမှာ လှေပေါ်တက်မယ်", body: "အနောက်ဘက် ဒါမှမဟုတ် တောင်ဘက်ကမ်းရိုးတန်းက ဆိပ်ကမ်းကိုရောက်ရင် လှေကို ရေထဲချပြီး အတူတက်ကြပါတယ်။" },
      { title: "ငါးမျှားမယ်", body: "ဖော့လေးက ရေထဲ နစ်သွားတယ်။ ငါးမျှားတံကို မတ်မတ်ထောင်ပြီး ကြိုးကို ရစ်ယူလိုက်တော့ ငွေရောင်လက်နေတဲ့ Black porgy ငါးက ရေမျက်နှာပြင်ပေါ် ပေါ်လာတယ်။" },
      { title: "လှေပေါ်မှာ ဆာရှိမိ စားကြမယ်", body: "ငါးရရင် တစ်ခါတလေ လှေပေါ်မှာပဲ ပါးပါးလှီးပြီး ဆာရှိမိကို အတူ ဝေစားကြပါတယ်။" },
      { title: "နေဝင်ချိန်မှာ ပြန်ကြမယ်", body: "ငါးမျှားပြီးရင် လှေကို နောက်တွဲပေါ်တင်ပြီး Starex ကားနဲ့ Nonsan က ဆိုင်ကို ပြန်ကြပါတယ်။" },
      { title: "ရတဲ့ငါးကို အိမ်ယူသွားမယ်", body: "ဆိုင်ရောက်ရင် မျှားလို့ရတဲ့ငါးကို ရေခဲပုံးထဲ ထည့်ပေးပါတယ်။ ဆာရှိမိ ယူသွားချင်သူတွေအတွက်လည်း ပါးပါးလှီးပေးပါတယ်။" },
    ],
  },
} satisfies Record<Locale, TripStory>;
