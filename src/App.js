import React from 'react';
import './App.css';
import ErrorState from './components/ErrorState';
import PokemonInput from './components/PokemonInput';
import PokemonDisplay from './components/PokemonDisplay';

const getParam = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  return params['q'];
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const paramValue = getParam();

    return (
      <div className="App">
        <div className="borderContainer">
          <div className="app-body">
            {hasError ? (
              <ErrorState />
            ) : (
              <>
                <PokemonInput searchKey={paramValue} />
                <PokemonDisplay searchKey={paramValue} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
