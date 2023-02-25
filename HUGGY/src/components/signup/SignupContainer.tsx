import styled from "styled-components/native";

interface Props {
  children: React.ReactNode;
}

const SignupContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 20px;
`;

export default SignupContainer;
