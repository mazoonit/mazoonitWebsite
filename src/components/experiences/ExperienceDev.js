import { useSelector, useDispatch } from "react-redux";
import "./experiences.css";

function Wrapper({ component }) {
  return component();
}
export default function ExperienceDev({ scarabPosition }) {
  const currentExperience = useSelector((state) => {
    return state.experience.experience;
  });
  let {
    company,
    from,
    to,
    flag,
    color,
    title,
    positionZ,
    positionX,
    component,
  } = currentExperience;
  let condition = flag && scarabPosition && scarabPosition.z - positionZ < 70;
  let conditionI = flag && scarabPosition && scarabPosition.z - positionZ < 80;
  return (
    <>
      <div
        id="experienceDev"
        style={{
          height: "400px",
          width: "500px",
          borderRadius: "5px",
          backgroundColor: color,
          padding: "20px",
          paddingTop: "4px",
          position: "absolute",
          right: positionX == -120 && conditionI ? 100 : null,
          left: positionX == 120 && conditionI ? 100 : null,
          top: condition ? 150 : -500,
          opacity: 0.9,
          zIndex: 5,
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <img src="/apy.png" style={{ height: "40px", marginBottom: "5px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <h4>{title}</h4>
          <h5>
            <em>
              {"  "}
              {company}
            </em>
          </h5>
          <h6>
            <em>
              <strong>
                {from} - {to}
              </strong>
            </em>
          </h6>
        </div>
        {component ? <Wrapper component={component} /> : null}
      </div>
    </>
  );
}
