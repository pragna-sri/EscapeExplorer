const Activities = () => {
    return ( 
        <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
            <div className="relative p-4">
                <h3 className='absolute z-10 top-[50%] left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]' >Resorts</h3>
                <img className='w-[1180px] h-[250px] object-cover relative border-4 border-white shadow-lg'
                 src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww&w=1000&q=80" alt="/" />
            </div>


            <div className="relative p-4">
                <h3 className="absolute z-10 text-white text-2xl font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Cruises</h3>
                <img className='w-[1180px] h-[250px] object-cover relative border-4 border-white shadow-lg'
                src="https://wallpaper-house.com/data/out/9/wallpaper2you_320192.jpg" alt="/" />
            </div>
            

            <div className="relative p-4">
                <h3 className="absolute z-10 text-white text-2xl font-bold top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Excursions</h3>
                <img className='w-[1180px] h-[250px] object-cover relative border-4 border-white shadow-lg'
                src="https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?cs=srgb&dl=pexels-richard-segal-1645028.jpg&fm=jpg" alt="/" />
            </div>
            
        </div>

     );
}
 
export default Activities;