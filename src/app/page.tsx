"use client";

import Image from "next/image";
import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import { LuFish, LuMessagesSquare, LuWrench } from "react-icons/lu";
import { type FormEvent, useEffect, useRef, useState } from "react";
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

const serviceIcons = [LuFish, LuWrench, LuMessagesSquare];
const scrollReveal = {
  initial: { y: 18 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;
const externalLink = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ko");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [senderEmail, setSenderEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const languagePickerRef = useRef<HTMLDivElement>(null);
  const t = translations[locale];
  const currentLanguage = localeOptions.find((option) => option.code === locale)!;
  const languageButton = useRef<HTMLButtonElement>(null);
  const stats = locale === "ko" ? ["2004", "20년+", "10인승", "1:1"] : ["2004", "20+", "10", "1:1"];

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
      if (event.key === "Escape" && languagePickerRef.current?.contains(document.activeElement)) {
        setLanguageOpen(false);
        languageButton.current?.focus();
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const changeLanguage = (nextLocale: Locale) => {
    window.localStorage.setItem("daemul-language", nextLocale);
    setLocale(nextLocale);
    languageButton.current?.focus();
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
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#services">{t.mainServicesLabel}</a>
        <header className="masthead" id="top">
          <div className="wrap header-inner">
            <a className="wordmark" href="#top" aria-label={t.homeLabel}>{t.brand}</a>
            <nav aria-label={t.navLabel}>
              <a href="#services">{t.services.eyebrow}</a>
              <a href="#about">{t.nav.about}</a>
              <a href="#trips">{t.nav.trips}</a>
              <a href="#location">{t.nav.location}</a>
            </nav>
          </div>
        </header>
        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-art">
              <Image src="/images/fishing-reel.webp" alt="" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
            </div>
            <div className="wrap hero-inner">
              <m.div className="hero-copy" initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.45 }}>
                <p className="section-label">{t.hero.eyebrow}</p>
                <h1 id="hero-title">{t.hero.title[0]}<br />{t.hero.title[1]}</h1>
                <p className="intro">{t.hero.description}</p>
                <div className="actions">
                  <a className="button call" href={phoneHref}><HiOutlinePhone />{t.call}</a>
                  <a className="button light-outline" href={mapUrl} {...externalLink}><HiOutlineMapPin />{t.hero.locationCta}</a>
                </div>
                <p className="hours"><HiOutlineClock />{t.hoursLabel} <strong>{businessHours}</strong></p>
              </m.div>
            </div>
          </section>

          <div className="facts-band">
            <dl className="wrap facts">
              {stats.map((value, index) => (
                <div key={value}><dt>{t.about.stats[index]}</dt><dd>{value}</dd></div>
              ))}
            </dl>
          </div>

          <section id="services" className="section wrap">
            <div className="section-heading">
              <div><p className="section-label">{t.services.eyebrow}</p><h2>{t.services.title.join(" ")}</h2></div>
              <p>{t.services.description}</p>
            </div>
            <div className="services">
              {t.services.items.map((item, index) => {
                const Icon = serviceIcons[index];
                return (
                  <m.article key={index} {...scrollReveal}>
                    <Icon className="service-icon" aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </m.article>
                );
              })}
            </div>
          </section>

          <section id="about" className="section mist">
            <div className="wrap split story">
              <m.figure {...scrollReveal}>
                <Image src="/images/store-wide.webp" width={1600} height={1200} sizes="(max-width: 760px) 100vw, 48vw" alt={t.about.storeAlt} />
                <figcaption><HiOutlineMapPin />{t.location.storeName}</figcaption>
              </m.figure>
              <div>
                <p className="section-label">{t.about.eyebrow}</p>
                <h2 id="consulting">{t.expertise.title.join(" ")}</h2>
                <p className="prose">{t.expertise.description}</p>
                <div className="advice">
                  {t.expertise.items.map((item, index) => (
                    <details key={index}>
                      <summary>{item.title}<span className="toggle-mark" aria-hidden="true" /></summary>
                      <p>{item.description}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="trips" className="section trip">
            <div className="wrap split">
              <div>
                <p className="section-label">{t.trips.eyebrow}</p>
                <h2>{t.trips.title.join(" ")}</h2>
                <p className="prose">{t.trips.description}</p>
                <dl className="trip-info">
                  <div><dt>{t.trips.seasonLabel}</dt><dd>{t.trips.seasonValue}</dd></div>
                  <div><dt>{t.trips.bookingLabel}</dt><dd>{t.trips.bookingValue}</dd></div>
                </dl>
                <ul className="species">{t.trips.species.map(fish => <li key={fish}>{fish}</li>)}</ul>
                <div className="actions">
                  <a className="button gold" href={phoneHref}><HiOutlinePhone />{t.trips.inquiry}</a>
                  <a className="button light-outline" href={blogUrl} {...externalLink}>{t.trips.news}</a>
                </div>
              </div>
              <m.figure {...scrollReveal}>
                <Image src="/images/store-front.webp" width={1600} height={1200} sizes="(max-width: 760px) 100vw, 48vw" alt={t.trips.boatAlt} />
                <figcaption><span>10</span> {t.trips.boatLabel}</figcaption>
              </m.figure>
            </div>
          </section>

          <section className="section wrap social" aria-labelledby="social-heading">
            <p className="section-label">{t.social.eyebrow}</p>
            <h2 id="social-heading">{t.social.title}</h2>
            <div className="channels">
              {socialLinks.map(({href, icon: Icon, iconClass}, i) => (
                <a key={href} href={href} {...externalLink} aria-label={`${t.social.labels[i]} · ${t.social.handles[i]} · ${t.social.openNewTab}`}>
                  <span className={`channel-icon ${iconClass}`}><Icon aria-hidden="true" /></span>
                  <span><strong>{t.social.labels[i]}</strong><small>{t.social.handles[i]}</small></span>
                </a>
              ))}
            </div>
          </section>

          <section className="section mist" aria-labelledby="email-heading">
            <div className="wrap split mail">
              <div>
                <p className="section-label">{t.email.eyebrow}</p>
                <h2 id="email-heading">{t.email.title.join(" ")}</h2>
                <p className="prose">{t.email.description}</p>
              </div>
              <form onSubmit={openEmailApp}>
                <label>{t.email.senderLabel}<input type="email" autoComplete="email" required value={senderEmail} onChange={e => setSenderEmail(e.target.value)} placeholder={t.email.senderPlaceholder} /></label>
                <label>{t.email.subjectLabel}<input type="text" required value={emailSubject} onChange={e => setEmailSubject(e.target.value)} placeholder={t.email.subject} /></label>
                <label>{t.email.messageLabel}<textarea rows={4} required value={emailMessage} onChange={e => setEmailMessage(e.target.value)} placeholder={t.email.messagePlaceholder} /></label>
                <button className="button pine" type="submit"><HiOutlineEnvelope />{t.email.cta}</button>
                <p className="form-note">{t.email.note}</p>
              </form>
            </div>
          </section>

          <section id="location" className="section wrap">
            <p className="section-label">{t.nav.location}</p><h2>{t.location.title.join(" ")}</h2>
            <div className="location-panel">
              <iframe title={t.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=%EC%B6%A9%EC%B2%AD%EB%82%A8%EB%8F%84%20%EB%85%BC%EC%82%B0%EC%8B%9C%20%EA%B0%95%EB%B3%80%EB%A1%9C308%EB%B2%88%EA%B8%B8%2048&t=&z=16&ie=UTF8&iwloc=&output=embed" />
              <div className="visit">
                <h3>{t.location.storeName}</h3><p>{t.location.description}</p>
                <address><span>{t.location.address}</span><a href={phoneHref}><HiOutlinePhone />{phoneNumber}</a></address>
                <p className="hours"><HiOutlineClock />{t.hoursLabel} <strong>{businessHours}</strong></p>
                <a className="button gold" href={mapUrl} {...externalLink}><HiOutlineMapPin />{t.location.mapCta}</a>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="wrap footer-inner">
            <div><p className="wordmark">{t.brand} <small>Since 2004</small></p>
              <p>{t.location.address} · {phoneNumber}</p><p>{t.hoursLabel} {businessHours}</p>
            </div>
            <div className="footer-links">
              {socialLinks.map(({ href, icon: Icon }, i) => (
                <a key={href} href={href} {...externalLink} aria-label={t.social.labels[i]} title={t.social.labels[i]}><Icon /></a>
              ))}
              <a href={mapUrl} {...externalLink} aria-label={t.footer.map} title={t.footer.map}><HiOutlineMapPin /></a>
              <a href={phoneHref} aria-label={t.footer.call} title={t.footer.call}><HiOutlinePhone /></a>
            </div>
          </div>
        </footer>

        <div className="shortcuts">
          <a className="shortcut-map" href={floatingMapUrl} {...externalLink} aria-label={t.footer.map} title={t.footer.map}><HiOutlineMapPin /></a>
          <a className="shortcut-call" href={phoneHref} aria-label={`${t.floatingCall} ${phoneNumber}`} title={phoneNumber}><HiOutlinePhone /></a>
          <div className="lang-picker" ref={languagePickerRef}>
            <button className="flag-button" ref={languageButton} aria-label={`${t.language.button}: ${currentLanguage.label}`} title={t.language.button}
              aria-expanded={languageOpen} aria-controls={languageOpen ? "language-menu" : undefined} onClick={() => setLanguageOpen(open => !open)}>
              <span aria-hidden="true">{currentLanguage.flag}</span>
            </button>
            {languageOpen && (
              <div id="language-menu" className="language-menu" role="group" aria-label={t.language.menuLabel}>
                <p>{t.language.menuLabel}</p>
                {localeOptions.map(option => (
                  <button key={option.code} type="button" lang={option.code} aria-pressed={locale === option.code} onClick={() => changeLanguage(option.code)}>
                    <span aria-hidden="true">{option.flag}</span>{option.label}{locale === option.code && <HiCheck aria-hidden="true" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </MotionConfig>
    </LazyMotion>
  );
}
