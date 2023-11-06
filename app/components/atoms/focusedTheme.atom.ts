import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface ThemeInfo {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

const focusedThemeState = atom<ThemeInfo>({
  key: "focusedTheme",
  default: { id: 0, title: "", timeLimit: 0, hintLimit: 0 },
});

export const useFocusedTheme = () => useRecoilState(focusedThemeState);
export const useFocusedThemeValue = () => useRecoilValue(focusedThemeState);
export const useFocusedThemeWrite = () => useSetRecoilState(focusedThemeState);
