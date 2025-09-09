import styled from 'styled-components'

export const AppLayout = styled.div `
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-contenct: center;
  position: absolute;
`

export const SidePanel = styled.div `
  width: ${(props) => props.size}em;
  height: 100%;
  display: flex;
`

export const HeaderCover = styled.div `
  width: ${(props) => props.size}em;
  height: 100%;
`

export const ComputedLayout = styled.div `
  width: ${(props) => props.size}%;
  height: 100%;
`

export const PanelInfo = styled.div `
  width: ${(props) => props.size}%;
  height: 100%;
`

export const UserMount = styled.div `
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
  cursor: pointer;
  border-radius: 10em;
  background-color: #cbd5df;
  border: 1.5px solid #bfc8d2c1;
  background-image: url(${(props) => props.avatar});
  background-size: cover;
  background-position: center;
`

export const Split = styled.div `
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.wallpaper}) !important;
  display: ${(props) => props.display};
  cursor: ${(props) => props.cursor};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin:${(props) => props.margin};
  margin-top:${(props) => props.mt}em;
  overflow:${(props) => props.overflow};
  float:${(props) => props.float};
  margin-left:${(props) => props.ml}em;
  margin-right:${(props) => props.mr}em;
  box-shadow:${(props) => props.shadow};
  outline:${(props) => props.outline};
  border:${(props) => props.border};
  background:${(props) => props.background} !important;
  border-radius: ${(props) => props.radius}em;
  backdrop-filter: blur(${(props) => props.blur}em);
  -webkit-backdrop-filter: blur(${(props) => props.blur}em);
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.px}em;
  padding-right:${(props) => props.px}em;
  z-index:${(props) => props.zIndex};
  position:${(props) => props.position};
  opacity:${(props) => props.opacity};
  top: 0;
  bottom:${(props) => props.bottom}em;
  scale:${(props) => props.scale};
  left: 0;
  right:${(props) => props.right}em;
  background-image: url(${(props) => props.bgImg});
  text-align:${(props) => props.textAlign};
`

export const Icon = styled.img`
  display: ${(props) => props.display};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width:${(props) => props.size}em;
  position:${(props) => props.position};
  margin-top:${(props) => props.mt}em;
  float:${(props) => props.float};
  margin-left:${(props) => props.ml}em;
  margin-right:${(props) => props.mr}em;
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.pl}em;
  padding-right:${(props) => props.px}em;
  z-index:${(props) => props.zIndex};
  position:${(props) => props.position};
  scale:${(props) => props.scale};
  cursor:${(props) => props.cursor};
  opacity:${(props) => props.opacity};
  top:${(props) => props.top}em;
  bottom:${(props) => props.bottom}em;
  left:${(props) => props.botom}em;
  transform:${(props) => props.transform}em;
  left:${(props) => props.left}em;
  right:${(props) => props.right}em;
  border-radius: ${(props) => props.radius}em;
`

export const Text = styled.text`
  position:${(props) => props.position};
  font-size:${(props) => props.size}em;
  opacity:${(props) => props.opacity};
  scale:${(props) => props.scale};
  color: ${(props) => props.color};
  z-index: ${(props) => props.index};
  line-height: ${(props) => props.lnh};
  letter-spacing: ${(props) => props.ltsp}em;
`

export const View = styled.div`
  display: ${(props) => props.display};
  cursor: ${(props) => props.cursor};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width:${(props) => props.size}%;
  height:${(props) => props.size}%;
  position: fixed;
  margin:${(props) => props.margin};
  margin-top:${(props) => props.mt}em;
  overflow:${(props) => props.overflow};
  float:${(props) => props.float};
  margin-left:${(props) => props.ml}em;
  margin-right:${(props) => props.mr}em;
  box-shadow:${(props) => props.shadow};
  outline:${(props) => props.outline};
  border:${(props) => props.border};
  background:${(props) => props.fill} !important;
  border-radius: ${(props) => props.radius}em;
  backdrop-filter: blur(${(props) => props.blur}em);
  -webkit-backdrop-filter: blur(${(props) => props.blur}em);
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.px}em;
  padding-right:${(props) => props.px}em;
  z-index:${(props) => props.index};
  position:${(props) => props.position};
  opacity:${(props) => props.opacity};
  top: 0;
  bottom:${(props) => props.bottom}em;
  scale:${(props) => props.scale};
  left: 0;
  gap: ${(props) => props.gap}em;
  right:${(props) => props.right}em;
  background-image: url(${(props) => props.bgImg});
  text-align:${(props) => props.textAlign};
`

export const Object = styled.div`
  display: ${(props) => props.display};
  cursor: ${(props) => props.cursor};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width:${(props) => props.size}vmin;
  min-width:${(props) => props.minSize}em;
  height:${(props) => props.height}vmin;
  position:${(props) => props.position};
  margin:${(props) => props.margin};
  margin-top:${(props) => props.mt}em;
  overflow:${(props) => props.overflow};
  float:${(props) => props.float};
  margin-left:${(props) => props.ml}em !important;
  margin-right:${(props) => props.mr}em !important;
  box-shadow:${(props) => props.shadow};
  outline:${(props) => props.outline};
  border:${(props) => props.border}px solid;
  background:${(props) => props.background};
  border-radius: ${(props) => props.radius}em;
  backdrop-filter: blur(${(props) => props.blur}em);
  -webkit-backdrop-filter: blur(${(props) => props.blur}em);
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.px}em;
  padding-right:${(props) => props.px}em;
  z-index:${(props) => props.zIndex};
  position:${(props) => props.position};
  opacity:${(props) => props.opacity};
  top:${(props) => props.top}em;
  bottom:${(props) => props.bottom}em;
  scale:${(props) => props.scale};
  left:${(props) => props.botom}em;
  left:${(props) => props.left}em;
  right:${(props) => props.right}em;
  gap: ${(props) => props.gap}em;
  text-align:${(props) => props.textAlign};
  background-position: center;
  background-size: cover;
  background-image: url(${(prop) => prop.wallpaper});
`

export const  Component = styled.div`
  display: ${(props) => props.display};
  cursor: ${(props) => props.cursor};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  width:${(props) => props.size}%;
  height:${(props) => props.sy}em;
  position:${(props) => props.position};
  margin:${(props) => props.margin};
  margin-top:${(props) => props.mt}em;
  overflow:${(props) => props.overflow};
  float:${(props) => props.float};
  margin-left:${(props) => props.ml}em !important;
  margin-right:${(props) => props.mr}em !important;
  box-shadow:${(props) => props.shadow};
  outline:${(props) => props.outline};
  border:${(props) => props.border}px solid transparent;
  background:${(props) => props.background};
  border-radius: ${(props) => props.radius}em;
  backdrop-filter: blur(${(props) => props.blur}em);
  -webkit-backdrop-filter: blur(${(props) => props.blur}em);
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.px}em;
  padding-right:${(props) => props.px}em;
  z-index:${(props) => props.index};
  position:${(props) => props.position};
  opacity:${(props) => props.opacity};
  top:${(props) => props.top}em;
  bottom:${(props) => props.bottom}em;
  scale:${(props) => props.scale};
  left:${(props) => props.botom}em;
  left:${(props) => props.left}em;
  right:${(props) => props.right}em;
  gap: ${(props) => props.gap}em;
  text-align:${(props) => props.textAlign};
  background-position: center;
  background-size: cover;
  background-image: url(${(prop) => prop.wallpaper});
`

export const Break = styled.div `
  height: ${(props) => props.sy}em;
`

export const HrX = styled.div `
  width: 100%;
  height: 1.2px;
  border-radius: 1em;
  background: #E6E6E6;
`

export const HrY = styled.div `
  width: 1.2px;
  height: ${(props) => props.sy}em;
  border-radius: 1em;
  background: #E6E6E6;
  opacity: ${(props) => props.opacity};
`

export const Pad = styled.div `
  width:${(props) => props.size}%;
  height: ${(props) => props.sy}em;
  gap: ${(props) => props.gap}em;
  bottom: ${(props) => props.bottom}em;
  background:${(props) => props.background};
  padding-left: ${(props) => props.px}em;
  padding-right: ${(props) => props.px}em;
  padding-top: ${(props) => props.py}em;
  padding-bottom: ${(props) => props.py}em;
  border-radius: ${(props) => props.radius}em;
  border-bottom-left-radius: ${(props) => props.rbtl}em;
  border-bottom-right-radius: ${(props) => props.rbtr}em;
  border: ${(props) => props.bd}em solid;
  opacity: ${(props) => props.opacity};
  z-index:${(props) => props.zIndex};
  background-position: center;
  transition: all ${(prop) => prop.ease}s ease;
  background-size: cover;
  backdrop-filter: blur(${(props) => props.blur}em);
  -webkit-backdrop-filter: blur(${(props) => props.blur}em);
  background-image: url(${(prop) => prop.wallpaper});
`

export const SpaceBetween = styled.div `
  height: ${(props) => props.sy}em;
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.px}em;
  padding-right:${(props) => props.px}em;
`

export const Button = styled.button `
  border: unset;
  padding-top:${(props) => props.py}em;
  padding-bottom:${(props) => props.py}em;
  padding-left:${(props) => props.px}em;
  padding-right:${(props) => props.px}em;
  border-radius: ${(props) => props.radius}em;
`

export const PortalWindow = styled.div `
  width: 27em;
  height: 35em;
  border-radius: 1.5em;
  background: #0F1113;
  border-top: 1.5px solid #ffffff15;
  border-bottom: 1.5px solid #ffffff07;
  border-left: 1.5px solid #ffffff07;
  border-right: 1.5px solid #ffffff07;
  box-shadow: 0 0 4px 0 #0000007e;
  backdrop-filter: blur(3em);
  -webkit-backdrop-filter: blur(3em);
`

export const Portalgrid = styled.div `
  z-index: -1;  
  width: inherit;
  height: inherit;
  position: absolute;
`

export const Meter = styled.div `
  width:${(props) => props.count}%;
  height:${(props) => props.sy}%;
`

export const TextInput = styled.input `
  width: ${prop => prop.sizes}%;
  height: ${prop => prop.py}em;
  opacity: ${(props) => props.opacity};
  &::placeholder {
  font-size: .9em;
  font-family: fontSemiBold;
  }
`