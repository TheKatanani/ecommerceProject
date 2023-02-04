import styled from "styled-components";

export const DetailsStyled = styled.div `
        background-color:${(props) =>  props.theme.palette.main};
        font-size:${(props) => props.theme.fontSizes.body}rem;
        margin:30px 0;
        flex:3.8%;
        nav{
            ul{
                border-bottom:1px solid ${(props) =>  props.theme.palette.ColorApp.gray_300};
                display: flex;
                justify-content:flex-start;
                width:100%;
            }
            li{
                padding:16px 0;
                a{
                    padding:16px 24px;
                    color:${(props) =>  props.theme.palette.ColorApp.gray_500};
                }
            }
            
            /* .active , */
            li:first-child a{
                color:${(props) =>  props.theme.palette.ColorApp.primary};
                border-bottom:2px solid ${(props) =>  props.theme.palette.ColorApp.primary};
            }
        }
        .content{
            padding:18px 20px;
            article{
                width:85%;
                p{
                    color:${(props) =>  props.theme.palette.ColorApp.gray_600};
                }
            }
        }
        table{
            width:60%;
            margin:16px 0;
            tr{
                display: flex;
                align-items:center;
                border:1px solid ${(props) =>  props.theme.palette.ColorApp.gray_300};
                td{
                    color:${(props) =>  props.theme.palette.ColorApp.gray_600};
                    padding: 8px;
                }
                td:first-child{
                    border-right:1px solid ${(props) =>  props.theme.palette.ColorApp.gray_300};
                    background-color:${(props) =>  props.theme.palette.ColorApp.gray_200};
                    width:180px;
                }
            }
        }
        .features{
            .feature{
                display: flex;
                align-items:center;
                justify-content:flex-start;
                color:${(props) =>  props.theme.palette.ColorApp.gray_600};
            }
            svg{
                margin:10px;
            }
        }
`