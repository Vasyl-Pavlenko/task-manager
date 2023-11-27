import { FC } from "react";
import { ResponsibilitiesForm } from "..";
import sass from "./Responsibilities.module.scss";

export const Responsibilities: FC = () => {
  return (
    <div className={sass.responsibilitiesBody}>
      <div className={sass.responsibilitiesHeder}>
        <h2 className={sass.title}>
          Обязаности
        </h2>
      </div>
      
      <ResponsibilitiesForm />
    </div>
  )
};
