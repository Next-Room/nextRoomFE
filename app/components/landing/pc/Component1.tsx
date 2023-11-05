import React, { forwardRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as S from "./Component.styled";

type Props = Record<string, any>;

const Component1 = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { buttonProps } = props;
  const router = useRouter();

  const navigateToTrial = () => {
    router.push("/trial");
  };

  const imgProps = {
    src: "/images/landing/main_image.png",
    alt: "NEXT ROOM",
    width: 558,
    height: 412,
  };


  
  return (
    <S.Wrapper1 ref={ref}>
      <div>
        <S.SubTitle1>
          합리적인 가격으로 <br />
          방탈출 운영을 편리하게
        </S.SubTitle1>
        <S.Title1>
          힌트폰 서비스 <br />
          넥스트룸
        </S.Title1>
        <S.Btn onClick={navigateToTrial} {...buttonProps}>지금 무료로 시작하기</S.Btn>
      </div>
      <Image {...imgProps} />
    </S.Wrapper1>
  );
});

export default Component1;
