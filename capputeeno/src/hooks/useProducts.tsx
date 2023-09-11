import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetche = () : AxiosPromise<ProductsFetchResponse> => {
  return axios.post(
    process.env.NEXT_PUBLIC_API_URL as string,
    {
      query: `query {
          allProducts {
            id
            name
            price_in_cents
            image_url
          }
        }
      `
    }
  );
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetche,
    queryKey: ['products']
  });

  return {
    data: data?.data?.data?.allProducts,
  }
}