import {UseQueryOptions} from "react-query";

export interface IUseQueryOptions extends Omit<UseQueryOptions<any, any, any, any>, "queryKey" | "queryFn"> {
}

export interface IApiQueryProps {
    serviceName: string
    getAllParams?: {
        page: number,
        limit: number
    }
    detailsItemId?: string
    getAllOptions?: IUseQueryOptions
    getDetailsOptions?: IUseQueryOptions
}

export interface ISharedApiQueryProps extends Omit<IApiQueryProps, "serviceName"> {

}