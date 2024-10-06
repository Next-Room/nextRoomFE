import { useEffect, MutableRefObject } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  onClickOutside: () => void
) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      // 이벤트가 상위로 전파되지 않도록 수정
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
        event.stopPropagation(); // 상위 모달로의 이벤트 전파를 막음
      }
    }

    // Bind
    document.addEventListener("click", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;
