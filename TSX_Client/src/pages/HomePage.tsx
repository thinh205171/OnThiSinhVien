import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import Static from "../components/static/Static";
import University from "../components/university/University";
import Video from "../components/video/Video";
import Activity from "../components/activity/Activity";
import Feedback from "../components/feedback/Feedback";
import Footer from "../components/footer/Footer";
import Question from "../components/question/Question";
import Social from "../components/social/Social";
import System from "../components/system/System";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import "../App.scss";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <Login />
      <Register />
      <Static />
      <University />
      <Question />
      <Video />
      <Feedback />
      <Social />
      <System />
      <Activity />
      <Footer />
    </div>
  );
}

export default HomePage;
