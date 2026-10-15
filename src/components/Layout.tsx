import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { PixelIcon } from './PixelIcon';
export function Layout() {
 const { pathname } = useLocation();
 useEffect(() => { window.scrollTo(0, 0); document.querySelector<HTMLElement>('main')?.focus(); }, [pathname]);
 return <><a className="skip-link" href="#main">본문으로 건너뛰기</a><header className="topbar"><Link className="brand" to="/"><PixelIcon name="heart"/> LOVE.EXE <span>/ BIRTHDAY EDITION</span></Link><span className="online"><i/> SYSTEM ONLINE</span></header><main id="main" tabIndex={-1}><Outlet/></main><footer><span>BUILT WITH LOVE, COMPILED FOR YOU.</span><span>© LOVE LAB · 11.01</span></footer></>;
}
