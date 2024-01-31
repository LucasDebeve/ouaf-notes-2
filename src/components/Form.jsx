import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';
// import {fetchNotes} from "../api/notes";
import PropTypes from "prop-types";
import {fetchNotes} from "../api/notes";

function Form({ updateNotes, loading }) {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(inputs => ({...inputs, [name]: value}));
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    loading();
    fetchNotes(inputs)
      .then((data) => {
        console.log(data);
        updateNotes(data[0], data[1], data[2]);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField name="username" id="username" label="Login" variant="outlined" onChange={handleChange} margin="normal" size="small"/>
      </div>
      <div>
        <TextField name="password" id="password" label="Mot de passe" variant="outlined" onChange={handleChange} type="password"
          autoComplete="current-password" margin="normal" size="small"/>

      </div>
      <Button type="submit" variant="contained">Se connecter</Button>
    </form>
  );
}

Form.propTypes = {
  updateNotes: PropTypes.func,
  loading: PropTypes.func,
};

Form.defaultProps = {
  updateNotes: () => {},
  loading: () => {},
};


export default Form;