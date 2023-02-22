import First from "./SignupStages/First";
import { useState } from "react";
import styled from "styled-components/native";

const STAGES = [First] as const;

const Signup = () => {
  const [stage, setStage] = useState(0);
  const CurrentPage = STAGES[stage];
  return (
    <SignupContainer>
      <CurrentPage />
    </SignupContainer>
  );
};

const SignupContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Signup;
