import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yufang Chiu',
  description: 'Portfolio of Yufang Chiu',
  keywords: [
    'Yufang',
    'Chiu',
    'Amber',
    'CV',
    'Resume',
    'Full Stack Engineer',
    'React',
    'Next',
    'JavaScript',
    'TypeScript',
    'Node',
    'Express',
  ],
  authors: [{ name: 'Yufang Chiu' }],
  creator: 'Yufang Chiu',
  themeColor: '#b93e36',
  metadataBase: new URL('https://yufangchiu.vercel.app/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Full Stack Engineer - Currently working with React/Next." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
