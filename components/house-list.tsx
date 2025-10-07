"use client";

import { useContext } from "react";
import { ImSpinner2 } from "react-icons/im";

import { HouseCard } from "@/components/house-card";
import { HouseContext } from "@/components/house-context";

export const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading)
    return (
      <ImSpinner2
        size={36}
        className="mx-auto mt-50 text-violet-700 animate-spin"
      />
    );

  if (houses.length < 1)
    return (
      <div className="mt-48 text-3xl text-center text-gray-400">
        Sorry, nothing found.
      </div>
    );

  return (
    <section className="mb-20">
      <div className="container">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {houses.map((house) => (
            <li key={house.id}>
              <HouseCard house={house} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
