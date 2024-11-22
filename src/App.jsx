import { useState } from 'react'
import './App.css'
import Saludo from './componentes/Saludo.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Bienvenido a React con Vite</h1>
      <Saludo nombre="Mia" />
      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default App;