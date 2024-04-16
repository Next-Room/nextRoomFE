"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import SnackBar from "@/components/SnackBar/SnackBar";
import { useSnackBarInfo } from "@/components/atoms/snackBar.atom";
import Link from "next/link";
import loaderJson from "../../public/lottie/signup.json";

import * as S from "./SignUpSuccess.styled";

function SignUpSuccess() {
  const [isMobile, setIsMobile] = useState(false);
  const [isWebView, setIsWebView] = useState(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [snackInfo, setSnackBarInfo] = useSnackBarInfo();
  const linkHref = isMobile
    ? "https://play.google.com/store/search?q=%EB%84%A5%EC%8A%A4%ED%8A%B8%EB%A3%B8&c=apps&hl=ko-KR"
    : "/login";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { userAgent } = window.navigator;
      const uagent = userAgent.toLocaleLowerCase();
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
      setIsMobile(mobileRegex.test(userAgent));
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
    }
  };

  return (
    <>
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
                <Link href={linkHref}>힌트 등록하기</Link>
              </S.SuccessButton>
            )}
          </>
        )}
      </S.Cont>
      {isWebView && (
        <SnackBar
          open={snackInfo.isOpen}
          ment="PC에서 힌트 등록을 진행해 주세요."
          vertical="top"
          horizontal="center"
          handleClose={() => setSnackBarInfo({ ...snackInfo, isOpen: false })}
        />
      )}
    </>
  );
}

export default SignUpSuccess;
