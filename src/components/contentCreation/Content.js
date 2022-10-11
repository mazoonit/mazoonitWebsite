import { useState, useEffect } from "react";
import { Text3D, Center } from "@react-three/drei";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
import robotofont from "../../fonts/robotofont.json";
export default function Content({
  positionX,
  positionZ,
  color,
  scarabPosition,
}) {
  const [bool, setBool] = useState(0);
  const [size, setSize] = useState(20);
  return (
    <group
      onClick={() => {
        setBool((prevValue) => {
          if (prevValue == true) {
            setSize(20);
            return !prevValue;
          } else {
            setSize(25);
            return !prevValue;
          }
        });
      }}
    >
      <Model
        modelPath={"/creation.glb"}
        position={new THREE.Vector3(positionX, -50, positionZ)}
        scale={[35, 35, 35]}
        rotation={[0, 0, 0]}
      />
      {scarabPosition.z < 1000 ? (
        <Model
          modelPath={"/egyptian_shop.glb"}
          position={new THREE.Vector3(-120, 0, 600)}
          scale={[0.1, 0.1, 0.1]}
          rotation={[0, 0, 0]}
        />
      ) : null}
      <Model
        modelPath={"/antena.glb"}
        position={new THREE.Vector3(75, 53, 480)}
        scale={[1, 1, 1]}
        rotation={[0.3, 5, 0]}
      />
    </group>
  );
}
