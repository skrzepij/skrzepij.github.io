/**
 * Breakpoints used throughout the application
 * These values match Tailwind CSS default breakpoints
 * @see https://tailwindcss.com/docs/responsive-design
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Mobile breakpoint - used for mobile-specific logic
 * Matches Tailwind's `md:` breakpoint (768px)
 * In media queries, use `max-width: 767px` for mobile
 */
export const MOBILE_BREAKPOINT = BREAKPOINTS.md;

/**
 * Type for breakpoint keys
 */
export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Helper function to create media query string
 * @example createMediaQuery('md', 'max') => '(max-width: 767px)'
 */
export function createMediaQuery(breakpoint: BreakpointKey, type: 'min' | 'max' = 'min'): string {
  const value = BREAKPOINTS[breakpoint];
  if (type === 'max') {
    return `(max-width: ${value - 1}px)`;
  }
  return `(min-width: ${value}px)`;
}
