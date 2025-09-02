import { IoArrowBackSharp } from "react-icons/io5";
import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa";

const CoffeDetails = () => {
    const coffe = useLoaderData()
    const navigate = useNavigate()

    const { name, chief, supplier, taste, category, details, photo } = coffe
    return (
        <div>
            <Navbar></Navbar>
            <button onClick={() => navigate(-1)} className="btn bg-[#D2B48C] rancho text-xl"><IoArrowBackSharp
            />  Go-Back </button>


            <div className=" bg-[#F4F3F0] h-full md:h-full lg:h-[487px] w-full md:w-full lg:w-[920px] 2xl:w-[2560px] mx-auto rounded-xl flex flex-col md:flex-row lg:flex-row gap-3 items-center justify-center my-2.5">



                <img src={photo} alt="" />

                <div>
                    <p className="font-bold text-xl"> Name : <span className="rancho">{name}</span></p>
                    <p className="font-bold text-xl"> Chef : <span className="rancho">{chief}</span></p>
                    <p className="font-bold text-xl"> Supplier : <span className="rancho"> {supplier}</span></p>
                    <p className="font-bold text-xl"> Taste : <span className="rancho">{taste}</span></p>
                    <p className="font-bold text-xl"> Category : <span className="rancho">{category}</span></p>
                    <p className="font-bold text-xl"> Details : <span className="rancho">{details}</span></p>
                    <button className="btn rancho bg-[#D2B48C] "> Order Now <FaArrowRight /> </button>
                </div>



            </div>
            <Footer></Footer>
        </div>
    );
};

export default CoffeDetails;