import CardData4 from '../data/CardData4'
import Card from './Card'
import Navbar from './Navbar'
import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards4 = CardData4.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Baladas() {
  return (
    <div>
        <Navbar />
         <h4>Escoje tu categoria? ? </h4>
      <ButtonTreeCategories/>

            <section className="cards-list">
               {cards4}
            </section>
            
        </div>
  )
}

export default Baladas