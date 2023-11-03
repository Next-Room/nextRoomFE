import React from "react";
import * as S from "./Component.styled";

export default function component4() {
  return (
    <div>
      <S.SubTitle3>
        힌트폰을 사용하면
        <br />
        이런 일은 발생하지 않습니다.
      </S.SubTitle3>
      <S.Wrapper4>
        <div>
          <S.SubTitle4>
            힌트를 제공 받을 때 고객이 직원의 말투나
            <br />
            태도 때문에 불만족한 경험이 있다.
          </S.SubTitle4>
          <S.Score>78%</S.Score>
        </div>
        <div>
          <S.SubTitle4>
            직원이 잘못된 힌트를 <br />
            알려준 적이 있다.
          </S.SubTitle4>

          <S.Score>34%</S.Score>
        </div>
      </S.Wrapper4>
    </div>
  );
}
