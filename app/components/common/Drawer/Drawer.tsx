import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// eslint-disable-next-line import/no-extraneous-dependencies
import AddIcon from "@mui/icons-material/Add";
import { useModalState } from "@/components/atoms/modals.atom";
import {
  InitialSelectedTheme,
  useSelectedTheme,
} from "@/components/atoms/selectedTheme.atom";
import { Theme, Themes } from "@/queries/getThemeList";
import Image from "next/image";
import { getShopName } from "@/utils/localStorage";
import Dialog from "@/components/common/Dialog/Dialog";

import * as S from "./DrawerView.styled";

type Props = {
  categories: Themes;
};

const logoProps = {
  src: "/images/svg/logo.svg",
  alt: "NEXT ROOM",
  width: 184,
  height: 26,
};

function MainDrawer(props: Props) {
  const { categories } = props;
  const router = useRouter();

  const [selectedTheme, setSelectedTheme] = useSelectedTheme();
  const shopName = getShopName();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalState, setModalState] = useModalState();
  const [focusedTheme, setFocusedTheme] = useState<Theme | null>(null); // 현재 선택된 테마를 저장할 상태 추가
  const [open, setOpen] = useState<boolean>(false);

  const toggleOnModalState = () => {
    router.push("/theme");
    setSelectedTheme(InitialSelectedTheme);

    setModalState({ type: "post", isOpen: true });
  };

  const handleDialog = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedTheme(categories[categories.length - 1]);
    }
  }, [categories, setSelectedTheme]);

  const handleListItemClick = (theme: Theme) => {
    setFocusedTheme(theme);
    if (modalState.isOpen) {
      handleDialog();
    } else {
      setSelectedTheme({ ...theme });
      router.push(`/admin?title=${encodeURIComponent(theme.title)}`);
    }
  };

  return (
    <S.ListWrap>
      <Box>
        <ListItem>
          <S.LogoWrapper>
            <Image {...logoProps} />
          </S.LogoWrapper>
        </ListItem>
      </Box>
      <Box>
        <S.ShopNameListItem>
          <S.ShopName color="inherit">
            {shopName?.replaceAll(`"`, "")}
          </S.ShopName>
        </S.ShopNameListItem>

        {[...categories].reverse().map((theme) => (
          <ListItem key={theme.id}>
            <ListItemButton
              selected={selectedTheme.id === theme.id}
              onClick={() => {
                handleListItemClick(theme);
              }}
            >
              <ListItemText>{theme.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "14px",
          }}
        >
          <Button onClick={toggleOnModalState}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText>새로운 테마 추가하기</ListItemText>
          </Button>
        </ListItem>
      </Box>
      <Dialog
        open={open}
        handleBtn={() => {
          if (focusedTheme) {
            setModalState({ ...modalState, isOpen: false });
            setSelectedTheme({ ...focusedTheme });
            router.push(
              `/admin?title=${encodeURIComponent(focusedTheme.title)}`
            );
          }
        }}
        handleDialogClose={() => setOpen(false)}
        type={modalState.type === "post" ? "themePost" : "themePut"}
      />
    </S.ListWrap>
  );
}

export default MainDrawer;
