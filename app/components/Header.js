// app/components/Header.js
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-nav/80 backdrop-blur-lg border-b border-white/5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-foreground">
          Al-Matsurat API
        </div>
        <div className="flex items-center gap-4">
           <Link href="https://wisnuibnu-dev.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
           <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}