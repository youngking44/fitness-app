import Button from "../button/Button";
import Container from "../container/Container";

const Hero = () => {
  return (
    <section
      className="w-full h-[calc(100vh-64px)] mt-16 bg-home-desktop 
    bg-right md:bg-top bg-cover bg-no-repeat"
    >
      <Container>
        <div className="md:w-1/2 lg:w-2/5 pt-20 text-center text-white md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            Where fitness becomes your lifestyle
          </h1>
          <div className="mt-5 md:mt-10">
            <h3 className="uppercase mb-3 text-2xl text-accent-400">
              Become a member
            </h3>
            <p>
              Mike's gym is the best gym center in the city of Ibadan, we have
              skillful and profesional instructors.
            </p>
          </div>
          <div className="mt-8">
            <Button>Book now</Button>
            <span
              className="block md:inline-block mt-3 md:mt-0 ml-5 capitalize underline 
              text-accent-300 cursor-pointer"
            >
              Learn more
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
