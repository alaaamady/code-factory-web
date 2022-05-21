import { MenuItem, Select, TextField, Button } from "@mui/material";
import React from "react";
import { useState} from 'react'
import makeStyles from "@emotion/styled";

const Form = ({ handleClose }) => {
  const [gender, setGender] = useState();

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),'& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },'& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

  const handleChange = () => {
    setGender();
  };
  return (
    <form className="class.root">
      <TextField
        id="outlined-required"
        label="Username"
        required
      ></TextField>
      <TextField
        id="outlined-required"
        label="First Name"
        required
      ></TextField>
      <TextField
        id="outlined-required"
        label="Last Name"
        required
      ></TextField>
      <TextField
        id="outlined-required"
        label="Email"
        type="email"
        required
      ></TextField>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <TextField id="outlined-number" label="Age" type="number" />
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={gender}
        label="Gender"
        onChange={handleChange}
        required
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="unspecified">Do Not Specify</MenuItem>
      </Select>
      <TextField id='country' label='Country'/>
      <div>
        <Button variant="contained">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
</div>
    </form>
  );
};

export default Form;
