import { useState } from "react";

import useStyles from "./add-modal.styles";
import {
  Modal,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

const platformsOptions = ["Web", "IOS", "Adroid"];
const featuresOptions = [
  "Photo/Video",
  "GPS",
  "File Transfer",
  "User Authentication",
  "Biometrics",
  "Push Notifications",
];

const AddModal = (modalProps) => {
  const classes = useStyles();

  const [date, handleDateChange] = useState(new Date());
  const [input, setInput] = useState({
    name: "",
    total: "",

    service: "",
    complexity: "",
    users: "",
  });

  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);

  const { name, total, service, complexity, users } = input;
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
        <Grid item container justify="space-between">
          <Grid item container direction="column" sm>
            <Grid item>
              <TextField
                id="name"
                label="Name"
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item container className={classes.radiosContainer}>
              <Grid item>
                <Typography variant="h4">Services</Typography>
              </Grid>
              <Grid item>
                <RadioGroup
                  aria-label="service"
                  name="service"
                  value={service}
                  onChange={(e) =>
                    setInput({ ...input, service: e.target.value })
                  }
                >
                  <FormControlLabel
                    classes={{ label: classes.service }}
                    value="Website"
                    label="Website"
                    control={<Radio />}
                    color="primary"
                  />
                  <FormControlLabel
                    classes={{ label: classes.service }}
                    value="Mobile App"
                    label="Mobile App"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    classes={{ label: classes.service }}
                    value="Custom Software"
                    label="Custom Software"
                    control={<Radio />}
                  />
                </RadioGroup>
              </Grid>
              <Grid item style={{ marginTop: "5em" }}>
                <Select
                  labelId="platforms"
                  id="platforms"
                  displayEmpty
                  renderValue={platforms.length ? undefined : () => "Platforms"}
                  multiple
                  value={platforms}
                  onChange={(e) => setPlatforms(e.target.value)}
                  style={{ width: "12em" }}
                >
                  {platformsOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
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
            <Grid item="">
              <Grid item container className={classes.radiosContainer}>
                <Grid item>
                  <Typography variant="h4">Complexity</Typography>
                </Grid>
                <Grid item>
                  <RadioGroup
                    aria-label="complexity"
                    name="complexity"
                    value={complexity}
                    onChange={(e) =>
                      setInput({ ...input, complexity: e.target.value })
                    }
                  >
                    <FormControlLabel
                      classes={{ label: classes.service }}
                      value="Low"
                      label="Low"
                      control={<Radio />}
                      color="primary"
                    />
                    <FormControlLabel
                      classes={{ label: classes.service }}
                      value="Medium"
                      label="Medium"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      classes={{ label: classes.service }}
                      value="High"
                      label="High"
                      control={<Radio />}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
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
            <Grid item>
              <Grid
                item
                container
                alignItems="center"
                className={classes.radiosContainer}
              >
                <Grid item>
                  <Typography variant="h4">Users</Typography>
                </Grid>
                <Grid item>
                  <RadioGroup
                    aria-label="users"
                    name="users"
                    value={users}
                    onChange={(e) =>
                      setInput({ ...input, users: e.target.value })
                    }
                  >
                    <FormControlLabel
                      classes={{ label: classes.service }}
                      value="0-10"
                      label="0-10"
                      control={<Radio />}
                      color="primary"
                    />
                    <FormControlLabel
                      classes={{ label: classes.service }}
                      value="10-100"
                      label="10-100"
                      control={<Radio />}
                    />
                    <FormControlLabel
                      classes={{ label: classes.service }}
                      value="100+"
                      label="100+"
                      control={<Radio />}
                    />
                  </RadioGroup>
                </Grid>
                <Grid item style={{ marginTop: "5em" }}>
                  <Select
                    labelId="features"
                    id="features"
                    displayEmpty
                    renderValue={features.length ? undefined : () => "Features"}
                    multiple
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    style={{ width: "12em" }}
                  >
                    {featuresOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddModal;
