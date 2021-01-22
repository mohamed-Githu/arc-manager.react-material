import { useState } from "react";
import useStyles from "./app.styles";

import { 
  ThemeProvider,
  Typography,
  InputAdornment,
  Grid,
  TextField,
  FormGroup,
  Snackbar,
  Button,
} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

import Footer from './ui/footer/footer.component';
import Header from './ui/header/Header.component';
import Switch from "./ui/switch-form/switch-form.component";
import EnhancedTable from "./ui/content-tabel/content-tabel.component";
import AddModal from "./ui/add-modal/add-modal.component";

import theme from './ui/Theme';

const App = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState("");

  const [websiteSwitch, setWebsiteSwitch] = useState(false);
  const [iosSwitch, setIosSwitch] = useState(false);
  const [androidSwitch, setAndroidSwitch] = useState(false);
  const [softwareSwitch, setSoftwareSwitch] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => setModalOpen(!modalOpen);

  const [projects, setProjects] = useState({
    rows: [],
    deletedRows: [],
  });
  const { rows, deletedRows } = projects;

  const [alert, setAlert] = useState({
    open: false,
    message: "Projects Deleted!",
    color: "#FF3232",
  });

  const handleInput = (e) => setInputValue(e.target.value);
  const addRow = (newRow) => setProjects({...projects, rows: [...rows, newRow]});

  const deleteRows = (selectedRows) => {
    const _deletedRows = [];
    const updatedRows = rows.filter((row, i) => {
      if (!selectedRows.includes(row.name))
        return true;
      _deletedRows.push(rows[i]);
      return false;
    });
    setProjects({deletedRows: _deletedRows, rows: updatedRows});
    setAlert({...alert, open: true});
  }

  const onCloseAlert = () => {
    setProjects({...projects, deletedRows: []});
    setAlert({...alert, open: false})
  };

  const onUndo = () => {
    setProjects({deletedRows: [], rows: [...rows, ...deletedRows]});
    setAlert({...alert, open: false});
  };

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
          <EnhancedTable handleDelete={deleteRows} searchValue={inputValue} rows={rows} />
        </Grid>
      </Grid>
      <Footer />
      <AddModal open={modalOpen} addRow={addRow} rows={rows} onClose={handleModal} />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        open={alert.open}
        onClose={onCloseAlert}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.color,
          },
        }}
        action={<Button onClick={onUndo} style={{color: "#FFF"}}>
          Undo
        </Button>}
      />
    </ThemeProvider>
  );
}

export default App;
