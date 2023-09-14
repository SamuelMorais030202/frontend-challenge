import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Backward } from "./icons/Backward";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
`
interface IBackButton{
  navigate: string;
}

export function BackButton({ navigate } : IBackButton) {
  const router = useRouter();

  const handleClick = () => {
    router.push(navigate);
  }

  return (
    <Button onClick={handleClick}>
      <Backward />
      Voltar
    </Button>
  )
}