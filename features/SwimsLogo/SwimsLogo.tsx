import React, { FC } from 'react';
import Image from 'next/image';

interface SwimsLogoProps {}

const SwimsLogo: FC<SwimsLogoProps> = () => (
  <div
    className="flex flex-col p-4 justify-center items-center"
    data-testid="SwimsLogo"
  >
    <Image
      width={100}
      height={100}
      src="/USASwimmingLogo.svg"
      alt="Swims USA Shield Logo"
    />
  </div>
);

export default SwimsLogo;
