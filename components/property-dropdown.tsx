"use client";

import { useContext, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { HouseContext } from "@/components/house-context";

export const PropertyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { property, setProperty, properties } = useContext(HouseContext);

  return (
    <Menu as="div" className="relative dropdown">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <p className="text-[15px] font-medium leading-tight capitalize">
            {property}
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
        {properties.map((property) => (
          <MenuItem
            as="li"
            key={property}
            onClick={() => setProperty(property)}
            className="cursor-pointer hover:text-violet-700 transition-colors capitalize"
          >
            {property}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
