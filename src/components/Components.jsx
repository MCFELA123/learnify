import { IconSong, IconVolumeMax } from "../icons/Icons"
import { Break, Component, Pad, SpaceBetween, Text } from "../styles/computed/styles"
import { TextBold, TextHeavy } from "./fonts/TextBox"
import { require as require } from "../hooks/require";

export const ObjectPad = ({child, radius=.3, size=1.65}) => {
 return (
 <Component className="flex center object-pad pointer" style={{width:`${size}em`,height:`${size}em`,borderRadius:`${radius}em`}}>{child}</Component>
 )
}

export const UserFill = ({fill, title}) => {
 return (
 <Pad className="flex align pointer" py={0}>
 <Pad className='flex align w-100'>
 <Pad className="flex align w-inh bg-grey-hover" radius={.4}>
 <Pad style={{width:'2em',height:'2em'}} radius={5} className='flex center overflow-hidden' background={'#e2d4ffff'}>
 <img src={fill} width={'80%'} height={'80%'} />
 </Pad>
 <SpaceBetween px={.3}/>
 <Pad className='flex column align'>
 <Text className='semi-bold' size={.9}>{title}</Text>
 </Pad>
 </Pad>
 </Pad>
 </Pad>
 )
}

export const MeteredDetail = ({title, count}) => {
 return (
 <Component size={100} className="flex column">
 <Pad className="flex row align">
 <div className="flex align justify-start w-100"><TextHeavy opacity={1}>{title}</TextHeavy></div>
 <div className="flex align justify-end w-100"><TextHeavy opacity={.85}>{count}%</TextHeavy></div>
 </Pad>
 <Break sy={.5}/>
 <MeterBar count={count}/>
 </Component>
 )
}

export const MeterBar = ({count}) => {
 return (
 <Component size={100} sy={2} className="flex relative overflow-hidden meter" index={1} radius={.4}>
 <div className="absolute w-inh h-inh grid-bg"/>
 <Component className="h-inh bg-theme" size={count} index={1}/>
 </Component>
 )
}

export const CanvaBackground = ({children}) => {
 return (
 <Component className="flex relative overflow-hidden bg-theme" radius={.9}>
 <Component className="flex center w-100 h-100 absolute overflow-hidden">
 <div className="absolute" style={{transform:'translateX(-7em) translateY(-30%) rotate(-40deg)',top:0}}><IconVolumeMax size={250} opacity={.4}/></div>
 <div className="absolute" style={{transform:'translateX(7em) translateY(30%) rotate(20deg)',bottom:0}}><IconSong size={250} fill="#ffffff" opacity={.4}/></div>
 </Component>
 <Component py={1} px={1} index={1}>{children}</Component>
 </Component>
 )
}

export const UserStack = ({size=2, border=2.5, child=<img src={require('../assets/images/userfemale.png')} className="w-100 h-100" alt=""/>}) => {
 return (
 <Component className="flex center overflow-hidden bg-white bd-theme" style={{width:`${size}em`,height:`${size}em`,marginLeft:'-1em'}} border={border} radius={100}>
 {child}
 </Component>
 )
}