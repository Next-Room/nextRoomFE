import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/(types)/createThemeType";
import React from "react";
import "../(style)/textField.modules.sass";
import { useTextField } from "../(hooks)/useTextField";
import ThemeErrorTextField from "./ThemeErrorTextField";
import ThemeFocusingTextField from "./ThemeFocusingTextField";
import ThemeFilledTextField from "./ThemeFilledTextField";
import ThemeInfoTextField from "./ThemeInfoTextField";

export default function ThemeTextField({
  title,
  content,
  infoText,
  inputType,
  inputPlaceholder,
  checkError,
  validReg,
}: ThemeInfoTextFieldType) {
  const {
    inputValue,
    isFocus,
    errorText,
    inputRef,
    handleInputChange,
    handleInfoClick,
    handleInputBlur,
  } = useTextField({ content, checkError, validReg });

  const errorProps = {
    title,
    inputType,
    inputPlaceholder,
    inputValue,
    errorText,
    inputRef,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
  };
  const focusingProps = {
    title,
    infoText,
    inputType,
    inputPlaceholder,
    inputValue,
    inputRef,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
  };
  const filledProps = { title, infoText, inputValue, onClick: handleInfoClick };
  const infoProps = {
    title,
    content,
    infoText,
    onClick: handleInfoClick,
  };

  if (errorText) {
    return <ThemeErrorTextField {...errorProps} />;
  }
  if (isFocus) {
    return <ThemeFocusingTextField {...focusingProps} />;
  }
  if (inputValue) {
    return <ThemeFilledTextField {...filledProps} />;
  }
  return <ThemeInfoTextField {...infoProps} />;
}
