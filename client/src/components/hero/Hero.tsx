import Button from "../button/Button";
import Container from "../container/Container";
import { motion } from "framer-motion";
import Link from "../link/Link";

interface IProp {
  setActive: (value: string) => void;
}

const Hero = ({ setActive }: IProp) => {
  return (
    <motion.section
      id="hero"
      className="h-screen pt-16"
      onViewportEnter={() => setActive("hero")}
    >
      <div
        className="w-full h-[calc(100vh-64px)] bg-home-desktop 
        bg-right md:bg-top bg-cover bg-no-repeat"
      >
        <Container>
          <div className="md:w-1/2 lg:w-2/5 pt-20 text-center text-white md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-bold capitalize"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
            >
              Where fitness becomes your lifestyle
            </motion.h1>
            <div className="mt-5 md:mt-10">
              <motion.h3
                className="uppercase mb-3 text-2xl text-accent-400"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Become a member
              </motion.h3>
              <motion.p
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
              >
                Mike's gym is the best gym center in the city of Ibadan, we have
                skillful and profesional instructors.
              </motion.p>
            </div>
            <div className="mt-8">
              <Button>
                <Link id="#contact">Book now</Link>
              </Button>
              <span
                className="block md:inline-block mt-3 md:mt-0 ml-5 capitalize underline 
              text-accent-300"
              >
                <Link id="#about"> Learn more</Link>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </motion.section>
  );
};

export default Hero;
