import styled from 'styled-components'

export const Divstyled=styled.div`
  flex:1;
  padding:10px;
  text-align:center;
  border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
  background-color:${(props) => props.theme.palette.main};
  .img{
    width:140px;
    height:140px;
    overflow: hidden;  
  }  
    img{
      margin:0 auto;
    }
    p{
      color:${(props) => props.theme.palette.font};
      font-size:${(props) => props.theme.fontSizes.body}rem;
      margin:11px auto 7px;
    }
    span{
      padding:5px 13px;
      font-size:${(props) => props.theme.fontSizes.body2}rem;
      color:#EB001B;
      background-color:#FFE3E3;
      margin:7px auto;
      border-radius: 29px;
    }

`;