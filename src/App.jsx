import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Footer from "./components/Footer"
import { Loader } from "@react-three/drei"


function App() {

	return (
		<>
			<Canvas>
				<color args={['#000000']} attach={'background'} />
				<Experience />
			</Canvas>
			<Loader/>
			<Footer />
		</>
	)
}

export default App
