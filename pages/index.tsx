import DefaultLayout from '../components/layout/default-layout';

export default function Home() {
  return (
    <DefaultLayout>
      <div className='py-16 font-display md:pt-32 md:pb-36 md:text-center'>
        <h1 className='text-3xl font-black'>
          Hello, my name is <span className='text-green-500'>Arif</span>
        </h1>
        <p className='mt-4 text-5xl font-black leading-tight'>
          I am a{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
            Software Engineer
          </span>
        </p>
        <a
          target='_blank'
          href='/CV_Arif Ikhsanudin_March 2023_compressed.pdf'
          className='inline-block px-4 py-2 mt-4 font-semibold text-white transition duration-500 bg-gradient-to-r from-emerald-500 to-green-500 hover:font-bold'>
          View Curriculum Vitae
        </a>
      </div>
    </DefaultLayout>
  );
}
