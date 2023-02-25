import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { lightTheme ,darkTheme} from './Global/theme'
import { GlobalStyle } from './Global/style';
import { AuthContext, ThemeContext } from './Context';
import Toggle from './Components/Toggle';
import MyRoutes from './Routes'
import ProductProvider from './ProductsProvider'
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem('token')&&setAuthenticated(true);
    setTheme(localStorage.getItem('theme')==='light'? darkTheme: lightTheme );
  }, []);
  return (
    <ThemeProvider theme={theme} page="page4">
      <ThemeContext.Provider value={[theme, setTheme]}>
          <AuthContext.Provider value={[ authenticated , setAuthenticated]}>
          <ProductProvider>
            <GlobalStyle />
            <Toggle />
              {<MyRoutes/>}
          </ProductProvider>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </ThemeProvider>
  );
}

export default App;
