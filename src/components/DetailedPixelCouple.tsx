/** Small, hand-placed sprites based on the original PixelCouple's flat palette. */
const colors: Record<string, string> = {
 h: '#262030', t: '#40374f', s: '#edbead', l: '#f5d6c6',
 e: '#262030', n: '#cf968e', r: '#e8a4be', m: '#ac6e85',
 b: '#bcc7e1', u: '#8794b7', p: '#64668d',
 d: '#e8a4be', f: '#bb7f9e', k: '#f5e7df',
};

// One character = one square pixel. No gradients, strokes or facial contour lines.
const boy = [
 '.....hhhhhh',
 '....hhtthhhh',
 '....hhhhhhhh',
 '....hhhhlhhh',
 '....hllllllh',
 '....hseslesh',
 '.....lllnll',
 '.....slmlls',
 '......ssss',
 '.......ss',
 '.....bbbbbb',
 '....bbbbbbbu',
 '....bbbbbbbu',
 '....bbbbbbbu',
 '....sbbbbbbuus',
 '....sbbbbbb..sss',
 '.....bbbbbb',
 '.....pppppp',
 '.....pp.ppp',
 '.....pp..pp',
 '.....pp..pp',
 '.....kk..kk',
 '....kkk..kkk',
];

const girl = [
 '.....hhhhh',
 '....hhtthhh',
 '...hhtlllhhh',
 '...hhlllllhh',
 '...hlllllllh',
 '...hlesleslh',
 '...hlesleslh',
 '...hlrlllrsh',
 '...hhsllmshh',
 '...hhhssshhh',
 '...hhddssdhh',
 '..dddddddddh',
 '.sdddddddddh',
 'ss..dddddddh',
 '....ddddddsh',
 '....ddfddfdh',
 '....dddddddh',
 '.....ss.sshh',
 '.....ss.ss',
 '....kkk.kkk',
];

function Sprite({ rows, x }: { rows: string[]; x: number }) {
 return <g transform={`translate(${x} ${26 - rows.length})`}>{rows.flatMap((row, y) =>
  [...row].flatMap((cell, column) => colors[cell]
   ? [<rect key={`${column}-${y}`} x={column} y={y} width={1} height={1} fill={colors[cell]}/>]
   : []))}</g>;
}

/** Transparent, reusable game sprite. Both feet share the same baseline. */
export function DetailedPixelCouple() {
 return <svg className="couple couple-detailed" viewBox="0 0 34 27" role="img"
  aria-label="손을 잡고 가까이 선 소박한 픽셀 커플. 앞머리와 연보라 옷 차림의 석현님이 조금 더 크고, 혜리님은 앞머리 없는 긴 생머리와 핑크 원피스 차림입니다."
  shapeRendering="crispEdges">
  <Sprite rows={boy} x={2}/>
  <Sprite rows={girl} x={17}/>
 </svg>;
}
