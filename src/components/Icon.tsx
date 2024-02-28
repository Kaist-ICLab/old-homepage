"use client"
import { Icon } from "@iconify/react";

interface IconWrapperProps {
    icon: string,
    [key: string]: any;
}

const IconWrapper: React.FC<IconWrapperProps> = ({icon, ...rest}) => {
    return <Icon icon ={icon} {...rest} />
}
export default IconWrapper;