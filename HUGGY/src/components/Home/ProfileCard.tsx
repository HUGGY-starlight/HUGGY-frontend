import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

interface Info {
  img: string;
  name: string;
  position: string;
}

const tmpInfo: Info = {
  img: "https://i.pinimg.com/564x/90/4c/10/904c107279074e0c2099dbc1375c4d6a.jpg",
  name: "중규리",
  position: "경기도 시흥시 장곡동",
};

const ProfileCard = () => {
  const [info, setInfo] = useState<Info>(tmpInfo);
  return (
    <ProfileBox>
      <ProfileImg source={{ uri: info.img }} />
      <TitleBox>
        <Title style={{ fontWeight: "700" }}>
          반가워요, <Title style={{ fontWeight: "900" }}>{info.name}님!</Title>
        </Title>
        <Subtitle>{info.position} 탐색 중</Subtitle>
      </TitleBox>
      <Entypo name="menu" size={30} color="black" />
    </ProfileBox>
  );
};

const ProfileBox = styled.View`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const TitleBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 12px;
  color: #414141;
`;

const Subtitle = styled.Text`
  font-size: 10px;
  color: #818181;
`;

export default ProfileCard;
