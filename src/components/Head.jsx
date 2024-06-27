/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/head.glb --transform -o src/components/Head.jsx -k -K -r public 
Files: public/head.glb [416.54KB] > D:\Sudeepto\floating-head\src\components\head-transformed.glb [414.14KB] (1%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Head(props) {
  const { nodes, materials } = useGLTF('/../src/components/head-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh name="BSurfaceMesh" geometry={nodes.BSurfaceMesh.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/../src/components/head-transformed.glb')