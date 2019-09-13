import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContainerCart,
  ProdImg,
  ContainerProd,
  ProdDetails,
  ProdTitle,
  ProdPrice,
  ProdControls,
  StockCtrl,
  ProductControlButton,
  ProductAmount,
  SubTotal,
  Separator,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <ContainerCart>
        <ContainerProd>
          <ProdImg
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
            }}
            title="Tenis"
          />
          <ProdDetails>
            <ProdTitle>Tenis' name</ProdTitle>
            <ProdPrice>$144.00</ProdPrice>
          </ProdDetails>
          <Icon name="delete-forever" size={24} color="#7159c1" />

          <ProdControls>
            <StockCtrl>
              <ProductControlButton onPress={() => {}}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
              <ProductAmount value={String(1)} />
              <ProductControlButton onPress={() => {}}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
            </StockCtrl>

            <SubTotal>$144.00</SubTotal>
          </ProdControls>
        </ContainerProd>
        <Separator />

        <ContainerProd>
          <ProdImg
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
            }}
            title="Tenis"
          />
          <ProdDetails>
            <ProdTitle>Tenis' name</ProdTitle>
            <ProdPrice>$144.00</ProdPrice>
          </ProdDetails>
          <Icon name="delete-forever" size={24} color="#7159c1" />

          <ProdControls>
            <StockCtrl>
              <ProductControlButton onPress={() => {}}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
              <ProductAmount value={String(1)} />
              <ProductControlButton onPress={() => {}}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
            </StockCtrl>

            <SubTotal>$144.00</SubTotal>
          </ProdControls>
        </ContainerProd>
        <Separator />

        <ContainerProd>
          <ProdImg
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
            }}
            title="Tenis"
          />
          <ProdDetails>
            <ProdTitle>Tenis' name</ProdTitle>
            <ProdPrice>$144.00</ProdPrice>
          </ProdDetails>
          <Icon name="delete-forever" size={24} color="#7159c1" />

          <ProdControls>
            <StockCtrl>
              <ProductControlButton onPress={() => {}}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
              <ProductAmount value={String(1)} />
              <ProductControlButton onPress={() => {}}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
            </StockCtrl>

            <SubTotal>$144.00</SubTotal>
          </ProdControls>
        </ContainerProd>
        <Separator />

        <ContainerProd>
          <ProdImg
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
            }}
            title="Tenis"
          />
          <ProdDetails>
            <ProdTitle>Tenis' name</ProdTitle>
            <ProdPrice>$144.00</ProdPrice>
          </ProdDetails>
          <Icon name="delete-forever" size={24} color="#7159c1" />

          <ProdControls>
            <StockCtrl>
              <ProductControlButton onPress={() => {}}>
                <Icon name="remove-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
              <ProductAmount value={String(1)} />
              <ProductControlButton onPress={() => {}}>
                <Icon name="add-circle-outline" size={20} color="#7159c1" />
              </ProductControlButton>
            </StockCtrl>

            <SubTotal>$144.00</SubTotal>
          </ProdControls>
        </ContainerProd>
        <Separator />
      </ContainerCart>
    </Container>
  );
}
