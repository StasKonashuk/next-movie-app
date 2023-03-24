import { FC, ChangeEvent } from "react";

interface SearchInputProps {
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  id,
  onChange,
  label,
  type,
  value,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-search-input-text-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={onChange}
          value={value}
          type={type}
          id={id}
          className="block w-full p-4 pl-10 text-sm text-search-input-text-color border border-search-input-border-color rounded-lg bg-navbar-bg-color focus:border-search-input-border-color focus:outline-0"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-btn-bg-color hover:bg-btn-hover-bg-color focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          {label}
        </button>
      </div>
    </div>
  );
};
