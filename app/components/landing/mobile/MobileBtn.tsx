import { useEffect, useState } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import "@/apis/firebase";
import { useRouter } from "next/navigation";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import { setCookie } from "@/utils/cookie";
import * as S from "./ComponentMobile.styled";

export default function Inputbar(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
  const analytics = getAnalytics();
  const router = useRouter();
  const isSignIn = useCheckSignIn();

  const navigateToTrial = () => {
    const url = isSignIn
      ? "/admin"
      : "/signup/?utm_source=landin_mo&utm_medium=floating_btn";
    setCookie("/");
    router.push(url);
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
