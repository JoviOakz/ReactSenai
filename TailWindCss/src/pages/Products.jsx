import NavBar from "../components/NavBar";
import ProductsContent from "../components/ProductsContent";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <NavBar />
            <ProductsContent />
            <Footer />
        </div>
    )
}

export default Home;