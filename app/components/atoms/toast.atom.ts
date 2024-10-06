import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";

interface ToastType {
  isOpen: boolean;
  title: string;
  text: string;
}
const toast = atom<ToastType>({
  key: "toast",
  default: { isOpen: false, title: "", text: "" },
});

export const useToastInfo = () => useRecoilState(toast);
export const useToastValue = () => useRecoilValue(toast);
export const useToastWrite = () => useSetRecoilState(toast);
