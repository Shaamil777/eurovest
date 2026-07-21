import './globals.css';
import '../styles/nextjs-bundle.css'; // The mega CSS file we made!
import dynamic from 'next/dynamic';
import Header from '@/components/global/Header';

const Preloader = dynamic(() => import('@/components/global/Preloader'));
const OffcanvasMenu = dynamic(() => import('@/components/global/OffcanvasMenu'));
const SearchModal = dynamic(() => import('@/components/global/SearchModal'));
import Footer from '@/components/global/Footer';
import MouseCursor from '@/components/global/MouseCursor';
import Providers from '@/components/global/Providers';
import PageReveal from '@/components/global/PageReveal';
import SmoothScroll from '@/components/global/SmoothScroll';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <SmoothScroll>
          <Providers>
            <MouseCursor />
            <Preloader />
            
            <PageReveal>
              <OffcanvasMenu />
              <SearchModal />
              
              <div style={{ position: 'sticky', top: 0, zIndex: 99999 }}>
                  <Header />
              </div>
              
              {/* This is where your page.tsx content goes */}
              {children} 
              
              <Footer />
            </PageReveal>
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
