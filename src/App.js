import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme/default';

import { Home } from "./pages/Home";
import { ArticlesProvider } from './context/ArticleContext';
import { ModalProvider } from './context/ModalContext';

export default function App() {
  return (
    <BrowserRouter>
      <ArticlesProvider>
        <ModalProvider>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Routes />
            <Home />
          </ThemeProvider>
        </ModalProvider>
      </ArticlesProvider>
    </BrowserRouter>
  );
}

