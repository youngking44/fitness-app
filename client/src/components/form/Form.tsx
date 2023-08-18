import Button from "@/components/button/Button";
import { motion } from "framer-motion";

const formVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.7 },
  },
};

const Form = () => {
  return (
    <motion.form
      className="flex-1"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
    >
      <input
        className="w-full mb-5 px-3 py-2 border-2"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-full mb-5 px-3 py-2 border-2"
        type="text"
        placeholder="Email"
      />
      <textarea className="w-full h-20 mb-5 px-3 py-2 border-2 resize-none"></textarea>
      <Button>Submit</Button>
    </motion.form>
  );
};

export default Form;
