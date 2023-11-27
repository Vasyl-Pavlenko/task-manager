import { FC, PropsWithChildren } from "react";
import sass from "./Container.module.scss";

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={sass.container}>
    {children}
  </div>
);
