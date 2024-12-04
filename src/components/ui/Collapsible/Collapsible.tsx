import React from "react";
import { Indoor } from "src/types/Indoor";
import { BsArrowDownShort } from "react-icons/bs";
interface CollapsibleProps {
  indoor: Indoor;
  children: React.ReactNode;
}

export const Collapsible = ({ indoor, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{indoor.name}</h2>
        <div>{indoor.phase}</div>
        <div>{indoor.temperature}</div>
        <div className="flex items-center justify-between">
          <div>{"Dashboard"}</div>
          <div
            className={`transition-transform duration-500 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <BsArrowDownShort />
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-neutral text-white rounded-none">{children}</div>
      </div>
    </div>
  );
};
