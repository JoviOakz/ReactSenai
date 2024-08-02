import NavBar from "../components/NavBar";
import PageContent from "../components/PageContent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <NavBar/>
            <PageContent/>
            <Footer/>
        </div>
    )
}

export default Home;