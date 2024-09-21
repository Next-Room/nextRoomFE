import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/(types)/createThemeType";
import React, { ChangeEvent, FocusEvent, RefObject } from "react";

export default function ThemeErrorTextField({
  title,
  inputType,
  inputPlaceholder,
  inputValue,
  errorText,
  inputRef,
  onChange: handleInputChange,
  onBlur: handleInputBlur,
}: ThemeInfoTextFieldType & {
  inputValue: string;
  errorText: string;
  inputRef: RefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}) {
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
