import { useState, useEffect } from "react";
import { Text3D, Center } from "@react-three/drei";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
import robotofont from "../../fonts/robotofont.json";
import { useSelector, useDispatch } from "react-redux";
import { setExperience } from "../../redux/slices/experience";
import { experiences } from "./experiencesObject";

function Experience({
  from,
  to,
  title,
  company,
  modelName,
  positionX,
  positionZ,
  color,
}) {
  const [bool, setBool] = useState(0);
  const [size, setSize] = useState(10);
  return (
    <group
      onClick={() => {
        setBool((prevValue) => {
          if (prevValue == true) {
            setSize(10);
            return !prevValue;
          } else {
            setSize(12);
            return !prevValue;
          }
        });
      }}
    >
      {/*
      <group position={[positionX, 50, positionZ]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={size}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`${from} - ${to}`}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      */}

      <Model
        modelPath={`/${modelName}`}
        position={[positionX, 0, positionZ]}
        scale={[20, 20, 20]}
        rotation={[0, 0, 0]}
      />
      {/*
      <group position={[positionX, 35, positionZ]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={size - 5}
            height={1}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`${title} @`}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      <group position={[positionX, 28, positionZ]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={size - 5}
            height={1}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`${company}`}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      */}
    </group>
  );
}
export default function Experiences({ scarabPosition, setCurrentExperience }) {
  const [renderedExperience, setRenderedExperiences] = useState([]);
  const dispatch = useDispatch();

  useState(() => {
    setRenderedExperiences([]);
    let flag = false;
    dispatch(setExperience({ flag: false }));
    //  setCurrentExperience({ flag: false });
    experiences.map((experience) => {
      if (
        scarabPosition.z - experience.positionZ > 5 &&
        scarabPosition.z - experience.positionZ < 200
      ) {
        if (!flag) {
          dispatch(setExperience({ ...experience, flag: true }));
        }
        flag = true;
      }
      setRenderedExperiences((prevValue) => {
        let n = prevValue;
        n.push(experience);
        return n;
      });
    });
  }, [scarabPosition]);
  return (
    <>
      {renderedExperience.map((experience) => {
        return (
          <>
            <Experience {...experience} />
          </>
        );
      })}
    </>
  );
}
