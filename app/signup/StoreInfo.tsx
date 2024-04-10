"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  SIGN_UP_EMAIL,
  SIGN_UP_PLACEHOLDER,
  SIGN_UP_SUBTEXT,
} from "@/consts/components/signUp";
import { useSignUpValue } from "@/components/atoms/signup.atom";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import Loader from "@/components/Loader/Loader";
import { usePostVerification } from "@/mutations/postVerification";
import StoreInfoView from "./StoreInfoView";
import { usePostSignUp } from "@/mutations/postSignUp";

interface FormValues {
  name: string;
  isNotOpened: boolean;
}

function StoreInfo() {
  const isLoggedIn = useIsLoggedInValue();
  const signUpState = useSignUpValue();

  const {
    mutateAsync: postSignUp,
    isLoading = false,
    isError = false,
    error,
  } = usePostSignUp();
  const [isMobile, setIsMobile] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const name = isChecked ? "오픈 예정 매장" : data.name;
    postSignUp({
      email: signUpState.email,
      password: signUpState.password,
      name,
      isNotOpened: isChecked,
    });
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
    error: Boolean(errors?.name) || isError,
    variant: "filled",
    label: SIGN_UP_EMAIL,
    placeholder: SIGN_UP_PLACEHOLDER,
    ...register("name", { required: "인증번호를 입력해 주세요." }),
    sx: {
      marginBottom: "40px",
      backgroundColor: "#FFFFFF10",
    },
  };

  const reasonProps = {
    id: "filled-adminCode",
    type: "text",
    helperText: SIGN_UP_SUBTEXT,
    // errors?.email && errors?.email.message,
    error: Boolean(errors?.name) || isError,
    variant: "filled",
    label: SIGN_UP_EMAIL,
    placeholder: SIGN_UP_PLACEHOLDER,
    ...register("name", { required: "인증번호를 입력해 주세요." }),
    sx: {
      marginBottom: "40px",
      backgroundColor: "#FFFFFF10",
    },
  };
  const checkBoxProps = {
    label: "contained",
    checked: isChecked,
    onChange: () => setIsChecked(!isChecked),
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
    checkBoxProps,
    reasonProps,
    buttonProps,
    isLoading,
    isMobile,
    errorMessage,
    signUpState,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return <StoreInfoView {...LoginViewProps} />;
}

export default StoreInfo;
