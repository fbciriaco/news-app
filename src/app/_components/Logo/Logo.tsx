import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link className="logo h-full" href="/">
      <Image
        src="/images/nb-logo.png"
        alt="Logo"
        objectFit="cover"
        width={60}
        height={40}
        className="h-full"
      />
    </Link>
  );
};
