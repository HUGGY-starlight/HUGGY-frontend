import styled from "styled-components/native";
import { ViewProps } from "react-native";
import AutoSizedImage from "@components/common/AutoSizedImage";
import moment from "moment";

export interface Achievement {
  name: string;
  icon: string;
  date: string;
}

interface Props extends ViewProps {
  achives: Array<Achievement>;
}

const Achieve = ({ achives, ...props }: Props) => {
  return (
    <Container {...props}>
      {achives.map((ac, idx) => (
        <Badge key={`${ac.name}_${idx}`}>
          <Icon>
            <AutoSizedImage source={{ uri: ac.icon }} height={30} />
          </Icon>
          <InfoBox>
            <Title>{ac.name}</Title>
            <Subtitle>{`${moment(ac.date).format(
              "YYYY. MM. DD"
            )} 획득`}</Subtitle>
          </InfoBox>
        </Badge>
      ))}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 62px;
  border-radius: 10px;
  background-color: #f5f5f5;
  margin-top: 10px;
  padding: 0px 10px;
`;

const Icon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #4e4e4e;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #818181;
`;

export default Achieve;
