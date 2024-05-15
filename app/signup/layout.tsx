"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as S from "./SignUpView.styled";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isWebView = /APP_NEXTROOM_ANDROID/.test(navigator.userAgent); // 웹뷰에서 실행 중인지 여부 확인
  const router = useRouter();
  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (isWebView) {
    return (
      <>
        <S.Wrapper />
        {children}
      </>
    );
  }
  return (
    <>
      <S.Wrapper>
        <S.Header
          onClick={() => {
            router.back();
            window.close();
          }}
        >
          <Image {...ImageProps} />
        </S.Header>
      </S.Wrapper>
      {children}
    </>
  );
}
