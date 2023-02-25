import { ClickInfoBox, SignupContainer } from "@components/signup";
import { TitleBox, Title, Subtitle, CustomButton } from "@components/index";
import styled from "styled-components/native";
import { useState } from "react";
import { Props } from "@interfaces/SignupInterface";

interface Info {
  title: string;
  contents: Array<string>;
}

const Second = ({ onEnd }: Props) => {
  const [focused, setFocused] = useState(0);

  const STORE: Info = {
    title: "점포를 허깅 스토어로 등록하고 싶어요.",
    contents: [
      "사업자 인증이 필요해요.",
      "후원자가 미리 가게에 방문하여 비용을 지불하면, 가게에 방문한 복지 대상자에게 메뉴를 제공하며 후원에 참여할 수 있어요.",
      "매달 목표 후원 그릇을 설정하고, 우리 가게의 따뜻함을 널리 알려봐요!",
    ],
  };

  const USER: Info = {
    title: "일반 사용자로 가입하고 싶어요.",
    contents: [
      "별도의 인증 과정이 필요하지 않아요.",
      "허깅 스토어에 일정 금액을 후원하면, 이후 복지 대상자가 방문하여 내가 지불한 금액 만큼의 메뉴를 받아갈 수 있어요.",
      "혹은 후원 금액이 남아있는 스토어를 찾아보고, 사장님께 복지카드를 보여드리면 후원 메뉴를 수여받을 수 있어요.",
    ],
  };

  return (
    <SignupContainer>
      <TitleBox>
        <Title color={"#F5835E"} margin={"15px 0px 0px 2px"}>
          HUGGY-TYPE을 선택해주세요.
        </Title>
        <Subtitle
          color={"#313131"}
          margin={"7px 0px 0px 2px"}
          style={{ textAlign: "left" }}
        >
          {"이후에 수정할 수 없으니,\n신중하게 선택해주세요!"}
        </Subtitle>
      </TitleBox>
      <ExplainBox>
        <ClickInfoBox
          {...USER}
          isFocused={focused === 0}
          onPress={() => setFocused(0)}
        />
        <ClickInfoBox
          {...STORE}
          isFocused={focused === 1}
          onPress={() => setFocused(1)}
        />
      </ExplainBox>
      <ExplainBox>
        <Subtitle color={"#F5835E"} style={{ marginBottom: 10 }}>{`${
          focused === 0 ? "일반 사용자" : "허깅 스토어"
        } 회원 가입을 진행합니다!`}</Subtitle>
        <CustomButton
          title={"Next"}
          onPress={() => (onEnd ? onEnd() : null)}
          style={{ backgroundColor: "#F5835E" }}
        />
      </ExplainBox>
    </SignupContainer>
  );
};

const ExplainBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Second;
