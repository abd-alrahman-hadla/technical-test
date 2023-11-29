import {ReactNode} from "react";

export type TBlankDivsPlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right"

export interface ISharedBannerCardProps {
    backgroundColor: string
    imageSrc: string
    imagePlacement: "left" | "right"
    anotherSection: ReactNode
    blankDivsNumber: number
    blankDivsColor: string
    blankDivsPlacement: TBlankDivsPlacement
}