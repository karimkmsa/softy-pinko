import { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-mist px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-medium sm:text-3xl">Talk To Us</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat
            hendrerit semper.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-medium">Keep in touch</h3>
            <p className="mt-4 text-muted">
              110-220 Quisque diam odio, maximus ac consectetur eu, 10260 auctor non lorem
            </p>
            <p className="mt-4 text-muted">
              You are NOT allowed to re-distribute Softy Pinko template on any template collection
              websites. Thank you.
            </p>
          </div>

          <form className="md:col-span-8" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                aria-label="Full Name"
                className="rounded-[20px] border border-line bg-white px-4 py-3 outline-none transition focus:border-violet"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="E-mail Address"
                aria-label="E-mail Address"
                className="rounded-[20px] border border-line bg-white px-4 py-3 outline-none transition focus:border-violet"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              aria-label="Your Message"
              className="mt-4 h-40 w-full resize-none rounded-[20px] border border-line bg-white px-5 py-4 outline-none transition focus:border-violet"
            />
            <button
              type="submit"
              className="mt-4 rounded-full bg-violet px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-pink max-sm:mx-auto max-sm:block"
            >
              Send Message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-violet" role="status">
                Thanks, your message is ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
