import './App.css';
import ButtonCarga from "./ButtonCarga"
import Animales from './Animales';
import UseState from './UseState';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio #1</h1>
      <ButtonCarga cargando={true}/>
      <ButtonCarga cargando={false}/>
      <h1>Ejercicio #2</h1>
      <Animales/>
      <h1>Ejercicio #3</h1>
      <UseState/>
    </div>
  );
}

export default App;
