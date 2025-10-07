"use client";

import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { useContext, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { HouseContext } from "@/components/house-context";

import { pricesData } from "@/lib/data";

export const PriceRangeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { price, setPrice } = useContext(HouseContext);

  return (
    <Menu as="div" className="relative dropdown">
      <MenuButton
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <p className="text-[15px] font-medium leading-tight capitalize">
            {price}
          </p>
          <p className="text-[13px]">Choose price range</p>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </MenuButton>
      <MenuItems as="ul" className="dropdown-menu">
        {pricesData.map(({ value, label }) => (
          <MenuItem
            as="li"
            key={value}
            onClick={() => setPrice(value)}
            className="cursor-pointer hover:text-violet-700 transition-colors capitalize"
          >
            {label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
