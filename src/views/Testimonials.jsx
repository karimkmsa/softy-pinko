import quote from "../assets/images/testimonial-icon.png";

const testimonials = [
  {
    name: "Catherine Soft",
    role: "Managing Director",
    text: "Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.",
  },
  {
    name: "Kelvin Wood",
    role: "Digital Marketer",
    text: "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
  },
  {
    name: "David Martin",
    role: "Website Manager",
    text: "Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.",
  },
];

const Testimonials = () => {
  return (
    <section id="testi" className="px-4 py-20 text-center sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-medium sm:text-3xl">What do they say?</h3>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros
          a turpis. Ut sagittis lectus libero.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-[20px] bg-white px-5 py-7 text-left shadow-soft transition duration-300"
            >
              <img src={quote} alt="" className="mx-auto h-12 w-12 object-contain" />
              <p className="py-6 text-muted transition group-hover:text-ink">{item.text}</p>
              <div className="text-center transition duration-300 group-hover:translate-x-3">
                <h4 className="text-lg font-medium">{item.name}</h4>
                <p className="text-pink">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
