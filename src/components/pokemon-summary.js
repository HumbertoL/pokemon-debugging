import { Grid, Typography } from '@mui/material';
import { startCase } from 'lodash';
import { useEffect, useState } from 'react';
import { getPokemonByIdOrName } from '../utils/pokeapi';

function PokemonSummary({ searchKey }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    if (searchKey && !pokemonData && !isNotFound) {
      // TODO: use react-query
      getPokemonByIdOrName(searchKey).then((data) => {
        if (data) {
          setPokemonData(data);
          setIsNotFound(false);
        } else {
          setPokemonData(null);
          setIsNotFound(true);
        }
      });
    }
  }, [pokemonData, searchKey, isNotFound]);

  if (isNotFound) {
    return (
      <div className="pokemonContainer">
        <Typography>
          Pokemon not found, please try a different search
        </Typography>
      </div>
    );
  }

  if (!pokemonData) {
    // TODO: show loading UI
    return <div></div>;
  }

  return (
    <div className="pokemonContainer">
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography>Pokedex #:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{pokemonData.id}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Name:</Typography>
        </Grid>
        <Grid item xs={6}>
          {startCase(pokemonData.name)}
        </Grid>
        <Grid item xs={6}>
          <Typography>Types:</Typography>
        </Grid>
        <Grid item xs={6}>
          {startCase(pokemonData.types[0].type.name)} /{' '}
          {startCase(pokemonData.types[1].type.name)}
        </Grid>
        <Grid item xs={6}>
          <Typography>Front:</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={pokemonData.sprites.front_default} />
        </Grid>

        <Grid item xs={6}>
          <Typography>Back:</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={pokemonData.sprites.back_default} />
        </Grid>
      </Grid>
    </div>
  );
}

export default PokemonSummary;
