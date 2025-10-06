import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Agent = {
  image: StaticImport;
  name: string;
  phone: string;
};

export type HouseType = "house" | "apartment";

export type House = {
  id: string;
  type: HouseType;
  name: string;
  description: string;
  image: StaticImport;
  imageLg: StaticImport;
  country: "united states" | "canada";
  address: string;
  bedrooms: number;
  bathrooms: number;
  surface: number;
  year: number;
  price: number;
  agent: Agent;
};
