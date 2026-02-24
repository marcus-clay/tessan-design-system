import { useState, useCallback, useRef, useEffect } from 'react';

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

/* ─── Types ──────────────────────────────────────────────── */

type ScreenId =
  | 'splash' | 'home' | 'notifications'
  | 'reminder-detail' | 'booking-confirmation' | 'calendar-event'
  | 'teleconsultation' | 'video-call' | 'notes-modal' | 'ordonnance-modal'
  | 'cabin-search' | 'map-modal'
  | 'history' | 'consultation-detail' | 'ordonnances'
  | 'profile' | 'settings' | 'personal-data' | 'consents' | 'help-center' | 'about';

type TransitionType = 'push' | 'pop' | 'modal' | 'dismissModal' | 'tabSwitch' | 'fade';

interface ScreenDef {
  id: ScreenId;
  label: string;
  component: React.ComponentType;
  flow: string;
}

/* ─── Screen registry ──────────────────────────────────────── */

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

/* ─── Modal screens (slide up from bottom) ─────────────────── */
const modalScreens = new Set<ScreenId>(['notes-modal', 'ordonnance-modal', 'map-modal']);

/* ─── Navigation mapping with transition hints ─────────────── */

interface NavTarget {
  screen: ScreenId;
  transition?: TransitionType;
}

/* Standard tab bar shortcuts */
const TAB_NAV = {
  _tab_accueil: { screen: 'home' as ScreenId, transition: 'tabSwitch' as TransitionType },
  _tab_historique: { screen: 'history' as ScreenId, transition: 'tabSwitch' as TransitionType },
  _tab_ordonnances: { screen: 'ordonnances' as ScreenId, transition: 'tabSwitch' as TransitionType },
  _tab_profil: { screen: 'profile' as ScreenId, transition: 'tabSwitch' as TransitionType },
  _tab_consulter: { screen: 'teleconsultation' as ScreenId, transition: 'push' as TransitionType },
};

const navigationMap: Record<string, Record<string, NavTarget>> = {
  /* ── Accueil ────────────────────────────────── */
  splash: { _tap: { screen: 'home', transition: 'fade' } },
  home: {
    ...TAB_NAV,
    'Prendre rendez-vous': { screen: 'reminder-detail', transition: 'push' },
    'Téléconsultation': { screen: 'teleconsultation', transition: 'push' },
    'Cabine santé': { screen: 'cabin-search', transition: 'push' },
    'Ordonnances': { screen: 'ordonnances', transition: 'tabSwitch' },
    'Historique': { screen: 'history', transition: 'tabSwitch' },
    'Dr. Sophie Laurent': { screen: 'consultation-detail', transition: 'push' },
    _bell: { screen: 'notifications', transition: 'push' },
  },
  notifications: {
    _back: { screen: 'home', transition: 'pop' },
    'Rappel rendez-vous': { screen: 'reminder-detail', transition: 'push' },
    'Rappel prévention': { screen: 'reminder-detail', transition: 'push' },
    'Ordonnance disponible': { screen: 'ordonnances', transition: 'push' },
    'Confirmation': { screen: 'booking-confirmation', transition: 'push' },
    'Mise à jour': { screen: 'about', transition: 'push' },
    'Rappel': { screen: 'reminder-detail', transition: 'push' },
    'Téléconsultation': { screen: 'teleconsultation', transition: 'push' },
  },

  /* ── Prévention ─────────────────────────────── */
  'reminder-detail': {
    _back: { screen: 'home', transition: 'pop' },
    'Prendre rendez-vous': { screen: 'booking-confirmation', transition: 'push' },
  },
  'booking-confirmation': {
    _back: { screen: 'reminder-detail', transition: 'pop' },
    'Retour': { screen: 'home', transition: 'pop' },
    'accueil': { screen: 'home', transition: 'pop' },
    'Ajouter au calendrier': { screen: 'calendar-event', transition: 'push' },
  },
  'calendar-event': {
    ...TAB_NAV,
    _back: { screen: 'home', transition: 'pop' },
    'Téléconsultation': { screen: 'teleconsultation', transition: 'push' },
    'Dr. Sophie Laurent': { screen: 'consultation-detail', transition: 'push' },
  },

  /* ── Téléconsultation ───────────────────────── */
  teleconsultation: {
    _back: { screen: 'home', transition: 'pop' },
    'Démarrer': { screen: 'video-call', transition: 'push' },
  },
  'video-call': {
    _end: { screen: 'notes-modal', transition: 'modal' },
    _back: { screen: 'teleconsultation', transition: 'pop' },
  },
  'notes-modal': {
    _back: { screen: 'home', transition: 'dismissModal' },
    _close: { screen: 'home', transition: 'dismissModal' },
    'Fermer': { screen: 'ordonnance-modal', transition: 'modal' },
  },
  'ordonnance-modal': {
    _back: { screen: 'home', transition: 'dismissModal' },
    _close: { screen: 'home', transition: 'dismissModal' },
    'Envoyer': { screen: 'home', transition: 'dismissModal' },
    'pharmacie': { screen: 'home', transition: 'dismissModal' },
    'Télécharger': { screen: 'home', transition: 'dismissModal' },
  },

  /* ── Cabine Santé ───────────────────────────── */
  'cabin-search': {
    _back: { screen: 'home', transition: 'pop' },
    'Voir sur la carte': { screen: 'map-modal', transition: 'modal' },
    'Y aller': { screen: 'map-modal', transition: 'modal' },
  },
  'map-modal': {
    _back: { screen: 'cabin-search', transition: 'dismissModal' },
    _close: { screen: 'cabin-search', transition: 'dismissModal' },
    'Itinéraire': { screen: 'home', transition: 'dismissModal' },
    'Réserver': { screen: 'booking-confirmation', transition: 'dismissModal' },
  },

  /* ── Historique ─────────────────────────────── */
  history: {
    ...TAB_NAV,
    'Dr. Sophie Laurent': { screen: 'consultation-detail', transition: 'push' },
    'Centre Santé': { screen: 'consultation-detail', transition: 'push' },
    'Dr. Marc Dubois': { screen: 'consultation-detail', transition: 'push' },
    'Paris 15': { screen: 'consultation-detail', transition: 'push' },
  },
  'consultation-detail': {
    _back: { screen: 'history', transition: 'pop' },
    'Prendre un nouveau': { screen: 'teleconsultation', transition: 'push' },
    'nouveau RDV': { screen: 'teleconsultation', transition: 'push' },
    'Ordonnance': { screen: 'ordonnance-modal', transition: 'modal' },
    'Compte-rendu': { screen: 'notes-modal', transition: 'modal' },
    'Rejouer': { screen: 'video-call', transition: 'push' },
  },

  /* ── Ordonnances ────────────────────────────── */
  ordonnances: {
    ...TAB_NAV,
    'Doliprane': { screen: 'ordonnance-modal', transition: 'modal' },
    'Spray nasal': { screen: 'ordonnance-modal', transition: 'modal' },
    'Physiomer': { screen: 'ordonnance-modal', transition: 'modal' },
    'Amoxicilline': { screen: 'ordonnance-modal', transition: 'modal' },
  },

  /* ── Profil ─────────────────────────────────── */
  profile: {
    ...TAB_NAV,
    'Données personnelles': { screen: 'personal-data', transition: 'push' },
    'Consentements': { screen: 'consents', transition: 'push' },
    'Notifications': { screen: 'notifications', transition: 'push' },
    'Paramètres': { screen: 'settings', transition: 'push' },
    'Centre d\'aide': { screen: 'help-center', transition: 'push' },
    'À propos': { screen: 'about', transition: 'push' },
    'Se déconnecter': { screen: 'splash', transition: 'fade' },
    'déconnecter': { screen: 'splash', transition: 'fade' },
  },
  settings: {
    _back: { screen: 'profile', transition: 'pop' },
    'Politique de confidentialité': { screen: 'about', transition: 'push' },
    'Conditions': { screen: 'about', transition: 'push' },
    'Supprimer': { screen: 'home', transition: 'pop' },
  },
  'personal-data': {
    _back: { screen: 'profile', transition: 'pop' },
    'Modifier': { screen: 'profile', transition: 'pop' },
  },
  consents: {
    _back: { screen: 'profile', transition: 'pop' },
    'Enregistrer': { screen: 'profile', transition: 'pop' },
  },
  'help-center': {
    _back: { screen: 'profile', transition: 'pop' },
    'Comment fonctionne': { screen: 'teleconsultation', transition: 'push' },
    'remboursée': { screen: 'about', transition: 'push' },
    'trouver une cabine': { screen: 'cabin-search', transition: 'push' },
    'renouveler': { screen: 'reminder-detail', transition: 'push' },
    'support@tessan': { screen: 'profile', transition: 'pop' },
  },
  about: {
    _back: { screen: 'profile', transition: 'pop' },
    'Site web': { screen: 'home', transition: 'pop' },
    'Mentions légales': { screen: 'profile', transition: 'pop' },
    'Politique de confidentialité': { screen: 'profile', transition: 'pop' },
    'Conditions': { screen: 'profile', transition: 'pop' },
  },
};

const flows = [...new Set(screens.map(s => s.flow))];

/* ─── iOS-style easing curves ──────────────────────────────── */
// iOS uses a custom spring-like curve for navigation
const IOS_EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';
const IOS_DURATION = 450; // ms — iOS nav push duration

/* ─── CSS styles ───────────────────────────────────────────── */
const transitionCSS = `
  /* iOS push: outgoing screen goes left ~30% + dims */
  .ios-push-old {
    animation: iosPushOld ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosPushOld {
    from { transform: translateX(0); opacity: 1; }
    to   { transform: translateX(-30%); opacity: 0.6; }
  }

  /* iOS push: incoming screen from right 100% */
  .ios-push-new {
    animation: iosPushNew ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosPushNew {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }

  /* iOS pop: outgoing slides right 100% */
  .ios-pop-old {
    animation: iosPopOld ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosPopOld {
    from { transform: translateX(0); }
    to   { transform: translateX(100%); }
  }

  /* iOS pop: incoming slides from -30% + undims */
  .ios-pop-new {
    animation: iosPopNew ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosPopNew {
    from { transform: translateX(-30%); opacity: 0.6; }
    to   { transform: translateX(0); opacity: 1; }
  }

  /* Modal: slides up from bottom */
  .ios-modal-new {
    animation: iosModalNew ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosModalNew {
    from { transform: translateY(100%); }
    to   { transform: translateY(0); }
  }

  /* Modal: old screen scales down slightly */
  .ios-modal-old {
    animation: iosModalOld ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosModalOld {
    from { transform: scale(1); border-radius: 0; opacity: 1; }
    to   { transform: scale(0.92); border-radius: 12px; opacity: 0.6; }
  }

  /* Dismiss modal: slides down */
  .ios-dismiss-old {
    animation: iosDismissOld ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosDismissOld {
    from { transform: translateY(0); }
    to   { transform: translateY(100%); }
  }

  /* Dismiss modal: old screen scales back up */
  .ios-dismiss-new {
    animation: iosDismissNew ${IOS_DURATION}ms ${IOS_EASE} forwards;
  }
  @keyframes iosDismissNew {
    from { transform: scale(0.92); border-radius: 12px; opacity: 0.6; }
    to   { transform: scale(1); border-radius: 0; opacity: 1; }
  }

  /* Tab switch: cross-dissolve */
  .ios-tab-old {
    animation: iosTabOld 280ms ease-out forwards;
  }
  @keyframes iosTabOld {
    from { opacity: 1; }
    to   { opacity: 0; }
  }

  .ios-tab-new {
    animation: iosTabNew 280ms ease-out forwards;
  }
  @keyframes iosTabNew {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Fade (splash → home) */
  .ios-fade-old {
    animation: iosFadeOld 600ms ease-out forwards;
  }
  @keyframes iosFadeOld {
    0%   { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(1.05); }
  }

  .ios-fade-new {
    animation: iosFadeNew 600ms ease-out forwards;
  }
  @keyframes iosFadeNew {
    0%   { opacity: 0; transform: scale(0.97); }
    100% { opacity: 1; transform: scale(1); }
  }

  /* Toast */
  @keyframes toastIn {
    from { opacity: 0; transform: translateY(8px) translateX(-50%); }
    to   { opacity: 1; transform: translateY(0) translateX(-50%); }
  }
  .toast-enter { animation: toastIn 0.25s ${IOS_EASE} forwards; }

  /* Haptic ripple */
  @keyframes rippleFade {
    0% { opacity: 0.7; transform: scale(0.97); }
    100% { opacity: 0; transform: scale(1.02); }
  }
`;

/* ─── Haptic feedback ──────────────────────────────────────── */
function triggerFeedback(el: HTMLElement) {
  const ripple = document.createElement('div');
  const rect = el.getBoundingClientRect();
  ripple.style.cssText = `
    position:fixed; top:${rect.top}px; left:${rect.left}px;
    width:${rect.width}px; height:${rect.height}px;
    background:rgba(18,53,45,0.1); border-radius:12px;
    pointer-events:none; z-index:9999;
    animation: rippleFade 0.35s ease-out forwards;
  `;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 350);
}

/* ─── Component ────────────────────────────────────────────── */

export function PrototypeViewer() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [prevScreen, setPrevScreen] = useState<ScreenId | null>(null);
  const [focusMode, setFocusMode] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState<TransitionType>('push');
  const [toast, setToast] = useState<string | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const toastTimeout = useRef<ReturnType<typeof setTimeout>>();

  const currentDef = screens.find(s => s.id === currentScreen)!;
  const prevDef = prevScreen ? screens.find(s => s.id === prevScreen) : null;
  const CurrentComp = currentDef.component;
  const PrevComp = prevDef?.component || null;

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const navigateTo = useCallback((target: ScreenId, transition: TransitionType = 'push') => {
    if (transitioning || target === currentScreen) return;

    const targetDef = screens.find(s => s.id === target);
    showToast(`${targetDef?.label || target}`);

    setPrevScreen(currentScreen);
    setTransitionType(transition);
    setCurrentScreen(target);
    setTransitioning(true);

    // Scroll new screen to top after paint
    requestAnimationFrame(() => {
      if (screenRef.current) screenRef.current.scrollTop = 0;
    });

    const duration = transition === 'fade' ? 600 : transition === 'tabSwitch' ? 280 : IOS_DURATION;
    setTimeout(() => {
      setTransitioning(false);
      setPrevScreen(null);
    }, duration + 20);
  }, [transitioning, currentScreen, showToast]);

  /* ─── Click handler ─────────────────────────────────────── */
  const handleScreenClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Allow clicks on cards / list items too (div with cursor-pointer, etc.)
    const clickable = target.closest('button, a, [role="button"], [class*="cursor-pointer"]') as HTMLElement | null;
    if (!clickable) return;

    e.preventDefault();
    e.stopPropagation();

    const text = clickable.textContent?.trim() || '';
    const navMap = navigationMap[currentScreen] || {};

    /* ── Back button: chevron left (polyline "15 18 9 12 15 6" or similar) ── */
    const svg = clickable.querySelector('svg');
    const polyline = svg?.querySelector('polyline');
    const isBack = polyline?.getAttribute('points')?.includes('15 18 9 12 15 6') ||
                   polyline?.getAttribute('points')?.includes('15 6 9 12 15 18');

    if (isBack && navMap._back) {
      triggerFeedback(clickable);
      navigateTo(navMap._back.screen, navMap._back.transition || 'pop');
      return;
    }

    /* ── Close button: X icon (two lines crossing) ── */
    const lines = clickable.querySelectorAll('line');
    const isClose = lines.length === 2 &&
      (lines[0]?.getAttribute('x1') === '18' || lines[0]?.getAttribute('x1') === '6');
    if (isClose && navMap._close) {
      triggerFeedback(clickable);
      navigateTo(navMap._close.screen, navMap._close.transition || 'dismissModal');
      return;
    }

    /* ── Tab bar detection ── */
    // Check if element is inside a bottom nav (fixed/sticky bottom area)
    const isInBottomNav = clickable.closest('[class*="fixed bottom"]') ||
                          clickable.closest('[class*="border-t"]')?.parentElement?.lastElementChild === clickable.closest('[class*="border-t"]');

    if (text.includes('Accueil') && navMap._tab_accueil) { triggerFeedback(clickable); navigateTo(navMap._tab_accueil.screen, 'tabSwitch'); return; }
    if (text.includes('Historique') && navMap._tab_historique) { triggerFeedback(clickable); navigateTo(navMap._tab_historique.screen, 'tabSwitch'); return; }
    if ((text.includes('Ordonnances') || text.includes('Ordo')) && navMap._tab_ordonnances) { triggerFeedback(clickable); navigateTo(navMap._tab_ordonnances.screen, 'tabSwitch'); return; }
    if (text.includes('Profil') && navMap._tab_profil) { triggerFeedback(clickable); navigateTo(navMap._tab_profil.screen, 'tabSwitch'); return; }
    // Center "Consulter" / phone / teleconsultation tab
    if ((text.includes('Consulter') || text.includes('Santé') || text.includes('Rendez-vous')) && navMap._tab_consulter) {
      triggerFeedback(clickable); navigateTo(navMap._tab_consulter.screen, navMap._tab_consulter.transition || 'push'); return;
    }

    /* ── Notification bell icon ── */
    if (clickable.querySelector('path[d*="18 8A6"]') && navMap._bell) {
      triggerFeedback(clickable); navigateTo(navMap._bell.screen, navMap._bell.transition || 'push'); return;
    }

    /* ── Splash: tap anywhere ── */
    if (currentScreen === 'splash') { navigateTo('home', 'fade'); return; }

    /* ── End call: red button (video-call) ── */
    const cls = clickable.className || '';
    if ((cls.includes('DC2626') || cls.includes('red') || clickable.style?.backgroundColor?.includes('DC2626') || clickable.style?.backgroundColor?.includes('220, 38, 38')) && navMap._end) {
      triggerFeedback(clickable); navigateTo(navMap._end.screen, navMap._end.transition || 'modal'); return;
    }

    /* ── Text-based match: match the longest key first for precision ── */
    const textKeys = Object.entries(navMap)
      .filter(([k]) => !k.startsWith('_'))
      .sort((a, b) => b[0].length - a[0].length);

    for (const [key, dest] of textKeys) {
      if (text.includes(key) || text.toLowerCase().includes(key.toLowerCase())) {
        triggerFeedback(clickable);
        navigateTo(dest.screen, dest.transition || 'push');
        return;
      }
    }

    /* ── Fallback: notification items (clickable cards in notifications screen) ── */
    if (currentScreen === 'notifications') {
      // Any tapped notification leads to a relevant screen
      triggerFeedback(clickable);
      navigateTo('reminder-detail', 'push');
      return;
    }

    /* ── Fallback: ordonnance items (clickable cards in ordonnances screen) ── */
    if (currentScreen === 'ordonnances') {
      triggerFeedback(clickable);
      navigateTo('ordonnance-modal', 'modal');
      return;
    }

    /* ── Fallback: history items (consultation cards) ── */
    if (currentScreen === 'history') {
      triggerFeedback(clickable);
      navigateTo('consultation-detail', 'push');
      return;
    }

    /* ── Unmatched tap — visual feedback only ── */
    triggerFeedback(clickable);
  }, [currentScreen, navigateTo]);

  // Splash click (anywhere on screen)
  const handleSplashClick = useCallback(() => {
    if (currentScreen === 'splash' && !transitioning) navigateTo('home', 'fade');
  }, [currentScreen, transitioning, navigateTo]);

  // ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && focusMode) setFocusMode(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [focusMode]);

  /* ─── Transition CSS classes ─────────────────────────────── */
  const getOldClass = (): string => {
    switch (transitionType) {
      case 'push': return 'ios-push-old';
      case 'pop': return 'ios-pop-old';
      case 'modal': return 'ios-modal-old';
      case 'dismissModal': return 'ios-dismiss-old';
      case 'tabSwitch': return 'ios-tab-old';
      case 'fade': return 'ios-fade-old';
    }
  };

  const getNewClass = (): string => {
    switch (transitionType) {
      case 'push': return 'ios-push-new';
      case 'pop': return 'ios-pop-new';
      case 'modal': return 'ios-modal-new';
      case 'dismissModal': return 'ios-dismiss-new';
      case 'tabSwitch': return 'ios-tab-new';
      case 'fade': return 'ios-fade-new';
    }
  };

  /* ─── Z-index logic ──────────────────────────────────────── */
  // For push/modal: new screen on top. For pop/dismiss: old screen on top.
  const newOnTop = transitionType === 'push' || transitionType === 'modal' || transitionType === 'tabSwitch' || transitionType === 'fade';

  return (
    <>
      <style>{transitionCSS}</style>

      <div className={`flex flex-col items-center transition-all duration-500 ease-out ${focusMode ? 'fixed inset-0 z-[100] bg-black/95 justify-center' : ''}`}>

        {/* Focus mode close */}
        {focusMode && (
          <button onClick={() => setFocusMode(false)}
            className="absolute top-6 right-6 z-[110] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-all cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        )}

        {/* Screen selector (non-focus) */}
        {!focusMode && (
          <div className="mb-6 w-full max-w-3xl">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              {flows.map(flow => {
                const flowScreens = screens.filter(s => s.flow === flow);
                const isActiveFlow = flowScreens.some(s => s.id === currentScreen);
                return (
                  <div key={flow} className="flex items-center gap-1">
                    <span className={`text-[10px] uppercase tracking-wider font-semibold ${isActiveFlow ? 'text-[#EDE455]' : 'text-white/30'}`}>{flow}</span>
                    <div className="flex gap-1">
                      {flowScreens.map(s => (
                        <button key={s.id}
                          onClick={() => navigateTo(s.id, 'tabSwitch')}
                          className={`px-2 py-1 text-[11px] rounded transition-all cursor-pointer ${s.id === currentScreen ? 'bg-[#EDE455] text-[#12352D] font-semibold' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'}`}>
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

        {/* Label + focus toggle */}
        <div className={`flex items-center gap-3 ${focusMode ? 'absolute top-6 left-6 z-[110]' : 'mb-4'}`}>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/60">
            {currentDef.flow} — {currentDef.label}
          </span>
          <button onClick={() => setFocusMode(!focusMode)}
            className={`flex items-center gap-1.5 px-3 py-1 text-xs rounded-full transition-all cursor-pointer border ${focusMode ? 'bg-[#EDE455]/20 text-[#EDE455] border-[#EDE455]/30' : 'bg-white/5 text-white/50 hover:text-white/70 border-white/10 hover:border-white/20'}`}>
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
          className={`relative transition-transform duration-500 ease-out ${focusMode ? 'scale-[1.15]' : 'scale-100'}`}
          onClick={currentScreen === 'splash' && !transitioning ? handleSplashClick : undefined}
        >
          <div className="w-[395px] h-[852px] bg-[#1a1a1a] rounded-[50px] p-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
            {/* Dynamic Island */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[126px] h-[36px] bg-black rounded-full z-[60]" />

            {/* Screen container — BOTH screens rendered during transition */}
            <div
              ref={screenRef}
              className="w-[375px] h-[832px] bg-white rounded-[40px] overflow-hidden relative"
              style={{ scrollbarWidth: 'none' }}
              onClick={handleScreenClick}
            >
              {/* Old screen (during transition) */}
              {transitioning && PrevComp && (
                <div
                  className={`absolute inset-0 ${getOldClass()}`}
                  style={{
                    zIndex: newOnTop ? 1 : 2,
                    willChange: 'transform, opacity',
                  }}
                >
                  <div className="w-[375px] h-[832px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                    <PrevComp />
                  </div>
                </div>
              )}

              {/* Current (new) screen */}
              <div
                className={`absolute inset-0 ${transitioning ? getNewClass() : ''}`}
                style={{
                  zIndex: transitioning ? (newOnTop ? 2 : 1) : 1,
                  willChange: transitioning ? 'transform, opacity' : 'auto',
                }}
              >
                <div className="w-[375px] h-[832px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                  <CurrentComp />
                </div>
              </div>
            </div>
          </div>

          {/* Toast */}
          {toast && (
            <div className="absolute -bottom-12 left-1/2 toast-enter" style={{ transform: 'translateX(-50%)' }}>
              <div className="px-4 py-2 bg-[#12352D] text-white text-xs font-medium rounded-full shadow-lg whitespace-nowrap">
                {toast}
              </div>
            </div>
          )}
        </div>

        {/* Focus mode nav */}
        {focusMode && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[110]">
            <button
              onClick={() => {
                const idx = screens.findIndex(s => s.id === currentScreen);
                if (idx > 0) navigateTo(screens[idx - 1].id, 'pop');
              }}
              disabled={screens.findIndex(s => s.id === currentScreen) === 0}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white/80 text-sm rounded-lg transition-colors cursor-pointer disabled:cursor-default">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              Précédent
            </button>
            <span className="text-white/30 text-xs">{screens.findIndex(s => s.id === currentScreen) + 1} / {screens.length}</span>
            <button
              onClick={() => {
                const idx = screens.findIndex(s => s.id === currentScreen);
                if (idx < screens.length - 1) navigateTo(screens[idx + 1].id, 'push');
              }}
              disabled={screens.findIndex(s => s.id === currentScreen) === screens.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white/80 text-sm rounded-lg transition-colors cursor-pointer disabled:cursor-default">
              Suivant
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        )}

        {focusMode && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] text-white/20 z-[110]">
            Appuyer sur ESC pour quitter le mode focus
          </div>
        )}
      </div>
    </>
  );
}
