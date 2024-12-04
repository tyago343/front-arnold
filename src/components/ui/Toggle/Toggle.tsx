interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

export const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <label className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
            checked ? "bg-green-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
            checked ? "transform translate-x-6" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};
