import CardData3 from '../data/CardData3'
import Card from '../components/Card'
import Navbar from "../components/Navbar"
import ButtonTreeCategories from "./ButtonTreeCategories";



  const cards3 = CardData3.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )
function RapTrap() {
  return (
    <div>
        <Navbar />
         <h4>Escoje tu categoria? ? </h4>
       <ButtonTreeCategories/>
            <section className="cards-list">
               {cards3}
            </section>
            
        </div>
  )
}

export default RapTrap