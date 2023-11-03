import "@/style/reset.css";
import LendingView from "./LandingView";

function Landing() {
  const logoProps = {
    src: "/images/svg/logo.svg",
    alt: "NEXT ROOM",
    width: 184,
    height: 26,
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const LandingViewProps = {
    buttonProps,
    logoProps,
  };

  return <LendingView {...LandingViewProps} />;
}

export default Landing;
