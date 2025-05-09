import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CharacterDatabase from './components/CharacterDatabase';
import AddCharacter from './components/AddCharacter';
import EditCharacter from './components/EditCharacter';
import DeleteCharacter from './components/DeleteCharacter';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <NavBar />
      <h1 className="main-title">The JeniDub Marvel Universe</h1>
      <Routes>
        <Route path='/' element={<CharacterDatabase />} />
        <Route path="/add" element={<AddCharacter />} />
        <Route path="/edit" element={<EditCharacter />} />
        <Route path="/delete" element={<DeleteCharacter />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App;
