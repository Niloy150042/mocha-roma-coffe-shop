import image1 from '../assets/images/icons/1.png'
import image2 from '../assets/images/icons/2.png'
import image3 from '../assets/images/icons/3.png'
import image4 from '../assets/images/icons/4.png'
const Awesome = () => {
    return (
        <div className="h-full md:h-full lg:h-[200px] bg-[#ECEAE3] flex ">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center p-5 w-full md:w-full lg:w-[1300px] mx-auto gap-6' >

                <div className=' flex flex-col items-center text-center lg:text-start lg:items-start gap-2'>
                    <img src={image1} alt="" />
                    <p className='rancho text-2xl'>Awesome Arome</p>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>

                </div>
                <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-2'>
                    <img src={image2} alt="" />
                    <p className='rancho text-2xl '>High Quality</p>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-2'>
                    <img src={image3} alt="" />
                    <p className='rancho text-2xl'>Pure Grades</p>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='flex flex-col items-center text-center lg:text-start lg:items-start gap-2'>
                    <img src={image4} alt="" />
                    <p className='rancho text-2xl'>Proper Roasting</p>
                    <p>Your coffee is brewed by first roasting the green coffee beans </p>
                </div>
            </div>
        </div>
    );
};

export default Awesome;