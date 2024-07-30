import { StyledBox, StyledForm, StyledTitle, StyledText, StyledInput, StyledButton } from "./style";
import Home from "../../pages/Home"
import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password })
    };

    return (
        <StyledBox>
            <StyledForm onSubmit={handleSubmit}>
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

export default LoginForm;