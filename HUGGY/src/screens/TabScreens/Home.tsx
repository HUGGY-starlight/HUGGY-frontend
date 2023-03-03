import {
  CategoryItem,
  HomeCarousel,
  HomeSearchBox,
  ProfileCard,
} from "@components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenWidth } from "@style/dimensions";
import styled from "styled-components/native";
import { useState } from "react";

const PAGES = [
  {
    img: require("@assets/illustrations/c1.png"),
    url: "",
  },
  {
    img: require("@assets/illustrations/c2.png"),
    url: "",
  },
  {
    img: require("@assets/illustrations/c3.png"),
    url: "",
  },
];

enum Categories {
  All = "전체 요리",
  Soup = "따뜻한 국물 요리",
  Meal = "든든한 한 끼 식사",
  Instant = "간편한 인스턴트",
  Night = "맛있는 야식",
  Desert = "달콤한 디저트",
  Drink = "부드러운 음료 한 잔",
}

const Home = () => {
  const [curCategory, setCurCategory] = useState(Categories.All);

  return (
    <SafeAreaView>
      <ProfileCard />
      <HomeCarousel
        gap={16}
        offset={8}
        pages={PAGES}
        pageWidth={screenWidth - (16 + 8) * 2}
      />
      <SearchBoxContainer>
        <SearchBoxWrapper>
          <HomeSearchBox
            onPress={() => null}
            placeholder="찾고싶은 가게 이름을 검색해보세요."
          />
        </SearchBoxWrapper>
        <CategoryWrapper
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {Object.values(Categories).map((category) => (
            <CategoryItem
              title={category}
              isFocused={category === curCategory}
              key={category}
              onPress={() => setCurCategory(category)}
              style={{
                marginLeft: category === Categories.All ? 25 : 6,
                marginRight: category === Categories.Drink ? 25 : 0,
              }}
            />
          ))}
        </CategoryWrapper>
      </SearchBoxContainer>
    </SafeAreaView>
  );
};

const SearchBoxContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const SearchBoxWrapper = styled.View`
  width: 100%;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryWrapper = styled.ScrollView`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export default Home;
