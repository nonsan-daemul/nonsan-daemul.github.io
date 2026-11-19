"use client";

import { AnimatePresence, m } from "framer-motion";
import { useReducedMotionPreference } from "./use-reduced-motion-preference";

const palette = {
  ink: "#0A2929",
  pine: "#123D36",
  pineLight: "#276356",
  ivory: "#F6EBD5",
  paper: "#FFF8EA",
  gold: "#E6B85C",
  orange: "#D96B45",
  coral: "#E9896A",
  sky: "#A9D5D3",
  blue: "#3D7B88",
  sea: "#1D5A69",
  deepSea: "#123F50",
  silver: "#C7D4D1",
  fishDark: "#334C4E",
  skin: "#D9A06D",
  ice: "#DDF2ED",
};

type AnimatedProps = { active: boolean };

function Person({
  x,
  y,
  scale = 1,
  shirt = palette.gold,
  facing = 1,
  seated = false,
}: {
  x: number;
  y: number;
  scale?: number;
  shirt?: string;
  facing?: 1 | -1;
  seated?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${facing * scale} ${scale})`}>
      <circle cx="0" cy="-48" r="15" fill={palette.skin} />
      <path d="M-14-39 Q0-50 14-39 L18 8 H-18Z" fill={shirt} />
      <path d="M-12-46 Q0-63 13-47" fill={palette.ink} />
      <path d={seated ? "M-10 6 L22 18 L38 18" : "M-10 7 L-14 51 M10 7 L16 51"} fill="none" stroke={palette.ink} strokeWidth="9" strokeLinecap="round" />
      <path d="M-14-28 L-31-4 M14-28 L30-7" fill="none" stroke={palette.skin} strokeWidth="8" strokeLinecap="round" />
    </g>
  );
}

function Porgy({ x, y, scale = 1, flip = false }: { x: number; y: number; scale?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
      <path d="M-64 0 L-93-30 L-91 31Z" fill={palette.fishDark} />
      <ellipse cx="-20" cy="0" rx="62" ry="43" fill="url(#trip-fish-silver)" stroke={palette.ink} strokeWidth="5" />
      <path d="M-48-34 L-37-58 L-22-40 L-5-62 L8-38 L25-55 L34-30" fill={palette.fishDark} />
      <path d="M-48-32 Q-43 0-48 32 M-24-41 Q-18 0-24 41 M2-41 Q9 0 3 39" fill="none" stroke={palette.fishDark} strokeWidth="7" opacity=".72" />
      <circle cx="22" cy="-13" r="7" fill={palette.paper} />
      <circle cx="24" cy="-13" r="3.5" fill={palette.ink} />
      <path d="M35 12 Q48 18 56 9" fill="none" stroke={palette.ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M-29 42 Q-3 59 24 38" fill={palette.fishDark} />
    </g>
  );
}

function Van({ active }: AnimatedProps) {
  return (
    <m.g
      animate={active ? { y: [0, -3, 0] } : { y: 0 }}
      transition={active ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" } : { duration: 0.15 }}
    >
      <path d="M25 12 H244 Q270 12 292 42 L319 82 V126 H0 V46 Q0 12 25 12Z" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
      <path d="M29 27 H221 V75 H23Z" fill={palette.blue} />
      <path d="M230 27 Q258 28 277 54 L291 75 H230Z" fill={palette.sky} />
      {[74, 124, 174].map((x) => <path key={x} d={`M${x} 27 V75`} stroke={palette.ink} strokeWidth="5" />)}
      {[48, 98, 148, 198].map((x) => <circle key={x} cx={x} cy="50" r="8" fill={palette.pine} opacity=".65" />)}
      <path d="M6 92 H311" stroke={palette.gold} strokeWidth="12" />
      <path d="M0 126 H319" stroke={palette.ink} strokeWidth="8" />
      {[62, 257].map((x) => (
        <g key={x}>
          <circle cx={x} cy="126" r="30" fill={palette.ink} />
          <circle cx={x} cy="126" r="14" fill={palette.silver} />
          <path d={`M${x - 11} 126 H${x + 11} M${x} 115 V137`} stroke={palette.ink} strokeWidth="4" />
        </g>
      ))}
    </m.g>
  );
}

function TrailerBoat({ empty = false }: { empty?: boolean }) {
  return (
    <g>
      <path d="M0 187 H356" stroke={palette.ink} strokeWidth="9" strokeLinecap="round" />
      <path d="M35 185 L101 118 H304 L340 185" fill="none" stroke={palette.gold} strokeWidth="8" strokeLinejoin="round" />
      {[96, 294].map((x) => (
        <g key={x}>
          <circle cx={x} cy="190" r="27" fill={palette.ink} />
          <circle cx={x} cy="190" r="12" fill={palette.silver} />
        </g>
      ))}
      {!empty && (
        <>
          <path d="M57 91 Q171 130 323 83 L292 145 H91Z" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
          <path d="M93 117 Q195 145 301 106" fill="none" stroke={palette.orange} strokeWidth="10" />
          <path d="M142 88 V36 H237 L270 91" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
          <path d="M157 49 H225 L250 87 H157Z" fill={palette.sky} stroke={palette.ink} strokeWidth="5" />
          <path d="M129 34 H249" stroke={palette.gold} strokeWidth="10" strokeLinecap="round" />
          <path d="M194 36 V2" stroke={palette.ink} strokeWidth="6" />
        </>
      )}
    </g>
  );
}

function TravelRig({
  x,
  y,
  reverse = false,
  emptyTrailer = false,
  active,
}: {
  x: number;
  y: number;
  reverse?: boolean;
  emptyTrailer?: boolean;
  active: boolean;
}) {
  return (
    <g transform={reverse ? `translate(${x + 701} ${y}) scale(-1 1)` : `translate(${x} ${y})`}>
      <g transform="translate(0 -74)"><TrailerBoat empty={emptyTrailer} /></g>
      <path d="M356 113 H382" stroke={palette.ink} strokeWidth="8" strokeLinecap="round" />
      <g transform="translate(382 0)"><Van active={active} /></g>
    </g>
  );
}

function FishingBoat({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 56 Q170 108 420 47 L373 139 H70Z" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
      <path d="M64 84 Q211 124 393 74" fill="none" stroke={palette.orange} strokeWidth="13" />
      <path d="M150 52 V-48 H291 L338 52" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
      <path d="M169-31 H276 L315 38 H169Z" fill={palette.sky} stroke={palette.ink} strokeWidth="5" />
      <path d="M136-53 H308" stroke={palette.gold} strokeWidth="12" strokeLinecap="round" />
      <path d="M231-53 V-100" stroke={palette.ink} strokeWidth="6" />
      <path d="M231-94 L264-76 L231-68Z" fill={palette.orange} />
      <path d="M29 41 V-7 H128 M349 43 V-5 H401" fill="none" stroke={palette.ink} strokeWidth="6" />
      {[46, 103, 353, 399].map((cx) => <circle key={cx} cx={cx} cy="75" r="12" fill={palette.gold} stroke={palette.ink} strokeWidth="4" />)}
    </g>
  );
}

function Shop({ x, y, evening = false }: { x: number; y: number; evening?: boolean }) {
  const glass = evening ? palette.coral : palette.sky;

  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M23 27 H363 L386 51 V315 H23Z" fill="#D9D8D0" stroke={palette.ink} strokeWidth="8" />
      <path d="M14 27 H366 V10 H390 V50 H366 V42 H14Z" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
      <path d="M350 27 H390 V315 H350Z" fill="#B8BDB7" stroke={palette.ink} strokeWidth="7" />
      <rect x="38" y="51" width="299" height="68" rx="3" fill={palette.paper} stroke={palette.ink} strokeWidth="7" />
      <path d="M49 63 H150 V106 H49Z" fill={palette.orange} />
      <path d="M158 63 H241 V106 H158Z" fill="#2F66A2" />
      <path d="M249 63 H326 V106 H249Z" fill={palette.orange} />
      <path d="M72 85 L97 70 L119 84 L96 100Z" fill={palette.paper} />
      {[69, 158, 247].map((windowX) => (
        <g key={windowX}>
          <rect x={windowX} y="137" width="70" height="55" fill={glass} stroke={palette.ink} strokeWidth="6" />
          <path d={`M${windowX + 35} 138 V192 M${windowX} 165 H${windowX + 70}`} stroke={palette.ivory} strokeWidth="4" opacity=".7" />
        </g>
      ))}
      <path d="M35 205 H340" stroke={palette.ink} strokeWidth="8" />
      <path d="M35 215 H340 L328 238 H47Z" fill={palette.blue} stroke={palette.ink} strokeWidth="6" />
      <rect x="52" y="237" width="194" height="67" fill={glass} stroke={palette.ink} strokeWidth="7" />
      <path d="M117 238 V304 M181 238 V304" stroke={palette.ivory} strokeWidth="5" opacity=".7" />
      <rect x="265" y="237" width="61" height="78" fill={palette.pineLight} stroke={palette.ink} strokeWidth="7" />
      <circle cx="314" cy="277" r="5" fill={palette.gold} />
      {[78, 166, 254, 328].map((lightX) => <path key={lightX} d={`M${lightX} 50 V33 H${lightX + 10} V50`} fill="none" stroke={palette.ink} strokeWidth="4" />)}
      <path d="M0 315 H403" stroke={palette.ink} strokeWidth="10" strokeLinecap="round" />
    </g>
  );
}

function Waves({ active, y = 555, color = palette.ivory }: AnimatedProps & { y?: number; color?: string }) {
  return (
    <m.g
      animate={active ? { x: [-12, 12, -12] } : { x: 0 }}
      transition={active ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}
      opacity=".75"
    >
      {[0, 54, 108].map((offset) => (
        <path key={offset} d={`M-40 ${y + offset} Q80 ${y - 20 + offset} 200 ${y + offset} T440 ${y + offset} T680 ${y + offset} T920 ${y + offset} T1160 ${y + offset} T1400 ${y + offset}`} fill="none" stroke={color} strokeWidth={offset === 0 ? 7 : 5} strokeLinecap="round" />
      ))}
    </m.g>
  );
}

function Road({ sunset = false }: { sunset?: boolean }) {
  return (
    <>
      <path d="M0 520 Q400 474 1280 534 V720 H0Z" fill={sunset ? "#6F5548" : "#66736A"} />
      <path d="M0 584 Q390 532 1280 588" fill="none" stroke={palette.ivory} strokeWidth="13" strokeDasharray="88 58" opacity=".85" />
      <path d="M0 498 Q385 451 1280 511" fill="none" stroke={palette.gold} strokeWidth="8" />
    </>
  );
}

function Plate({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const slices = [-72, -48, -24, 0, 24, 48, 72];
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse rx="116" ry="56" fill={palette.paper} stroke={palette.ink} strokeWidth="7" />
      <ellipse rx="96" ry="39" fill={palette.ice} opacity=".7" />
      {slices.map((dx, index) => (
        <g key={dx} transform={`translate(${dx} ${index % 2 ? 7 : -2}) rotate(${dx / 4})`}>
          <rect x="-17" y="-9" width="36" height="18" rx="8" fill={index % 2 ? "#FFF3D8" : palette.ivory} stroke={palette.silver} strokeWidth="3" />
          <path d="M-10-3 H11" stroke={palette.paper} strokeWidth="3" opacity=".85" />
        </g>
      ))}
      <circle cx="0" cy="0" r="10" fill={palette.gold} />
    </g>
  );
}

function SlicingBoard({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-82" y="-33" width="164" height="70" rx="13" fill="#B8844F" stroke={palette.ink} strokeWidth="7" />
      <path d="M-55-7 Q-21-28 25-5 Q7 20-47 17Z" fill={palette.ivory} stroke={palette.silver} strokeWidth="4" />
      <path d="M-36-5 Q-14 4 8-4" fill="none" stroke={palette.paper} strokeWidth="5" />
      <path d="M10-36 L63-7 L54 4 L2-27Z" fill={palette.silver} stroke={palette.ink} strokeWidth="4" />
      <path d="M2-27 L-25-45" stroke={palette.pine} strokeWidth="12" strokeLinecap="round" />
      <circle cx="-30" cy="-49" r="11" fill={palette.skin} />
      <path d="M-36-58 L-62-82" stroke={palette.skin} strokeWidth="12" strokeLinecap="round" />
    </g>
  );
}

function Cooler({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 25 H160 L144 118 H15Z" fill={palette.ivory} stroke={palette.ink} strokeWidth="7" />
      <path d="M-4 24 Q80-18 164 24" fill={palette.sky} stroke={palette.ink} strokeWidth="7" />
      {[31, 65, 102, 136].map((cx) => <circle key={cx} cx={cx} cy="28" r="13" fill={palette.ice} opacity=".9" />)}
      <g transform="translate(88 39) scale(.55)"><Porgy x={0} y={0} scale={1} /></g>
      <path d="M15 76 H145" stroke={palette.gold} strokeWidth="7" />
    </g>
  );
}

function SceneZero({ active }: AnimatedProps) {
  return (
    <>
      <rect width="1280" height="720" fill="url(#trip-sky-day)" />
      <circle cx="1086" cy="118" r="62" fill={palette.gold} opacity=".75" />
      <path d="M0 421 Q170 267 344 395 T675 387 T1002 404 T1280 370 V541 H0Z" fill={palette.pineLight} opacity=".45" />
      <path d="M0 462 Q198 349 388 448 T750 445 T1100 453 T1280 417 V548 H0Z" fill={palette.pine} opacity=".84" />
      <Shop x={56} y={194} />
      <Road />
      <m.g animate={active ? { x: [0, 100] } : { x: 0 }} transition={active ? { duration: 6.2, ease: "easeInOut" } : { duration: 0.2 }}>
        <TravelRig x={460} y={447} active={active} />
      </m.g>
      <path d="M452 468 Q485 458 516 469" stroke={palette.ivory} strokeWidth="8" strokeLinecap="round" opacity=".7" />
    </>
  );
}

function SceneOne({ active }: AnimatedProps) {
  return (
    <>
      <rect width="1280" height="720" fill="url(#trip-sky-day)" />
      <circle cx="1120" cy="112" r="54" fill={palette.gold} opacity=".7" />
      <path d="M0 392 Q190 271 389 386 T771 374 T1135 390 T1280 360 V501 H0Z" fill={palette.pine} opacity=".65" />
      <rect y="438" width="1280" height="282" fill={palette.sea} />
      <Waves active={active} y={494} />
      <path d="M0 419 H447 V612 H0Z" fill="#8C8879" stroke={palette.ink} strokeWidth="8" />
      <path d="M418 440 L593 549 L570 574 L404 480Z" fill={palette.gold} stroke={palette.ink} strokeWidth="7" />
      <g transform="scale(.72)"><TravelRig x={-242} y={572} active={false} emptyTrailer /></g>
      <m.g animate={active ? { y: [0, -5, 0], rotate: [-0.4, 0.4, -0.4] } : { y: 0, rotate: 0 }} transition={active ? { duration: 3.2, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }} style={{ transformOrigin: "820px 520px" }}>
        <FishingBoat x={580} y={478} scale={1.22} />
      </m.g>
      <Person x={428} y={440} scale={.92} shirt={palette.orange} facing={1} />
      <m.g
        animate={active ? { x: [-70, 0], y: [-52, 0] } : { x: 0, y: 0 }}
        transition={active ? { duration: 4.8, delay: .45, ease: "easeInOut" } : { duration: 0.2 }}
      >
        <Person x={500} y={493} scale={.88} shirt={palette.ivory} facing={1} />
      </m.g>
      <Person x={596} y={500} scale={.85} shirt={palette.gold} facing={1} />
      <Person x={1071} y={472} scale={.78} shirt={palette.pineLight} facing={-1} />
      <m.path d="M118 341 Q148 319 178 341 Q207 313 238 338" fill="none" stroke={palette.ivory} strokeWidth="7" strokeLinecap="round" animate={active ? { y: [0, -4, 0] } : { y: 0 }} transition={active ? { duration: 2.8, repeat: Infinity } : { duration: 0.2 }} />
    </>
  );
}

function SceneTwo({ active }: AnimatedProps) {
  return (
    <>
      <rect width="1280" height="720" fill="url(#trip-sky-open)" />
      <circle cx="1026" cy="110" r="58" fill={palette.gold} opacity=".72" />
      <path d="M0 372 Q250 337 478 378 T934 367 T1280 377 V720 H0Z" fill={palette.deepSea} />
      <Waves active={active} y={430} color={palette.sky} />
      <m.g animate={active ? { y: [0, -7, 0], rotate: [-.5, .5, -.5] } : { y: 0, rotate: 0 }} transition={active ? { duration: 3.3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }} style={{ transformOrigin: "640px 510px" }}>
        <FishingBoat x={345} y={398} scale={1.4} />
        <Person x={413} y={430} scale={.9} shirt={palette.gold} facing={1} />
        <Person x={885} y={433} scale={.9} shirt={palette.orange} facing={-1} />
        <Person x={535} y={435} scale={.8} shirt={palette.pineLight} facing={1} />
        <path d="M443 423 Q367 190 240 157" fill="none" stroke={palette.ink} strokeWidth="7" strokeLinecap="round" />
        <m.path
          d="M240 157 Q236 266 301 325"
          fill="none"
          stroke={palette.ivory}
          strokeWidth="3"
          animate={active ? { d: ["M240 157 Q236 316 301 397", "M240 157 Q236 266 301 325"] } : { d: "M240 157 Q236 266 301 325" }}
          transition={active ? { duration: 3.3, delay: 1.15, ease: "easeOut" } : { duration: 0.15 }}
        />
        <path d="M855 426 Q951 202 1059 183" fill="none" stroke={palette.ink} strokeWidth="7" strokeLinecap="round" />
        <m.path
          d="M1059 183 Q1068 261 1015 337"
          fill="none"
          stroke={palette.ivory}
          strokeWidth="3"
          animate={active ? { d: ["M1059 183 Q1068 303 1015 393", "M1059 183 Q1068 261 1015 337"] } : { d: "M1059 183 Q1068 261 1015 337" }}
          transition={active ? { duration: 3.1, delay: 2.05, ease: "easeOut" } : { duration: 0.15 }}
        />
        <circle cx="437" cy="416" r="10" fill={palette.gold} stroke={palette.ink} strokeWidth="4" />
        <circle cx="861" cy="419" r="10" fill={palette.gold} stroke={palette.ink} strokeWidth="4" />
        <path d="M400 409 H426 M872 412 H898 M523 414 H547" stroke={palette.ivory} strokeWidth="7" strokeLinecap="round" />
        <path d="M389 449 V411 M932 451 V412" stroke={palette.ink} strokeWidth="7" strokeLinecap="round" />
        <m.g
          animate={active ? { y: [72, 0], rotate: [-8, 2] } : { y: 0, rotate: 0 }}
          transition={active ? { duration: 3.3, delay: 1.15, ease: "easeOut" } : { duration: 0.15 }}
          style={{ transformOrigin: "270px 320px" }}
        >
          <Porgy x={270} y={320} scale={.55} />
        </m.g>
        <m.g
          animate={active ? { y: [56, 0], rotate: [7, -2] } : { y: 0, rotate: 0 }}
          transition={active ? { duration: 3.1, delay: 2.05, ease: "easeOut" } : { duration: 0.15 }}
          style={{ transformOrigin: "1042px 333px" }}
        >
          <Porgy x={1042} y={333} scale={.48} flip />
        </m.g>
      </m.g>
      <path d="M154 205 Q184 173 218 204 M1110 234 Q1142 204 1174 233" fill="none" stroke={palette.ivory} strokeWidth="7" strokeLinecap="round" />
    </>
  );
}

function SceneThree({ active }: AnimatedProps) {
  return (
    <>
      <rect width="1280" height="720" fill="url(#trip-sky-day)" />
      <rect y="345" width="1280" height="375" fill={palette.sea} />
      <Waves active={active} y={398} />
      <path d="M70 548 Q629 669 1200 540 L1115 720 H159Z" fill={palette.ivory} stroke={palette.ink} strokeWidth="10" />
      <path d="M130 529 V236 M1152 529 V236 M120 245 H1160" fill="none" stroke={palette.ink} strokeWidth="12" />
      <path d="M150 243 Q640 162 1127 243 L1058 318 H218Z" fill={palette.gold} opacity=".92" />
      <Person x={307} y={434} scale={1.18} shirt={palette.orange} facing={1} seated />
      <Person x={966} y={437} scale={1.18} shirt={palette.pineLight} facing={-1} seated />
      <Person x={438} y={382} scale={.96} shirt={palette.gold} facing={1} />
      <Person x={846} y={384} scale={.96} shirt={palette.ivory} facing={-1} />
      <m.g animate={active ? { y: [0, -3, 0] } : { y: 0 }} transition={active ? { duration: 2.4, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}>
        <Plate x={640} y={505} scale={1.38} />
      </m.g>
      <SlicingBoard x={866} y={533} scale={.9} />
      <path d="M468 432 L555 486 M811 432 L726 486" stroke={palette.skin} strokeWidth="13" strokeLinecap="round" />
      <path d="M475 425 L572 493 M804 425 L709 493" stroke={palette.ink} strokeWidth="4" strokeLinecap="round" />
      <g transform="translate(1054 478)"><Porgy x={0} y={0} scale={.45} flip /></g>
      <path d="M1022 525 Q1053 539 1087 523" fill="none" stroke={palette.gold} strokeWidth="7" />
    </>
  );
}

function SceneFour({ active }: AnimatedProps) {
  return (
    <>
      <rect width="1280" height="720" fill="url(#trip-sky-sunset)" />
      <circle cx="204" cy="218" r="82" fill={palette.gold} opacity=".92" />
      <path d="M0 414 Q183 312 371 407 T754 399 T1110 409 T1280 382 V533 H0Z" fill={palette.pine} opacity=".8" />
      <path d="M0 456 Q180 378 361 451 T713 445 T1052 453 T1280 422 V543 H0Z" fill={palette.ink} opacity=".78" />
      <g transform="translate(34 223) scale(.66)"><Shop x={0} y={0} evening /></g>
      <Road sunset />
      <m.g animate={active ? { x: [0, -100] } : { x: 0 }} transition={active ? { duration: 6.2, ease: "easeInOut" } : { duration: 0.2 }}>
        <TravelRig x={474} y={451} reverse active={active} />
      </m.g>
      <path d="M1044 464 Q1080 454 1112 467" stroke={palette.ivory} strokeWidth="8" strokeLinecap="round" opacity=".55" />
      <path d="M996 101 Q1029 70 1062 102 M1092 142 Q1122 114 1155 143" fill="none" stroke={palette.pine} strokeWidth="8" strokeLinecap="round" opacity=".7" />
    </>
  );
}

function SceneFive({ active }: AnimatedProps) {
  return (
    <>
      <rect width="1280" height="720" fill="url(#trip-sky-evening)" />
      <circle cx="1094" cy="126" r="59" fill={palette.gold} opacity=".66" />
      <path d="M0 447 Q246 326 469 434 T925 430 T1280 408 V720 H0Z" fill={palette.pine} opacity=".38" />
      <Shop x={782} y={248} evening />
      <path d="M0 571 Q423 523 1280 573 V720 H0Z" fill="#767064" />
      <g transform="translate(48 439) scale(.64)"><Van active={false} /></g>
      <Person x={520} y={493} scale={1.06} shirt={palette.gold} facing={1} />
      <Person x={689} y={492} scale={1.06} shirt={palette.orange} facing={-1} />
      <Person x={371} y={505} scale={.94} shirt={palette.ivory} facing={1} />
      <m.g animate={active ? { y: [0, -4, 0] } : { y: 0 }} transition={active ? { duration: 2.3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.2 }}>
        <Cooler x={390} y={548} scale={.9} />
      </m.g>
      <m.g animate={active ? { x: [54, -74] } : { x: 0 }} transition={active ? { duration: 4.6, delay: .8, ease: "easeInOut" } : { duration: 0.2 }}>
        <Plate x={627} y={566} scale={.78} />
      </m.g>
      <path d="M492 478 L553 547 M716 478 L682 545" stroke={palette.skin} strokeWidth="13" strokeLinecap="round" />
      <path d="M554 546 Q617 517 681 544" fill="none" stroke={palette.ink} strokeWidth="5" />
      <m.path d="M862 392 Q882 377 902 392 Q921 374 943 391" fill="none" stroke={palette.paper} strokeWidth="6" strokeLinecap="round" animate={active ? { y: [0, -3, 0] } : { y: 0 }} transition={active ? { duration: 2.6, repeat: Infinity } : { duration: 0.2 }} />
    </>
  );
}

function Scene({ phase, active }: { phase: number; active: boolean }) {
  switch (phase) {
    case 1:
      return <SceneOne active={active} />;
    case 2:
      return <SceneTwo active={active} />;
    case 3:
      return <SceneThree active={active} />;
    case 4:
      return <SceneFour active={active} />;
    case 5:
      return <SceneFive active={active} />;
    default:
      return <SceneZero active={active} />;
  }
}

export default function TripIllustration({ phase, playing }: { phase: number; playing: boolean }) {
  const reduceMotion = useReducedMotionPreference();
  const currentPhase = Math.max(0, Math.min(5, Math.trunc(phase)));
  const active = playing && !reduceMotion;

  return (
    <svg
      viewBox="0 0 1280 720"
      width="1280"
      height="720"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      <defs>
        <linearGradient id="trip-sky-day" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.paper} />
          <stop offset="1" stopColor={palette.sky} />
        </linearGradient>
        <linearGradient id="trip-sky-open" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EAF1E7" />
          <stop offset="1" stopColor="#75B7C2" />
        </linearGradient>
        <linearGradient id="trip-sky-sunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#355E68" />
          <stop offset=".55" stopColor={palette.coral} />
          <stop offset="1" stopColor={palette.gold} />
        </linearGradient>
        <linearGradient id="trip-sky-evening" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#214E56" />
          <stop offset=".7" stopColor="#DA8B69" />
          <stop offset="1" stopColor={palette.ivory} />
        </linearGradient>
        <linearGradient id="trip-fish-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={palette.paper} />
          <stop offset=".48" stopColor={palette.silver} />
          <stop offset="1" stopColor={palette.blue} />
        </linearGradient>
        <clipPath id="trip-frame"><rect width="1280" height="720" rx="34" /></clipPath>
        <filter id="trip-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="18" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <g clipPath="url(#trip-frame)">
        <AnimatePresence initial={false} mode="sync">
          <m.g
            key={currentPhase}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: active ? .35 : 0 }}
          >
            <Scene phase={currentPhase} active={active} />
          </m.g>
        </AnimatePresence>
        <rect width="1280" height="720" filter="url(#trip-grain)" opacity=".055" style={{ pointerEvents: "none", mixBlendMode: "multiply" }} />
        <rect x="4" y="4" width="1272" height="712" rx="30" fill="none" stroke={palette.ivory} strokeWidth="8" opacity=".55" />
      </g>
    </svg>
  );
}
