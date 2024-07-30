import { StyledNavBar, StyledLogo, StyledButtons } from "./NavBar/style";
import Logo from '/logo.png'

const NavBar = () => {
    return (
        <StyledNavBar>
            <StyledLogo src={Logo}></StyledLogo>

            <StyledButtons>

            </StyledButtons>
        </StyledNavBar>
    )
}

export default NavBar;