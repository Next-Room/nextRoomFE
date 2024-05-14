import { useEffect, useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import "@/apis/firebase";

import { useRouter } from "next/navigation";
import * as S from "./Component.styled";

export default function Inputbar(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
  const analytics = getAnalytics();

  const router = useRouter();
  const navigateToTrial = () => {
    router.push("/signup/?utm_source=landin_mo&utm_medium=floating_btn");
    logEvent(analytics, "btn_click", {
      btn_name: "homepage_start_free_trial_click",
      btn_position: "floating",
    });
  };
  
  const toggleVisibility = () => {
    if (
      window.scrollY > 0 &&
      window.scrollY < document.body.scrollHeight - window.innerHeight
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return isVisible ? (
    <S.MainBtn onClick={navigateToTrial}> 지금 바로 시작하기 </S.MainBtn>
  ) : null;
}
