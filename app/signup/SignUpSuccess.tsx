"use client";

import React, { useEffect} from "react";
import Image from "next/image";

import * as S from "./SignUpView.styled";

function SignUpSuccess() {
  // const [isMobile, setIsMobile] = useState(false);
  // const [isWebView, setIsWebView] = useState(false);
  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const { userAgent } = window.navigator;
    //   const mobileRegex =
    //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
    //   setIsMobile(mobileRegex.test(userAgent));
    //   // setIsWebView()
    // }
    // const uagent = userAgent.toLocaleLowerCase();
    // return !!(
    //   uagent.indexOf("afreeca webview") > -1 ||
    //   uagent.indexOf("afreeca up webview") > -1
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <Image {...ImageProps} />
        </S.Header>
      </S.Wrapper>

      <S.Cont>
        <S.Title>가입 완료</S.Title>
      </S.Cont>
    </>
  );
}

export default SignUpSuccess;
