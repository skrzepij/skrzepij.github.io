/**
 * Validates if the provided string is a valid Google Analytics ID.
 * Supports both Universal Analytics (UA-XXXXXXXXX-X) and GA4 (G-XXXXXXXXXX) formats.
 *
 * @param id - The Google Analytics ID to validate
 * @returns true if the ID is valid, false otherwise
 */
export function isValidGoogleAnalyticsId(id: string): boolean {
  // GA4 format: G-XXXXXXXXXX (G- followed by 10 alphanumeric characters)
  const ga4Pattern = /^G-[A-Z0-9]{10}$/;
  // Universal Analytics format: UA-XXXXXXXXX-X (UA- followed by digits, hyphen, digit)
  const uaPattern = /^UA-\d{6,10}-\d{1,4}$/;

  return ga4Pattern.test(id) || uaPattern.test(id);
}

/**
 * Sanitizes a Google Analytics ID by validating its format.
 * Returns the ID if valid, or null if invalid.
 *
 * @param id - The Google Analytics ID to sanitize
 * @returns The sanitized ID or null if invalid
 */
export function sanitizeGoogleAnalyticsId(id: string | undefined): string | null {
  if (!id) {
    return null;
  }

  return isValidGoogleAnalyticsId(id) ? id : null;
}
