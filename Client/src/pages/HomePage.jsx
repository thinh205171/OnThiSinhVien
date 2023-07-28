import '../App.scss'
import Header from '../components/header/Header'
import Slider from '../components/slider/Slider'
import Static from '../components/static/Static'
import University from '../components/university/University'
import Video from '../components/video/Video'
import Activity from '../components/activity/activity'
import Feedback from '../components/feedback/feedback'
import Footer from '../components/footer/Footer'
import Question from '../components/question/Question'
import Social from '../components/social/social'
import System from '../components/system/system'

function HomePage() {

  return (
    <div >
      <Header/>
      <Slider/>
      <Static/>
      <University/>
      <Question />
      <Video />
      <Feedback />
      <Social />
      <System />
      <Activity />
      <Footer />
    </div>
  )
}

export default HomePage
