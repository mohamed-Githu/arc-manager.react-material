import { ThemeProvider } from '@material-ui/core';

import Footer from './ui/footer/footer.component';
import Header from './ui/header/Header.component';

import theme from './ui/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <h2>hi</h2>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
