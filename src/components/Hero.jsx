const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
          <img src="https://wallpapercave.com/wp/wp6782679.jpg" alt="/"
            className='w-full h-full object-cover '
          />
            <div className='max-w-[1140px] m-auto'>
               <div className='absolute top-[40%] w-full md:[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Destination</h1>
                <h2 className="text-4xl py-3 italic">With Escape Explorer</h2>
                <p className="font-semibold">
                  Unlock your wanderlust potential with curated weekend getaways.
                  Discover hidden gems, plan memorable adventures, and embrace the
                  joy of exploration on our immersive travel platform.
                </p>
              </div>
             </div>
            </div>
     );
}
 
export default Hero;