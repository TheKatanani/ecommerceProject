import styled from "styled-components";

const ErrorStyled = styled.p`
        background-color: #FFB6C1;
        color: #FF0000;
        font-size: 14px;
        padding: 5px 0;
        border-radius: 5px;
        text-align: center;
`
const ErrorForm = ({children})=>{
    return (
        <ErrorStyled>{children}</ErrorStyled>
    );
}
export default ErrorForm;