"use client";

import React, { useState } from "react";
import { EMAIL } from "@/consts/components/trial";
import { SubmitHandler, useForm } from "react-hook-form";
import TrialView from "./TrialView";
// import { usePostLogin } from "@/mutations/postLogin";

interface FormValues {
  email: string;
}

function Trial() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // const {
  //   mutateAsync: postLogin,
  //   isLoading = false,
  //   isError = false,
  //   error,
  // } = usePostLogin();
  const onSubmit: SubmitHandler<FormValues> = () => {
    // postLogin(data);
    setIsComplete(true)
  };
  // const onSubmit: SubmitHandler<FormValues> = (data) => {};
  const formProps = {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    onSubmit: handleSubmit(onSubmit),
    flexDirection: "column",
  };

  const emailProps = {
    id: "filled-email",
    type: "email",
    variant: "filled",
    placeholder: EMAIL,
    ...register("email", { required: "이메일이나 연락처를 입력해 주세요." }),
    helperText: errors?.email && errors.email.message,
    // error: Boolean(errors?.email) || isError,
    sx: { backgroundColor: "#ffffff10" },
  };

  // const errorMessage = isError && error?.response?.data?.message;

  const buttonProps = {
    type: "submit",
    variant: "contained",
  };

  const TrialViewProps = {
    formProps,
    buttonProps,
    emailProps,
    // errorMessage,
    // isLoading,
    isComplete
  };

  return <TrialView {...TrialViewProps} />;
}

export default Trial;
