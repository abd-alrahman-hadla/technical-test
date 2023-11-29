import {ISharedApiQueryProps} from "../interfaces";
import {useApiQuery} from "../ApiQuery/useApiQuery";

export const useProductsApi = ({...props}: ISharedApiQueryProps) => {
    return useApiQuery({...props, serviceName: "products"})
}
