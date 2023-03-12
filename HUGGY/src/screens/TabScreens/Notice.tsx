import { TouchableOpacity, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";
import { SafeAreaView } from "react-native-safe-area-context";

export type Props = StackScreenProps<RootStackParamList, "Navigator">;

const Notice = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.push("DeliverHugging")}>
        <Text>ㄱㄱ</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notice;
