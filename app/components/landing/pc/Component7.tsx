import React, { useRef } from "react";

import Phone from "./Phone";
import Phone2 from "./Phone2";
import Phone3 from "./Phone3";
import Phone4 from "./Phone4";
import * as S from "./Component.styled";

export default function Component7() {

  const component7Ref = useRef<HTMLDivElement>(null);

  return (
    <S.Wrapper7 ref={component7Ref}>
      <Phone />
      <Phone2 />
      <Phone3 />
      <Phone4 />
    </S.Wrapper7>
  );
}
