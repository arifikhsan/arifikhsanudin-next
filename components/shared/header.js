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
        <div className='flex justify-between sm:flex-row sm:items-center'>
          <Link href='/'>
            <HomeModernIcon className='w-8 h-8 text-green-500' />
          </Link>
          <div className='sm:hidden'>
            <Bars3Icon className='w-8 h-8 text-green-500' />
          </div>
          <div className='flex-row items-center hidden space-x-4 sm:flex text-md'>
            <Link href='/projects'>
              <div
                className={classNames(
                  'px-4 py-2 font-semibold hover:text-green-500 transition duration-500',
                  { 'text-green-500': router.pathname.includes('projects') }
                )}>
                Projects
              </div>
            </Link>
            <Link href='/posts'>
              <div
                className={classNames(
                  'px-4 py-2 font-semibold hover:text-green-500 transition duration-500',
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
