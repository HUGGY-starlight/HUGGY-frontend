import { SignupContainer } from "@components/signup";
import {
  TitleBox,
  Title,
  Subtitle,
  CustomButton,
  CustomInput,
} from "@components/index";
import styled from "styled-components/native";
import { useState } from "react";
import { Props } from "@interfaces/SignupInterface";
import { signupState, SignupInfo } from "@recoil/signupState";
import { useRecoilState } from "recoil";

const Fourth = ({ onEnd }: Props) => {
  const [name, setName] = useState("");
  const [isSucceeded, setIsSucceeded] = useState<boolean>(true); //코드 수정 필요 _ useCheck 추가
  const [info, setInfo] = useRecoilState(signupState);

  const customEnd = () => {
    const newInfo: SignupInfo = {
      ...info,
      name: name,
    };
    setInfo(newInfo);
    onEnd!();
  };

  return (
    <SignupContainer>
      <TitleBox>
        <Title color={"#F5835E"} margin={"15px 0px 0px 2px"}>
          {`HUGGY에서 사용할\n이름을 입력해주세요.`}
        </Title>
        <Subtitle
          color={"#313131"}
          margin={"7px 0px 0px 2px"}
          style={{ textAlign: "left" }}
        >
          {"부적절한 이름은 즉각 조치될 수 있습니다."}
        </Subtitle>
      </TitleBox>
      <InputBox style={{ marginBottom: 300 }}>
        <CustomInput
          additional="사용 가능한 이름입니다."
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </InputBox>
      <InputBox>
        <CustomButton
          title={"Next"}
          onPress={() => (onEnd ? (isSucceeded ? customEnd() : null) : null)}
          style={{ backgroundColor: `${isSucceeded ? "#F5835E" : "#818181"}` }}
        />
      </InputBox>
    </SignupContainer>
  );
};

const InputBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default Fourth;
