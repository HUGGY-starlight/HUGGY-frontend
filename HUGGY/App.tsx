import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Container from "./Container";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      SUIT: require("./assets/fonts/SUIT-Variable.ttf"),
    });
  };

  useEffect(() => {
    async function prepare() {
      try {
        getFonts();
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // 렌더링 사전준비 완료
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      //로딩 이후 스플래시 화면 숨김
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1, width: "100%" }}>
      <Container />
    </View>
  );
}
