import bgImage from '../assets/images/more/4.png';
import Awesome from "../components/Awesome";
import Banner from "../components/Banner";
import Coffies from "../components/Coffies";
import Contact from '../components/Contact';
import Followus from '../components/Followus';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";


const Homelayout = () => {
    return (
        <div className="w-1920px">
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
                <>
                    <Banner></Banner>
                    <Awesome></Awesome>
                </>
            </header>


            <main className="relative w-full ">
                {/* Background images */}
                <img
                    src={bgImage}
                    alt=""
                    className="absolute top-0 left-0 w-32 h-32 object-contain"
                />

                <img
                    src={bgImage}
                    alt=""
                    className="absolute bottom-26 right-0 w-48 h-48 object-contain"
                />

                {/* Your main content */}
                <div className="relative z-10 flex justify-center">
                    <Popular></Popular>
                </div>
                <Coffies></Coffies>





            </main>


            <Followus></Followus>
            <Contact></Contact>

            <Footer></Footer>



        </div>
    );
};

export default Homelayout;