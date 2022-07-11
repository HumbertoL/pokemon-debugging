import { Button, TextField } from '@mui/material';
import { useState } from "react";

function PokemonInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    window.location.search = `q=${value}`
  }

  return (
    <div className="valueInputContainer">
      <TextField
        className="valueInput"
        label="Enter name or ID"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <br />
      <Button className="valueButton" variant="contained" color="primary" onClick={handleClick}>
        Ok
      </Button>
    </div>
  );
}

export default PokemonInput;
