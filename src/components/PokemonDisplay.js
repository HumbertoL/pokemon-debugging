import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getPokemonInfo } from '../utils/pokeapi';
import PokemonSummary from './PokemonSummary';

import MissingNo from '../static/MissingNo.png';

function PokemonDisplay({ searchKey }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (searchKey && !pokemonData && !isNotFound) {
      // TODO: use react-query
      getPokemonInfo(searchKey).then(([pokemon, species]) => {
        if (pokemon) {
          setPokemonData(pokemon);
          setPokemonSpecies(species)
          setIsNotFound(false);
        } else {
          setPokemonData(null);
          setPokemonSpecies(null);
          setIsNotFound(true);
        }
      });
    }
  }, [pokemonData, searchKey, isNotFound]);

  if (searchKey === 'missingno.') {
    return <img src={MissingNo} className="App-logo" />;
  }

  if (!pokemonData && !isNotFound) {
    // TODO: show loading UI
    return <div></div>;
  }

  return (
    <div className="pokemonContainer">
      {isNotFound ? (
        <Typography>
          Pokemon not found, please try a different search
        </Typography>
      ) : (
        <PokemonSummary pokemon={pokemonData} species={pokemonSpecies} />
      )}
    </div>
  );
}

export default PokemonDisplay;
