import ThemeTextField from "@/(shared)/(ThemeTextField)/Container";
import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/TextFieldType";
import Image from "next/image";
import React from "react";

export default function ThemeDrawer() {
  const ImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "NEXT ROOM",
    width: 28,
    height: 28,
  };

  const codeTextFieldProps: ThemeInfoTextFieldType = {
    id: "title",
    tabIndex: 1,
    title: "힌트 코드(숫자 4자리)",
    content: "",
    infoText: "",
    inputType: "text",
    inputPlaceholder: "",
    checkErrorText: undefined,
  };
  return (
    <div className="theme-drawer__container">
      <div className="theme-drawer__title">
        <span>힌트</span>
        <button type="button">
          <Image {...ImageProps} />
        </button>
      </div>
      <div className="theme-drawer__content">
        <div className="drawer-code">
          <ThemeTextField {...codeTextFieldProps} />
        </div>
        <div>이미지</div>
        <div className="drawer-rate">
          <div>문제 진행률</div>
          <input type="text" placeholder="문제 진행률(%)" />
        </div>
        <div className="drawer-hint">
          <div>힌트</div>
          <button type="button">이미지 추가</button>
          <textarea placeholder="힌트 내용을 입력해 주세요." />
        </div>
        <div className="drawer-answer">
          <div>정답</div>
          <button type="button">이미지 추가</button>
          <textarea placeholder="정답 내용을 입력해 주세요." />
        </div>
      </div>
      <div className="theme-drawer__footer">
        <button type="submit">추가하기</button>
      </div>
    </div>
  );
}
