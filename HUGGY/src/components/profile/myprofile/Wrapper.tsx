import styled from "styled-components/native";
import { ViewProps } from "react-native";

interface Props extends ViewProps {
  title: string;
  children: React.ReactNode;
}

const Wrapper = ({ title, children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.Text`
  width: 100%;
  text-align: start;
  font-size: 16px;
  font-weight: 900;
  color: #414141;
`;

export default Wrapper;
