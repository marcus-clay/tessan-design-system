export const dsNavigation = [
  {
    title: 'Introduction',
    items: [
      { label: 'Vue d\'ensemble', href: '/overview' },
    ],
  },
  {
    title: 'Design Tokens',
    items: [
      { label: 'Couleurs', href: '/tokens/colors' },
      { label: 'Typographie', href: '/tokens/typography' },
      { label: 'Espacement', href: '/tokens/spacing' },
      { label: 'Ombres', href: '/tokens/shadows' },
      { label: 'Border Radius', href: '/tokens/radius' },
    ],
  },
  {
    title: 'Composants',
    items: [
      { label: 'Button', href: '/components/button' },
      { label: 'Card', href: '/components/card' },
      { label: 'StatCard', href: '/components/stat-card' },
      { label: 'Badge', href: '/components/badge' },
      { label: 'Input', href: '/components/input' },
      { label: 'Toggle', href: '/components/toggle' },
      { label: 'ListItem', href: '/components/list-item' },
      { label: 'Header', href: '/components/header' },
      { label: 'BottomNav', href: '/components/bottom-nav' },
    ],
  },
];

export const appNavigation = [
  {
    title: 'Parcours App',
    items: [
      { label: 'Vue d\'ensemble', href: '/app' },
      { label: 'Prototype interactif', href: '/app/prototype' },
    ],
  },
  {
    title: 'Accueil',
    items: [
      { label: 'Splash', href: '/app/splash' },
      { label: 'Home', href: '/app/home' },
      { label: 'Notifications', href: '/app/notifications' },
    ],
  },
  {
    title: 'Prévention',
    items: [
      { label: 'Rappel santé', href: '/app/reminder-detail' },
      { label: 'Confirmation RDV', href: '/app/booking-confirmation' },
      { label: 'Mon agenda', href: '/app/calendar-event' },
    ],
  },
  {
    title: 'Téléconsultation',
    items: [
      { label: 'Démarrer', href: '/app/teleconsultation' },
      { label: 'Appel vidéo', href: '/app/video-call' },
      { label: 'Notes médecin', href: '/app/notes-modal' },
      { label: 'Ordonnance', href: '/app/ordonnance-modal' },
    ],
  },
  {
    title: 'Cabine Santé',
    items: [
      { label: 'Recherche', href: '/app/cabin-search' },
      { label: 'Carte', href: '/app/map-modal' },
    ],
  },
  {
    title: 'Historique',
    items: [
      { label: 'Mes consultations', href: '/app/history' },
      { label: 'Détail consultation', href: '/app/consultation-detail' },
      { label: 'Ordonnances', href: '/app/ordonnances' },
    ],
  },
  {
    title: 'Profil',
    items: [
      { label: 'Mon profil', href: '/app/profile' },
      { label: 'Paramètres', href: '/app/settings' },
      { label: 'Données personnelles', href: '/app/personal-data' },
      { label: 'Consentements', href: '/app/consents' },
      { label: 'Centre d\'aide', href: '/app/help-center' },
      { label: 'À propos', href: '/app/about' },
    ],
  },
];

// Combined for backward compat
export const navigation = [...dsNavigation, ...appNavigation];
