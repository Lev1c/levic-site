import { About } from "../about";
import { Contact } from "../contac";
import Header from "../hedaer";
import Menu from "../menu";
import Hello from "../pageSection";
import { Portfolio } from "../portfoli";
import { Program } from "../program";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="home">
        <Hello />
        <About />
        <Portfolio />
        <Program />
        <Contact />
      </div>
      <Menu />
    </div>
  );
};

export default Home;
