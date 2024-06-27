import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Head } from './components/Head'
import Lights from './components/Lights'

const Experience = () => {
  return (
    <>
        {/* <OrbitControls/> */}
        <Head position={[0,1,0]} scale={[10,10,10]}/>
        <Lights/>
    </>
  )
}

export default Experience