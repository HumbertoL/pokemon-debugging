import { Grid, Typography } from '@mui/material';
import { startCase } from 'lodash';

/**
 *
 * @param {array} stats
 */
const calculateBestStat = (stats) => {
  let bestStat = stats[0];

  for (let i = 1; i < stats.length; i++) {
    if (stats[i] > bestStat.base_stat) bestStat = stats[i];
  }

  return startCase(bestStat.stat.name);
};

function PokemonSummary({ pokemon, species }) {
  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <Typography>Pokedex #:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{pokemon.id}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Name:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{startCase(pokemon.name)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Types:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          {startCase(pokemon.types[0].type.name)} /{' '}
          {startCase(pokemon.types[1].type.name)}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Catch Rate:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{species.capture_rate}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Best Stat:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{calculateBestStat(pokemon.stats)}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Front:</Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={pokemon.sprites.front_default} />
      </Grid>

      <Grid item xs={6}>
        <Typography>Back:</Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={pokemon.sprites.back_default} />
      </Grid>
    </Grid>
  );
}

export default PokemonSummary;
