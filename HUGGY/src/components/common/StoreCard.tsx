import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

interface Props extends TouchableOpacityProps {
  id: number;
  img: string;
  name: string;
  temperature: number;
  dishes: number;
}

const StoreCard = ({ img, name, temperature, dishes, ...props }: Props) => {
  return (
    <CardContainer {...props}>
      <ImgBox source={{ uri: img }} />
      <ContentBox></ContentBox>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  width: 100%;
  height: 215px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`;

const ImgBox = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 10px;
`;

const ContentBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default StoreCard;
