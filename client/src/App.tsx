import Footer from "@/components/footer/Footer";
import Home from "./pages/Home";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Benefits from "@/components/benefits/Benefits";
import Classes from "@/components/classes/Classes";
import Contact from "@/components/contact/Contact";
import { useState } from "react";

function App() {
  const [active, setActive] = useState<string>("hero");
  return (
    <div className="flow-root">
      <Navbar active={active} setActive={setActive} />
      <main>
        <Hero setActive={setActive} />
        <Benefits setActive={setActive} />
        <Classes setActive={setActive} />
        <Contact setActive={setActive} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
