type CustomCardProps = {
  title: string;
  body: string;
  footer: string;
};

const CustomCard = ({ title, body, footer }: CustomCardProps) => {
  return (
    <div className="w-[30rem] bg-[#27272a] p-6 rounded-xl outline outline-1 outline-[#2e3949] shadow-[0_0_10px_#2e3949] flex flex-col gap-3">
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <p className="text-sm text-gray-400">{body}</p>
      <p className="text-xs text-gray-500 opacity-80">{footer}</p>
    </div>
  );
};

export default CustomCard;
