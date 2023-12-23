import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SuitMedia',
  description: 'Suitmedia test front end',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
