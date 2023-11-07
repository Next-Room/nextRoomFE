import React, { useEffect, useRef } from "react";
import { useScroll, useMotionValue } from "framer-motion";
import Image from "next/image";
import * as S from "@/components/landing/mobile/ComponentMobile.styled";

export default function Phone4() {
  const imgProps = {
    src: "/images/landing/hint_phone4.png",
    alt: "NEXT ROOM",
    width: 180,
    height: 350,
  };
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Create a motion value for our opacity
  const opacity = useMotionValue(0);

  useEffect(() => {
    const updateOpacity = () => {
      if (!ref.current) return;

      const elementTop = ref.current.offsetTop;
      const elementHeight = ref.current.offsetHeight;
      const startAnimationAt = elementTop + elementHeight - 800; // 시작 위치 설정

      // 현재 스크롤 위치
      const currentScrollY = scrollY.get();

      // 애니메이션 적용 범위를 벗어난 경우
      if (currentScrollY < startAnimationAt) {
        opacity.set(0);
        return;
      }

      // 애니메이션 시작 지점에서 얼마나 스크롤 되었는지에 따라 투명도 설정
      const progress = (currentScrollY - startAnimationAt) / 200;
      opacity.set(Math.min(progress, 1)); // 투명도가 1을 넘지 않도록 함
    };

    // 스크롤 이벤트 리스너 등록
    const unsubscribeY = scrollY.onChange(updateOpacity);

    // 처음 마운트 될 때도 위치 업데이트
    updateOpacity();

    // 구독 해제
    return () => unsubscribeY();
  }, [scrollY, opacity]);

  return (
    <S.ImgCont
      ref={ref}
      style={{
        opacity,
      }}
    >
      <Image {...imgProps} />
      <S.Title7>
        문제 푸는 중에도 시간 확인하기
        <S.SubTitle7>
          메모장에서도 남은 시간을 표시하여 화면을 이동하지 않고 확인할 수
          있습니다.
        </S.SubTitle7>
      </S.Title7>
    </S.ImgCont>
  );
}
