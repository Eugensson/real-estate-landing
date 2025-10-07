import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/logo.svg"
        alt="HomeLand's logo"
        width={150}
        height={30}
        className="w-full h-full object-contain"
      />
    </Link>
  );
};
