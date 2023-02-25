import styled from "styled-components/native";
import { defaultBtnWidth } from "@style/dimensions";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {
  additional: string;
}

const CustomInput = ({ additional, ...props }: Props) => {
  return (
    <InputContainer>
      <InputBox
        style={{ borderBottomWidth: 1, borderBottomColor: "#E1E1E1" }}
        {...props}
      >
        <Input placeholder="닉네임을 입력해주세요." />
      </InputBox>
      <Additional>{additional}</Additional>
    </InputContainer>
  );
};

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InputBox = styled.View`
  width: ${defaultBtnWidth}px;
  padding: 10px;
`;

const Input = styled.TextInput`
  width: 100%;
`;

const Additional = styled.Text`
  font-size: 13px;
  font-weight: 300;
  color: #f5835e;
  margin-top: 4px;
`;

export default CustomInput;
