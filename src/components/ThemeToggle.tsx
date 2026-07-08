'use client';

import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Theme {
  const current = document.documentElement.dataset.theme as Theme | undefined;
  if (current === 'light' || current === 'dark') return current;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getServerSnapshot(): Theme | null {
  return null;
}

function setTheme(next: Theme) {
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
  listeners.forEach((listener) => listener());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (theme === null) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="ml-auto font-body text-base text-muted transition-colors duration-200 hover:text-accent"
    >
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}
