import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'AI Akhara',
  description: 'A community contribution initative to build a skilled community with rigour in AI systems.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<GoogleAnalytics />
<header className="border-b border-gray-200 dark:border-gray-800">
<nav className="mx-auto max-w-5xl px-4 flex items-center justify-between py-4">
<Link href="/" className="font-semibold">AI Akhara</Link>
<div className="flex gap-4 text-sm">
<Link href="/about">About</Link>
<Link href="/projects">Projects</Link>
<Link href="/office-hours">Office Hours</Link>
<Link href="/news">News</Link>
</div>
</nav>
</header>
<main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
<footer className="mx-auto max-w-5xl px-4 py-10 text-sm opacity-70">© {new Date().getFullYear()} AI Akhara</footer>
</body>
</html>
);
}