import styled from "styled-components/native";
import { ViewProps } from "react-native";

interface Props extends ViewProps {
  temperature: number;
}

const Temperature = ({ temperature }: Props) => {
  return (
    <Container>
      <ScoreText style={{ color: "#4E4E4E" }}>
        현재까지{" "}
        <ScoreText style={{ color: "#F5835E" }}>{`${temperature}점`}</ScoreText>
        의 점수를 획득했어요!
      </ScoreText>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 15px;
  margin-top: 10px;
`;

const ScoreText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export default Temperature;
