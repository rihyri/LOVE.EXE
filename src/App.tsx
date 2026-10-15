import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './state/ProgressContext';
import { Layout } from './components/Layout';
import { IntroPage } from './pages/IntroPage';
import { HubPage } from './pages/HubPage';
import { StagePage } from './pages/StagePage';
import { EndingPage } from './pages/EndingPage';
export default function App() { return <ProgressProvider><BrowserRouter><Routes><Route element={<Layout/>}><Route path="/" element={<IntroPage/>}/><Route path="hub" element={<HubPage/>}/><Route path="stages/:stageId" element={<StagePage/>}/><Route path="ending" element={<EndingPage/>}/><Route path="*" element={<StagePage/>}/></Route></Routes></BrowserRouter></ProgressProvider>; }
