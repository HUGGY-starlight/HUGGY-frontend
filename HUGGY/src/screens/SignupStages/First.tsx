import styled from "styled-components/native";
import {
  Heavy,
  TitleBox,
  Title,
  Subtitle,
  CustomButton,
} from "@components/index";
import { useBtnTheme } from "@hooks/useBtnTheme";

const First = () => {
  return (
    <FirstBox>
      <TitleBox>
        <Heavy style={{ color: "#F5835E" }}>WELCOME!</Heavy>
        <Title color={"#313131"} margin={"15px 0px 0px 2px"}>
          <Title color={"#F5835E"}>HUGGY</Title>에 오신 것을 환영해요!
        </Title>
        <Subtitle
          color={"#313131"}
          margin={"5px 0px 0px 2px"}
          style={{ textAlign: "left" }}
        >
          {"간단한 정보 입력 후,\nHUGGY를 자유롭게 이용할 수 있어요."}
        </Subtitle>
      </TitleBox>
      <CustomButton title={"Next"} style={{ backgroundColor: "#F5835E" }} />
    </FirstBox>
  );
};

const FirstBox = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
`;

export default First;
