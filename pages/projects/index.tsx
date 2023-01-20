import DefaultLayout from '../../components/layout/default-layout';

export default function Projects({ posts }) {
  return (
    <DefaultLayout>
      <div className='sm:text-center'>
        <h1 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
          Projects
        </h1>
      </div>
      <div className='my-8 space-y-4'></div>
      </DefaultLayout>
  );
}
