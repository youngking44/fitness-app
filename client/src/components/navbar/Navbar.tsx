import { useState, useEffect } from "react";
import Logo from "@/assets/logo/mikegym.svg";
import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import { AiOutlineClose, AiFillHome } from "react-icons/ai";
import { GiProfit } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
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
          <Link id="#hero">
            <img width={150} src={Logo} alt="logoGraphic" />
          </Link>
          <div
            className="md:hidden z-50"
            onClick={() => setIsMobileToggled(!isMobileToggled)}
          >
            {isMobileToggled ? (
              <AiOutlineClose className="w-6 h-6 " />
            ) : (
              <RxHamburgerMenu className="w-6 h-6 " />
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
              <li
                className="flex items-center gap-2"
                onClick={() => handleClick("hero")}
              >
                <AiFillHome className="md:hidden" />
                <Link id="#hero" active={active === "hero" ? "yes" : "no"}>
                  Home
                </Link>
              </li>
              <li
                className="flex items-center gap-2"
                onClick={() => handleClick("benefits")}
              >
                <GiProfit className="md:hidden" />
                <Link
                  id="#benefits"
                  active={active === "benefits" ? "yes" : "no"}
                >
                  Benefits
                </Link>
              </li>
              <li
                className="flex items-center gap-2"
                onClick={() => handleClick("classes")}
              >
                <MdDateRange className="md:hidden" />
                <Link
                  id="#classes"
                  active={active === "classes" ? "yes" : "no"}
                >
                  Our classes
                </Link>
              </li>
              <li
                className="flex items-center gap-2"
                onClick={() => handleClick("contact")}
              >
                <BsFillTelephoneForwardFill className="md:hidden" />
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
            <span className="mr-5 font-semibold text-primary-500">
              <Link id="#about">About us</Link>
            </span>
            <Button>
              <Link id="#contact">Join</Link>
            </Button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default Navbar;
