import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="lg:px-20 md:px-11 px-5">
      <div className="w-full h-0.5 bg-white mt-10"></div>
      <div className="flex my-5 lg:flex-row  items-center flex-col justify-center ">
     
    

        <div>
          <p className="text-white text-center">4441 NW 37th Ave, Miami</p>
          <p className=" text-center text-white">FL 33142, USA</p>
        </div>
      </div>

      <p className=" text-xs text-white text-center mb-10">
        © Copyright 2022 Ready Art Digital©. All rights reserved.
      </p>
    </div>
  );
}
