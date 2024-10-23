import ThemeTextField from "@/(shared)/(ThemeTextField)/Container";
import { ThemeInfoTextFieldType } from "@/(shared)/(ThemeTextField)/TextFieldType";
import Image from "next/image";
import React from "react";

export default function ThemeDrawer() {
  const XImageProps = {
    src: "/images/svg/icon_X.svg",
    alt: "x_button",
    width: 28,
    height: 28,
  };
  const HintImageProps = {
    src: "/images/svg/hint.svg",
    alt: "hint_help_image",
    width: 177,
    height: 127,
  };
  const GalleryImageProps = {
    src: "/images/svg/icon_gallery_white.svg",
    alt: "gallery_image",
    width: 11,
    height: 11,
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
  const rateTextFieldProps: ThemeInfoTextFieldType = {
    id: "title",
    tabIndex: 1,
    title: "문제 진행률(%)",
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
          <Image {...XImageProps} />
        </button>
      </div>
      <div className="theme-drawer__content">
        <div className="drawer-code">
          <ThemeTextField {...codeTextFieldProps} />
        </div>
        <div className="drawer-image-subtext-section">
          <div className="drawer-image-subtext">보여질 내용</div>
        </div>
        <div className="drawer-image-section">
          <Image {...HintImageProps} />
        </div>
        <div className="drawer-rate">
          <div className="drawer-category-title">문제 진행률</div>
          <ThemeTextField {...rateTextFieldProps} />
        </div>
        <div className="drawer-hint">
          <div className="drawer-category-title">
            힌트
            <button type="button">
              <Image {...GalleryImageProps} />
              이미지 추가
            </button>
          </div>
          <div className="drawer-images">
            <div className="drawer-image-box">image1</div>
            <div className="drawer-image-box">image2</div>
          </div>
          <textarea
            className="drawer-content-textarea"
            placeholder="힌트 내용을 입력해 주세요."
          />
        </div>
        <div className="drawer-answer">
          <div className="drawer-category-title">
            정답
            <button type="button">
              <Image {...GalleryImageProps} />
              이미지 추가
            </button>
          </div>
          <textarea
            className="drawer-content-textarea"
            placeholder="정답 내용을 입력해 주세요."
          />
        </div>
      </div>
      <div className="theme-drawer__footer">
        <button type="submit">삭제하기</button>
        <button type="submit">추가하기</button>
      </div>
    </div>
  );
}
