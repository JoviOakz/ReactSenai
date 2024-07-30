import LoginForm from "../components/LoginForm";

const Login = () => {
    const handleLogin = (data) => {
        console.log('Login data:', data);
    };
    
    return (
        <div className="LoginPage">
            <h1>Login</h1>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    )
}

export default Login;