import React from "react";
import { ArrowDownIcon } from "@heroicons/react/solid";

const CV = () => {
  return (
    <div>
      <a
        href="./CV_VilmaQ.pdf"
        download
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
      >
        CV
        <ArrowDownIcon className="animate-bounce w-4 h-4 ml-1" />
      </a>
    </div>
  );
};

export default CV;
