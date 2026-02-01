import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { LanguageWrapper } from './components/LanguageWrapper';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Books } from './pages/Books';
import { BookDetails } from "./pages/BookDetails";
import { Blog } from './pages/Blog';
import { PostDetails } from './pages/PostDetails';
import { Newsletter } from './pages/Newsletter';
import { About } from './pages/About';
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />

        <Route path="/:lang" element={<LanguageWrapper />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="books/:id" element={<BookDetails />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<PostDetails />} />
            <Route path="newsletter" element={<Newsletter />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  )
}
