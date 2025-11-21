import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import FloatingIcons from './components/FloatingIcons';
import FloatingSocial from './components/FloatingSocial/FloatingSocial';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <div className="app">
      <FloatingIcons />
      <FloatingSocial />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
