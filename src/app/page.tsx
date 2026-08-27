import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineShoppingBag, HiOutlineUserGroup } from "react-icons/hi2";
import { SiNaver } from "react-icons/si";

const mapUrl = "https://naver.me/xcgRV1Uf";
const blogUrl = "https://blog.naver.com/daemul4100";
const address = "충청남도 논산시 강변로308번길 48";

const socialLinks = [
  {
    label: "Instagram",
    handle: "@nonsan_daemul",
    href: "https://www.instagram.com/nonsan_daemul",
    icon: FaInstagram,
    iconClass: "bg-[linear-gradient(135deg,#6f39b8,#dd2a7b_52%,#feda75)] text-white",
  },
  {
    label: "네이버 블로그",
    handle: "출조 · 매장 소식",
    href: blogUrl,
    icon: SiNaver,
    iconClass: "bg-[#03c75a] text-white",
  },
  {
    label: "네이버 스마트스토어",
    handle: "온라인 구매",
    href: "https://smartstore.naver.com/nonsandaemul",
    icon: HiOutlineShoppingBag,
    iconClass: "bg-[#00c73c] text-white",
  },
  {
    label: "네이버 밴드",
    handle: "대물낚시 커뮤니티",
    href: "https://www.band.us/band/68307995/post",
    icon: HiOutlineUserGroup,
    iconClass: "bg-[#56b746] text-white",
  },
];

const services = [
  {
    number: "01",
    title: "낚시용품 백화점",
    description:
      "민물·바다·루어·선상낚시까지, 장르와 대상어에 맞는 낚싯대와 채비, 소품을 폭넓게 갖추고 있습니다.",
    tags: ["민물낚시", "바다낚시", "루어낚시"],
  },
  {
    number: "02",
    title: "낚싯대 수리",
    description:
      "수십 년간 쌓아 온 경험으로 낚싯대와 낚시용품을 꼼꼼하게 점검하고 수리합니다. 릴 수리는 제외됩니다.",
    tags: ["낚싯대 수리", "용품 점검", "전화 문의"],
  },
  {
    number: "03",
    title: "현장형 상담",
    description:
      "직접 출조하며 얻은 경험을 바탕으로 계절과 포인트, 대상어에 알맞은 장비와 채비를 안내해 드립니다.",
    tags: ["초보자 환영", "채비 상담", "출조 준비"],
  },
];

const species = ["감성돔", "갈치", "쭈꾸미", "갑오징어", "문어", "우럭"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportingGoodsStore", "LocalBusiness"],
  name: "논산 대물낚시",
  alternateName: ["대물낚시", "논산 낚시점", "논산낚시점"],
  url: "https://nonsan-daemul.github.io/",
  image: "https://nonsan-daemul.github.io/images/store-front.webp",
  description:
    "2004년부터 운영해 온 논산시 최대 규모 낚시점. 낚시용품 판매, 낚싯대 수리, 계절별 바다낚시 출조를 제공합니다.",
  slogan: "논산시 최대 규모 낚시점, Since 2004",
  foundingDate: "2004",
  telephone: "+82-41-736-4100",
  priceRange: "₩₩",
  address: {
    "@type": "PostalAddress",
    streetAddress: "강변로308번길 48",
    addressLocality: "논산시",
    addressRegion: "충청남도",
    addressCountry: "KR",
  },
  areaServed: ["논산시", "충청남도"],
  sameAs: [
    "https://www.instagram.com/nonsan_daemul",
    blogUrl,
    "https://smartstore.naver.com/nonsandaemul",
    "https://www.band.us/band/68307995/post",
    mapUrl,
  ],
};

export default function Home() {
  return (
    <main>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-10 lg:px-16">
          <a className="flex items-center gap-3 text-white" href="#top" aria-label="대물낚시 홈">
            <span className="flex size-10 items-center justify-center rounded-full bg-[#ff4e27] text-sm font-black tracking-[-0.08em] shadow-lg shadow-black/20">
              大物
            </span>
            <span className="text-lg font-black tracking-[-0.05em]">논산 대물낚시</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold text-white/90 md:flex" aria-label="주요 메뉴">
            <a className="transition hover:text-white" href="#about">매장 소개</a>
            <a className="transition hover:text-white" href="#trips">바다 출조</a>
            <a className="transition hover:text-white" href="#location">오시는 길</a>
          </nav>
          <a
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-extrabold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"
            href="tel:041-736-4100"
          >
            041-736-4100
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate flex min-h-[780px] items-end overflow-hidden bg-[#071828] lg:min-h-[860px]">
        <Image
          src="/images/store-front.webp"
          alt="논산 대물낚시 매장 전경과 출조용 보트"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[53%_48%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,21,.30)_0%,rgba(3,12,21,.10)_30%,rgba(3,13,23,.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(55,162,224,.17),transparent_35%)]" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20 lg:px-16 lg:pb-24">
          <div className="mb-5 flex items-center gap-3 text-sm font-black tracking-[0.16em] text-[#ffc14f]">
            <span className="h-px w-9 bg-[#ffc14f]" />
            SINCE 2004 · NONSAN
          </div>
          <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,7.9rem)] font-black leading-[0.91] tracking-[-0.075em] text-white [text-wrap:balance]">
            논산의 낚시를
            <br />
            준비하는 곳.
          </h1>
          <div className="mt-8 flex flex-col justify-between gap-7 border-t border-white/25 pt-6 md:flex-row md:items-end">
            <p className="max-w-xl text-base font-medium leading-7 text-white/80 md:text-lg">
              논산시 최대 규모 낚시점. 민물부터 바다까지,
              <br className="hidden sm:block" />
              필요한 장비와 오랜 현장 경험을 한곳에서 만나보세요.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-full bg-[#ff4e27] px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#f04420]" href={mapUrl} target="_blank" rel="noreferrer">
                매장 위치 보기 ↗
              </a>
              <a className="rounded-full bg-white px-6 py-3.5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#fff5df]" href={blogUrl} target="_blank" rel="noreferrer">
                출조 소식 보기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#f2eee5] px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-24">
            <div>
              <p className="mb-8 text-sm font-black tracking-[0.16em] text-[#d83d1d]">ABOUT DAEMUL</p>
              <h2 className="text-[clamp(2.75rem,5.6vw,6.2rem)] font-black leading-[0.96] tracking-[-0.075em] text-[#071828]">
                낚시를 아는 사람이
                <br />
                준비하면 다릅니다.
              </h2>
              <p className="mt-9 max-w-2xl text-lg font-semibold leading-8 tracking-[-0.025em] text-[#41505d] md:text-xl md:leading-9">
                2004년 문을 연 대물낚시는 물건만 판매하는 낚시점이 아닙니다. 직접 바다로 나가고,
                계절의 변화를 읽고, 현장에서 필요한 준비를 누구보다 잘 아는 논산의 낚시 전문점입니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-[2rem] bg-[#071828]/15">
              <div className="bg-[#ff4e27] p-7 text-white md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] md:text-7xl">2004</p>
                <p className="mt-3 text-sm font-extrabold">대물낚시의 시작</p>
              </div>
              <div className="bg-white/70 p-7 md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] text-[#071828] md:text-7xl">20+</p>
                <p className="mt-3 text-sm font-extrabold text-[#52606a]">년간의 현장 경험</p>
              </div>
              <div className="bg-[#071828] p-7 text-white md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] md:text-7xl">10</p>
                <p className="mt-3 text-sm font-extrabold text-white/70">인승 출조 보트</p>
              </div>
              <div className="bg-white/70 p-7 md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] text-[#071828] md:text-7xl">1:1</p>
                <p className="mt-3 text-sm font-extrabold text-[#52606a]">맞춤 장비 상담</p>
              </div>
            </div>
          </div>

          <div className="relative mt-20 overflow-hidden rounded-[2.2rem] md:mt-28">
            <Image
              src="/images/store-wide.webp"
              alt="넓은 주차 공간을 갖춘 논산 대물낚시 매장 외관"
              width={2400}
              height={1800}
              sizes="(max-width: 768px) 100vw, 1312px"
              className="aspect-[4/3] w-full object-cover md:aspect-[16/8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071828]/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7 text-white md:flex-row md:items-end md:justify-between md:p-11">
              <p className="text-2xl font-black tracking-[-0.04em] md:text-4xl">보고, 비교하고, 편하게 준비하세요.</p>
              <p className="text-sm font-bold text-white/75">매장 앞 넓은 주차 공간</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-black tracking-[0.16em] text-[#d83d1d]">STORE &amp; SERVICE</p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] text-[#071828] md:text-6xl">
                출발 전 준비부터
                <br />수리까지 한곳에서.
              </h2>
            </div>
            <p className="max-w-sm text-base font-semibold leading-7 text-[#5a6872]">
              대상어와 낚시 방식에 맞는 준비가 좋은 조과의 시작입니다. 궁금한 점은 편하게 물어보세요.
            </p>
          </div>

          <div className="grid border-t border-[#071828] md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="group border-b border-[#071828]/20 py-9 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="mb-16 flex items-center justify-between md:mb-24">
                  <span className="text-sm font-black text-[#ff4e27]">{service.number}</span>
                  <span className="flex size-10 items-center justify-center rounded-full border border-[#071828]/20 text-xl transition group-hover:-rotate-12 group-hover:bg-[#071828] group-hover:text-white">↗</span>
                </div>
                <h3 className="text-2xl font-black tracking-[-0.045em] text-[#071828] md:text-3xl">{service.title}</h3>
                <p className="mt-5 min-h-24 text-[15px] font-medium leading-7 text-[#5a6872]">{service.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f1eee7] px-3 py-1.5 text-xs font-extrabold text-[#354550]">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="trips" className="relative isolate overflow-hidden bg-[#071828] px-5 py-24 text-white md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="absolute -right-40 top-0 size-[620px] rounded-full border-[120px] border-[#0d3048] opacity-55" />
        <div className="absolute -bottom-80 -left-40 size-[680px] rounded-full border-[1px] border-white/10" />
        <div className="relative mx-auto max-w-[1312px]">
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-24">
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/store-front.webp"
                alt="대물낚시 매장 앞 10인승 바다 출조 보트"
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="aspect-[4/5] w-full object-cover object-[42%_72%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06121d]/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-7xl font-black tracking-[-0.08em] text-[#ffc14f] md:text-8xl">10</p>
                <p className="mt-1 text-lg font-black">인승 보트 · 계절 출조</p>
              </div>
            </div>

            <div className="pb-2">
              <p className="mb-6 text-sm font-black tracking-[0.16em] text-[#ffc14f]">SEA FISHING TRIP</p>
              <h2 className="text-[clamp(3rem,6vw,6.7rem)] font-black leading-[0.94] tracking-[-0.075em]">
                바다는 매번 다르고,
                <br />우리는 그 바다를 압니다.
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/68 md:text-xl md:leading-9">
                봄·가을·겨울, 물때와 날씨가 맞는 날이면 10인승 보트를 끌고 바다로 향합니다.
                20년 넘게 쌓은 출조 경험을 바탕으로 초보 조사님도 편안하게 즐길 수 있도록 포인트와 채비를 안내합니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-2.5">
                {species.map((fish) => (
                  <span key={fish} className="rounded-full border border-white/20 bg-white/[.06] px-4 py-2 text-sm font-extrabold text-white/85">
                    {fish}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3">
                <div className="bg-[#0a2234] p-6">
                  <p className="text-xs font-black tracking-[.12em] text-[#ffc14f]">SEASON</p>
                  <p className="mt-3 text-lg font-black">봄 · 가을 · 겨울</p>
                </div>
                <div className="bg-[#0a2234] p-6">
                  <p className="text-xs font-black tracking-[.12em] text-[#ffc14f]">GUIDE</p>
                  <p className="mt-3 text-lg font-black">맞춤 출조 안내</p>
                </div>
                <div className="bg-[#0a2234] p-6">
                  <p className="text-xs font-black tracking-[.12em] text-[#ffc14f]">BOOKING</p>
                  <p className="mt-3 text-lg font-black">전화 사전 문의</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a className="rounded-full bg-[#ff4e27] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#f04420]" href="tel:041-736-4100">
                  출조 문의 041-736-4100
                </a>
                <a className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-[#071828]" href={blogUrl} target="_blank" rel="noreferrer">
                  최근 출조 소식 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#ffc14f] py-7" aria-label="대물낚시 주요 서비스">
        <p className="whitespace-nowrap text-center text-[clamp(1.6rem,4vw,4rem)] font-black tracking-[-0.055em] text-[#071828]">
          낚시용품 · 낚싯대 수리 · 바다 출조 · 채비 상담 · 논산 대물낚시
        </p>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-24 lg:px-16" aria-labelledby="social-heading">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-black tracking-[0.16em] text-[#d83d1d]">FOLLOW &amp; SHOP</p>
              <h2 id="social-heading" className="text-4xl font-black tracking-[-0.06em] text-[#071828] md:text-5xl">
                온라인에서도 만나요.
              </h2>
            </div>
            <p className="max-w-sm text-sm font-semibold leading-6 text-[#5a6872] md:text-right">
              출조 소식부터 낚시용품 구매, 조사님들과의 커뮤니티까지 바로 연결됩니다.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  className="group flex min-h-44 flex-col justify-between rounded-[1.6rem] border border-[#071828]/10 bg-[#f7f4ed] p-5 transition hover:-translate-y-1 hover:border-[#071828]/25 hover:shadow-[0_18px_45px_rgba(7,24,40,.1)] md:p-6"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} 새 탭에서 열기`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`flex size-12 items-center justify-center rounded-2xl text-2xl shadow-sm ${social.iconClass}`}>
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full border border-[#071828]/15 text-sm text-[#071828] transition group-hover:bg-[#071828] group-hover:text-white">↗</span>
                  </div>
                  <div>
                    <p className="text-lg font-black tracking-[-0.035em] text-[#071828]">{social.label}</p>
                    <p className="mt-1 text-sm font-bold text-[#73808a]">{social.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="location" className="bg-[#eee9de] px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1312px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-6 text-sm font-black tracking-[0.16em] text-[#d83d1d]">VISIT THE STORE</p>
              <h2 className="text-[clamp(3rem,6vw,6.5rem)] font-black leading-[.95] tracking-[-0.075em] text-[#071828]">
                준비가 필요할 때,
                <br />편하게 들러주세요.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <address className="not-italic">
                <p className="text-xl font-black tracking-[-0.035em] text-[#071828] md:text-2xl">{address}</p>
                <a className="mt-3 inline-block text-3xl font-black tracking-[-0.05em] text-[#ff4e27] md:text-4xl" href="tel:041-736-4100">
                  041-736-4100
                </a>
              </address>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(7,24,40,.1)] lg:grid-cols-[1.5fr_.5fr]">
            <div className="min-h-[430px] bg-[#d9e2e2] lg:min-h-[560px]">
              <iframe
                title="논산 대물낚시 위치 지도"
                src="https://maps.google.com/maps?q=%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EA%B0%95%EB%B3%80%EB%A1%9C308%EB%B2%88%EA%B8%B8%2048&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block min-h-[430px] w-full border-0 lg:min-h-[560px]"
              />
            </div>
            <div className="flex flex-col justify-between bg-[#071828] p-8 text-white md:p-10">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#ff4e27] text-xl">●</span>
                <h3 className="mt-7 text-3xl font-black tracking-[-0.05em]">대물낚시</h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/65">
                  논산 시내에서 편하게 방문할 수 있고,
                  <br />매장 앞에 넓은 주차 공간이 있습니다.
                </p>
              </div>
              <div className="mt-12 space-y-3">
                <a className="flex items-center justify-between rounded-full bg-[#03c75a] px-5 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#02b652]" href={mapUrl} target="_blank" rel="noreferrer">
                  네이버 지도에서 길찾기 <span>↗</span>
                </a>
                <a className="flex items-center justify-between rounded-full border border-white/20 px-5 py-3.5 text-sm font-black transition hover:bg-white hover:text-[#071828]" href={blogUrl} target="_blank" rel="noreferrer">
                  네이버 블로그 보기 <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#071828] px-5 py-10 text-white md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-8 border-t border-white/15 pt-9 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#ff4e27] text-xs font-black">大物</span>
              <p className="text-lg font-black tracking-[-0.04em]">논산 대물낚시</p>
            </div>
            <p className="mt-4 text-sm font-medium text-white/45">{address} · 041-736-4100</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-lg text-white/65 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white hover:text-[#071828]"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} 새 탭에서 열기`}
                  title={social.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
            <a className="ml-2 text-sm font-bold text-white/65 hover:text-white" href={mapUrl} target="_blank" rel="noreferrer">네이버 지도</a>
            <a className="text-sm font-bold text-white/65 hover:text-white" href="tel:041-736-4100">전화 문의</a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1312px] text-xs font-semibold text-white/30">
          © {new Date().getFullYear()} NONSAN DAEMUL FISHING. ALL RIGHTS RESERVED.
        </div>
      </footer>

      <a className="fixed bottom-4 right-4 z-30 flex items-center gap-2 rounded-full bg-[#ff4e27] px-5 py-3.5 text-sm font-black text-white shadow-2xl shadow-black/30 transition hover:-translate-y-1 md:hidden" href="tel:041-736-4100" aria-label="대물낚시 전화 문의">
        전화 문의
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
