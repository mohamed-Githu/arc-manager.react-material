import { useState } from "react";
import useStyles from "./app.styles";

import { 
  ThemeProvider,
  Typography,
  InputAdornment,
  Grid,
  TextField,
  FormGroup,
} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

import Footer from './ui/footer/footer.component';
import Header from './ui/header/Header.component';
import Switch from "./ui/switch-form/switch-form.component";

import theme from './ui/Theme';

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [websiteSwitch, setWebsiteSwitch] = useState(false);
  const [iosSwitch, setIosSwitch] = useState(false);
  const [androidSwitch, setAndroidSwitch] = useState(false);
  const [softwareSwitch, setSoftwareSwitch] = useState(false);
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
        <Grid item className={classes.switchsContainer}>
          <FormGroup row>
            <Switch
              label="Websites"
              checked={websiteSwitch} 
              onChange={() => setWebsiteSwitch(!websiteSwitch)}
            />
            <Switch
              label="IOS Apps"
              checked={iosSwitch} 
              onChange={() => setIosSwitch(!iosSwitch)}
            />
            <Switch
              label="Android Apps"
              checked={androidSwitch} 
              onChange={() => setAndroidSwitch(!androidSwitch)}
            />
            <Switch
              label="Custom Software"
              checked={softwareSwitch} 
              onChange={() => setSoftwareSwitch(!softwareSwitch)}
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
