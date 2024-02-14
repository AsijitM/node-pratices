import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchJokes() {
      const response = await axios.get('/api/jokes');
      const data = await response.data;
      setJokes(data);
    }
    fetchJokes();
  }, []);

  return (
    <>
      <h1>Hello React from vite</h1>
      <p>Jokes :{jokes.length}</p>
      {jokes.map((i) => (
        <div key={i.id}>
          <h5>{i.id}</h5>
          <h3>{i.title}</h3>
          <p>{i.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
