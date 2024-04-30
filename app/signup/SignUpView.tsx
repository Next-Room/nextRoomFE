import React from "react";
import { SIGN_UP } from "@/consts/components/signUp";
import Link from "next/link";
import { getAnalytics, logEvent } from "firebase/analytics";
import { NewTextField } from "./NewTextField.component";
import "@/apis/firebase";
import * as S from "./SignUpView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function SignUpView(props: Props) {
  const analytics = getAnalytics();
  logEvent(analytics, "screen_view", {
    firebase_screen: "sign_up_1",
    firebase_screen_class: "sign_up_1",
  });

  const { formProps, adminCodeProps, buttonProps, errorMessage } =
    props;

  return (
    <S.Cont>
      <S.Title>
        방탈출 힌트폰 서비스 <br />
        넥스트룸을 무료로 사용해 보세요.
      </S.Title>
      <S.SubTitle>
        회원가입이 필요한 서비스이며,
        <Link
          href="https://held-notebook-420.notion.site/d7bea4318d754b61999e9cb6179a2f70?pvs=4"
          target="_blank"
        >
          개인정보처리방침
        </Link>
        이 적용됩니다.
      </S.SubTitle>
      <form {...formProps}>
        <NewTextField {...adminCodeProps} />
        <S.SignUpButton {...buttonProps}>{SIGN_UP}</S.SignUpButton>
      </form>
      <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
    </S.Cont>
  );
}

export default SignUpView;
