import Image from "next/image";

export default function TopLogo() {
  return <div
    className="absolute top-0 mt-4 w-24 h-24"
  >
    <Image
      src={"/Utils/Images/logo.png"}
      fill
      alt="logo"
    />
  </div>;
}