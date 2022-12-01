import "./intro.css"
import SponsorContainer from "./SponsorContainer"
import ButtonTreeCategories from "./ButtonTreeCategories";
import Navbar from "./Navbar"





function Intro() {
  return (
    <div>
      <div className="hero2">
      <Navbar />
      
      <div>
        <div className="notranslate">
        <h1 className="title2">Bandera Musical</h1>
        </div>
        <h4 className="headertext"> Hola Paisano, Bienvenido a Bandera Musical!, Escoje el tipo de musica que mas te gusta`???</h4>
        
         <ButtonTreeCategories/>
        </div>
        </div>
      <div className="video3">
        <video className="player-wrapper3"
          autoPlay={true}
          muted 
          loop
          playsInline={true}
          
          
          width="100%"
          height="100%"
          >
          <source  src="./images/Banderamusicalgreenspace.mp4" type="video/mp4"
           />
        </video>
        
          </div>
     
                        
            
        <SponsorContainer/>
      </div>
      
      
  )
}

export default Intro