import {IFooterSocialMediaItem} from "./interfances";
import {RiFacebookFill, RiInstagramFill, RiTwitterFill} from "react-icons/ri";

const iconStyle = "text-[16px] text-white"

export const footerItems: string[] = ["Menu", "Store Locations", "Privacy Policy", "Terms & Conditions", "Contact"]

export const footerSocialMedia: IFooterSocialMediaItem[] = [
    {
        href: "",
        icon: <RiFacebookFill className={iconStyle}/>
    },
    {
        href: "",
        icon: <RiTwitterFill className={iconStyle}/>
    },
    {
        href: "",
        icon: <RiInstagramFill className={iconStyle}/>
    },
]
