import type { TokenUsage, ComponentUsage } from '../components/app-screens/ScreenInspector';

interface ScreenMeta {
  tokens: TokenUsage[];
  components: ComponentUsage[];
  code: string;
}

const brandTokens: TokenUsage = {
  category: 'Brand',
  items: [
    { token: 'brand-primary', value: '#12352D', cssVar: '--color-brand-primary' },
    { token: 'brand-teal', value: '#1B7A68', cssVar: '--color-brand-teal' },
    { token: 'brand-yellow', value: '#EDE455', cssVar: '--color-brand-yellow' },
  ],
};

const surfaceTokens: TokenUsage = {
  category: 'Surfaces',
  items: [
    { token: 'surface-cream', value: '#F5F0E8', cssVar: '--color-surface-cream' },
    { token: 'surface-card-light', value: '#FAFAF7', cssVar: '--color-surface-card-light' },
  ],
};

const typographyTokens: TokenUsage = {
  category: 'Typographie',
  items: [
    { token: 'font-heading', value: 'Fraunces', cssVar: '--font-heading' },
    { token: 'font-body', value: 'Inter', cssVar: '--font-body' },
  ],
};

const neutralTokens: TokenUsage = {
  category: 'Neutres',
  items: [
    { token: 'neutral-white', value: '#FFFFFF', cssVar: '--color-neutral-white' },
    { token: 'neutral-gray-medium', value: '#6B7280', cssVar: '--color-neutral-gray-medium' },
    { token: 'neutral-gray-dark', value: '#1F2937', cssVar: '--color-neutral-gray-dark' },
    { token: 'neutral-gray-200', value: '#E5E7EB', cssVar: '--color-neutral-gray-200' },
  ],
};

const semanticTokens: TokenUsage = {
  category: 'Sémantique',
  items: [
    { token: 'semantic-success', value: '#059669', cssVar: '--color-semantic-success' },
    { token: 'semantic-warning', value: '#D97706', cssVar: '--color-semantic-warning' },
    { token: 'semantic-danger', value: '#DC2626', cssVar: '--color-semantic-danger' },
  ],
};

const secondaryTokens: TokenUsage = {
  category: 'Secondaires',
  items: [
    { token: 'secondary-salmon', value: '#F2C8B4', cssVar: '--color-secondary-salmon' },
    { token: 'secondary-blue-light', value: '#D4E8F5', cssVar: '--color-secondary-blue-light' },
    { token: 'secondary-green-lime', value: '#E5EDCC', cssVar: '--color-secondary-green-lime' },
    { token: 'secondary-yellow-pale', value: '#FDF5DC', cssVar: '--color-secondary-yellow-pale' },
  ],
};

const shadowTokens: TokenUsage = {
  category: 'Ombres',
  items: [
    { token: 'shadow-sm', value: '0 2px 8px rgba(0,0,0,0.04)', cssVar: '--shadow-sm' },
    { token: 'shadow-md', value: '0 4px 16px rgba(0,0,0,0.08)', cssVar: '--shadow-md' },
  ],
};

const radiusTokens: TokenUsage = {
  category: 'Radius',
  items: [
    { token: 'radius-lg', value: '12px', cssVar: '--radius-lg' },
    { token: 'radius-xl', value: '16px', cssVar: '--radius-xl' },
    { token: 'radius-2xl', value: '20px', cssVar: '--radius-2xl' },
    { token: 'radius-full', value: '9999px', cssVar: '--radius-full' },
  ],
};

export const screenMetadata: Record<string, ScreenMeta> = {
  splash: {
    tokens: [
      brandTokens,
      typographyTokens,
    ],
    components: [],
    code: `<SplashScreen />

// Utilise:
// - bg brand-primary (#12352D)
// - Fraunces italic pour le tagline
// - Inter bold pour "TESSAN"
// - Animation pulse pour le loader`,
  },

  home: {
    tokens: [
      brandTokens,
      surfaceTokens,
      secondaryTokens,
      typographyTokens,
      shadowTokens,
      radiusTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark"', link: '/components/header' },
      { name: 'Badge', props: 'variant="kpi"', link: '/components/badge' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'ListItem', props: 'showArrow', link: '/components/list-item' },
      { name: 'BottomNav', props: 'activeTab="accueil"', link: '/components/bottom-nav' },
    ],
    code: `<HomeScreen />

// Header vert avec greeting Fraunces
<Header variant="dark" />
  <h1>Bonjour Marie 👋</h1>

// Carte de rappel
<Card variant="light">
  <Badge variant="kpi">RAPPEL SANTÉ</Badge>
  <h3>Bilan sanguin annuel</h3>
  <Button variant="primary" fullWidth>
    Prendre rendez-vous
  </Button>
</Card>

// Grille d'actions rapides (2x2)
<ActionGrid>
  <ActionCard icon={Video} bg="blue-light" />
  <ActionCard icon={MapPin} bg="green-lime" />
  <ActionCard icon={FileText} bg="yellow-pale" />
  <ActionCard icon={Clipboard} bg="salmon" />
</ActionGrid>

// Prochain RDV
<ListItem
  title="Dr. Sophie Laurent"
  subtitle="Téléconsultation · 15 jan."
  showArrow
/>

<BottomNav activeTab="accueil" />`,
  },

  notifications: {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      semanticTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Notifications" showBack', link: '/components/header' },
    ],
    code: `<NotificationsScreen />

// Header blanc avec retour
<Header variant="light" title="Notifications" showBack />

// Groupes temporels
<Section title="Aujourd'hui">
  <NotificationItem
    icon={Bell}
    color="teal"
    unread
    title="Rappel rendez-vous"
    body="Votre téléconsultation..."
    time="Il y a 30 min"
  />
</Section>

// Les items non lus ont un bord
// gauche teal de 3px`,
  },

  'reminder-detail': {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Status', items: [
        { token: 'secondary-yellow-pale', value: '#FDF5DC', cssVar: '--color-secondary-yellow-pale' },
        { token: 'semantic-danger', value: '#DC2626', cssVar: '--color-semantic-danger' },
      ]},
      typographyTokens,
      shadowTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Rappel santé" showBack', link: '/components/header' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
    ],
    code: `<ReminderDetailScreen />

<Header variant="light" title="Rappel santé" showBack />

// Zone badge yellow-pale
<div bg="yellow-pale">
  <Badge variant="kpi">Bilan sanguin annuel</Badge>
</div>

// Cartes d'information
<Card variant="light">
  <h4>Pourquoi ce rappel ?</h4>
  <p>Un bilan sanguin annuel permet...</p>
</Card>

<Card variant="light">
  <h4>Recommandation</h4>
  <Row label="Statut" value="En retard"
    color="semantic-danger" />
</Card>

// CTA sticky en bas
<Button variant="primary" fullWidth>
  Prendre rendez-vous
</Button>`,
  },

  'booking-confirmation': {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Succès', items: [
        { token: 'secondary-green-lime', value: '#E5EDCC', cssVar: '--color-secondary-green-lime' },
        { token: 'semantic-success', value: '#059669', cssVar: '--color-semantic-success' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark" title="Confirmation" showBack', link: '/components/header' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
      { name: 'Button', props: 'variant="secondary" fullWidth', link: '/components/button' },
    ],
    code: `<BookingConfirmationScreen />

<Header variant="dark" title="Confirmation" showBack />

// Icône succès
<CheckCircle size={80}
  bg="green-lime" color="success" />

<h1>Rendez-vous confirmé !</h1>

// Détails du RDV
<Card variant="light">
  <Row icon={Calendar} text="Mercredi 15 janvier" />
  <Row icon={Clock} text="14h30 - 15h00" />
  <Row icon={User} text="Dr. Sophie Laurent" />
  <Row icon={Video} text="Téléconsultation vidéo" />
</Card>

<Button variant="secondary" fullWidth>
  Ajouter au calendrier
</Button>
<Button variant="primary" fullWidth>
  Retour à l'accueil
</Button>`,
  },

  'calendar-event': {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Mon agenda" showBack', link: '/components/header' },
      { name: 'Badge', props: 'variant="status" status="success"', link: '/components/badge' },
      { name: 'BottomNav', link: '/components/bottom-nav' },
    ],
    code: `<CalendarEventScreen />

<Header variant="light" title="Mon agenda" showBack />

// Bande calendrier horizontale
<CalendarStrip month="Janvier 2025"
  selectedDay={15} />

// Carte événement avec barre latérale
<EventCard
  borderColor="brand-teal"
  time="14:30 - 15:00"
  title="Téléconsultation"
  doctor="Dr. Sophie Laurent"
>
  <Badge variant="status" status="success">
    Confirmé
  </Badge>
</EventCard>

<BottomNav />`,
  },

  teleconsultation: {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Spécifique', items: [
        { token: 'secondary-blue-light', value: '#D4E8F5', cssVar: '--color-secondary-blue-light' },
        { token: 'semantic-success', value: '#059669', cssVar: '--color-semantic-success' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark" title="Téléconsultation" showBack', link: '/components/header' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
    ],
    code: `<TeleconsultationScreen />

<Header variant="dark" title="Téléconsultation" showBack />

// Illustration
<Circle size={120} bg="brand-teal">
  <VideoIcon />
</Circle>

// Carte médecin
<Card variant="light">
  <Avatar bg="blue-light" />
  <h3>Dr. Sophie Laurent</h3>
  <p>Médecin généraliste</p>
  <StatusDot color="success" />
  Disponible maintenant
</Card>

// Chips de motif
<ChipGroup
  selected="Renouvellement ordonnance"
  options={["Renouvellement", "Symptômes",
    "Question médicale", "Autre"]}
/>

<Button variant="primary" fullWidth>
  Démarrer la consultation
</Button>`,
  },

  'video-call': {
    tokens: [
      { category: 'Appel vidéo', items: [
        { token: 'neutral-black', value: '#1A1A1A', cssVar: '--color-neutral-black' },
        { token: 'brand-teal', value: '#1B7A68', cssVar: '--color-brand-teal' },
        { token: 'semantic-danger', value: '#DC2626', cssVar: '--color-semantic-danger' },
        { token: 'neutral-white', value: '#FFFFFF', cssVar: '--color-neutral-white' },
      ]},
    ],
    components: [],
    code: `<VideoCallScreen />

// Plein écran sombre
<div bg="#1a1a1a" fullScreen>
  <p>Dr. Sophie Laurent</p>
  <Timer>05:23</Timer>

  // Zone vidéo principale (gradient)
  <VideoFeed gradient="teal → dark" />

  // Mini caméra self
  <SelfCamera position="bottom-right"
    size="120x90" rounded />

  // Barre de contrôles
  <ControlBar>
    <CircleButton icon={Mic} bg="white" />
    <CircleButton icon={Camera} bg="white" />
    <CircleButton icon={PhoneOff}
      bg="danger" color="white" />
    <CircleButton icon={Message} bg="white" />
    <CircleButton icon={More} bg="white" />
  </ControlBar>
</div>`,
  },

  'notes-modal': {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Button', props: 'variant="secondary" fullWidth', link: '/components/button' },
    ],
    code: `<NotesModalScreen />

// Overlay semi-transparent
<Overlay bg="black/60">
  // Bottom sheet
  <BottomSheet rounded="3xl">
    <DragHandle />
    <h2>Notes du médecin</h2>
    <Divider />

    <p>15 janvier 2025</p>

    <h4>Diagnostic :</h4>
    <p>Rhinopharyngite aiguë</p>

    <h4>Recommandations :</h4>
    <ul>
      <li>Repos 2-3 jours</li>
      <li>Hydratation abondante</li>
      <li>Paracétamol si besoin</li>
      <li>Lavages de nez</li>
    </ul>

    <Button variant="secondary" fullWidth>
      Fermer
    </Button>
  </BottomSheet>
</Overlay>`,
  },

  'ordonnance-modal': {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Validité', items: [
        { token: 'secondary-green-lime', value: '#E5EDCC', cssVar: '--color-secondary-green-lime' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Badge', props: 'variant="status" status="success"', link: '/components/badge' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
      { name: 'Button', props: 'variant="secondary" fullWidth', link: '/components/button' },
    ],
    code: `<OrdonnanceModalScreen />

<Overlay bg="black/60">
  <BottomSheet rounded="3xl">
    <DragHandle />
    <h2>Ordonnance</h2>
    <Badge status="success">Valide 3 mois</Badge>

    <p>Dr. Sophie Laurent</p>
    <p>15 janvier 2025</p>

    <PrescriptionItem
      icon={Pill}
      name="Doliprane 1000mg"
      dosage="1 comprimé 3x/jour, 5 jours"
    />
    <PrescriptionItem
      icon={Pill}
      name="Spray nasal Physiomer"
      dosage="3 pulvérisations 3x/jour"
    />

    <Button variant="secondary" fullWidth>
      Télécharger le PDF
    </Button>
    <Button variant="primary" fullWidth>
      Envoyer à ma pharmacie
    </Button>
  </BottomSheet>
</Overlay>`,
  },

  'cabin-search': {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      semanticTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark" showBack', link: '/components/header' },
      { name: 'Input', props: 'placeholder="Rechercher..."', link: '/components/input' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'Badge', props: 'variant="status" status="success"', link: '/components/badge' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
    ],
    code: `<CabinSearchScreen />

<Header variant="dark" showBack>
  <Input placeholder="Rechercher une adresse..." />
</Header>

<Section title="À proximité">
  <CabinCard
    name="Pharmacie du Centre"
    address="12 rue de Rivoli, 75001"
    distance="350m"
    status="Ouverte"
    available={3}
  >
    <Badge status="success">
      3 cabines disponibles
    </Badge>
    <Button variant="secondary" size="sm">
      Y aller
    </Button>
  </CabinCard>
</Section>

<Button variant="primary" fullWidth>
  Voir sur la carte
</Button>`,
  },

  'map-modal': {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Carte', items: [
        { token: 'secondary-blue-light', value: '#D4E8F5', cssVar: '--color-secondary-blue-light' },
        { token: 'secondary-green-lime', value: '#E5EDCC', cssVar: '--color-secondary-green-lime' },
        { token: 'semantic-danger', value: '#DC2626', cssVar: '--color-semantic-danger' },
        { token: 'semantic-success', value: '#059669', cssVar: '--color-semantic-success' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
      { name: 'Button', props: 'variant="secondary" fullWidth', link: '/components/button' },
    ],
    code: `<MapModalScreen />

// Zone carte (gradient CSS)
<MapArea gradient="blue-light → green-lime">
  <MapPin color="danger" />
</MapArea>

// Bottom sheet
<BottomSheet>
  <DragHandle />
  <h3>Pharmacie du Centre</h3>
  <p>12 rue de Rivoli, 75001 Paris</p>
  <StatusDot color="success" />
  <p>3 cabines disponibles</p>

  <Tags>
    <Pill>Téléconsultation</Pill>
    <Pill>Prise de sang</Pill>
    <Pill>Electrocardiogramme</Pill>
  </Tags>

  <Button variant="primary" fullWidth>
    Itinéraire
  </Button>
  <Button variant="secondary" fullWidth>
    Réserver un créneau
  </Button>
</BottomSheet>`,
  },

  history: {
    tokens: [
      brandTokens,
      surfaceTokens,
      secondaryTokens,
      typographyTokens,
      shadowTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark"', link: '/components/header' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'Badge', props: 'variant="status" status="success"', link: '/components/badge' },
      { name: 'BottomNav', props: 'activeTab="historique"', link: '/components/bottom-nav' },
    ],
    code: `<HistoryScreen />

// Header avec filtres
<Header variant="dark">
  <h1>Historique</h1>
  <FilterTabs
    active="Tout"
    options={["Tout", "Téléconsultation", "Cabine"]}
  />
</Header>

// Groupé par mois
<Section title="Janvier 2025">
  <ConsultationCard
    type="teleconsultation"
    iconBg="blue-light"
    doctor="Dr. Sophie Laurent"
    date="15 janvier 2025 · 14h30"
  >
    <Badge status="success">Terminée</Badge>
  </ConsultationCard>
</Section>

<BottomNav activeTab="historique" />`,
  },

  'consultation-detail': {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      typographyTokens,
      shadowTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Détail" showBack', link: '/components/header' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'Badge', props: 'variant="status" status="success"', link: '/components/badge' },
      { name: 'ListItem', props: 'showArrow', link: '/components/list-item' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
    ],
    code: `<ConsultationDetailScreen />

<Header variant="light" title="Détail" showBack />

<Card variant="light">
  <Icon bg="blue-light"><Video /></Icon>
  <h3>Téléconsultation</h3>
  <p>15 janvier 2025 · 14h30</p>
  <Badge status="success">Terminée</Badge>
</Card>

// Médecin
<Card variant="light">
  <Avatar bg="blue-light" />
  <h3>Dr. Sophie Laurent</h3>
  <p>Médecin généraliste</p>
</Card>

// Documents
<Section title="Documents">
  <ListItem title="Compte-rendu" showArrow />
  <ListItem title="Ordonnance" showArrow />
</Section>

<Button variant="primary" fullWidth>
  Prendre un nouveau RDV
</Button>`,
  },

  ordonnances: {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Ordonnances', items: [
        { token: 'secondary-yellow-pale', value: '#FDF5DC', cssVar: '--color-secondary-yellow-pale' },
        { token: 'secondary-green-lime', value: '#E5EDCC', cssVar: '--color-secondary-green-lime' },
        { token: 'semantic-success', value: '#059669', cssVar: '--color-semantic-success' },
        { token: 'semantic-warning', value: '#D97706', cssVar: '--color-semantic-warning' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark"', link: '/components/header' },
      { name: 'Card', props: 'variant="light"', link: '/components/card' },
      { name: 'BottomNav', props: 'activeTab="ordonnances"', link: '/components/bottom-nav' },
    ],
    code: `<OrdonnancesScreen />

<Header variant="dark">
  <h1>Ordonnances</h1>
  <p>3 ordonnances actives</p>
</Header>

<OrdonnanceCard
  name="Doliprane 1000mg"
  doctor="Dr. Sophie Laurent · 15 jan."
  progress={70}
  expiry="Expire dans 2 mois"
/>

<OrdonnanceCard
  name="Amoxicilline 500mg"
  doctor="Dr. Marc Dubois · 3 déc."
  progress={20}
  expiry="Expire dans 15 jours"
  expiryColor="warning"
/>

<BottomNav activeTab="ordonnances" />`,
  },

  profile: {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      { category: 'Profil', items: [
        { token: 'secondary-blue-light', value: '#D4E8F5', cssVar: '--color-secondary-blue-light' },
        { token: 'semantic-danger', value: '#DC2626', cssVar: '--color-semantic-danger' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="dark"', link: '/components/header' },
      { name: 'ListItem', props: 'showArrow', link: '/components/list-item' },
      { name: 'BottomNav', props: 'activeTab="profil"', link: '/components/bottom-nav' },
    ],
    code: `<ProfileScreen />

<Header variant="dark">
  <Avatar size={80} bg="blue-light"
    initials="ML" />
  <h1>Marie Laurent</h1>
  <p>marie.laurent@email.com</p>
</Header>

<Section title="Mon compte">
  <ListItem icon={User}
    title="Données personnelles" showArrow />
  <ListItem icon={Shield}
    title="Consentements" showArrow />
  <ListItem icon={Bell}
    title="Notifications" showArrow />
</Section>

<Section title="Support">
  <ListItem icon={HelpCircle}
    title="Centre d'aide" showArrow />
  <ListItem icon={Info}
    title="À propos" showArrow />
</Section>

<BottomNav activeTab="profil" />`,
  },

  settings: {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      semanticTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Paramètres" showBack', link: '/components/header' },
      { name: 'Toggle', props: 'label="..." defaultChecked', link: '/components/toggle' },
      { name: 'ListItem', props: 'showArrow', link: '/components/list-item' },
    ],
    code: `<SettingsScreen />

<Header variant="light" title="Paramètres" showBack />

<Section title="Notifications">
  <Toggle label="Rappels de prévention"
    defaultChecked />
  <Toggle label="Rappels de rendez-vous"
    defaultChecked />
  <Toggle label="Notifications marketing" />
</Section>

<Section title="Apparence">
  <Toggle label="Mode sombre" />
  <ListItem title="Langue"
    value="Français" showArrow />
</Section>

<Section title="Confidentialité">
  <Toggle label="Partage données anonymes" />
  <ListItem title="Politique de confidentialité"
    showArrow />
</Section>`,
  },

  'personal-data': {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Données personnelles" showBack', link: '/components/header' },
      { name: 'Input', props: 'label="Prénom" value="Marie"', link: '/components/input' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
    ],
    code: `<PersonalDataScreen />

<Header variant="light"
  title="Données personnelles" showBack />

<FormField label="Prénom" value="Marie" />
<FormField label="Nom" value="Laurent" />
<FormField label="Date de naissance"
  value="15/03/1990" />
<FormField label="Email"
  value="marie.laurent@email.com" />
<FormField label="Téléphone"
  value="06 12 34 56 78" />
<FormField label="Adresse"
  value="12 rue de la Paix, 75002" />
<FormField label="N° Sécurité sociale"
  value="2 90 03 75 *** *** **"
  masked />

<Button variant="primary" fullWidth>
  Modifier
</Button>`,
  },

  consents: {
    tokens: [
      brandTokens,
      surfaceTokens,
      { category: 'Info', items: [
        { token: 'secondary-blue-light', value: '#D4E8F5', cssVar: '--color-secondary-blue-light' },
      ]},
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Consentements" showBack', link: '/components/header' },
      { name: 'Toggle', props: 'label="..." defaultChecked', link: '/components/toggle' },
      { name: 'Button', props: 'variant="primary" fullWidth', link: '/components/button' },
    ],
    code: `<ConsentsScreen />

<Header variant="light"
  title="Consentements" showBack />

// Bannière info RGPD
<InfoBanner bg="blue-light">
  <Shield />
  Vos données sont protégées
  conformément au RGPD
</InfoBanner>

<ConsentItem
  title="Données de santé"
  description="Nécessaire au fonctionnement"
  checked disabled />
<ConsentItem
  title="Partage avec votre médecin"
  description="Accès à votre historique"
  checked />
<ConsentItem
  title="Données anonymisées"
  description="Amélioration du service" />

<Button variant="primary" fullWidth>
  Enregistrer
</Button>`,
  },

  'help-center': {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="Centre d\'aide" showBack', link: '/components/header' },
      { name: 'Input', props: 'placeholder="Rechercher..."', link: '/components/input' },
    ],
    code: `<HelpCenterScreen />

<Header variant="light"
  title="Centre d'aide" showBack />

<SearchInput
  placeholder="Rechercher une question..." />

<Section title="Questions fréquentes">
  <FaqItem
    question="Comment fonctionne
      la téléconsultation ?" />
  <FaqItem
    question="Est-elle remboursée ?"
    expanded
    answer="Oui, les téléconsultations
      Tessan sont prises en charge..." />
</Section>

<Section title="Nous contacter">
  <ContactCard icon={Mail}
    value="support@tessan.io" />
  <ContactCard icon={Phone}
    value="01 23 45 67 89" />
</Section>`,
  },

  about: {
    tokens: [
      brandTokens,
      surfaceTokens,
      neutralTokens,
      typographyTokens,
    ],
    components: [
      { name: 'Header', props: 'variant="light" title="À propos" showBack', link: '/components/header' },
      { name: 'ListItem', props: 'showArrow', link: '/components/list-item' },
    ],
    code: `<AboutScreen />

<Header variant="light"
  title="À propos" showBack />

<h1>TESSAN</h1>
<p>Version 2.1.0</p>

<p>Tessan est une solution de santé
  innovante qui facilite l'accès
  aux soins...</p>

<Section title="Notre mission">
  <p>Rendre la santé accessible
    à tous, partout en France...</p>
</Section>

<LinkList>
  <ListItem title="Site web"
    icon={ExternalLink} />
  <ListItem title="Mentions légales"
    showArrow />
  <ListItem title="Politique de
    confidentialité" showArrow />
</LinkList>

<Footer>
  © 2025 Tessan. Tous droits réservés.
</Footer>`,
  },
};
