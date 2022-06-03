import './App.css';
import Movies from './components/Movies';
import { MovieProvider } from './state/MoveContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <h1>Hola deamos</h1>

        <Movies />
      </div>
    </MovieProvider>
  );
}

export default App;
