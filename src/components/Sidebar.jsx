import { Break, Component, Pad, SpaceBetween, Text } from "../styles/computed/styles"
import { Favicon } from "./Favicon"
import { TextHeavy } from "../components/fonts/TextBox"
import { ObjectPad } from "./Components"
import { IconMenu, IconClock, IconHeart, IconMicrophone, IconPlayCircle, IconRadio, IconCreate, IconSong, IconPlaylist, IconAlbum, IconArrow, IconDashboard, IconAnalytics, IconCourses, IconTranscript, IconCalendar, IconTranscriptV2, IconCertificate, IconCard } from "../icons/Icons"
import { Link } from "react-router-dom"
import { useState } from "react"

export const Sidebar = () => {
 const [ listDisplay, setListDisplay ] = useState('block')

 const sections = [
 {
 title: "Dashboard",
 items: [
 { icon: <IconDashboard size={16} />, text: "Dashboard", href: "/" },
 { icon: <IconAnalytics size={16} />, text: "Analytics", href: "/" 
 }]},

 {
 title: "Academic",
 items: [
 { icon: <IconCourses size={16} />, text: "My Courses", href: "/" },
 { icon: <IconClock size={16} />, text: "Class Schedule", href: "/"},
 { icon: <IconTranscript size={16} />, text: "Grades & Transcript", href: "/" },
 { icon: <IconAlbum size={16} />, text: "Assignments", href: "/"},
 { icon: <IconCalendar size={16} />, text: "Academic Calendar", href: "/"}
 ]},

 {
 title: "Documents",
 items: [
 { icon: <IconTranscriptV2 size={16}/>, text: "Official Transcript", href: "/" },
 { icon: <IconCertificate size={16}/>, text: "Certificates", href: "/" }
 ]},

 {
 title: "Financial",
 items: [
 { icon: <IconCard size={16}/>, text: "Tution Fees", href: "/" },
 ]},

 ]

 const handleClickParent = (e) => {
 const parent = e.currentTarget.parentElement
 if (parent) {
  parent.click()
 }}

 const closeSideBar = () => {
 const sidebar = document.querySelector('.side-bar')
 sidebar.setAttribute('style', 'transform: translateX(initial);box-shadow: 0 3.5em 2.5em 0 #00000000')
 }

 return (
 <Component className="flex column">
 <Component className="flex row align navbar" py={.5} px={1}>
 <Component className="flex row align w-100" gap={.5}>
 <Favicon/><TextHeavy size={16} opacity={1} ltsp={-.1}>Learnify</TextHeavy>
 </Component>
 <div className="none align side-bar-helper" onClick={closeSideBar}><ObjectPad child={<IconArrow rotate={-180} size={'70%'}/>}/></div>
 <div className="flex align side-bar-default-helper" onClick={closeSideBar}><ObjectPad child={<IconMenu size={'70%'}/>}/></div>
 </Component>

 <div className="flex center">
 <Pad className="column relative overflow w-100" px={1}>
 {sections.map((section, sectionIndex) => (
 <div key={section.title}>
 <Break sy={1} />
 <Component className="flex row align" opacity={0.47}>
 <div className="flex align w-100">
 <Text size={0.8} className="semi-bold">{section.title}</Text>
 </div>
 <div className="flex center pointer">
 <IconArrow size={15}/>
 </div>
 </Component>
 <Break sy={0.3}/>

 {section.items.map((item, itemIndex) => {
 const id = `sec${sectionIndex}-item${itemIndex}`
 return (
 <Component className="card-list" key={id} display={listDisplay}>
 <input type="radio" name="card-lists" id={id} className="hidden" checked/>
 <label htmlFor={id} className="flex align">
 {item.href ? (
 <Link to={item.href} onClick={handleClickParent} className="flex align w-100">
 <Pad px={.5} py={.4} className="flex align w-100">
 {item.icon}
 <SpaceBetween px={0.2} />
 <Text opacity={0.75}>{item.text}</Text>
 </Pad>
 </Link>
 ) : (
 <Pad px={1} className="flex align">
 {item.icon}
 <SpaceBetween px={0.2} />
 <Text opacity={0.75}>{item.text}</Text>
 </Pad>
 )}
 </label>
 </Component>
 )
 })}
 
 </div>
 ))}
 <Break sy={10}/>
 </Pad>
 </div>
 </Component>
)
}