import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  background-color: #191920;
  flex: 1;
  padding: 10px 0;
  color: #fff;
  flex-direction: row;
`;

export const ContainerProduct = styled.View`
  background: #fff;
  border-radius: 4px;
  flex: 1;
  max-width: 300px;
  margin: 30px;
  padding: 15px;
`;

export const ProductImg = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
  margin: 15px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const ProductPrice = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonAdd = styled.TouchableOpacity`
  margin-top: auto;
  background: #7159c1;
  flex-direction: row;
  border-radius: 4px;
  height: 40px;
  align-content: center;
`;
export const ProductAmount = styled.View`
  flex-direction: row;
  width: 53px;
  justify-content: center;
  align-items: center;
  background: ${darken(0.09, '#7159c1')};
  border-radius: 4px;
`;
export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;
export const ButtonAddText = styled.Text`
  color: #fff;
  flex-shrink: 1;
  align-self: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  text-align: center;
`;

export const LoadingProducts = styled.View`
  flex: 1 1;
  align-items: center;
  justify-content: center;
`;
