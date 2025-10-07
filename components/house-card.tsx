import Link from "next/link";
import Image from "next/image";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { House } from "@/types";

interface HouseCardProps {
  house: House;
}

export const HouseCard = ({ house }: HouseCardProps) => {
  return (
    <Link href={`/property/${house.id}`}>
      <article className="p-5 w-full max-w-88 mx-auto bg-white rounded-lg shadow-primary rounded-tl-[90px] hover:shadow-2xl transition-shadow">
        <Image
          src={house.image}
          alt={house.name}
          width={300}
          height={400}
          className="mb-8 w-full h-full object-cover"
        />
        <div className="mb-4 flex gap-2 text-sm">
          <p className="px-3 bg-green-500 rounded-full text-white capitalize">
            {house.type}
          </p>
          <p className="px-3 bg-violet-500 rounded-full text-white capitalize">
            {house.country}
          </p>
        </div>
        <p className="max-w-65 text-lg font-semibold">{house.address}</p>
        <ul className="my-4 flex items-center gap-4">
          <li className="flex items-center gap-1 text-gray-600">
            <BiBed size={22} />
            <p>{house.bedrooms}</p>
          </li>
          <li className="flex items-center gap-1 text-gray-600">
            <BiBath size={22} />
            <p>{house.bathrooms}</p>
          </li>
          <li className="flex items-center gap-1 text-gray-600">
            <BiArea size={22} />
            <p>{house.surface} sq. ft</p>
          </li>
        </ul>
        <p className="mb-4 text-lg font-semibold text-violet-600">
          $ {house.price}
        </p>
      </article>
    </Link>
  );
};
