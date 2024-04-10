"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import {
  SIGN_UP_EMAIL,
  SIGN_UP_PLACEHOLDER,
  SIGN_UP_SUBTEXT,
} from "@/consts/components/signUp";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import Loader from "@/components/Loader/Loader";
import { usePostSendMessage } from "@/mutations/postSendMessage";
import * as S from "./SignUpView.styled";

interface FormValues {
  email: string;
}

function SignUpSuccess() {
  const isLoggedIn = useIsLoggedInValue();
  const {
    mutateAsync: postSendMessage,
    isLoading = false,
    isError = false,
    error,
  } = usePostSendMessage();

  const [isMobile, setIsMobile] = useState(false);
  // const [isWebView, setIsWebView] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { userAgent } = window.navigator;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
      setIsMobile(mobileRegex.test(userAgent));
      // setIsWebView()
    }
    // const uagent = userAgent.toLocaleLowerCase();
    // return !!(
    //   uagent.indexOf("afreeca webview") > -1 ||
    //   uagent.indexOf("afreeca up webview") > -1
    // );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
    },
  });

  useCheckSignIn();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postSendMessage(data);
  };
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    flexDirection: "column",
  };

  const adminCodeProps = {
    id: "filled-adminCode",
    type: "text",
    helperText: SIGN_UP_SUBTEXT,
    // errors?.email && errors?.email.message,
    error: Boolean(errors?.email) || isError,
    variant: "filled",
    label: SIGN_UP_EMAIL,
    placeholder: SIGN_UP_PLACEHOLDER,
    ...register("email", { required: "이메일을 입력해 주세요." }),
    sx: {
      marginBottom: "40px",
      backgroundColor: "#FFFFFF10",
    },
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  const errorMessage = isError && error?.response?.data?.message;

  const LoginViewProps = {
    ImageProps,
    formProps,
    adminCodeProps,
    buttonProps,
    isLoading,
    isMobile,
    errorMessage,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return (
    <>
      <S.Wrapper>
        {isLoading && <Loader />}
        {!isMobile && (
          <S.Header>
            <Image {...ImageProps} />
          </S.Header>
        )}
      </S.Wrapper>

      <S.Cont>
        <S.Title>가입 완료</S.Title>
      </S.Cont>
    </>
  );
}

export default SignUpSuccess;
