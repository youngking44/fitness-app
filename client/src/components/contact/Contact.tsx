import Container from "@/components/container/Container";
import Form from "@/components/form/Form";
import ContactGraphic from "@/assets/contactGraphic.png";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: { type: "tween", duration: 0.7 },
  },
};

interface IProp {
  setActive: (value: string) => void;
}

const Contact = ({ setActive }: IProp) => {
  return (
    <motion.section
      id="contact"
      className="py-10 bg-white"
      onViewportEnter={() => setActive("contact")}
    >
      <Container>
        <h2 className="custom-heading-h2">Join now to get in shape</h2>
        <p className="md:w-3/5">
          Take the first step by contacting our customer's service. Our
          customer's service is available 24/7 and we can't wait to welcome you
          in our fitness center.
        </p>
        <div className="md:flex gap-10 mt-5">
          <Form />
          <motion.div
            className="flex-1 flex justify-center mt-5 md:mt-0 rounded-3xl bg-primary-100"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
          >
            <img src={ContactGraphic} alt="contact-graphic" />
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Contact;
