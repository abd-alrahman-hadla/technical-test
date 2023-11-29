import {useQuery} from "react-query";
import {apiRequest} from "../config";
import {IUseQueryOptions} from "../interfaces";

const fetchProducts = (params: any) => {
    return apiRequest({
        url: `products`,
        params
    })
}

export const useProductsApi = (getAllParams: { page: number, limit: number }, options: IUseQueryOptions) => {
    return useQuery("products", () => fetchProducts(getAllParams), {
        ...options
    })
}