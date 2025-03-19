import Link from "next/link";
import React from "react";

const DetailPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await data.json();

  return (
    <div>
      Detail
      <h1>{todo.title}</h1>
      <Link href={"/"}>Home이동</Link>
    </div>
  );
};

export default DetailPage;
