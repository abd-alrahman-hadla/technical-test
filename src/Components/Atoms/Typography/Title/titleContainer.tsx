import {Typography} from "antd";
import {ITitleProps} from "./interfaces";

const Title = ({...props}: ITitleProps) => {
    return (
        <Typography.Title{...props}/>
    );
};

export default Title;
