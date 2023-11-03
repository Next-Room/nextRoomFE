import React from "react";
import Image from "next/image";
import * as S from "./Component.styled";

export default function component5() {
  const imgProps1 = {
    src: "/images/landing/alarm.svg",
    alt: "NEXT ROOM",
    width: 26.52,
    height: 26.92,
  };

  const imgProps2 = {
    src: "/images/landing/wifi.svg",
    alt: "NEXT ROOM",
    width: 29.33,
    height: 24.51,
  };

  return (
    <S.Wrapper3>
      <div className="item1">
        <S.SubTitle3>
          돌발 상황에도
          <br />
          문제 없습니다
        </S.SubTitle3>
      </div>

      {/* <S.Wrapper5> */}
      <div className="item2">
        <Image {...imgProps1} />
        <S.SubTitle4>
          손님이 실수로 앱을 종료해도
          <br />
          진행 시간에 맞게 복구합니다
        </S.SubTitle4>
      </div>
      <div className="item3">
        <Image {...imgProps2} />
        <S.SubTitle4>
          인터넷 신호가 끊겨도
          <br />
          오프라인으로 사용 가능합니다.
        </S.SubTitle4>
      </div>
      {/* </S.Wrapper5> */}
    </S.Wrapper3>
  );
}
