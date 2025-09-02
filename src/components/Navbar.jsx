import { Link } from 'react-router-dom';
import bgimage from '../assets/images/more/15.jpg'
import logo from '../assets/images/more/logo1.png'
import { Link as ScrollLink } from 'react-scroll';
const Navbar = () => {
    const navlink = <>
        <Link to={'/'} className='hover:underline'> Home  </Link>
        <ScrollLink
            to="coffies-section"
            smooth={true}
            duration={500}
            offset={-60}
            className="hover:underline cursor-pointer"
        >
            Coffies
        </ScrollLink>
       <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            offset={-60}
            className="hover:underline cursor-pointer"
        >
            Contacts
        </ScrollLink>

    </>
    return (
        <div style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60px",


        }}>

            <div className="navbar  shadow-sm text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#D2B48C]  rounded-box z-1 w-52 p-2 shadow">
                            {navlink}

                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-10 h-10 object-contain" alt="logo" />
                        <h1 className="text-2xl rancho text-white whitespace-nowrap">Mocha Roma</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex g">
                    <ul className="menu menu-horizontal gap-5  font-serif text-xl " >
                        {navlink}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#D2B48C] border-none">Log-in</a>
                </div>
            </div>








        </div>


    );
};

export default Navbar;