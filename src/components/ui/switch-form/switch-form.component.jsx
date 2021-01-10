import { FormControlLabel, Switch } from "@material-ui/core";

const SwitchForm = ({ label, ...props }) => (
  <FormControlLabel
    labelPlacement="start"
    label={label}
    control={<Switch color="primary" {...props} />}
  />
);

export default SwitchForm;
