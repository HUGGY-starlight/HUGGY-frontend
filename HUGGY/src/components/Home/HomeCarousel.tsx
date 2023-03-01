import React, { useState } from "react";
import { FlatList, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import Item from "./Item";
import { HomeCarouselItem } from "@interfaces/HomeInterface";

interface ICarousel {
  gap: number;
  offset: number;
  pages: Array<HomeCarouselItem>;
  pageWidth: number;
}

const Container = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: ${(props) => (props.focused ? "#262626" : "#dfdfdf")};
  width: 6px;
  height: 6px;
  border-radius: 3px;
`;

const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

const HomeCarousel = ({ pages, pageWidth, gap, offset }: ICarousel) => {
  const [page, setPage] = useState(0);

  function renderItem({ item }: any) {
    return (
      <Item
        item={item}
        style={{ width: pageWidth, marginHorizontal: gap / 2 }}
      />
    );
  }

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap)
    );
    setPage(newPage);
  };

  return (
    <Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.img}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({ length: pages.length }, (_, i) => i).map((i) => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
};

export default HomeCarousel;
