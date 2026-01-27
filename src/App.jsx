import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Books } from './pages/Books.jsx';
import { Layout } from './components/Layout.jsx';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </Router>
  )
}
