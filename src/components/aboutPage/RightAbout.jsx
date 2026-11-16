import right from "../../assets/images/right-image.png";
import Reveal from "../Reveal";

const RightAbout = () => {
  return (
    <section
      className="mx-auto mt-12 max-w-6xl px-4 sm:px-6"
      data-aos="fade-right"
    >
      <Reveal direction="right">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 md:px-6">
          <div className="md:order-1">
            <h3 className="text-2xl font-medium leading-snug">
              We can help you to grow your business
            </h3>
            <p className="mt-6 text-muted">
              Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
              nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
              luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis
              dolor elit.
            </p>
          </div>
          <img
            src={right}
            alt="Illustration of business growth"
            className="mx-auto w-3/4 max-w-xs md:order-2 md:ml-auto"
          />
        </div>
      </Reveal>
    </section>
  );
};

export default RightAbout;
