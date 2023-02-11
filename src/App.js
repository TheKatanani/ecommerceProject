import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { lightTheme ,darkTheme} from './Global/theme'
import { GlobalStyle } from './Global/style';
import { AuthContext, ThemeContext } from './Context/index';
import Toggle from './Components/Toggle';
import MyRoutes from './Routes'

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
            <GlobalStyle />
            <Toggle />
              {<MyRoutes/>}
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </ThemeProvider>
  );
}

export default App;
