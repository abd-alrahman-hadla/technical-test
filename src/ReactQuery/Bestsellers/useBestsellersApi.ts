import {ISharedApiQueryProps} from "../interfaces";
import {useApiQuery} from "../ApiQuery/useApiQuery";

export const useBestsellersApi = ({...props}: ISharedApiQueryProps) => {
    return useApiQuery({...props, serviceName: "bestsellers"})
}
