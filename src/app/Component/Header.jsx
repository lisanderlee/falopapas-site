
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative h-full justify-between mt-6 items-center  px-5 lg:px-20">
      <header class="df aic jcc">
        <div>
          <h1 className=" text-white font-bold">
            Welcome to Falopapas Studio,
          </h1>
          <h2 className="text-white font-bold">
            a Miami-based haven of contemporary art. Run by the accomplished
            Argentine artist and visionary, Mr. Falopapas, our studio offers a
            unique blend of urban sophistication and modern subjects. With a
            degree in Fine Arts and a thriving career in painting and public art
            since 2005, Néstor Augusto Turallas, aka Falopapas, invites you to
            explore his captivating world of creativity and inspiration.
            <Link href="/bio/" className=" ml-1 font-bold hover:bg-white text-purple-600 text-md hover:text-black outline-white px-5 py-2 rounded-full ">
              Learn More
            </Link>
          </h2>
        </div>
      </header>
    </div>
  );
}
