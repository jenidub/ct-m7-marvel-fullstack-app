import "./css/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CharacterDatabase from './components/CharacterDatabase';
import AddCharacter from './components/AddCharacter';
import EditCharacter from './components/EditCharacter';
import DeleteCharacter from './components/DeleteCharacter';
import ErrorPage from './components/ErrorPage';

function App() {
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ errorType, setErrorType ] = useState(null);

    // Retrieve the superhero data from database
    const DEFAULT_API_URL = "http://127.0.0.1:5000/characters";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(DEFAULT_API_URL);
                if (!response.ok) {
                    throw new Error(`HTML error! Status code ${response.statusText}`)
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setErrorType(error);
                setLoading(false);
                throw new Error(`${errorType}`);
            }
        }

        fetchData();
    });

  return (
    <>
      {!loading && (
        <>
          <NavBar />
          <h3 className="sub-title">Welcome to the</h3>
          <h1 className="main-title">JeniDub Marvel Character Database</h1>
          <br />
          <Routes>
            <Route path='/' element={<HomePage characterDatabase={data} />} />
            <Route path='/database' element={<CharacterDatabase characterDatabase={data} />} />
            <Route path="/add" element={<AddCharacter sampleCharacterCard={data[0]}/>} />
            <Route path="/edit" element={<EditCharacter characterDatabase={data} />} />
            <Route path="/delete" element={<DeleteCharacter characterDatabase={data} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App;
