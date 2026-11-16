import mark from "../assets/images/text-logo.png";

const icons = [
  {
    label: "HTML5",
    svg: (
      <path d="M3 3h18l-1.6 18L12 23l-7.4-2L3 3zm3.2 4.2l.4 4.5h9.1l-.3 3.3-3.4 1-3.4-1-.2-2.4H6.8l.4 4.6 4.8 1.4 4.8-1.4.7-7.2H6.2z" />
    ),
  },
  {
    label: "Sass",
    svg: <path d="M12 3c2 3 2 5 0 7 3 0 6 2 6 5.2C18 18.4 15.3 21 12 21S6 18.4 6 15.2C6 12 9 10 12 10c-2-2-2-4 0-7z" />,
  },
  {
    label: "React",
    svg: (
      <>
        <circle cx="12" cy="12" r="1.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </>
    ),
  },
  {
    label: "JavaScript",
    svg: <path d="M4 4h16v16H4V4zm7.2 12.2c.4.7 1 1.2 2.1 1.2 1.1 0 1.8-.5 1.8-1.3 0-.8-.6-1.2-1.8-1.6l-.6-.2c-1.8-.7-3-1.6-3-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.5.5 3.2 1.8l-1.7 1.1c-.3-.6-.8-.9-1.5-.9-.7 0-1.1.4-1.1 1s.4 1 1.5 1.4l.6.2c2.1.9 3.3 1.8 3.3 3.7 0 2.1-1.6 3.3-3.8 3.3-2.1 0-3.5-1-4.2-2.3l1.8-.9z" />,
  },
  {
    label: "JSON",
    svg: <path d="M8 4c-2 0-3 1.2-3 3v2c0 1.2-.6 1.8-1.5 2 1 .2 1.5.8 1.5 2v2c0 1.8 1 3 3 3M16 4c2 0 3 1.2 3 3v2c0 1.2.6 1.8 1.5 2-1 .2-1.5.8-1.5 2v2c0 1.8-1 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(127deg,#a759d1_0%,#8261ee_91%)] px-4 py-12 text-center text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-5">
        {icons.map((icon) => (
          <svg
            key={icon.label}
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current"
            role="img"
            aria-label={icon.label}
          >
            {icon.svg}
          </svg>
        ))}
      </div>
      <hr className="mx-auto my-6 max-w-6xl border-white/40" />
      <p className="text-sm sm:text-[15px]">
        COPYRIGHT © 2023 SOFTY PINKO COMPANY - DESIGN:{" "}
        <img src={mark} alt="TemplateMo" className="ml-1 inline-block h-5 w-auto align-middle sm:h-6" />
      </p>
    </footer>
  );
};

export default Footer;
