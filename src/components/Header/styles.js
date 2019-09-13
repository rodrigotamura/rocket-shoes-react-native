import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../../assets/logo.png';

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonHome = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const CartContainer = styled.TouchableOpacity`
  align-content: center;
  flex-direction: row;
`;
export const Badge = styled.Text`
  background: #ff0000;
  border-radius: 9px;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 2px;
  min-width: 18px;
  min-height: 18px;
  text-align: center;
`;
