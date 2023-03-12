import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import styled from "styled-components/native";
import { Title, Subtitle, TitleBox, Content } from "./textComponent";
import moment from "moment";
import { AutoSizedImage, CustomButton } from "..";
import { ViewProps } from "react-native";

interface Props extends ViewProps {
  onEnd: () => void;
}

const dummyInfo = {
  name: "중규리",
  unit: 6900,
  store: "스타벅스 시흥 장곡점",
};

const Complete = ({ onEnd, ...props }: Props) => {
  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  }, []);

  return (
    <Container {...props}>
      <TitleBox>
        <Content>{`${moment().format("YYYY. MM. DD HH:mm")}`}</Content>
        <Title>{`${dummyInfo.name}님에게 허깅 정달 완료`}</Title>
        <Subtitle>{dummyInfo.store}</Subtitle>
        <Subtitle
          style={{ marginTop: 15, fontWeight: "800", color: "#F5835E" }}
        >{`1그릇 (${dummyInfo.unit}) 허깅 완료`}</Subtitle>
      </TitleBox>
      <AutoSizedImage source={require("@assets/Caring.png")} height={290} />
      <ContentsWrapper>
        <Content
          style={{ color: "#F5835E", fontWeight: "600" }}
        >{`${dummyInfo.name}님 덕분에, 세상이 한 층 따뜻해졌어요!`}</Content>
        <CustomButton
          title="홈 화면으로"
          style={{ backgroundColor: "#F5835E", marginTop: 10 }}
          onPress={() => onEnd()}
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

export default Complete;
