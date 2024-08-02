import Logo from '/logo.jpg'

const NavBar = () => {
    return (
        <div className='navbar h-14 w-full bg-teal-300 flex justify-between p-4'>
            <div className='flex justify-between w-24'>
                <img className='w-12 h-7 rounded-3xl' src={Logo}/>
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