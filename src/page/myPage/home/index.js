import { About } from "../about";
import Header from "../hedaer";
import Hello from "../pageSection";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="home">
        <Hello />
        <About />
      </div>
    </div>
  );
};

export default Home;
