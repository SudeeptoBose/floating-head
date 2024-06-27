import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <Canvas>
      <color args={['#000000']} attach={'background'}/>
      <Experience/>
    </Canvas>
    <Footer/>
    </>
  )
}

export default App
