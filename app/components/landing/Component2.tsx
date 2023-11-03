import React from "react";
// import Image from "next/image";
import * as S from "./Component.styled";

export default function Component2() {
  const arr = [1, 2, 3, 4];

  return (
    <S.Wrapper>
      <S.SubTitle>왜 넥스트룸일까요?</S.SubTitle>
      <S.Wrapper2>
        <div>
          <S.SubTitle2>
            방탈출 운영 경험을
            <br />
            살려 만들었습니다.
          </S.SubTitle2>
        </div>
        <S.Main>
          약 4년간 방탈출 업계에서 일하며, 수없이 많은 손님들을 상대했습니다.{" "}
          <br />
          <br />
          사람이 하는 일에는 필연적으로 실수가 생겼고 이는 곧 손님의 만족도로
          이어졌습니다. <br />
          실수를 없애기 위해 직원용 자동화 앱을 만들었고, 긍정적인 결과를
          얻었습니다. <br />
          <br />
          이제는 더 나아가 시중에 나와있는 힌트폰을 고민했습니다.
          <p>그동안의 노하우를 담아 풀어낸 솔루션이 넥스트룸입니다.</p>
        </S.Main>
      </S.Wrapper2>
      <S.BoxWrapper>
        {arr.map(() => (
          <S.Box>
            <p>
              셜록홈즈
              <br /> 방탈출카페
            </p>
            <span>2017.03 ~ 2017.11</span>
          </S.Box>
        ))}
      </S.BoxWrapper>
    </S.Wrapper>
  );
}
