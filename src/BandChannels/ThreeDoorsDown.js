import ReactPlayer from 'react-player/lazy'
import '../App.css';
import LikeButtons from '../components/LikeButtons'
import StarRating from '../components/StarRating'
import ThirdPartyIcons from '../components/ThirdPartyIcons'
import Comments from "../Comments/Comments";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Navbar from "../components/Navbar"
import { FaShareSquare } from 'react-icons/fa';
import ButtonTreeCategories from "../components/ButtonTreeCategories";
import SponsorContainer from "../components/SponsorContainer"

function ThreeDoorsDown () {
     return (
    <>
    <Navbar/>
      <div className="hero">
         <ButtonTreeCategories/>
        

        
      <div className="intro">
        <h1 className="introtext1">"3 Doors Down"</h1>
        </div>
        <StarRating />
         
        <div>
        
        </div>
      <div>
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player3'
            url='https://youtube.com/playlist?list=OLAK5uy_mN84txxkmTCfryqZwmG2iUaDPDXkuMohc'
            width='100%'
            height='100%'
            light="../images/3doorsdown.jpeg"
            controls
            playIcon=<BsFillPlayCircleFill/>
        />
        </div>
          <LikeButtons />
          <div className="sharebutton">
               <FaShareSquare/>
                   </div>
         <div>
          <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
         </div> 
        </div>
        <ThirdPartyIcons/>
      <div>
       
        </div>
      
      <div className="slidertextdiv">
            <h1 className="slidertext">Presiona un Link para visitar a un sitio web</h1>
        </div>
        <SponsorContainer/>
       
        </div>
       </>
       
      
  )
}


export default ThreeDoorsDown 