import CardData10 from '../data/CardData10'
import Card from './Card'
import Navbar from './Navbar'
import ButtonTreeCategories from "./ButtonTreeCategories";


 const cards10 = CardData10.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 })

function Alternative() {
  return (
    <div>
        <Navbar />
         <h4>Escoje tu categoria? ? </h4>
      <ButtonTreeCategories/>

            <section className="cards-list">
               {cards10}
            </section>
            
        </div>
  )
}

export default Alternative