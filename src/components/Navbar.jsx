import bgimage from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
const Navbar = () => {
    return (
        <div style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50px", 
            width: "100%",
            display: "flex",          
            justifyContent: "center",  
            alignItems: "center",
            gap:"10px"
        }}>

            <img src={logo} className='h-[100%]' alt="" />
            <h1 className='text-3xl rancho text-white'>Mocha Roma</h1>

        </div>
    );
};

export default Navbar;