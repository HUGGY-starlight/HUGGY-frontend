import styled from "styled-components/native";
import { ViewProps } from "react-native";

interface Props extends ViewProps {
  img: string;
  name: string;
  counts: number;
  rested: boolean;
}

const StoreCard = ({ img, name, counts, rested, ...props }: Props) => {
  return (
    <StoreBox {...props}>
      <StoreImg source={{ uri: img }} />
      <StoreInfo>
        <TitleBar>
          <RestedNotice
            style={{ backgroundColor: rested ? "#F5835E" : "#AFAFAF" }}
          />
          <StoreTitle style={{ marginLeft: 5 }}>{name}</StoreTitle>
        </TitleBar>
        <StoreSubtitle style={{ marginTop: 3 }}>
          이번 달 허깅 그릇
        </StoreSubtitle>
        <StoreTitle style={{ fontWeight: "700" }}>{counts} 그릇</StoreTitle>
      </StoreInfo>
    </StoreBox>
  );
};

const StoreBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  margin-top: 15px;
`;

const StoreImg = styled.Image`
  width: 100%;
  height: 105px;
  border-radius: 10px;
`;

const StoreInfo = styled.View`
  padding: 0px 5px;
  margin-top: 13px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleBar = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const RestedNotice = styled.View`
  width: 11px;
  height: 11px;
  border-radius: 100%;
`;

const StoreTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #414141;
`;

const StoreSubtitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #414141;
`;

export default StoreCard;
