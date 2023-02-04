import styled from "styled-components";

export const Search = styled.div `
  ${props=>props.page==="page4"&&`visibility:hidden;`}
  display: flex;
  align-items: center;
  height:40px;
*{
  height:100%;
    :focus{
        outline:none;
    }
    font-size:${props=>props.theme.fontSizes.body}; ;
}
input[type="text"] {
  width:421px;
  padding: 0.5em;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 2px solid ${props=>props.theme.palette.ColorApp.primary};
  border-right: none;
  color:${props=>props.theme.palette.ColorApp.gray_500};
  background-color:${props=>props.theme.palette.page};
}

select {
  padding: 0.5em;
  border: 2px solid ${props=>props.theme.palette.ColorApp.primary};
  color:  ${props=>props.theme.palette.ColorApp.gray_500};
  background-color:${props=>props.theme.palette.page};
}

button {
  padding: 0.5em 1em;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background:${props=>props.theme.palette.ColorApp.primary_gradient};
  border: 2px solid ${props=>props.theme.palette.ColorApp.primary};
  color: ${props=>props.theme.palette.ColorApp.white};
  cursor: pointer;
}

button:hover {
  opacity:0.8;
}

`