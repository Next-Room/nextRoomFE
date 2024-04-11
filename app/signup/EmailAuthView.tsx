import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";

import { SIGN_UP } from "@/consts/components/signUp";

import Loader from "@/components/Loader/Loader";
import * as S from "./SignUpView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function EmailAuthView(props: Props) {
  const {
    minutes,
    second,
    ImageProps,
    formProps,
    signUpState,
    adminCodeProps,
    buttonProps,
    ReRequestButtonProps,
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
          {signUpState.email}으로
          <br />
          전송된 인증번호를 입력해 주세요.
        </S.Title>
        <S.SubTitle>
          남은 시간 {minutes}:{second}
        </S.SubTitle>

        <S.StyledBox {...formProps}>
          <TextField {...adminCodeProps} />
          <S.ReRequest>
            <p>이메일이 오지 않았다면? </p>
            <button type="button" {...ReRequestButtonProps}>
              재인증 요청
            </button>
          </S.ReRequest>
          <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
          <S.LoginButton {...buttonProps}>{SIGN_UP}</S.LoginButton>
        </S.StyledBox>
      </S.Cont>
    </>
  );
}

export default EmailAuthView;
