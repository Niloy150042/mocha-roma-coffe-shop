
import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";
const Popular = () => {
    return (
        <div className="text-center  mt-5 space-y-3">
            <p className="text-2xl "> --- Sip & Savor --- </p>
            <p className="text-[#331A15] rancho text-4xl font-extrabold">Our Popular Products</p>
          <Link to={'/addcoffe'}><button className="btn bg-[#E3B577] border-none"> AddCoffe <GiCoffeeCup /> </button></Link>
            
        </div>
    );
};

export default Popular;