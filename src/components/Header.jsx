import React, { useState } from 'react'

const Header = () => {
  // State to track if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-30">
      <div className='w-full py-3 px-5 flex items-center justify-between bg-black/10 backdrop-blur-sm md:bg-transparent'>
        <div>
          <h2 className='text-3xl font-bold text-white mix-blend-difference'>RATUL</h2>
        </div>

        {/* --- DESKTOP NAV --- */}
        {/* Hidden on mobile (hidden), shown on desktop (md:flex) */}
        <div className='hidden md:flex w-1/2 items-center justify-around gap-5'>
          {['Home', 'About', 'Projects', 'Insights', 'Contact'].map((item) => (
            <h3 key={item} className='text-lg text-white'>
              <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </h3>
          ))}
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        {/* Hidden on desktop (md:hidden), positioned above everything (z-50) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='block md:hidden focus:outline-none z-50 text-white p-2'
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
          </div>
        </button>
      </div>

      {/* --- MOBILE NAV OVERLAY --- */}
      {/* Slides in from the top/fades when open */}
      <div className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-all duration-300 z-40 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {['Home', 'About', 'Projects', 'Insights', 'Contact'].map((item) => (
          <h3 key={item} className='text-2xl text-white' onClick={() => setIsOpen(false)}>
            <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </h3>
        ))}
      </div>
    </div>
  )
}

export default Header