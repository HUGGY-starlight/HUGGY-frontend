import styled from "styled-components/native";
import { ViewProps } from "react-native";
import moment from "moment";

interface Props extends ViewProps {
  img: string;
  name: string;
  date: string;
}

const ProfileBox = ({ img, name, date, ...props }: Props) => {
  return (
    <Container {...props}>
      <ProfileImg
        source={{
          uri: img,
        }}
      />
      <InfoBox>
        <Name>{name}</Name>
        <Content>{`${moment(date).format("YYYY. MM. DD")} 가입`}</Content>
        <Edit
          style={{
            marginTop: 5,
            paddingBottom: 3,
            borderBottomColor: "#818181",
            borderBottomWidth: 1,
          }}
        >
          <Content>편집하기</Content>
        </Edit>
      </InfoBox>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100%;
`;

const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const Name = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #414141;
`;

const Content = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #818181;
`;

const Edit = styled.TouchableOpacity``;

export default ProfileBox;
