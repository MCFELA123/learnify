import { IconBell, IconLyrics, IconMenu, IconSearch } from "../icons/Icons"
import { Component, SpaceBetween } from "../styles/computed/styles"
import { ObjectPad, UserFill } from "./Components"
import { TextBold, TextHeavy } from "./fonts/TextBox"
import { SearchBar } from "./Searchbar"
import { require as require } from "../hooks/require";

export const Navbar = () => {
const openSideBar = () => {
 const sidebar = document.querySelector('.side-bar')
 sidebar.setAttribute('style', 'transform: translateX(0);box-shadow: 0 3.5em 2.5em 0 #00000020')
}
return (
 <Component className="flex row align navbar w-100" py={.5} px={1}>
 <Component className="flex row align justify-start w-100" gap={.5}>
 <div className="none side-bar-helper" onClick={openSideBar}><ObjectPad child={<IconMenu size={'70%'}/>}/></div>
 <TextBold opacity={.6}>Dashboard</TextBold>
 <div className="flex column justify-end align">
 <TextHeavy opacity={1} size={17}>My Courses</TextHeavy>
 <img src={require("../assets/images/doodle.png")} className="absolute" style={{transform:'translateY(.6em)'}} width={60}/>
 </div>
 </Component>
 <Component className="flex align justify-end w-100" gap={1}>
 <SearchBar radius={.5}/>
 <ObjectPad size={1.85} radius={.35} child={<IconLyrics size={'65%'}/>}/>
 <ObjectPad size={1.85} radius={.35} child={<IconBell size={'75%'}/>}/>
 <UserFill fill={require("../assets/images/userfemale.png")} title={'Jane Doe'}/>
 </Component>
 </Component>
)
}