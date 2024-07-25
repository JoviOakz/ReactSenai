import { StyledBox, StyledForm, StyledTitle, StyledText, StyledInput, StyledButton } from "./style";

const LoginBox = () => {
    return (
        <StyledBox>
            <StyledForm>
                <StyledTitle>Login Box</StyledTitle>
                <StyledText>Login</StyledText>
                <StyledInput type="text" />
                <StyledText>Senha</StyledText>
                <StyledInput type="password" />
                <StyledButton>Enter</StyledButton>
            </StyledForm>
        </StyledBox>
    )
}

export default LoginBox;