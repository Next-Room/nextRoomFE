"use client";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpValue } from "@/components/atoms/signup.atom";

import { useIsLoggedInValue } from "@/components/atoms/account.atom";
import Loader from "@/components/Loader/Loader";
import { usePostVerification } from "@/mutations/postVerification";
import { usePostSendMessage } from "@/mutations/postSendMessage";
import EmailAuthView from "./EmailAuthView";

interface FormValues {
  code: string;
}

function EmailAuth() {
  const isLoggedIn = useIsLoggedInValue();
  const signUpState = useSignUpValue();

  const {
    mutateAsync: postVerification,
    isLoading = false,
    isError = false,
    error,
  } = usePostVerification();

  const { mutateAsync: postSendMessage } = usePostSendMessage();

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
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      code: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "",
    },
  });

  const formValue = watch();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postVerification({ code: data.code, email: signUpState.email });
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
    helperText: errors?.code && errors?.code.message,
    error: Boolean(errors?.code) || isError,
    variant: "filled",
    label: "인증번호",
    placeholder: "인증번호",
    ...register("code", { required: "인증번호를 입력해 주세요." }),
    sx: {
      marginBottom: "18px",
      backgroundColor: "#FFFFFF10",
      ".MuiFilledInput-root": {
        height: "82px",
      },
    },
  };

  const buttonProps = {
    type: "submit",
    variant: "contained",
    disabled: !(formValue.code.length > 0),
  };

  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  const errorMessage = isError && error?.response?.data?.message;

  const MINUTES_IN_MS = 5 * 60 * 1000;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);
  const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (timeLeft <= 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  const reRequest = () => {
    postSendMessage({ email: signUpState.email });
    setTimeLeft(MINUTES_IN_MS);
  };

  const ReRequestButtonProps = {
    onClick: reRequest,
  };

  const LoginViewProps = {
    minutes,
    second,
    ImageProps,
    formProps,
    adminCodeProps,
    buttonProps,
    ReRequestButtonProps,
    isLoading,
    isMobile,
    errorMessage,
    signUpState,
  };

  if (isLoggedIn) {
    return <Loader />;
  }

  return <EmailAuthView {...LoginViewProps} />;
}

export default EmailAuth;
