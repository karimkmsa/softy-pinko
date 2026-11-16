import banner from "../../assets/images/banner-bg.png";

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-5 pb-48 pt-32 text-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-medium leading-tight sm:text-4xl md:text-[42px]">
          We provide the best <strong className="font-semibold">strategy</strong>
        </h1>
        <h2 className="mt-2 text-2xl font-medium sm:text-3xl md:text-4xl">
          to grow up your <strong className="font-semibold">business</strong>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/95 sm:text-[15px]">
          Softy Pinko is a professional Bootstrap 4.0 theme designed by Template Mo
          for your company at absolutely free of charge
        </p>
        <a
          href="#about"
          className="mt-2 inline-block rounded-full border border-pink bg-pink px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition hover:border-white hover:bg-violet"
        >
          Discover more
        </a>
      </div>
    </section>
  );
};

export default Welcome;
