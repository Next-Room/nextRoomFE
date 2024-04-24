"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpState } from "@/components/atoms/signup.atom";

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
  const [signUpState, setSignUpState] = useSignUpState();

  const {
    mutateAsync: postSignUp,
    isLoading = false,
    isError = false,
    error,
  } = usePostSignUp();
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const formValue = watch();

  useEffect(() => {
    setTimeout(() => {
      setFocus("name");
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isChecked) {
      reset({
        name: "", // name 필드 초기화
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  const browserPreventEvent = () => {
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, "", location.href);
    setSignUpState({ ...signUpState, level: 3 });
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postSignUp({
      email: signUpState.email,
      password: signUpState.password,
      name: isChecked ? data.reason : data.name,
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

  const StoreInfoViewProps = {
    ImageProps,
    formProps,
    adminCodeProps,
    checkBoxProps,
    reasonProps,
    buttonProps,
    isLoading,
    errorMessage,
    signUpState,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return <StoreInfoView {...StoreInfoViewProps} />;
}

export default StoreInfo;
