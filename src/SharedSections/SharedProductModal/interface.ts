import {ISharedProductCardProps} from "../SharedProductCard/interface";

export interface ISharedProductModalProps {
    data: ISharedProductCardProps
    isOpen: boolean
    onCancel: () => void
}