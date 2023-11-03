"use client";

import Component1 from "@/components/landing/Component1";
import Component2 from "@/components/landing/Component2";
import Component3 from "@/components/landing/Component3";
import Component4 from "@/components/landing/Component4";
import Component5 from "@/components/landing/Component5";
import Component6 from "@/components/landing/Component6";
import Component8 from "@/components/landing/Component8";
import Component9 from "@/components/landing/Component9";
import Image from "next/image";
import React from "react";
import * as S from "./LandingView.styled";

// import HomeView from "./HomeView";
type Props = Record<string, any>;

function LandingView(props: Props) {
  const { buttonProps, logoProps } = props;
  return (
    <div>
      <S.Wrapper>
        <S.LogoWrapper>
          <Image {...logoProps} />
        </S.LogoWrapper>
        <Component1 {...buttonProps} />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component8 />
        <Component9 />
        {/* <Button {...buttonProps}>지금 무료로 시작하기</Button> */}
      </S.Wrapper>
    </div>
  );
}

export default LandingView;
