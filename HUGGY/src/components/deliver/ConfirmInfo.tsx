import { ViewProps } from "react-native";
import styled from "styled-components/native";
import { Header, Subtitle, TitleBox, Content } from "./textComponent";
import { CustomButton } from "..";

interface Props extends ViewProps {
  onEnd: () => void;
  onClose: () => void;
}

const dummyInfo = {
  img: "",
  name: "중규리",
};

const ConfirmInfo = ({ onEnd, onClose }: Props) => {
  return (
    <Container>
      <TitleBox>
        <Header>{`정보를\n확인해주세요.`}</Header>
        <Subtitle>아래 정보가 맞다면 다음으로 넘어가주세요.</Subtitle>
      </TitleBox>
      <ContentsWrapper>
        <ProfileImg
          source={{
            uri: "https://i.pinimg.com/564x/c5/1d/f0/c51df09a5f48803b9d94ee6f2ddbe089.jpg",
          }}
        />
        <Subtitle
          style={{
            fontWeight: "700",
            fontSize: 18,
            marginBottom: 5,
            marginTop: 20,
          }}
        >{`${dummyInfo.name}님에게 허깅을 전달할게요!`}</Subtitle>
        <Content
          style={{ color: "#F5835E", fontWeight: "500", marginBottom: 10 }}
        >{`급식카드, 장애인 통합 복지카드, 국가유공자 복지카드를\n꼭 확인해주세요!`}</Content>
      </ContentsWrapper>
      <ContentsWrapper>
        <CustomButton
          title="Next"
          style={{ backgroundColor: "#F5835E" }}
          onPress={() => onEnd()}
        />
        <CustomButton
          title="Back"
          style={{ backgroundColor: "#818181", marginTop: 10 }}
          onPress={() => onClose()}
        />
      </ContentsWrapper>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0px 25px;
`;

const ContentsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

export default ConfirmInfo;
