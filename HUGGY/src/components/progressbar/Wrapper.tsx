import styled from "styled-components/native";
import { defaultBtnWidth } from "@style/dimensions";
import Inner from "./Inner";

export interface Props {
  stage: number;
  max: number;
}

const Wrapper = (props: Props) => {
  return (
    <ProgressContainer>
      <ProgressBox>
        <Inner {...props} />
      </ProgressBox>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: absolute;
  top: 50px;
`;

const ProgressBox = styled.View`
  width: ${defaultBtnWidth}px;
  height: 10px;
  border-radius: 10px;
  background-color: #ededed;
`;

export default Wrapper;
