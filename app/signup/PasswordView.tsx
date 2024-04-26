import React from "react";
import { NEXT } from "@/consts/components/signUp";
import { getAnalytics, logEvent } from "firebase/analytics";
import { NewTextField } from "./NewTextField.component";
import "@/apis/firebase";
import * as S from "./SignUpView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function PasswordView(props: Props) {
  const { formProps, passwordProps, passwordConfirmProps, buttonProps } = props;
  const analytics = getAnalytics();
  logEvent(analytics, "screen_view", {
    firebase_screen: "sign_up_1",
    firebase_screen_class: "sign_up_1",
  });

  return (
    <S.Cont>
      <S.Title>비밀번호를 입력해 주세요.</S.Title>
      <S.SubTitle>
        대문자, 소문자, 숫자, 기호를 조합하여 8자리 이상의 안전한 비밀번호를
        만드세요
      </S.SubTitle>
      <form {...formProps}>
        <S.Grid>
          <NewTextField {...passwordProps} />
        </S.Grid>
        <S.Grid>
          <NewTextField {...passwordConfirmProps} />
        </S.Grid>
        <S.SignUpButton {...buttonProps}>{NEXT}</S.SignUpButton>
      </form>
    </S.Cont>
  );
}

export default PasswordView;
