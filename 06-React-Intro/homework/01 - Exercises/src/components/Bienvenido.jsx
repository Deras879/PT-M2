import React from "react";
import Botones from "./Botones"

const studentName = "Deras";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <div>
      <h1>Mi proyecto de React</h1>
      <h3>{studentName}</h3>
      <ol>
          {techSkills.map((skill => {
            return <li>{skill}</li>
          }))}
      </ol>
      <Botones props={alerts}/>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
