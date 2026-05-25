import React, { useState } from 'react'
import CardSlider from './components/cardslider'
import Fulldetails from './components/Fulldetails'
import Header from './components/Header'
import Footer from './components/Footer'


const arr = [

    {
        name: 'ratul',
        nationality: 'Bangladeshi',
        position: 'CEO',
        img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        bio: 'Schwei Muller is a renowned photographer known for his unique style and compelling storytelling through images.'
    },
    {
        name: 'sakim',
        position: 'CEO',
        nationality: 'pakistani',
        img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        bio: 'Sakim is a talented designer with a passion for creating innovative solutions.'
    },
    {
        name: 'ariana',
        position: 'CTO',
        nationality: 'american',
        img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=60',
        bio: 'Ariana is a visionary leader with a strong background in technology and innovation.'
    },
    {
        name: 'mohsin',
        position: 'CFO',
        nationality: 'austrian',
        img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=60',
        bio: 'Mohsin is an experienced financial strategist with a proven track record of success in the industry.'
    },

]

const App = () => {
	const [selectedItem, setSelectedItem] = useState(null)

    console.log(selectedItem)

	return (
		<div >
			<Header/>
			<CardSlider item={[selectedItem,setSelectedItem]} arr={arr}/>
            {selectedItem && <Fulldetails item={[selectedItem,setSelectedItem]} />}
			<Footer/>
		</div>
	)
}

export default App