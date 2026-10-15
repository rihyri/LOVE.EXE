const paths: Record<string, string> = {
  heart: 'M2 3h4v2h4V3h4v6h-2v2h-2v2H6v-2H4V9H2z',
  map: 'M1 3h4v10H1z M6 1h4v10H6z M11 3h4v10h-4z',
  sword: 'M11 1h4v4h-2v2h-2v2H9v2H7v2H5v2H1v-4h2V9h2V7h2V5h2V3h2z M1 5h2v2h2v2h2v2h2v2H7v2H5v-4H3V9H1z',
  chart: 'M1 13h14v2H1z M3 8h3v4H3z M7 5h3v7H7z M11 1h3v11h-3z',
  gift: 'M1 5h14v3H1z M2 9h5v6H2z M9 9h5v6H9z M3 1h4v3H3z M9 1h4v3H9z M7 3h2v12H7z',
  code: 'M4 3h2v2H4v2H2v2h2v2h2v2H4v-2H2V9H0V7h2V5h2z M10 3h2v2h2v2h2v2h-2v2h-2v2h-2v-2h2V9h2V7h-2V5h-2z',
  lock: 'M4 1h8v2H4z M2 3h2v4H2z M12 3h2v4h-2z M1 7h14v8H1z',
};
export function PixelIcon({ name, className = '' }: { name: string; className?: string }) { return <svg className={`pixel-icon ${className}`} viewBox="0 0 16 16" aria-hidden="true" shapeRendering="crispEdges"><path d={paths[name] ?? paths.heart} fill="currentColor" /></svg>; }
