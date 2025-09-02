import { useLoaderData, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { IoArrowBackSharp } from 'react-icons/io5';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';
const UpdateCoffe = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const { name, chief, supplier, taste, category, details, photo, _id } = data
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const chief = e.target.chief.value
        const supplier = e.target.supplier.value
        const taste = e.target.taste.value
        const category = e.target.name.value
        const details = e.target.name.value
        const photo = e.target.photo.value
        const coffeDetails = { name, chief, supplier, taste, category, details, photo }

        fetch(`http://localhost:5000/coffe/${_id}`, { method: 'PUT', headers: { 'content-type': "application/json" }, body: JSON.stringify(coffeDetails) })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Good job!",
                        text: "this coffe is updated successfully!",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Coffe is already up to date!",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })



    }
    return (
        <div>
            <Navbar></Navbar>
            <button onClick={() => navigate(-1)} className="btn bg-[#D2B48C] rancho text-xl"><IoArrowBackSharp />  Go-Back </button>
            <div className="flex justify-center items-center ">
                <div className="w-full  md:w-md lg:w-[1020px]  h-full md:h-full  lg:h-[600px]  bg-base-300 shadow-2xl rounded-2xl"  >
                    <p className="flex justify-center mt-4 items-center gap-2 rancho text-3xl"> Please !! Update Your Coffe <FaArrowDown />  </p>
                    <img src={photo} className='h-[100px] w-[100px] fles  mx-auto bg-gray-300 p-3 rounded-2xl' alt="" />
                    <form onSubmit={handleSubmit} className="w-full md:w-md lg:w-[700px] mx-auto  mt-4 p-4" action="">
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <p className="font-semibold mb-2"> Name </p>
                                <input className="bg-gray-200 rounded-xl w-[350px] p-2 " type="text" placeholder="Enter Coffe name" name="name" defaultValue={name} />
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> Chief </p>
                                <input className=" bg-gray-200 rounded-xl w-[350px] p-2 " type="text" placeholder="Enter chief name" name="chief" defaultValue={chief} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
                            <div>
                                <p className="font-semibold mb-2"> Supplier </p>
                                <input className="bg-gray-200 rounded-xl w-[350px] p-2" type="text" placeholder="Enter Supplier name" name="supplier" defaultValue={supplier} />
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> Taste </p>
                                <input className=" rounded-xl w-[350px] p-2 bg-gray-200" type="text" placeholder="Enter Taste " name="taste" defaultValue={taste} />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
                            <div>
                                <p className="font-semibold mb-2"> Category </p>
                                <input className="bg-gray-200 rounded-xl w-[350px] p-2" type="text" placeholder="Enter Catergory " name="category" defaultValue={category} />
                            </div>
                            <div>
                                <p className="font-semibold mb-2"> Details </p>
                                <input className=" rounded-xl w-[350px] p-2 bg-gray-200" type="text" placeholder="Enter Details " name="details" defaultValue={details} />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">

                            <div>
                                <p className="font-semibold mt-4"> Photo </p>
                                <input className=" rounded-xl w-full md:w-md lg:w-[600px] p-2 bg-gray-200" type="text" placeholder="Enter chief name" name="photo" defaultValue={photo} />
                            </div>
                        </div>
                        <button className="btn mt-3 w-full bg-[#D2B48C]"> Update Coffe <FaArrowRight></FaArrowRight> </button>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateCoffe;