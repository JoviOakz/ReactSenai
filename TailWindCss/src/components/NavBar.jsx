import Logo from '/logo.jpg'
import Button from './Button';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo}/>
                Krovi
            </div>

            <div className="buttons">
                <a>Krovi</a>
                <a>Krovi</a>
                <a>Krovi</a>
            </div>
        </div>
    )
}

export default NavBar;