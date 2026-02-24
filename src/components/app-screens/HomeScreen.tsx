/* ------------------------------------------------------------------ */
/*  Inline SVG icon helpers (no external deps)                        */
/* ------------------------------------------------------------------ */

function IconBell() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function IconVideo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function IconHome({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#12352D' : 'none'} stroke={active ? '#12352D' : '#6B7280'} strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconHistory({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#12352D' : '#6B7280'} strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconPrescription({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#12352D' : '#6B7280'} strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconProfile({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#12352D' : '#6B7280'} strokeWidth={active ? 2 : 1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick action grid data                                            */
/* ------------------------------------------------------------------ */

const quickActions = [
  { label: 'Teleconsultation', bg: '#D4E8F5', icon: IconVideo },
  { label: 'Cabine sante', bg: '#E5EDCC', icon: IconMapPin },
  { label: 'Ordonnances', bg: '#FDF5DC', icon: IconFileText },
  { label: 'Historique', bg: '#F2C8B4', icon: IconClipboard },
] as const;

import { BottomTabBar } from './BottomTabBar';

/* ------------------------------------------------------------------ */
/*  HomeScreen component                                              */
/* ------------------------------------------------------------------ */

export function HomeScreen() {
  return (
    <div className="w-[375px] h-[812px] bg-[#F5F0E8] flex flex-col relative overflow-hidden">
      {/* ---- Green header ---- */}
      <div className="bg-[#12352D] rounded-b-[24px] pb-8 relative z-10 shrink-0">
        {/* Status bar spacer (iPhone notch) */}
        <div className="h-[54px]" />

        {/* Top row: logo + bell */}
        <div className="flex items-center justify-between px-5 mb-5">
          <span
            className="text-white text-[13px] font-bold tracking-[0.2em]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            TESSAN
          </span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
            <IconBell />
          </button>
        </div>

        {/* Greeting */}
        <div className="px-5">
          <h1
            className="text-white text-[28px] font-bold leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Bonjour Marie{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p
            className="text-white/70 text-[14px] mt-1.5 leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Vous avez 1 rappel sant&eacute; en attente
          </p>
        </div>
      </div>

      {/* ---- Scrollable content area (overlaps header slightly) ---- */}
      <div className="flex-1 overflow-y-auto -mt-3 relative z-20 pb-24">
        <div className="px-5 flex flex-col gap-5 pt-1">
          {/* ---- Reminder card ---- */}
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <span className="inline-block px-4 py-1.5 border-2 border-dashed border-[#EDE455] rounded-full text-[12px] font-semibold text-[#12352D] tracking-wide mb-3">
              RAPPEL SANT&Eacute;
            </span>
            <h3
              className="text-[17px] font-semibold text-[#12352D] mb-1"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Bilan sanguin annuel
            </h3>
            <p
              className="text-[13px] text-[#6B7280] mb-4 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Votre dernier bilan date de plus d&apos;un an
            </p>
            <button className="w-full h-[48px] bg-[#EDE455] hover:bg-[#D4CC3A] text-[#1A1A1A] text-[14px] font-semibold rounded-xl transition-colors active:scale-[0.98] cursor-pointer">
              Prendre rendez-vous
            </button>
          </div>

          {/* ---- Quick actions section ---- */}
          <div>
            <h2
              className="text-[17px] font-semibold text-[#12352D] mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Mes actions rapides
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    className="flex flex-col items-start gap-3 rounded-2xl p-4 transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer text-left"
                    style={{ backgroundColor: action.bg }}
                  >
                    <div className="w-10 h-10 bg-white/60 rounded-xl flex items-center justify-center">
                      <Icon />
                    </div>
                    <span
                      className="text-[13px] font-semibold text-[#12352D]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {action.label === 'Teleconsultation'
                        ? 'T\u00e9l\u00e9consultation'
                        : action.label === 'Cabine sante'
                          ? 'Cabine sant\u00e9'
                          : action.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ---- Upcoming appointments section ---- */}
          <div>
            <h2
              className="text-[17px] font-semibold text-[#12352D] mb-3"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Prochains rendez-vous
            </h2>

            <div className="flex items-center gap-3.5 bg-white rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow">
              {/* Avatar / calendar icon */}
              <div className="w-11 h-11 rounded-full bg-[#F5F0E8] flex items-center justify-center shrink-0">
                <IconCalendar />
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-[15px] font-semibold text-[#12352D] truncate"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Dr. Sophie Laurent
                </p>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  T&eacute;l&eacute;consultation &middot; 15 jan. 2025
                </p>
              </div>

              <div className="shrink-0">
                <IconChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Bottom navigation bar ---- */}
      <BottomTabBar activeTab="accueil" />
    </div>
  );
}
