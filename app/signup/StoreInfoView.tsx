import React from "react";
import Image from "next/image";
import { Checkbox, FormGroup } from "@mui/material";

import { START } from "@/consts/components/signUp";

import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import * as S from "./SignUpView.styled";
import { NewTextField } from "./NewTextField.component";

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
    errorMessage,
  } = props;

  const { checked, onChange } = checkBoxProps;
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        {isLoading && <Loader />}

        <S.Header
          onClick={() => {
            router.back();
            window.close();
          }}
        >
          <Image {...ImageProps} />
        </S.Header>
      </S.Wrapper>

      <S.Cont>
        <S.Title>
          마지막 입니다. <br />
          어느 매장에서 사용하시나요?
        </S.Title>

        <form {...formProps}>
          <NewTextField {...adminCodeProps} />
          <FormGroup>
            <S.Label
              control={<Checkbox checked={checked} onChange={onChange} />}
              {...checkBoxProps}
            />
          </FormGroup>
          {checked && <NewTextField {...reasonProps} />}
          <S.SignUpButton {...buttonProps}>{START}</S.SignUpButton>
          <S.ServerErrorMessage>{errorMessage}</S.ServerErrorMessage>
        </form>
      </S.Cont>
    </>
  );
}

export default StoreInfoView;
