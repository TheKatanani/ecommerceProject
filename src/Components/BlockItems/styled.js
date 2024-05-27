import styled from "styled-components";

export const BlockStyled =styled.div`
background-color:${(props) => props.theme.palette.main};
    margin:24px 0;
    display: flex;
    flex-wrap: wrap;
    /* height: 257px; */
    .items{
        flex:3.8;
        display: grid;
        grid-template-columns:repeat(4,auto);
        border:1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
        .item{
            border:1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
            display: flex;
            justify-content:space-between;
            padding:10px;
            .img{
                display: flex;
                align-items:center
            }
            img{
                width:70px;
            }
            h6{
                color:${(props) => props.theme.palette.font};
                font-size:${(props) => props.theme.fontSizes.body}rem;
            }
            p{
                width:60px;
                color:${(props) => props.theme.palette.ColorApp.gray_500};
                font-size:${(props) => props.theme.fontSizes.bod2}rem;
            }
        }
    }
    .title,.source{
        display: none;
    }
    ${({theme:{media}})=>`${media.xs} or (${media.s.split("@media")[1]} and (max-width: 992px))`} {
        *{
            margin:0 auto;
        }
        .contint{
            display: none;
        }
        display: block;
        .items{
            display: flex;
            overflow: scroll;
        }
        .item{
            flex-wrap: wrap;
            align-items: space-between;
            min-width:140px;
            height:160px;
            padding:18px 13.37px;
            div{
                margin:0 auto;
            }
            .img{
                height:55%;
                order:-1;
            }
            text-align: center;
        }
        .title,.source{
            display: block;
            padding:11px 12px;
            border:1px solid ${(props) => props.theme.palette.ColorApp.gray_200};
        }
        .title{
            border-bottom: none;
            h6{
                color:${(props) => props.theme.palette.font};
                font-size:${(props) => props.theme.fontSizes.h5}rem;
            }
        } 
        .source{
            padding:20px 21px;
            a{
                color:${(props) => props.theme.palette.ColorApp.primary};
                font-size:${(props) => props.theme.fontSizes.h6}rem;
                svg{
                    transform:translateY(3px)
                }
            }
        }
            
    }
    
`