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
import Image from 'next/image';
import { Movie } from '@components/tv/movie';

export default function Bookmarks(): JSX.Element {
  const { back } = useRouter();

  return (
    <MainContainer>
      <SEO title='Forest Witch | Aria+' />
      <MainHeader useActionButton title='Forest Witch' action={back}>
        <Button
          className='dark-bg-tab group relative ml-auto cursor-not-allowed p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'
        >
          <HeroIcon className='h-5 w-5' iconName='TicketIcon' />
          <ToolTip tip='Settings' />
        </Button>
      </MainHeader>

         <div className='flex flex-col items-center p-8'>

      <Image
        src='/assets/tv/movie/data/forestwitch/edr.png' // Update this with the path to your image
        alt='Ted Lasso'
        width={300}
        height={300}
        className='rounded-lg'
      />
      <h1 className='text-3xl font-bold mt-8 text-center'>Forest Witch</h1>
      <p className='text-gray-600 mt-4 text-center'>Comdey | 2024 | 1hr 40min | 4K</p>
          <Button
            className='accent-tab place-self-center self-center justify-self-center justify-center object-center items-center absolute right-4 bg-main-accent text-lg font-bold text-white
                       outline-none transition hover:brightness-90 active:brightness-75 xs:static xs:translate-y-0
                       xs:hover:bg-main-accent/90 xs:active:bg-main-accent/75 xl:w-11/12 '>Play</Button>
      <p className='text-gray-600 mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mollis ex a sodales. Quisque molestie massa quis dolor elementum rhoncus. Nullam scelerisque elementum elit, nec vestibulum augue luctus id. Aliquam et dolor non neque pulvinar sodales a nec mi. Morbi varius a erat in fermentum. Donec sed scelerisque purus. Integer sed libero sit amet erat aliquet facilisis in quis augue. Sed sollicitudin egestas fermentum. Integer sit amet tincidunt velit. Maecenas tincidunt justo at erat luctus feugiat. Pellentesque eget diam vitae elit ultrices ullamcorper. Aliquam tincidunt quam elit, ut interdum nisi maximus in. Donec eget enim feugiat, rutrum turpis sit amet, egestas tortor. Aenean lobortis finibus hendrerit. </p>
    </div>
   <Movie/>
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
