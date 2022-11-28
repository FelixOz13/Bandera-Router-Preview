import CardData3 from '../data/CardData3'
import Card from '../components/Card'
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
 

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
       <Link className="btn btn-warning" to="/home"><FaHome /></Link> 
      <Link className="btn btn-warning" to="/mariachi">Musica Regional Mexicana</Link>
      <Link className="btn btn-warning" to="/cumbias">Reggae y Alternativo</Link>
      <Link className="btn btn-warning" to="/rockesp">Rock en Español </Link> 
      <Link className="btn btn-warning" to="/raptrap">Rap y Trap</Link>
      <Link className="btn btn-warning" to="/baladas">Baladas</Link>
      <Link className="btn btn-warning" to="/classicrock">Rock Classico</Link>
      <Link className="btn btn-warning" to="/clubmusic">Electronica</Link>
            <section className="cards-list">
               {cards3}
            </section>
    </div>
  )
}

export default Pop