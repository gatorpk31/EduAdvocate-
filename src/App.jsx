import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Screener from './pages/Screener';
import Guide from './pages/Guide';
import GuideResult from './pages/GuideResult';
import Reviews from './pages/Reviews';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Account from './pages/Account';
import Admin from './pages/Admin';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

export default function App() {
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
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="account" element={<Account />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>
    </Routes>
  );
}
