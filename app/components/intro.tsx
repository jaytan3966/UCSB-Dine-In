import Image from "next/image";
import { handleScrollDown } from "./navbar";
import { NavbarProps } from "./navbar";

export const Intro = ({ topRef, diningRef, aboutRef }: NavbarProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 h-[91vh] text-center">
      <div className="animate-left flex flex-col justify-center">
        <h1 className="font-bold text-5xl sm:text-7xl px-8 w-[25%] text-[#1d2f54]">
          UCSB Dining Made Simple (and Yummy)
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <a
          href="https://dining.ucsb.edu/dining-commons"
          target="_blank"
          className="animate-fall"
        >
          <Image
            src="/ucsblogo.png"
            alt="UCSB Logo"
            height={300}
            width={300}
            priority
          />
        </a>
        <button
          className="font-bold w-[50%] text-5xl sm:text-6xl text-white rounded-full bg-[#1d2f54] p-4 m-10 animate-appear hover:scale-110 duration-300 delay-150"
          onClick={() => handleScrollDown(topRef)}
        >
          DIG IN
        </button>
      </div>
      <div className="flex flex-col justify-center items-center animate-right">
        <h1 className="font-semibold pt-4 text-4xl text-[#1d2f54]">
          Let's be honest.
        </h1>
        <p className="px-8 pt-4 text-center w-[100%] lg:w-[80%]">
          Dining hall food is hit or miss. One day, the tri-tip is shmackin. The
          next, the pork chop is dry as shit.
        </p>
        <h2 className="pt-4 text-2xl font-bold w-[80%] text-[#1d2f54]">
          With UCSB Dine-In, you can find the top peer-reviewed food to make
          your next meal a more pleasant experience!
        </h2>
      </div>
    </div>
  );
};
