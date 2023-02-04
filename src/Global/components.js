import styled from 'styled-components';

export const Container = styled.div `
    padding: 0 15px;
    margin: 0 auto;
/* Small */
@media (min-width: 768px) {
    width: 750px;
}
/* Medium */
@media (min-width: 992px) {
    width: 970px;
}
/* Large */
@media (min-width: 1200px) {
    width: 1170px;
}
`;
export const MainButton = styled.button `
    width: 100%;
    height: 40px;
    border-radius: 6px;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.body};
    line-height: 19px;
    text-align: center;
    cursor: pointer;
    border: none;
`
export const LogInButton = styled(MainButton)`
    background-color: ${(props)=>props.theme.palette.ColorApp.primary};
    color:${(props)=>props.theme.palette.ColorApp.white};
`
export const PrimaryButton = styled(MainButton)`
    background-color:${props=>props.theme.palette.ColorApp.primary};
    color:${props=>props.theme.palette.ColorApp.white};
`

export const WhitePrimaryButton = styled(MainButton)`
    border: 1px solid ${(props) => props.theme.palette.ColorApp.gray_300};
    background-color:${props=>props.theme.palette.ColorApp.white};
    color:${props=>props.theme.palette.ColorApp.primary};
`
export const NewsletterButton = styled(LogInButton)`
    width:fit-content;
    padding:10px;
`
export const Info = styled.div`
            display: flex;
            justify-content:flex-start;
            align-items:baseline;
            *:not(:last-child)::after{
                content:".";
                display: inline-block;
                width:fit-content;
                color:${(props) =>  props.theme.palette.ColorApp.gray_300};
                font-size:${(props) => props.theme.fontSizes.h1}rem;
                margin:5px;
            }
`
export const IconButton = styled.div`
    position:relative;
     margin:10px 0;
    img{
        position:absolute;
        left:11px;
        top:9px;
        width:22px
    }
`
export const GoogleButton = styled(MainButton)`
    background-color: ${(props)=>props.theme.palette.ColorApp.gray_200};
    color:${(props)=>props.theme.palette.ColorApp.gray_800};
    box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
`
export const FaceButton= styled(MainButton)`
    background-color: #4267B2;
    color:${(props)=>props.theme.palette.ColorApp.white};
`
export const LiSignIn= styled.li`
    background-color:${(props)=>props.theme.palette.ColorApp.white};
    border: 1px solid #EEEEEE;
    border-radius: 4px;
    padding:2px;
    width:35px;
    text-align:center;
`
