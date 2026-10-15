import { Link, useSearchParams } from 'react-router-dom';
import { PixelCouple } from './PixelCouple';
import { DetailedPixelCouple } from './DetailedPixelCouple';
import { RpgPixelCouple } from './RpgPixelCouple';

const variants = {
 original: { label: '첫 버전', Component: PixelCouple },
 previous: { label: '이전 버전', Component: DetailedPixelCouple },
 rpg: { label: 'RPG 시안', Component: RpgPixelCouple },
} as const;

/** Optional comparison is URL-only; never writes quest progress or preferences. */
export function IntroCharacters() {
 const [params] = useSearchParams();
 const requested = params.get('characters');
 const variant = requested && Object.prototype.hasOwnProperty.call(variants, requested)
  ? requested as keyof typeof variants : 'rpg';
 const { Component } = variants[variant];
 return <>
  <Component/>
  {params.has('characters') && <nav className="character-comparison" aria-label="캐릭터 시안 비교">
   {Object.entries(variants).map(([key, item]) => {
    const next = new URLSearchParams(params);
    next.set('characters', key);
    return <Link key={key} to={`?${next}`} aria-current={variant === key ? 'true' : undefined}>{item.label}</Link>;
   })}
  </nav>}
 </>;
}
