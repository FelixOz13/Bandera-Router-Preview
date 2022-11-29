import React from 'react'
import ButtonTreeCategories from "./ButtonTreeCategories";
import CardData12 from '../data/CardData12'
import Card from './Card'
import Navbar from './Navbar'

function Norteño() {
   const cards12 = CardData12.map(item => {
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
               {cards12}
            </section>
            </div>
        </div>
  )
}

export default Norteño