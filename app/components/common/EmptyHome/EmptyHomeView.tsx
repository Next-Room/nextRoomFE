import React from "react";
import { HOME_TITLE } from "@/consts/components/home";
import AddIcon from "@mui/icons-material/Add";
import { useModalStateWrite } from "@/components/atoms/modals.atom";
import { getShopName } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import * as S from "./EmptyHomeView.styled";

function EmptyHomeView() {
  const shopName = getShopName();
  const router = useRouter();
  const setModalState = useModalStateWrite();
  const toggleOnModalState = () => {
    router.push("/theme");
    setModalState({ type: "post", isOpen: true });
  };

  return (
    <S.Wrapper>
      <S.Title>
        <pre>
          {shopName?.replaceAll(`"`, "")}
          {HOME_TITLE}
        </pre>
      </S.Title>
      <S.AddButton onClick={toggleOnModalState} startIcon={<AddIcon />}>
        새로운 테마 추가하기
      </S.AddButton>
    </S.Wrapper>
  );
}

export default EmptyHomeView;
