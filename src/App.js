import React, { useRef, useState, useEffect, useReducer } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import {
  MeshWobbleMaterial,
  softShadows,
  OrbitControls,
} from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import { Stars } from "@react-three/drei";
import { Suspense } from "react";
import { Physics, usePlane } from "@react-three/cannon";
import Arrows from "./components/arrows/Arrows";
import Intro from "./components/intro/Intro";
import EgyptianScarab from "./components/egyptianScarab/EgyptianScarab";
import Experiences from "./components/experiences/Experiences";
import ExperienceDev from "./components/experiences/ExperienceDev";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contact/ContactForm";
import Sky from "./components/sky/sky";
import Content from "./components/contentCreation/Content";
import ContentCard from "./components/contentCreation/ContentCard";

import { Html, useProgress } from "@react-three/drei";

function Loader({}) {
  const { progress } = useProgress();
  return (
    <>
      <div class="loader">
        <span class="loader__element"></span>
        <span class="loader__element"></span>
        <span class="loader__element"></span>
        <p>
          <strong>
            <em>{progress.toFixed(0)} %</em>
          </strong>
        </p>
        <p style={{ position: "absolute", bottom: 10 }}>@MAZOONIT</p>
      </div>
    </>
  );
}

softShadows();

function Plane({ scarabPosition }) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[300, 3000]} />
      <meshLambertMaterial
        attach="material"
        color={scarabPosition.z > 700 ? "lightblue" : "lightgreen"}
      />
    </mesh>
  );
}

const positionsReducer = (state, action) => {
  switch (action.type) {
    case "MOVEBACK":
      if (state.scarabPosition.z < 1500) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(0, 0, 2)
        );
      }
      //state.cameraPosition = state.cameraPosition.add(state.scarabPosition);
      return state;
    case "MOVEFORWARD":
      if (state.scarabPosition.z > 0) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(0, 0, -2)
        );
      }
      return state;
    case "MOVELEFT":
      if (state.scarabPosition.x >= -138) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(-2, 0, 0)
        );
      }
      return state;
    case "MOVERIGHT":
      if (state.scarabPosition.x <= 138) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(2, 0, 0)
        );
      }
      return state;
    case "FLY":
      if (state.scarabPosition.y < 200) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(0, 10, 0)
        );
      }
      return state;
    case "FALL":
      if (state.scarabPosition.y > 10) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(0, -10, 0)
        );
      }
      return state;

    default:
      return state;
  }
};

function CanvasBased({ loading }) {
  const [currentExperience, setCurrentExperience] = useState({
    flag: false,
  });
  const [positions, positionsDispatch] = useReducer(positionsReducer, {
    cameraPosition: new THREE.Vector3(10, 300, 300),
    scarabPosition: new THREE.Vector3(0, 10, 1500),
    scarabRotation: new THREE.Quaternion(0, 0, -0.4, 0),
  });
  const [simple, setSimple] = useState(0);

  useEffect(() => {
    const downHandler = (e) => {
      //ArrowDown,ArrowUp,ArrowLeft,ArrowRight
      console.log(loading);
      if (e.key === "ArrowDown") {
        let elem = document.getElementById("down");
        elem.classList.add("pressed");
        setSimple((prevValue) => {
          return (prevValue += 1);
        });
        positionsDispatch({ type: "MOVEBACK" });
      } else if (e.key === "ArrowUp") {
        let elem = document.getElementById("up");
        elem.classList.add("pressed");
        setSimple((prevValue) => {
          return (prevValue += 1);
        });
        positionsDispatch({
          type: "MOVEFORWARD",
        });
      } else if (e.key === "ArrowLeft") {
        let elem = document.getElementById("left");
        elem.classList.add("pressed");
        setSimple((prevValue) => {
          return (prevValue += 1);
        });
        positionsDispatch({ type: "MOVELEFT" });
      } else if (e.key === "ArrowRight") {
        let elem = document.getElementById("right");
        elem.classList.add("pressed");
        setSimple((prevValue) => {
          return (prevValue += 1);
        });
        positionsDispatch({ type: "MOVERIGHT" });
      } else if (e.key == " ") {
        setSimple((prevValue) => {
          return (prevValue += 1);
        });
        positionsDispatch({ type: "FLY" });
      } else if (e.key == "Enter") {
        setSimple((prevValue) => {
          return (prevValue += 1);
        });
        positionsDispatch({ type: "FALL" });
      }
    };
    const upHandler = () => {
      document.getElementById("up").classList.remove("pressed");
      document.getElementById("down").classList.remove("pressed");
      document.getElementById("left").classList.remove("pressed");
      document.getElementById("right").classList.remove("pressed");
    };
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return (
    <>
      <ContentCard
        scarabPosition={positions.scarabPosition}
        color={"#42855B"}
      />
      <ContactForm
        scarabPosition={positions.scarabPosition}
        color={"#42855B"}
      />
      <ExperienceDev
        currentExperience={currentExperience}
        scarabPosition={positions.scarabPosition}
      />
      <Arrows />
      <Canvas
        shadowMap
        shadows
        colorManagement
        pixelRatio={window.devicePixelRatio}
        style={{ position: "absolute", top: 0 }}
      >
        <Stars />
        <pointLight position={[-10, 0, -20]} intensity={1} />
        <pointLight position={[0, 10, 0]} intensity={10} />
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[10, 0, 0]}
          intensitry={1.6}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight
          castShadow
          position={[-500, -10, -500]}
          intensitry={1.6}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight
          castShadow
          position={[5, 500, 10]}
          intensitry={1.6}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Physics>
          {positions.scarabPosition.z > 1290 ? <Intro /> : null}
          {positions.scarabPosition.z < 600 ? (
            <Contact
              positionX={60}
              positionZ={200}
              color={"#42855B"}
              scarabPosition={positions.scarabPosition}
            />
          ) : null}
          {positions.scarabPosition.z < 820 ? (
            <Content
              positionX={0}
              positionZ={500}
              color={"#42855B"}
              scarabPosition={positions.scarabPosition}
            />
          ) : null}
          <Experiences
            scarabPosition={positions.scarabPosition}
            setCurrentExperience={setCurrentExperience}
          />
          {/*<Experiences />*/}
          <EgyptianScarab
            position={positions.scarabPosition}
            positions={positions}
          />

          <Plane scarabPosition={positions.scarabPosition} />
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
}
function App() {
  return (
    <>
      <Sky />
      <Suspense r3f fallback={<Loader />}>
        <CanvasBased />
      </Suspense>
    </>
  );
}

export default App;
