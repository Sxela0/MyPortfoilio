import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/Component/Header/Header';
import Footer from '@/Component/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
