import { HomeCarousel, ProfileCard } from "@components/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { screenWidth } from "@style/dimensions";

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
    </SafeAreaView>
  );
};

export default Home;
