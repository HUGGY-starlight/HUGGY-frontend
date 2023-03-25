import styled from "styled-components/native";
import { ViewProps } from "react-native";
import CustomButton from "@components/buttons/CustomButton";

export interface BtnProps {
  title: string;
  actived: boolean;
  onPress: () => void;
}

interface Props extends ViewProps {
  children: React.ReactNode;
  button: BtnProps;
  onClose: () => void;
}

const Wrapper = ({ children, button, onClose, ...props }: Props) => {
  return (
    <Container {...props}>
      {children}
      <ButtonBox>
        <CustomButton
          title={button.title}
          onPress={() => button.onPress()}
          style={{ backgroundColor: button.actived ? "#F5835E" : "#818181" }}
        />
        <CustomButton
          title={"뒤로가기"}
          onPress={() => onClose()}
          style={{ marginTop: 10, backgroundColor: "#818181" }}
        />
      </ButtonBox>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const ButtonBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 0px;
`;

export default Wrapper;
