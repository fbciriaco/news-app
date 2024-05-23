import Image from "next/image";

export const Logo = () => {
  return (
    <div className="logo h-full">
      <Image
        src="/images/nb-logo.png"
        alt="Logo"
        objectFit="cover"
        width={60}
        height={40}
        className="h-full"
      />
    </div>
  );
};
