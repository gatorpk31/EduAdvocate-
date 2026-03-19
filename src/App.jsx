import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Screener from './pages/Screener';
import Guide from './pages/Guide';
import GuideResult from './pages/GuideResult';
import Reviews from './pages/Reviews';
import Feedback from './pages/Feedback';
import Admin from './pages/Admin';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-KNH8DF3Z91', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="screener" element={<Screener />} />
        <Route path="guide" element={<Guide />} />
        <Route path="guide/result" element={<GuideResult />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>
    </Routes>
  );
}
