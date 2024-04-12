import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface SelectedTheme {
  id: number;
  title: string;
  timeLimit: number;
  hintLimit: number;
}

export const InitialSelectedTheme: SelectedTheme = {
  id: 0,
  title: "",
  timeLimit: 0,
  hintLimit: 0,
} as const;

const selectedThemeState = atom<SelectedTheme>({
  key: "selectedTheme",
  default: InitialSelectedTheme,
});

export const useSelectedTheme = () => useRecoilState(selectedThemeState);
export const useSelectedThemeValue = () => useRecoilValue(selectedThemeState);
export const useSelectedThemeWrite = () =>
  useSetRecoilState(selectedThemeState);
