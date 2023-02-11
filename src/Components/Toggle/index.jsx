import React, { useContext } from 'react'
import { darkTheme, lightTheme } from '../../Global/theme'
import { AuthContext, ThemeContext } from '../../Context/index';
import Dark from '../../Images/moon.png'
import Light from '../../Images/brightness.png'
import { MainButton } from '../../Global/components';
import { ButtonStayled, MainStayled } from './styled';

const Toggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [authenticated, setAuthenticated ] = useContext(AuthContext);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    localStorage.setItem('theme',theme.theme);
  }
  return (
    <MainStayled>
      <ButtonStayled onClick={toggleTheme}><img src={theme.theme === "light" ? Dark : Light} alt="" /></ButtonStayled>
      {authenticated && <MainButton  onClick={() => {
        setAuthenticated(false);
        localStorage.removeItem('token');
      }}>log out</MainButton>}
    </MainStayled>
  )
}

export default Toggle