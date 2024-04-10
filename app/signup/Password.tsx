"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  SIGN_UP_PASSWORD,
  SIGN_UP_PASSWORD_CONFIRM,
  SIGN_UP_SUBTEXT,
} from "@/consts/components/signUp";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import Loader from "@/components/Loader/Loader";
import { useSignUpState } from "@/components/atoms/signup.atom";
import PasswordView from "./PasswordView";

interface FormValues {
  password: string;
  passwordConfirm: string;
}

function Password() {
  const isLoggedIn = useIsLoggedInValue();
  const [isMobile, setIsMobile] = useState(false);
  const [signUpState, setSignUpState] = useSignUpState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { userAgent } = window.navigator;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i;
      setIsMobile(mobileRegex.test(userAgent));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  useCheckSignIn();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSignUpState({ ...signUpState, password: data.password, level: 4 });
  };
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    flexDirection: "column",
  };

  const passwordProps = {
    id: "filled-adminCode",
    type: "password",
    helperText: errors?.password && errors?.password.message,
    error: Boolean(errors?.password),
    variant: "filled",
    label: SIGN_UP_PASSWORD,
    placeholder: SIGN_UP_PASSWORD,
    ...register("password", {
      required: "비밀번호를 입력해 주세요.",
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "비밀번호 형식에 맞지 않습니다.",
      },
    }),
    sx: {
      marginBottom: "40px",
      backgroundColor: "#FFFFFF10",
    },
  };

  const passwordConfirmProps = {
    id: "filled-adminCode",
    type: "password",
    helperText: SIGN_UP_SUBTEXT,
    // errors?.email && errors?.email.message,
    error: Boolean(errors?.password),
    variant: "filled",
    label: SIGN_UP_PASSWORD_CONFIRM,
    placeholder: SIGN_UP_PASSWORD_CONFIRM,
    ...register("passwordConfirm", { required: "이메일을 입력해 주세요." }),
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


  const LoginViewProps = {
    ImageProps,
    formProps,
    passwordProps,
    passwordConfirmProps,
    buttonProps,
    isMobile,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return <PasswordView {...LoginViewProps} />;
}

export default Password;
