import { UserStack } from "../../components/Components"
import { TextBold, TextHeavy } from "../../components/fonts/TextBox"
import { Break, Component, Pad, SpaceBetween } from "../../styles/computed/styles"
import { require as require } from "../../hooks/require";

export const Lessons = () => {
const lessonTableItems = [
 {id: 1, lesson: 'Color & Typography in Design', teacher: {name:'Vanessa Douglas', image:<img src={require("../assets/images/use1.png")} className="w-100 h-100"/>}, duration: 32},
 {id: 2, lesson: 'Frontend Development', teacher: {name:'Michael Mcfela', image:<img src={require("../assets/images/use3.png")} className="w-100 h-100"/>}, duration: 16},
 {id: 3, lesson: 'Creative Advertising: BBA', teacher: {name:'Rume Anonymous', image:<img src={require("../assets/images/userfemale.png")} className="w-100 h-100"/>}, duration: 45},
 {id: 4, lesson: 'color & Typography in Design', teacher: {name:'Kobi Potts', image:<img src={require("../assets/images/use2.png")} className="w-100 h-100"/>}, duration: 52},
 {id: 6, lesson: 'color & Typography in Design', teacher: {name:'Vanessa Douglas', image:<img src={require("../assets/images/userfemale.png")} className="w-100 h-100"/>}, duration: 26},
 {id: 5, lesson: 'color & Typography in Design', teacher: {name:'Koby Brian', image:<img src={require("../assets/images/userfemale.png")} className="w-100 h-100"/>}, duration: 38},
]
 return (
 <Component className={`flex column pad-object scroll-item bg-white`}>
 <div className="flex row relative w-100">
 <div className="flex align justify-start w-100">
 <div className="flex align absolute">
 <TextHeavy opacity={1} size={16}>My Lessons</TextHeavy>
 </div>
 </div>
 <div className="flex align justify-end w-100"><div className="flex align pointer">
 <TextBold opacity={.6}>View all lessons</TextBold>
 </div>
 </div>
 </div>
 <Break sy={.3}/>
 <TextBold opacity={.5}>Complete data about your lesson history</TextBold>
 <Break sy={1}/>
 <Component className="flex column table w-100 bd-grey overflow-hidden" border={1} radius={.7}>
 <Component className="flex row align bg-space bd-bottom-grey" border={1} px={1} py={.8} gap={3}>
 <Component className="flex align w-100"><TextHeavy>Lesson</TextHeavy></Component>
 <Component className="flex align w-100"><TextHeavy>Teacher</TextHeavy></Component>
 <Component className="flex align w-50"><TextHeavy>Duration</TextHeavy></Component>
 </Component>

 {lessonTableItems.slice(0, 5).map((item) => (
 <Component className="flex row align bd-bottom-grey" border={1} px={1} py={.8} gap={3} key={item.id}>
 <Component className="flex align w-100"><TextHeavy>{item.lesson}</TextHeavy></Component>
 <Component className="flex row align w-100" gap={.5}>
 <SpaceBetween/>
 <UserStack size={1.6} border={0} child={item.teacher.image}/>
 <TextHeavy>{item.teacher.name}</TextHeavy>
 </Component>
 <Component className="flex align w-50"><TextHeavy>{item.duration} min</TextHeavy></Component>
 </Component>
 ))}

 </Component>
</Component>
 )
}