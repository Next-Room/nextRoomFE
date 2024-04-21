"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import SnackBar from "@/components/SnackBar/SnackBar";
import { useSnackBarInfo } from "@/components/atoms/snackBar.atom";
import Link from "next/link";
import Image from "next/image";
import { getAnalytics, logEvent } from "firebase/analytics";
import loaderJson from "../../public/lottie/signup.json";
import "@/apis/firebase";
import * as S from "./SignUpSuccess.styled";

function SignUpSuccess() {
  const [isWebView, setIsWebView] = useState(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [snackInfo, setSnackBarInfo] = useSnackBarInfo();

  const analytics = getAnalytics();
  logEvent(analytics, "screen_view", {
    firebase_screen: "sign_up_success",
    firebase_screen_class: "sign_up_success",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { userAgent } = window.navigator;
      const uagent = userAgent.toLocaleLowerCase();
      setIsWebView(!!(uagent.indexOf("APP_NEXTROOM_ANDROID") > -1));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, []);

  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setSnackBarInfo({ ...snackInfo, isOpen: false });
      }, 2000);
    }
  }, [setSnackBarInfo, isFinished, snackInfo]);

  const handleWebViewButton = () => {
    if (typeof window !== "undefined") {
      window.close();
      // 여기에 클라이언트-사이드 로직 추가
    }
  };

  const rightImageProps = {
    src: "/images/svg/icon_right.svg",
    alt: "allow",
    width: 24,
    height: 24,
  };

  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "allow",
    width: 28,
    height: 28,
  };
  return (
    <S.Wrapper>
      <S.Header href="/">
        <Image {...ImageProps} />
      </S.Header>

      <S.LottieWrapper>
        <Lottie
          loop={false}
          animationData={loaderJson}
          play
          style={{ width: 112, height: 112 }}
          onComplete={() => {
            setIsFinished(true);
            setSnackBarInfo({ ...snackInfo, isOpen: true });
          }}
        />
      </S.LottieWrapper>

      <S.Cont>
        {isFinished && (
          <>
            <S.Title>이제 힌트를 등록할 수 있습니다</S.Title>
            <S.SubTitle>힌트 등록은 PC에서만 진행할 수 있습니다</S.SubTitle>
            {isWebView ? (
              <S.SuccessButton onClick={handleWebViewButton}>
                메인으로 돌아가기
              </S.SuccessButton>
            ) : (
              <S.SuccessButton>
                <Link href="/login">힌트 등록하기</Link>
              </S.SuccessButton>
            )}
          </>
        )}
      </S.Cont>
      {isFinished && (
        <S.PlayBtn href="https://play.google.com/store/search?q=%EB%84%A5%EC%8A%A4%ED%8A%B8%EB%A3%B8&c=apps&hl=ko-KR">
          <div>
            <S.PlayTitle>Google Play 스토어에서</S.PlayTitle>
            <S.SubTitle>힌트폰 앱 먼저 설치해보기</S.SubTitle>
          </div>
          <Image {...rightImageProps} />
        </S.PlayBtn>
      )}
      {isWebView && (
        <SnackBar
          open={snackInfo.isOpen}
          ment="PC에서 힌트 등록을 진행해 주세요."
          vertical="top"
          horizontal="center"
          handleClose={() => setSnackBarInfo({ ...snackInfo, isOpen: false })}
        />
      )}
    </S.Wrapper>
  );
}

export default SignUpSuccess;
