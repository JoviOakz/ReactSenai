import styled from "styled-components";

const StyledNavBar = styled.div`
    width: 100%;
    height: 12vh;
    background-color: #1A1A1A;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLogo = styled.img`
    width: 120px;
    height: 80px;
    border-radius: 25%;
    margin-top: 2px;
    margin-left: 10px;
    box-shadow: 0px 4px 5px black;
`

const StyledButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`

export { StyledNavBar, StyledLogo, StyledButtons }