import React from 'react';
import Navbar from '@/components/navbar';
import './globals.css';

export const metadata = {
  title: 'Company Profile',
  description: 'Simple Next.js Company Profile',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <Navbar />
        <main
          style={{
            maxWidth: '1200px',
            width: '100%',
            boxSizing: 'border-box',
            margin: '0 auto',
            padding: '20px',
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
