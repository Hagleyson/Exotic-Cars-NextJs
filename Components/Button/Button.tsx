import { FC } from "react"
import { ButtonStyle } from "./ButtonStyle"

type propsType = {
    typeStyle?:string;
    secondary?:boolean;
    action?:boolean;
    handleClick?:()=>void;
}
const Button:FC<propsType> =(props)=>{
    return <ButtonStyle typeStyle={props.typeStyle} onClick={props.handleClick} moveSlide={props.action} secondary={props.secondary}>{props.children}</ButtonStyle>
}
export default Button