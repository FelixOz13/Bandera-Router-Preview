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




function Adele() {
  return (
    <>
      <Navbar />
      <ButtonTreeCategories/>
      <div className="hero">  
      <div className="intro">
        <h1 className="introtext1">Adele</h1>
        </div>
        
         
        <div>
        
        </div>
      <div className="flexbox">
         <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url='http://youtube.com/playlist?list=OLAK5uy_n5Ls1CYg63QxBxeuJf4ICzSY-kvAMLQu8'
              light="../images/adele.jpg"
              width='100%'
              height='100%'
            controls
            playIcon=<BsFillPlayCircleFill/>
        />
        </div>
        <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
          />
          </div>
          <div className="like-items">
          <div className="likebuttons">
            <LikeButtons />
          </div>

          <div className="sharebutton">
            <FaShareSquare/>
          </div>

         <div className ="star-rating">
            <StarRating />
          </div> 
          
        </div>
      </div>
      
      <div>
        <ThirdPartyIcons/>
      </div>
      
      <div className="slidertextdiv">
        <h1 className="slidertext">Presiona un Link para visitar a un sitio web</h1>
        <SponsorContainer/>
      </div>
       </>
       
      
  )
}


export default Adele