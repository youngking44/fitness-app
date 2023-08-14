import Container from "@/components/container/Container";
import ClassesGraphic1 from "@/assets/classesGraphic1.png";
import ClassesGraphic2 from "@/assets/classesGraphic2.png";
import ClassesGraphic3 from "@/assets/classesGraphic3.png";
import ClassesGraphic4 from "@/assets/classesGraphic4.png";

const Classes = () => {
  return (
    <section className="py-10 bg-primary-100">
      <Container>
        <h2 className="custom-heading-h2">Our classes</h2>
        <p className="md:w-3/5">
          Led by awe-inspiring instructors who are certified masters of their
          crafts, Mike's Gym group fitness classes are designed for maximum
          results and maximum fun. Looking for new ways to stay fit? We’ve got
          you covered with all your favorites, including Cycling, Zumba, HIIT,
          Yoga, Les Mills and more. Whether you’re just starting out on your
          fitness journey, or are a conditioned fitness enthusiast, our group
          fitness classes make it easy to stay consistent and reach your goals,
          all while being a part of an inclusive and supportive community.
        </p>
        <div className="flex gap-5 mt-5 overflow-auto snap-x">
          <div className="min-w-full md:min-w-0 flex-1 snap-center">
            <img
              className="w-full h-full object-cover"
              src={ClassesGraphic1}
              alt="classes-graphic"
            />
          </div>
          <div className="min-w-full md:min-w-0 flex-1 snap-center">
            <img
              className="w-full h-full object-cover"
              src={ClassesGraphic2}
              alt="classes-graphic"
            />
          </div>
          <div className="min-w-full md:min-w-0 flex-1 snap-center">
            <img
              className="w-full h-full object-cover"
              src={ClassesGraphic3}
              alt="classes-graphic"
            />
          </div>
          <div className="min-w-full md:min-w-0 flex-1">
            <img
              className="w-full h-full object-cover"
              src={ClassesGraphic4}
              alt="classes-graphic"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Classes;
