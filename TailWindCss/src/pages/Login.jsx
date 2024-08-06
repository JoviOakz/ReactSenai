import LoginForm from "../components/LoginForm";

const Login = () => {
    const handleLogin = (data) => {
        console.log('Login data:', data);
    };
    
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center w-80 h-60 space-y-5 items-center border-solid border-2 border-gray-400 rounded shadow-md'>
                <h1 className='font-sans font-medium text-4xl'>Login</h1>
                <LoginForm onSubmit={handleLogin}/>
            </div>
        </div>
    )
}

export default Login;