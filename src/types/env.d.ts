/// <reference types="astro/client" />

/**
 * Type declarations for image imports
 * Astro automatically handles image imports via astro:assets
 * These declarations tell TypeScript how to handle image imports
 */
declare module '*.png' {
  const content: import('astro').ImageMetadata;
  export default content;
}

declare module '*.jpg' {
  const content: import('astro').ImageMetadata;
  export default content;
}

declare module '*.jpeg' {
  const content: import('astro').ImageMetadata;
  export default content;
}

declare module '*.gif' {
  const content: import('astro').ImageMetadata;
  export default content;
}

declare module '*.svg' {
  const content: import('astro').ImageMetadata | string;
  export default content;
}

declare module '*.webp' {
  const content: import('astro').ImageMetadata;
  export default content;
}

declare module '*.avif' {
  const content: import('astro').ImageMetadata;
  export default content;
}
