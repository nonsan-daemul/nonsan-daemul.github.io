"use client";

import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
  HiCheck,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { localeOptions, translations, type Locale } from "./translations";

const mapUrl = "https://naver.me/xcgRV1Uf";
const floatingMapUrl = "https://naver.me/5K64EYGn";
const blogUrl = "https://blog.naver.com/daemul4100";
const emailRecipients = ["k0729047@hanmail.net", "daemul4100@naver.com"];
const phoneNumber = "041-736-4100";
const phoneHref = `tel:${phoneNumber}`;
const businessHours = "07:30 - 24:00";
const siteUrl = "https://nonsan-daemul.github.io/";

const socialLinks = [
  {
    href: "https://www.instagram.com/nonsan_daemul",
    icon: FaInstagram,
    iconClass: "bg-[linear-gradient(135deg,#6f39b8,#dd2a7b_52%,#feda75)] text-white",
  },
  {
    href: blogUrl,
    icon: SiNaver,
    iconClass: "bg-[#03c75a] text-white",
  },
  {
    href: "https://smartstore.naver.com/nonsandaemul",
    icon: HiOutlineShoppingBag,
    iconClass: "bg-[#00c73c] text-white",
  },
  {
    href: "https://www.band.us/band/68307995/post",
    icon: HiOutlineUserGroup,
    iconClass: "bg-[#56b746] text-white",
  },
  {
    href: "https://open.kakao.com/me/nonsandaemul",
    icon: RiKakaoTalkFill,
    iconClass: "bg-[#fee500] text-[#191919]",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "논산 대물낚시",
      alternateName: ["대물낚시", "논산 낚시점", "논산낚시점"],
      description:
        "논산의 민물·루어·바다·갈치 낚시용품과 출조 채비, 바다낚시·선상 출조 상담을 제공하는 대물낚시 공식 홈페이지입니다.",
      inLanguage: "ko-KR",
      publisher: { "@id": `${siteUrl}#business` },
    },
    {
      "@type": "SportingGoodsStore",
      "@id": `${siteUrl}#business`,
      name: "논산 대물낚시",
      alternateName: ["대물낚시", "논산 낚시점", "논산낚시점", "논산 낚시용품점"],
      url: siteUrl,
      mainEntityOfPage: { "@id": `${siteUrl}#website` },
      logo: `${siteUrl}icon.png`,
      image: [
        `${siteUrl}images/store-front.webp`,
        `${siteUrl}images/store-wide.webp`,
        `${siteUrl}og.png`,
      ],
      description:
        "2004년부터 운영해 온 논산시 최대 규모 낚시점. 20년 넘는 경험으로 민물·루어·바다·갈치 낚시용품 판매, 낚싯대 수리, 출조 채비와 바다낚시·선상 출조 상담을 제공합니다.",
      slogan: "논산시 최대 규모 낚시점, Since 2004",
      foundingDate: "2004",
      telephone: "+82-41-736-4100",
      openingHours: businessHours,
      priceRange: "₩₩",
      brand: { "@type": "Brand", name: "바낙스" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "강변로308번길 48",
        addressLocality: "논산시",
        addressRegion: "충청남도",
        addressCountry: "KR",
      },
      areaServed: ["논산시", "충청남도"],
      knowsAbout: [
        "민물낚시",
        "루어낚시",
        "바다낚시",
        "갈치낚시",
        "선상낚시",
        "출조 채비",
        "낚싯대 수리",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+82-41-736-4100",
        contactType: "customer service",
        availableLanguage: "Korean",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "논산 대물낚시 상품 및 상담",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "민물·루어·바다·갈치 낚시용품 상담 및 판매" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "출조 채비 및 바다낚시 상담" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "10인승 출조 보트 선상낚시 상담" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "낚싯대 점검 및 수리" },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/nonsan_daemul",
        blogUrl,
        "https://smartstore.naver.com/nonsandaemul",
        "https://www.band.us/band/68307995/post",
        "https://open.kakao.com/me/nonsandaemul",
        mapUrl,
        floatingMapUrl,
      ],
    },
  ],
};

const isLocale = (value: string): value is Locale =>
  localeOptions.some((option) => option.code === value);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

function Reveal({ children, className, delay = 0, direction = "up" }: RevealProps) {
  const offset =
    direction === "left"
      ? { x: -42, y: 0 }
      : direction === "right"
        ? { x: 42, y: 0 }
        : { x: 0, y: 36 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.68, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ko");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const languagePickerRef = useRef<HTMLDivElement>(null);
  const t = translations[locale];
  const currentLanguage = localeOptions.find((option) => option.code === locale)!;
  const headingTracking = locale === "ko" ? "tracking-[-0.075em]" : "tracking-[-0.04em]";

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("daemul-language");
    if (savedLocale && isLocale(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title =
      locale === "ko"
        ? "논산 대물낚시 | 낚시용품·바다 출조 상담"
        : `${translations[locale].brand} | Since 2004`;
    window.localStorage.setItem("daemul-language", locale);
  }, [locale]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (
        languagePickerRef.current &&
        !languagePickerRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const changeLanguage = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setLanguageOpen(false);
  };

  const openEmailApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = `${t.email.replyToLabel}: ${senderEmail.trim()}\n\n${emailMessage.trim()}`;
    const mailtoUrl = `mailto:${emailRecipients.join(",")}?subject=${encodeURIComponent(
      emailSubject.trim(),
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <MotionConfig reducedMotion="user">
      <main>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-5 md:px-10 lg:px-16">
          <a
            className="max-w-[58vw] truncate text-base font-black tracking-[-0.04em] text-white sm:text-lg"
            href="#top"
            aria-label={t.homeLabel}
          >
            {t.brand}
          </a>
          <nav
            className="hidden items-center gap-6 text-sm font-bold text-white/90 lg:flex"
            aria-label={t.navLabel}
          >
            <a className="transition hover:text-white" href="#about">
              {t.nav.about}
            </a>
            <a className="transition hover:text-white" href="#trips">
              {t.nav.trips}
            </a>
            <a className="transition hover:text-white" href="#location">
              {t.nav.location}
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#071828] sm:min-h-[780px] lg:min-h-[860px]"
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/images/store-front.webp"
            alt={t.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[53%_48%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,11,21,.30)_0%,rgba(3,12,21,.10)_30%,rgba(3,13,23,.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(55,162,224,.17),transparent_35%)]" />

        <motion.div
          className="relative mx-auto w-full max-w-[1440px] px-5 pb-14 md:px-10 md:pb-20 lg:px-16 lg:pb-24"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-5 flex items-center gap-3 text-sm font-black tracking-[0.12em] text-[#ffc14f]">
            <span className="h-px w-9 bg-[#ffc14f]" />
            {t.hero.eyebrow}
          </div>
          <h1
            className={`max-w-6xl text-[clamp(2.8rem,7vw,7.4rem)] font-black leading-[0.94] text-white [text-wrap:balance] ${headingTracking}`}
          >
            {t.hero.title[0]}
            <br />
            {t.hero.title[1]}
          </h1>
          <div className="mt-8 flex flex-col justify-between gap-7 border-t border-white/25 pt-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-base font-medium leading-7 text-white/80 md:text-lg">
                {t.hero.description}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-black text-white/90 backdrop-blur-sm">
                <HiOutlineClock className="text-base text-[#ffc14f]" aria-hidden="true" />
                <span>{t.hoursLabel}</span>
                <span className="text-[#ffc14f]">{businessHours}</span>
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#03c75a] px-6 py-3.5 text-center text-sm font-black text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#02b652] sm:w-auto"
                href={phoneHref}
                aria-label={`${t.call} ${phoneNumber}`}
              >
                <HiOutlinePhone className="text-lg" aria-hidden="true" />
                {t.call}
              </a>
              <a
                className="w-full rounded-full bg-white px-6 py-3.5 text-center text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#fff5df] sm:w-auto"
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.locationCta} ↗
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="about"
        className="bg-[#f2eee5] px-5 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1312px]">
          <Reveal className="grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-24">
            <div>
              <p className="mb-8 text-sm font-black tracking-[0.12em] text-[#d83d1d]">
                {t.about.eyebrow}
              </p>
              <h2
                className={`text-[clamp(2.55rem,5.4vw,6rem)] font-black leading-[0.99] text-[#071828] ${headingTracking}`}
              >
                {t.about.title[0]}
                <br />
                {t.about.title[1]}
              </h2>
              <p className="mt-9 max-w-2xl text-lg font-semibold leading-8 text-[#41505d] md:text-xl md:leading-9">
                {t.about.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-[2rem] bg-[#071828]/15">
              <div className="bg-[#ff4e27] p-6 text-white md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] md:text-7xl">2004</p>
                <p className="mt-3 text-sm font-extrabold">{t.about.stats[0]}</p>
              </div>
              <div className="bg-white/70 p-6 md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] text-[#071828] md:text-7xl">20+</p>
                <p className="mt-3 text-sm font-extrabold text-[#52606a]">{t.about.stats[1]}</p>
              </div>
              <div className="bg-[#071828] p-6 text-white md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] md:text-7xl">10</p>
                <p className="mt-3 text-sm font-extrabold text-white/70">{t.about.stats[2]}</p>
              </div>
              <div className="bg-white/70 p-6 md:p-9">
                <p className="text-5xl font-black tracking-[-0.07em] text-[#071828] md:text-7xl">1:1</p>
                <p className="mt-3 text-sm font-extrabold text-[#52606a]">{t.about.stats[3]}</p>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="relative mt-20 overflow-hidden rounded-[2.2rem] md:mt-28"
            delay={0.08}
          >
            <Image
              src="/images/store-wide.webp"
              alt={t.about.storeAlt}
              width={2400}
              height={1800}
              sizes="(max-width: 768px) 100vw, 1312px"
              className="aspect-[4/3] w-full object-cover md:aspect-[16/8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071828]/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-11">
              <p className="text-2xl font-black tracking-[-0.035em] md:text-4xl">
                {t.about.caption}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="consulting"
        className="bg-[#ff4e27] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16 lg:py-32"
        aria-labelledby="consulting-heading"
      >
        <div className="mx-auto max-w-[1312px]">
          <Reveal className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="mb-6 text-sm font-black tracking-[0.12em] text-[#071828]">
                {t.expertise.eyebrow}
              </p>
              <h2
                id="consulting-heading"
                className={`text-[clamp(2.45rem,5.3vw,5.8rem)] font-black leading-[.98] [text-wrap:balance] ${headingTracking}`}
              >
                {t.expertise.title[0]}
                <br />
                {t.expertise.title[1]}
              </h2>
              <p className="mt-8 max-w-2xl text-base font-semibold leading-8 text-white/85 md:text-lg">
                {t.expertise.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.expertise.items.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-[1.6rem] bg-[#071828] p-6 shadow-[0_18px_45px_rgba(7,24,40,.15)] md:p-7"
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-black tracking-[.12em] text-[#ffc14f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#ffc14f] text-lg text-[#071828]">
                      <HiCheck aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-black tracking-[-0.035em] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-semibold leading-7 text-white/65">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1312px]">
          <Reveal className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm font-black tracking-[0.12em] text-[#d83d1d]">
                {t.services.eyebrow}
              </p>
              <h2
                className={`text-4xl font-black leading-tight text-[#071828] md:text-6xl ${headingTracking}`}
              >
                {t.services.title[0]}
                <br />
                {t.services.title[1]}
              </h2>
            </div>
            <p className="max-w-md text-base font-semibold leading-7 text-[#5a6872]">
              {t.services.description}
            </p>
          </Reveal>

          <div className="grid border-t border-[#071828] md:grid-cols-3">
            {t.services.items.map((service, index) => (
              <motion.article
                key={service.title}
                className="border-b border-[#071828]/20 py-9 md:border-r md:px-8 md:py-12 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="mb-12 flex items-center gap-3 md:mb-16">
                  <span className="text-sm font-black text-[#ff4e27]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-[#ff4e27]/60" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.035em] text-[#071828] md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-5 min-h-24 text-[15px] font-medium leading-7 text-[#5a6872]">
                  {service.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f1eee7] px-3 py-1.5 text-xs font-extrabold text-[#354550]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="trips"
        className="relative isolate overflow-hidden bg-[#071828] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="absolute -right-40 top-0 size-[620px] rounded-full border-[120px] border-[#0d3048] opacity-55" />
        <div className="absolute -bottom-80 -left-40 size-[680px] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-[1312px]">
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-24">
            <Reveal direction="left" className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/store-front.webp"
                alt={t.trips.boatAlt}
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="aspect-[4/5] w-full object-cover object-[42%_72%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06121d]/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <p className="text-7xl font-black tracking-[-0.08em] text-[#ffc14f] md:text-8xl">10</p>
                <p className="mt-1 text-lg font-black">{t.trips.boatLabel}</p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.08} className="pb-2">
              <p className="mb-6 text-sm font-black tracking-[0.12em] text-[#ffc14f]">
                {t.trips.eyebrow}
              </p>
              <h2
                className={`text-[clamp(2.35rem,5.7vw,6.3rem)] font-black leading-[0.98] ${headingTracking}`}
              >
                {t.trips.title[0]}
                <br />
                {t.trips.title[1]}
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/70 md:text-xl md:leading-9">
                {t.trips.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2.5">
                {t.trips.species.map((fish) => (
                  <span
                    key={fish}
                    className="rounded-full border border-white/20 bg-white/[.06] px-4 py-2 text-sm font-extrabold text-white/85"
                  >
                    {fish}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3">
                <div className="bg-[#0a2234] p-6">
                  <p className="text-xs font-black tracking-[.1em] text-[#ffc14f]">
                    {t.trips.seasonLabel}
                  </p>
                  <p className="mt-3 text-lg font-black">{t.trips.seasonValue}</p>
                </div>
                <div className="bg-[#0a2234] p-6">
                  <p className="text-xs font-black tracking-[.1em] text-[#ffc14f]">
                    {t.trips.guideLabel}
                  </p>
                  <p className="mt-3 text-lg font-black">{t.trips.guideValue}</p>
                </div>
                <div className="bg-[#0a2234] p-6">
                  <p className="text-xs font-black tracking-[.1em] text-[#ffc14f]">
                    {t.trips.bookingLabel}
                  </p>
                  <p className="mt-3 text-lg font-black">{t.trips.bookingValue}</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="rounded-full bg-[#ff4e27] px-6 py-3.5 text-center text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#f04420]"
                  href={phoneHref}
                  aria-label={`${t.trips.inquiry} ${phoneNumber}`}
                >
                  {t.trips.inquiry}
                </a>
                <a
                  className="rounded-full border border-white/25 px-6 py-3.5 text-center text-sm font-black text-white transition hover:bg-white hover:text-[#071828]"
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.trips.news} ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="bg-white px-5 py-20 md:px-10 md:py-24 lg:px-16"
        aria-labelledby="social-heading"
      >
        <div className="mx-auto max-w-[1312px]">
          <Reveal className="mb-10 md:mb-12">
            <div>
              <p className="mb-4 text-sm font-black tracking-[0.12em] text-[#d83d1d]">
                {t.social.eyebrow}
              </p>
              <h2
                id="social-heading"
                className={`text-4xl font-black text-[#071828] md:text-5xl ${headingTracking}`}
              >
                {t.social.title}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.href}
                  className="group flex min-h-40 flex-col justify-between rounded-[1.6rem] border border-[#071828]/10 bg-[#f7f4ed] p-5 transition hover:-translate-y-1 hover:border-[#071828]/25 hover:shadow-[0_18px_45px_rgba(7,24,40,.1)] sm:min-h-44"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.social.labels[index]} ${t.social.openNewTab}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`flex size-12 items-center justify-center rounded-2xl text-2xl shadow-sm ${social.iconClass}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="flex size-9 items-center justify-center rounded-full border border-[#071828]/15 text-sm text-[#071828] transition group-hover:bg-[#071828] group-hover:text-white">
                      ↗
                    </span>
                  </div>
                  <div>
                    <p className="text-lg font-black tracking-[-0.025em] text-[#071828]">
                      {t.social.labels[index]}
                    </p>
                    <p className="mt-1 text-sm font-bold leading-5 text-[#73808a]">
                      {t.social.handles[index]}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-[#f2eee5] px-5 py-20 md:px-10 md:py-28 lg:px-16"
        aria-labelledby="email-heading"
      >
        <div className="mx-auto grid max-w-[1312px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24">
          <Reveal className="text-[#071828]">
            <p className="mb-5 text-sm font-black tracking-[0.12em] text-[#d83d1d]">
              {t.email.eyebrow}
            </p>
            <h2
              id="email-heading"
              className={`text-[clamp(2.35rem,5.5vw,6rem)] font-black leading-[.99] ${headingTracking}`}
            >
              {t.email.title[0]}
              <br />
              {t.email.title[1]}
            </h2>
            <p className="mt-7 max-w-2xl text-base font-semibold leading-7 text-[#50616e] md:text-lg md:leading-8">
              {t.email.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {t.email.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[#071828]/12 bg-white/65 px-4 py-2 text-sm font-extrabold text-[#354550]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={0.08}
            className="rounded-[2rem] bg-[#071828] p-7 text-white shadow-[0_24px_70px_rgba(7,24,40,.24)] md:p-10"
          >
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[#ffc14f] text-2xl text-[#071828]">
              <HiOutlineEnvelope aria-hidden="true" />
            </div>

            <form className="mt-8 space-y-5" onSubmit={openEmailApp}>
              <label className="block">
                <span className="mb-2 block text-sm font-black text-white/80">
                  {t.email.senderLabel}
                </span>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-white/[.08] px-4 py-3.5 text-base font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-[#ffc14f] focus:bg-white/[.12] focus:ring-4 focus:ring-[#ffc14f]/10"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={senderEmail}
                  onChange={(event) => setSenderEmail(event.target.value)}
                  placeholder={t.email.senderPlaceholder}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black text-white/80">
                  {t.email.subjectLabel}
                </span>
                <input
                  className="w-full rounded-2xl border border-white/15 bg-white/[.08] px-4 py-3.5 text-base font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-[#ffc14f] focus:bg-white/[.12] focus:ring-4 focus:ring-[#ffc14f]/10"
                  type="text"
                  value={emailSubject}
                  onChange={(event) => setEmailSubject(event.target.value)}
                  placeholder={t.email.subject}
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-black text-white/80">
                  {t.email.messageLabel}
                </span>
                <textarea
                  className="min-h-36 w-full resize-y rounded-2xl border border-white/15 bg-white/[.08] px-4 py-3.5 text-base font-semibold leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffc14f] focus:bg-white/[.12] focus:ring-4 focus:ring-[#ffc14f]/10"
                  value={emailMessage}
                  onChange={(event) => setEmailMessage(event.target.value)}
                  placeholder={t.email.messagePlaceholder}
                  required
                />
              </label>

              <button
                className="flex w-full items-center justify-between gap-4 rounded-full bg-[#ffc14f] px-5 py-3.5 text-sm font-black text-[#071828] transition hover:-translate-y-0.5 hover:bg-white active:translate-y-0"
                type="submit"
              >
                {t.email.cta} <HiOutlineEnvelope className="text-lg" aria-hidden="true" />
              </button>
            </form>
            <p className="mt-4 text-xs font-semibold leading-5 text-white/45">{t.email.note}</p>
          </Reveal>
        </div>
      </section>

      <section
        id="location"
        className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1312px]">
          <Reveal className="mb-12">
            <div>
              <p className="mb-6 text-sm font-black tracking-[0.12em] text-[#d83d1d]">
                {t.location.eyebrow}
              </p>
              <h2
                className={`text-[clamp(2.35rem,5.7vw,6.2rem)] font-black leading-[.99] text-[#071828] ${headingTracking}`}
              >
                {t.location.title[0]}
                <br />
                {t.location.title[1]}
              </h2>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(7,24,40,.1)] lg:grid-cols-[1.5fr_.5fr]"
          >
            <div className="min-h-[340px] bg-[#d9e2e2] sm:min-h-[430px] lg:min-h-[560px]">
              <iframe
                title={t.location.mapTitle}
                src="https://maps.google.com/maps?q=%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EA%B0%95%EB%B3%80%EB%A1%9C308%EB%B2%88%EA%B8%B8%2048&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block min-h-[340px] w-full border-0 sm:min-h-[430px] lg:min-h-[560px]"
              />
            </div>
            <div className="flex flex-col justify-between bg-[#071828] p-8 text-white md:p-10">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[#ff4e27] text-xl">
                  ●
                </span>
                <h3 className="mt-7 text-3xl font-black tracking-[-0.035em]">
                  {t.location.storeName}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/65">
                  {t.location.description}
                </p>
                <address className="mt-7 border-t border-white/15 pt-6 not-italic">
                  <p className="text-sm font-black leading-6 text-white/90">
                    {t.location.address}
                  </p>
                  <a
                    className="mt-3 inline-flex items-center gap-2 text-xl font-black tracking-[-0.035em] text-[#ffc14f] transition hover:text-white"
                    href={phoneHref}
                  >
                    <HiOutlinePhone className="text-lg" aria-hidden="true" />
                    {phoneNumber}
                  </a>
                </address>
                <div className="mt-5 flex items-center gap-2 rounded-2xl bg-white/[.07] px-4 py-3 text-sm">
                  <HiOutlineClock className="shrink-0 text-lg text-[#ffc14f]" aria-hidden="true" />
                  <span className="font-bold text-white/65">{t.hoursLabel}</span>
                  <span className="ml-auto whitespace-nowrap font-black text-white">
                    {businessHours}
                  </span>
                </div>
              </div>
              <div className="mt-12 space-y-3">
                <a
                  className="flex items-center justify-between gap-4 rounded-full bg-[#03c75a] px-5 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#02b652]"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.location.mapCta} <span>↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#071828] px-5 pb-28 pt-10 text-white md:px-10 md:py-10 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-8 border-t border-white/15 pt-9 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex flex-wrap items-center gap-3 text-lg font-black tracking-[-0.03em]">
              {t.brand}
              <span className="rounded-full border border-[#ffc14f]/35 bg-[#ffc14f]/10 px-3 py-1 text-xs tracking-[0.08em] text-[#ffc14f]">
                Since 2004
              </span>
            </p>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-6 text-white/45">
              {t.location.address} · 041-736-4100
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/55">
              <HiOutlineClock className="text-base text-[#ffc14f]" aria-hidden="true" />
              {t.hoursLabel}
              <span className="font-black text-[#ffc14f]">{businessHours}</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-lg text-white/65 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white hover:text-[#071828]"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.social.labels[index]} ${t.social.openNewTab}`}
                  title={t.social.labels[index]}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
            <a
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-lg text-white/65 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white hover:text-[#03a94b]"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.map}
              title={t.footer.map}
            >
              <HiOutlineMapPin aria-hidden="true" />
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full border border-white/15 text-lg text-white/65 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white hover:text-[#ff4e27]"
              href={phoneHref}
              aria-label={t.footer.call}
              title={t.footer.call}
            >
              <HiOutlinePhone aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1312px] text-xs font-semibold text-white/30">
          © {new Date().getFullYear()} NONSAN DAEMUL FISHING. ALL RIGHTS RESERVED.
        </div>
      </footer>

      <div
        ref={languagePickerRef}
        className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6"
      >
        <div className="flex flex-col items-center gap-3">
          <a
            className="flex size-[52px] items-center justify-center rounded-full bg-[#ff4e27] text-2xl text-white shadow-[0_15px_45px_rgba(255,78,39,.3)] transition hover:-translate-y-0.5 hover:bg-[#f04420] active:scale-95"
            href={floatingMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer.map}
            title={t.footer.map}
          >
            <HiOutlineMapPin aria-hidden="true" />
          </a>
          <a
            className="flex size-[52px] items-center justify-center rounded-full bg-[#03c75a] text-2xl text-white shadow-[0_15px_45px_rgba(3,199,90,.32)] transition hover:-translate-y-0.5 hover:bg-[#02b652] active:scale-95"
            href={phoneHref}
            aria-label={`${t.floatingCall} ${phoneNumber}`}
            title={phoneNumber}
          >
            <HiOutlinePhone aria-hidden="true" />
          </a>
          <div className="relative">
            {languageOpen && (
              <div
                id="language-menu"
                className="absolute bottom-[calc(100%+12px)] right-0 max-h-[70vh] w-[min(16rem,calc(100vw-2rem))] overflow-y-auto rounded-[1.4rem] border border-[#071828]/10 bg-white p-2 shadow-[0_22px_70px_rgba(7,24,40,.25)]"
                aria-label={t.language.menuLabel}
              >
                <p className="px-3 pb-2 pt-2 text-xs font-black tracking-[.08em] text-[#71808a]">
                  {t.language.menuLabel}
                </p>
                {localeOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-bold transition hover:bg-[#f2eee5] ${
                      locale === option.code ? "bg-[#fff1e9] text-[#d83d1d]" : "text-[#243746]"
                    }`}
                    onClick={() => changeLanguage(option.code)}
                    aria-pressed={locale === option.code}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg" aria-hidden="true">{option.flag}</span>
                      <span>{option.label}</span>
                    </span>
                    {locale === option.code && <HiCheck className="text-lg" aria-hidden="true" />}
                  </button>
                ))}
              </div>
            )}
            <button
              type="button"
              className={`flex size-[52px] items-center justify-center rounded-full border text-xl shadow-[0_15px_45px_rgba(7,24,40,.28)] transition hover:-translate-y-0.5 active:scale-95 ${
                languageOpen
                  ? "border-[#ffc14f] bg-[#0d3048]"
                  : "border-white/20 bg-[#071828] hover:bg-[#0d3048]"
              }`}
              onClick={() => setLanguageOpen((open) => !open)}
              aria-expanded={languageOpen}
              aria-controls="language-menu"
              aria-label={`${t.language.button}: ${currentLanguage.label}`}
              title={currentLanguage.label}
            >
              <span aria-hidden="true">{currentLanguage.flag}</span>
            </button>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      </main>
    </MotionConfig>
  );
}
