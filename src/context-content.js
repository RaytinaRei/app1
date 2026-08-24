import React from "react"
import { useContext } from "./context"

export default function Content() {
let user = React.useContext(userContext)  
    
const contentStyle = {
    backgroundColor:'#ddd',
    textAlign:'center',
    margin:10,
    padding:10

}
        return (
            <div style={contentStyle}>
                <h1>Hello{user}</h1>
            </div>
        )
    }
