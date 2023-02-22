import { screenWidth, screenHeight } from "@style/dimensions";
import styled from "styled-components/native";

interface Props {
  /** 페이지 내부 요소 */
  children: React.ReactNode;
  /**배경 색상 */
  bgColor: string;
}

const NonScrollContainer = ({ children, bgColor }: Props) => {
  return <Container bgColor={bgColor}>{children}</Container>;
};

const Container = styled.View<{ bgColor: string }>`
  flex: 1;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  position: relative;
`;

export default NonScrollContainer;
