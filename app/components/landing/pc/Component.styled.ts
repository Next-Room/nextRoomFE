import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Title1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 84px;
  margin: 24px 0 80px;
`;

export const Title2 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 39px;
`;

export const SubTitle1 = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

export const SubTitle6 = styled.p`
  font-size: 23px;
  font-weight: 600;
  line-height: 38px;
`;

export const SubTitle7 = styled.p`
  color: #6e6e73;

  font-size: 21px;
  font-weight: 500;
  line-height: 27px;
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
  padding-bottom: 54px;
`;

export const Title4 = styled.div`
  text-align: center;
  font-size: 44px;
  font-weight: 700;
  line-height: 58px;
  padding: 118px 0 34px;
  background-image: url("/images/landing/background.png");
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
  height: 961px;
  margin: 0;
  align-items: center;
  display: flex;
  text-align: center;

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
    border: 1px solid #424245;
    border-left: none;
  }

  ${".item2"} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ${".item3"} {
    width: 100%;
    gap: 12px;
    border-top: 1px solid #424245;
    border-bottom: 1px solid #424245;

    &:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const Wrapper4 = styled(motion.div)`
  margin: 0 auto;
  border-top: 1px solid #424245;
`;

export const Main4 = styled.div`
  /* max-width: 980px; */
  margin: 0 auto;
  display: flex;
  padding: 123px 0;
  position: relative;

  ${"div"} {
    flex: 1;
  }

  ${".bar"} {
    width: 1px;
    height: 320px;
    position: absolute;
    left: 50%;
    background-image: url("/images/landing/bar.png");
  }
`;
export const Wrapper7 = styled(motion.div)`
  margin: 106px 0;
  height: 400vh;
  text-align: center;
  position: relative;
`;
export const Title7 = styled.div`
  font-size: 21px;
  font-weight: 700;
  line-height: 27px;
  width: 280px;
  left: calc(50% + 230px);
  position: absolute;
  top: calc(40vh);

  text-align: start;
`;

export const ImgCont = styled(motion.div)`
  height: 80vh;
  position: sticky;
  top: 106px;
  z-index: 4;
`;
export const ImgCont2 = styled(motion.div)`
  position: sticky;
  top: 106px;
  z-index: 4;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Main9 = styled(motion.div)`
  text-align: center;
  padding: 120px 0 122px;
  max-width: 980px;
  margin: 0 auto;
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
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  background: rgba(255, 255, 255, 0.08);
  ${"span"} {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 16px;
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
  border-radius: 25px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
    0px 8px 12px 6px rgba(0, 0, 0, 0.15);
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
  ${"span"} {
    font-size: 32px;
    font-weight: 400;
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
  opacity: 0.6;
  margin: 52px 0 80px;
`;

export const ListItem = styled.li`
  ${"img"} {
    vertical-align: middle;
    margin-right: 9px;
  }
`;
