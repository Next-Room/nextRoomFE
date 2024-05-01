import React, { forwardRef } from "react";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getAnalytics, logEvent } from "firebase/analytics";
import "@/apis/firebase";

import * as S from "./Component.styled";

type Props = Record<string, any>;

const Component9 = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { buttonProps } = props;
  const analytics = getAnalytics();
  logEvent(analytics, "screen_view", {
    firebase_screen: "homepage_bottom",
    firebase_screen_class: "homepage_bottom",
  });

  const navigateToTrial = () => {
    window.open("/signup/?utm_source=landing_pc&utm_medium=bottom_btn", "_blank");
    logEvent(analytics, "btn_click", {
      btn_name: "homepage_start_free_trial_click",
      btn_position: "bottom",
    });
  };

  const imgProps = {
    src: "/images/landing/check_circle.svg",
    alt: "NEXT ROOM",
    width: 24,
    height: 24,
  };
  const controls = useAnimation();
  const [inViewRef, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: {
      y: 100, // 시작 위치를 아래로 조정합니다.
      opacity: 0,
    },
    visible: {
      y: 0, // 최종 위치를 원래 위치로 설정합니다.
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <S.Wrapper9 ref={ref}>
      <S.Main9
        ref={inViewRef}
        variants={boxVariants}
        initial="hidden"
        animate={controls}
      >
        <S.Title8>
          아직 망설여지나요?
          <br />
          체험 후 결정하세요.
        </S.Title8>
        <S.ListCont>
          <S.ListItem>
            <Image {...imgProps} />
            개업 전 테스트 가능
          </S.ListItem>
          <S.ListItem>
            <Image {...imgProps} />
            모든 기능 사용 가능
          </S.ListItem>
          <S.ListItem>
            <Image {...imgProps} />
            찾아가는 설명 안내(서울, 인천, 경기)
          </S.ListItem>
        </S.ListCont>
        <S.Btn onClick={navigateToTrial} {...buttonProps}>
          지금 바로 시작하기
        </S.Btn>
      </S.Main9>
    </S.Wrapper9>
  );
});

export default Component9;
