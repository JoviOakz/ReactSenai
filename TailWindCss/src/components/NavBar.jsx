import { useNavigate } from "react-router-dom";
import Logo from '/logo.jpg'

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className='navbar h-20 w-full bg-teal-300 flex justify-between p-7 shadow-md'>
            <div onClick={() => navigate("/home")} className='flex justify-between w-28'>
                <img className='w-16 h-8 rounded-3xl' src={Logo}/>
                <button>Krovi</button>
            </div>

            <div className='flex justify-between w-52'>
                <button onClick={() => navigate("/sobre")}>Sobre</button>
                <button onClick={() => navigate("/contato")}>Contato</button>
                <button onClick={() => navigate("/produtos")}>Produtos</button>
            </div>
        </div>
    )
}

export default NavBar;