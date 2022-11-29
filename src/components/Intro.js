import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Navbar from "./Navbar"


function Intro() {
  return (
    <div>
      <Navbar />
      
     <div>
        <h1 className="title">Bandera Musical</h1>
        
        <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!!!, Escoje el tipo de musica que mas te gusta`???</h4>
        
         <ButtonTreeCategories/>
  </div>
  <div className="introcard">
    <div className="introcard__content">
  
      <div className="introcard__front">
        <h3 className="introcard__title">Bandera Musical</h3>
        <p className="introcard__subtitle"></p>
      </div>
  
      <div className="introcard__back">
           <p className="introcard__body">Videos Musicales con Red Social </p> 
          </div>
          
        </div>
        <SponsorContainer/>
      </div>
      </div>
  )
}

export default Intro