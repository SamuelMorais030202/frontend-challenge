import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import { mountQuery } from "@/utils/graphql";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useDeferredValue } from "react";
import { useFilter } from "./useFilter";

const fetche = (query : string) : AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL as string,
    { query }
  );
}

export function useProducts() {
  const { type, priority, search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetche(query),
    queryKey: ['products', type, priority]
  });

  const products = data?.data?.data?.allProducts;
  const filterProducts = products?.filter((product) => product
  .name.toLowerCase().includes(searchDeferred.toLowerCase()));

  return {
    data: filterProducts,
  }
}