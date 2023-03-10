import {
  Heavy,
  TitleBox,
  Title,
  Subtitle,
  CustomButton,
} from "@components/index";
import { SignupContainer } from "@components/signup";
import { Props } from "@interfaces/SignupInterface";
import { useResetRecoilState } from "recoil";
import { signupState } from "@recoil/signupState";

const First = ({ onEnd }: Props) => {
  const setting = useResetRecoilState(signupState);

  const customEnd = () => {
    setting();
    onEnd!();
  };

  return (
    <SignupContainer>
      <TitleBox>
        <Heavy style={{ color: "#F5835E" }}>WELCOME!</Heavy>
        <Title color={"#313131"} margin={"15px 0px 0px 2px"}>
          <Title color={"#F5835E"}>HUGGY</Title>에 오신 것을 환영해요!
        </Title>
        <Subtitle
          color={"#313131"}
          margin={"7px 0px 0px 2px"}
          style={{ textAlign: "left" }}
        >
          {"간단한 정보 입력 후,\nHUGGY를 자유롭게 이용할 수 있어요."}
        </Subtitle>
      </TitleBox>
      <CustomButton
        title={"Next"}
        onPress={() => (onEnd ? customEnd() : null)}
        style={{ backgroundColor: "#F5835E" }}
      />
    </SignupContainer>
  );
};

export default First;
