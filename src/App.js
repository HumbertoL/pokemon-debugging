import './App.css';
import PokemonInput from './components/pokemon-input';

const getParam = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  return params["q"];
};


function App() {
  const paramValue = getParam();

  return (
    <div className="App">
        <div className="app-body">
       {paramValue ?  <div /> : <PokemonInput /> }
       </div>
    </div>
  );
}

export default App;
