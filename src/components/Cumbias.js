import CardData9 from '../data/CardData9'
import ButtonTreeCategories from "./ButtonTreeCategories";
import Card from './Card'
import Navbar from './Navbar'


 const cards9 = CardData9.map(item => {
   
     return (
         <Card
             key={item.id}
             item={item}
      />
        )
 }) 
    
 
function Cumbias() {
  return (
    
      
        <div>
        <Navbar />
         <h4>Escoje tu categoria? ? </h4>
       <ButtonTreeCategories/>

            <section className="cards-list">
               {cards9}
            </section>
            
        </div>
    
  )
}

export default Cumbias