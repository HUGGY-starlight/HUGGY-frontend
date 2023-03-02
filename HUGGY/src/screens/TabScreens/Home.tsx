import { HomeCarousel, HomeSearchBox, ProfileCard } from "@components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenWidth } from "@style/dimensions";
import styled from "styled-components/native";

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

const Home = () => {
  return (
    <SafeAreaView>
      <ProfileCard />
      <HomeCarousel
        gap={16}
        offset={8}
        pages={PAGES}
        pageWidth={screenWidth - (16 + 8) * 2}
      />
      <SearchBoxWrapper>
        <HomeSearchBox
          marginTop={20}
          onPress={() => null}
          placeholder="찾고싶은 가게 이름을 검색해보세요."
        />
      </SearchBoxWrapper>
    </SafeAreaView>
  );
};

const SearchBoxWrapper = styled.View`
  width: 100%;
  padding: 0px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Home;
