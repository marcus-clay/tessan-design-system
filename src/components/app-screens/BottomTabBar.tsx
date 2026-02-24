/**
 * BottomTabBar — Unified iOS-style tab bar component.
 *
 * 5 tabs: Accueil · Historique · Consulter (floating CTA) · Ordonnances · Profil
 * Follows Apple HIG: SF-Symbol-style icons, tinted active state,
 * translucent backdrop, safe-area padding.
 */

export type TabId = 'accueil' | 'historique' | 'consulter' | 'ordonnances' | 'profil';

interface BottomTabBarProps {
  activeTab: TabId;
}

/* ─── Icon paths (Lucide-compatible, 24×24 viewBox) ────────── */

function IconAccueil({ active }: { active: boolean }) {
  const color = active ? '#1B7A68' : '#9CA3AF';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      {!active && <polyline points="9 22 9 12 15 12 15 22" />}
    </svg>
  );
}

function IconHistorique({ active }: { active: boolean }) {
  const color = active ? '#1B7A68' : '#9CA3AF';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconConsulter() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconOrdonnances({ active }: { active: boolean }) {
  const color = active ? '#1B7A68' : '#9CA3AF';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconProfil({ active }: { active: boolean }) {
  const color = active ? '#1B7A68' : '#9CA3AF';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={active ? '2' : '1.8'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

/* ─── Component ────────────────────────────────────────────── */

export function BottomTabBar({ activeTab }: BottomTabBarProps) {
  const inactiveText = 'text-[10px] text-[#9CA3AF]';
  const activeText = 'text-[10px] font-semibold text-[#1B7A68]';

  return (
    <div
      className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] z-30"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="flex items-end justify-around px-1 pt-2 pb-7">
        {/* Accueil */}
        <button className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-[52px]" type="button">
          <IconAccueil active={activeTab === 'accueil'} />
          <span className={activeTab === 'accueil' ? activeText : inactiveText}>Accueil</span>
        </button>

        {/* Historique */}
        <button className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-[52px]" type="button">
          <IconHistorique active={activeTab === 'historique'} />
          <span className={activeTab === 'historique' ? activeText : inactiveText}>Historique</span>
        </button>

        {/* Consulter — floating CTA */}
        <button className="flex flex-col items-center gap-0.5 px-2 min-w-[52px]" type="button">
          <div className="w-12 h-12 -mt-4 rounded-full bg-[#EDE455] flex items-center justify-center shadow-[0_4px_16px_rgba(237,228,85,0.35)]">
            <IconConsulter />
          </div>
          <span className="text-[10px] text-[#9CA3AF] -mt-0.5">Consulter</span>
        </button>

        {/* Ordonnances */}
        <button className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-[52px]" type="button">
          <IconOrdonnances active={activeTab === 'ordonnances'} />
          <span className={activeTab === 'ordonnances' ? activeText : inactiveText}>Ordonnances</span>
        </button>

        {/* Profil */}
        <button className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-[52px]" type="button">
          <IconProfil active={activeTab === 'profil'} />
          <span className={activeTab === 'profil' ? activeText : inactiveText}>Profil</span>
        </button>
      </div>
    </div>
  );
}
