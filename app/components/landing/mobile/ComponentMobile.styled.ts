import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Title1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 42px;
  margin: 8px 0 32px;
`;

export const SubTitle1 = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const SubTitle6 = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const SubTitle7 = styled.p`
  color: #6e6e73;

  font-size: 21px;
  font-weight: 500;
  line-height: 27px;
`;

export const SubTitle2 = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  margin: 8px 0 24px;
`;

export const SubTitle3 = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  padding: 162px 0;
  background-image: url("/images/landing/background.png");
`;

export const Title4 = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  padding: 162px 0;
  border-top: 1px solid #6e6e73;
  background-image: url("/images/landing/background.png");
`;

export const SubTitle4 = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  padding: 60px 0;
  border-top: 1px solid #6e6e73;
  border-bottom: 1px solid #6e6e73;
`;
export const Title6 = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  margin: 8px 0 24px;
`;
export const Title7 = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 27px;
  width: 280px;
  left: calc(50% + 230px);
  position: absolute;
  top: 200px;
  text-align: start;
`;

export const Title8 = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  margin: 8px 0 32px;
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;
export const Score = styled.p`
  text-align: center;
  margin: 0;
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
`;

export const Wrapper = styled(motion.div)`
  padding: 60px 26px;
`;

export const Wrapper1 = styled(motion.div)`
  padding: 96px 0;
  height: 100vh;
  text-align: center;
`;

export const Wrapper2 = styled(motion.div)`
  margin-top: 26px;
  /* padding: 160px 0; */
`;
export const Wrapper5 = styled(motion.div)`
  text-align: center;
`;

export const Wrapper4 = styled(motion.div)`
  /* margin-top: 157px; */
`;

export const Wrapper7 = styled(motion.div)`
  margin: 106px 0;
  height: 100vh;
  text-align: center;
  position: relative;
`;

export const Wrapper8 = styled(motion.div)`
  text-align: center;
  padding: 60px 0;
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
  padding: 60px 0;

  /* padding: 80px 0; */
`;

export const Wrapper9 = styled(motion.div)`
  background: #151516;
  width: 100vw;
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
  width: 100%;
  padding: 22px;
  box-sizing: border-box;
  border-radius: 18px;
  border: 1px solid #222223;
  display: grid;
  grid-template-rows: 1fr auto;
  font-size: 16px;
  font-weight: 700;
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
  grid-template-rows: repeat(4, 1fr);
  margin-top: 32px;
`;

export const Btn = styled.button`
  background: #fff;
  width: 302px;
  height: 52px;
  margin: 32px 29px;
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
  position: relative;
  text-align: start;
  width: 100%;
  height: 100px;
  padding: 22px 30px 22px 22px;
  box-sizing: border-box;
  border-radius: 18px;
  border: 1px solid #222223;

  background: rgba(255, 255, 255, 0.08);
`;
export const BoxCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
`;

export const BoxDescription = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  margin: 2px 0;
`;

export const BoxExCost = styled.span`
  position: absolute;
  top: 22px;
  right: 30px;
  font-size: 13px;
  opacity: 0.4;
  font-weight: 500;
  line-height: 20px; /* 153.846% */
  text-decoration: line-through;
`;
export const BoxNowCost = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 140%;
  ${"span"} {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }
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
  gap: 14px;
  grid-template-rows: repeat(3, 1fr);
`;

export const ListCont = styled.ul`
  display: grid;
  gap: 18px;
  grid-template-rows: repeat(3, auto);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  opacity: 0.4;
  margin: 24px 0 100px;
`;

export const ListItem = styled.li`
  ${"img"} {
    vertical-align: middle;
    margin-right: 9px;
  }
`;
