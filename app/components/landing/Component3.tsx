import React from "react";
import Image from "next/image";
import * as S from "./Component.styled";

export default function component3() {
  const imgProps = {
    src: "/images/landing/landing.png",
    alt: "NEXT ROOM",
    width: 786,
    height: 500,
  };

  return (
    <S.Main4>
      <S.SubTitle3>
        쉽고 빠르게 <br />
        힌트를 등록하고 수정하세요.
      </S.SubTitle3>
      <Image {...imgProps}/>
    </S.Main4>
  );
}
