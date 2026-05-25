import React from 'react'

const Card = ({ name, position, img, onCardClick }) => {
  return (
    <div 
      onClick={onCardClick} 
      className='relative shrink-0 w-[240px] sm:w-[300px] xl:w-[340px] h-[360px] sm:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer'
    >
      <img src={img} alt={name} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
      <div className='absolute inset-x-0 bottom-0'>
        {/* Responsive internal flex layout to avoid text clipping on small phones */}
        <div className='px-4 sm:px-5 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between w-full backdrop-blur-xl bg-black/20'>
          <h1 className='text-xl sm:text-2xl font-semibold capitalize text-white truncate'>{name}</h1>
          <p className='mt-0.5 sm:mt-1 text-xs sm:text-sm uppercase tracking-[0.22em] text-slate-300 truncate'>{position}</p>
        </div>
      </div>
    </div>
  )
}

const CardSlider = ({ arr, item }) => {
  const [, setSelectedItem] = item 

  if (!arr || arr.length === 0) return null;

  return (
    /* Enables horizontal finger-swiping on touch devices, cleanly hides bars on desktop */
    <div className='relative w-full h-screen flex items-center justify-start overflow-x-auto md:overflow-x-hidden border border-white/10 px-4 py-8 select-none'>
      
      {/* 
        1. 'animate-marquee' references the animation defined in your index.css
        2. 'hover:[animation-play-state:paused]' lets users hover to inspect a card comfortably
      */}
      <div className='slider-track flex flex-nowrap items-center gap-5 mt-10 md:mt-18 w-max animate-marquee hover:[animation-play-state:paused]'>
        
        {/* First Loop Set */}
        {arr.map((cardItem, index) => (
          <Card 
            key={`set1-${cardItem.name}-${index}`}                  
            name={cardItem.name} 
            position={cardItem.position} 
            img={cardItem.img} 
            onCardClick={() => setSelectedItem(cardItem)} 
          />
        ))}

        {/* Second Loop Set (The Cloned Half for optical illusion tracking) */}
        {arr.map((cardItem, index) => (
          <Card 
            key={`set2-${cardItem.name}-${index}`}                  
            name={cardItem.name} 
            position={cardItem.position} 
            img={cardItem.img} 
            onCardClick={() => setSelectedItem(cardItem)} 
          />
        ))}

      </div>
    </div>
  )
}

export default CardSlider