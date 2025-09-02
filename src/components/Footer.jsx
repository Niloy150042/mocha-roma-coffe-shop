import bgimage from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
const Footer = () => {
    return (
        <div style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }}>

            <img src={logo} className='h-[100%]' alt="" />
            <h1 className='text-xl rancho text-white text-center p-2'>@ CopyRight Mocha Roma ....... Developed By Mehedi Islam Niloy</h1>

        </div>
    );
};

export default Footer;