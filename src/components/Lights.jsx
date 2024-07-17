import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

const Lights = () => {

	const pointLight1 = useRef()
	const pointLight2 = useRef()

	const colorCode = '#1E566C'
	const colorCode2 = '#ff0000'

	useFrame((state, delta) => {
		easing.damp3(pointLight1.current.position, [Math.sin(state.clock.elapsedTime) + 2, 0, Math.sin(state.clock.elapsedTime) + 2], 0.25, delta)
		easing.damp3(pointLight2.current.position, [-Math.cos(state.clock.elapsedTime) * 2, 1, Math.sin(state.clock.elapsedTime) + 3], 0.25, delta)
	})
	return (
		<>
			<pointLight
				ref={pointLight1}
				position={[2, 0, 2]}
				castShadow
				shadow-normalBias={0.04}
				args={[colorCode]}
				intensity={5}
				decay={1}
				shadow-camera-far={50}
				shadow-camera-top={10}
				shadow-camera-right={10}
				shadow-camera-bottom={-10}
				shadow-camera-left={-10}
				shadow-mapSize={[2048, 2048]} />

			<pointLight
				ref={pointLight2}
				position={[-2, 0, 2]}
				castShadow
				shadow-normalBias={0.04}
				args={[colorCode2]}
				intensity={5}
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