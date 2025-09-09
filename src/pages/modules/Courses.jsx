import { TextHeavy, TextMed } from "../../components/fonts/TextBox"
import { Break, Component } from "../../styles/computed/styles"
export const Courses = () => {
 const courseItems = [
 {category:'Design', title:'UX as Art', active: 'cyan', 
 description: ' Master the principles of user experience through a creative. human-centered lens and your dad and mum will like it and reward you wholsomely.'},
 {category:'Development', title:'Design to Code', active: 'white', 
 description: ' Master the principles of user experience through a creative. human-centered lens and your dad and mum will like it and reward you wholsomely.'},
 {category:'Illustration', title:'From Line to Story', active: 'white', 
 description: 'Develop storytelling through expressive linework and character desian and your dad and mum will like it and reward you wholsomely.'},
 {category:'Brand', title:'Brand DNA', active: 'white', 
 description: 'Build a unique and consistent brand identity from the ground up and your dad and mum will like it and reward you wholsomely.'}
 ]
 return (
 <>
 {courseItems.map((item, index) => (
 <Component className={`flex column pad-object course-object scroll-item bg-${item.active}`} key={index}>
 <div>
 <Component className={`scroll-item pointer bg-theme col-white`} py={.35} px={1} radius={100}>
 <TextHeavy opacity={1}>{item.category}</TextHeavy>
 </Component>
 </div>
 <Component className="flex column justify-end h-100">
 <Break sy={4}/>
 <TextHeavy size={20} opacity={1}>{item.title}</TextHeavy>
 <Break sy={1}/>
 <TextMed size={12}>
 {item.description}
 </TextMed>
 <Break sy={3}/>
 </Component>
 </Component>
 ))}
 </>
 )
}