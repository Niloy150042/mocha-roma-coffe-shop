import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Swal from "sweetalert2";
const AddCoffe = () => {
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const chief = e.target.chief.value.trim();
        const supplier = e.target.supplier.value.trim();
        const taste = e.target.taste.value.trim();
        const category = e.target.category.value.trim();
        const details = e.target.details.value.trim();
        const photo = e.target.photo.value.trim();

        if (!name || !chief || !supplier || !taste || !category || !details || !photo) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill up all required fields!",
            });
            return; 
        }

        const coffeDetails = { name, chief, supplier, taste, category, details, photo };

        fetch('http://localhost:5000/coffe', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(coffeDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "A new coffe added!",
                        icon: "success"
                    }).then(() => {
                        navigate('/');
                    });
                }
            });
    };



    return (
        <div>
            <Navbar></Navbar>
            <button onClick={() => navigate(-1)} className="btn bg-[#D2B48C] rancho text-xl"><IoArrowBackSharp />  Go-Back </button>
            <div className="flex justify-center items-center ">
                <div className="w-full  md:w-md lg:w-[1020px]  h-full md:h-full  lg:h-[600px]  bg-base-300 shadow-2xl rounded-2xl"  >
                    <p className="flex justify-center mt-4 items-center gap-2 rancho text-3xl">Add New Coffe <FaArrowDown />  </p>
                    <p className="flex justify-center text-center  mx-auto mt-4 w-full md:w-md lg:w-[70%]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handlesubmit} className="w-full md:w-md lg:w-[700px] mx-auto  mt-4 p-4" action="">
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <p className="font-semibold mb-2"> Name </p>
                                <input className="bg-gray-200 rounded-xl w-[350px] p-2 " type="text" placeholder="Enter Coffe name" name="name" />
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> Chief </p>
                                <input className=" bg-gray-200 rounded-xl w-[350px] p-2 " type="text" placeholder="Enter chief name" name="chief" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
                            <div>
                                <p className="font-semibold mb-2"> Supplier </p>
                                <input className="bg-gray-200 rounded-xl w-[350px] p-2" type="text" placeholder="Enter Supplier name" name="supplier" />
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> Taste </p>
                                <input className=" rounded-xl w-[350px] p-2 bg-gray-200" type="text" placeholder="Enter Taste " name="taste" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
                            <div>
                                <p className="font-semibold mb-2"> Category </p>
                                <input className="bg-gray-200 rounded-xl w-[350px] p-2" type="text" placeholder="Enter Catergory " name="category" />
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> Details </p>
                                <input className=" rounded-xl w-[350px] p-2 bg-gray-200" type="text" placeholder="Enter Details " name="details" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">

                            <div>
                                <p className="font-semibold mt-4"> Photo </p>
                                <input className=" rounded-xl w-full md:w-md lg:w-[600px] p-2 bg-gray-200" type="text" placeholder="Enter chief name" name="photo" />
                            </div>
                        </div>
                        <button className="btn mt-3 w-full bg-[#D2B48C]"> Add Coffe <FaArrowRight></FaArrowRight> </button>

                    </form>

                </div>
            </div>
        </div>
    );

};

export default AddCoffe;