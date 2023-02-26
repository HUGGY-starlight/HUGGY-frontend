import {
  Heavy,
  TitleBox,
  Title,
  Subtitle,
  CustomButton,
  AutoSizedImage,
} from "@components/index";
import { SignupContainer } from "@components/signup";
import { Props } from "@interfaces/SignupInterface";
import { defaultBtnWidth } from "@style/dimensions";
import { signupState } from "@recoil/signupState";
import { useRecoilState } from "recoil";

const Fifth = ({ onEnd }: Props) => {
  const [info, setInfo] = useRecoilState(signupState);

  return (
    <SignupContainer>
      <TitleBox>
        <Heavy style={{ color: "#F5835E" }}>가입 완료</Heavy>
        <Title color={"#313131"} margin={"15px 0px 0px 2px"}>
          <Title color={"#F5835E"}>HUGGY</Title>에 가입이 완료되었어요.
        </Title>
        <Subtitle
          color={"#313131"}
          margin={"7px 0px 0px 2px"}
          style={{ textAlign: "left" }}
        >
          {"이제 HUGGY에서,\n당신의 따뜻한 마음을나누어 주세요!"}
        </Subtitle>
      </TitleBox>
      <AutoSizedImage
        width={defaultBtnWidth - 100}
        source={require("@assets/illustrations/signup.png")}
        style={{ marginBottom: 80 }}
      />
      <CustomButton
        title={"Start"}
        onPress={() => (onEnd ? onEnd() : null)}
        style={{ backgroundColor: "#F5835E" }}
      />
    </SignupContainer>
  );
};

export default Fifth;
