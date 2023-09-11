'use client';

import { styled } from "styled-components";
import { FilterByPriority } from "./FilterByPriority";
import { FilterByType } from "./FilterByType";

const FilterContaier = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`;

export function FilterBar() {
  return (
    <FilterContaier>
      <FilterByType />
      <FilterByPriority />
    </FilterContaier>
  )
}