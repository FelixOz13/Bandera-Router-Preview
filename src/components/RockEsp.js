import CardData7 from '../data/CardData7'
import Card from '../components/Card'
import Navbar from "../components/Navbar"

import ButtonTreeCategories from "../components/ButtonTreeCategories";



const cards7 = CardData7.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )
function RockEsp() {
  return (
   <div>
          <Navbar />
          <h1 className="title2">Rock en Español</h1>
          <h4 className="headertext">Escoje tu categoria? ? </h4>
          <img className="indianaut"  id="ind2"src="./images/indianaut.png" alt=""/>
      <ButtonTreeCategories />
          <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
          <img className="indianaut" src="./images/indianaut.png" alt=""/>
            <section className="cards-list">
               {cards7}
            </section>
            
        </div>
  )
}

export default RockEsp