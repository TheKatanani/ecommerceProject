import styled from "styled-components";

export const MainStayled = styled.div`
  width:137px;
  padding:5px 20px 5px 20px;
  background-color: ${(props) => props.theme.palette.ColorApp.primary};
  position:fixed;
  z-index:999;
  border-radius: 6px;
  top:30px;
  text-align:center;
  left:-120px;
  transition: all 0.5s;
  :hover{
    left: -3px;
  }
@media (max-width: 576px) {
  display: none;
 }
`;
export const ButtonStayled = styled.button`
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
