"use client";
import { FC } from "react";
import { ControllName, Responsibilities } from "..";
import { useReduxState } from "@/hooks";
import sass from "./CategoryInfo.module.scss";

export const CategoryInfo: FC = () => {
  const { posts } = useReduxState();

  return (
    <div className={sass.categoryInfo}>
      {
        posts.postsList.length === 0
          ? <h2 className={sass.title}>
              Создай свою первую должность
            </h2>
          : (
            <>
              <ControllName />

              <Responsibilities />
            </>
          )
      }
    </div>
  )
}
