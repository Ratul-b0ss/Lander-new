import React from 'react'

const Card = ({ name, position, img, onCardClick }) => {
  return (
    <div 
      onClick={onCardClick} 
      className='relative shrink-0 w-[260px] sm:w-[300px] xl:w-[340px] h-[420px] rounded-[2rem] overflow-hidden border border-white/10 transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer'
    >
      <img src={img} alt={name} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
      <div className='absolute inset-x-0 bottom-0'>
        <div className='px-5 py-4 flex items-center justify-between w-full backdrop-blur-xl'>
          <h1 className='text-2xl font-semibold capitalize text-white'>{name}</h1>
          <p className='mt-1 text-sm uppercase tracking-[0.22em] text-slate-300'>{position}</p>
        </div>
      </div>
    </div>
  )
}

const CardSlider = ({ arr, item }) => {
  const [, setSelectedItem] = item 

  // Guard clause: If array is empty or undefined, don't crash
  if (!arr || arr.length === 0) return null;

  return (
    <div className='relative w-full h-screen flex items-center justify-start overflow-x-hidden border border-white/10 px-4 py-8'>
      
      {/* Using 'flex-nowrap' forces elements to stay in a single line.
        Using a direct double map ensures unique React keys without string collision.
      */}
      <div className='slider-track flex flex-nowrap items-center gap-5 mt-18 w-max'>
        
        {/* First Set of Cards */}
        {arr.map((cardItem, index) => (
          <Card 
            key={`set1-${cardItem.name}-${index}`}                  
            name={cardItem.name} 
            position={cardItem.position} 
            img={cardItem.img} 
            onCardClick={() => setSelectedItem(cardItem)} 
          />
        ))}

        {/* Second Set of Cards (The Duplicate) */}
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