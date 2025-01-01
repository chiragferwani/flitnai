import Image from 'next/image';
import logoImage from '../assets/images/flintfinal.png';
import MenuIcon from '../assets/icons/menu.svg';

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={logoImage} alt="Logo" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="flex gap-6 items-center hidden sm:flex">
            <a
              href="#about"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#features"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#interface"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Interface
            </a>
            <a
              href="#help"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a href='https://github.com/chiragferwani/flint'>
            <button className="bg-white py-2 px-4 rounded-lg">
              Download Now
            </button>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
