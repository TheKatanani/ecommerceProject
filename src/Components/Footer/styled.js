import styled from "styled-components";

export const FooterStyled = styled.div `
display: flex;
flex-wrap: wrap;
align-items:center;
height:256px;
background-color:${(props) => props.theme.palette.main};
color:${(props) => props.theme.palette.font};
    .logoBox{
        flex: 1;
        max-width:276px;
        p{
            margin:17px 0;
            color:${(props) => props.theme.palette.ColorApp.gray_600};
            font-size:${(props) => props.theme.fontSizes.body}rem;
        }
        .icons{
        *{
            margin:0 6px;
        }
    }
}
    ul{
        flex: 1;
    }
    >div{
        display: flex;
        justify-content:space-between;
        flex-wrap: wrap;
    }
    .store{
        flex: 1;
        background-color:${(props) => props.theme.palette.ColorApp.dark};
        border: 1px solid ${(props) => props.theme.palette.ColorApp.white};
        border-radius: 6px;
        margin:8px 0 0;
        padding:8px 7px;
    }
    .uls{
        flex:0.5;
        display: grid;
        grid-template-columns: repeat(auto-fill,130px);
        flex-wrap: wrap;
    }
        ${({theme:{media}})=>`${media.xs} or (${media.s.split("@media")[1]} and (max-width: 992px))`}{ 
        height:unset;
        >div{
            display: block;
            text-align: center;
        }
        .uls{
        grid-template-columns: repeat(2,auto);
        }
        .stores{
            display: flex;
            .store{
                padding: 0;
            }
        }
        *{
            margin:10px auto;
        }
    }
    
`
export const FooterfoStyled = styled.div `
    >div{
        padding:13px;
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding:23;
        background-color:${(props) => props.theme.palette.page};
        color:${(props) => props.theme.palette.ColorApp.gray_800};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        select{
            border:none;
            font-size:${(props) => props.theme.fontSizes.body}rem;
            outline:none;
            background-color:transparent;
        }
        img{
            margin-bottom: -4px;
        }
    }
`