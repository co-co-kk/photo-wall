import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '@/page/home/Home';
import PhotoScrolling from '@/page/photoScrolling/PhotoScrolling';

// 新增：定义页面级组件（根据功能拆分）

export default function App () {
	return (
		<BrowserRouter basename="/marketing-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<PhotoScrolling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
	)
};