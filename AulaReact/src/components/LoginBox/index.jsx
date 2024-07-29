import { StyledBox, StyledForm, StyledTitle, StyledText, StyledInput, StyledButton } from "./style";
import Home from "../../pages/Home"

const LoginBox = () => {
    return (
        <StyledBox>
            <StyledForm>
                <StyledTitle>Login Box</StyledTitle>
                <StyledText>Login</StyledText>
                <StyledInput type="text" />
                <StyledText>Senha</StyledText>
                <StyledInput type="password" />
                <StyledButton><a href={Home}>Enter</a></StyledButton>
            </StyledForm>
        </StyledBox>
    )
}

export default LoginBox;