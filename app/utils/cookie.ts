export const setCookie = (
  cookie_name: string,
  value: string,
  days?: number
): void => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + (days || 0));
  // 설정 일수만큼 현재시간에 만료값으로 지정

  const cookieValue =
    encodeURIComponent(value) +
    (typeof days === "undefined" ? "" : `; expires=${exdate.toUTCString()}`);
  document.cookie = `${cookie_name}=${cookieValue}`;
};

export const getCookie = (cookie_name: string): string | null => {
  let x: string;
  let y: string;
  const val = document.cookie.split(";");

  for (let i = 0; i < val.length; i + 1) {
    x = val[i].substr(0, val[i].indexOf("="));
    y = val[i].substr(val[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, ""); // 앞과 뒤의 공백 제거하기
    if (x === cookie_name) {
      return decodeURIComponent(y); // decodeURIComponent로 디코딩 후 값 리턴
    }
  }
  return null; // 찾지 못했을 때 null 리턴
};
