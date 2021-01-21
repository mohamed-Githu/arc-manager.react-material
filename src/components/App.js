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
import EnhancedTable from "./ui/content-tabel/content-tabel.component";
import AddModal from "./ui/add-modal/add-modal.component";

import theme from './ui/Theme';

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const [websiteSwitch, setWebsiteSwitch] = useState(false);
  const [iosSwitch, setIosSwitch] = useState(false);
  const [androidSwitch, setAndroidSwitch] = useState(false);
  const [softwareSwitch, setSoftwareSwitch] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => setModalOpen(!modalOpen);

  const [rows, setRows] = useState([]);

  const classes = useStyles();

  const handleInput = (e) => setInputValue(e.target.value);
  const addRow = (newRow) => setRows([...rows, newRow]);

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
              endAdornment: <InputAdornment position="end" onClick={handleModal}>
                <AddIcon className={classes.addButton} />
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
        <Grid item style={{ margin: "5em 0 15em 0" }}>
          <EnhancedTable searchValue={inputValue} rows={rows} />
        </Grid>
      </Grid>
      <Footer />
      <AddModal open={modalOpen} addRow={addRow} rows={rows} onClose={handleModal} />
    </ThemeProvider>
  );
}

export default App;
