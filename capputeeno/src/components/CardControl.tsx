import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";
import { CardIcon } from "./icons/ShoppingBag";

const CardCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px; 
`

const Container = styled.div`
  position: relative;
`

export function CardControl() {
  const { updateLocalStorage, value } = useLocalStorage('card-items', [1, 8]);


  return (
    <div>
      <CardIcon />
      {value.length && <CardCount>{value.length}</CardCount>}
    </div>
  )
}