import styled from "styled-components";

export const LoginStyle = styled.div `
    display: flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:calc(100vh - 74px);
    h1{
        color:${(props) => props.theme.palette.font};
    }
    main{
        width:387px;
        box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
        background-color: ${(props) => props.theme.palette.main};
        border-radius: 6px;
        padding:1.88rem;
        margin:0 auto;
    }
    p{
    color:${(props)=>props.theme.palette.ColorApp.gray_800};
    font-size:${(props) => props.theme.fontSizes.body};
    text-align:center;
    margin:30px 0 4px;
}
    a{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: ${(props) => props.theme.fontSizes.body2}rem;
        letter-spacing: -0.2px;
        color: ${(props)=>props.theme.palette.ColorApp.primary};
    }
    .logInPassword{
    position: relative;
}
.logInPassword .forgotPassword{
    position:absolute;
    top:2px;
    right:0;
}
.logInPassword span{
    img{
        width:22px;
    }
    position:absolute;
    top:50%;
    transform:translateY(-14%);
    right: 12px;
    cursor: pointer;
}
/* add  show class to use this code */
.logInPassword.text span::before{
    content: "";
    width: 3px;
    height: 22px;
    font-size: 30px;
    font-weight: bold;
    background-color: #8692a6;
    position: absolute;
    border-radius: 8px;
    top: -2px;
    left: 50%;
    transform: translateX(-50%) rotate(30deg);
    opacity: 0.8;
}
   
`