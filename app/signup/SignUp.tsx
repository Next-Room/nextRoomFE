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

  const [isMobile, setIsMobile] = useState(false);
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
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
    },
  });

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
      backgroundColor: "#FFFFFF10",
      ".MuiFilledInput-root": {
        height: "82px",
      },
    },
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
    disabled: !(formValue.email.length > 0),
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

  return <SignUpView {...LoginViewProps} />;
}

export default SignUp;
