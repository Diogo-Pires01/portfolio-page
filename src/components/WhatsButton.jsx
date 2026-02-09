import { MessageCircle } from "lucide-react";

const WhatsButton = () => {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-green-500 z-50 rounded-full p-3">
      <a
        href="https://wa.me/5521996326905?text=Olá,%20gostaria%20de%20saber%20mais!"
        target="_blank"
      >
        <MessageCircle size={32} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsButton;
