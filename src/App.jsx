import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Module1 from './pages/Modulo1';
import Module2 from './pages/Modulo2';
import Module3 from './pages/Modulo3';
import Perfil from './pages/Perfil';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
       <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general" element={<Module1 />} />
            <Route path="/particular" element={<Module2 />} />
            <Route path="/documentacion" element={<Module3 />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
