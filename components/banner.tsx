import Image from "next/image";

import { SearchBar } from "@/components/serch-bar";

export const Banner = () => {
  return (
    <section className="mb-8 xl:mb-24 h-full max-h-160">
      <div className="flex flex-col lg:flex-row">
        <div className="px-4 lg:px-0 lg:ml-8 xl:ml-33.75 flex flex-col items-center lg:items-start justify-center flex-1 text-center lg:text-left">
          <h1 className="mb-6 text-4xl lg:text-6xl font-semibold leading-none capitalize">
            <span className="text-violet-700">Rent</span> your dream house with
            us.
          </h1>
          <p className="mb-8 max-w-120 xl:text-lg">
            Find modern homes and stylish apartments in the best neighborhoods.
            Discover great deals, trusted listings, and start living your dream
            lifestyle with HomeLand today.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex items-end justify-end">
          <Image
            priority
            src="/assets/house-banner.png"
            width={705}
            height={646}
            alt="banner"
          />
        </div>
      </div>
      <SearchBar />
    </section>
  );
};
