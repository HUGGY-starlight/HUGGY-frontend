import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface Props extends TouchableOpacityProps {
  title: string;
}

const SemiButton = ({ title, ...props }: Props) => {
  return (
    <ButtonContainer {...props}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #ececec;
  border-radius: 5px;
  padding: 0px 15px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #818181;
`;

export default SemiButton;
