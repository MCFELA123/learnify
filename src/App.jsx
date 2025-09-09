import './App.css'
import { Homescreen } from './pages/HomeScreen'
import { ThemeContext } from './styles/computed/themes'

function App() {
return (
 <ThemeContext>
 <Homescreen/>
 </ThemeContext>
)
}

export default App