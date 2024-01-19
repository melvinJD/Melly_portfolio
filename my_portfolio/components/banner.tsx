import React from "react";
import Image from "next/image";
import { useTheme } from "../context/theme-context";
import darkModeBanner from "../public/lightBanner.png";
import lightModeBanner from "../public/darkBanner.png";

export default function Banner() {
  const { theme } = useTheme();

  const imageSrc = theme === 'light' ? lightModeBanner : darkModeBanner;

  return (
    <section>
      <div className='banner'>
        <div className='banner-content'>
          <Image
           src={imageSrc}
           alt='Melissa Thornley, full stack developer banner'
           className="banner-img" />
        </div>
      </div>
    </section>
  );
}
