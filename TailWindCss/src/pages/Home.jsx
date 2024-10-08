import NavBar from "../components/NavBar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <NavBar />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home;