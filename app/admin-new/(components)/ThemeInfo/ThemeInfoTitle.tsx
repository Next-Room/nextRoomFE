import Image from "next/image";
import React from "react";

export default function ThemeInfoTitle() {
  const ImageProps = {
    src: "/images/svg/icon_ArrowDownMini.svg",
    alt: "IconArrowDownMini",
    width: 24,
    height: 24,
  };

  return (
    <div className="theme-info__title">
      <div className="theme-info-fit">
        <div>Title</div>
        <Image {...ImageProps} />
      </div>
    </div>
  );
}
