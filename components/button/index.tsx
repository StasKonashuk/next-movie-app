import { FC, ChangeEvent } from "react";

interface ButtonProps {
  onClickHandler: () => void;
  value: string;
}

export const CustomButton: FC<ButtonProps> = ({ value }) => {
  return (
    <div className="relative w-full">
      <button className="px-3 py-3 bg-btn-bg-color text-black rounded-md w-full h-full hover:bg-btn-hover-bg-color transition font-semibold">
        {value}
      </button>
    </div>
  );
};
