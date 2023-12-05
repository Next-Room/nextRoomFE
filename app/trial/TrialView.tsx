"use client";

import "@/style/reset.css";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, TextField } from "@mui/material";

import {
  TRIAL_TITLE,
  CONTECT,
  EMAIL,
  SUBSCRIPTION,
  COMPLETE,
  CONTACT_CONFIRMATION,
  RETURN_HOME,
} from "@/consts/components/trial";
import { getAnalytics, logEvent } from "firebase/analytics";
import "@/apis/firebase";

import * as S from "./TrialView.styled";

type Props = Record<string, any>;
function TrialView(props: Props) {
  const analytics = getAnalytics();

  const { formProps, emailProps, buttonProps, isComplete } = props;

  const navigateToLanding = () => {
    window.close();

    logEvent(analytics, "btn_click", {
      btn_name: "homepage_apply_free_trial",
    });
  };

  const titleText = isComplete ? COMPLETE : TRIAL_TITLE;
  const contactText = isComplete ? CONTACT_CONFIRMATION : CONTECT;
  const mainActionButton = isComplete ? (
    <S.Btn onClick={navigateToLanding} {...buttonProps}>
      {RETURN_HOME}
    </S.Btn>
  ) : (
    <S.TextCont>
      <TextField placeholder={EMAIL} {...emailProps} />
      <S.Btn {...buttonProps}>{SUBSCRIPTION}</S.Btn>
    </S.TextCont>
  );

  return (
    <S.Wrapper {...formProps}>
      <S.BackWrapper>
        <IconButton
          size="small"
          color="inherit"
          id="basic-button"
          aria-label="go back"
          onClick={navigateToLanding}
        >
          <ArrowBackIcon />
        </IconButton>
      </S.BackWrapper>
      <S.Cont>
        <pre>
          <S.Title>{titleText}</S.Title>
        </pre>
        <S.Contect>{contactText}</S.Contect>
        {mainActionButton}
      </S.Cont>
    </S.Wrapper>
  );
}

export default TrialView;
