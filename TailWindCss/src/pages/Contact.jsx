import NavBar from "../components/NavBar";
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <NavBar />
            <ContactContent />
            <Footer />
        </div>
    )
}

export default Home;