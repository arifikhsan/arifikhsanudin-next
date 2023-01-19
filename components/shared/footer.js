import Link from 'next/link';

export default function Footer() {
  return (
    <div className=''>
      <div className='p-4 md:pt-8 md:pb-16 max-w-5xl mx-auto'>
        <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between'>
          <div>
            <h4 className='font-bold text-md'>Related Pages</h4>
            <div className='mt-3 space-y-1'>
              <p>Projects</p>
              <Link href='/posts' className='block'>
                <p>Blog Posts</p>
              </Link>
            </div>
          </div>
          <div>
            <h4 className='font-bold text-md'>Get in Touch</h4>
            <div className='mt-3 space-y-1'>
              <a
                className='block'
                href='https://www.github.com/arifikhsan'
                target='_blank'
                rel='noreferrer'>
                GitHub
              </a>
              <a
                className='block'
                href='https://www.linkedin.com/in/arif-ikhsanudin'
                target='_blank'
                rel='noreferrer'>
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className='font-bold text-md'>Popular Blogs</h4>
            <div className='mt-3 space-y-1'>
              <p>How to tailwindcss</p>
              <p>Deploy to vps</p>
            </div>
          </div>
          <div>
            <h4 className='font-bold text-md'>Popular Blogs</h4>
            <div className='mt-3 space-y-1'>
              <p>How to tailwindcss</p>
              <p>Deploy to vps</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-r from-emerald-500 to-green-500'>
        <div className='p-4 max-w-5xl mx-auto'>
          <p className='text-center text-white'>@2023</p>
        </div>
      </div>
    </div>
  );
}
