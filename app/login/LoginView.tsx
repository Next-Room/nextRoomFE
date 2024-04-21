import React from "react";
import Image from "next/image";

import { LOGIN} from "@/consts/components/login";

import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import { NewTextField } from "@/signup/NewTextField.component";
import * as S from "./LoginView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function LoginView(props: Props) {
  const {
    formProps,
    adminCodeProps,
    passwordProps,
    buttonProps,
    logoProps,
    isLoading,
    errorMessage,
  } = props;

  return (
    <S.Wrapper>
      {isLoading && <Loader />}
      <Image {...logoProps} />

      <S.StyledBox {...formProps}>
        <NewTextField {...adminCodeProps} />
        <NewTextField {...passwordProps} />
        <S.LoginButtonWrapper>
          <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
          <S.LoginButton {...buttonProps}>{LOGIN}</S.LoginButton>
        </S.LoginButtonWrapper>
        <S.Contect>
          관리자 계정이 필요하신가요? <Link href="/signup">회원가입</Link>
        </S.Contect>
      </S.StyledBox>
    </S.Wrapper>
  );
}

export default LoginView;
