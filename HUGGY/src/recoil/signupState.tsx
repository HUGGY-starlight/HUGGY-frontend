import { atom } from "recoil";

export interface SignupInfo {
  type: string;
  agree: Array<number>;
  name: string;
}

const defaultInfo: SignupInfo = {
  type: "user",
  agree: [],
  name: "",
};

export const signupState = atom<SignupInfo>({
  key: "menu",
  default: defaultInfo,
});
