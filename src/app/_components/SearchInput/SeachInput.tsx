"use client";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleAction = () => {
    if (!search) return;
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
        className="bg-light-shades pl-[12px] pr-[40px] p-2 rounded-[100px] w-full focus:border-0 focus:outline-none"
      />
      <button
        className="w-[20px] h-[20px] rounded-full absolute right-2 top-[10px]"
        onClick={handleClick}
      >
        <FaSearch />
      </button>
    </div>
  );
};
