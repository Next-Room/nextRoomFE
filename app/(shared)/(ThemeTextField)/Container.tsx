import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/createThemeType";
import React from "react";
import "./textField.modules.sass";
import { useTextField } from "./useTextField";

export default function ThemeTextField({
  id,
  tabIndex,
  title,
  content,
  infoText,
  inputType,
  inputPlaceholder,
  checkError,
}: ThemeInfoTextFieldType) {
  const {
    inputValue,
    isFocus,
    setIsFocus,
    errorText,
    inputRef,
    handleInputChange,
    handleInfoClick,
    handleInputBlur,
  } = useTextField({ id, content, checkError });

  if (errorText) {
    return (
      <div tabIndex={tabIndex} onFocus={() => setIsFocus(true)}>
        <button className="theme-info error" type="button" tabIndex={-1}>
          <div className="theme-info-title error" tabIndex={-1}>
            {title}
          </div>
          <input
            ref={inputRef}
            className="theme-info-input error"
            type={inputType}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            tabIndex={tabIndex}
          />
        </button>
        <div className="theme-info-text error" tabIndex={-1}>
          {errorText}
        </div>
      </div>
    );
  }
  if (isFocus) {
    return (
      <div tabIndex={-1}>
        <button className="theme-info focus" type="button" tabIndex={-1}>
          <div className="theme-info-title focus" tabIndex={-1}>
            {title}
          </div>
          <input
            ref={inputRef}
            className="theme-info-input"
            type={inputType}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            tabIndex={tabIndex}
          />
        </button>
        {infoText && (
          <div className="theme-info-text" tabIndex={-1}>
            {infoText}
          </div>
        )}
      </div>
    );
  }
  if (inputValue) {
    return (
      <div tabIndex={tabIndex} onFocus={() => setIsFocus(true)}>
        <button
          className="theme-info filled"
          type="button"
          onClick={handleInfoClick}
          tabIndex={-1}
        >
          <div className="theme-info-title filled" tabIndex={-1}>
            {title}
          </div>
          <div className="theme-info-input filled" tabIndex={0}>
            {inputValue}
          </div>
        </button>
        {infoText && (
          <div className="theme-info-text filled" tabIndex={-1}>
            {infoText}
          </div>
        )}
      </div>
    );
  }
  return (
    <div tabIndex={tabIndex} onFocus={() => setIsFocus(true)}>
      <button
        className="theme-info"
        type="button"
        onClick={handleInfoClick}
        tabIndex={-1}
      >
        <div className="theme-info-title" tabIndex={0}>
          {title}
        </div>
      </button>
      {infoText && (
        <div className="theme-info-text" tabIndex={-1}>
          {infoText}
        </div>
      )}
    </div>
  );
}
