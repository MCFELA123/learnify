import { IconSearch } from "../icons/Icons"
import { Component, SpaceBetween, TextInput } from "../styles/computed/styles"

export const SearchBar = ({radius, size=13}) => {
 return (
 <Component className="flex align search-bar overflow-hidden" style={{width:`${size}em`}} radius={radius} py={.15} border={.1} px={.5}>
 <IconSearch size={18}/><SpaceBetween px={.2}/>
 <TextInput sizes={100} opacity={.6} placeholder="Search" className="bg-unset bd-unset outline-unset w-100"/>
 </Component>
 )
}