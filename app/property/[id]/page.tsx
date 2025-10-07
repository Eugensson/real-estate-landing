import Link from "next/link";
import Image from "next/image";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { housesData } from "@/lib/data";

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

const PropertyDetailsPage = async ({ params }: PropertyDetailsPageProps) => {
  const { id } = await params;

  const house = housesData.find((house) => house.id === id);

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <section>
      <div className="mb-14 container min-h-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <p className="mb-4 text-lg">{house.address}</p>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <p className="px-3 bg-green-500 rounded-full text-white capitalize">
              {house.type}
            </p>
            <p className="px-3 bg-violet-500 rounded-full text-white capitalize">
              {house.country}
            </p>
          </div>
          <p className="text-3xl font-semibold text-violet-600">
            $ {house.price}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="max-w-192">
            <div className="mb-8">
              <Image
                src={house.imageLg}
                alt={house.name}
                width={768}
                height={500}
              />
            </div>
            <ul className="mb-6 flex items-center gap-x-6 text-violet-700">
              <li className="flex items-center gap-x-2">
                <BiBed size={24} />
                <p>{house.bedrooms}</p>
              </li>
              <li className="flex items-center gap-x-2">
                <BiBath size={24} />
                <p>{house.bathrooms}</p>
              </li>
              <li className="flex items-center gap-x-2">
                <BiArea size={24} />
                <p>{house.surface} sq. ft</p>
              </li>
            </ul>
            <p>{house.description}</p>
          </div>
          <div className="px-6 py-8 flex-1 w-full mb-8 border border-gray-300 rounded-lg">
            <div className="mb-8 flex items-center gap-x-4">
              <div className="p-1 size-20 border border-gray-300 rounded-full">
                <Image
                  src={house.agent.image}
                  alt={house.agent.name}
                  width={143}
                  height={143}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{house.agent.name}</h3>
                <Link href="/" className="text-sm text-violet-700 capitalize">
                  View listings
                </Link>
              </div>
            </div>
            <form className="flex flex-col gap-y-4">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
                className="input"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="Email*"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                className="input"
                placeholder="Phone*"
              />
              <textarea
                name="message"
                id="message"
                className="textarea"
                placeholder="Hello, I am interested in [Modern apartment]"
              />
              <div className="flex gap-x-2">
                <button
                  type="button"
                  className="p-4 w-full text-sm rounded btn-primary"
                >
                  Send message
                </button>
                <button
                  type="button"
                  className="p-4 w-full rounded text-violet-700 border border-violet-700 hover:text-violet-500 hover:border-violet-500 transition-colors duration-300 cursor-pointer"
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsPage;
