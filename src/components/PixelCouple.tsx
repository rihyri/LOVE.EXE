const boy = ['..hhhh..','..hhhh..','..hssh..','...ss...','..bbbb..','.bbbbbb.','..bbbb..','..pppp..','..p..p..','..p..p..','..k..k..'];
const girl = ['...hhhh.','..hsshh.','..hsshh.','..hddhh.','..dddd..','.dddddd.','..dddd..','...ss...','...ss...','...kk...'];
const colors: Record<string,string> = { h:'#262030', s:'#edbead', b:'#bcc7e1', p:'#64668d', k:'#f5e7df', d:'#e8a4be' };
export function PixelCouple() { return <svg className="couple couple-original" viewBox="0 0 100 68" role="img" aria-label="짧은 검정 머리의 석현님과 긴 검정 머리의 혜리님 픽셀 캐릭터" shapeRendering="crispEdges"><ellipse cx="50" cy="61" rx="41" ry="4" fill="#302840"/>{[boy,girl].map((person,i) => person.map((row,y) => [...row].map((cell,x) => cell !== '.' && <rect key={`${i}-${y}-${x}`} x={8+i*40+x*5} y={8+(i?5:0)+y*5} width="5" height="5" fill={colors[cell]}/>)))}<path d="M47 6h3v3h3V6h3v6h-3v3h-3v-3h-3z" fill="#efa9c5"/></svg>; }

