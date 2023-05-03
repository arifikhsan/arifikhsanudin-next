import DefaultLayout from '../../components/layout/default-layout';
import { getProjects } from '../../repository/project-repository';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <DefaultLayout>
      <div className='sm:text-center'>
        <h1 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
          Projects
        </h1>
      </div>
      <div className='my-8 space-y-4'>
        <div className='grid md:grid-cols-3'>
          {projects.map((project) => {
            return (
              <div key={project.slug} className='relative'>
                <Link href={`/projects/${project.slug}`}>
                  <Image
                    src={project.displayImage.url}
                    alt={project.displayImage.title}
                    width={project.displayImage.width}
                    height={project.displayImage.height}
                    priority
                  />
                  <h1 className='mt-4 text-3xl font-black text-emerald-600'>
                    {project.name}
                  </h1>
                  <p className='mt-2 text-gray-700'>{project.body}</p>
                </Link>
                <Link href={project.link} target='_blank'>
                  <button className='px-4 py-2 mt-4 text-sm tracking-wider text-white uppercase rounded bg-emerald-600'>
                    demo
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const { data } = await getProjects();
  const projects = data.projectCollection.items;

  return {
    props: {
      projects,
    },
  };
}
