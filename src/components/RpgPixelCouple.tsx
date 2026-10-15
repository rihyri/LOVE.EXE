/** Original 36/32px RPG sprites. Each symbol is one hard-edged logical pixel. */
const palette: Record<string, string> = {
 o:'#211b35', h:'#262030', t:'#40374f', H:'#625572',
 s:'#edbead', l:'#f5d6c6', a:'#cf968e', e:'#262030', r:'#e8a4be', m:'#ac6e85',
 b:'#bcc7e1', B:'#dce0ef', u:'#8794b7', p:'#64668d', q:'#474260',
 d:'#e8a4be', D:'#f5c5d7', f:'#bb7f9e', k:'#f5e7df', w:'#f5e7df', j:'#aca6be',
};

const boy = [
 '.......oooooo',
 '.....oohttthhoo',
 '....ohttHHtthhho',
 '....ohtttttthhho',
 '....ohhhhhtthhho',
 '....ohhhllhhhlho',
 '....ohllllllllho',
 '....ohslelllesho',
 '.....sslellless',
 '.....slllnllls',
 '......sllmllls',
 '.......ssssss',
 '........asso',
 '......oBwsswBo',
 '.....oBBbwbbBuo',
 '....oBBBbbbbBuuo',
 '....oBBubbbbbuuso',
 '....oBuobbbbbuoaso',
 '....oslobbbbbuo.ao',
 '....osloBBBBBuo',
 '.....ooobbbbbuo',
 '.......obbbbbuo',
 '.......obbbbbuo',
 '.......obbbbbuo',
 '.......oBBBBBuo',
 '.......opppppqo',
 '.......opppppqo',
 '.......oppqppqo',
 '.......oppqppqo',
 '.......oppqopqo',
 '.......oppq.opqo',
 '.......opqq.opqo',
 '.......ojjj.ojjo',
 '......owkkkoowkko',
 '......okkkjookkjo',
 '......ooooo.ooooo',
];

const girl = [
 '.......oooooo',
 '.....oohttthhoo',
 '....ohtHHtthhhho',
 '....ohtthllthhho',
 '....ohtllllllhho',
 '....ohsllllllsho',
 '....ohsleelleelho',
 '....ohsleelleelho',
 '....ohslrlllrslho',
 '....ohhsllmllshho',
 '....ohhhssssshhho',
 '....ohhhoassoohho',
 '....ohhoDwsswDhoo',
 '....ohoDDdwwdDdo',
 '....oodDDddddDffo',
 '....osodddddddffo',
 '....asolddddddffo',
 '....oo.oddddddfso',
 '......odddddddfso',
 '......odDddDddfoo',
 '......odDddDddffo',
 '......odddddddffo',
 '......odDddDddffo',
 '......oooooollooo',
 '........oss.osso',
 '........oss.osso',
 '........oss.osso',
 '........oss.osso',
 '........oww.owwo',
 '.......ojkkoojkko',
 '......ojkkkoojkko',
 '......ooooo.ooooo',
];

function Sprite({ rows, x }: { rows: string[]; x: number }) {
 return <g transform={`translate(${x} ${39 - rows.length})`}>{rows.flatMap((row, y) =>
  [...row].flatMap((cell, column) => palette[cell]
   ? [<rect key={`${column}-${y}`} x={column} y={y} width={1} height={1} fill={palette[cell]}/>]
   : []))}</g>;
}

/** A separate candidate: the original and previous components remain untouched. */
export function RpgPixelCouple() {
 return <svg className="couple couple-rpg" viewBox="0 0 46 40" role="img"
  aria-label="작은 RPG 게임 스프라이트 스타일로 손을 잡은 커플. 앞머리가 있는 석현님은 연보라 니트와 바지, 조금 더 아담한 혜리님은 앞머리 없는 긴 생머리와 핑크 원피스 차림입니다."
  shapeRendering="crispEdges">
  <Sprite rows={girl} x={24}/>
  <Sprite rows={boy} x={1}/>
  <g aria-hidden="true">
   <path fill={palette.o} d="M19 20h2v1h2v1h3v-1h3v3h-3v1h-4v-1h-2v-1h-1z"/>
   <path fill={palette.s} d="M20 21h1v1h2v1h3v-1h2v1h-2v1h-4v-1h-2z"/>
   <path fill={palette.l} d="M22 22h2v1h-2z"/>
  </g>
 </svg>;
}
