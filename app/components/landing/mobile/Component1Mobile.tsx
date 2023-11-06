import React, { forwardRef } from "react";
import Image from "next/image";
import * as S from "./ComponentMobile.styled";

type Props = Record<string, any>;

const Component1Mobile = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { buttonProps } = props;
  const imgProps = {
    src: "/images/landing/main_image.png",
    alt: "NEXT ROOM",
    width: 360,
    height: 266,
  };

  return (
    <S.Wrapper1 ref={ref}>
      <div>
        <S.SubTitle1>합리적인 가격으로 방탈출 운영을 편리하게</S.SubTitle1>
        <S.Title1>
          힌트폰 서비스 <br />
          넥스트룸
        </S.Title1>
        <Image {...imgProps} />
      </div>
      <S.Btn {...buttonProps}>지금 무료로 시작하기</S.Btn>
    </S.Wrapper1>
  );
});

export default Component1Mobile;
