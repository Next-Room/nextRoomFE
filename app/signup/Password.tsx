"use client";

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  SIGN_UP_PASSWORD,
  SIGN_UP_PASSWORD_CONFIRM,
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
  const [signUpState, setSignUpState] = useSignUpState();
  const {
    register,
    setFocus,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const formValue = watch();

  useCheckSignIn();

  useEffect(() => {
    setTimeout(() => {
      setFocus("password");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    inputProps: {
      ...register("password", {
        required: "비밀번호를 입력해 주세요.",
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: "비밀번호 형식에 맞지 않습니다.",
        },
      }),
    },
    style: { marginBottom: "20px" },
  };

  const passwordConfirmProps = {
    id: "filled-adminCode",
    type: "password",
    helperText: errors?.passwordConfirm && "비밀번호가 일치하지 않습니다.", // 비밀번호 확인 에러 메시지
    error: Boolean(errors?.passwordConfirm), // 비밀번호 확인 에러 발생 시 에러 표시
    variant: "filled",
    label: SIGN_UP_PASSWORD_CONFIRM,
    placeholder: SIGN_UP_PASSWORD_CONFIRM,
    inputProps: {
      ...register("passwordConfirm", {
        required: "비밀번호를 다시 입력해 주세요.",
        validate: (value) =>
          value === formValue.password || "비밀번호가 일치하지 않습니다.", // 패스워드와 비밀번호 확인 값이 같은지 확인
      }),
    },
    style: { marginBottom: "20px" },
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
    disabled: !(
      formValue.password?.length > 0 && formValue.passwordConfirm?.length > 0
    ),
  };

  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  const PasswordViewProps = {
    ImageProps,
    formProps,
    passwordProps,
    passwordConfirmProps,
    buttonProps,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return <PasswordView {...PasswordViewProps} />;
}

export default Password;
