import React, { useState } from "react";
import ReactDOM from "react-dom";
import { extend, Canvas } from "react-three-fiber";
import { Text } from "troika-three-text";
import fonts from "./fonts";

//import "./styles.css";

/* ======================

This demo shows text rendering performed by the troika-three-text library. 
In this case we use Text directly within a `react-three-fiber` scene.

Also see the "drei" addon library for react-three-fiber, which formalizes
this integration: https://github.com/react-spring/drei#%EF%B8%8F-text-

*/

// Register Text as a react-three-fiber element
extend({ Text });

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function Test() {
  // State:
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    font: "Philosopher",
    fontSize: 12,
    color: "lightgreen",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial",
  });

  // Handlers:

  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
    ]);
  };

  return (
    <group position={[-120, 10, 1300]}>
      <text
        {...opts}
        text={text}
        font={fonts[opts.font]}
        anchorX="center"
        anchorY="middle"
      >
        <meshPhongMaterial attach="material" color={opts.color} />
      </text>

      <pointLight position={[-100, 0, -160]} />
      <pointLight position={[0, 0, -170]} />
      <pointLight position={[100, 0, -160]} />
    </group>
  );
}
