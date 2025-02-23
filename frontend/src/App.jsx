import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CharacterDatabase from './components/CharacterDatabase';

function App() {
  return (
    <>
      <NavBar />
      <h1 className="main-title">The JeniDub Marvel Universe</h1>
      <Routes>
        <Route path='/' element={<CharacterDatabase />} />
      </Routes>
    </>
  )
}

export default App;
