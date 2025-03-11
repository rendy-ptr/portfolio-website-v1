import type { CustomCardProps } from "@/types/custom/appType";
import type React from "react";

const CustomCard: React.FC<CustomCardProps> = ({ experience }) => {
  return (
    <div className="w-[30rem] bg-[#27272a] p-6 rounded-xl outline outline-1 outline-[#2e3949] shadow-[0_0_10px_#2e3949] flex flex-col gap-6 h-full">
      {experience.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold text-white">{item.title}</h1>
          <p className="text-sm text-gray-400">{item.body}</p>
          <p className="text-xs text-gray-500 opacity-80">{item.footer}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomCard;
