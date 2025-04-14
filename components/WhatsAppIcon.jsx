export default function WhatsAppIcon() {
  const phoneNumber = "5567993352525";
  const message = encodeURIComponent(
    "Olá, estou interessado(a) em seus serviços!",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center"
      aria-label="Contacte-nos no WhatsApp"
    >
      <span className="absolute z-10 h-8 w-8 animate-ping rounded-full bg-green-500/40 opacity-75 sm:h-16 sm:w-16"></span>
      <img
        src="/Assets/whatsapp.png"
        alt="WhatsApp"
        className="relative z-20 h-12 w-12 transition-transform hover:scale-110 sm:h-16 sm:w-16"
      />
    </a>
  );
}
