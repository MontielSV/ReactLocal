import logo from './logo.svg';
import './App.css';
import Contador from './Contador';
import Button from './Boton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <Button/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Calculadora A/N
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
