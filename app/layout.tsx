import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Echoes of Us - A Memory',
  description: 'A cinematic emotional storytelling experience',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Echoes of Us',
    description: 'A cinematic emotional storytelling experience',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-deep text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
