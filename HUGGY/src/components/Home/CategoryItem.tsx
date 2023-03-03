import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface Props extends TouchableOpacityProps {
  title: string;
  isFocused: boolean;
}

const CategoryItem = ({ title, isFocused, ...props }: Props) => {
  return (
    <ItemBox {...props}>
      <ItemTitle isFocused={isFocused}>{title}</ItemTitle>
    </ItemBox>
  );
};

const ItemBox = styled.TouchableOpacity`
  border-radius: 50px;
  overflow: hidden;
`;

const ItemTitle = styled.Text<{ isFocused: boolean }>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.isFocused ? "white" : "#414141")};
  padding: 10px 15px;
  background: ${(props) => (props.isFocused ? "#F5835E" : "#ffffff")};
`;

export default CategoryItem;
