import React from "react";
import "./textField.modules.sass";
import classNames from "classnames";

import { useTextField } from "./useTextField";
import { ThemeInfoTextFieldType } from "./TextFieldType";

export default function ThemeTextField({
  id,
  tabIndex,
  title,
  content,
  infoText,
  inputType,
  inputPlaceholder,
  checkErrorText,
}: ThemeInfoTextFieldType) {
  const {
    inputValue,
    isFocus,
    setIsFocus,
    errorText,
    inputRef,
    handleInputChange,
    handleInputBlur,
    handleKeyDownSubmit,
  } = useTextField({ id, content, checkErrorText });

  return (
    <div
      tabIndex={isFocus ? -1 : tabIndex}
      onFocus={() => setIsFocus(true)}
      onKeyDown={handleKeyDownSubmit}
    >
      <button
        className={classNames("theme-textfield", {
          focus: isFocus,
          filled: inputValue && !isFocus,
          error: errorText,
        })}
        type="button"
        tabIndex={-1}
      >
        <div
          className={classNames("theme-textfield-title", {
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
            className={classNames("theme-textfield-input", {
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
          <div className="theme-textfield-input filled" tabIndex={-1}>
            {inputValue}
          </div>
        )}
      </button>
      {errorText && (
        <div className="theme-textfield-text error" tabIndex={-1}>
          {errorText}
        </div>
      )}
      {infoText && (
        <div
          className={classNames("theme-textfield-text", {
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
