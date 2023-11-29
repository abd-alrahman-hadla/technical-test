export enum BlankDivsPlacementEnum {
    TopLeft = "top-left",
    TopRight = "top-right",
    BottomLeft = "bottom-left",
    BottomRight = "bottom-right"
}

export const blankDivsPlacementStyle = {
    [BlankDivsPlacementEnum.TopLeft]: "top-0 left-[10px]",
    [BlankDivsPlacementEnum.TopRight]: "top-0 right-[10px]",
    [BlankDivsPlacementEnum.BottomLeft]: "bottom-0 left-[10px]",
    [BlankDivsPlacementEnum.BottomRight]: "bottom-0 right-[10px]",
}