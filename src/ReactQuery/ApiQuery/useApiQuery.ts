import {useQuery} from "react-query";
import {apiRequest} from "../config";
import {IApiQueryProps} from "../interfaces";

const fetchFunction = (serviceName: string, params: any, itemId?: string) => {
    return apiRequest({
        url: !!itemId ? `${serviceName}/${itemId}` : serviceName,
        params: !!itemId ? {} : {...params}
    })
}

export const useApiQuery = ({...props}: IApiQueryProps) => {
    const {getAllParams, detailsItemId, getDetailsOptions, getAllOptions, serviceName} = props
    const getAllItems = useQuery([serviceName], () => fetchFunction(serviceName, getAllParams), {
        staleTime: 100000,
        cacheTime: 100000,
        ...getAllOptions
    })
    const getDetails = useQuery([serviceName, detailsItemId], () => fetchFunction(serviceName, getAllParams, detailsItemId), {
        ...getDetailsOptions
    })
    return {
        getAllItems,
        getDetails
    }
}