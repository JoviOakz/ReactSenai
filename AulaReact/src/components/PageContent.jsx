import { StyledMainContent, StyledImage } from "./PageContent/style";
import Mbappe from '/mbappe.jpg'

const PageContent = () => {
    return (
        <StyledMainContent>
            <StyledImage src={Mbappe} />
        </StyledMainContent>
    )
}

export default PageContent;