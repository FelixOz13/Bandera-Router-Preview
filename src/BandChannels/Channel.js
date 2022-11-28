import ReactPlayer from 'react-player/lazy'
import '../App.css';
import LikeButtons from '../components/LikeButtons'
import StarRating from '../components/StarRating'
import ThirdPartyIcons from '../components/ThirdPartyIcons'
import Comments from "../Comments/Comments";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FaShareSquare } from 'react-icons/fa';
import SponsorContainer from "../components/SponsorContainer";


function Channel(props) {
  return (
    <>
   
    <div className="intro">
        <h1 className="introtext1">{props.item.title}</h1>
        </div>
        <StarRating />
         
        <div>
        
        </div>
      <div>
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player3'
            url={props.item.videourl}
            width='100%'
            height='100%'
            light={`../images/${props.item.coverImg}`} 
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
       
       </>
  )
}

export default Channel