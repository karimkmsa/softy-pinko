import rocket from "../assets/images/work-process-item-01.png";
import background from "../assets/images/work-process-bg.png";

const steps = [
  "Get Ideas",
  "Sketch Up",
  "Discuss",
  "Revise",
  "Approve",
  "Launch",
];

const Work = () => {
  return (
    <section
      id="work"
      className="mt-16 bg-cover bg-center px-4 py-20 text-center text-white sm:px-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="mx-auto max-w-7xl">
        <h3 className="text-2xl font-medium sm:text-3xl">Work Process</h3>
        <p className="mx-auto mt-4 max-w-xl text-white/95">
          Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut
          ex. Donec ante diam.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step) => (
            <article key={step} className="group relative">
              <div className="absolute inset-x-3 top-3 -bottom-2 rounded-[20px] bg-white/15" />
              <div className="relative rounded-[20px] bg-white px-4 py-6 text-ink shadow-[0_2px_48px_rgb(0_0_0/8%)] transition duration-300 group-hover:-translate-y-3">
                <img src={rocket} alt="" className="mx-auto h-16 w-16 object-contain" />
                <h4 className="mt-3 text-base font-medium transition group-hover:text-pink">{step}</h4>
                <p className="mt-1 text-sm text-muted transition group-hover:text-ink">
                  Godard pasbst parism fam cliche.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
