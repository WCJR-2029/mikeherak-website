'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return [
      'font-body text-sm tracking-wide transition-colors duration-200',
      isActive ? 'text-accent' : 'text-muted hover:text-accent',
    ].join(' ');
  };

  return (
    <nav className="max-w-[640px] mx-auto px-6 pt-6 flex gap-6">
      <Link href="/" className={linkClass('/')}>
        Thoughts
      </Link>
      <Link href="/trails" className={linkClass('/trails')}>
        Trails
      </Link>
    </nav>
  );
}
