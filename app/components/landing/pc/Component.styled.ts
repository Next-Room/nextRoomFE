import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Title1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 84px;
  margin: 24px 0 80px;
`;

export const SubTitle1 = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 39px;
`;

export const SubTitle6 = styled.p`
  font-size: 23px;
  font-weight: 600;
  line-height: 38px;
`;

export const SubTitle2 = styled.p`
  font-size: 44px;
  font-weight: 700;
  line-height: 58px;
  margin: 8px 0 24px;
`;

export const SubTitle3 = styled.p`
  text-align: center;
  font-size: 44px;
  font-weight: 700;
  line-height: 58px;
  padding-bottom: 40px;
`;

export const Title4 = styled.div`
  text-align: center;
  font-size: 44px;
  font-weight: 700;
  line-height: 58px;
  /* background-image: url("/images/landing/background.png"); */
`;

export const SubTitle4 = styled.p`
  text-align: center;
  font-size: 23px;
  font-weight: 600;
  line-height: 38px;
`;
export const Title6 = styled.p`
  font-size: 60px;
  font-weight: 700;
  line-height: normal;
  margin: 24px 0 48px;
`;

export const Title8 = styled.p`
  font-size: 52px;
  font-weight: 700;
  line-height: 70px;
  margin-top: 24px;
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

export const Wrapper = styled(motion.div)`
  max-width: 980px;
  margin: 0 auto;
  padding: 152px 0;
`;

export const Wrapper1 = styled(motion.div)`
  max-width: 980px;
  margin: 0 auto;
  padding-top: 216px;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
  ${"div"} {
    width: 362px;
  }
`;

export const Wrapper2 = styled(motion.div)`
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  /* padding: 160px 0; */
`;
export const Wrapper5 = styled(motion.div)`
  width: 98vw;
  height: 100vh;
  margin: 0;
  align-items: center;
  display: flex;
  text-align: center;
  padding: 106px 0;
  ${"div"} {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ${".item1"} {
    height: 100%;
    font-size: 60px;
    font-weight: 700;
    line-height: normal;
    background-image: url("/images/landing/background.png");
  }

  ${".item2"} {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #6e6e73;
  }

  ${".item3"} {
    width: 100%;
    border-bottom: 1px solid #6e6e73;
  }
`;

export const Wrapper4 = styled(motion.div)`
  /* margin-top: 157px; */
  /* max-width: 980px; */
  margin: 0 auto;
  padding: 118px 0;
`;

export const Main4 = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  margin-top: 157px;
  /* padding: 160px 0; */
  ${"div"} {
    flex: 1;
  }
`;

export const Wrapper8 = styled(motion.div)`
  text-align: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 126px 0;
`;

export const Main = styled.div`
  color: #6e6e73;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  ${"p"} {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: white;
  }
`;
export const Main3 = styled(motion.div)`
  text-align: center;
  padding: 80px 0;
`;

export const Wrapper9 = styled(motion.div)`
  background: #151516;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main9 = styled(motion.div)`
  text-align: center;
  height: 100vh;
  padding: 126px 0;
  max-width: 980px;
  margin: 0 auto;
  //수정예정
`;

export const Box = styled.div`
  width: 233px;
  padding: 22px;
  box-sizing: border-box;
  border-radius: 18px;
  border: 1px solid #222223;
  display: grid;
  grid-template-rows: 1fr auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
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
  margin-top: 32px;
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

export const MainBtn = styled.button`
  background: #fff;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 210px;
  height: 50px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  z-index: 999;
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
  margin: 52px 0 80px;
`;

export const ListItem = styled.li`
  ${"img"} {
    vertical-align: middle;
    margin-right: 9px;
  }
`;
