import styled from "styled-components";

const StyledBox = styled.div`
    width: 30%;
    height: 300px;
    background-color: grey;
    border-radius: 10px;
`

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
`

const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin-bottom: 25px;
`

const StyledText = styled.div`
    font-size: 25px;
    margin-left: 5px;
`

const StyledInput = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 10px;
    display: flex;
    margin-bottom: 15px;
`

const StyledButton = styled.button`
    width: 30%;
    height: 25px;
    border-radius: 10px;
    margin-left: 275px;
`

export { StyledBox, StyledForm, StyledTitle, StyledText, StyledInput, StyledButton }