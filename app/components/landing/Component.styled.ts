import { styled } from "styled-components";

export const Title = styled.h1`
  font-size: 64px;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5em;
  margin-bottom: 24px;
`;

export const SubTitle6 = styled.p`
  font-size: 23px;
  font-weight: 600;
  line-height: 38px;
`;

export const SubTitle2 = styled.p`
  font-size: 44px;

  margin-bottom: 80px;
`;

export const SubTitle3 = styled.p`
  text-align: center;
  font-size: 44px;
  font-weight: 700;
  line-height: 58px;
  padding: 80px 0 54px;
`;
export const SubTitle4 = styled.p`
  text-align: center;
  font-size: 23px;
  font-weight: 600;
  line-height: 38px;
`;
export const Title6 = styled.p`
  font-size: 44px;
  font-weight: 700;
  line-height: 58px;
  margin: 24px 0 48px;
`;

export const Span = styled.span`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px;
`;
export const Score = styled.p`
  text-align: center;
  margin: 0;
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  padding: 160px 0;
  height: 100vh;
`;

export const Wrapper1 = styled.div`
  padding: 160px 0;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
  ${"div"} {
    width: 362px;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  /* padding: 160px 0; */
  ${"div"} {
    flex: 1;
  }
`;
export const Wrapper3 = styled.div`
  padding: 160px 0;
  height: 100vh;
  display: grid;
  text-align: center;
  /* grid-template-columns: repeat(4, 1fr);  5개의 동일한 크기의 열을 생성 
  grid-template-rows: auto auto;  2개의 행, 각각의 크기는 자동 
  gap: 10px; 그리드 사이의 간격 */
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 20px; /* 그리드 간격입니다. 필요한 경우 조절하십시오. */
  ${".item1"} {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    background-image: url("/images/lending/background.png");
  }

  ${".item2"} {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  ${".item3"} {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
`;
export const Wrapper4 = styled.div`
  display: flex;
  margin-top: 157px;
  /* padding: 160px 0; */
  ${"div"} {
    flex: 1;
  }
`;
export const Wrapper5 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 157px;
  /* padding: 160px 0; */
  ${"div"} {
    flex: 1;
  }
`;

export const Main = styled.div`
  color: #6e6e73;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  ${"p"} {
    margin-top: 24px;
    color: white;
  }
`;
export const Main4 = styled.div`
  text-align: center;
  height: 100vh;
  padding: 126px 0;
`;

export const Main9 = styled.div`
  text-align: center;
  height: 100vh;
  padding: 126px 0;
  background: #151516;
  //수정예정
`;

export const Box = styled.div`
  width: 233px;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 18px;
  border: 1px solid #222223;
  display: grid;
  grid-template-rows: 1fr auto;

  gap: 16px;

  background: rgba(255, 255, 255, 0.08);

  ${"span"} {
    font-size: 14px;
    font-weight: 500;
  }
`;
export const BoxWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 80px;
`;

export const Btn = styled.button`
  background: #fff;
  width: 210px;
  height: 50px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Box8 = styled.div`
  text-align: start;
  width: 318px;
  height: 306px;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 18px;
  border: 1px solid #222223;

  background: rgba(255, 255, 255, 0.08);
`;
export const BoxTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const BoxDescription = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 16px 0;
`;

export const BoxExCost = styled.span`
  font-size: 13px;
  opacity: 0.4;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  text-decoration: line-through;
`;
export const BoxNowCost = styled.span`
  font-size: 36px;
  font-weight: 700;
`;
export const BoxBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  background: #fff;
  width: 250px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const BoxWrapper8 = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: 80px auto 0;
`;

export const ListCont = styled.ul`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(3, auto);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  opacity: 0.4;
`;

export const ListItem = styled.li`
  ${"img"} {
    vertical-align: middle;
    margin-right: 9px;
  }
`;
