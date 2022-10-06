import { useState, useEffect } from "react";
import { Text3D, Center } from "@react-three/drei";
import robotofont from "../../fonts/robotofont.json";
export default function Contact({ positionX, positionZ, color }) {
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
            Contact Me.
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
    </group>
  );
}
