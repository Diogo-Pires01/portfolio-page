import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const contacts = [
  {
    id: 1,
    label: "Email",
    value: "contatosdiogo155@gmail.com",
    href: "mailto:contatosdiogo155@gmail.com",
    icon: MdEmail,
  },
  {
    id: 2,
    label: "LinkedIn",
    value: "linkedin.com/in/diogo-pires-dev/",
    href: "https://www.linkedin.com/in/diogo-pires-dev/",
    icon: FaLinkedinIn,
  },
  {
    id: 3,
    label: "GitHub",
    value: "github.com/Diogo-Pires01",
    href: "https://github.com/Diogo-Pires01",
    icon: FaGithub,
  },
  {
    id: 4,
    label: "Instagram",
    value: "dgpires.dev",
    href: "https://www.instagram.com/dgpires.dev/",
    icon: FaInstagram,
  },
];

const Contact = () => {
  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-5xl">
        <div className="relative flex flex-col items-center">
          <h1 className="absolute -top-10 text-9xl font-bold text-black/5 whitespace-nowrap select-none">
            CONTATO
          </h1>

          <h2 className="relative text-5xl font-semibold text-black">
            Contato
          </h2>

          <span className="w-33 h-1.25 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {contacts.map(({ id, href, icon: Icon, value }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <Icon size={24} />
              <span>{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
