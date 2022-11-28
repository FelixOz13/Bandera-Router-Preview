import React from 'react'
import Navbar from "./Navbar"
import BandsData from "../data/BandsData"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";

import Card from "./Card"



function Home() {

   const cards = BandsData.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
       />
    )
   })
  
  
  return (
     <div>
      <Navbar/>
      <h4> Hola Paisano, Bienvenido a Bandera Musical!!!, Escoje el tipo de musica que mas te gusta`???</h4>
       <ButtonTreeCategories/>
      <div className="hero">
        <h4> Tal vez prefieras un Arista en Especial`???</h4>
          <section className="cards-list">
               {cards}
        </section>
        
      
        <SponsorContainer/>
       
        </div>
       
       </div>
      
  )
}


export default Home