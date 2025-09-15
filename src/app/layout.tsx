import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Akhara',
  description: 'A developer-first community to build model training skills and open AI systems.',
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
<header className="border-b border-gray-200 dark:border-gray-800">
<nav className="mx-auto max-w-5xl px-4 flex items-center justify-between py-4">
<a href="/" className="font-semibold">AI Akhara</a>
<div className="flex gap-4 text-sm">
<a href="/about">About</a>
<a href="/projects">Projects</a>
<a href="/office-hours">Office Hours</a>
<a href="/news">News</a>
</div>
</nav>
</header>
<main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
<footer className="mx-auto max-w-5xl px-4 py-10 text-sm opacity-70">© {new Date().getFullYear()} AI Akhara</footer>
</body>
</html>
);
}