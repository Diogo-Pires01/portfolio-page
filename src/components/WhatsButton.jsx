import { FaWhatsapp } from "react-icons/fa";

const WhatsButton = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-green-500 z-50 rounded-full p-3 shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]">
      <a
        href="https://wa.me/5521996326905?text=Olá,%20gostaria%20de%20saber%20mais!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsButton;
