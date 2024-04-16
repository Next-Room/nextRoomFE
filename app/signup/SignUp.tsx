"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  SIGN_UP_EMAIL,
  SIGN_UP_PLACEHOLDER,
  SIGN_UP_SUBTEXT,
} from "@/consts/components/signUp";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import useCheckSignIn from "@/hooks/useCheckSignIn";
import Loader from "@/components/Loader/Loader";
import { usePostSendMessage } from "@/mutations/postSendMessage";
import SignUpView from "./SignUpView";

interface FormValues {
  email: string;
}

function SignUp() {
  const isLoggedIn = useIsLoggedInValue();
  const {
    mutateAsync: postSendMessage,
    isLoading = false,
    isError = false,
    error,
  } = usePostSendMessage();
  const [errorMsg, setErrorMsg] = useState(SIGN_UP_SUBTEXT);

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>();
  const formValue = watch();
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

  useEffect(() => {
    setTimeout(() => {
      setFocus("email");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    errors?.email && setErrorMsg(errors?.email.message);
  }, [isError]);

  const adminCodeProps = {
    id: "filled-adminCode",
    type: "text",
    helperText: errorMsg,
    // errors?.email && errors?.email.message,
    error: Boolean(errors?.email) || isError,
    variant: "filled",
    label: SIGN_UP_EMAIL,
    placeholder: SIGN_UP_PLACEHOLDER,
    inputProps: {
      ...register("email", { required: "이메일을 입력해 주세요." }),
    },
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
    disabled: !(formValue.email?.length > 0),
    sx: { marginTop: "20px" },
  };

  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  const errorMessage = isError && error?.response?.data?.message;

  const SignUpViewProps = {
    ImageProps,
    formProps,
    adminCodeProps,
    buttonProps,
    isLoading,
    errorMessage,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return <SignUpView {...SignUpViewProps} />;
}

export default SignUp;
