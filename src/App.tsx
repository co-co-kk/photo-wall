import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import MasonryGallery from '@/components/MasonryGallery/index'
import GlobeGallery from '@/components/GlobeGallery/index'
import TestPage from '@/components/testPage/index'


import FlowGallery from '@/components/FlowGallery/index'
import Home from '@/page/home/Home';

const navs = [
  // { path: '/', label: '瀑布流', comp: <Home /> },
  { path: '/', label: '瀑布流', comp: <MasonryGallery /> },
  { path: '/globe', label: '3D 环球', comp: <GlobeGallery /> },
  { path: '/flow', label: '满屏流动', comp: <FlowGallery /> },
  { path: '/test', label: '測試頁面', comp: <TestPage /> },
]

export default function App() {
  return (
    <BrowserRouter basename="/marketing-1">

    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <header className="p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-widest">高级相片展示</h1>
        <nav className="space-x-6">
          {navs.map(nav => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? 'underline text-sky-400 font-semibold'
                  : 'hover:text-sky-300'
              }
              end={nav.path === '/'}
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 h-full w-full">
        {/* <Routes>
          {navs.map(nav => (
            <Route key={nav.path} path={nav.path} element={nav.comp} />
          ))}
        </Routes> */}
                <Routes>
                {navs.map(nav => (
            <Route key={nav.path} path={nav.path} element={nav.comp} />
          ))}
                </Routes>
      </main>
      <footer className="text-center py-4 opacity-60 text-xs">
        &copy; {new Date().getFullYear()} 高级相片展示
      </footer>
    </div>
    </BrowserRouter>

  )
}