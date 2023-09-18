"use client";

import { BackButton } from "@/components/BackButton";
import { CartItem } from "@/components/cart/CartItem";
import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/Product";
import { formatValue } from "@/utils/formatCurrency";
import styled from "styled-components";

const Divider = styled.span`
  width: 100%;
  height: 1px;
  margin: 8px auto;
  padding: 0px;
  background: var(--shapes);
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 24px;
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`

const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background: white;

    h3 {
      font-weight: 600;
      font-size: 20px;
      color: var(--text-dark-2);
      text-transform: uppercase;
      margin-bottom: 30px;
    }
`

const TotalItem = styled.div<{ isBold: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`

const ShopBtn = styled.button`
    color: white;
    border-radius: 4px;
    background: green;
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`

export default function CardPage () {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', []);

  const calculateTotal = (value : ProductInCart[]) => {
    return value.reduce((sur, iten) => sur += (iten.price_in_cents * iten.quantity), 0);
  }

  const cartTotal = formatValue(calculateTotal(value));
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formatValue(calculateTotal(value) + deliveryFee)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
        if(item.id !== id) return item
        return { ...item, quantity: quantity }
    })
    updateLocalStorage(newValue);
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if(item.id !== id) return item
    });

    updateLocalStorage(newValue);
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
        <BackButton navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{ cartTotal }</span>
          </p>
          <CartList>
            {value.map((item : ProductInCart) => (
              <CartItem
                product={item}
                key={item.name}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatValue(deliveryFee)}</p>
          </TotalItem>
          <Divider/>
          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>FINALIZAR COMPRA</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}