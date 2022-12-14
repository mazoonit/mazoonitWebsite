import React, { useRef, useState } from "react";
//R3F
import { useFrame } from "react-three-fiber";
// Deai - R3F
import { MeshWobbleMaterial } from "@react-three/drei";
//Components
// Styles
// React Spring
import { useSpring, a } from "@react-spring/three";
import { MeshBasicMaterial } from "three";

export default function SpinningMesh({ position, color, speed, args }) {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  //useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
}
