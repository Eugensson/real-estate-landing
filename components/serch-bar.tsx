"use client";

import { useContext } from "react";
import { RiSearch2Line } from "react-icons/ri";

import { HouseContext } from "@/components/house-context";
import { CountryDropdown } from "@/components/country-dropdown";
import { PropertyDropdown } from "@/components/property-dropdown";
import { PriceRangeDropdown } from "@/components/price-range-dropdown";

export const SearchBar = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="relative lg:-top-4 px-7.5 py-6 max-w-292.5 mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-x-3 lg:shadow-primary bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        type="button"
        onClick={handleClick}
        className="w-full lg:max-w-40.5 h-16 flex items-center justify-center rounded-lg btn-primary"
      >
        <RiSearch2Line size={18} />
      </button>
    </div>
  );
};
