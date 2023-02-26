import { useState, useEffect } from "react";
import { PolicyButton, SignupContainer } from "@components/signup";
import { TitleBox, Title, Subtitle, CustomButton } from "@components/index";
import { Props } from "@interfaces/SignupInterface";
import styled from "styled-components/native";
import { signupState, SignupInfo } from "@recoil/signupState";
import { useRecoilState } from "recoil";

const Third = ({ onEnd }: Props) => {
  const [policies, setPolicies] = useState<Array<number>>([]);
  const [isSucceeded, setIsSucceeded] = useState<boolean>(false);
  const [info, setInfo] = useRecoilState(signupState);

  const onAgree = (isFocused: boolean, id: number) => {
    if (isFocused) setPolicies(policies.filter((policy) => policy !== id));
    else setPolicies((prev) => [...prev, id]);
  };

  useEffect(() => {
    policies.includes(0) && policies.includes(1) && policies.includes(2)
      ? setIsSucceeded(true)
      : setIsSucceeded(false);
  }, [policies]);

  const customEnd = () => {
    const newInfo: SignupInfo = {
      ...info,
      agree: policies,
    };
    setInfo(newInfo);
    onEnd!();
  };

  return (
    <SignupContainer>
      <TitleBox>
        <Title color={"#F5835E"} margin={"15px 0px 0px 2px"}>
          이용약관에 동의해주세요.
        </Title>
        <Subtitle
          color={"#313131"}
          margin={"7px 0px 0px 2px"}
          style={{ textAlign: "left" }}
        >
          {"HUGGY는 추가 정보를 요구하지 않아요.\n안심하고 이용할 수 있습니다."}
        </Subtitle>
      </TitleBox>
      <PolicyBox>
        <PolicyButton
          title="[필수] 개인정보 처리방침"
          onPress={() => onAgree(policies.includes(0), 0)}
          isFocused={policies.includes(0)}
        />
        <PolicyButton
          title="[필수] 위치 기반 서비스 이용약관"
          onPress={() => onAgree(policies.includes(1), 1)}
          isFocused={policies.includes(1)}
        />
        <PolicyButton
          title="[필수] HUGGY 이용약관"
          onPress={() => onAgree(policies.includes(2), 2)}
          isFocused={policies.includes(2)}
        />
        <PolicyButton
          title="[선택] 앱 푸시 알림 수신"
          onPress={() => onAgree(policies.includes(3), 3)}
          isFocused={policies.includes(3)}
        />
      </PolicyBox>
      <PolicyBox>
        <Subtitle
          color={`${isSucceeded ? "#F5835E" : "#414141"}`}
          style={{ marginBottom: 10 }}
        >
          {isSucceeded
            ? "이용 약관에 동의하셨습니다."
            : "필수 항목에 모두 동의해주세요."}
        </Subtitle>
        <CustomButton
          title={"Next"}
          onPress={() => (onEnd ? (isSucceeded ? customEnd() : null) : null)}
          style={{ backgroundColor: `${isSucceeded ? "#F5835E" : "#818181"}` }}
        />
      </PolicyBox>
    </SignupContainer>
  );
};

const PolicyBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Third;
