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
    
        <div dangerouslySetInnerHTML={{ __html: `
        <video
          className="player-wrapper3"
          loop
          muted
          autoplay
          playsinline
          src="./images/Banderamusicalgreenspace.mp4"
          type="video/mp4"
        />,
      ` }}></div>
        
          </div>
     
                        
            
        <SponsorContainer/>
      </div>
      
      
  )
}

export default Intro