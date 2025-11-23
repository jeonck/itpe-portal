import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TopicWiki from './pages/TopicWiki';
import Roadmap from './pages/Roadmap';
import MindMap from './pages/MindMap';
import Timer from './pages/Timer';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<TopicWiki />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/mindmap" element={<MindMap />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
