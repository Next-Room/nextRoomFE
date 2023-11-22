"use client"

import "@/style/reset.css";
import LandingView from "./LandingView";

function Landing() {

  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const LandingViewProps = {
    buttonProps,
  };

  return <LandingView {...LandingViewProps} />;
}

export default Landing;
