import { HomeModernIcon, Bars3Icon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div className=''>
      {/* <div className='bg-gradient-to-r from-emerald-500 to-green-500'>
        <div className='p-1 text-center'>
        <p className='text-sm text-white'>Currently available for a freelance project</p>
        </div>
      </div> */}
      <div className='max-w-5xl px-4 py-6 mx-auto'>
        <div className='flex sm:flex-row sm:items-center justify-between'>
          <Link href='/'>
            <HomeModernIcon className='h-8 w-8 text-green-500' />
          </Link>
          <div className='sm:hidden'>
            <Bars3Icon className='h-8 w-8 text-green-500' />
          </div>
          <div className='hidden sm:flex text-md flex-row items-center space-x-4'>
            <Link href='/projects'>
              <div
                className={classNames(
                  'px-4 py-2 font-bold hover:text-green-500 transition duration-500',
                  { 'text-green-500': router.pathname.includes('projects') }
                )}>
                Projects
              </div>
            </Link>
            <Link href='/posts'>
              <div
                className={classNames(
                  'px-4 py-2 font-bold hover:text-green-500 transition duration-500',
                  { 'text-green-500': router.pathname.includes('posts') }
                )}>
                Blog Posts
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
