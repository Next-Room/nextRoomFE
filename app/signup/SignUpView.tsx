import React from "react";
import Image from "next/image";
import { SIGN_UP } from "@/consts/components/signUp";

import Loader from "@/components/Loader/Loader";
import * as S from "./SignUpView.styled";
import { NewTextField } from "./NewTextField.component";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function SignUpView(props: Props) {
  const {
    ImageProps,
    formProps,
    adminCodeProps,
    buttonProps,
    isLoading,
    errorMessage,
  } = props;

  return (
    <>
      <S.Wrapper>
        {isLoading && <Loader />}
        <S.Header>
          <Image {...ImageProps} />
        </S.Header>
      </S.Wrapper>

      <S.Cont>
        <S.Title>
          방탈출 힌트폰 서비스 <br />
          넥스트룸을 무료로 사용해 보세요.
        </S.Title>
        <S.SubTitle>
          회원가입이 필요한 서비스이며, 개인정보처리방침이 적용됩니다.
        </S.SubTitle>
        <form {...formProps}>
          <NewTextField {...adminCodeProps} />
          <S.SignUpButton {...buttonProps}>{SIGN_UP}</S.SignUpButton>
        </form>
        <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
      </S.Cont>
    </>
  );
}

export default SignUpView;
