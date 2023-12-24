import { Inter } from 'next/font/google';
import '../app/styles/globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SuitMedia - Gustam',
  description: 'Suitmedia test front end Gustam Rheza Mahendra',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
