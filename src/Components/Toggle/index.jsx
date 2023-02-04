import React, { useContext } from 'react'
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../Global/theme'
import { MyContext } from '../../Context/index';
import Dark from '../../Images/moon.png'
import Light from '../../Images/brightness.png'
const MainStayled = styled.div`
  padding:5px 20px 5px 20px;
  background-color: ${(props) => props.theme.palette.ColorApp.primary};
  position:fixed;
  z-index:999;
  border-radius: 6px;
  top:30px;
  left:-80px;
  transition: all 0.5s;
  :hover{
    left: -3px;
  }
`;
const ButtonStayled = styled.button`
img{
  width:30px;
  height:30px;
}  transition: all 0.5s;
  padding:8px 12px;
  background-color:${(props) => props.theme.palette.page};
  color:${(props) => props.theme.palette.ColorApp.white};
  cursor: pointer;
  border-radius:50%;
`

const Toggle = () => {
  const [theme, setTheme] = useContext(MyContext);
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
  }
  return (
    <MainStayled>
      <ButtonStayled onClick={toggleTheme}><img src={theme.theme === "light" ? Dark : Light} alt="" /></ButtonStayled>
    </MainStayled>
  )
}

export default Toggle