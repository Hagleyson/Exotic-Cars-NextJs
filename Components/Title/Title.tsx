import { FC } from "react"
import { TitleStyle } from "./TitleStyle"

type propsType ={
    type?:string
    onClick?:()=>void
}
const Title:FC<propsType> =(props)=>{
    return <TitleStyle onClick={props.onClick} type={props.type}>{props.children}</TitleStyle>
}

export default Title