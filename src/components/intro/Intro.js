import { Text3D, Center } from "@react-three/drei";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
import robotofont from "../../fonts/robotofont.json";
export default function Intro() {
  return (
    <>
      <group position={[-120, 15, 1300]}>
        <Text3D
          font={robotofont}
          size={30}
          height={10}
          lineHeight={0.5}
          letterSpacing={-0.025}
        >
          {`Mazoonit!`}
          {/*<meshPhongMaterial attach="material" color={"#555"} />*/}
          <meshNormalMaterial />
        </Text3D>
      </group>
      <group position={[120, 90, 1300]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={10}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`Content Creator.`}
            <meshPhongMaterial attach="material" color={"#ffcf40"} />
          </Text3D>
        </Center>
      </group>
      <group position={[-120, 100, 1360]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={15}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`Fullstack Web Developer!
                `}
            <meshPhongMaterial attach="material" color={"#ffcf40"} />
          </Text3D>
        </Center>
      </group>
      <group position={[120, 50, 1380]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={10}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {` Computer Science Graduate.
                `}
            <meshPhongMaterial attach="material" color={"#ffcf40"} />
          </Text3D>
        </Center>
      </group>
      <group position={[-120, 40, 1400]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={15}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`Egyptian.`}
            <meshPhongMaterial attach="material" color={"#ffcf40"} />
          </Text3D>
        </Center>
      </group>

      <Model
        modelPath={"/akh.glb"}
        position={new THREE.Vector3(0, 45, 1400)}
        scale={[0.1, 0.1, 0.1]}
      />
    </>
  );
}
