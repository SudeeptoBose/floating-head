import { Environment, EnvironmentMap, OrbitControls } from '@react-three/drei'
import React from 'react'
import { Head } from './components/Head'
import Lights from './components/Lights'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const Experience = () => {
  return (
    <>
        {/* <OrbitControls/> */}
        <Head position={[0,1,0]} scale={[10,10,10]}/>
        <Lights/>
        <Environment preset='sunset' environmentIntensity={0.01}/>
    </>
  )
}

export default Experience