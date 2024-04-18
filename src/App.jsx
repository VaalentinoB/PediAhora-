import Navbar from "./Navbar";
import Greeting from "./ItemListContainer";
function App() {
  return (
    <div>
      <Navbar />
      <Greeting greeting="¡Hola! ¿Que vas a pedir hoy?" />
    </div>
  );
}

export default App;
