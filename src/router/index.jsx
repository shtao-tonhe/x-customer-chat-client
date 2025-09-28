
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import ChatPage from '../pages/ChatPage';
// import HelpPage from '../pages/HelpPage';
// import AboutPage from '../pages/AboutPage';

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/chat" element={<Home />} />
        {/* <Route path="/help" element={<HelpPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
        {/* 可扩展更多路由 */}
      </Routes>
    </Layout>
  );
};

export default AppRouter;