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
function Pop() {
  return (
    <div>
      <Navbar />
      <h4>Escoje tu categoria? ? </h4>
      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards3}
            </section>
    </div>
  )
}

export default Pop