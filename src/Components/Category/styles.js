import styled from "styled-components";

export const CatigoryStyled = styled.div `
        display: flex;
        width: 100%;
        gap:20px;
        justify-content:space-between;
        align-items:center;
        padding:8px 0;
        ul{
            display: flex;
            gap:20px;
            justify-content:center;
            align-items:center;
            a{
                color:${props=>props.theme.palette.font};
            }
        }
        select{
            border:none;
            background-color:${props=>props.theme.palette.main};
            color:${props=>props.theme.palette.font};
        }
        ${props=>props.page==="page4"&&`display:none;`}
        ${({theme:{media}})=>media.xs}{
            overflow-x:scroll;
            svg,li:nth-last-child(1),li:nth-last-child(2){
                display: none;
            }
            li{
                width:109px;
                padding:9px;
                border-radius:6px;
                text-align:center;
                background-color:${props=>props.theme.palette.ColorApp.gray_200};
                a{
                    color:${props=>props.theme.palette.ColorApp.primary};
                }
            }
    }
    ${({theme:{media}})=>media.s}{
        flex-wrap:wrap;
        justify-content:space-around;
    }
    `