import { Link } from 'react-router-dom'

function Flipbox() {
  return (
    <div>
      <div className="navbar">
      <div className="flip-box">
        <div className="flip-box-inner">
          
          
            <div className="flip-box-front">
              
              <Link  to="/intro">
                <img className="flag-logo3" src="../images/aguiladorada.jpeg" alt="Mexico" />
                </Link>
          </div>

            <div class="flip-box-back">
               <Link  to="/intro">
                <img className="flag-logo4" src="../images/goldmusic2.png" alt="Mexico" />
                </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Flipbox