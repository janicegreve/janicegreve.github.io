import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Books } from './pages/Books.jsx';
import { Layout } from './components/Layout.jsx';
import { Blog } from './pages/Blog';
import { PostDetails } from './pages/PostDetails';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}
