import { FC } from "react"
import { MainStyle } from "./MainStyle"

const Main:FC =(props)=>{
    return <MainStyle >{props.children}</MainStyle>
}
export default Main