"use client";

import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  SIGN_UP_PASSWORD,
  SIGN_UP_PASSWORD_CONFIRM,
} from "@/consts/components/signUp";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
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

  const browserPreventEvent = () => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, "", location.href);
    setSignUpState({ ...signUpState, level: 2 });
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", () => {
      browserPreventEvent();
    });
    return () => {
      window.removeEventListener("popstate", () => {
        browserPreventEvent();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFocus("password");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // 다음 인풋으로 포커스 이동
      setFocus("passwordConfirm");
    }
  };

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
          message: "비밀번호 조건이 맞지 않습니다.",
        },
      }),
    },
    onKeyDown: handleKeyDown,
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
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
    disabled: !(
      formValue.password?.length > 0 && formValue.passwordConfirm?.length > 0
    ),
  };

  const PasswordViewProps = {
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
