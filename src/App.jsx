import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
}

export default App;