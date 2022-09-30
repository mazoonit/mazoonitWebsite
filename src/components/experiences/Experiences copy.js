import { Text3D, Center } from "@react-three/drei";
import Model from "../genericComponents/Model.js";
import * as THREE from "three";
import robotofont from "../../fonts/robotofont.json";
function Experience({
  from,
  to,
  title,
  company,
  positionX,
  positionZ,
  color,
  scarabPosition,
}) {
  return (
    <>
      <group position={[positionX, 50, positionZ]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={10}
            height={3}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`${from} - ${to}`}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
      <group position={[positionX, 35, positionZ]}>
        <Center top center>
          <Text3D
            font={robotofont}
            size={5}
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
            size={5}
            height={1}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {`${company}`}
            <meshPhongMaterial attach="material" color={color} />
          </Text3D>
        </Center>
      </group>
    </>
  );
}
export default function Experiences({ scarabPosition }) {
  const experiences = [
    {
      from: "Nov 2021",
      to: "Now",
      title: "Software Engineer",
      company: "Egyptian Armed Forces",
      positionX: 120,
      positionZ: 1200,
      color: "#FA7070",
    },
    {
      from: "Sep 2021",
      to: "Nov 2021",
      title: "Software Engineer",
      company: "Spiritude",
      positionX: -120,
      positionZ: 1100,
      color: "#6E85B7",
    },
    {
      from: "Aug 2020",
      to: "Sep 2021",
      title: "Full-Stack Web Developer",
      company: "Kernelz",
      positionX: 120,
      positionZ: 1000,
      color: "#7FB77E",
    },
    {
      from: "Dec 2019",
      to: "May 2020",
      title: "Full-Stack Web Developer",
      company: "Etgo",
      positionX: -120,
      positionZ: 900,
      color: "#FFAB4C",
    },
    {
      from: "Jan 2019",
      to: "Dec 2019",
      title: "Full-Stack Web Developer",
      company: "Freelance",
      positionX: 120,
      positionZ: 800,
      color: "#3E8E7E",
    },
    {
      from: "Aug 2017",
      to: "Jan 2018",
      title: "Software Engineer Intern",
      company: "Pinerium",
      positionX: -120,
      positionZ: 700,
      color: "#396EB0",
    },
  ];
  return (
    <>
      {experiences.map((experience) => {
        if (scarabPosition.z - experience.positionZ < 200) {
          return <Experience {...experience} />;
        }
      })}
    </>
  );
}
