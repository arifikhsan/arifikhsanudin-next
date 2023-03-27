import Head from 'next/head';
import Footer from '../shared/footer';
import Header from '../shared/header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Welcome to my Webiste | Arif Ikhsanudin</title>
        <meta name='description' content='Welcome to my website' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='max-w-5xl p-4 mx-auto'>{children}</div>
      <Footer />
    </div>
  );
}
