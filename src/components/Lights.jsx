import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

const Lights = () => {

	const pointLight1 = useRef()
	const pointLight2 = useRef()

	const colorCode = '#1E566C'
	const colorCode2 = '#ff0000'

	useFrame((state, delta) => {
		console.log(delta + 1)
		easing.damp3(pointLight1.current.position, [Math.sin(state.clock.elapsedTime) *-4, -1, Math.cos(state.clock.elapsedTime) + 4], 0.25, delta + 0.5)
		easing.damp3(pointLight2.current.position, [ 0 , Math.cos(state.clock.elapsedTime) * 2, 3 ], 0.25, delta)
	})
	return (
		<>
			<pointLight
				ref={pointLight1}
				castShadow
				shadow-normalBias={1.4}
				args={[colorCode]}
				intensity={500}
				decay={1}
				shadow-camera-far={50}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
				shadow-mapSize={[2048, 2048]} />

			<pointLight
				ref={pointLight2}
				castShadow
				shadow-normalBias={1.4}
				args={[colorCode2]}
				intensity={200}
				decay={1}
				shadow-camera-far={50}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
				shadow-mapSize={[2048, 2048]} />
		</>
	)
}

export default Lights