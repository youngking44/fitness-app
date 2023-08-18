import Container from "@/components/container/Container";
import BenefitsGraphic from "@/assets/benefitsGraphic.png";
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.7 },
  },
};
const centerVariants = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.7 },
  },
};
const rightVariants = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.7 },
  },
};

interface IProp {
  setActive: (value: string) => void;
}

const Benefits = ({ setActive }: IProp) => {
  return (
    <section id="benefits" className="py-10 overflow-hidden">
      <Container>
        <motion.div onViewportEnter={() => setActive("benefits")}>
          <h2 className="custom-heading-h2">It's more than just gym</h2>
          <p className="md:w-1/2">
            We have world best fitness equipments, instructors and we provide
            amazing and affordable fitness classes for everyone.
          </p>
          <div className="pt-5 md:py-5 md:flex gap-5">
            <motion.div
              className="flex-1 flex flex-col items-center mb-5 md:mb-0 px-5 py-10 border-2"
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primary-200">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="my-3 font-bold capitalize">
                Expert and qualified trainers
              </h3>
              <p className="text-center">
                We have best, skilled, and qualified trainers in Mike's gym. We
                have trainers with over 10 years of working, teaching and
                training experience.
              </p>
              <span className="captalize underline cursor-pointer text-accent-500 ">
                Learn more
              </span>
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col items-center mb-5 md:mb-0 px-5 py-10 border-2"
              variants={centerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primary-200">
                <CalendarDaysIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="my-3 font-bold capitalize">
                Flexible workout time
              </h3>
              <p className="text-center">
                Mike's gym has one of the best flexible workout time schedule.
                We provide fitness services for our members, base on their
                convinient time.
              </p>
              <span className="captalize underline cursor-pointer text-accent-500 ">
                Learn more
              </span>
            </motion.div>
            <motion.div
              className="flex-1 flex flex-col items-center mb-5 md:mb-0 px-5 py-10 border-2"
              variants={rightVariants}
              initial="hidden"
              whileInView="visible"
            >
              <div className="w-10 h-10 rounded-full flex justify-center items-center bg-primary-200">
                <UsersIcon className="w-6 h- text-white" />
              </div>
              <h3 className="my-3 font-bold capitalize">
                Special plans and bonus
              </h3>
              <p className="text-center">
                We have special plans that allows families to access our fitness
                services at cheap and discount prices. We also provide bonuses
                to our VIP members.
              </p>
              <span className="captalize underline cursor-pointer text-accent-500 ">
                Learn more
              </span>
            </motion.div>
          </div>
          <div className="md:flex gap-5 md:mt-10">
            <div className="flex-1 mb-5 md:mb-0">
              <img src={BenefitsGraphic} alt="benefits-graphic" />
            </div>
            <div className="flex-[2]">
              <h2 className="mb-3 text-2xl font-bold uppercase text-primary-500">
                Millions of members getting fit daily
              </h2>
              <p className="md:w-5/6">
                Millions of members around the world always go for workout to
                have good shapes and to improve health status. Regular physical
                activity is one of the most important things you can do for your
                health. Being physically active can improve your brain health,
                help manage weight, reduce the risk of disease, strengthen bones
                and muscles, and improve your ability to do everyday activities.
              </p>
              <div className="mt-5 md:mt-8">
                <Button>Join</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Benefits;
