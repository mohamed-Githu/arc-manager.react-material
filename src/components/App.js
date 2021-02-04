import { useState, useEffect } from "react";
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
  FormControlLabel,
  useMediaQuery,
} from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";

import Footer from './ui/footer/footer.component';
import Header from './ui/header/Header.component';
import Switch from "./ui/switch-form/switch-form.component";
import EnhancedTable from "./ui/content-tabel/content-tabel.component";
import AddModal from "./ui/add-modal/add-modal.component";

import theme from './ui/Theme';
import Fonts from "./Fonts";

const App = () => {
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [inputValue, setInputValue] = useState("");

  const [switches, setSwitches] = useState({
    websites: false,
    ios: false,
    android: false,
    customsoftware: false,
  });

  const { websites, ios, android, customsoftware } = switches;

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

  const getFilterdRows = () => {
    if (!websites && !ios && !android && !customsoftware)
      return rows;
    
    const filterdRows = rows.filter(({ service, platforms }) => 
      (service === "Website" && websites) ||
      (platforms.includes("IOS") && ios) ||
      (platforms.includes("Android") && android) ||
      (service === "Custom Software" && customsoftware)
    )

    return filterdRows;
  };

  useEffect(() => {
    Fonts();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container className={classes.appContainer}>
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
          <FormGroup row className={classes.switchesInnerContainer}>
            <FormControlLabel
              label="Websites"
              labelPlacement={matchesSM ? "end" : "start"}
              control={<Switch
                checked={websites} 
                onChange={() => setSwitches({...switches, websites: !websites})}
              />}
            />
            <FormControlLabel
              label="IOS Apps"
              labelPlacement={matchesSM ? "end" : "start"}
              control={<Switch
                checked={ios}
                onChange={() => setSwitches({...switches, ios: !ios})}
              />}
            />
            <FormControlLabel
              label="Android Apps"
              labelPlacement={matchesSM ? "end" : "start"}
              control={<Switch
                checked={android}
                onChange={() => setSwitches({...switches, android: !android})}
              />}
            />
            <FormControlLabel
              label="Custom Software"
              labelPlacement={matchesSM ? "end" : "start"}
              control={<Switch
                checked={customsoftware}
                onChange={() => setSwitches({...switches, customsoftware: !customsoftware})}
              />}
            />
          </FormGroup>
        </Grid>
        <Grid item className={classes.tableContainer}>
          <EnhancedTable handleDelete={deleteRows} searchValue={inputValue} rows={getFilterdRows()} />
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
