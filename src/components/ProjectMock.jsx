import {
  FiBookOpen,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCode,
  FiCpu,
  FiCreditCard,
  FiMail,
  FiMapPin,
  FiPlus,
  FiShoppingCart,
  FiStar,
} from 'react-icons/fi'

// hex -> rgba string
function rgba(hex, a) {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const n = parseInt(full, 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

const labels = {
  library: 'library-app / seats',
  autogreet: 'autogreet / scheduler',
  nova: 'nova-store / shop',
  hotel: 'hotel-admin / rooms',
  shrihs: 'shri-hs-library / home',
  portfolio: 'sumitydev.vercel.app',
  food: 'food-delivery / menu',
}

function Chrome({ label }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
      <span className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </span>
      <span className="ml-1 flex-1 truncate rounded-md bg-white/[0.06] px-2 py-0.5 text-center font-mono text-[0.58rem] text-white/45">
        {label}
      </span>
    </div>
  )
}

function LibraryBody({ accent }) {
  const taken = [2, 3, 10, 15, 16, 22, 27, 29]
  const selected = 12
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[0.62rem] text-white/60">Reading Hall · Floor 2</span>
        <span
          className="rounded-full px-2 py-0.5 text-[0.56rem] font-medium"
          style={{ background: rgba(accent, 0.16), color: accent }}
        >
          24 free
        </span>
      </div>
      <div className="grid grid-cols-8 gap-1.5">
        {Array.from({ length: 32 }).map((_, i) => {
          const isSel = i === selected
          const isTaken = taken.includes(i)
          return (
            <span
              key={i}
              className="aspect-square rounded-[3px]"
              style={{
                background: isSel
                  ? accent
                  : isTaken
                    ? 'rgba(255,255,255,0.07)'
                    : 'rgba(255,255,255,0.15)',
                boxShadow: isSel ? `0 0 0 2px ${rgba(accent, 0.5)}` : 'none',
              }}
            />
          )
        })}
      </div>
      <div className="mt-auto flex items-center justify-between pt-3">
        <span className="text-[0.6rem] text-white/70">Seat A-12 selected</span>
        <span
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[0.6rem] font-semibold text-[#0a0e16]"
          style={{ background: accent }}
        >
          <FiCreditCard size={10} /> Pay ₹30
        </span>
      </div>
    </div>
  )
}

function AutogreetBody({ accent }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
        <span
          className="grid h-7 w-7 shrink-0 place-items-center rounded-md"
          style={{ background: rgba(accent, 0.16), color: accent }}
        >
          <FiMail size={13} />
        </span>
        <div className="min-w-0">
          <div className="text-[0.62rem] text-white/80">Anniversary wishes</div>
          <div className="truncate text-[0.56rem] text-white/45">To: priya@example.com</div>
        </div>
        <span
          className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full px-1.5 py-0.5 text-[0.52rem] font-medium"
          style={{ background: rgba(accent, 0.16), color: accent }}
        >
          <FiCpu size={9} /> AI
        </span>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2 text-[0.58rem] italic leading-relaxed text-white/55">
        “Wishing you a wonderful anniversary filled with joy and love…”
      </div>
      <div className="mt-auto flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-md bg-white/[0.05] px-2 py-1 text-[0.55rem] text-white/70">
          <FiClock size={10} /> 09:00 · daily
        </span>
        <span
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[0.55rem] font-medium"
          style={{ background: rgba(accent, 0.16), color: accent }}
        >
          <FiCheck size={10} /> scheduled
        </span>
      </div>
    </div>
  )
}

function NovaBody({ accent }) {
  const products = [
    ['Aero Runner', '₹2,499'],
    ['Nova Tee', '₹899'],
  ]
  return (
    <div className="flex h-full flex-col">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[0.62rem] text-white/70">New arrivals</span>
        <span className="relative inline-grid h-6 w-6 place-items-center rounded-md bg-white/[0.05] text-white/70">
          <FiShoppingCart size={12} />
          <span
            className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center rounded-full text-[0.5rem] font-bold text-[#0a0e16]"
            style={{ background: accent }}
          >
            2
          </span>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {products.map(([name, price]) => (
          <div key={name} className="rounded-lg border border-white/10 bg-white/[0.02] p-2">
            <div
              className="mb-1.5 h-9 rounded-md"
              style={{ background: `linear-gradient(135deg, ${rgba(accent, 0.42)}, ${rgba(accent, 0.08)})` }}
            />
            <div className="text-[0.58rem] text-white/80">{name}</div>
            <div className="flex items-center justify-between">
              <span className="text-[0.58rem] font-semibold" style={{ color: accent }}>
                {price}
              </span>
              <FiStar size={9} className="text-white/40" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-2">
        <span
          className="block rounded-md px-2 py-1 text-center text-[0.6rem] font-semibold text-[#0a0e16]"
          style={{ background: accent }}
        >
          Add to cart
        </span>
      </div>
    </div>
  )
}

function HotelBody({ accent }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2">
        <span
          className="grid h-8 w-10 shrink-0 place-items-center rounded-md font-mono text-[0.55rem] text-white/70"
          style={{ background: rgba(accent, 0.14) }}
        >
          301
        </span>
        <div className="min-w-0">
          <div className="text-[0.62rem] text-white/80">Deluxe Room</div>
          <div className="text-[0.55rem] text-white/45">King bed · City view</div>
        </div>
        <span className="ml-auto text-right text-[0.62rem] font-semibold" style={{ color: accent }}>
          ₹3,200
          <span className="block text-[0.48rem] font-normal text-white/40">per night</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex flex-1 items-center gap-1 rounded-md bg-white/[0.04] px-2 py-1 text-[0.54rem] text-white/70">
          <FiCalendar size={10} /> 12 – 15 Sep
        </span>
        <span
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[0.54rem] font-medium"
          style={{ background: rgba(accent, 0.16), color: accent }}
        >
          available
        </span>
      </div>
      <div className="mt-auto">
        <span
          className="block rounded-md px-2 py-1 text-center text-[0.6rem] font-semibold text-[#0a0e16]"
          style={{ background: accent }}
        >
          Reserve
        </span>
      </div>
    </div>
  )
}

function ShriHsBody({ accent }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2">
        <span
          className="grid h-7 w-7 shrink-0 place-items-center rounded-md"
          style={{ background: rgba(accent, 0.16), color: accent }}
        >
          <FiBookOpen size={13} />
        </span>
        <div className="min-w-0">
          <div className="text-[0.62rem] font-medium text-white/85">Shri HS Library</div>
          <div className="truncate text-[0.54rem] text-white/45">Study centre · Lucknow</div>
        </div>
      </div>
      <div
        className="rounded-lg p-2.5"
        style={{
          background: `linear-gradient(135deg, ${rgba(accent, 0.22)}, ${rgba(accent, 0.04)})`,
        }}
      >
        <div className="text-[0.6rem] font-semibold text-white/85">A quiet place to study</div>
        <div className="mt-1 text-[0.52rem] leading-relaxed text-white/50">
          Air-conditioned halls, Wi-Fi and daily reading slots.
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['Halls', 'Timings', 'Fees'].map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/[0.03] py-1 text-center text-[0.52rem] text-white/65"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2">
        <span className="inline-flex flex-1 items-center gap-1 rounded-md bg-white/[0.04] px-2 py-1 text-[0.52rem] text-white/65">
          <FiMapPin size={9} /> Open 7 am – 10 pm
        </span>
        <span
          className="rounded-md px-2 py-1 text-[0.55rem] font-semibold text-[#0a0e16]"
          style={{ background: accent }}
        >
          Enquire
        </span>
      </div>
    </div>
  )
}

function PortfolioBody({ accent }) {
  const rows = [
    { w: '72%', c: 0.5 },
    { w: '54%', c: 0.28 },
    { w: '84%', c: 0.36 },
  ]
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-[0.55rem] text-white/50">
          <FiCode size={9} /> sumit.js
        </span>
        <span className="flex gap-1">
          {['about', 'work'].map((t) => (
            <span
              key={t}
              className="rounded px-1.5 py-0.5 text-[0.5rem] text-white/45"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              {t}
            </span>
          ))}
        </span>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2.5">
        <div className="text-[0.68rem] font-semibold text-white/90">Sumit Yadav</div>
        <div className="text-[0.55rem]" style={{ color: accent }}>
          MERN Full Stack Developer
        </div>
        <div className="mt-2 space-y-1">
          {rows.map((r, i) => (
            <span
              key={i}
              className="block h-1 rounded-full"
              style={{ width: r.w, background: `rgba(255,255,255,${r.c * 0.25})` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-auto flex gap-1.5">
        <span
          className="flex-1 rounded-md px-2 py-1 text-center text-[0.55rem] font-semibold text-[#0a0e16]"
          style={{ background: accent }}
        >
          View projects
        </span>
        <span className="flex-1 rounded-md border border-white/15 px-2 py-1 text-center text-[0.55rem] text-white/70">
          Résumé
        </span>
      </div>
    </div>
  )
}

function FoodBody({ accent }) {
  const items = [
    ['Paneer Tikka', '₹220'],
    ['Veg Biryani', '₹180'],
  ]
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[0.62rem] text-white/70">Popular today</span>
        <span className="relative inline-grid h-6 w-6 place-items-center rounded-md bg-white/[0.05] text-white/70">
          <FiShoppingCart size={12} />
          <span
            className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center rounded-full text-[0.5rem] font-bold text-[#0a0e16]"
            style={{ background: accent }}
          >
            3
          </span>
        </span>
      </div>
      <div className="space-y-1.5">
        {items.map(([name, price]) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-1.5"
          >
            <span
              className="h-8 w-8 shrink-0 rounded-md"
              style={{
                background: `linear-gradient(135deg, ${rgba(accent, 0.45)}, ${rgba(accent, 0.1)})`,
              }}
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[0.58rem] text-white/85">{name}</div>
              <div className="text-[0.55rem] font-semibold" style={{ color: accent }}>
                {price}
              </div>
            </div>
            <span
              className="grid h-5 w-5 shrink-0 place-items-center rounded-md text-[#0a0e16]"
              style={{ background: accent }}
            >
              <FiPlus size={10} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between rounded-md bg-white/[0.04] px-2 py-1">
        <span className="text-[0.55rem] text-white/60">3 items</span>
        <span className="text-[0.58rem] font-semibold" style={{ color: accent }}>
          ₹620 · Checkout
        </span>
      </div>
    </div>
  )
}

const bodies = {
  library: LibraryBody,
  autogreet: AutogreetBody,
  nova: NovaBody,
  hotel: HotelBody,
  shrihs: ShriHsBody,
  portfolio: PortfolioBody,
  food: FoodBody,
}

/**
 * A tiny, on-brand UI mock standing in for a screenshot — themed per project.
 */
export default function ProjectMock({ type, accent }) {
  const Body = bodies[type] || LibraryBody
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b111e]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(120% 90% at 85% 0%, ${rgba(accent, 0.16)}, transparent 60%)` }}
      />
      <div className="relative flex h-full flex-col">
        <Chrome label={labels[type] || 'app'} />
        <div className="flex-1 p-3.5">
          <Body accent={accent} />
        </div>
      </div>
    </div>
  )
}
