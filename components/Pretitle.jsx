const Pretitle = ({ text, center }) => {
  return (
    <div
      className={`mb-4 flex items-center gap-3 ${center && "justify-center"}`}
    >
      <div className="h-2 w-2 bg-accent"></div>
      <p className="font-primary uppercase tracking-[3.2px]">{text}</p>
      <div className="h-2 w-2 bg-accent"></div>
    </div>
  );
};

export default Pretitle;
