import { getTodoItem } from "@/api/todo-api";
import TodoItem from "@/components/todo/TodoItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;

  const todoItem = await getTodoItem(id);

  return (
    <section>
      <div className="container p-2 mx-auto space-y-4">
        <TodoItem todo={todoItem} />
      </div>

      <Link href="/">
        <Button className="w-full">돌아가기</Button>
      </Link>
    </section>
  );
};

export default DetailPage;
