import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #191920;
  padding: 10px 20px;
  color: #fff;
  flex-direction: row;
`;

export const ContainerCart = styled.View`
  background: #fff;
  border-radius: 4px;
  flex-basis: 100%;
  padding: 10px;
`;

export const Texto = styled.Text`
  color: #fff;
`;

export const ProdImg = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ContainerProd = styled.View`
  flex-direction: column;
`;

export const ContainerProdF1 = styled.View`
  flex-direction: row;
  align-items: center;
  align-content: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ProdDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
  margin-left: 10px;
  flex-grow: 1;
`;
export const ProdTitle = styled.Text`
  font-size: 13px;
  margin-bottom: -4px;
`;
export const ProdPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProdControls = styled.View`
  background: #dfdfdf;
  border-radius: 4px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex: 0 1 300px;

  margin: 15px 0;
`;
export const StockCtrl = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  text-align: center;
`;
export const ProductControlButton = styled.TouchableOpacity``;

export const SubTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Separator = styled.View`
  height: 1px;
  background: #999;
  margin: 10px 0;
`;

export const MsgEmpty = styled.Text`
  margin: 20px auto;
  font-size: 20px;
  color: #888;
`;

export const ContainerTotal = styled.View`
  background: #888;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Total = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
export const FinishBtn = styled(RectButton)`
  background: #7159c1;
  padding: 10px;
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const FinishBtnText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin-right: 10px;
  text-transform: uppercase;
`;
