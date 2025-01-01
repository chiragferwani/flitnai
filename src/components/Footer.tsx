import InstaIcon from '../assets/icons/insta.svg';
import XSocial from '../assets/icons/x-social.svg';
import TikTokIcon from '../assets/icons/tiktok.svg';
import YoutubeIcon from '../assets/icons/youtube.svg';

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            © 2024 Chirag Ferwani
          </div>
          <ul className="flex justify-center gap-2.5">
           <a href='https://www.instagram.com/chiragferwani/'>
           <li>
              <InstaIcon />
            </li>
           </a>
           <a href='https://www.youtube.com/@chiragferwani'>
           <li>
              <YoutubeIcon />
            </li>
           </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};
