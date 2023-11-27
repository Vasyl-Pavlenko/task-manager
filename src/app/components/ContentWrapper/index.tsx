import { FC, PropsWithChildren } from "react";
import sass from "./ContentWrapper.module.scss";

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={sass.content}>
    {children}
  </div>
);
