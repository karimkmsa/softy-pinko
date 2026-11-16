import { useState } from "react";
import logo from "../../assets/images/logo.png";

const links = [
  { href: "#welcome", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work Process" },
  { href: "#testi", label: "Testimonials" },
  { href: "#price", label: "Pricing Tables" },
  { href: "#blog", label: "Blog Entries" },
  { href: "#contact", label: "Contact Us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 border border-white/40 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-md sm:px-6 ${
          open ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <a href="#welcome" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Softy Pinko" className="h-9 w-auto sm:h-10" />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <ul
          id="site-menu"
          className={`${open ? "flex" : "hidden"} w-full flex-col items-stretch gap-1 pb-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-1 lg:pb-0`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-full px-3 py-2 text-center text-sm text-muted transition hover:text-pink lg:px-2.5 lg:text-[13.5px] xl:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
