import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
}

const CustomButton = ({ title, ...props }: Props) => {
  return (
    <Button {...props}>
      <Title>{title}</Title>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  width: 320px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: white;
`;

export default CustomButton;
