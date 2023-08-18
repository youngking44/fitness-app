import { useState, useEffect } from "react";
import Button from "../button/Button";
import Container from "../container/Container";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "@/components/link/Link";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: -10 },
  visible: { y: 0, transition: { type: "tween", duration: 0.4 } },
};

interface IProp {
  active: string;
  setActive: (value: string) => void;
}

const Navbar = ({ active, setActive }: IProp) => {
  const [isMobileToggled, setIsMobileToggled] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const flexBetween = "flex justify-between items-center";

  const handleClick = (type: string) => {
    setActive(type);
    setIsMobileToggled(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(false);
      if (window.scrollY <= 0) return;
      setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${
        isScrolled && "border-b-2 border-b-primary-200"
      } fixed w-full h-16 flex items-center z-40 bg-white`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <div className={`${flexBetween}`}>
          <div className="text-3xl font-bold text-[#800080]">MIKEGYM</div>
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
            duration-300 ease-in bg-primary-200 md:bg-transparent`}
          >
            <ul
              className="flex flex-col md:flex-row gap-5 mt-16 md:mt-0 mx-5 md:mx-0 text-xl 
              md:text-base font-semibold capitalize text-white md:text-primary-500"
            >
              <li onClick={() => handleClick("hero")}>
                <Link id="#hero" active={active === "hero" ? "yes" : "no"}>
                  Home
                </Link>
              </li>
              <li onClick={() => handleClick("benefits")}>
                <Link
                  id="#benefits"
                  active={active === "benefits" ? "yes" : "no"}
                >
                  Benefits
                </Link>
              </li>
              <li onClick={() => handleClick("classes")}>
                <Link
                  id="#classes"
                  active={active === "classes" ? "yes" : "no"}
                >
                  Our classes
                </Link>
              </li>
              <li onClick={() => handleClick("contact")}>
                <Link
                  id="#contact"
                  active={active === "contact" ? "yes" : "no"}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <span className="mr-5 font-semibold text-primary-500">Login</span>
            <Button>Join</Button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default Navbar;
