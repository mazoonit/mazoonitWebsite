import { useState, useEffect } from "react";
import { Text3D, Center } from "@react-three/drei";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
import robotofont from "../../fonts/robotofont.json";
export default function Content({ positionX, positionZ, color }) {
  const [bool, setBool] = useState(0);
  const [size, setSize] = useState(20);
  return (
    <group
      onClick={() => {
        setBool((prevValue) => {
          console.log(prevValue);
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
      <group position={[positionX, 50, positionZ]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={size}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            Creation.
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      <Model
        modelPath={"/egyptian_shop.glb"}
        position={new THREE.Vector3(-120, 0, 600)}
        scale={[0.1, 0.1, 0.1]}
        rotation={[0, 0, 0]}
      />
      <Model
        modelPath={"/antena.glb"}
        position={new THREE.Vector3(65, 50, 500)}
        scale={[1, 1, 1]}
        rotation={[0.3, 5, 0]}
      />
    </group>
  );
}
