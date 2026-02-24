export type ControlType = 'select' | 'text' | 'boolean' | 'number';

export interface PropDefinition {
  name: string;
  type: ControlType;
  defaultValue: any;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  description?: string;
}

export interface ComponentPlaygroundConfig {
  name: string;
  description: string;
  props: PropDefinition[];
  defaultChildren?: string;
}

export const buttonConfig: ComponentPlaygroundConfig = {
  name: 'Button',
  description: 'Bouton interactif pour les CTA et actions.',
  defaultChildren: 'Prendre rendez-vous',
  props: [
    { name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'ghost'], description: 'Style visuel' },
    { name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'], description: 'Taille du bouton' },
    { name: 'fullWidth', type: 'boolean', defaultValue: false, description: 'Pleine largeur' },
    { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Etat desactive' },
  ],
};

export const cardConfig: ComponentPlaygroundConfig = {
  name: 'Card',
  description: 'Conteneur avec variantes de fond.',
  defaultChildren: 'Contenu de la carte',
  props: [
    { name: 'variant', type: 'select', defaultValue: 'light', options: ['light', 'tint', 'dark'], description: 'Style de fond' },
    { name: 'padding', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'], description: 'Espacement interne' },
  ],
};

export const statCardConfig: ComponentPlaygroundConfig = {
  name: 'StatCard',
  description: 'Carte de statistique avec valeur KPI.',
  props: [
    { name: 'label', type: 'text', defaultValue: 'PROCHAIN RAPPEL', description: 'Label caption' },
    { name: 'value', type: 'text', defaultValue: '12', description: 'Valeur affichee' },
    { name: 'unit', type: 'text', defaultValue: 'j', description: 'Unite optionnelle' },
    { name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'highlight'], description: 'Style visuel' },
  ],
};

export const badgeConfig: ComponentPlaygroundConfig = {
  name: 'Badge',
  description: 'Badge de statut ou KPI.',
  defaultChildren: 'RAPPEL SANTE',
  props: [
    { name: 'variant', type: 'select', defaultValue: 'status', options: ['status', 'kpi'], description: 'Type de badge' },
    { name: 'status', type: 'select', defaultValue: 'normal', options: ['normal', 'warning', 'danger', 'success'], description: 'Couleur de statut' },
  ],
};

export const inputConfig: ComponentPlaygroundConfig = {
  name: 'Input',
  description: 'Champ de saisie texte.',
  props: [
    { name: 'label', type: 'text', defaultValue: 'Email', description: 'Label du champ' },
    { name: 'placeholder', type: 'text', defaultValue: 'votre@email.fr', description: 'Texte placeholder' },
    { name: 'error', type: 'text', defaultValue: '', description: 'Message d\'erreur' },
    { name: 'disabled', type: 'boolean', defaultValue: false, description: 'Etat desactive' },
  ],
};

export const toggleConfig: ComponentPlaygroundConfig = {
  name: 'Toggle',
  description: 'Interrupteur on/off.',
  props: [
    { name: 'label', type: 'text', defaultValue: 'Notifications', description: 'Label' },
    { name: 'defaultChecked', type: 'boolean', defaultValue: true, description: 'Etat initial' },
  ],
};

export const listItemConfig: ComponentPlaygroundConfig = {
  name: 'ListItem',
  description: 'Element de liste avec icone et action.',
  props: [
    { name: 'title', type: 'text', defaultValue: 'Consulter un medecin', description: 'Titre principal' },
    { name: 'subtitle', type: 'text', defaultValue: 'Teleconsultation disponible', description: 'Sous-titre' },
    { name: 'showArrow', type: 'boolean', defaultValue: true, description: 'Fleche droite' },
  ],
};

export const headerConfig: ComponentPlaygroundConfig = {
  name: 'Header',
  description: 'Barre de navigation superieure.',
  props: [
    { name: 'variant', type: 'select', defaultValue: 'dark', options: ['dark', 'light'], description: 'Theme du header' },
    { name: 'title', type: 'text', defaultValue: 'Historique', description: 'Titre de la page' },
    { name: 'showBack', type: 'boolean', defaultValue: false, description: 'Bouton retour' },
  ],
};

export const bottomNavConfig: ComponentPlaygroundConfig = {
  name: 'BottomNav',
  description: 'Navigation inferieure avec 4 onglets.',
  props: [
    { name: 'activeTab', type: 'select', defaultValue: 'accueil', options: ['accueil', 'historique', 'ordonnances', 'profil'], description: 'Onglet actif' },
  ],
};
