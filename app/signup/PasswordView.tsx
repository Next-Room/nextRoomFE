import React from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import { NEXT } from "@/consts/components/signUp";

import * as S from "./SignUpView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function PasswordView(props: Props) {
  const {
    ImageProps,
    formProps,
    passwordProps,
    passwordConfirmProps,
    buttonProps,
    isMobile,
  } = props;

  return (
    <>
      <S.Wrapper>
        {!isMobile && (
          <S.Header>
            <Image {...ImageProps} />
          </S.Header>
        )}
      </S.Wrapper>

      <S.Cont>
        <S.Title>비밀번호를 입력해 주세요.</S.Title>
        <S.SubTitle>
          대문자, 소문자, 숫자, 기호를 조합하여 8자리 이상의 안전한 비밀번호를
          만드세요
        </S.SubTitle>
        <S.StyledBox {...formProps}>
          <TextField {...passwordProps} />
          <TextField {...passwordConfirmProps} />

          <S.LoginButtonWrapper>
            <S.LoginButton {...buttonProps}>{NEXT}</S.LoginButton>
          </S.LoginButtonWrapper>
        </S.StyledBox>
      </S.Cont>
    </>
  );
}

export default PasswordView;
