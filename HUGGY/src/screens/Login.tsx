import styled from "styled-components/native";
import { useState, useEffect } from "react";
import { UrlText, NonScrollContainer } from "@components/index";
import { screenWidth } from "@style/dimensions";
import AutoSizedImage from "@components/common/AutoSizedImage";
import SocialLoginButton from "@components/buttons/SocialLogin";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";

export type Props = StackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  const [width, setWidth] = useState(225);
  /**로고 너비 계산 함수 */
  const calculWidth = () => {
    if (screenWidth < 390) return;
    if (screenWidth < 435) {
      setWidth(240);
      return;
    }
    if (screenWidth < 500) {
      setWidth(260);
      return;
    }
    if (screenWidth > 500) {
      setWidth(275);
      return;
    }
  };

  useEffect(() => {
    calculWidth();
  }, []);

  return (
    <NonScrollContainer bgColor={"#F5835E"}>
      <Container>
        <AutoSizedImage
          source={require("@assets/huggylogo.png")}
          width={width}
        />
        <TitleBox>
          <SubTitle>허기진 아이들을 위한</SubTitle>
          <Title>따뜻한 포옹</Title>
        </TitleBox>
        <ButtonBox>
          <SocialLoginButton
            type="kakao"
            onPress={() => navigation.navigate("Signup")}
          />
          <SocialLoginButton
            type="google"
            onPress={() => navigation.navigate("Signup")}
          />
          <SocialLoginButton
            type="apple"
            onPress={() => navigation.navigate("Navigator")}
          />
        </ButtonBox>
        <UrlText
          text={`회원가입시 서비스 이용약관 및 개인정보 처리방침에\n동의하게 됩니다.`}
          url=""
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#ffffffdd",
            marginTop: 20,
          }}
        />
      </Container>
      <QuestionBox>
        <AutoSizedImage
          source={require("@assets/teamlogo.png")}
          width={screenWidth < 650 ? screenWidth / 1.5 : 250}
        />
      </QuestionBox>
    </NonScrollContainer>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;

const SubTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 300;
`;

const Title = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 900;
  margin-top: 5px;
`;

const ButtonBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const QuestionBox = styled.View`
  width: 100%;
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;
