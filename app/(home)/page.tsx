import About from "../_components/About";
import Outro from "../_components/Outro";
import PicParallax from "../_components/PicParallax";
import Services from "../_components/Services";
import Slogan from "../_components/Slogan";

const HomePage = () => {
  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center">
      <Slogan />

      <div className="w-full px-4 flex justify-center my-10">
        <div className="w-full max-w-4xl">
          <PicParallax />
        </div>
      </div>
      <Services />
      <About />
      <Outro />
    </div>
  );
};

export default HomePage;
