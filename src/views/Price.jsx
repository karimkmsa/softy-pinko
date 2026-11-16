const plans = [
  {
    name: "Starter",
    price: "14.50",
    featured: false,
    items: [
      { label: "60 GB space" },
      { label: "600 GB transfer" },
      { label: "Pro Design Panel" },
      { label: "15-minute support", muted: true },
      { label: "Unlimited Emails", muted: true },
      { label: "24/7 Security", muted: true },
    ],
  },
  {
    name: "Premium",
    price: "21.50",
    featured: true,
    items: [
      { label: "120 GB space" },
      { label: "1200 GB transfer" },
      { label: "Pro Design Panel" },
      { label: "15-minute support" },
      { label: "Unlimited Emails", muted: true },
      { label: "24/7 Security", muted: true },
    ],
  },
  {
    name: "Advanced",
    price: "42.00",
    featured: false,
    items: [
      { label: "250 GB space" },
      { label: "5000 GB transfer" },
      { label: "Pro Design Panel" },
      { label: "15-minute support" },
      { label: "Unlimited Emails" },
      { label: "24/7 Security" },
    ],
  },
];

const Price = () => {
  return (
    <section id="price" className="bg-mist px-4 py-20 text-center sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-2xl font-medium sm:text-3xl">Pricing Plans</h3>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis
          congue risus volutpat.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="group rounded-[20px] bg-white px-6 py-10 shadow-soft transition duration-300 hover:-translate-y-3"
            >
              <p className="text-lg font-medium">{plan.name}</p>
              <div
                className={`mx-auto mt-5 w-[70%] rounded-[20px] py-4 text-white shadow-soft ${
                  plan.featured ? "bg-pink" : "bg-violet"
                }`}
              >
                <p className="text-2xl font-medium">
                  <span className="text-3xl">$</span> {plan.price}
                </p>
                <p className="text-sm">monthly</p>
              </div>
              <ul className="my-6 space-y-2">
                {plan.items.map((item) => (
                  <li
                    key={item.label}
                    className={item.muted ? "text-muted line-through" : "text-ink"}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="rounded-full bg-violet px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition group-hover:bg-pink"
              >
                Purchase now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
