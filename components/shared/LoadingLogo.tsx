import Image from "next/image";

type Props = {
  size?: number;
};

const LoadingLogo = ({ size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image
        src="/logo.png"
        width={size}
        height={size}
        alt="Loading"
        className="animate-pulse duration-100"
      />
    </div>
  );
};

export default LoadingLogo;
