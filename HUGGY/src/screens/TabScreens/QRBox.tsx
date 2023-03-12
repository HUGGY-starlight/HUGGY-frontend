import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TitleBox,
  Title,
  Subtitle,
  Content,
} from "@components/qrbox/textComponent";
import QRCode from "react-native-qrcode-svg";
import { SemiButton } from "@components/index";

const dummyName = "중규리";
const dummyCount = 6;

const QRBox = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f4f4f4" }}>
      <Container>
        <TitleBox>
          <Title>{`${dummyName}님의\nHUGGY 지갑입니다.`}</Title>
          <Subtitle>{`이번 달에는 총 ${dummyCount}회 이용하셨네요!`}</Subtitle>
        </TitleBox>
        <QRCodeWrapper>
          <QRCodeBox>
            <QRCode
              size={200} // 로고 사이즈 조절
              value={
                "https://www.youtube.com/watch?v=_66CDOLI9xo&list=RDYDPYOZ_V5WY&index=2"
              } // 실제 연결 될 주소
              logoSize={300}
              logoBackgroundColor="transparent"
            />
          </QRCodeBox>
          <Content
            style={{ color: "#F5835E", textAlign: "center", marginTop: 10 }}
          >{`허깅 받기 전\n가게 사장님께 꼭 QR 인증을 부탁하세요!`}</Content>
        </QRCodeWrapper>
        <BtnWrapper>
          <SemiButton title="나의 이용 내역" />
          <SemiButton
            title="QR 코드 이용 문의 및 악용 사례 신고"
            style={{ marginTop: 5 }}
          />
        </BtnWrapper>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0px 30px;
`;

const QRCodeWrapper = styled.View`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QRCodeBox = styled.View`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 2px;
`;

const BtnWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default QRBox;
