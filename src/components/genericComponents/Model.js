import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function Model({
  position = new THREE.Vector3(0, 0, 0),
  rotation = new THREE.Vector3(0, 0, -0.4),
  modelPath,
  scale
}) {
  const gltf = useLoader(GLTFLoader, modelPath);
  return (
    <group
      position={position}
      scale={scale}
      rotation={[0, 0, -0.4, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  );
}