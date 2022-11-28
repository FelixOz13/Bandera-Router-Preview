import ReactPlayer from 'react-player/lazy'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import LikeButtons from '../components/LikeButtons'
import StarRating from '../components/StarRating'
import ThirdPartyIcons from '../components/ThirdPartyIcons'
import Comments from "../Comments/Comments";
import Navbar from "../components/Navbar"
import { FaShareSquare } from 'react-icons/fa';
import SponsorContainer from "../components/SponsorContainer"
import ButtonTreeCategories from '../components/ButtonTreeCategories'



function RHCP() {
  return (
    <>
    <Navbar/>
      <div className="hero">
       <ButtonTreeCategories/>

        
      <div className="intro">
        <h1 className="introtext1">"Red Hot Chili Peppers"</h1>
        </div>
        <StarRating />
         
        <div>
        
        </div>
      <div>
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player3'
            url="http://youtube.com/playlist?list=PL1343579D67ED4740"
            width='100%'
            height='100%'
            light="../images/redhotchili.jpg"
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

export default RHCP