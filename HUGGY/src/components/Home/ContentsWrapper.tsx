import { ViewProps } from "react-native";
import styled from "styled-components/native";
import StoreCard from "./StoreCard";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

const dummyStores = [
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/564x/18/7e/f9/187ef9254c813ea42aa28bc978aabb22.jpg",
    counts: 8,
    rested: true,
  },
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/564x/40/42/6b/40426b4e130dfcde60d4bda66f197029.jpg",
    counts: 8,
    rested: false,
  },
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/564x/97/79/be/9779beaa6990edac6d93e2e042b0b38c.jpg",
    counts: 8,
    rested: false,
  },
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/736x/f1/b3/64/f1b3644bd3cdd5224639277bd21f6e16.jpg",
    counts: 8,
    rested: true,
  },
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/564x/f9/55/2d/f9552d3a693813e390905d2d413e37d2.jpg",
    counts: 8,
    rested: false,
  },
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/564x/c1/25/59/c125599eac59eaecf5ef354dc6eb80e8.jpg",
    counts: 8,
    rested: true,
  },
  {
    name: "스타벅스 시흥 장곡점",
    img: "https://i.pinimg.com/564x/a8/a8/f5/a8a8f537510fbaefbca31e4a20fe70a8.jpg",
    counts: 8,
    rested: true,
  },
];

const ContentsWrapper = ({ title, subtitle, ...props }: Props) => {
  return (
    <Container {...props}>
      <TitleBox>
        <Title>{title}</Title>
        <Subtitle style={{ marginTop: 2 }}>{subtitle}</Subtitle>
      </TitleBox>
      <CardWrapper>
        {dummyStores.map((store, idx) => (
          <StoreCard {...store} key={`${store.name}_${idx}`} />
        ))}
      </CardWrapper>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 25px;
`;

const TitleBox = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: #414141;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #414141;
`;

const CardWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default ContentsWrapper;
