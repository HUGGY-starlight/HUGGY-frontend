import styled from "styled-components/native";
import AutoSizedImage from "@components/common/AutoSizedImage";
import { Content } from "./textToken";

const NotAuthed = () => {
  return (
    <Container>
      <AutoSizedImage source={require("@assets/Shakehand.png")} height={224} />
      <Content style={{ marginTop: 10 }}>
        아직 사업자 인증을 완료하지 않았어요.
      </Content>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default NotAuthed;
