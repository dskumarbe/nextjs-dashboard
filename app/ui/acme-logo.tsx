import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-5 w-5" /> */}
      <img
  src="/Responsive_logo_White.png" className="hidden md:block h-15 w-15"
  alt="Responsive"
/>
      {/* <p className="text-[18px]">Responsive</p> */}
    </div>
  );
}
