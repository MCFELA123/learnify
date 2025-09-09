import { Component } from "../styles/computed/styles"
import { require as require } from "../hooks/require";

export const Favicon = () => {
return (
 <Component className="flex center overflow-hidden favicon">
 <div className="flex center favicon favico">
 <img src={require("../assets/images/favicon.png")} alt="favicon" width={33} height={33}/>
 </div>
 </Component>
)
}