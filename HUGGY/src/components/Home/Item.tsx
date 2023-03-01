import styled from "styled-components/native";
import { ViewStyle, ImageBackground } from "react-native";
import { HomeCarouselItem } from "@interfaces/HomeInterface";

interface IPage {
  item: HomeCarouselItem;
  style: ViewStyle;
}

const PageItem = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

const PageNum = styled.Text``;

const Item = ({ item, style }: IPage) => {
  return (
    <PageItem style={style}>
      <ImageBackground
        source={item.img}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </PageItem>
  );
};

export default Item;
