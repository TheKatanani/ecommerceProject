import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { lightTheme ,darkTheme} from './Global/theme'
import { GlobalStyle } from './Global/style';
import { AuthContext,  ProductsDataContext, ThemeContext } from './Context';
import Toggle from './Components/Toggle';
import MyRoutes from './Routes'
import { productsData } from './Mock';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [authenticated, setAuthenticated] = useState(false);
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsData)
    localStorage.getItem('token')&&setAuthenticated(true);
    setTheme(localStorage.getItem('theme')==='light'? darkTheme: lightTheme );
  }, []);
  return (
    <ThemeProvider theme={theme} page="page4">
      <ThemeContext.Provider value={[theme, setTheme]}>
          <AuthContext.Provider value={[ authenticated , setAuthenticated]}>
          <ProductsDataContext.Provider value={[ Products , setProducts]}>
            <GlobalStyle />
            <Toggle />
              {<MyRoutes/>}
          </ProductsDataContext.Provider>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </ThemeProvider>
  );
}

export default App;
