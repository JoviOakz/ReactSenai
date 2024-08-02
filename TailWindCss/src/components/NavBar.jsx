import Logo from '/logo.jpg'

const NavBar = () => {
    return (
        <div className='navbar h-20 w-full bg-teal-300 flex justify-between p-7 shadow-md'>
            <div className='flex justify-between w-28'>
                <img className='w-16 h-8 rounded-3xl' src={Logo}/>
                Krovi
            </div>

            <div className='flex justify-between w-32'>
                <a>Krovi</a>
                <a>Krovi</a>
                <a>Krovi</a>
            </div>
        </div>
    )
}

export default NavBar;