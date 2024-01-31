import Avatar from "./Components/Avatar.jsx"
import MyInfo from "./Components/MyInfo.jsx"
import SocialNetwork from "./Components/SocialNetworks.jsx"
import AboutMe from "./Components/AboutMe.jsx"
import Footer from "./Components/footer.jsx"
import './App.css'

function App() {
  return (
    <>
    <div id="container-general">
    <Avatar/>
    <MyInfo/>
    <SocialNetwork/>
    <AboutMe/>
    <Footer/>
    </div>
    </>
  )
}

export default App
