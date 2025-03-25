"use client";

import { Todo } from "@/types/todo.type";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./TodoDeleteButton";
import { useToggleTodoMutation } from "@/query/useQueryMutation";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();

  const { id, text, completed } = todo;

  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", {
          "line-through": completed,
        })}
      >
        <h2>{text}</h2>
      </Link>

      <div className="space-x-2">
        <Button
          onClick={() => toggleTodoCompleted({ id, completed: !completed })}
          variant="outline"
        >
          {completed ? "취소" : "완료"}
        </Button>
        {/* <Button onClick={() => deleteTodo(id)} variant="destructive">
          삭제
        </Button> */}
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
