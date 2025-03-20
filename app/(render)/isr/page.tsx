import { Todo } from "@/types/todo.type";
import React from "react";

const ISRPage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    next: {
      revalidate: 10,
    },
  });
  const data: Todo[] = await response.json();

  const current = new Date().toLocaleString();

  return (
    <div>
      ISRPage({current}): {JSON.stringify(data)}
    </div>
  );
};

export default ISRPage;
