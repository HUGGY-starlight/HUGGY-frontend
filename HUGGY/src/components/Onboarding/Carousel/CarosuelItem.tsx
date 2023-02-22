import styled from "styled-components/native";

interface Props {
  children: React.ReactNode;
}

const CarouselItem = ({ children }: Props) => {
  return <ContentBox>{children}</ContentBox>;
};

const ContentBox = styled.View`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default CarouselItem;
