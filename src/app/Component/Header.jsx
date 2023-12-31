import Link from "next/link";

export default function Header() {
  return (
    <div className=" mt-28 mb-36 h-full justify-between flex items-center px-4        lg:mt-64 lg:px-20">
      <div>
        <h1 className=" text-6xl leading-tight text-white font-bold mb-5 lg:text-8xl">
          Welcome to Falopapas Studio,
        </h1>
        <h2 className="text-white text-lg font-base leading-loose md:text-2xl lg:text-4xl lg:leading-relaxed">
          a Miami-based haven of contemporary art. Run by the accomplished
          Argentine artist and visionary, Mr. Falopapas, our studio offers a
          unique blend of urban sophistication and modern subjects. With a
          degree in Fine Arts and a thriving career in painting and public art
          since 2005, Néstor Augusto Turallas, aka Falopapas, invites you to
          explore his captivating world of creativity and inspiration.
        </h2>
        {/* <div className="outline   text-center justify-center text-white hover:bg-white hover:text-black outline-white   py-2 w-36 mt-5 rounded-full">
        <Link
          href="/bio/"
        >
          Learn More
        </Link>
        </div> */}
      </div>
    </div>
  );
}
