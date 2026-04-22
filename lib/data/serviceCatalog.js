import { C } from '@/lib/tokens';

export const SERVICE_VISUALS = [
  {
    id: 'bi',
    badgeColor: C.teal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 21l4-7 4 4 4-9 5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'immo',
    badgeColor: C.teal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 28V14l12-10 12 10v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <rect x="11" y="19" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M16 19v9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 'cashflow',
    badgeColor: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M12 13a4 4 0 018 0c0 2-2 3-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 9v2m0 10v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'data',
    badgeColor: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="9" rx="10" ry="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 9v7c0 2.21 4.48 4 10 4s10-1.79 10-4V9" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16v7c0 2.21 4.48 4 10 4s10-1.79 10-4v-7" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'ai',
    badgeColor: C.teal,
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'marketing',
    badgeColor: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 20s4-8 12-8 12 8 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export function getLocalizedServices(items = {}) {
  return SERVICE_VISUALS.map((service) => ({
    ...service,
    ...(items[service.id] || {}),
  }));
}
