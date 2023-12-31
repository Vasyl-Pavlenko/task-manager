"use client";
import { FC, useRef, DragEvent } from "react";
import { MdDragIndicator } from "react-icons/md";
import { useReduxState } from "@/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux";
import { endDrag, movePost, setCurrentPost, startDrag } from "@/redux/posts/slice";
import sass from "./PositionList.module.scss";

export const PositionList: FC = () => {
  const { posts } = useReduxState();
  const dispatch = useDispatch<AppDispatch>();
  const dragItem = useRef<HTMLLIElement | null>(null);

  const handleDragStart = (index: number, event: DragEvent<HTMLLIElement>) => {
    const { currentTarget } = event;
    currentTarget.classList.add(sass.dragging);
    dispatch(startDrag(index));
    dragItem.current = currentTarget;
  };

  const handleDragOver = (index: number, event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    if (dragItem.current && posts.draggedPostIndex !== null) {
      const dragOverItem = currentTarget;
      const bounding = dragOverItem.getBoundingClientRect();
      const offset = bounding.y + bounding.height / 2;

      if (offset > event.clientY) {
        dragOverItem.classList.add(sass.hovered);
      } else {
        dragOverItem.classList.remove(sass.hovered);
      }
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();

    if (dragItem.current && posts.draggedPostIndex !== null) {
      event.currentTarget.classList.remove(sass.hovered);
    }
  };

  const handleDrop = (index: number, event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();

    if (dragItem.current && posts.draggedPostIndex !== null) {
      const startIndex = posts.draggedPostIndex;
      const endIndex = index;
      dispatch(movePost({ startIndex, endIndex }));
    }
  };

  const handleDragEnd = (index: number) => {
    dispatch(endDrag());
    dispatch(setCurrentPost(index));

    if (dragItem.current) {
      dragItem.current.classList.remove(sass.dragging);
    }
    dragItem.current = null;
  };

  return (
    <ul className={sass.list}>
      {
        posts.postsList.map((post, index) => (
          <li
            key={post.id}
            draggable
            onDragStart={(event) => handleDragStart(index, event)}
            onDragEnd={() => handleDragEnd(index)}
            onDragOver={(event) => handleDragOver(index, event)}
            onDragLeave={handleDragLeave}
            onDrop={(event) => handleDrop(index, event)}
            onClick={() => dispatch(setCurrentPost(index))}
            className={posts.currentPost === index ? sass.postActive : sass.post}
          >
            <button
              type="button"
              className={sass.dragAndDropBtn}
            >
              <MdDragIndicator
                size={20}
                color="#F5F5F528"
              />
            </button>

            <div className={sass.text}>
              <p className={sass.name}>
                {post.name}
              </p>

              <p className={sass.amountTasks}>
                {post.amountTasks} заданий
              </p>
            </div>

            <p className={sass.priceWrapper}>
              <span className={sass.price}>
                ${post.price}
              </span>

              <span className={sass.priceDecorative}>
                /
              </span>

              <span className={sass.priceDecorative}>
                час
              </span>
            </p>
          </li>
        ))
      }
    </ul>
  )
}
