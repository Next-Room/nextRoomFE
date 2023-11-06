import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import * as S from "@/components/landing/pc/Component.styled";

export default function Phone2() {
  const imgProps = {
    src: "/images/landing/hint_phone2.png",
    alt: "NEXT ROOM",
    width: 180,
    height: 350,
  };
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacityOffset = 100; // 낮은 값으로 설정하여 투명도 변화가 빠르게 일어나도록 함

  const opacity = useTransform(scrollYProgress, (value) => {
    const elementTop = ref.current?.offsetTop ?? 0;
    const elementHeight = ref.current?.offsetHeight ?? 0;
    // 스크롤 위치에 따라 투명도가 빠르게 변하도록 계산
    const progress = (value * 100 - elementTop + elementHeight) / opacityOffset;
    return Math.max(0, Math.min(1, 1 - progress));
  });

  return (
    <S.ImgCont
      ref={ref}
      style={{
        opacity,
        // 다른 애니메이션 속성이 필요하면 여기에 추가합니다.
      }}
    >
      <Image {...imgProps} />
      <S.Title7>
        몰입이 깨지지 않는 어두운 화면
        <S.SubTitle7>
          어두운 공간에서 방탈출을 진행할 때, 힌트폰의 빛으로 인해 몰입이
          깨지거나 눈이 아픈 경험을 해소했습니다.
        </S.SubTitle7>
      </S.Title7>
    </S.ImgCont>
  );
}
