import '../styles/nextjs-bundle.css'; // The mega CSS file we made!
import Preloader from '@/components/global/Preloader';
import HeaderTop from '@/components/global/HeaderTop';
import Header from '@/components/global/Header';
import OffcanvasMenu from '@/components/global/OffcanvasMenu';
import SearchModal from '@/components/global/SearchModal';
import Footer from '@/components/global/Footer';
import FooterBottom from '@/components/global/FooterBottom';
import BackToTop from '@/components/global/BackToTop';
import MouseCursor from '@/components/global/MouseCursor';
import GsapInit from '@/components/global/GsapInit';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GsapInit />
        <MouseCursor />
        <Preloader />
        <OffcanvasMenu />
        <SearchModal />
        
        <div style={{ position: 'sticky', top: 0, zIndex: 99999 }}>
            {/* <HeaderTop /> */}
            <Header />
        </div>
        
        {/* This is where your page.tsx content goes */}
        {children} 
        
        <Footer />
        <FooterBottom />
        <BackToTop />
      </body>
    </html>
  );
}
