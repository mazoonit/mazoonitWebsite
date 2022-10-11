import { useState, useEffect } from "react";
import { Text3D, Center } from "@react-three/drei";
import robotofont from "../../fonts/robotofont.json";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
export default function Contact({
  positionX,
  positionZ,
  color,
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
        modelPath={"/contact.glb"}
        position={new THREE.Vector3(positionX, -50, positionZ)}
        scale={[35, 35, 35]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}
