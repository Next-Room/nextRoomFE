import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";

interface ThemeInfo {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

const createThemeState = atom<ThemeInfo>({
  key: "createTheme",
  default: { id: 0, title: "", timeLimit: 0, hintLimit: 0 },
});

export const useCreateTheme = () => useRecoilState(createThemeState);
export const useCreateThemeValue = () => useRecoilValue(createThemeState);
export const useCreateThemeWrite = () => useSetRecoilState(createThemeState);
export const useCreateThemeReset = () => useResetRecoilState(createThemeState);
