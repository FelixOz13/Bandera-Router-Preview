import ReactPlayer from 'react-player/lazy'
import "../Comments/Comments.css"
import LikeButtons from '../components/LikeButtons'
import StarRating from '../components/StarRating'
import ThirdPartyIcons from '../components/ThirdPartyIcons' 
import Comments from "../Comments/Comments";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Navbar from "../components/Navbar"
import { FaShareSquare } from 'react-icons/fa';
import SponsorContainer from "../components/SponsorContainer"
import ButtonTreeCategories from "../components/ButtonTreeCategories";


 export default function AngelesAzules() {
  return (
    <div className="hero">
       <Navbar />
       <ButtonTreeCategories/>
      <div className="intro">
        <h1 className="introtext1">"Los Angeles Azules"</h1>
      </div>
      <div>
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url='http://youtube.com/playlist?list=PLF-cRDh2mrlUHPW6deKoe0C771xYTJ6SY'
            width='100%'
            height='100%'
            light="../images/angelesazules.jpg"
            controls
            playIcon=<BsFillPlayCircleFill/>
        />
        </div>
        <div className="slidertextdiv">
          <h1 className="slidertext"> ↓↓↓Desliza para Navegar↓↓↓</h1>
        </div>
         <div>
          <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
        </div>
        <div className="like items">
          <LikeButtons />
          <FaShareSquare className="sharebutton"/>
          <StarRating />
        </div>
      </div>
      <div className="slidertextdiv">
            <h1 className="slidertext">Presiona un Link para visitar a una red social del artista</h1>
        </div>
      <ThirdPartyIcons/>
      <div className="slidertextdiv">
            <h1 className="slidertext">Presiona un Link para visitar a un sitio web</h1>
        </div>
        <SponsorContainer />
       
        </div>
       
       
      
  )
}


