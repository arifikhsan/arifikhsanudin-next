import Head from 'next/head';
import Footer from '../shared/footer';
import Header from '../shared/header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Welcome to my website" />
      </Head>
      <Header />
      <div className='max-w-5xl mx-auto p-4'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
