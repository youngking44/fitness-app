import Benefits from "@/components/benefits/Benefits";
import Classes from "@/components/classes/Classes";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Classes />
      </main>
    </>
  );
};

export default Home;
