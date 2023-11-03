import React from "react";
import Image from "next/image";
import * as S from "./Component.styled";

type Props = Record<string, any>;
export default function Component1(props: Props) {
  const { buttonProps } = props;
  const imgProps = {
    src: "/images/landing/main_image.png",
    alt: "NEXT ROOM",
    width: 558,
    height: 412,
  };

  return (
    <S.Wrapper1>
      <div>
        <S.SubTitle>
          합리적인 가격으로 <br />
          방탈출 운영을 편리하게
        </S.SubTitle>
        <S.SubTitle2>
          힌트폰 서비스 <br />
          넥스트룸
        </S.SubTitle2>
        <S.Btn {...buttonProps}>지금 무료로 시작하기</S.Btn>
      </div>
      <Image {...imgProps} />
    </S.Wrapper1>
  );
}
