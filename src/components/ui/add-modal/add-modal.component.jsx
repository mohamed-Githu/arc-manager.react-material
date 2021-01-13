import { useState } from "react";

import useStyles from "./add-modal.styles";
import {
  Modal,
  Grid,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

const AddModal = (modalProps) => {
  const classes = useStyles();

  const [date, handleDateChange] = useState(new Date());
  const [input, setInput] = useState({
    name: "",
    total: "",
  });

  const { name, total } = input;
  const handleChange = (e) =>
    setInput({ ...input, [e.target.id]: e.target.value });

  return (
    <Modal {...modalProps}>
      <Grid container className={classes.modal}>
        <Grid item>
          <Typography variant="h2" align="center" gutterBottom>
            Add a new project
          </Typography>
        </Grid>
        <Grid item container justify="space-between" alignItems="flex-end">
          <Grid item container direction="column" sm>
            <Grid item>
              <TextField
                id="name"
                label="Name"
                value={name}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" alignItems="center" sm>
            <Grid item>
              <KeyboardDatePicker
                format="MM/dd/yyyy"
                value={date}
                onChange={handleDateChange}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" alignItems="flex-end" sm>
            <Grid item>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                type="number"
                label="Total"
                id="total"
                value={total}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddModal;
