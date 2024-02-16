import Image from 'next/image';
import Link from 'next/link';
import { NextImage } from '@components/ui/next-image';

interface ImageProps {
  src: string;
  href: string;
}

export function Movie() {
  const images: ImageProps[] = [
   { src: '/assets/tv/movie/m.jpg', href: '/link1' },
   { src: '/assets/tv/movie/n.jpg', href: '/link1' },
   { src: '/assets/tv/movie/twtc.jpg', href: '/link1' }
    // Add more images as needed
  ];

  return (
    <div className='grid grid-cols-3 gap-4 px-3'>
      {images.map((image, index) => (
        <Link key={index} href={image.href}>
          <a className='relative h-64 overflow-hidden hover-animation transition rounded-lg'>
            <NextImage
              useSkeleton
              src={image.src}
              layout='fill'
              objectFit='cover'
              alt={`Grid Image ${index + 1}`}
            />
          </a>
        </Link>
      ))}
    </div>
  );
}
