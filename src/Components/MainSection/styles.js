import styled from "styled-components";
export const MainSecStyle=styled.div`
    display: flex;
    height:400px;
    justify-content:center;
    background-color: ${props=>props.theme.palette.main};
    border-radius: 6px;
    padding:1.25rem;
    margin:1.25rem auto;
    gap:13px;
    ul{
        width:250px;
        li{ 
            padding:10px;
            a{
                color:${props=>props.theme.palette.ColorApp.gray_600};
            }
            width: 100%;
            border-radius: 6px;
            &.active{
                a{
                    color:${props=>props.theme.palette.ColorApp.dark};
                }
                background-color:${props=>props.theme.palette.ColorApp.primary_light};
            }
        }
    }
    .user{
        padding:10px;
        background-color:${props=>props.theme.palette.ColorApp.primary_light};
        border-radius: 6px;
        width:200px;
        >div{
            display: flex;
            justify-content:center;
            align-items:center;
            p{  
                padding:0 10px;
                color:${props=>props.theme.palette.ColorApp.dark};
            }
            margin-bottom: 10px;
        }
        button:nth-of-type(1){
            margin-bottom: 7px;
            background-color:${props=>props.theme.palette.ColorApp.primary};
            color:${props=>props.theme.palette.ColorApp.white};
        }
        button:nth-of-type(2){
            background-color:${props=>props.theme.palette.ColorApp.white};
            color:${props=>props.theme.palette.ColorApp.primary};
        }
        button{
            height:32px;
        }
    }
`