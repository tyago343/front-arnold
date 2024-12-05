import React from "react";
import { Indoor } from "src/types/Indoor";
import { BsArrowDownShort } from "react-icons/bs";
import { BsFileRuled } from "react-icons/bs";
import { Link } from "react-router";
interface CollapsibleProps {
  indoor: Indoor;
  children: React.ReactNode;
}

export const Collapsible = ({ indoor, children }: CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="bg-primary shadow-lg rounded-lg text-neutralDark">
      <div
        className={`cursor-default grid grid-cols-4 items-center p-4 bg-success rounded-t-md ${
          isOpen ? "" : "rounded-b-md"
        }`}
      >
        <h2>{indoor.name}</h2>
        <div>{indoor.phase}</div>
        <div className="text-center">{indoor.temperature}</div>
        <div className="flex items-center justify-evenly">
          <div>
            <Link to="/dashboard">
              <BsFileRuled size={24} />
            </Link>
          </div>
          <div
            className={`cursor-pointer transition-transform duration-500 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsArrowDownShort size={24} />
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-neutralLighter rounded-none">{children}</div>
      </div>
    </div>
  );
};
