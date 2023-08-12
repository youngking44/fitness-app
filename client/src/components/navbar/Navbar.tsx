import { useState } from "react";
import Button from "../button/Button";
import Container from "../container/Container";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isMobileToggled, setIsMobileToggled] = useState<boolean>(false);
  const flexBetween = "flex justify-between items-center";

  return (
    <header className="fixed w-full h-16 flex items-center z-40 bg-white">
      <Container>
        <div className={`${flexBetween}`}>
          <div className="text-3xl font-bold text-[#800080] ">MIKEGYM</div>
          <div
            className="md:hidden z-50"
            onClick={() => setIsMobileToggled(!isMobileToggled)}
          >
            {isMobileToggled ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </div>
          <nav
            className={`${
              isMobileToggled ? "translate-x-0" : "translate-x-full"
            } absolute top-0 right-0 md:static w-3/5 md:w-auto 
            h-screen md:h-auto z-40 md:translate-x-0 transition-all 
            duration-300 ease-in bg-primary-300 md:bg-transparent`}
          >
            <ul
              className="flex flex-col md:flex-row gap-5 mt-16 md:mt-0 mx-5 md:mx-0 text-xl 
              md:text-base font-semibold capitalize text-white md:text-primary-500"
            >
              <li>Home</li>
              <li>Benefits</li>
              <li>Our classes</li>
              <li>Contact us</li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <span className="mr-5 font-semibold text-primary-500">Login</span>
            <Button>Join</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
