import { CanvaBackground, MeteredDetail, UserStack } from "../components/Components"
import { TextBold, TextHeavy } from "../components/fonts/TextBox"
import { Break, Component, Object, Pad, SpaceBetween } from "../styles/computed/styles"
import { Courses } from "./modules/Courses"
import { require as require } from "../hooks/require";
import { Lessons } from "./modules/LessonsTable";

export const Home = () => {
 const scrollItems = [
 {title:'All', active: 'dark', textFill:'white'},
 {title:'Design', active: 'grey', textFill:'dark-grey'},
 {title:'Development', active: 'grey', textFill:'dark-grey'},
 {title:'Illustration', active: 'grey', textFill:'dark-grey'},
 {title:'Brand', active: 'grey', textFill:'dark-grey'},
 {title:'Marketing', active: 'grey', textFill:'dark-grey'},
 {title:'Active', active: 'grey', textFill:'dark-grey'},
 {title:'Completed', active: 'grey', textFill:'dark-grey'},
 {title:'Pending', active: 'grey', textFill:'dark-grey'}
 ]

 const courseItems = [
 {category:'Design', title:'UX as Art', active: 'cyan', 
 count: 75},
 {category:'Development', title:'Design to Code', active: 'white', 
 count: 60},
 {category:'Illustration', title:'From Line to Story', active: 'white', 
 count: 50},
 {category:'Brand', title:'Brand DNA', active: 'white', 
 count: 45}
 ]

 const AdUsers = [
 {child: <img src={require('../assets/images/use3.png')} className="w-100 h-100"/>},
 {child: <img src={require('../assets/images/use2.png')} className="w-100 h-100"/>},
 {child: <img src={require('../assets/images/use1.png')} className="w-100 h-100"/>},
 {child: <img src={require('../assets/images/userfemale.png')} className="w-100 h-100"/>},
 {child: <TextHeavy size={12} opacity={.9}>+8</TextHeavy>}
 ]

 return (
 <Component className="flex row w-100 h-100" gap={1}>
 <Component className="w-100 h-100 overflow">
 <Pad py={1.1} className="flex align relative scrollable">
 <Component className="flex align absolute w-100 h-100 scroll-content" gap={.67}>
 {scrollItems.map((item) => (
 <Component className={`scroll-item pointer bg-${item.active} col-${item.textFill}`} py={.5} px={1} radius={100}>{item.title}</Component>
 ))}
 </Component>
 </Pad>
 <Break sy={1}/>
 <Pad sy={15} className="flex align relative scrollable">
 <Component className="flex align absolute w-100 h-100 scroll-content" gap={1}>
 <SpaceBetween/>
 <Courses/>
 <SpaceBetween/>
 </Component>
 </Pad>
 <Break sy={1.5}/>
 <Lessons/>
 <Break sy={6}/>
 </Component>
 
 
 <Component className="h-100 overflow main-side-content">
 <Break sy={.4}/>
 <div className="flex row relative w-100">
 <div className="flex align justify-start w-100">
 <div className="flex align absolute">
 <TextHeavy opacity={1} size={16}>Learning Progress</TextHeavy>
 </div>
 </div>
 <div className="flex align justify-end w-100"><div className="flex align pointer">
 <TextBold opacity={.6}>See all</TextBold>
 </div>
 </div>
 </div>
 <Break sy={1}/>
 <Component className={`flex column pad-object scroll-item bg-white`}>
 {courseItems.slice(0, 3).map((item) => (
 <>
 <MeteredDetail title={item.category} count={item.count}/>
 <Break sy={1}/>
 </>
 ))}
 <div className="flex row align">
 <div className="flex w-100 align-end justify-start">
 <TextBold>Updated 1min ago</TextBold>
 </div>
 <div className="flex w-100 align justify-end">
 <Component className={`scroll-item pointer bg-dark col-white`} py={.5} px={1} radius={.5}>Continue</Component>
 </div>
 </div>
 </Component>

 <Break sy={1.5}/>
 <div className="flex row relative w-100">
 <div className="flex align justify-start w-100">
 <div className="flex align absolute">
 <TextHeavy opacity={1} size={16}>You might like it</TextHeavy>
 </div>
 </div>
 <div className="flex align justify-end w-100"><div className="flex align pointer">
 <TextBold opacity={.6}>See all</TextBold>
 </div>
 </div>
 </div>
 <Break sy={1}/>
 <CanvaBackground>
 <div className="flex">
 <Component className={`pointer bg-cyan col-dark`} py={.35} px={1} radius={100}> <TextHeavy>Design</TextHeavy> </Component>
 </div>
 <Break sy={2}/>
 <TextHeavy size={20} color={'#ffffff'} opacity={1}>Motion Design</TextHeavy>
 <Break sy={1}/>
 <TextBold size={14} color={'#ffffff'} opacity={.8}>
 The motion design course will help you master animation and graphics to create
 vibrant, protessional video content.
 </TextBold>
 <Break sy={3.5}/>
 <div className="flex row relative w-100">
 <div className="flex align justify-start w-100">
 <div className="flex align absolute">
 <Pad className="flex row" px={1}>
 {AdUsers.map((item) => (<UserStack child={item.child}/>))}
 </Pad>
 </div>
 </div>
 <div className="flex align justify-end w-100"><div className="flex align pointer">
 <TextBold opacity={.9} color={'#ffffff'}>They are learning</TextBold>
 </div>
 </div>
 </div>
 <Break sy={1.2}/>
 <Component className={`flex center pointer bg-white col-dark`} py={.7} px={1} radius={.5}>Learn more</Component>
 </CanvaBackground>
 <Break sy={5}/>
 </Component>
 </Component>
 )
}