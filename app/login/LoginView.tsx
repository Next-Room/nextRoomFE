import React from "react";
import Image from "next/image";

import { LOGIN } from "@/consts/components/login";
import Loader from "@/components/Loader/Loader";
import { NewTextField } from "@/signup/NewTextField.component";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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
          관리자 계정이 필요하신가요?
          <button
          type="button"
            onClick={() => {
              router.push("/signup");
            }}
          >
            회원가입
          </button>
        </S.Contect>
      </S.StyledBox>
    </S.Wrapper>
  );
}

export default LoginView;
