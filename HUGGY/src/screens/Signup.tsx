import { First, Second } from "./SignupStages/index";
import { useState } from "react";
import styled from "styled-components/native";
import Wrapper from "@components/progressbar/Wrapper";

const STAGES = [First, Second] as const;

const Signup = () => {
  const [stage, setStage] = useState(0);
  const CurrentPage = STAGES[stage];
  return (
    <SignupContainer>
      <Wrapper stage={stage + 1} max={STAGES.length} />
      <ContentContainer>
        <CurrentPage onEnd={() => setStage((prev) => prev + 1)} />
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
