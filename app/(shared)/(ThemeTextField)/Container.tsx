import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/createThemeType";
import React from "react";
import "./textField.modules.sass";
import classNames from "classnames";
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
    handleInputBlur,
  } = useTextField({ id, content, checkError });

  return (
    <div tabIndex={isFocus ? -1 : tabIndex} onFocus={() => setIsFocus(true)}>
      <button
        className={classNames("theme-info", {
          focus: isFocus,
          filled: inputValue && !isFocus,
          error: errorText,
        })}
        type="button"
        tabIndex={-1}
      >
        <div
          className={classNames("theme-info-title", {
            focus: isFocus,
            filled: inputValue,
            error: errorText,
            focus__ani: isFocus && !inputValue,
            focus__removeani: inputRef.current,
          })}
          tabIndex={-1}
        >
          {title}
        </div>
        {(errorText || isFocus) && (
          <input
            ref={inputRef}
            className={classNames("theme-info-input", {
              error: errorText,
            })}
            type={inputType}
            value={inputValue}
            placeholder={inputPlaceholder}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            tabIndex={tabIndex}
          />
        )}
        {inputValue && !(errorText || isFocus) && (
          <div className="theme-info-input filled" tabIndex={-1}>
            {inputValue}
          </div>
        )}
      </button>
      {errorText && (
        <div className="theme-info-text error" tabIndex={-1}>
          {errorText}
        </div>
      )}
      {infoText && (
        <div
          className={classNames("theme-info-text", {
            filled: inputValue,
          })}
          tabIndex={-1}
        >
          {infoText}
        </div>
      )}
    </div>
  );
}
