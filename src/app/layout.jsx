import AuthProvider from '@/components/AuthProvider/AuthProvider';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import { ThemeProdiver } from '@/context/ThemeContext';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ALexxLen',
  description: 'Portfolio website example'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProdiver>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProdiver>
      </body>
    </html>
  );
}
