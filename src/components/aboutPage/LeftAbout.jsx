import left from "../../assets/images/left-image.png";
import Reveal from "../Reveal";

const LeftAbout = () => {
  return (
    <section
      id="about"
      className="mx-auto mt-16 max-w-6xl px-4 sm:mt-24 sm:px-6"
      data-aos="fade-left"
    >
      <Reveal>
        <div className="grid items-center gap-8 border-b border-line pb-12 md:grid-cols-2 md:gap-12 md:px-6">
          <img
            src={left}
            alt="Team discussing a project"
            className="mx-auto w-full max-w-xs"
          />
          <div>
            <h3 className="text-2xl font-medium leading-snug">
              Let’s discuss about you project
            </h3>
            <p className="mt-6 text-muted">
              Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
              blandit, at finibus leo efficitur. Nam gravida purus non sapien
              auctor, ut aliquam magna ullamcorper.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default LeftAbout;
