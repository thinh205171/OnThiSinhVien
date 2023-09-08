import React from "react";
import Slider from "@/components/slider/Slider";
import Static from "@/components/static/Static";
import University from "@/components/university/University";
import Video from "@/components/video/Video";
import Activity from "@/components/activity/Activity";
import Feedback from "@/components/feedback/Feedback";
import Question from "@/components/question/Question";
import Social from "@/components/social/Social";
import System from "@/components/system/System";

export default function Home() {
  return (
    <div>
      <Slider />
      <Static />
      <University />
      <Question />
      <Video />
      <Feedback />
      <Social />
      <System />
      <Activity />
    </div>
  );
}
