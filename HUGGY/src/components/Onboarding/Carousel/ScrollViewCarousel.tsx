//ScrollViewCarousel.tsx
import styled from "styled-components/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import CarouselItem from "./CarosuelItem";
import AutoSizedImage from "@components/common/AutoSizedImage";
import { screenWidth } from "@style/dimensions";
import { Title, Subtitle, TitleBd } from "@components/index";

const ImgWidth =
  screenWidth < 390 ? 215 : screenWidth >= 390 && screenWidth < 430 ? 240 : 260;

const ScrollViewCarousel = () => {
  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScrollEnd = (e: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const xOffset = e.nativeEvent.contentOffset.x;
    const index = xOffset / itemWidth;
    setCurrentIndex(index);
  };

  const indexToOffset = () => {
    return { x: currentIndex * itemWidth, y: 0 };
  };

  return (
    <CarouselContainer>
      <ScrollView
        style={{ flex: 1 }}
        onMomentumScrollEnd={onScrollEnd}
        horizontal
        pagingEnabled
        contentContainerStyle={{ width: `${100 * 4}%` }}
        scrollEventThrottle={200}
        decelerationRate="fast"
        onContentSizeChange={(w) => setItemWidth(w / 4)}
        contentOffset={indexToOffset()}
        showsHorizontalScrollIndicator={false}
      >
        <Row>
          <CarouselItemContainer width={itemWidth}>
            <CarouselItem>
              <AutoSizedImage
                source={require("@assets/illustrations/first.png")}
                width={ImgWidth}
              />
              <ContentBox>
                <Title color="#1B1B1B">
                  당신의 <TitleBd color="#F5835E">허기</TitleBd>를 채워드릴게요.
                </Title>
                <Subtitle
                  color="#1B1B1B"
                  margin="15px 0px 0px 0px"
                >{`따뜻한 마음을,\n따뜻한 음식으로 나누고 싶어요.`}</Subtitle>
              </ContentBox>
            </CarouselItem>
          </CarouselItemContainer>

          <CarouselItemContainer width={itemWidth}>
            <CarouselItem>
              <AutoSizedImage
                source={require("@assets/illustrations/second.png")}
                width={ImgWidth}
              />
              <ContentBox>
                <Title color="#1B1B1B">
                  당신의 <TitleBd color="#10464D">온기</TitleBd>를 내어주세요.
                </Title>
                <Subtitle
                  color="#1B1B1B"
                  margin="15px 0px 0px 0px"
                >{`당신의 따뜻한 마음으로\n이웃의 하루를 지켜주세요.`}</Subtitle>
              </ContentBox>
            </CarouselItem>
          </CarouselItemContainer>

          <CarouselItemContainer width={itemWidth}>
            <CarouselItem>
              <AutoSizedImage
                source={require("@assets/illustrations/third.png")}
                width={ImgWidth}
              />
              <ContentBox>
                <Title color="#1B1B1B">
                  든든한 <TitleBd color="#FBBC05">히어로</TitleBd>가 되어주세요.
                </Title>
                <Subtitle
                  color="#1B1B1B"
                  margin="15px 0px 0px 0px"
                >{`후원자에게 따뜻한 마음으로\n음식을 제공함으로써 후원에 동참해요.`}</Subtitle>
              </ContentBox>
            </CarouselItem>
          </CarouselItemContainer>

          <CarouselItemContainer width={itemWidth} bgColor="#F5835E">
            <CarouselItem>
              <AutoSizedImage
                source={require("@assets/huggylogo.png")}
                width={ImgWidth}
              />
              <Subtitle color="#ffffff">{`허기진 아이들을 위한 따뜻한 포옹`}</Subtitle>
            </CarouselItem>
          </CarouselItemContainer>
        </Row>
      </ScrollView>
      <DotContainer>
        {[0, 0, 0, 0].map((_, index) => {
          const isFoused = currentIndex === index;
          return <Dot key={index} isFocused={isFoused} />;
        })}
      </DotContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
`;

const CarouselItemContainer = styled.View<{ width: number; bgColor?: string }>`
  width: ${(props) => props.width}px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  padding-bottom: 100px;
`;

const ContentBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const DotContainer = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Dot = styled.View`
  width: 8px;
  height: 8px;
  margin: 0px 3px;
  background-color: ${(props: { isFocused: boolean }) =>
    props.isFocused ? "#F5835E" : "#EDEDED"};
  border-radius: 10px;
  transition: all 0.15s;
`;

export default ScrollViewCarousel;
