import React from "react";
import * as S from "./Component.styled";

export default function component8() {
  const arr = [1, 2, 3];

  return (
    <S.Main4>
      <S.SubTitle6>
        방탈출 1인 가격보다, 최저 시급보다 저렴한 가격 보다 합리적으로 선택할 수
        있는 요금제
      </S.SubTitle6>
      <S.BoxWrapper8>
        {arr.map(() => (
          <S.Box8>
            <S.BoxTitle>미디움</S.BoxTitle>
            <S.BoxDescription>
              5개의 테마를 <br />
              등록할 수 있어요
            </S.BoxDescription>
            <S.BoxExCost>19,900원</S.BoxExCost> <br /> 
            <S.BoxNowCost>9,900원/월</S.BoxNowCost> <br /> <br />
            <S.BoxBtn>구독하기</S.BoxBtn>
          </S.Box8>
        ))}
      </S.BoxWrapper8>
    </S.Main4>
  );
}
