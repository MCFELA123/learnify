import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar"
import { Component, View } from "../styles/computed/styles"
import { useThemeContext } from "../styles/computed/themes"
import { Home } from "./Home"

export const Homescreen = () => {
const { parentBackground } = useThemeContext()
 return (
 <View size={100} className='flex row' fill={parentBackground}>
 <Component className="side-bar overflow-hidden">
 <Sidebar/>
 </Component>
 <Component className="home-view flex column">
 <div className="flex align w-100"><Navbar/></div>
 <Component className="h-100" px={1} py={.7}>
 <Routes>
 <Route path="/" element={<Home/>}/>
 </Routes>
 </Component>
 </Component>
 </View>
 )
}