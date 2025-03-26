"use client";

import { Todo } from "@/types/todo.type";
import Link from "next/link";
import React, { useId } from "react";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./TodoDeleteButton";
import { useToggleTodoMutation } from "@/query/useQueryMutation";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { id, title, completed } = todo;
  const checkboxId = useId();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;

    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex flex-row items-center justify-between p-4 rounded-md border">
      <div className="flex flex-row items-center gap-4">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />
        <Link
          href={`/${id}`}
          className={cn("hover:underline", {
            "line-through": completed,
          })}
        >
          <h2>{title}</h2>
        </Link>
      </div>

      <div className="space-x-2">
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
