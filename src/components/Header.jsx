import React from 'react'

const Header = () => {
  return (
    <div className = "w-full fixed top-0 left-0 z-30">
      <div className='w-full py-3 px-5 flex items-center justify-between'>
        <div>
            <h2 className = 'text-3xl font-bold'>RATUL</h2>
        </div>
        <div className='w-1/2 flex items-center justify-around gap-5'>
            <h3 className='text-ls'>
              <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="">Home</a>
            </h3>
            <h3 className='text-ls'>
              <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="">About</a>
            </h3>
            <h3 className='text-ls'>
              <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="">Projects</a>
            </h3>
            <h3 className='text-ls'>
              <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="">Insights</a>
            </h3>
            <h3 className='text-ls'>
              <a className='relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' href="">Contact</a>
            </h3>            
        </div>
      </div>
    </div>
  )
}

export default Header
