import { FaArrowRight, FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import logo from '../assets/images/more/logo1.png'
const Contact = () => {
    return (
        <div className="mt-4 w-full md:w-md lg:w-[1200px] mx-auto  flex flex-col md:flex-col lg:flex-row items-center  justify-items-center bg-[#ECEAE3] p-4 rounded">

            <div className="grid grid-cols-1 justify-items-center md:justify-items-center lg:justify-items-start w-full md:w-full lg:w-[50%] mx-auto">
                <img className='h-[100px]' src={logo} alt="" />
                <p className='rancho text-3xl text-[#331A15] '>Mocha Roma Coffe House</p>
                <p className="w-[50%]">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                {/* social icon  */}
                <div className="flex gap-2 text-3xl mt-3">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagramSquare />
                    <FaLinkedin />
                </div>
                <p className='rancho text-2xl text-[#331A15] mt-3'>Get in touch</p>
                <div className="mt-3" >
                    <span className="flex items-center gap-2"> <FaPhoneAlt /> <p> +8801872666261 </p> </span>
                    <span className="flex items-center gap-2"> <FaMessage /> <p> mehedislam@gmail.com </p> </span>
                    <span className="flex items-center gap-2"> <FaLocationDot /> <p> 13/10 Banglabajar , Dhaka ,Bangladesh </p> </span>

                </div>
            </div>

            <div className="space-y-4 ]">
                <p className="rancho text-3xl text-[#331A15] text-center py-2">Contact With Us </p>
                 
                <input type="text" placeholder=" Your Name" className="w-full bg-white p-2 " />
               <input type="email" placeholder=" Your email" className="w-full bg-white p-2 " />
                <input type="text" placeholder=" Your message" className="w-full bg-white p-2 " />
                <button className="btn w-full  mt-3 rancho text-2xl">send  message<FaArrowRight /> </button>
            </div>
           

        </div>
    );
};

export default Contact;