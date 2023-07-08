const Gallery = () => {
    return ( 
        <div id='gallery' className="max-w-[1140] m-auto w-full px-4 py-16">
            <h2 className="text-center text-gray-700 p-4">Gallery</h2>
            <div className="grid sm:grid-cols-7 gap-4">
                <div className="sm:col-span-4 col-span-2 row-span-2">
                    <img className='w-full h-full object-cover' src="https://wallsdesk.com/wp-content/uploads/2017/01/Antigua-Background-.jpg" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://e0.pxfuel.com/wallpapers/285/120/desktop-wallpaper-tropical-beach-resort-luxury-vacation.jpg" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://e0.pxfuel.com/wallpapers/142/699/desktop-wallpaper-maldives-resort-in-high-resolution-for-get-island-resort.jpg" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://getwallpapers.com/wallpaper/full/3/0/5/678337.jpg" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://c0.wallpaperflare.com/preview/618/115/692/cruise-sea-ship-royal-caribbean.jpg" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://c1.wallpaperflare.com/preview/860/689/115/tour-packages-travel-tourism.jpg" alt="/" />
                </div>
                <div>
                    <img className='w-full h-full object-cover' src="https://c.wallhere.com/photos/74/ba/2048x1024_px_beach_boat_island_landscape_Limestone_nature_sand-791208.jpg!d" alt="/" />
                </div>

                
            </div>
        </div>
     );
}
 
export default Gallery;