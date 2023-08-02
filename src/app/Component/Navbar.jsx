import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between mt-2 items-center h-24 px-5 lg:px-20">
      <div className=" lg:flex hidden">
        <p className="text-white">@2023</p>
      </div>
      <div>
        <button>
          <Image
          className="  mt-32"
            src="/web-images/logo-falopapas.svg"
            width={400}
            height={400}
            alt="Logo falopapas"
          />
        </button>
      </div>
      <div className="flex flex-row items-center">
        <button className="mr-5">
          <Image
            src="/web-images/instagram.svg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </button>
        <button className="outline text-white hover:bg-white hover:text-black outline-white px-5 py-2 rounded-full ">
          Contact
        </button>
      </div>
    </div>
  );
}
