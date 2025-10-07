"use client";

import { createContext, useEffect, useState } from "react";

import { House } from "@/types";
import { housesData } from "@/lib/data";

export const HouseContext = createContext({
  houses: [] as House[],
  country: "All locations",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCountry: (country: string) => {},
  countries: [] as string[],
  property: "All properties type",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setProperty: (property: string) => {},
  properties: [] as string[],
  price: "All price ranges",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPrice: (price: string) => {},
  loading: false,
  handleClick: () => {},
});

export const HouseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [houses, setHouses] = useState<House[]>(housesData);
  const [country, setCountry] = useState("All locations");
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState("All properties type");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState("All price ranges");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ["All locations", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ["All properties type", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (value: string) => value.startsWith("All");

    const [min, max] = price.match(/\d+/g)?.map(Number) || [0, Infinity];

    const newHouses = housesData.filter((house) => {
      const matchCountry = isDefault(country) || house.country === country;
      const matchProperty = isDefault(property) || house.type === property;
      const matchPrice = house.price >= min && house.price <= max;

      return matchCountry && matchProperty && matchPrice;
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};
