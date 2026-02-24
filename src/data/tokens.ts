export const colors = {
  brand: [
    { name: 'Primary', token: 'brand-primary', hex: '#12352D', description: 'Headers, textes principaux' },
    { name: 'Teal', token: 'brand-teal', hex: '#1B7A68', description: 'Accents, liens actifs' },
    { name: 'Teal Light', token: 'brand-teal-light', hex: '#2D9B84', description: 'Icones, badges actifs' },
    { name: 'Yellow', token: 'brand-yellow', hex: '#EDE455', description: 'CTA, boutons primaires' },
    { name: 'Yellow Dark', token: 'brand-yellow-dark', hex: '#D4CC3A', description: 'CTA hover' },
  ],
  surface: [
    { name: 'Cream', token: 'surface-cream', hex: '#F5F0E8', description: 'Fond principal' },
    { name: 'Card Dark', token: 'surface-card-dark', hex: '#12352D', description: 'Cards sombres' },
    { name: 'Card Light', token: 'surface-card-light', hex: '#FAFAF7', description: 'Cards claires' },
  ],
  secondary: [
    { name: 'Salmon', token: 'secondary-salmon', hex: '#F2C8B4', description: 'Accent secondaire' },
    { name: 'Blue Light', token: 'secondary-blue-light', hex: '#D4E8F5', description: 'Accent info' },
    { name: 'Green Lime', token: 'secondary-green-lime', hex: '#E5EDCC', description: 'Accent nature' },
    { name: 'Yellow Pale', token: 'secondary-yellow-pale', hex: '#FDF5DC', description: 'Accent doux' },
  ],
  neutral: [
    { name: 'White', token: 'neutral-white', hex: '#FFFFFF', description: 'Blanc pur' },
    { name: 'Gray Light', token: 'neutral-gray-light', hex: '#F7F5F0', description: 'Fond sections' },
    { name: 'Gray 100', token: 'neutral-gray-100', hex: '#F0F0F0', description: 'Bordures legeres' },
    { name: 'Gray 200', token: 'neutral-gray-200', hex: '#E5E7EB', description: 'Dividers' },
    { name: 'Gray Medium', token: 'neutral-gray-medium', hex: '#6B7280', description: 'Texte secondaire' },
    { name: 'Gray Dark', token: 'neutral-gray-dark', hex: '#1F2937', description: 'Texte principal' },
    { name: 'Black', token: 'neutral-black', hex: '#1A1A1A', description: 'Emphase maximale' },
  ],
  semantic: [
    { name: 'Success', token: 'semantic-success', hex: '#059669', description: 'Positif, disponible' },
    { name: 'Warning', token: 'semantic-warning', hex: '#D97706', description: 'Attention, alerte' },
    { name: 'Danger', token: 'semantic-danger', hex: '#DC2626', description: 'Erreur, urgence' },
  ],
  status: [
    { name: 'Normal BG', token: 'status-normal-bg', hex: '#F5F0E8', description: 'Fond status normal' },
    { name: 'Warning BG', token: 'status-warning-bg', hex: '#FEF3C7', description: 'Fond avertissement' },
    { name: 'Danger BG', token: 'status-danger-bg', hex: '#FEE2E2', description: 'Fond erreur' },
    { name: 'Success BG', token: 'status-success-bg', hex: '#E5EDCC', description: 'Fond succes' },
  ],
};

export const typography = {
  heading: [
    { name: 'H1', font: 'Fraunces', weight: 'Bold (700)', size: '28px', sample: 'Bonjour Marie' },
    { name: 'H2', font: 'Fraunces', weight: 'SemiBold (600)', size: '22px', sample: 'Mes actions' },
    { name: 'H3', font: 'Fraunces', weight: 'SemiBold (600)', size: '17px', sample: 'Consultation video' },
  ],
  body: [
    { name: 'Body', font: 'Inter', weight: 'Regular (400)', size: '15px', sample: 'Vous avez un rappel de prevention en attente' },
    { name: 'Body Medium', font: 'Inter', weight: 'Medium (500)', size: '15px', sample: 'Dr. Sophie Laurent' },
    { name: 'Body SemiBold', font: 'Inter', weight: 'SemiBold (600)', size: '15px', sample: '06 12 34 56 78' },
    { name: 'Caption', font: 'Inter', weight: 'Regular (400)', size: '13px', sample: 'Teleconsultation disponible' },
    { name: 'Caption Medium', font: 'Inter', weight: 'Medium (500)', size: '13px', sample: '3 ordonnances actives' },
    { name: 'Tab', font: 'Inter', weight: 'Medium (500)', size: '10px', sample: 'ACCUEIL' },
  ],
};

export const spacing = [
  { name: '1', value: '4px' },
  { name: '2', value: '8px' },
  { name: '3', value: '12px' },
  { name: '4', value: '16px' },
  { name: '5', value: '20px' },
  { name: '6', value: '24px' },
  { name: '8', value: '32px' },
  { name: '10', value: '40px' },
  { name: '12', value: '48px' },
  { name: '16', value: '64px' },
];

export const shadows = [
  { name: 'sm', value: '0 2px 8px rgba(0, 0, 0, 0.04)', description: 'Cards, elements subtils' },
  { name: 'md', value: '0 4px 16px rgba(0, 0, 0, 0.08)', description: 'Elements en survol, dropdowns' },
  { name: 'lg', value: '0 10px 40px rgba(0, 0, 0, 0.15)', description: 'Modales, overlays' },
];

export const radii = [
  { name: 'sm', value: '4px' },
  { name: 'md', value: '8px' },
  { name: 'lg', value: '12px' },
  { name: 'xl', value: '16px' },
  { name: '2xl', value: '20px' },
  { name: '3xl', value: '24px' },
  { name: 'full', value: '9999px' },
];
