import { useState } from "react";

interface ToggleProps {
  checked?: boolean;
  name?: string;
}

interface ToggleProps {
  checked?: boolean;
  name?: string;
  onText?: string;
  offText?: string;
}

export const Toggle = ({
  checked = false,
  name,
  onText = "On",
  offText = "Off",
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  function handleClick() {
    setIsChecked((prevValue) => !prevValue);
  }
  return (
    <label className="flex items-center space-x-2">
      <span>{isChecked ? onText : offText}</span>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          name={name}
          defaultChecked={isChecked}
          onClick={handleClick}
        />
        <div
          className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
            isChecked ? "bg-green-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
            isChecked ? "transform translate-x-6" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};
