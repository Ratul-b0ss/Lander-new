import React from 'react'

const Details = ({ name, position, nationality, img, bio }) => {
    return (
        /* Changed to flex-col on mobile, flex-row on md screens; removed fixed h-screen for mobile to allow scrolling if bio is long */
        <div className='w-full shrink-0 min-h-screen md:h-screen flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-6 md:p-0'>
            
            {/* Image Container: Full width on mobile, 1/2 width on desktop */}
            <div className='w-full md:w-1/2 h-[40vh] md:h-full py-6 md:py-30 pl-0 md:pl-5 mt-16 md:mt-0'>
                <div className='w-full h-full rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src={img} alt={name} />
                </div>
            </div>
            
            {/* Text Container: Full width on mobile, 1/2 width on desktop */}
            <div className='w-full md:w-1/2 h-auto md:h-full pt-4 md:pt-30 px-2 md:px-15 flex flex-col items-start justify-start pb-10 md:pb-0'>
                <div>
                    {/* Scaled down text size for mobile (text-4xl), stays text-7xl on desktop */}
                    <h1 className='text-4xl md:text-7xl font-bold uppercase text-white'>{name}</h1>
                </div>
                <div>
                    <p className='text-xs md:text-sm uppercase tracking-[0.22em] text-slate-300 mt-2 px-1 md:px-2'>{position}</p>
                </div>
                <div>
                    <h3 className='text-lg md:text-xl font-bold text-white mt-2'>{nationality}</h3>
                </div>
                <div className='mt-6 md:mt-10'>
                    {/* Scaled down bio text size for mobile (text-2xl), stays text-5xl on desktop */}
                    <p className='text-2xl md:text-5xl text-gray-300 leading-relaxed'>{bio}</p>
                </div>
            </div>
        </div>
    )
}

const Fulldetails = ({ item }) => {
    const [selectedItem, setSelectedItem] = item

    return (
        /* Added overflow-y-auto so users can scroll through the content on smaller phones */
        <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black flex flex-col items-center justify-start md:justify-center overflow-y-auto' >
            
            {/* Top Close Bar: Scaled down padding slightly on mobile */}
            <div className='close w-full absolute top-0 left-0 flex items-center justify-end px-4 py-2 md:py-3 bg-black z-50'>
                <svg
                    onClick={() => setSelectedItem(null)}
                    className='cursor-pointer hover:opacity-75 transition-opacity w-10 h-10 md:w-[74px] md:h-[74px]' 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                >
                    <line x1="24" y1="0" x2="0" y2="24" />
                    <line x1="0" y1="0" x2="24" y2="24" />
                </svg>
            </div>
            
            {selectedItem && (
                <Details 
                    name={selectedItem.name} 
                    nationality={selectedItem.nationality}
                    position={selectedItem.position} 
                    img={selectedItem.img} 
                    bio={selectedItem.bio} 
                />
            )}
        </div >
    )
}

export default Fulldetails