import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Montserrat } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`${montserrat.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
