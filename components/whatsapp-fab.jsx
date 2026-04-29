import { Ico } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/data";

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fab-whatsapp breathe"
      aria-label="Chat on WhatsApp"
    >
      <Ico.WhatsApp size={24}/>
    </a>
  );
}
