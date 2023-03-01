import { ViewProps } from "react-native";

interface Props extends ViewProps {
  temp: number;
}

const TempBar = ({ temp, ...props }: Props) => {
  return <></>;
};

export default TempBar;
