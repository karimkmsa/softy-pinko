import icon from "../../assets/images/featured-item-01.png";

const features = [
  {
    title: "Modern Strategy",
    text: "Customize anything in this template to fit your website needs",
  },
  {
    title: "Best Relationship",
    text: "Contact us immediately if you have a question in mind",
  },
  {
    title: "Ultimate Marketing",
    text: "You just need to tell your friends about our free templates",
  },
];

const Card = () => {
  return (
    <section className="relative z-10 -mt-36 px-4 sm:-mt-40">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-[20px] bg-white px-6 py-8 text-center shadow-soft transition duration-300 hover:-translate-y-2.5"
          >
            <div className="mx-auto mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-violet p-5 transition duration-300 group-hover:bg-pink">
              <img src={icon} alt="" className="h-full w-full object-contain" />
            </div>
            <h3 className="text-lg font-medium">{feature.title}</h3>
            <p className="mt-3 text-muted">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Card;
