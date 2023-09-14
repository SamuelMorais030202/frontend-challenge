"use client";

import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 34px 168px;
  }
`

const Home = () => {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  )
}

export default Home;