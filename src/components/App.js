import { useState } from "react";
import useStyles from "./app.styles";

import { ThemeProvider, Typography, InputAdornment, Grid, TextField } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

import Footer from './ui/footer/footer.component';
import Header from './ui/header/Header.component';

import theme from './ui/Theme';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const classes = useStyles();

  const handleInput = (e) => setInputValue(e.target.value);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container direction="column">
        <Grid item className={classes.header}>
          <Typography variant="h2">
            Projects
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            value={inputValue}
            onChange={handleInput}
            placeholder="Search project details or create a new entry."
            className={classes.input}
            InputProps={{ 
              endAdornment: <InputAdornment position="end">
                <AddIcon color="primary"/>
              </InputAdornment>
            }}
          />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
