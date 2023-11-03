import React from "react";
import Image from "next/image";
import * as S from "./Component.styled";

export default function component9() {
  const imgProps = {
    src: "/images/landing/check_circle.svg",
    alt: "NEXT ROOM",
    width: 24,
    height: 24,
  };
  return (
    <S.Main9>
      <S.Title6>
        아직 망설여지나요?
        <br />
        체험 후 결정하세요.
      </S.Title6>
      <S.SubTitle>
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
      </S.SubTitle>
    </S.Main9>
  );
}
