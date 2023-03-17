import { FC, ChangeEvent } from "react";

interface InputProps {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

export const CustomInput: FC<InputProps> = ({
  id,
  onChange,
  label,
  type,
  value,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="block rounded-md px-6 py-6 w-full text-white bg-input-bg-color appearance-none focus:outline-none focus:ring-0 peer"
        placeholder=" "
      />
      <label
        className="absolute text-sm text-main-text-color duration-300 transform -translate-y-1 scale-75 top-2 z-10 origin-[0] pl-7 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:pl-5  peer-placeholder-shown:top-1/2  peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-1 peer-focus:translate-x-5 left-1"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
