import image1 from '../assets/images/cups/Rectangle 9.png'
import image2 from '../assets/images/cups/Rectangle 10.png'
import image3 from '../assets/images/cups/Rectangle 11.png'
import image4 from '../assets/images/cups/Rectangle 12.png'
import image5 from '../assets/images/cups/Rectangle 13.png'
import image6 from '../assets/images/cups/Rectangle 14.png'
import image7 from '../assets/images/cups/Rectangle 15.png'
import image8 from '../assets/images/cups/Rectangle 16.png'

const Followus = () => {
    return (
        <div className="space-y-4 w-full md:w-md lg:w-[1200px] mx-auto">
            <div className="text-center mt">
                <p className="font-sans">--- Follow Us Now --- </p>
                <p className="rancho text-4xl"> Follow Us on Instagram </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
               <img src={image1}  alt="" />
               <img src={image2} alt="" />
               <img src={image3} alt="" />
               <img src={image4} alt="" />
               <img src={image5} alt="" />
               <img src={image6} alt="" />
               <img src={image7} alt="" />
               <img src={image8} alt="" />
            </div>

        </div>
    );
};

export default Followus;