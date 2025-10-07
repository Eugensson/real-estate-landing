"use client";

import { useContext, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { HouseContext } from "@/components/house-context";

export const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { country, setCountry, countries } = useContext(HouseContext);

  return (
    <Menu as="div" className="relative dropdown">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <p className="text-[15px] font-medium leading-tight capitalize">
            {country}
          </p>
          <p className="text-[13px]">Select your place</p>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </MenuButton>
      <MenuItems as="ul" className="dropdown-menu">
        {countries.map((country) => (
          <MenuItem
            as="li"
            key={country}
            onClick={() => setCountry(country)}
            className="cursor-pointer hover:text-violet-700 transition-colors capitalize"
          >
            {country}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
