"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpValue } from "@/components/atoms/signup.atom";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import Loader from "@/components/Loader/Loader";
import { usePostSignUp } from "@/mutations/postSignUp";
import StoreInfoView from "./StoreInfoView";

interface FormValues {
  name: string;
  isNotOpened: boolean;
  reason: string;
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
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const formValue = watch();

  useEffect(() => {
    if (isChecked) {
      reset({
        name: "", // name 필드 초기화
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

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
    helperText: errors?.name && errors?.name.message,

    error: Boolean(errors?.name) || isError,
    variant: "filled",
    label: "매장명",
    placeholder: "매장명",
    disabled: isChecked,
    inputProps: { ...register("name") },
    style: { margin: "40px 0 6px" },
  };

  const reasonProps = {
    id: "filled-adminCode",
    type: "text",
    error: Boolean(errors?.name) || isError,
    variant: "filled",
    label: "방문사유",
    placeholder: "방문사유",
    inputProps: { ...register("reason") },
    style: { margin: "26px 0 20px" },
  };
  const checkBoxProps = {
    label: "매장명이 없습니다.",
    checked: isChecked,
    onChange: () => setIsChecked(!isChecked),
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
    disabled: !(
      formValue.name?.length > 0 ||
      (isChecked && formValue.reason?.length > 0)
    ),
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
