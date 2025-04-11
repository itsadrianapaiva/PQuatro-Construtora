import Image from "next/image";
import Link from "next/link";

const Logo = ({ width = 100, height = 100 }) => {
  return (
    <Link href="">
      <Image src="/assets/logo.png" width={width} height={height} alt="logo" />
    </Link>
  );
};

export default Logo;
