import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";
import { defaultBtnWidth } from "@style/dimensions";

interface Props extends TouchableOpacityProps {
  title: string;
  contents: Array<string>;
  isFocused: boolean;
}

const ClickInfoBox = ({ title, contents, isFocused, ...props }: Props) => {
  return (
    <BtnBox isFocused={isFocused} {...props}>
      <Title isFocused={isFocused}>{title}</Title>
      {isFocused ? (
        contents.map((content) => (
          <Content key={content} isFocused={isFocused}>
            {content}
          </Content>
        ))
      ) : (
        <></>
      )}
    </BtnBox>
  );
};

const BtnBox = styled.TouchableOpacity<{ isFocused: boolean }>`
  width: ${defaultBtnWidth}px;
  min-height: 50px;
  border-radius: 10px;
  background-color: ${(props) => (props.isFocused ? "#332C45" : "#E8E8E8")};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Title = styled.Text<{ isFocused: boolean }>`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.isFocused ? "white" : "#414141")};
`;

const Content = styled.Text<{ isFocused: boolean }>`
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
  color: ${(props) => (props.isFocused ? "white" : "#414141")};
`;

export default ClickInfoBox;
