import {UseQueryOptions} from "react-query";

export interface IUseQueryOptions extends Omit<UseQueryOptions<any, any, any, any>, "queryKey" | "queryFn"> {
}