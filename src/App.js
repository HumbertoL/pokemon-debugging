import React from 'react';
import './App.css';
import ErrorState from './components/error-state';
import PokemonInput from './components/pokemon-input';
import PokemonSummary from './components/pokemon-summary';

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
        <div className="app-body">
          {hasError ? (
            <ErrorState />
          ) : (
            <>
              <PokemonInput searchKey={paramValue} />
              <PokemonSummary searchKey={paramValue} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
