import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Places from './pages/Places';
import NotFound from './pages/Not-Found';
import Galery from './pages/Galery';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places/:type" element={<Places />} />
          <Route path="/Galery" element={<Galery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;