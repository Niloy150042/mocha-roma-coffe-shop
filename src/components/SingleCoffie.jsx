import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const SingleCoffie = ({ coffe }) => {
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffe/${id}`, { method: 'DELETE' }) // ✅ method added
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {  // ✅ use deletedCount directly
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Your coffe has not been deleted!",
                                footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        }
                    })

            }
        });
    }
   
    const { name, chief, supplier, taste, category, details, photo, _id } = coffe
    return (
        <div className=" rancho bg-gray-200 rounded-3xl h-[300px] 2xl:h-[500px] w-full md:w-[500] xl:w-[500px] 2xl:w-[1000px]  flex items-center justify-center p-3 ">
            <img src={photo} className=" h-[200px] w-[150px]" alt="" />
            <div className="text-xl">
                <p className="font-bold">Name : <span className="font-semibold"> {name} </span></p>
                <p className="font-bold">Chef : <span className="font-semibold">{chief}</span></p>
                <p className="font-bold">Taste : <span className="font-semibold"> {taste}</span></p>

            </div>
            <div className="grid grid-cols-1 gap-5 ml-6 ">
                <Link> <FaEye className="bg-[#D2B48C] p-1 text-3xl rounded" /></Link>
                <Link  to={`/updatecoffe/${_id}`}>  <FaPen className="bg-black text-white p-1 text-3xl rounded" /></Link>
                <Link onClick={() => handleDelete(_id)} ><MdDelete className="bg-red-600 p-1 text-white text-3xl rounded" /></Link>

            </div>

        </div>
    );
};

export default SingleCoffie;