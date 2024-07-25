import { StyledMainContent, StyledImage } from "./style";
import sexo from '/mbappe.jpg'

const PageContent = () => {
    return (
        <StyledMainContent>
            <StyledImage src={sexo} />
        </StyledMainContent>
    )
}

export default PageContent;