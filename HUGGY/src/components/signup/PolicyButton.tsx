import styled from "styled-components/native";
import { defaultBtnWidth } from "@style/dimensions";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  isFocused: boolean;
}

const PolicyButton = ({ title, isFocused, ...props }: Props) => {
  return (
    <PolicyBtn isFocused={isFocused} {...props}>
      <Title isFocused={isFocused}>{title}</Title>
    </PolicyBtn>
  );
};

const PolicyBtn = styled.TouchableOpacity<{ isFocused: boolean }>`
  width: ${defaultBtnWidth}px;
  min-height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.isFocused ? "#F5835E" : "#E8E8E8")};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin-bottom: 10px;
`;

const Title = styled.Text<{ isFocused: boolean }>`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.isFocused ? "white" : "#414141")};
`;

export default PolicyButton;
