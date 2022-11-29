import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Navbar from "./Navbar"




function Intro() {
  return (
    <div>
      <div>
      <Navbar />
      
      <div>
        <div className="notranslate">
        <h1 className="title2">Bandera Musical</h1>
        </div>
        <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!!!, Escoje el tipo de musica que mas te gusta`???</h4>
        
         <ButtonTreeCategories/>
        </div>
        </div>
      <div>
        <video className="player-wrapper3"
          width="100%"
          height="100%"
          autoplay
          playsInline
          loop
          controls
          >
          <source src="./images/Banderamusicalgreenspace.mp4" type="video/mp4"
           />
        </video>
        
          </div>
     
                        
            
        <SponsorContainer/>
      </div>
      
      
  )
}

export default Intro