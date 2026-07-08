'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function NavLinks() {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return [
      'font-body text-base tracking-wide transition-colors duration-200',
      isActive ? 'text-accent' : 'text-muted hover:text-accent',
    ].join(' ');
  };

  return (
    <nav className="px-6 pt-6">
      <div className="mx-auto flex max-w-[640px] gap-6">
        <Link href="/" className={linkClass('/')}>
          Thoughts
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
