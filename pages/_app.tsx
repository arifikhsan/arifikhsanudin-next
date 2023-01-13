import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Red_Hat_Display } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const redHat = Red_Hat_Display({ subsets: ['latin'], variable: '--font-red-hat' });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`${redHat.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
