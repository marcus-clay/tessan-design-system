import { useState, useCallback, useRef, useEffect } from 'react';

// Lazy-import all screens
import { SplashScreen } from './SplashScreen';
import { HomeScreen } from './HomeScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { ReminderDetailScreen } from './ReminderDetailScreen';
import { BookingConfirmationScreen } from './BookingConfirmationScreen';
import { CalendarEventScreen } from './CalendarEventScreen';
import { TeleconsultationScreen } from './TeleconsultationScreen';
import { VideoCallScreen } from './VideoCallScreen';
import { NotesModalScreen } from './NotesModalScreen';
import { OrdonnanceModalScreen } from './OrdonnanceModalScreen';
import { CabinSearchScreen } from './CabinSearchScreen';
import { MapModalScreen } from './MapModalScreen';
import { HistoryScreen } from './HistoryScreen';
import { ConsultationDetailScreen } from './ConsultationDetailScreen';
import { OrdonnancesScreen } from './OrdonnancesScreen';
import { ProfileScreen } from './ProfileScreen';
import { SettingsScreen } from './SettingsScreen';
import { PersonalDataScreen } from './PersonalDataScreen';
import { ConsentsScreen } from './ConsentsScreen';
import { HelpCenterScreen } from './HelpCenterScreen';
import { AboutScreen } from './AboutScreen';

/* ─── Screen registry ──────────────────────────────────────── */

type ScreenId =
  | 'splash' | 'home' | 'notifications'
  | 'reminder-detail' | 'booking-confirmation' | 'calendar-event'
  | 'teleconsultation' | 'video-call' | 'notes-modal' | 'ordonnance-modal'
  | 'cabin-search' | 'map-modal'
  | 'history' | 'consultation-detail' | 'ordonnances'
  | 'profile' | 'settings' | 'personal-data' | 'consents' | 'help-center' | 'about';

interface ScreenDef {
  id: ScreenId;
  label: string;
  component: React.ComponentType;
  flow: string;
}

const screens: ScreenDef[] = [
  { id: 'splash', label: 'Splash', component: SplashScreen, flow: 'Accueil' },
  { id: 'home', label: 'Home', component: HomeScreen, flow: 'Accueil' },
  { id: 'notifications', label: 'Notifications', component: NotificationsScreen, flow: 'Accueil' },
  { id: 'reminder-detail', label: 'Rappel santé', component: ReminderDetailScreen, flow: 'Prévention' },
  { id: 'booking-confirmation', label: 'Confirmation', component: BookingConfirmationScreen, flow: 'Prévention' },
  { id: 'calendar-event', label: 'Mon agenda', component: CalendarEventScreen, flow: 'Prévention' },
  { id: 'teleconsultation', label: 'Téléconsultation', component: TeleconsultationScreen, flow: 'Téléconsultation' },
  { id: 'video-call', label: 'Appel vidéo', component: VideoCallScreen, flow: 'Téléconsultation' },
  { id: 'notes-modal', label: 'Notes médecin', component: NotesModalScreen, flow: 'Téléconsultation' },
  { id: 'ordonnance-modal', label: 'Ordonnance', component: OrdonnanceModalScreen, flow: 'Téléconsultation' },
  { id: 'cabin-search', label: 'Recherche cabine', component: CabinSearchScreen, flow: 'Cabine Santé' },
  { id: 'map-modal', label: 'Carte', component: MapModalScreen, flow: 'Cabine Santé' },
  { id: 'history', label: 'Historique', component: HistoryScreen, flow: 'Historique' },
  { id: 'consultation-detail', label: 'Détail consultation', component: ConsultationDetailScreen, flow: 'Historique' },
  { id: 'ordonnances', label: 'Ordonnances', component: OrdonnancesScreen, flow: 'Historique' },
  { id: 'profile', label: 'Profil', component: ProfileScreen, flow: 'Profil' },
  { id: 'settings', label: 'Paramètres', component: SettingsScreen, flow: 'Profil' },
  { id: 'personal-data', label: 'Données perso.', component: PersonalDataScreen, flow: 'Profil' },
  { id: 'consents', label: 'Consentements', component: ConsentsScreen, flow: 'Profil' },
  { id: 'help-center', label: 'Centre d\'aide', component: HelpCenterScreen, flow: 'Profil' },
  { id: 'about', label: 'À propos', component: AboutScreen, flow: 'Profil' },
];

/* ─── Navigation mapping ───────────────────────────────────── */
// Defines what each clickable area navigates to
const navigationMap: Record<string, Record<string, ScreenId>> = {
  splash: { _tap: 'home' },
  home: {
    'Prendre rendez-vous': 'reminder-detail',
    'Téléconsultation': 'teleconsultation',
    'Cabine santé': 'cabin-search',
    'Ordonnances': 'ordonnances',
    'Historique': 'history',
    'Dr. Sophie Laurent': 'consultation-detail',
    _bell: 'notifications',
    _tab_accueil: 'home',
    _tab_historique: 'history',
    _tab_ordonnances: 'ordonnances',
    _tab_profil: 'profile',
  },
  notifications: { _back: 'home' },
  'reminder-detail': { _back: 'home', 'Prendre rendez-vous': 'booking-confirmation' },
  'booking-confirmation': { _back: 'reminder-detail', 'Retour': 'home', 'Ajouter au calendrier': 'calendar-event' },
  'calendar-event': { _back: 'home' },
  teleconsultation: { _back: 'home', 'Démarrer': 'video-call' },
  'video-call': { _end: 'notes-modal' },
  'notes-modal': { 'Fermer': 'ordonnance-modal' },
  'ordonnance-modal': { 'Envoyer': 'home' },
  'cabin-search': { _back: 'home', 'Voir sur la carte': 'map-modal', 'Y aller': 'map-modal' },
  'map-modal': { _back: 'cabin-search', 'Itinéraire': 'home' },
  history: {
    _back: 'home',
    'Dr. Sophie Laurent': 'consultation-detail',
    'Centre Santé': 'consultation-detail',
    _tab_accueil: 'home',
    _tab_historique: 'history',
    _tab_ordonnances: 'ordonnances',
    _tab_profil: 'profile',
  },
  'consultation-detail': { _back: 'history', 'Prendre un nouveau': 'teleconsultation', 'Ordonnance': 'ordonnance-modal', 'Compte-rendu': 'notes-modal' },
  ordonnances: {
    _back: 'home',
    _tab_accueil: 'home',
    _tab_historique: 'history',
    _tab_ordonnances: 'ordonnances',
    _tab_profil: 'profile',
  },
  profile: {
    _tab_accueil: 'home',
    _tab_historique: 'history',
    _tab_ordonnances: 'ordonnances',
    _tab_profil: 'profile',
    'Données personnelles': 'personal-data',
    'Consentements': 'consents',
    'Paramètres': 'settings',
    'Centre d\'aide': 'help-center',
    'À propos': 'about',
  },
  settings: { _back: 'profile' },
  'personal-data': { _back: 'profile' },
  consents: { _back: 'profile' },
  'help-center': { _back: 'profile' },
  about: { _back: 'profile' },
};

const flows = [...new Set(screens.map(s => s.flow))];

/* ─── Haptic / feedback simulation ─────────────────────────── */

function triggerFeedback(el: HTMLElement) {
  // Visual ripple
  const ripple = document.createElement('div');
  const rect = el.getBoundingClientRect();
  ripple.style.cssText = `
    position: fixed; top: ${rect.top}px; left: ${rect.left}px;
    width: ${rect.width}px; height: ${rect.height}px;
    background: rgba(18,53,45,0.08); border-radius: 12px;
    pointer-events: none; z-index: 9999;
    animation: rippleFade 0.4s ease-out forwards;
  `;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 400);
}

/* ─── Component ────────────────────────────────────────────── */

export function PrototypeViewer() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [focusMode, setFocusMode] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [history, setHistory] = useState<ScreenId[]>(['home']);
  const [toast, setToast] = useState<string | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout>>();

  const currentDef = screens.find(s => s.id === currentScreen)!;
  const Screen = currentDef.component;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 2000);
  }, []);

  const navigateTo = useCallback((target: ScreenId, dir: 'forward' | 'back' = 'forward') => {
    if (transitioning || target === currentScreen) return;
    setDirection(dir);
    setTransitioning(true);

    const targetDef = screens.find(s => s.id === target);
    showToast(`→ ${targetDef?.label || target}`);

    setTimeout(() => {
      setCurrentScreen(target);
      setHistory(prev => dir === 'back' ? prev.slice(0, -1) : [...prev, target]);
      if (screenRef.current) screenRef.current.scrollTop = 0;
      setTimeout(() => setTransitioning(false), 300);
    }, 150);
  }, [transitioning, currentScreen, showToast]);

  // Click handler for interactive elements inside the phone
  const handleScreenClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const clickable = target.closest('button, a, [role="button"]') as HTMLElement | null;
    if (!clickable) return;

    const text = clickable.textContent?.trim() || '';
    const navMap = navigationMap[currentScreen] || {};

    // Check for back button (chevron left)
    const svg = clickable.querySelector('svg');
    const polyline = svg?.querySelector('polyline');
    const isBackButton = polyline?.getAttribute('points')?.includes('15 18 9 12 15 6') ||
                         polyline?.getAttribute('points')?.includes('15 6 9 12 15 18');

    if (isBackButton && navMap._back) {
      triggerFeedback(clickable);
      navigateTo(navMap._back, 'back');
      return;
    }

    // Check tab bar
    if (text.includes('Accueil') && navMap._tab_accueil) { triggerFeedback(clickable); navigateTo(navMap._tab_accueil); return; }
    if (text.includes('Historique') && navMap._tab_historique) { triggerFeedback(clickable); navigateTo(navMap._tab_historique); return; }
    if (text.includes('Ordonnances') && navMap._tab_ordonnances) { triggerFeedback(clickable); navigateTo(navMap._tab_ordonnances); return; }
    if (text.includes('Profil') && navMap._tab_profil) { triggerFeedback(clickable); navigateTo(navMap._tab_profil); return; }

    // Notification bell
    const hasBellPath = clickable.querySelector('path[d*="18 8A6"]');
    if (hasBellPath && navMap._bell) { triggerFeedback(clickable); navigateTo(navMap._bell); return; }

    // Splash tap
    if (currentScreen === 'splash') { triggerFeedback(clickable); navigateTo('home'); return; }

    // End call button (red bg)
    if (clickable.className?.includes?.('DC2626') || clickable.style?.backgroundColor === '#DC2626' || clickable.className?.includes?.('bg-[#DC2626]')) {
      if (navMap._end) { triggerFeedback(clickable); navigateTo(navMap._end); return; }
    }

    // Text-based navigation
    for (const [key, dest] of Object.entries(navMap)) {
      if (key.startsWith('_')) continue;
      if (text.includes(key) || text.toLowerCase().includes(key.toLowerCase())) {
        triggerFeedback(clickable);
        navigateTo(dest);
        return;
      }
    }

    // Generic feedback for unhandled clicks
    triggerFeedback(clickable);
  }, [currentScreen, navigateTo]);

  // Handle splash auto-tap (click anywhere)
  const handleSplashClick = useCallback(() => {
    if (currentScreen === 'splash' && !transitioning) {
      navigateTo('home');
    }
  }, [currentScreen, transitioning, navigateTo]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && focusMode) {
        setFocusMode(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [focusMode]);

  const phoneScale = focusMode ? 'scale-[1.15]' : 'scale-100';

  return (
    <>
      {/* CSS for animations */}
      <style>{`
        @keyframes rippleFade {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.05); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .screen-enter-forward { animation: slideInRight 0.3s ease-out; }
        .screen-enter-back { animation: slideInLeft 0.3s ease-out; }
        .toast-enter { animation: toastIn 0.2s ease-out; }
      `}</style>

      <div className={`flex flex-col items-center transition-all duration-500 ${focusMode ? 'fixed inset-0 z-[100] bg-black/95 justify-center' : ''}`}>
        {/* Focus mode overlay close */}
        {focusMode && (
          <button
            onClick={() => setFocusMode(false)}
            className="absolute top-6 right-6 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        )}

        {/* Screen selector bar (non-focus) */}
        {!focusMode && (
          <div className="mb-6 w-full max-w-3xl">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              {flows.map(flow => {
                const flowScreens = screens.filter(s => s.flow === flow);
                const isActiveFlow = flowScreens.some(s => s.id === currentScreen);
                return (
                  <div key={flow} className="flex items-center gap-1">
                    <span className={`text-[10px] uppercase tracking-wider font-semibold ${isActiveFlow ? 'text-[#EDE455]' : 'text-white/30'}`}>
                      {flow}
                    </span>
                    <div className="flex gap-1">
                      {flowScreens.map(s => (
                        <button
                          key={s.id}
                          onClick={() => navigateTo(s.id, screens.indexOf(s) < screens.findIndex(x => x.id === currentScreen) ? 'back' : 'forward')}
                          className={`px-2 py-1 text-[11px] rounded transition-all cursor-pointer ${
                            s.id === currentScreen
                              ? 'bg-[#EDE455] text-[#12352D] font-semibold'
                              : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Focus toggle + current screen label */}
        <div className={`flex items-center gap-3 ${focusMode ? 'absolute top-6 left-6 z-[110]' : 'mb-4'}`}>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${focusMode ? 'bg-white/10 text-white/60' : 'bg-white/10 text-white/70'}`}>
            {currentDef.flow} — {currentDef.label}
          </span>
          <button
            onClick={() => setFocusMode(!focusMode)}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full transition-all cursor-pointer border ${
              focusMode
                ? 'bg-[#EDE455]/20 text-[#EDE455] border-[#EDE455]/30'
                : 'bg-white/5 text-white/50 hover:text-white/70 border-white/10 hover:border-white/20'
            }`}
          >
            {focusMode ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            )}
            {focusMode ? 'Quitter' : 'Mode focus'}
          </button>
        </div>

        {/* Phone frame */}
        <div
          className={`relative transition-transform duration-500 ease-out ${phoneScale}`}
          onClick={currentScreen === 'splash' ? handleSplashClick : undefined}
        >
          <div className="w-[395px] h-[852px] bg-[#1a1a1a] rounded-[50px] p-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[126px] h-[36px] bg-black rounded-full z-50" />
            <div
              ref={screenRef}
              className="w-[375px] h-[832px] bg-white rounded-[40px] overflow-hidden overflow-y-auto relative"
              style={{ scrollbarWidth: 'none' }}
              onClick={handleScreenClick}
            >
              <div
                key={currentScreen}
                className={transitioning ? '' : direction === 'forward' ? 'screen-enter-forward' : 'screen-enter-back'}
              >
                <Screen />
              </div>
            </div>
          </div>

          {/* Navigation toast */}
          {toast && (
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 toast-enter">
              <div className="px-4 py-2 bg-[#12352D] text-white text-xs font-medium rounded-full shadow-lg whitespace-nowrap">
                {toast}
              </div>
            </div>
          )}
        </div>

        {/* Quick nav arrows (focus mode) */}
        {focusMode && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[110]">
            <button
              onClick={() => {
                const idx = screens.findIndex(s => s.id === currentScreen);
                if (idx > 0) navigateTo(screens[idx - 1].id, 'back');
              }}
              disabled={screens.findIndex(s => s.id === currentScreen) === 0}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white/80 text-sm rounded-lg transition-colors cursor-pointer disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              Précédent
            </button>
            <span className="text-white/30 text-xs">
              {screens.findIndex(s => s.id === currentScreen) + 1} / {screens.length}
            </span>
            <button
              onClick={() => {
                const idx = screens.findIndex(s => s.id === currentScreen);
                if (idx < screens.length - 1) navigateTo(screens[idx + 1].id, 'forward');
              }}
              disabled={screens.findIndex(s => s.id === currentScreen) === screens.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 text-white/80 text-sm rounded-lg transition-colors cursor-pointer disabled:cursor-default"
            >
              Suivant
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        )}

        {/* ESC hint (focus mode) */}
        {focusMode && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/20 z-[110]">
            Appuyer sur ESC pour quitter le mode focus
          </div>
        )}
      </div>
    </>
  );
}
