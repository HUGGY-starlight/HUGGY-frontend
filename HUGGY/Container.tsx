import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";
import {
  Navigator,
  Login,
  OnBoarding,
  Signup,
  DeliverHugging,
} from "@screens/index";
import { MyProfile, Store, Report } from "@screens/Profile";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RootStack = createStackNavigator<RootStackParamList>();

/**
 * 앱 로딩 완료 후 (스플래시 종료 후),
 * 네비게이션 콘테이너를 감싸는 코드
 */
const Container = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="OnBoarding">
        <RootStack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Navigator"
          component={Navigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="DeliverHugging"
          component={DeliverHugging}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="MyProfile"
          component={MyProfile}
          options={(props) => {
            const { navigation } = props;
            return {
              headerShown: true,
              title: "내 프로필",
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 16 }}
                  onPressIn={() => navigation.pop()}
                >
                  <FontAwesome name="angle-left" size={24} color="black" />
                </TouchableOpacity>
              ),
            };
          }}
        />
        <RootStack.Screen
          name="Store"
          component={Store}
          options={(props) => {
            const { navigation } = props;
            return {
              headerShown: true,
              title: "허깅 스토어 관리",
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 16 }}
                  onPressIn={() => navigation.pop()}
                >
                  <FontAwesome name="angle-left" size={24} color="black" />
                </TouchableOpacity>
              ),
            };
          }}
        />
        <RootStack.Screen
          name="Report"
          component={Report}
          options={(props) => {
            const { navigation } = props;
            return {
              headerShown: true,
              title: "허깅 전달 관련 신고",
              headerLeft: () => (
                <TouchableOpacity
                  style={{ paddingLeft: 16 }}
                  onPressIn={() => navigation.pop()}
                >
                  <FontAwesome name="angle-left" size={24} color="black" />
                </TouchableOpacity>
              ),
            };
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
