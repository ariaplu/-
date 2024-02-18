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
import { MovieCard } from '@components/tv/movie-card';

const { back } = useRouter();
  
const HomePage = (): ReactElement => {

  const MovieCardData = {
    title: 'Forest Witch',
    description: 'An upcoming psychological horror thriller film directed by Radhesh Aria.',
    director: 'Radhesh Aria',
    ageRating: '16+',
    caution: 'A Horror Thriller like no other. Viewer discretion is advised.',
  }
  
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
      
    <div className='flex flex-col items-center p-8 bg-no-repeat bg-top bg-contain' style={{ backgroundImage: 'url(/assets/tv/movie/data/forestwitch/jl.jpg)' }}>

       <NextImage
        src='/assets/tv/movie/data/forestwitch/fw.png' // Update this with the path to your image
        alt='4K'
        width={250}
        height={125}
        className=' mt-60 rounded-lg'
               />
      <div className='flex'>
       <Button className='dark-bg-tab group relative ml-auto p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'>
             <Image
        src='/assets/ariaplus.svg' // Update this with the path to your image
        alt='4K'
        width={20}
        height={20}
        className='rounded-lg'
               />
      </Button>
       <Button className='dark-bg-tab group relative ml-auto p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'>
             <Image
        src='/assets/ariaplus.svg' // Update this with the path to your image
        alt='4K'
        width={20}
        height={20}
        className='rounded-lg'
               />
      </Button>
      <Button className='dark-bg-tab group relative ml-auto p-2 hover:bg-light-primary/10
                     active:bg-light-primary/20 dark:hover:bg-dark-primary/10 dark:active:bg-dark-primary/20'>
             <Image
        src='/assets/ariaplus.svg' // Update this with the path to your image
        alt='4K'
        width={20}
        height={20}
        className='rounded-lg'
               />
      </Button>
           </div>
      <p className='text-gray-600 mt-4 text-center'>Comdey | 2024 | 1hr 40min | 4K</p>
      <Button
    className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 w-96 rounded-lg'>Play</Button>
      <p className='text-gray-600 mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus mollis ex a sodales. Quisque molestie massa quis dolor elementum rhoncus. Nullam scelerisque elementum elit, nec vestibulum augue luctus id. Aliquam et dolor non neque pulvinar sodales a nec mi. Morbi varius a erat in fermentum. Donec sed scelerisque purus. Integer sed libero sit amet erat aliquet facilisis in quis augue. Sed sollicitudin egestas fermentum. Integer sit amet tincidunt velit. Maecenas tincidunt justo at erat luctus feugiat. Pellentesque eget diam vitae elit ultrices ullamcorper. Aliquam tincidunt quam elit, ut interdum nisi maximus in. Donec eget enim feugiat, rutrum turpis sit amet, egestas tortor. Aenean lobortis finibus hendrerit. </p>
    </div>
      <MovieCard {...MovieCardData} />
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
