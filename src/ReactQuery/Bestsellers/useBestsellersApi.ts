import {useQuery} from "react-query";
import {apiRequest} from "../config";
import {IUseQueryOptions} from "../interfaces";

const fetchBestsellers = (params: any, itemId?: string) => {
    return apiRequest({
        url: !!itemId ? `bestsellers/${itemId}` : `bestsellers`,
        params: !!itemId ? {} : {...params}
    })
}

export const useBestsellersApi = (getAllParams: { page: number, limit: number }, detailsItemId?: string, getAllOptions?: IUseQueryOptions, getDetailsOptions?: IUseQueryOptions) => {
    const getAllItems = useQuery(["bestsellers"], () => fetchBestsellers(getAllParams), {
        ...getAllOptions
    })
    const getDetails = useQuery(["bestsellers", detailsItemId], () => fetchBestsellers(getAllParams, detailsItemId), {
        ...getDetailsOptions
    })
    return {
        getAllItems,
        getDetails
    }
}