import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"


function App() {

  return (
    <>
    <Canvas>
      <color args={['#000000']} attach={'background'}/>
      <Experience/>
    </Canvas>
    </>
  )
}

export default App
