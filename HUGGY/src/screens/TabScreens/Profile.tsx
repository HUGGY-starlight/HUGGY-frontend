import { SemiButton } from "@components/index";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";

export type Props = StackScreenProps<RootStackParamList, "Navigator">;

const Profile = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Container>
        <Title style={{ color: "#414141" }}>프로필 관리</Title>
        <BtnBox>
          <SemiButton title="내 프로필" />
          <SemiButton title="허깅 스토어 관리" style={{ marginTop: 10 }} />
          <SemiButton title="허깅 전달 관련 신고" style={{ marginTop: 10 }} />
          <SemiButton title="로그아웃" style={{ marginTop: 10 }} />
          <SemiButton title="회원 탈퇴" style={{ marginTop: 10 }} />
        </BtnBox>
      </Container>
    </SafeAreaView>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 25px;
`;

const Title = styled.Text`
  width: 100%;
  font-size: 20px;
  font-weight: 800;
  color: #414141;
`;

const BtnBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

export default Profile;
