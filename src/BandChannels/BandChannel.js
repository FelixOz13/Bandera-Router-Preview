import ButtonTreeChannels from "../components/ButtonTreeChannels"
import '../App.css';
import Navbar from "../components/Navbar"
import SponsorContainer from "../components/SponsorContainer";
import BandsData from "../data/BandsData"
import ButtonTreeCategories from '../components/ButtonTreeCategories';



function BandChannel(props) {
   const channel = BandsData.map(item => {
    return (
      <ButtonTreeChannels
        key={item.id}
        item={item}
       />
    )
  })
  
 

  return (
    <>
    <Navbar/>
     <ButtonTreeCategories/> 
        
        <section className="channel-component">
               {channel}
      </section>
      <SponsorContainer/>
        
    </>
       
  )
}

export default BandChannel