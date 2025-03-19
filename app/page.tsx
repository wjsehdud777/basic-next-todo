import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link href={"detail"}>detail이동</Link>
    </div>
  );
};

export default HomePage;
