import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  onPress: () => void;
  marginTop: number;
}

const HomeSearchBox = ({ onPress, marginTop, ...props }: Props) => {
  return (
    <SearchBox style={{ marginTop: marginTop }}>
      <InnerInput {...props} />
      <SearchButton onPress={() => onPress()}>
        <Entypo name="magnifying-glass" size={28} color="#AFAFAF" />
      </SearchButton>
    </SearchBox>
  );
};

const SearchBox = styled.View`
  width: 100%;
  height: 45px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const SearchButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
`;

const InnerInput = styled.TextInput`
  width: 90%;
  height: 100%;
`;

export default HomeSearchBox;
