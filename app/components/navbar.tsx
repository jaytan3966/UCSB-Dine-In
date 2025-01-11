interface NavbarProps {
  topRef: React.RefObject<HTMLDivElement | null>;
  diningRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export const handleScrollDown = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current){
        window.scrollTo({
        top: ref.current.offsetTop - 60,
        behavior: "smooth",
        });
    }
}

const scrollHome = () => {
    window.scrollTo({top:0, behavior: "smooth",});
}

export const Navbar = ({topRef, diningRef, aboutRef} : NavbarProps) => {
    return (
        <div className="bg-[#1d2f54] p-4 flex justify-between items-center max-w-screen">
            <button className="font-bold text-3xl text-[#ffce34]" onClick={() => scrollHome()}>UCSB Dine-In</button>
            <div className="flex justify-end">
            <button className="font-bold text-1xl text-white px-4 hover:-translate-y-1 delay-150 duration-300" onClick={() => handleScrollDown(topRef)}>Highest Rated Food</button>
            <button className="font-bold text-1xl text-white px-4 hover:-translate-y-1 delay-150 duration-300" onClick={() => handleScrollDown(diningRef)}>Dining Commons</button>
            <button className="font-bold text-1xl text-white px-4 hover:-translate-y-1 delay-150 duration-300" onClick={() => handleScrollDown(aboutRef)}>About</button>
            </div>
        </div>
    )
}