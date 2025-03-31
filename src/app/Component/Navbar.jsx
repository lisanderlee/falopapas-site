"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  function handleClick() {
    const section = document.getElementById("sectionId");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-col-reverse px-5 mt-4 justify-center   md:flex-row md:justify-between lg:flex-row lg:w-full lg:justify-between lg:h-24 lg:items-center lg:px-20 ">
      <div className=" lg:flex hidden">
        <p className="text-white">@2025</p>
      </div>
      <div className="  mt-24 px-10 justify-center items-center">
        <Link className="items-center" href="/">
          <Image
            className=""
            src="/web-images/logo-falopapas.svg"
            width={400}
            height={400}
            alt="Logo falopapas"
          />
        </Link>
      </div>
      <div className="flex flex-row  justify-end items-center">
        <a
          href="http://www.instagram.com/falopapas"
          target="_blank"
          className="mr-5"
        >
          <Image
            src="/web-images/instagram.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </a>
         <a
          href="https://readyart.digital/"
          target="_blank"
          className="mr-5"
        >
      <p className="text-white">On-line Shop</p>
        </a>
        <button
          onClick={handleClick}
          className="outline text-white hover:bg-white hover:text-black outline-white px-5 py-2 rounded-full "
        >
          Contact
        </button>
      </div>
    </div>
  );
}
