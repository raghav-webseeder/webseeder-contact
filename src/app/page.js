import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="text-center items-center mt-50">
      <Link href="/contact-us" className="text-blue-500 hover:underline">
        Click here to continue
      </Link>
    </div>
  );
};

export default page;
