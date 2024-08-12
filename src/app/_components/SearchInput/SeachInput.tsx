"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleAction = () => {
    console.log(search);
    router.push("/search?q=" + search);
    setSearch("");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAction();
    }
  };

  const handleClick = () => {
    handleAction();
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Pesquisar"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="bg-light-shades pl-[10px] pr-[40px] p-2 rounded-[100px] w-full focus:border-0 focus:outline-none"
      />
      <button
        className="w-[20px] h-[20px] bg-gray-200 rounded-full absolute right-2 top-[8px]"
        onClick={handleClick}
      >
        S
      </button>
    </div>
  );
};
