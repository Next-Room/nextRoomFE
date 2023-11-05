import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as S from "../mobile/ComponentMobile.styled";

export default function Component7() {
  const imgProps = {
    src: "/images/landing/hint_phone.png",
    alt: "NEXT ROOM",
    width: 316,
    height: 650,
  };
  const component7Ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      if (component7Ref.current) {
        const rect7 = component7Ref.current.getBoundingClientRect();
        const startFade = window.innerHeight / 2; // 흐려지기 시작하는 지점
        const endFade = window.innerHeight; // 완전히 흐려지는 지점

        const newOpacity =
          1 -
          Math.min(
            1,
            Math.max(0, (rect7.top - startFade) / (endFade - startFade))
          );

        setOpacity(newOpacity);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Wrapper7 ref={component7Ref} style={{ opacity }}>
      <Image {...imgProps} />
      <S.Title7>
        직관적으로 알 수 있는 시간
        <S.SubTitle7>
          플레이가 시작되면 메인에서 남은 시간을 그래프와 함께 확인 가능합니다.
          진행률과 대조하여 직관적으로 시간이 여유있는지, 급한지 알 수 있죠.
        </S.SubTitle7>
      </S.Title7>
    </S.Wrapper7>
  );
}
