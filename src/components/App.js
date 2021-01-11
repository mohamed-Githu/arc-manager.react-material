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
import ContentTable from "./ui/content-tabel/content-tabel.component";

import theme from './ui/Theme';

const createRow = (name, data, service, features, complexity, platforms, total) => ([name, data, service, features, complexity, platforms, total]);

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [websiteSwitch, setWebsiteSwitch] = useState(false);
  const [iosSwitch, setIosSwitch] = useState(false);
  const [androidSwitch, setAndroidSwitch] = useState(false);
  const [softwareSwitch, setSoftwareSwitch] = useState(false);

  const [rows, setRows] = useState([createRow("Mohamed Hussein", "4/3/2002", "Website", "N/A", "N/A", "N/A", "$1500"), createRow("Mohamed Hussein", "4/3/2002", "Website", "N/A", "N/A", "N/A", "$1500"), createRow("Custom Person", "4/3/2002", "Android", "E-commerce / Photo / Videos / Transfer Files / Push Notifications", "N/A", "N/A", "$1500"), createRow("Mohamed Hussein", "4/3/2002", "Website", "N/A", "N/A", "N/A", "$1500")]);

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
                <AddIcon color="primary" style={{ fontSize: 30 }} />
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
        <Grid item>
          <ContentTable rows={rows} />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
