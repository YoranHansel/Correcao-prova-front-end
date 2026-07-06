import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import PetsIndex from './pages/pets/Index';
import Create from './pages/pets/Create';

function App() {
  const [pets, setPets] = useState([]);

  return (
  
    <BrowserRouter>
    
      {/*Fixo na página*/}
         <NavBar />

      {/*Rotas*/}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<PetsIndex pets={pets} setPets={setPets}/>} />
        <Route path="/pet" element={<Create />} />
        <Route path="/pet/:id" element={<></>} />
        <Route path="/pet/:id/edit" element={<></>} />

        <Route path="*" element={<Error404 />} />

      </Routes>

    </BrowserRouter>
    
  )
}

export default App
