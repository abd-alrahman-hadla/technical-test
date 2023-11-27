import {Typography} from 'antd';
import {ITextProps} from "./interfaces";

const Text = ({className, ...props}: ITextProps) => {
    return (
        <Typography.Text className={"text-white " + className} {...props}/>
    )

}
export default Text;
