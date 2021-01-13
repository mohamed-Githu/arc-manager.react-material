import useStyles from "./add-modal.styles";
import { Modal, Grid, Typography } from "@material-ui/core";

const AddModal = (modalProps) => {
  const classes = useStyles();

  return (
    <Modal {...modalProps}>
      <Grid container className={classes.modal}>
        <Grid container className={classes.modal}>
          <Grid item>
            <Typography variant="h2" align="center" gutterBottom>
              Add a new project
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddModal;
