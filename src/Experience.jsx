import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Head } from './components/Head'

const Experience = () => {
  return (
    <>
        <OrbitControls/>
        <Head scale={[10,10,10]}/>
    </>
  )
}

export default Experience