import type { SVGProps } from 'react';

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9.75 2h3.5v11.72a3.75 3.75 0 1 1-3.5-3.54V2Z" />
      <path d="M16.75 2h2.75v2.75h-1.92A4.25 4.25 0 0 1 16.75 2Z" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.8 7.2c-.2-.7-.8-1.2-1.5-1.2C18.7 6 12 6 12 6s-6.7 0-8.3.1c-.7 0-1.3.5-1.5 1.2A26.46 26.46 0 0 0 2 12a26.46 26.46 0 0 0 .2 4.8c.2.7.8 1.2 1.5 1.2C5.3 18 12 18 12 18s6.7 0 8.3-.1c.7 0 1.3-.5 1.5-1.2A26.46 26.46 0 0 0 22 12a26.46 26.46 0 0 0-.2-4.8Z" />
      <path d="M10 15.5V8.5l6 3.5-6 3.5Z" fill="#0A0A0A" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21V13.9h2.9l.4-2.9h-3.3V8.4c0-.9.2-1.5 1.6-1.5h1.7V4.1a22.9 22.9 0 0 0-2 .1c-2 0-3.4 1.2-3.4 3.4v1.9H9.9v2.9h2.8V21h2.8Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" fill="#0A0A0A" />
      <circle cx="16.5" cy="7.5" r="1" fill="#0A0A0A" />
    </svg>
  );
}

export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
      <path d="M5 18l2 2 2-2m8 0l2 2 2-2" />
    </svg>
  );
}
