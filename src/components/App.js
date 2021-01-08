import useStyles from "./app.styles";
import { ThemeProvider, Typography } from '@material-ui/core';

import Footer from './ui/footer/footer.component';
import Header from './ui/header/Header.component';

import theme from './ui/Theme';

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Typography variant="h2" className={classes.header}>hi</Typography>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
