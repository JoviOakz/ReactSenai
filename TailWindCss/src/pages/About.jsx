import NavBar from "../components/NavBar";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <NavBar />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default Home;