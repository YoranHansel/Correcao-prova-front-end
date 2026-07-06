import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import PetsIndex from './pages/pets/Index';
import Create from './pages/pets/Create';
import Show from './pages/pets/Show';

function App() {
  const [pets, setPets] = useState([]);
  const [petLastId, setPetLastId] = useState(1)

  useEffect(() => {
    const stored = localStorage.getItem('app-pets');
    if (stored) {
      try {
        const arr = JSON.parse(stored);
        setPets(arr);
        const maxId = arr.reduce((m, p) => Math.max(m, p.id ?? 0), 0);
        setPetLastId(maxId + 1);
      } catch (e) {
        console.error('Failed to parse app-pets from localStorage', e);
      }
    }
  }, []);

  function petIdInc(){
    setPetLastId(prev => prev + 1)
  }

  function deletePet(id) {
    setPets(prev => {
      const updated = prev.filter(p => p.id !== id);
      localStorage.setItem('app-pets', JSON.stringify(updated));
      return updated;
    });
  }

  return (
  
    <BrowserRouter>
    
      {/*Fixo na página*/}
         <NavBar />

      {/*Rotas*/}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<PetsIndex pets={pets} setPets={setPets} deletePet={deletePet} />} />
        <Route path="/pet" element={<Create setPets={setPets} />} />
        <Route path="/pet/:id" element={<Show  pets={pets} deletePet={deletePet} />} />
        <Route path="/pet/:id/edit" element={<Create setPets={setPets} />} />

        <Route path="*" element={<Error404 />} />

      </Routes>

    </BrowserRouter>
    
  )
}

export default App
