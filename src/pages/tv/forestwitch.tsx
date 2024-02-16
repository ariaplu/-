import { useRouter } from 'next/router';
import {
  TrendsLayout,
  ProtectedLayout
} from '@components/layout/common-layout';
import { MainLayout } from '@components/layout/main-layout';
import { SEO } from '@components/common/seo';
import { MainHeader } from '@components/home/main-header';
import { MainContainer } from '@components/home/main-container';
import { AsideTrends } from '@components/aside/aside-trends';
import { Button } from '@components/ui/button';
import { ToolTip } from '@components/ui/tooltip';
import { HeroIcon } from '@components/ui/hero-icon';
import type { ReactElement, ReactNode } from 'react';
import { NextImage } from '@components/ui/next-image';

export default function Bookmarks(): JSX.Element {
  const { back } = useRouter();

  return (
    <MainContainer>
      <SEO title='Trends | Aria+' />
      <MainHeader useActionButton title='Trends' action={back}>
        <Button
          className='dark-bg-tab group relative ml-auto cursor-not-allowed p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
        >
          <HeroIcon className='h-5 w-5' iconName='Cog8ToothIcon' />
          <ToolTip tip='Settings' />
        </Button>
      </MainHeader>
       <NextImage className='accent-tab relative mt-0.5 h-36 xs:h-48 sm:h-52 h-full w-full rounded-none p-0 transition hover:brightness-75'
            useSkeleton
            layout='fill'
            imgClassName='object-cover'
            src='/assets/orange.jpg'
            alt=''
            key=''
          />
       <div className='p-4'>
        <p className='mb-4 text-gray-600'>This is a test des</p>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>PLay</button>

      </div>
    </MainContainer>
  );
}

Bookmarks.getLayout = (page: ReactElement): ReactNode => (
  <ProtectedLayout>
    <MainLayout>
      <TrendsLayout>{page}</TrendsLayout>
    </MainLayout>
  </ProtectedLayout>
);
