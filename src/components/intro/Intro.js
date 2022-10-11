import { Text3D, Center } from "@react-three/drei";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
import robotofont from "../../fonts/robotofont.json";
export default function Intro() {
  //let color = "#6a994e";
  let color = "#168aad";
  color = "#396EB0";
  return (
    <>
      {/*
      <group position={[-120, 10, 1300]}>
        <Text3D
          font={robotofont}
          size={30}
          height={10}
          lineHeight={0.5}
          letterSpacing={-0.025}
        >
          {`Mazoonit!`}
          {/*<meshPhongMaterial attach="material" color={"#555"} />
          <meshNormalMaterial />
        </Text3D>
      </group>
    */}
      {/*
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
            <meshPhongMaterial attach="material" color={color} />
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
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      <group position={[120, 100, 1380]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={10}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {` Computer Scientist.
                `}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
    
      <group position={[-120, 40, 1400]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={15}
            height={0}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`Mazoonit.`}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      */}
      <Model
        modelPath={"/contentCreatorGreen.glb"}
        position={new THREE.Vector3(-120,70, 1350)}
        scale={[18, 18, 18]}
        rotation={[0, 0, 0]}
      />
      <Model
        modelPath={"/egyptianGeek.glb"}
        position={new THREE.Vector3(-140, 0, 1400)}
        scale={[18, 18, 18]}
        rotation={[0, 0, 0]}
      />
      <Model
        modelPath={"/computerScientist.glb"}
        position={new THREE.Vector3(120, 50, 1400)}
        scale={[18, 18, 18]}
        rotation={[0, 0, 0]}
      />
      <Model
        modelPath={"/fullstack.glb"}
        position={new THREE.Vector3(120, 30, 1300)}
        scale={[20, 20, 20]}
        rotation={[0, 0, 0]}
      />
      <Model
        modelPath={"/nefertiti_bust.glb"}
        position={new THREE.Vector3(-30, 20, 1400)}
        scale={[80, 80, 80]}
        rotation={[0, 0, 0]}
      />
      <Model
        modelPath={"/egyptian_shop.glb"}
        position={new THREE.Vector3(120, 0, 1350)}
        scale={[0.1, 0.1, 0.1]}
        rotation={[0, 180, 0]}
      />
      <Model
        modelPath={"/antena.glb"}
        position={new THREE.Vector3(120, 60, 500)}
        scale={[1, 1, 1]}
        rotation={[0.3, 5, 0]}
      />
    </>
  );
}
