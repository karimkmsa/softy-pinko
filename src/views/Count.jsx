import ring from "../assets/images/circle-dec.png";
import background from "../assets/images/fun-facts-bg.png";

const stats = [
  { value: "126", label: "Projects" },
  { value: "63", label: "Happy Clients" },
  { value: "126", label: "Awards Wins" },
  { value: "27", label: "Countries" },
];

const Count = () => {
  return (
    <section
      id="count"
      className="bg-cover bg-center px-4 py-20 text-center text-white sm:px-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-12 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="relative">
            {index < stats.length - 1 && (
              <img
                src={ring}
                alt=""
                className="pointer-events-none absolute top-1/2 -right-6 hidden w-14 -translate-y-1/2 lg:block"
              />
            )}
            <div className="transition duration-300 hover:-translate-y-3">
              <p className="text-4xl font-medium">{stat.value}</p>
              <span className="mt-1 block text-sm">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Count;
