import ReactPlayer from 'react-player/lazy'
import '../App.css';
import LikeButtons from '../components/LikeButtons'
import StarRating from '../components/StarRating'
import ThirdPartyIcons from '../components/ThirdPartyIcons'
import Comments from "../Comments/Comments";
import {
  BsFillPlayCircleFill
} from 'react-icons/bs';
import Navbar from "../components/Navbar"
import { FaShareSquare } from 'react-icons/fa';
import SponsorContainer from "../components/SponsorContainer"
import ButtonTreeCategories from "../components/ButtonTreeCategories";

function Raymix() {
  return (
     <>
      <Navbar />
      <ButtonTreeCategories/>
      <div className="hero">
    <div className="intro">
        <h1 className="introtext1">Raymix</h1>
        </div>
        <StarRating />
         
        <div>
        
        </div>
      <div>
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player3'
            url='https://youtube.com/playlist?list=PLF-cRDh2mrlWHTpQuUb9wod5uZf_aI6Mv'
            width='100%'
            height='100%'
            light="../images/Raymix.jpg"
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

export default Raymix