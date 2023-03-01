import { First, Second, Third, Fourth, Fifth } from "./SignupStages/index";
import { useState } from "react";
import styled from "styled-components/native";
import Wrapper from "@components/progressbar/Wrapper";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";

export type Props = StackScreenProps<RootStackParamList, "Signup">;

const STAGES = [First, Second, Third, Fourth, Fifth] as const;

const Signup = ({ navigation }: Props) => {
  const [stage, setStage] = useState(0);
  const CurrentPage = STAGES[stage];

  const onEnd = () => {
    stage < STAGES.length - 1
      ? setStage((prev) => prev + 1)
      : navigation.reset({ routes: [{ name: "Navigator" }] });
  };

  return (
    <SignupContainer>
      <Wrapper stage={stage + 1} max={STAGES.length} />
      <ContentContainer>
        <CurrentPage onEnd={() => onEnd()} />
      </ContentContainer>
    </SignupContainer>
  );
};

const SignupContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const ContentContainer = styled.View`
  width: 100%;
  height: 95%;
`;

export default Signup;
