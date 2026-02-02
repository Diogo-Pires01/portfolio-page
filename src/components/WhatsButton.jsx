import { MessageCircle } from "lucide-react";

const WhatsButton = () => {
  return (
    <div className="fixed bottom-10 right-10 bg-green-500 z-50 rounded-full p-3">
      <a href="" target="_blank">
        <MessageCircle size={32} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsButton;
