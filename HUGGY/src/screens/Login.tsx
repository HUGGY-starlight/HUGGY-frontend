import { View, Text } from "react-native";
import { ScrollViewCarousel } from "@components/Onboarding/index";
import styled from "styled-components/native";
import SocialLoginButton from "@components/buttons/SocialLogin";

const Login = () => {
  return (
    <AppBackground>
      <ScrollViewCarousel />
      <SocialLoginButton
        type="huggy"
        style={{ position: "absolute", bottom: 50 }}
      />
    </AppBackground>
  );
};

const AppBackground = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: white;
`;

export default Login;
