import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";
export default function EgyptianScarab({
  position = new THREE.Vector3(0, 0, 0),
  positions,
}) {
  const gltf = useLoader(GLTFLoader, "/b.glb");
  let config = {
    fov: 100,
    position: positions.cameraPosition,
    aspect: window.innerWidth / window.innerHeight,
    near: 1,
    far: 10000,
    //lookat: [0, 0, 0],
  };
  return (
    <group
      position={position}
      scale={[0.05, 0.05, 0.05]}
      rotation={[0, 0, -0.4, 0]}
    >
      <PerspectiveCamera makeDefault {...config} />
      <primitive object={gltf.scene} />
    </group>
  );
}
