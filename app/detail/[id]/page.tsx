import React from "react";
interface DetailIdPageProps {
  params: Promise<{ id: string }>;
}

const DetailIdPage = async ({ params }: DetailIdPageProps) => {
  const { id } = await params;
  console.log("DetailIdPage>>", id);

  return <div>Detail,ID:Page</div>;
};

export default DetailIdPage;
