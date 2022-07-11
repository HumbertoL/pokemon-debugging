import { Button, TextField } from '@mui/material';
import { useState } from "react";

function PokemonInput({ searchKey }) {
  const [value, setValue] = useState(searchKey);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    window.location.search = `q=${value}`
  }

   const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  };

  return (
    <div className="valueInputContainer">
      <TextField
        className="valueInput"
        label="Enter name or ID"
        variant="outlined"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <br />
      <Button className="valueButton" variant="contained" color="primary" onClick={handleClick}>
        Ok
      </Button>
    </div>
  );
}

export default PokemonInput;
