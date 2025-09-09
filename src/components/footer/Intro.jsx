import { Break, Component, HrY, Pad, SpaceBetween, Text } from "../../styles/computed/styles"

export const Intro = () => {
  return (
  <Pad className="flex align">
  <div className="flex align w-100">
  <Pad className="flex align" px={1.5}><Text className="semi-bold" size={1.5}>Lanafy&trade;</Text></Pad>
  <HrY sy={3} opacity={.45}/><SpaceBetween px={1}/>
  <Pad className="flex-column align">
  <div><Text className="heavy" size={1.15} ltsp={-.035}>Create and listen to your songs. All hassle-free.</Text></div>
  <Break sy={.3}/>
  <div><Text size={1.05} opacity={.7}>Plus your entire music library on all your devices. 1 month free then $10.99/month.</Text></div>
  </Pad>
  </div>
  <Component className="flex align justify-start absolute" right={2}>
  <Pad className="flex align bg-white pointer" px={2.5} py={.4} radius={.4}>
  <Text className="col-dark semi-bold" size={1}>Try It Now</Text>
  </Pad>
  </Component>
  </Pad>
  )
}