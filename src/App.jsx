import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Books } from './pages/Books';
import { Blog } from './pages/Blog';
import { PostDetails } from './pages/PostDetails';
import { Newsletter } from './pages/Newsletter';
import { About } from './pages/About';

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
          <Route path="/books" element={<Books />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<PostDetails />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}
