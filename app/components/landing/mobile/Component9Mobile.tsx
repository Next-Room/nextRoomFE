import React, { forwardRef } from "react";
import Image from "next/image";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import * as S from "./ComponentMobile.styled";

type Props = Record<string, any>;

const Component9Mobile = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { buttonProps } = props;
  const router = useRouter();

  const navigateToTrial = () => {
    router.push("/trial");
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
            모든 기능 체험 가능
          </S.ListItem>
          <S.ListItem>
            <Image {...imgProps} />
            찾아가는 설명 안내(서울, 인천, 경기)
          </S.ListItem>
        </S.ListCont>
        <S.Btn onClick={navigateToTrial}  {...buttonProps}>지금 무료로 시작하기</S.Btn>
      </S.Main9>
    </S.Wrapper9>
  );
});

export default Component9Mobile;
