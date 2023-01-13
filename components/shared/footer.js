export default function Footer() {
  return (
    <div className='border-t border-green-400'>
      <div className='p-4 md:pt-8 md:pb-16 max-w-5xl mx-auto'>
        <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between'>
          <div>
            <h4 className='font-bold text-md'>Related Pages</h4>
            <div className='mt-3 space-y-1'>
              <p>Projects</p>
              <p>Blogs</p>
            </div>
          </div>
          <div>
            <h4 className='font-bold text-md'>Get in Touch</h4>
            <div className='mt-3 space-y-1'>
              <p>GitHub</p>
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
    </div>
  );
}
