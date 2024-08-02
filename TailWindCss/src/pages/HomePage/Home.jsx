import NavBar from "../../components/NavBar";
import PageContent from "../../components/PageContent";
import Footer from "../../components/Footer";
import './style.css'

const Home = () => {
    return (
        <div className="HomePage">
            <NavBar/>
            <PageContent/>
            <Footer/>
        </div>
    )
}

export default Home;