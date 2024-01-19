import Image from 'next/image';
import React from 'react';
import MelissaImageDark from '../public/Melissa Image B&W.png';
import MelissaImageLight from '../public/MelissaImageLight colour.png';
import { useSectionInView } from '../lib/hooks';
import { useTheme} from '../context/theme-context';

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { theme } = useTheme();

  const imageSrc = theme === 'light' ? MelissaImageLight : MelissaImageDark;
  const altText = 'Photo of Melissa Thornley';

  return (
    <section ref={ref}>
      <div>
        <div>
          <Image src={imageSrc} alt={altText} width={192} height={192} quality={95} />
        </div>
        <div className="mb-2 p-4 text-left padding 3px">
          <p className="mb-2 align-bottom">Hi, my name is Melissa, Full Stack Developer<br/>Labrador mum, based in Rutland.</p>
        </div>
        <div className="flex flex-col center gap-4">
          <a
            className="bg-dark grey bg-opacity-50 border border-white border-opacity-50 shadow-lg rounded-lg backdrop-blur-sm p-4"
            href="public/Melissa_Thornley_Developer_CV.pdf"