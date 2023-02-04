import { ThemeProvider } from 'styled-components';
import {  useState } from 'react';
import { darkTheme,lightTheme } from './Global/theme'
import { GlobalStyle } from './Global/style';
import { AuthContext, MyContext } from './Context/index';
import Toggle from './Components/Toggle';
import MyRoutes from './Routes'
// import { Route } from 'react-router-dom';
import {  Route, Routes } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <ThemeProvider theme={theme} page="page4">
      <MyContext.Provider value={[theme, setTheme]}>
          <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <GlobalStyle />
            <Toggle />
              {<MyRoutes/>}
          </AuthContext.Provider>
        </MyContext.Provider>
      </ThemeProvider>
  );
}

export default App;
