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
                <Button>Krovi</Button>
                <Button>Krovi</Button>
                <Button>Krovi</Button>
            </div>
        </div>
    )
}

export default NavBar;