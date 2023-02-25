import { Props } from "./Wrapper";
import styled from "styled-components/native";
import { Animated } from "react-native";
import { useRef, useEffect } from "react";

const Inner = ({ stage, max }: Props) => {
  const animation = useRef(new Animated.Value(0)).current;

  const load = () => {
    Animated.timing(animation, {
      toValue: (stage / max) * 100, // 어떤 값으로 변경할지 - 필수
      duration: 500, // 애니메이션에 걸리는 시간(밀리세컨드) - 기본값 500
      delay: 0, // 딜레이 이후 애니메이션 시작 - 기본값 0
      useNativeDriver: false, // 네이티브 드라이버 사용 여부 - 필수
      isInteraction: true, // 사용자 인터랙션에 의해 시작한 애니메이션인지 지정 - 기본값 true
      //easing: Easing.inOut(Easing.ease), // 애니메이션 속서 변경 함수 - 기본값 Easing.inOut(Easing.ease)
    }).start(() => {
      // 애니메이션 처리 완료 후 실행할 작업
      // 햅틱 한 번 넣어야함
    });
  };

  const width = animation.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  useEffect(() => {
    load();
  }, [stage]);

  return <InnerBox style={{ width: width }}></InnerBox>;
};

const InnerBox = styled(Animated.View)`
  height: 100%;
  background-color: #f5835e;
  border-radius: 10px;
  transition: all 0.15s;
`;

const AnimationBox = Animated.createAnimatedComponent(InnerBox);

export default Inner;
