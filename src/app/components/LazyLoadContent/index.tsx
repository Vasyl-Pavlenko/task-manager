"use client"
import { FC, Suspense, lazy } from "react";
import { useReduxState } from "@/hooks";
import { Loader } from "../Loader";
import sass from "./LazyLoadContent.module.scss";

const HierarchyLazy = lazy(() => import("../../hierarchy/page"));
const PostsLazy = lazy(() => import('../../posts/page'));
const EmployeesLazy = lazy(() => import('../../employees/page'));
const KitsLazy = lazy(() => import('../../equipment/page'));

const lazyComponents = [
  HierarchyLazy,
  PostsLazy,
  EmployeesLazy,
  KitsLazy,
];

export const LazyLoadContent: FC = () => {
  const { currentBar } = useReduxState();
  const LazyComponent = lazyComponents[currentBar.bar];

  return (
    <div className={sass.lazyWrapper}>
      <Suspense fallback={
        <div style={{ color: "#fff" }}>
          <Loader />
        </div>
      }>
        <LazyComponent />
      </Suspense>
    </div>
  )
};
