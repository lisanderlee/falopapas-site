import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="lg:px-20 md:px-11 px-5">
      <div className="w-full h-0.5 bg-white mt-10"></div>
      <div className="flex my-5 lg:flex-row  items-center flex-col justify-between ">
     
        <div className="mb-3">
          <a className="flex" href="mailto:falopapas@gmail.com">
            <p className=" text-white ">falopapas@gmail.com</p>
          </a>
        </div>

        <div className="mb-3">
          <a
            href="http://www.instagram.com/falopapas"
            target="_blank"
           
          >
            <Image
              src="/web-images/instagram.svg"
              width={50}
              height={50}
              alt="instagram logo"
            />
          </a>
        </div>

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
