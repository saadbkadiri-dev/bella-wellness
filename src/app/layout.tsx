import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bella Wellness | A community of women thriving in wellness',
  description:
    'Nestled in the serene Ohana Hills of Beirut, Bella Wellness is an exclusive sanctuary designed entirely for women to move, heal, and glow.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased font-sans bg-[#F6F3EF] text-[#0C0D0D] selection:bg-[#8C8275]/20 selection:text-[#0C0D0D]">
        <SmoothScrollProvider>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
