import React from "react";
import Image from "next/image";

import { LOGIN } from "@/consts/components/login";
import Loader from "@/components/Loader/Loader";
import { NewTextField } from "@/signup/NewTextField.component";
import { useRouter } from "next/navigation";
import { setCookie } from "@/utils/cookie";
import Link from "next/link";
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
      <Link href="/">
        <Image {...logoProps} />
      </Link>

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
              setCookie("/login");
              router.push("/signup");
            }}
          >
            회원가입
          </button>
        </S.Contect>
        <S.Contect>
          사용 방법이 궁금하신가요?{" "}
          <button
            type="button"
            onClick={() => {
              window.open(
                "https://held-notebook-420.notion.site/134ed57b9c574733b31feab0ea5c36a5?pvs=4",
                "_blank"
              );
            }}
          >
            사용자 가이드 보기
          </button>
        </S.Contect>
      </S.StyledBox>
    </S.Wrapper>
  );
}

export default LoginView;
