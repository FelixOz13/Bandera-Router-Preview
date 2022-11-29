import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData13 from '../data/CardData13'
import Card from './Card'
import Navbar from './Navbar'


function Banda() {
   const cards13 = CardData13.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
                
                           
                        
            />
        )
    })
  return (
    <div>
        <Navbar />
           <h4 className="headertext">Escoje tu categoria? ? </h4> 
           <ButtonTreeCategories/>
            <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <div>
            <section className="cards-list">
               {cards13}
            </section>
            </div>
        </div>
  )
}

export default Banda