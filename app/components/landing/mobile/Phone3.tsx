import React, { forwardRef, useEffect } from "react";
import { useAnimation } from "framer-motion";
import Image from "next/image";
import "@/apis/firebase";

import * as S from "@/components/landing/mobile/ComponentMobile.styled";
import useAnalytics from "@/hooks/useAnalytics";

const Phone3 = forwardRef<HTMLDivElement>((props, ref) => {
  const { logEvent } = useAnalytics();
  logEvent("screen_view", {
    firebase_screen: "homepage_function_3",
    firebase_screen_class: "homepage_function_3",
  });
  const imgProps = {
    src: "/images/landing/hint_phone3.png",
    alt: "NEXT ROOM",
    width: 180,
    height: 350,
  };
  const controls = useAnimation();

  useEffect(() => {
    const updateOpacity = () => {
      if (typeof ref !== "function" && ref?.current) {
        const viewportHeight = window.innerHeight;

        const start = ref.current.offsetTop + viewportHeight * 0.7;
        const end = ref.current.offsetTop + viewportHeight * 1.4;

        const { scrollY } = window;

        if (scrollY > start && scrollY < end) {
          const progress = (scrollY - start) / (end - start);
          const opacity = 1 - progress;
          controls.start({ opacity: Math.max(0, opacity) });
        } else if (scrollY <= start) {
          controls.start({ opacity: 1 });
        } else if (scrollY >= end) {
          controls.start({ opacity: 0 });
        }
      }
    };

    window.addEventListener("scroll", updateOpacity);
    updateOpacity(); // Call once to set initial value

    return () => {
      window.removeEventListener("scroll", updateOpacity);
    };
  }, [controls, ref]);

  const phoneVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };
  return (
    <S.ImgCont
      ref={ref}
      variants={phoneVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Image {...imgProps} />
      <S.Title7>
        쉽고 빠른 힌트코드 입력
        <S.SubTitle7>
          1분 1초가 급한 방탈출 과정에서 키패드를 열고 닫는 시간을 아꼈습니다.
        </S.SubTitle7>
      </S.Title7>
    </S.ImgCont>
  );
});

export default Phone3;
