import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const SingleCoffie = ({ coffe }) => {
    const { name, chief, supplier, taste, category, details, photo } = coffe
    return (
        <div className=" bg-gray-100 rounded-3xl h-[300px] w-full md:w-md lg:w-[500px] mt-4 flex items-center justify-center ">
            <img src={photo} alt="" />
            <div className="text-xl">
                <p className="font-bold">Name : <span className="font-semibold"> {name} </span></p>
                <p className="font-bold">Chef : <span className="font-semibold">{chief}</span></p>
                <p className="font-bold">Taste : <span className="font-semibold"> {taste}</span></p>

            </div>
            <div className=" grid grid-cols-1 gap-5 mr-3">
                <Link> <FaEye className="bg-[#D2B48C] p-1 text-3xl rounded" /></Link>
                <Link>  <FaPen className="bg-black text-white p-1 text-3xl rounded" /></Link>
                <Link><MdDelete className="bg-red-600 p-1 text-white text-3xl rounded" /></Link>

            </div>

        </div>
    );
};

export default SingleCoffie;