/* ------------------------------------------------------------------ */
/*  Inline SVG icon helpers                                           */
/* ------------------------------------------------------------------ */

function IconChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#12352D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B7A68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#F87171" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Notification data types                                           */
/* ------------------------------------------------------------------ */

interface Notification {
  icon: React.ComponentType;
  iconBg: string;
  title: string;
  body: string;
  time: string;
  unread: boolean;
  accentBorder: boolean;
}

interface NotificationSection {
  label: string;
  items: Notification[];
}

const sections: NotificationSection[] = [
  {
    label: "Aujourd\u2019hui",
    items: [
      {
        icon: IconBell,
        iconBg: '#E0F2F1',
        title: 'Rappel rendez-vous',
        body: 'Votre t\u00e9l\u00e9consultation avec Dr. Sophie Laurent est dans 1h',
        time: 'Il y a 30 min',
        unread: true,
        accentBorder: true,
      },
      {
        icon: IconCheck,
        iconBg: '#E5EDCC',
        title: 'Ordonnance disponible',
        body: 'Votre ordonnance est pr\u00eate \u00e0 \u00eatre t\u00e9l\u00e9charg\u00e9e',
        time: 'Il y a 2h',
        unread: false,
        accentBorder: true,
      },
    ],
  },
  {
    label: 'Hier',
    items: [
      {
        icon: IconHeart,
        iconBg: '#FEE2E2',
        title: 'Rappel pr\u00e9vention',
        body: "N\u2019oubliez pas votre bilan sanguin annuel",
        time: 'Hier \u00e0 09:00',
        unread: false,
        accentBorder: false,
      },
    ],
  },
  {
    label: 'Cette semaine',
    items: [
      {
        icon: IconCalendar,
        iconBg: '#F3F4F6',
        title: 'Confirmation',
        body: 'Votre rendez-vous du 15 janvier a \u00e9t\u00e9 confirm\u00e9',
        time: 'Lun. 13 jan.',
        unread: false,
        accentBorder: false,
      },
      {
        icon: IconInfo,
        iconBg: '#F3F4F6',
        title: 'Mise \u00e0 jour',
        body: "Une nouvelle version de l\u2019application est disponible",
        time: 'Dim. 12 jan.',
        unread: false,
        accentBorder: false,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  NotificationsScreen                                               */
/* ------------------------------------------------------------------ */

export function NotificationsScreen() {
  return (
    <div
      className="w-[375px] h-[812px] bg-[#F5F0E8] flex flex-col relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ---- White header ---- */}
      <div className="bg-white shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        {/* Status bar spacer */}
        <div className="h-[54px]" />

        {/* Nav bar */}
        <div className="h-14 px-5 flex items-center relative">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F5F0E8] transition-colors cursor-pointer -ml-2">
            <IconChevronLeft />
          </button>
          <span
            className="absolute left-1/2 -translate-x-1/2 text-[17px] font-semibold text-[#12352D]"
          >
            Notifications
          </span>
        </div>
      </div>

      {/* ---- Scrollable content ---- */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-5 pt-5 pb-10 flex flex-col gap-6">
          {sections.map((section) => (
            <div key={section.label}>
              {/* Section label */}
              <h3
                className="text-[14px] font-semibold text-[#6B7280] uppercase tracking-wide mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px' }}
              >
                {section.label}
              </h3>

              {/* Items */}
              <div className="flex flex-col gap-2.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title + item.time}
                      className={`bg-white rounded-xl p-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)] relative ${
                        item.accentBorder ? 'border-l-[3px] border-l-[#1B7A68]' : ''
                      } ${!item.accentBorder ? 'opacity-75' : ''}`}
                    >
                      <div className="flex gap-3">
                        {/* Icon circle */}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: item.iconBg }}
                        >
                          <Icon />
                        </div>

                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <h4
                              className={`text-[14px] text-[#12352D] leading-snug ${
                                item.unread ? 'font-bold' : 'font-semibold'
                              }`}
                            >
                              {item.title}
                            </h4>
                            {/* Unread dot */}
                            {item.unread && (
                              <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
                            )}
                          </div>
                          <p className="text-[13px] text-[#4B5563] leading-relaxed mb-1.5">
                            {item.body}
                          </p>
                          <span className="text-[11px] text-[#9CA3AF]">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
