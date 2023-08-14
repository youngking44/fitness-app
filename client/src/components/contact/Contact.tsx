import Container from "@/components/container/Container";
import Form from "@/components/form/Form";
import ContactGraphic from "@/assets/contactGraphic.png";

const Contact = () => {
  return (
    <section className="py-10 bg-white">
      <Container>
        <h2 className="custom-heading-h2">Join now to get in shape</h2>
        <p className="md:w-3/5">
          Take the first step by contacting our customer's service. Our
          customer's service is available 24/7 and we can't wait to welcome you
          in our fitness center.
        </p>
        <div className="md:flex gap-10 mt-5">
          <Form />
          <div className="flex-1 flex justify-center mt-5 md:mt-0 rounded-3xl bg-primary-100">
            <img src={ContactGraphic} alt="contact-graphic" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
