import CardData11 from '../data/CardData11'
import Card from '../components/Card'
import Navbar from "../components/Navbar"
import ButtonTreeCategories from "./ButtonTreeCategories";

const cards11 = CardData11.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )
function Reggaeton() {
  return (
    <div>
        <Navbar />
      <h4 className="headertext">Escoje tu categoria? ? </h4>
      <ButtonTreeCategories />
      <h1 className="slidertext">◄◄◄◄Desliza para Navegar ►►►►</h1>
            <section className="cards-list">
               {cards11}
            </section>
            
        </div>
  )
}

export default Reggaeton