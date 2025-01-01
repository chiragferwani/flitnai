'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import acmeLogo from '../assets/images/langflow.png';
import quantumLogo from '../assets/images/datastax.png';
import echoLogo from '../assets/images/astra.png';
import celestialLogo from '../assets/images/openai.png';
import pulseLogo from '../assets/images/groq.png';
import apexLogo from '../assets/images/nvdia.png';

const images = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: celestialLogo, alt: 'Celestial Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
        &apos;Simplifying insights Amplifying impact&apos;
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:z-10 before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <motion.div
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-50%' }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};