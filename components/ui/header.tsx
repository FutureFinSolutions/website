import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import FeatImage04 from '@/public/images/features-03-image-04.jpeg'
export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
  <a href="/">
    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={40} height={40} alt="Features 01" />
  </a>
</div>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
          
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
