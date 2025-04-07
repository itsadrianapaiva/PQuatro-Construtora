import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="">
      <Image src="/assets/logo.png" width={100} height={10} alt="logo" />
    </Link>
  );
};

export default Logo;
