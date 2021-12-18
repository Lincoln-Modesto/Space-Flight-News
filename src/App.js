import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme/default';

import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Routes />
        <Home />
      </ThemeProvider>
    </BrowserRouter>
  );
}

