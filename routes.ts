export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES : EachRoute[] = [
  {
    title: "Оглавление",
    href: "/",
  },
  {
    title: "Правила",
    href: "/rules",
  },
  {
    title: "Конституция",
    href: "/constitution",
  },
  {
    title: "Основное",
    href: "/introduction",
    noLink: true,
    items: [
      { title: "О нас", href: "/about" },
      { title: "FAQ", href: "/faq" },
      { title: "Начать игру", href: "/start-game" },
    ],
  },
  {
    title: "Minecraft",
    href: "/minecraft",
    noLink: true,
    items: [
      { title: "QoL улучшения", href: "/qol" },
      { title: "Команды", href: "/commands" },
      { title: "Голосовой чат, эмоции и пластинки", href: "/social" },
      { title: "Стойки для брони", href: "/armorstand" },
    ],
  },
  {
    title: "Гайды",
    href: "/guides",
    noLink: true,
    items: [
      { title: "Управление эмблемами", href: "/emblems" },
      { title: "Как сварить свой первый напиток и не умереть", href: "/brewery" },
      { title: "Улучшенные крафты камнереза", href: "/mastercutter" },
      { title: "Как установить скин тремя способами", href: "/skinsetup" },
    ],
  },
  {
    title: "Юр. документы",
    href: "/legal",
    noLink: true,
    items: [
      { title: "Условия использования", href: "/terms" },
      { title: "Политика конфиденциальности", href: "/privacy" },
      { title: "Политика возврата средств", href: "/refund" },
    ],
  },
];