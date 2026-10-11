import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Can Gong | Robotics & Embodied Intelligence',
  description: 'Can Gong (龚灿), an undergraduate at HUST. Research and projects in robot manipulation, visuotactile perception, assistive navigation, and household robotics.',
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
