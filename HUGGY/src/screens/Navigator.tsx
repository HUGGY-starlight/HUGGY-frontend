import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, History, Notice, Profile, QRBox } from "./TabScreens/index";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { AutoSizedImage } from "@components/index";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";

export type Props = StackScreenProps<RootStackParamList, "Navigator">;

const Navigator = (props: Props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 65,
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="store"
              size={22}
              style={{ color: focused ? "#F5835E" : "#404040" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Like"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="heart-o"
              size={24}
              style={{ color: focused ? "#F5835E" : "#404040" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRBox}
        options={{
          tabBarButton: (props) => (
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: "#FFF3E4",
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity {...props}>
                <AutoSizedImage
                  source={require("@assets/qrbtn.png")}
                  width={80}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarIconStyle: {},
        }}
      />
      <Tab.Screen
        name="Notice"
        children={() => <Notice {...props} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="bell"
              size={24}
              style={{ color: focused ? "#F5835E" : "#404040" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-person-outline"
              size={24}
              style={{ color: focused ? "#F5835E" : "#404040" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
