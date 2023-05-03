import DefaultLayout from '../../components/layout/default-layout';
import { getProject } from '../../repository/project-repository';
import client from '../../utils/apollo-client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export default function Project({ project }) {
  return (
    <DefaultLayout>
      <div className='my-12'>
        <div className='sm:text-center'>
          <h1 className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
            {project.title}
          </h1>
        </div>
        <div className='mt-12'>
          <div className='relative'>
            <Image
              src={project.displayImage.url}
              alt={project.displayImage.title}
              width={project.displayImage.width}
              height={project.displayImage.height}
              priority
            />
          </div>
          <div className='my-8'>
            <h1 className='text-5xl font-black text-emerald-600'>
              {project.name}
            </h1>
          </div>
          <div className='mt-8 prose'>
            {documentToReactComponents(project.body.json)}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await getProject(params.slug);
  const project = data.projectCollection.items[0];
  return { props: { project } };
}
