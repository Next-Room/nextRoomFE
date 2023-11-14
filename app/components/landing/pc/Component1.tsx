import React, { forwardRef } from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as S from "./Component.styled";

type Props = Record<string, any>;

const Component1 = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { buttonProps } = props;
  // const router = useRouter();
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

  const navigateToTrial = () => {
    // router.push("/trial");
    window.open("/trial", "_blank");
  };

  const imgProps = {
    src: "/images/landing/main_image.png",
    alt: "NEXT ROOM",
    width: 558,
    height: 412,
  };

  return (
    <div ref={ref}>
      <S.Wrapper1
        ref={inViewRef}
        variants={boxVariants}
        initial="hidden"
        animate={controls}
      >
        <div>
          <S.SubTitle1>
            합리적인 가격으로 <br />
            방탈출 운영을 편리하게
          </S.SubTitle1>
          <S.Title1>
            힌트폰 서비스 <br />
            넥스트룸
          </S.Title1>
          <S.Btn onClick={navigateToTrial} {...buttonProps}>
            지금 무료로 시작하기
          </S.Btn>
        </div>
        <Image {...imgProps} />
      </S.Wrapper1>
    </div>
  );
});

export default Component1;
