import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/createThemeType";
import React from "react";
import "./textField.modules.sass";
import { useTextField } from "./useTextField";

export default function ThemeTextField({
  id,
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
  } = useTextField({ id, content, checkError, validReg });

  if (errorText) {
    return (
      <div>
        <button className="theme-info error" type="button">
          <div className="theme-info-title error">{title}</div>
          <input
            ref={inputRef}
            className="theme-info-input error"
            type={inputType}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </button>
        <div className="theme-info-text error">{errorText}</div>
      </div>
    );
  }
  if (isFocus) {
    return (
      <div>
        <button className="theme-info focus" type="button">
          <div className="theme-info-title focus">{title}</div>
          <input
            ref={inputRef}
            className="theme-info-input"
            type={inputType}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </button>
        {infoText && <div className="theme-info-text">{infoText}</div>}
      </div>
    );
  }
  if (inputValue) {
    return (
      <div>
        <button
          className="theme-info filled"
          type="button"
          onClick={handleInfoClick}
        >
          <div className="theme-info-title filled">{title}</div>
          <div className="theme-info-input filled">{inputValue}</div>
        </button>
        {infoText && <div className="theme-info-text filled">{infoText}</div>}
      </div>
    );
  }
  return (
    <div>
      <button className="theme-info" type="button" onClick={handleInfoClick}>
        <div className="theme-info-title">{title}</div>
      </button>
      {infoText && <div className="theme-info-text">{infoText}</div>}
    </div>
  );
}
