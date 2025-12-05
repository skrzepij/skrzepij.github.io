export const ROUTES = {
  HERO: 'hero',
  SERVICES: 'services',
  PORTFOLIO: 'portfolio',
  ABOUT: 'about',
  CONTACT: 'contact',
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export interface NavItem {
  label: string;
  route: Route;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'START', route: ROUTES.HERO },
  { label: 'USŁUGI', route: ROUTES.SERVICES },
  { label: 'PROJEKTY', route: ROUTES.PORTFOLIO },
  { label: 'O MNIE', route: ROUTES.ABOUT },
  { label: 'KONTAKT', route: ROUTES.CONTACT },
] as const;
