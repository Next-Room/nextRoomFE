import React from "react";
import Image from "next/image";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

import { START } from "@/consts/components/signUp";

import Loader from "@/components/Loader/Loader";
import * as S from "./SignUpView.styled";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

function StoreInfoView(props: Props) {
  const {
    ImageProps,
    formProps,
    adminCodeProps,
    checkBoxProps,
    reasonProps,
    buttonProps,
    isLoading,
    isMobile,
    errorMessage,
  } = props;

  const { checked, onChange } = checkBoxProps;

  return (
    <>
      <S.Wrapper>
        {isLoading && <Loader />}
        {!isMobile && (
          <S.Header>
            <Image {...ImageProps} />
          </S.Header>
        )}
      </S.Wrapper>

      <S.Cont>
        <S.Title>
          마지막 입니다. <br />
          어느 매장에서 사용하시나요?
        </S.Title>

        <S.StyledBox {...formProps}>
          <TextField {...adminCodeProps} />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={onChange} />}
              {...checkBoxProps}
            />
          </FormGroup>
          {checked && <TextField {...reasonProps} />}
          <S.LoginButtonWrapper>
            <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
            <S.LoginButton {...buttonProps}>{START}</S.LoginButton>
          </S.LoginButtonWrapper>
        </S.StyledBox>
      </S.Cont>
    </>
  );
}

export default StoreInfoView;
