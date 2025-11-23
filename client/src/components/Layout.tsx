import React from 'react';
// import FallingFlower from './FallingFlower';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoHead from '@/components/SeoHead';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {/* Falling Flowers Animation Style */}
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Generate multiple falling flowers on all pages */}
      {/* {[...Array(15)].map((_, i) => (
        <FallingFlower key={i} delay={i * 0.3} duration={10} />
      ))} */}
      <SeoHead />
  
      {/* The Header will be updated in a later phase to use wouter's useLocation for active link */}
      <Header />
      <main className="flex-1 bg-1 relative z-10 bg-image
      ">
        {children}
      </main>
      <Footer />
    </div>
  );
}
