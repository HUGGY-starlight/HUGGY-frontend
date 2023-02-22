import { ScrollViewCarousel } from "@components/Onboarding/index";
import styled from "styled-components/native";
import SocialLoginButton from "@components/buttons/SocialLogin";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";

export type Props = StackScreenProps<RootStackParamList, "OnBoarding">;

const OnBoarding = ({ navigation, route }: Props) => {
  return (
    <AppBackground>
      <ScrollViewCarousel />
      <SocialLoginButton
        type="huggy"
        style={{ position: "absolute", bottom: 50 }}
        onPress={() => navigation.navigate("Login")}
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

export default OnBoarding;
