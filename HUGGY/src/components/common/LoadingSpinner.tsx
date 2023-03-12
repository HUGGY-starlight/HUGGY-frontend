import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { screenWidth, screenHeight } from "@style/dimensions";

const LoadingSpinner = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#F5835E" />
    </Container>
  );
};

const Container = styled.View`
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.561);
  backdrop-filter: blur(4px);
  position: absolute;
  top: 0px;
  left: 0px;
`;

export default LoadingSpinner;
