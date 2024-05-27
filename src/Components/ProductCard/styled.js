import styled from "styled-components";

export const ProductCardStyeld = styled.div `
    padding:20px;
    background-color:${(props) =>  props.theme.palette.main};

    width:100%;
    border: 1px solid ${(props) =>  props.theme.palette.ColorApp.gray_300};;
        border-radius: 6px;
        color:${(props) =>  props.theme.palette.font};
        font-size:${(props) => props.theme.fontSizes.body}rem;
    .img{
        width:210px;
        height:210px;
        text-align:center;
        display: flex;
        align-items:center;
        justify-content:center;
        img{
            max-width:205;
        }
    }
    .content{
        position:relative;
        display: flex;
        justify-content:center;
        flex-direction: column;
        .icons{
            cursor: pointer;
            position:absolute;
            top:0px;
            right:0px;
            display: flex;
            gap:3px;
            .Select svg{
                ${props=>props.isSelected&&`background-color:${props.theme.palette.ColorApp.primary_light}`};
            }
            .Like svg{
                ${props=>props.isLike&&`background-color:${props.theme.palette.ColorApp.primary_light}`};
            }
            svg{
                padding:5px;
                width:30px;
                height:30px;
                border: 1px solid ${(props) =>  props.theme.palette.ColorApp.gray_300};;
                border-radius: 5px;
            }
        }
        .title{
            ${props=>!props.full&&`color:${(props) =>  props.theme.palette.ColorApp.gray_800}`};
        }
        .price{
            font-size:${(props) => props.theme.fontSizes.h6}rem;
            .prevCost{
                color:${(props) =>  props.theme.palette.ColorApp.gray_500};
                font-size:${(props) => props.theme.fontSizes.body}rem;
                text-decoration: line-through;
                opacity:0.8;
                padding:5px;
            }
        }
        .orders{
            color:${(props) =>  props.theme.palette.ColorApp.gray_500};
        }
        .freeShipping{
            color: #00B517;
        }
        .description{
        color:${(props) =>  props.theme.palette.ColorApp.gray_600};
    }
    .ViewDetails{
        color:${(props) =>  props.theme.palette.ColorApp.primary};
        margin:25px 0 0 ;
        }
    }
        ${props=>props.full&&
            `display: flex;
            margin:10px 0 0;
            .content{
                flex: 1;
                .title{
                    margin-bottom:16px;
                    color:${(props) =>  props.theme.palette.font};
                    order:-1;
                }
            }
            @media (max-width: 576px) {
                .img{
                    max-width:70px;
                    height: unset;
                    img{
                        width:80%;
                    }
                }
                .description,.icons,.ViewDetails{
                    display: none !important;
                }
                .price + div{
                    flex-wrap: wrap;
                }
            }
            `
        };
`