import React from 'react'

const Details = ({ name, position, nationality, img, bio }) => {
    return (
        <div className='w-full shrink-0 h-screen flex items-center justify-center gap-10 '>
            <div className='w-1/2 h-full py-30 pl-5'>
                <div className='w-full h-full rounded-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src={img} alt={name} />
                </div>
            </div>
            <div className='w-1/2 h-full pt-30 px-15 flex flex-col items-start justify-start'>
                <div>
                    <h1 className='text-7xl font-bold uppercase text-white'>{name}</h1>
                </div>
                <div>
                    <p className='text-sm uppercase tracking-[0.22em] text-slate-300 mt-2 px-2'>{position}</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold text-white mt-2'>{nationality}</h3>
                </div>
                <div className='mt-10 '>
                    <p className='text-5xl text-gray-300'>{bio}</p>
                </div>
            </div>
        </div>
    )
}

const Fulldetails = ({ item }) => {
    const [selectedItem, setSelectedItem] = item



    return (
        <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black flex flex-col items-center justify-center overflow-auto' >
            <div className='close w-full absolute top-0 left-0 flex items-center justify-start px-4 py-3 border-white border-b-[1px]'>
                <svg
                    onClick={() => setSelectedItem(null)}
                    className='cursor-pointer hover:opacity-75 transition-opacity' 
                    xmlns="http://www.w3.org/2000/svg"
                    width='74'
                    height='74'
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