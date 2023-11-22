import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import * as S from "./Component.styled";

export default function Inputbar(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);
  // const router = useRouter();

  const navigateToTrial = () => {
    // router.push("/trial");
    window.open('/trial', '_blank');

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
    <S.MainBtn onClick={navigateToTrial}> 지금 무료로 시작하기 </S.MainBtn>
  ) : null;
}
