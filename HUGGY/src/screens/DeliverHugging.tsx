import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";
import { ConfirmInfo, Complete } from "@components/deliver";
import { useState } from "react";

export type Props = StackScreenProps<RootStackParamList, "DeliverHugging">;

const STAGES = [ConfirmInfo, Complete];

const DeliverHugging = ({ navigation }: Props) => {
  const [stage, setStage] = useState(0);
  const CurrentPage = STAGES[stage];

  const onEnd = () => {
    stage < STAGES.length - 1
      ? setStage((prev) => prev + 1)
      : navigation.reset({ routes: [{ name: "Navigator" }] });
  };

  return (
    <SafeAreaView>
      <CurrentPage onEnd={() => onEnd()} onClose={() => navigation.pop()} />
    </SafeAreaView>
  );
};

export default DeliverHugging;
