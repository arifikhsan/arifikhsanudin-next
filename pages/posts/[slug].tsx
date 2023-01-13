import DefaultLayout from '../../components/layout/default-layout';
export default function Post() {
  return (
    <DefaultLayout>
      <div className='sm:text-center'>
        <h1 className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
          Blog Post
        </h1>
      </div>
    </DefaultLayout>
  );
}
