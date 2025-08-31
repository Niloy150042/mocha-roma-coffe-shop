
import bannerImage from '../assets/images/more/3.png'
const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",      
            padding: '2px',
            display: "flex",
            justifyContent: "flex-end", 
            alignItems: "center",

        }}
         className="h-screen " 
        
        >
            <div className='text-white text-center md:text-center lg:text-start  w-full md:w-full lg:w-[724px] space-y-4 '>
                <p className='rancho text-4xl '>Would you like a delicious cup of Coffe ?</p>
                <p className='font-sans '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#E3B577] border-none'>Explore us </button>
            </div>

        </div>
    );
};

export default Banner;