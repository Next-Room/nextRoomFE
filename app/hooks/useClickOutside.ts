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
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
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
