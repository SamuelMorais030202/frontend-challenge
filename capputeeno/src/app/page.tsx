"use client";

import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import { FilterBar } from "@/components/FilterBar";
import { ProductsList } from "@/components/ProductsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}

export default Home;