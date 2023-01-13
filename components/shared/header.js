import { HomeModernIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <div className='border-b border-green-500'>
      <div className='max-w-5xl px-4 py-6 mx-auto'>
        <div className='flex sm:flex-row sm:items-center justify-between'>
          <div>
            <HomeModernIcon className='h-8 w-8 text-green-500' />
          </div>
          <div className='sm:hidden'>
            <Bars3Icon className='h-8 w-8 text-green-500' />
          </div>
          <div className='hidden sm:flex text-md flex-row items-center space-x-4'>
            <a className='px-4 py-2'>Projects</a>
            <a className='px-4 py-2'>Blogs</a>
          </div>
        </div>
      </div>
    </div>
  );
}
