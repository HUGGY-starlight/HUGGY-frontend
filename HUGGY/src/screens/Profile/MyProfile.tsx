import {
  ProfileBox,
  Wrapper,
  Temperature,
  Achieve,
} from "@components/profile/myprofile";
import styled from "styled-components/native";
import { Achievement } from "@components/profile/myprofile/Achieve";

const dummyInfo = {
  name: "중규리",
  img: "https://i.pinimg.com/564x/b2/49/7e/b2497eb1ec4dd641c3f1c1c4c0e51b68.jpg",
  date: "2023-03-12",
};

const dummyAchieves: Array<Achievement> = [
  {
    name: "따뜻한 음식, 따뜻한 마음",
    icon: "https://github.com/JustJordanT/Windows_11_Emjois/blob/main/face/face-blowing-a-kiss.png?raw=true",
    date: "2023-03-12",
  },
  {
    name: "넌 나에게 달콤한 시간을 선물했어",
    icon: "https://github.com/JustJordanT/Windows_11_Emjois/blob/main/face/face-with-tears-of-joy.png?raw=true",
    date: "2023-03-12",
  },
  {
    name: "눈부셔 빛나는 그대와 달이 저무는 하늘",
    icon: "https://github.com/JustJordanT/Windows_11_Emjois/blob/main/face/grimacing-face.png?raw=true",
    date: "2023-03-12",
  },
];

const MyProfile = () => {
  return (
    <ScrollView>
      <Container>
        <ProfileBox {...dummyInfo} style={{ marginTop: 40 }} />
        <Wrapper title="나의 허깅 온도" style={{ marginTop: 40 }}>
          <Temperature temperature={78} />
        </Wrapper>
        <Wrapper title="나의 허기 뱃지" style={{ marginTop: 40 }}>
          <Achieve achives={dummyAchieves} />
        </Wrapper>
      </Container>
    </ScrollView>
  );
};

const ScrollView = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  width: 100%;
  min-height: 100%;
  background-color: #fdfdfd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 25px;
`;

export default MyProfile;
