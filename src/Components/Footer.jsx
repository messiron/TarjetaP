import facebook from '../assets/facebook.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/square-twitter.svg'

function Footer() {
    return(
      <div className='Footer'>
          <img src={twitter}></img>
          <img src={facebook}></img>
          <img src={linkedin}></img>
          <img src={github}></img>

      </div>
    )
  }
  
  export default Footer;