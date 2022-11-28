import CardData8 from '../data/CardData8'
import Card from './Card'
import Navbar from "./Navbar"
import ButtonTreeCategories from "./ButtonTreeCategories";


const cards8 = CardData8.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
         />
        )
 }
    )

function Clubmusic() {
  
    return (
   <div>
        <Navbar />
         <h4>Escoje tu categoria? ? </h4>
         <ButtonTreeCategories/>

            <section className="cards-list">
               {cards8}
            </section>
            
        </div>
  )
}

export default Clubmusic