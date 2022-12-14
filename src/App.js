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
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[300, 3000]} />
      <meshLambertMaterial attach="material" color={"lightblue"} />
    </mesh>
  );
}

const positionsReducer = (state, action) => {
  switch (action.type) {
    case "MOVEBACK":
      if (state.scarabPosition.z < 1500) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(0, 0, 4)
        );
      }
      //state.cameraPosition = state.cameraPosition.add(state.scarabPosition);
      return state;
    case "MOVEFORWARD":
      if (state.scarabPosition.z > 0) {
        state.scarabPosition = state.scarabPosition.add(
          new THREE.Vector3(0, 0, -4)
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
    scarabPosition: new THREE.Vector3(-35, 10, 1500),
    scarabRotation: new THREE.Quaternion(0, 0, -0.4, 0),
  });
  const [simple, setSimple] = useState(0);

  useEffect(() => {
    const downHandler = (e) => {
      //ArrowDown,ArrowUp,ArrowLeft,ArrowRight
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
    //load models

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  //load models
  const models = [
    "/creation.glb",
    "/antena.glb",
    "/egyptian_shop.glb",
    "/contact.glb",
    "/nov21.glb",
    "/sep21.glb",
    "/aug20.glb",
    "/dec19.glb",
    "/jan19.glb",
    "/aug17.glb",
  ];
  useLoader(GLTFLoader, models[0]);
  useLoader(GLTFLoader, models[1]);
  useLoader(GLTFLoader, models[2]);
  useLoader(GLTFLoader, models[3]);
  useLoader(GLTFLoader, models[4]);
  useLoader(GLTFLoader, models[5]);
  useLoader(GLTFLoader, models[6]);
  useLoader(GLTFLoader, models[7]);
  useLoader(GLTFLoader, models[8]);
  useLoader(GLTFLoader, models[9]);
  const intros = [
    {
      title: "01091719127",
      right: 40,
      yPosition: 100,
      background: "#42855B",
      padding: "15px",
      fontSize: "14px",
    },
  ];
  const links = [
    {
      link: "https://www.linkedin.com/in/mazen-soliman",
      icon: "fa-linkedin",
    },
    {
      link: "https://www.facebook.com/mazoonit",
      icon: "fa-square-facebook",
    },
    {
      link: "https://www.youtube.com/channel/UCFJlcq056HjyuWgj6osx9Xg",
      icon: "fa-youtube",
    },
    {
      link: "https://www.twitter.com/mazoonit",
      icon: "fa-twitter",
    },
  ];
  return (
    <>
      {intros.map((intro) => {
        return (
          <div
            style={{
              position: "absolute",
              top: intro.yPosition,
              right: positions.scarabPosition.z < 200 ? intro.right : -400,
              left: intro.left,
              background: intro.background,
              padding: intro.padding,
              borderRadius: "10px",
              opacity: 1,
              width: 300,
              height: 150,
              display: "block",
              zIndex: 100,
              textAlign: "center",
              transition: "0.3s",
            }}
            className="introDiv"
            id="introDiv"
          >
            <a
              href={"https://mazensoliman.me/resume.pdf"}
              target="_blank"
              style={{
                display: "block",
                margin: "5px",
                fontSize: "20px",
                textDecoration: "none",
              }}
              className={"contactIcon"}
            >
              DOWNLOAD RESUME
            </a>
            {links.map(({ link, icon }) => {
              return (
                <a
                  href={link}
                  target="_blank"
                  style={{ margin: "5px", fontSize: "30px" }}
                  className={"contactIcon"}
                >
                  <i className={"fa-brands " + icon}></i>
                </a>
              );
            })}
            <div style={{ textAlign: "right", marginTop: "0px" }}>
              <img src="/bird.png" style={{ height: "50px" }} />
            </div>
          </div>
        );
      })}
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
        frameloop="demand"
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
          {positions.scarabPosition.z > 1300 ? <Intro /> : null}
          {positions.scarabPosition.z < 600 ? (
            <Contact
              positionX={60}
              positionZ={200}
              color={"#42855B"}
              scarabPosition={positions.scarabPosition}
            />
          ) : null}
          {positions.scarabPosition.z < 800 ? (
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

          <Plane />
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
