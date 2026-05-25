import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claimr | Creator Earnings Optimization',
  description: 'Claimr unearths hidden creator earnings, smart missions, and automatic monetization insights across TikTok, YouTube, Facebook, and Instagram.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
