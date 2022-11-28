
import ReactPlayer from 'react-player/lazy'
import LikeButtons from '../components/LikeButtons'
import StarRating from '../components/StarRating'
import ThirdPartyIcons from '../components/ThirdPartyIcons'
import Comments from "../Comments/Comments";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Navbar from "../components/Navbar"
import { FaShareSquare } from 'react-icons/fa';
import SponsorContainer from "../components/SponsorContainer"
import ButtonTreeCategories from '../components/ButtonTreeCategories';

function TercerElemento(props) {
  return (
    <>
    <Navbar/>
      <div className="hero">
       <ButtonTreeCategories/>
        

        
      <div className="intro">
        <h1 className="introtext1">"T3rc3r Elemento"</h1>
        </div>
        <StarRating />
         
        <div>
        
        </div>
      <div>
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player3'
            url='http://youtube.com/playlist?list=PLkzsyPO-ybMTw1qR-AdG9_urQq3-nfr6b'
            width='100%'
            height='100%'
            light="../images/3erElemento.jpg"
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
 

export default TercerElemento