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
         <h4 className="headertext">Escoje tu categoria? ? </h4>
      <ButtonTreeCategories/>
      <h1 className="slidertext">Presiona un Link para visitar la red social del artista</h1>
            <section className="cards-list">
               {cards10}
            </section>
            
        </div>
  )
}

export default Alternative